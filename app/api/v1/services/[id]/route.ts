import { NextRequest, NextResponse } from 'next/server';
import { servicesData } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const service = servicesData.find(
    s => s.id === id || s.slug === id || s.category.toLowerCase() === id.toLowerCase()
  );

  if (!service) {
    return NextResponse.json(
      { status: 'error', message: 'Service not found' },
      { status: 404 }
    );
  }

  return NextResponse.json({
    status: 'success',
    data: service
  });
}
