import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

interface SubmittedAnswer {
  questionId: string;
  selectedOption: string | null;
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { attemptId, answers } = (await req.json()) as {
      attemptId: string;
      answers: SubmittedAnswer[];
    };

    if (!attemptId) {
      return NextResponse.json({ error: 'Attempt ID is required' }, { status: 400 });
    }

    const attempt = await prisma.attempt.findUnique({
      where: { id: attemptId },
      include: {
        test: {
          include: {
            questions: true,
          },
        },
      },
    });

    if (!attempt) {
      return NextResponse.json({ error: 'Attempt not found' }, { status: 404 });
    }

    const questionsMap = new Map(attempt.test.questions.map((q) => [q.id, q]));
    const answerRecordsToCreate = [];

    let score = 0;
    let correctCount = 0;
    let wrongCount = 0;
    let skippedCount = 0;

    for (const q of attempt.test.questions) {
      const studentAns = answers?.find((a) => a.questionId === q.id);
      const selectedOpt = studentAns?.selectedOption || null;

      let isCorrect = false;
      let isSkipped = false;

      if (!selectedOpt) {
        isSkipped = true;
        skippedCount++;
      } else if (selectedOpt === q.correctOption) {
        isCorrect = true;
        correctCount++;
        score += attempt.test.marksPerQuestion;
      } else {
        wrongCount++;
      }

      answerRecordsToCreate.push({
        attemptId: attempt.id,
        questionId: q.id,
        selectedOption: selectedOpt,
        isCorrect,
        isSkipped,
      });
    }

    // Delete any existing answers for this attempt if resubmitting
    await prisma.attemptAnswer.deleteMany({
      where: { attemptId: attempt.id },
    });

    // Create all attempt answers
    await prisma.attemptAnswer.createMany({
      data: answerRecordsToCreate,
    });

    // Update attempt
    const updatedAttempt = await prisma.attempt.update({
      where: { id: attempt.id },
      data: {
        score,
        correctCount,
        wrongCount,
        skippedCount,
        submittedAt: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      attemptId: updatedAttempt.id,
      score: updatedAttempt.score,
      correctCount: updatedAttempt.correctCount,
      wrongCount: updatedAttempt.wrongCount,
      skippedCount: updatedAttempt.skippedCount,
      redirectUrl: `/test/${attempt.testId}/result/${attempt.id}`,
    });
  } catch (error) {
    console.error('Error submitting test attempt:', error);
    return NextResponse.json({ error: 'Failed to submit test attempt' }, { status: 500 });
  }
}
