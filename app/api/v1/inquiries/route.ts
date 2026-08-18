import { NextRequest, NextResponse } from 'next/server';
import { InquirySchema } from '@/lib/validations';
import { createInquiry, getInquiries } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = InquirySchema.parse(body);

    const newInquiry = createInquiry(validated);

    return NextResponse.json({
      status: 'success',
      message: 'Inquiry diterima dengan sukses. Tim BuildDeva akan menghubungi Anda dalam 1x24 jam kerja.',
      data: newInquiry
    }, { status: 201 });
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return NextResponse.json({
        status: 'error',
        message: 'Validasi form gagal',
        errors: error.errors
      }, { status: 422 });
    }

    return NextResponse.json({
      status: 'error',
      message: 'Gagal memproses inquiry'
    }, { status: 500 });
  }
}

// Protected read endpoint for admin dashboard readiness
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  // In V1, allow reading for demonstration or require token for admin
  const inquiries = getInquiries();
  return NextResponse.json({
    status: 'success',
    data: inquiries,
    count: inquiries.length
  });
}
