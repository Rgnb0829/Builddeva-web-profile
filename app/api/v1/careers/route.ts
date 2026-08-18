import { NextResponse } from 'next/server';
import { careersData } from '@/lib/db';

export async function GET() {
  return NextResponse.json({
    status: 'success',
    data: careersData,
    count: careersData.length
  });
}
