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
        course: {
          select: {
            id: true,
            title: true,
            slug: true,
            category: true,
          },
        },
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
          id: 'fullstack-mock-test-id',
          title: 'Full-Stack & System Design Mock Test',
          category: 'Technical',
          description: 'Advanced evaluation of microservices architecture, REST/GraphQL APIs, database sharding, Redis caching, and Web Security.',
          totalQuestions: 30,
          timePerQuestion: 60,
          marksPerQuestion: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          _count: { questions: 30 },
        },
        {
          id: 'dsa-mock-test-id',
          title: 'Data Structures & Algorithms Advanced Mock Test',
          category: 'Technical',
          description: 'High-caliber assessment covering Dynamic Programming, Graph Traversal (DFS/BFS, Dijkstra), Trie, Segment Trees, and Bit Manipulation.',
          totalQuestions: 30,
          timePerQuestion: 60,
          marksPerQuestion: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          _count: { questions: 30 },
        },
        {
          id: 'corecs-mock-test-id',
          title: 'Core CS Fundamentals Mock Test',
          category: 'Technical',
          description: 'Rigorous exam testing Operating Systems concurrency, DBMS isolation levels, TCP/IP networking, and SOLID design principles.',
          totalQuestions: 30,
          timePerQuestion: 60,
          marksPerQuestion: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          _count: { questions: 30 },
        },
        {
          id: 'apt-mock-test-id',
          title: 'Aptitude Mock Test 1',
          category: 'Aptitude',
          description: 'Speed and accuracy assessment in Quantitative Aptitude, Logical Reasoning series, and English Verbal Ability.',
          totalQuestions: 30,
          timePerQuestion: 60,
          marksPerQuestion: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          _count: { questions: 30 },
        },
        {
          id: 'apt-advanced-mock-test-id',
          title: 'Aptitude Mock Test 2',
          category: 'Aptitude',
          description: 'Advanced placement round covering Permutations & Combinations, Circular Seating Puzzles, Syllogisms, and Critical Reasoning.',
          totalQuestions: 30,
          timePerQuestion: 60,
          marksPerQuestion: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          _count: { questions: 30 },
        },
        {
          id: 'apt-datainterp-mock-test-id',
          title: 'Aptitude Mock Test 3',
          category: 'Aptitude',
          description: 'Data Interpretation, Speed Mathematics, Pipes & Cisterns, Relative Velocity, and Spatial Pattern Reasoning.',
          totalQuestions: 30,
          timePerQuestion: 60,
          marksPerQuestion: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          _count: { questions: 30 },
        },
        {
          id: 'apt-analytics-mock-test-id',
          title: 'Aptitude Mock Test 4',
          category: 'Aptitude',
          description: 'Business Analytics Aptitude: Permutations & Combinations, Mixtures & Allegation, Data Sufficiency, and Critical Reasoning.',
          totalQuestions: 30,
          timePerQuestion: 60,
          marksPerQuestion: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          _count: { questions: 30 },
        },
        {
          id: 'apt-grand-mock-test-id',
          title: 'Aptitude Mock Test 5',
          category: 'Aptitude',
          description: 'Campus Placement Grand Aptitude Test: Comprehensive Quant, Clocks & Calendars, Syllogisms, Blood Relations, and English Proficiency.',
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
