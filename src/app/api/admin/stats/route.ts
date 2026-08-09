import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { Role } from '@prisma/client';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || session.user.role !== Role.ADMIN) {
      return NextResponse.json({ error: 'Forbidden: Admin access required' }, { status: 403 });
    }

    const [students, attempts, tests, questions, reports] = await Promise.all([
      prisma.user.findMany({
        where: { role: Role.STUDENT },
        include: {
          _count: { select: { attempts: true } },
        },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.attempt.findMany({
        where: { submittedAt: { not: null } },
        include: {
          user: { select: { name: true, email: true, image: true } },
          test: { select: { title: true, category: true } },
        },
        orderBy: { startedAt: 'desc' },
      }),
      prisma.test.findMany({
        include: {
          questions: true,
        },
      }),
      prisma.question.findMany({
        include: {
          test: { select: { title: true, category: true } },
          reports: true,
          answers: true,
        },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.questionReport.findMany({
        include: {
          user: { select: { name: true, email: true } },
          question: true,
        },
        orderBy: { createdAt: 'desc' },
      }),
    ]);

    // Calculate Question Analytics (hardest questions & most skipped)
    const questionAnalytics = questions.map((q) => {
      const totalAnswers = q.answers.length;
      const correctAnswers = q.answers.filter((a) => a.isCorrect).length;
      const skippedAnswers = q.answers.filter((a) => a.isSkipped).length;
      const correctPercentage = totalAnswers > 0 ? Math.round((correctAnswers / totalAnswers) * 100) : 0;

      return {
        id: q.id,
        testId: q.testId,
        testTitle: q.test?.title || 'Unknown Test',
        questionText: q.questionText,
        topicTag: q.topicTag,
        totalAnswers,
        correctAnswers,
        skippedAnswers,
        correctPercentage,
      };
    });

    const hardestQuestions = [...questionAnalytics]
      .filter((q) => q.totalAnswers > 0)
      .sort((a, b) => a.correctPercentage - b.correctPercentage)
      .slice(0, 5);

    const mostSkippedQuestions = [...questionAnalytics]
      .filter((q) => q.totalAnswers > 0)
      .sort((a, b) => b.skippedAnswers - a.skippedAnswers)
      .slice(0, 5);

    const totalStudents = students.length;
    const totalAttempts = attempts.length;
    const pendingReports = reports.filter((r) => !r.resolved).length;
    const avgScore = totalAttempts > 0
      ? Math.round(attempts.reduce((sum, a) => sum + a.score, 0) / totalAttempts)
      : 0;

    return NextResponse.json({
      stats: {
        totalStudents,
        totalAttempts,
        pendingReports,
        avgScore,
      },
      students,
      attempts,
      tests,
      questions,
      reports,
      hardestQuestions,
      mostSkippedQuestions,
    });
  } catch (error) {
    console.error('Error fetching admin statistics:', error);
    return NextResponse.json({ error: 'Failed to load admin dashboard data' }, { status: 500 });
  }
}
