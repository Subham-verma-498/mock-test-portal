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

    const { questionId, reportType, comment } = await req.json();
    if (!questionId || !reportType) {
      return NextResponse.json({ error: 'Question ID and report type required' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: 'User record not found' }, { status: 404 });
    }

    const report = await prisma.questionReport.create({
      data: {
        questionId,
        userId: user.id,
        reportType,
        comment: comment || '',
      },
    });

    return NextResponse.json({ success: true, report });
  } catch (error) {
    console.error('Error reporting question:', error);
    return NextResponse.json({ error: 'Failed to submit report' }, { status: 500 });
  }
}
