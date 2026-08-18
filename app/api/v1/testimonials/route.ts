import { NextResponse } from 'next/server';
import { testimonialsData } from '@/lib/db';

export async function GET() {
  return NextResponse.json({
    status: 'success',
    data: testimonialsData,
    count: testimonialsData.length
  });
}
