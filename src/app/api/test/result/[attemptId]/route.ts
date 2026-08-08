import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ attemptId: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { attemptId } = await params;
    if (!attemptId) {
      return NextResponse.json({ error: 'Attempt ID is required' }, { status: 400 });
    }

    const attempt = await prisma.attempt.findUnique({
      where: { id: attemptId },
      include: {
        test: true,
        user: {
          select: { name: true, email: true },
        },
        answers: {
          include: {
            question: true,
          },
        },
      },
    });

    if (!attempt) {
      return NextResponse.json({ error: 'Attempt result not found' }, { status: 404 });
    }

    // Calculate duration in seconds
    const durationSeconds = attempt.submittedAt
      ? Math.round((new Date(attempt.submittedAt).getTime() - new Date(attempt.startedAt).getTime()) / 1000)
      : 0;

    return NextResponse.json({
      attempt,
      durationSeconds,
    });
  } catch (error) {
    console.error('Error fetching result details:', error);
    return NextResponse.json({ error: 'Failed to fetch result' }, { status: 500 });
  }
}
