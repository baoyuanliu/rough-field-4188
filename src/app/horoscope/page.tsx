/**
 * src/app/horoscope/page.tsx
 * Zodiac sign selection page
 */

import React from 'react';
import ZodiacGrid from '@/components/ZodiacGrid';

export const metadata = {
  title: '今日の運勢・占い - 星座を選択',
  description: 'あなたの星座を選んで今日の運勢を確認しましょう',
};

export default function HoroscopePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">今日の運勢・占い</h1>
          <p className="text-gray-600">あなたの星座を選んで今日の運勢を確認しましょう</p>
        </header>

        <ZodiacGrid />

        <footer className="mt-10 text-center text-gray-500 text-sm">
          <p>毎日0時に更新されます</p>
        </footer>
      </div>
    </div>
  );
}