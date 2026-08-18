import { NextResponse } from 'next/server';
import { servicesData } from '@/lib/db';

export async function GET() {
  return NextResponse.json({
    status: 'success',
    data: servicesData,
    count: servicesData.length
  });
}
