import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "占い・星座 | 毎日の運勢",
  description: "12星座の毎日の運勢、恋愛運、仕事運、金運をチェック。ラッキーカラーやラッキーキーワードも。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        <header className="bg-indigo-600 text-white py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-xl font-bold">
              <a href="/">占い・星座</a>
            </h1>
          </div>
        </header>
        {children}
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto px-4 text-center">
            <p className="mb-2">毎日0時に最新の運勢に更新されます</p>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} 占い・星座 All Rights Reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}