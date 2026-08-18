import { NextResponse } from 'next/server';
import { companyProfile } from '@/lib/db';

export async function GET() {
  return NextResponse.json({
    status: 'success',
    data: companyProfile
  });
}
