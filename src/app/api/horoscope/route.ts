/**
 * src/app/api/horoscope/route.ts
 * API endpoint to get horoscope data
 */

import { NextRequest, NextResponse } from 'next/server';
import { generateHoroscope } from '@/lib/horoscopeGenerator';
import { ZodiacSign } from '@/types/horoscope';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const sign = searchParams.get('sign') as ZodiacSign | null;

  // Validate the sign parameter
  if (!sign) {
    return NextResponse.json(
      { success: false, error: 'Zodiac sign is required' },
      { status: 400 }
    );
  }

  const validSigns: ZodiacSign[] = [
    'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 
    'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'
  ];

  if (!validSigns.includes(sign)) {
    return NextResponse.json(
      { success: false, error: 'Invalid zodiac sign' },
      { status: 400 }
    );
  }

  try {
    // Generate horoscope data
    const horoscopeData = await generateHoroscope(sign);

    return NextResponse.json(
      { success: true, data: horoscopeData },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error generating horoscope:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to generate horoscope' },
      { status: 500 }
    );
  }
}