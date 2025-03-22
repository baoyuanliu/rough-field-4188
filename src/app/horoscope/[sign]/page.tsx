/**
 * src/app/horoscope/[sign]/page.tsx
 * Dynamic page for displaying horoscope by zodiac sign
 */

import React from 'react';
import { notFound } from 'next/navigation';
import HoroscopeDisplay from '@/components/HoroscopeDisplay';
import { ZodiacSign, ZODIAC_SIGNS } from '@/types/horoscope';
import { generateHoroscope } from '@/lib/horoscopeGenerator';

interface HoroscopePageProps {
  params: {
    sign: string;
  };
}

// Generate metadata for the page
export async function generateMetadata({ params }: HoroscopePageProps) {
  const { sign } = params;
  
  // Find the sign info
  const signInfo = ZODIAC_SIGNS.find(s => s.id === sign);
  if (!signInfo) {
    return {
      title: '星座が見つかりません',
      description: '指定された星座の情報は見つかりませんでした。'
    };
  }
  
  return {
    title: `${signInfo.nameJa}（${signInfo.nameEn}）の今日の運勢・占い`,
    description: `${signInfo.nameJa}の今日の運勢、全体運、仕事運、恋愛運、金運をチェックしましょう。`
  };
}

export default async function HoroscopeBySignPage({ params }: HoroscopePageProps) {
  const { sign } = params;
  
  // Validate the sign
  const validSigns = ZODIAC_SIGNS.map(s => s.id);
  if (!validSigns.includes(sign as ZodiacSign)) {
    notFound();
  }
  
  // Generate the horoscope data
  const horoscope = await generateHoroscope(sign as ZodiacSign);
  
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <HoroscopeDisplay horoscope={horoscope} />
        
        <footer className="mt-10 text-center text-gray-500 text-sm">
          <p>毎日0時に更新されます</p>
        </footer>
      </div>
    </div>
  );
}