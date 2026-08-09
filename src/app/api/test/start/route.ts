import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    let userEmail = session?.user?.email;

    if (!userEmail) {
      if (process.env.ENABLE_DEMO_AUTH === 'true') {
        userEmail = 'student@demo.com';
      } else {
        return NextResponse.json({ error: 'Unauthorized. Please sign in to start the exam.' }, { status: 401 });
      }
    }

    const { testId, attemptId } = await req.json();
    if (!testId && !attemptId) {
      return NextResponse.json({ error: 'Test ID or Attempt ID is required' }, { status: 400 });
    }

    // 1. Check if attemptId was passed and already exists in database to avoid duplicate attempt creation
    if (attemptId) {
      const existingAttempt = await prisma.attempt.findUnique({
        where: { id: attemptId },
        include: {
          test: {
            include: {
              questions: {
                select: {
                  id: true,
                  questionText: true,
                  optionA: true,
                  optionB: true,
                  optionC: true,
                  optionD: true,
                  topicTag: true,
                },
              },
            },
          },
        },
      });

      if (existingAttempt && existingAttempt.test.questions.length > 0) {
        return NextResponse.json({
          attemptId: existingAttempt.id,
          test: {
            id: existingAttempt.test.id,
            title: existingAttempt.test.title,
            category: existingAttempt.test.category,
            totalQuestions: existingAttempt.test.questions.length,
            timePerQuestion: existingAttempt.test.timePerQuestion,
            questions: existingAttempt.test.questions,
          },
        });
      }
    }

    let user = await prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email: userEmail,
          name: session?.user?.name || userEmail.split('@')[0].toUpperCase(),
          image: session?.user?.image || null,
        },
      });
    }

    // Find test by ID or fallback to category query
    let test = await prisma.test.findUnique({
      where: { id: testId },
      include: {
        questions: {
          select: {
            id: true,
            questionText: true,
            optionA: true,
            optionB: true,
            optionC: true,
            optionD: true,
            topicTag: true,
          },
        },
      },
    });

    if (!test || test.questions.length === 0) {
      // Check category match fallback
      const category = (testId.includes('tech') || testId.toLowerCase().includes('technical')) ? 'Technical' : 'Aptitude';
      test = await prisma.test.findFirst({
        where: { category },
        include: {
          questions: {
            select: {
              id: true,
              questionText: true,
              optionA: true,
              optionB: true,
              optionC: true,
              optionD: true,
              topicTag: true,
            },
          },
        },
      });
    }

    if (!test || test.questions.length === 0) {
      // Final fallback to any available test in DB
      test = await prisma.test.findFirst({
        include: {
          questions: {
            select: {
              id: true,
              questionText: true,
              optionA: true,
              optionB: true,
              optionC: true,
              optionD: true,
              topicTag: true,
            },
          },
        },
      });
    }

    if (!test || test.questions.length === 0) {
      return NextResponse.json({ error: 'No test questions found in database. Please contact admin.' }, { status: 404 });
    }

    // Create a new Attempt record
    const attempt = await prisma.attempt.create({
      data: {
        userId: user.id,
        testId: test.id,
        startedAt: new Date(),
      },
    });

    return NextResponse.json({
      attemptId: attempt.id,
      test: {
        id: test.id,
        title: test.title,
        category: test.category,
        totalQuestions: test.questions.length,
        timePerQuestion: test.timePerQuestion,
        questions: test.questions,
      },
    });
  } catch (error: any) {
    console.error('Error starting test attempt:', error);
    return NextResponse.json(
      { error: 'Failed to start test attempt', details: error?.message || String(error) },
      { status: 500 }
    );
  }
}
