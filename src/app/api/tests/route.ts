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

    let tests = await prisma.test.findMany({
      include: {
        _count: {
          select: { questions: true },
        },
      },
      orderBy: { createdAt: 'asc' },
    });

    // Fallback static mock tests if DB hasn't been migrated/seeded yet
    if (tests.length === 0) {
      tests = [
        {
          id: 'tech-mock-test-id',
          title: 'Technical Mock Test',
          category: 'Technical',
          description: 'Comprehensive evaluation of OOPs principles, C++, and C# core concepts for technical campus placements.',
          totalQuestions: 30,
          timePerQuestion: 60,
          marksPerQuestion: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          _count: { questions: 30 },
        },
        {
          id: 'apt-mock-test-id',
          title: 'Aptitude Mock Test',
          category: 'Aptitude',
          description: 'Test your speed and accuracy in Quantitative Aptitude, Logical Reasoning, and Verbal Ability.',
          totalQuestions: 30,
          timePerQuestion: 60,
          marksPerQuestion: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          _count: { questions: 30 },
        },
      ] as any;
    }

    return NextResponse.json({ tests });
  } catch (error) {
    console.error('Error fetching tests:', error);
    return NextResponse.json({ error: 'Failed to fetch tests' }, { status: 500 });
  }
}
