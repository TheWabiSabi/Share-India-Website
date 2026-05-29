// app/layout.tsx
import type { Metadata, Viewport } from 'next';
import './globals.css';

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import { Inter, Geist_Mono } from 'next/font/google';
import { WebVitals } from '@/components/web-vitals';
import { ClientWidgets } from '@/components/client-widgets';

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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://insurance.shareindia.com'),
  title: {
    default: 'Share India Insurance Brokers | IRDA Licensed Insurance Broker',
    template: '%s | Share India Insurance Brokers',
  },
  description:
    'IRDA licensed insurance broker offering comprehensive insurance solutions for retail, corporate, and industries. Get expert advice, competitive premiums, and 24/7 claims support across India.',
  keywords: [
    'insurance broker India',
    'IRDA licensed broker',
    'life insurance',
    'health insurance',
    'motor insurance',
    'corporate insurance',
    'industry insurance',
    'insurance quotes',
    'Share India Insurance',
    'SIIB',
  ],
  authors: [{ name: 'Share India Insurance Brokers' }],
  creator: 'Share India Insurance Brokers',
  publisher: 'Share India Insurance Brokers',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://insurance.shareindia.com',
    title: 'Share India Insurance Brokers | IRDA Licensed Insurance Broker',
    description:
      'IRDA licensed insurance broker offering comprehensive insurance solutions for retail, corporate, and industries across India.',
    siteName: 'Share India Insurance Brokers',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Share India Insurance Brokers | IRDA Licensed Insurance Broker',
    description:
      'IRDA licensed insurance broker offering comprehensive insurance solutions across India.',
    creator: '@ShareIndia73227',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://minio-api.internal.wabisabitech.in" />
        
        {/* DNS prefetch for faster lookups */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://minio-api.internal.wabisabitech.in" />
      </head>
      <body className="font-sans antialiased">
        <WebVitals />
        <Header />
        <main className="text-si-dark bg-white">{children}</main>
        <Footer />
        <ClientWidgets />
      </body>
    </html>
  );
}
