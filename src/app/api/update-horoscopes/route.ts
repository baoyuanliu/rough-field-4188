/**
 * src/app/api/update-horoscopes/route.ts
 * API endpoint to trigger daily horoscope updates
 * This would be called by a scheduled cron job at midnight
 */

import { NextRequest, NextResponse } from 'next/server';
import { generateHoroscope } from '@/lib/horoscopeGenerator';
import { ZodiacSign } from '@/types/horoscope';

export async function POST(request: NextRequest) {
  // Check authorization (in production, use a secure auth token)
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json(
      { success: false, error: 'Unauthorized' },
      { status: 401 }
    );
  }

  const token = authHeader.split(' ')[1];
  // In production, verify this token against a secure stored value
  if (token !== 'your-secret-token') {
    return NextResponse.json(
      { success: false, error: 'Invalid token' },
      { status: 401 }
    );
  }

  try {
    // Generate horoscopes for all zodiac signs
    const zodiacSigns: ZodiacSign[] = [
      'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 
      'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'
    ];

    // In production, these would be saved to a database or stored in KV
    const results = await Promise.all(
      zodiacSigns.map(async (sign) => {
        const horoscope = await generateHoroscope(sign);
        return { sign, success: true };
      })
    );

    return NextResponse.json(
      { 
        success: true, 
        message: 'All horoscopes updated successfully',
        results 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating horoscopes:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update horoscopes' },
      { status: 500 }
    );
  }
}