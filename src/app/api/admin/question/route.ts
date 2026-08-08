import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { Role } from '@prisma/client';

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || session.user.role !== Role.ADMIN) {
      return NextResponse.json({ error: 'Forbidden: Admin access required' }, { status: 403 });
    }

    const body = await req.json();
    const { id, testId, questionText, optionA, optionB, optionC, optionD, correctOption, topicTag } = body;

    if (!testId || !questionText || !optionA || !optionB || !optionC || !optionD || !correctOption || !topicTag) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    let question;
    if (id) {
      // Update existing question
      question = await prisma.question.update({
        where: { id },
        data: {
          testId,
          questionText,
          optionA,
          optionB,
          optionC,
          optionD,
          correctOption,
          topicTag,
        },
      });
    } else {
      // Create new question
      question = await prisma.question.create({
        data: {
          testId,
          questionText,
          optionA,
          optionB,
          optionC,
          optionD,
          correctOption,
          topicTag,
        },
      });
    }

    return NextResponse.json({ success: true, question });
  } catch (error) {
    console.error('Error saving question:', error);
    return NextResponse.json({ error: 'Failed to save question' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || session.user.role !== Role.ADMIN) {
      return NextResponse.json({ error: 'Forbidden: Admin access required' }, { status: 403 });
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Question ID is required' }, { status: 400 });
    }

    await prisma.question.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting question:', error);
    return NextResponse.json({ error: 'Failed to delete question' }, { status: 500 });
  }
}
