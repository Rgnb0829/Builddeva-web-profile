import { NextRequest, NextResponse } from 'next/server';
import { CostEstimatorSchema } from '@/lib/validations';
import { calculateConstructionEstimate } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = CostEstimatorSchema.parse(body);

    const result = calculateConstructionEstimate(validated);

    return NextResponse.json({
      status: 'success',
      data: result
    });
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return NextResponse.json({
        status: 'error',
        message: 'Input kalkulator tidak valid',
        errors: error.errors
      }, { status: 422 });
    }

    return NextResponse.json({
      status: 'error',
      message: 'Gagal melakukan kalkulasi estimasi'
    }, { status: 500 });
  }
}
