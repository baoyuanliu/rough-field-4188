/**
 * src/app/page.tsx
 * Homepage with link to horoscope selection
 */

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-b from-indigo-50 to-white">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          今日の運勢・占いを見る
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          あなたの星座を選んで、今日の運勢をチェックしましょう。
          全体運、仕事運、恋愛運、金運の他、ラッキーカラーとラッキーキーワードもお届けします。
        </p>
        
        <div className="mb-10">
          <Link
            href="/horoscope"
            className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-lg font-medium text-lg hover:bg-indigo-700 transition-colors shadow-md"
          >
            星座を選択する
          </Link>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 
            'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'].map((sign) => (
            <div key={sign} className="flex flex-col items-center">
              <div className="relative w-16 h-16 mb-2">
                <Image
                  src={`/images/zodiac/${sign}.png`}
                  alt={sign}
                  width={64}
                  height={64}
                  className="object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/zodiac/placeholder.png";
                  }}
                />
              </div>
              <p className="text-sm text-gray-700 capitalize">{sign}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-gray-600">
          <p>毎日0時に最新の運勢に更新されます</p>
        </div>
      </div>
    </main>
  );
}