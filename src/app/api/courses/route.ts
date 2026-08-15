import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = (session.user as any).id;

    // Fetch all courses with their nested tests
    let courses = await prisma.course.findMany({
      include: {
        tests: {
          include: {
            _count: {
              select: { questions: true },
            },
          },
          orderBy: { createdAt: 'asc' },
        },
      },
      orderBy: { createdAt: 'asc' },
    });

    // Fetch user attempt history to determine test completion status
    const userAttempts = userId
      ? await prisma.attempt.findMany({
          where: { userId },
          select: {
            testId: true,
            score: true,
            submittedAt: true,
          },
          orderBy: { score: 'desc' },
        })
      : [];

    const attemptedTestIds = new Set(userAttempts.map((a) => a.testId));
    const highestScoreMap: Record<string, number> = {};

    userAttempts.forEach((att) => {
      if (!(att.testId in highestScoreMap) || att.score > highestScoreMap[att.testId]) {
        highestScoreMap[att.testId] = att.score;
      }
    });

    // Enrich course and test metadata with attempt information
    const enrichedCourses = courses.map((course) => {
      const tests = course.tests.map((test) => ({
        ...test,
        isCompleted: attemptedTestIds.has(test.id),
        highestScore: highestScoreMap[test.id] ?? null,
      }));

      const completedCount = tests.filter((t) => t.isCompleted).length;

      return {
        ...course,
        tests,
        totalTests: tests.length,
        completedTests: completedCount,
        progressPercentage: tests.length > 0 ? Math.round((completedCount / tests.length) * 100) : 0,
      };
    });

    return NextResponse.json({ courses: enrichedCourses });
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json({ error: 'Failed to fetch courses' }, { status: 500 });
  }
}
