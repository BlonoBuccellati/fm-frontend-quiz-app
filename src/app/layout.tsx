import type { Metadata } from 'next';
import {  Rubik } from 'next/font/google';

import '@/styles/globals.css';

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
  style:"normal",
  weight:["300","400","500"]
});

const rubikItalic = Rubik({
  variable:"--font-rubik-italic",
  subsets: ['latin'],
  style:"italic",
  weight:["400"]
});

export const metadata: Metadata = {
  title: 'Frontend Mentor | Frontend quiz app',
  description: 'Frontend quiz app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${rubik.variable} ${rubikItalic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
