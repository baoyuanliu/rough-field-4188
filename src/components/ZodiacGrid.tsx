/**
 * src/components/ZodiacGrid.tsx
 * Grid component for displaying zodiac sign selection
 */

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ZODIAC_SIGNS } from '@/types/horoscope';

export default function ZodiacGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-4xl mx-auto">
      {ZODIAC_SIGNS.map((sign) => (
        <Link 
          key={sign.id} 
          href={`/horoscope/${sign.id}`}
          className="flex flex-col items-center p-4 border rounded-lg bg-white hover:bg-gray-50 hover:shadow-md transition-all"
        >
          <div className="relative w-20 h-20 mb-2">
            <Image
              src={sign.imageUrl}
              alt={sign.nameEn}
              width={80}
              height={80}
              className="object-contain"
              priority
              // Fallback image when the actual image fails to load
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/images/zodiac/placeholder.png";
              }}
            />
          </div>
          <h3 className="text-lg font-medium text-center">{sign.nameJa}</h3>
          <p className="text-sm text-gray-500 text-center">{sign.nameEn}</p>
          <p className="text-xs text-gray-500 mt-1">{sign.period}</p>
        </Link>
      ))}
    </div>
  );
}