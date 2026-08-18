import { NextRequest, NextResponse } from 'next/server';
import { projectsData } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const project = projectsData.find(
    p => p.id === id || p.slug === id
  );

  if (!project) {
    return NextResponse.json(
      { status: 'error', message: 'Project not found' },
      { status: 404 }
    );
  }

  return NextResponse.json({
    status: 'success',
    data: project
  });
}
