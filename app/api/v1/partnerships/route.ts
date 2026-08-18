import { NextResponse } from 'next/server';
import { partnershipsData } from '@/lib/db';

export async function GET() {
  return NextResponse.json({
    status: 'success',
    data: partnershipsData,
    count: partnershipsData.length
  });
}
