import { NextRequest, NextResponse } from 'next/server';
import { projectsData } from '@/lib/db';
import { ProjectCategory } from '@/types';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') as ProjectCategory | null;
  const featuredOnly = searchParams.get('featured') === 'true';
  const query = searchParams.get('q')?.toLowerCase();

  let filtered = [...projectsData];

  if (category && category !== 'All') {
    filtered = filtered.filter(p => p.category === category);
  }

  if (featuredOnly) {
    filtered = filtered.filter(p => p.isFeatured);
  }

  if (query) {
    filtered = filtered.filter(
      p => p.title.toLowerCase().includes(query) ||
           p.location.toLowerCase().includes(query) ||
           p.clientName.toLowerCase().includes(query) ||
           p.overview.toLowerCase().includes(query)
    );
  }

  return NextResponse.json({
    status: 'success',
    data: filtered,
    count: filtered.length
  });
}

// Protected admin endpoint pattern for future dashboard
export async function POST(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json(
      { status: 'error', message: 'Unauthorized. Admin authorization token required.' },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    return NextResponse.json({
      status: 'success',
      message: 'Dashboard-ready API boundary: Project received for creation.',
      data: body
    }, { status: 201 });
  } catch {
    return NextResponse.json({ status: 'error', message: 'Invalid payload' }, { status: 400 });
  }
}
