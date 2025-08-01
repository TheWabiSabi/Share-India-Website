import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  preload: false,
  display: 'swap',
  adjustFontFallback: false,
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  preload: false,
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: 'Share India Brokers',
  description: 'Created by team WabiSabi',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <div className="bg-si-offwhite text-si-dark mt-[13vh] min-h-[81vh] font-sans lg:mt-[19vh]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
