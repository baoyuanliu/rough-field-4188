/**
 * src/types/horoscope.ts
 * Type definitions for horoscope data
 */

export type ZodiacSign = 
  | 'aries' 
  | 'taurus' 
  | 'gemini' 
  | 'cancer' 
  | 'leo' 
  | 'virgo' 
  | 'libra' 
  | 'scorpio' 
  | 'sagittarius' 
  | 'capricorn' 
  | 'aquarius' 
  | 'pisces';

export interface HoroscopeData {
  sign: ZodiacSign;
  date: string;
  overall: string;
  work: string;
  love: string;
  money: string;
  luckyColor: string;
  luckyKeyword: string;
}

export interface HoroscopeResponse {
  success: boolean;
  data?: HoroscopeData;
  error?: string;
}

export interface ZodiacSignInfo {
  id: ZodiacSign;
  nameJa: string;
  nameEn: string;
  period: string;
  imageUrl: string;
}

export const ZODIAC_SIGNS: ZodiacSignInfo[] = [
  {
    id: 'aries',
    nameJa: '牡羊座',
    nameEn: 'Aries',
    period: '3/21～4/19',
    imageUrl: '/images/zodiac/aries.png'
  },
  {
    id: 'taurus',
    nameJa: '牡牛座',
    nameEn: 'Taurus',
    period: '4/20～5/20',
    imageUrl: '/images/zodiac/taurus.png'
  },
  {
    id: 'gemini',
    nameJa: '双子座',
    nameEn: 'Gemini',
    period: '5/21～6/21',
    imageUrl: '/images/zodiac/gemini.png'
  },
  {
    id: 'cancer',
    nameJa: '蟹座',
    nameEn: 'Cancer',
    period: '6/22～7/22',
    imageUrl: '/images/zodiac/cancer.png'
  },
  {
    id: 'leo',
    nameJa: '獅子座',
    nameEn: 'Leo',
    period: '7/23～8/22',
    imageUrl: '/images/zodiac/leo.png'
  },
  {
    id: 'virgo',
    nameJa: '乙女座',
    nameEn: 'Virgo',
    period: '8/23～9/22',
    imageUrl: '/images/zodiac/virgo.png'
  },
  {
    id: 'libra',
    nameJa: '天秤座',
    nameEn: 'Libra',
    period: '9/23～10/23',
    imageUrl: '/images/zodiac/libra.png'
  },
  {
    id: 'scorpio',
    nameJa: '蠍座',
    nameEn: 'Scorpio',
    period: '10/24～11/22',
    imageUrl: '/images/zodiac/scorpio.png'
  },
  {
    id: 'sagittarius',
    nameJa: '射手座',
    nameEn: 'Sagittarius',
    period: '11/23～12/21',
    imageUrl: '/images/zodiac/sagittarius.png'
  },
  {
    id: 'capricorn',
    nameJa: '山羊座',
    nameEn: 'Capricorn',
    period: '12/22～1/19',
    imageUrl: '/images/zodiac/capricorn.png'
  },
  {
    id: 'aquarius',
    nameJa: '水瓶座',
    nameEn: 'Aquarius',
    period: '1/20～2/18',
    imageUrl: '/images/zodiac/aquarius.png'
  },
  {
    id: 'pisces',
    nameJa: '魚座',
    nameEn: 'Pisces',
    period: '2/19～3/20',
    imageUrl: '/images/zodiac/pisces.png'
  }
];