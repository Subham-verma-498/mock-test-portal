import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { testId } = await req.json();
    if (!testId) {
      return NextResponse.json({ error: 'Test ID is required' }, { status: 400 });
    }

    let user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email: session.user.email,
          name: session.user.name || 'Student Candidate',
          image: session.user.image,
        },
      });
    }

    // Find test by ID or fallback to category query if demo ID passed
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

    if (!test) {
      // Check category match fallback
      const category = testId.includes('tech') ? 'Technical' : 'Aptitude';
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
      return NextResponse.json({ error: 'Test or questions not found in database. Please seed the DB.' }, { status: 404 });
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
  } catch (error) {
    console.error('Error starting test attempt:', error);
    return NextResponse.json({ error: 'Failed to start test attempt' }, { status: 500 });
  }
}
