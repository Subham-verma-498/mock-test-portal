import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const dbUser = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!dbUser) {
      return NextResponse.json({
        stats: { totalAttempts: 0, avgScore: 0, highestScore: 0, totalCorrect: 0 },
        attempts: [],
      });
    }

    const attempts = await prisma.attempt.findMany({
      where: {
        userId: dbUser.id,
        submittedAt: { not: null },
      },
      include: {
        test: {
          select: { title: true, category: true, totalQuestions: true, marksPerQuestion: true },
        },
      },
      orderBy: { startedAt: 'desc' },
    });

    const totalAttempts = attempts.length;
    const highestScore = attempts.reduce((max, a) => Math.max(max, a.score), 0);
    const avgScore = totalAttempts > 0
      ? Math.round(attempts.reduce((sum, a) => sum + a.score, 0) / totalAttempts)
      : 0;

    return NextResponse.json({
      stats: {
        totalAttempts,
        avgScore,
        highestScore,
      },
      attempts,
    });
  } catch (error) {
    console.error('Error fetching user history:', error);
    return NextResponse.json({ error: 'Failed to fetch user history' }, { status: 500 });
  }
}
