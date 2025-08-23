// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import ChatbotWidget from '@/components/chatbot/chatbot-widget';

import { Inter, Geist_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'Share India Brokers',
  description: 'Created by team WabiSabi',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Header />
        <main className="text-si-dark bg-white">{children}</main>
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  );
}
