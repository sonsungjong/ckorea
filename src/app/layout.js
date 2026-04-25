import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata = {
  title: 'C언어 기초 강의',
  description: '초보자를 위한 C언어 입문 강의 자료 모음',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
