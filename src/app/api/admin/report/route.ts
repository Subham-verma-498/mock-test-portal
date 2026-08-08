import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { Role } from '@prisma/client';

export async function PATCH(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || session.user.role !== Role.ADMIN) {
      return NextResponse.json({ error: 'Forbidden: Admin access required' }, { status: 403 });
    }

    const { reportId, resolved } = await req.json();
    if (!reportId) {
      return NextResponse.json({ error: 'Report ID required' }, { status: 400 });
    }

    const report = await prisma.questionReport.update({
      where: { id: reportId },
      data: { resolved: !!resolved },
    });

    return NextResponse.json({ success: true, report });
  } catch (error) {
    console.error('Error updating report status:', error);
    return NextResponse.json({ error: 'Failed to update report status' }, { status: 500 });
  }
}
