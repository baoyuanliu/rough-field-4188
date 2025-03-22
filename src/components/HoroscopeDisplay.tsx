/**
 * src/components/HoroscopeDisplay.tsx
 * Component for displaying a horoscope
 */

import React from 'react';
import { HoroscopeData } from '@/types/horoscope';
import Image from 'next/image';
import Link from 'next/link';

interface HoroscopeDisplayProps {
  horoscope: HoroscopeData;
}

export default function HoroscopeDisplay({ horoscope }: HoroscopeDisplayProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getSignJapaneseName = (sign: string) => {
    const signMap: Record<string, string> = {
      aries: '牡羊座',
      taurus: '牡牛座',
      gemini: '双子座',
      cancer: '蟹座',
      leo: '獅子座',
      virgo: '乙女座',
      libra: '天秤座',
      scorpio: '蠍座',
      sagittarius: '射手座',
      capricorn: '山羊座',
      aquarius: '水瓶座',
      pisces: '魚座'
    };
    return signMap[sign] || sign;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center mb-6">
        <div className="relative w-24 h-24 mb-4 sm:mb-0 sm:mr-6">
          <Image
            src={`/images/zodiac/${horoscope.sign}.png`}
            alt={horoscope.sign}
            width={96}
            height={96}
            className="object-contain"
            priority
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/images/zodiac/placeholder.png";
            }}
          />
        </div>
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold text-gray-800">
            {getSignJapaneseName(horoscope.sign)}
          </h1>
          <p className="text-lg text-gray-600 capitalize mb-1">
            {horoscope.sign}
          </p>
          <p className="text-sm text-gray-500">
            {formatDate(horoscope.date)}
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">全体運</h2>
          <p className="text-gray-700">{horoscope.overall}</p>
        </div>

        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">仕事運</h2>
          <p className="text-gray-700">{horoscope.work}</p>
        </div>

        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">恋愛運</h2>
          <p className="text-gray-700">{horoscope.love}</p>
        </div>

        <div className="border-b pb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">金運</h2>
          <p className="text-gray-700">{horoscope.money}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">ラッキーカラー</h2>
            <p className="text-gray-700">{horoscope.luckyColor}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">ラッキーキーワード</h2>
            <p className="text-gray-700">{horoscope.luckyKeyword}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link 
          href="/horoscope" 
          className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          他の星座を見る
        </Link>
      </div>
    </div>
  );
}