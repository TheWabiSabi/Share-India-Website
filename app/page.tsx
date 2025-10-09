import {
  HeroSection,
  WhatWeDoSection,
  FeaturedInsightsSection,
  TopNewsSection,
  AwardsTestimonialsSection,
  ConnectCTASection,
} from '@/components/Homepage';
import './style.css';
import { ReactNode } from 'react';

// Full-screen, responsive card that accounts for the fixed header
function CardScreen({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <section
      id={id}
      className="flex min-h-[calc(100dvh-var(--header-h))] snap-start items-center justify-center px-3 first:mt-[var(--header-h)] sm:px-4 md:px-6 lg:px-8"
      aria-roledescription="Full-screen card section"
    >
      <div className="card-screen w-full max-w-7xl rounded-3xl bg-white p-5 shadow-[0_10px_40px_-10px_rgba(2,6,23,0.15)] ring-1 ring-black/5 sm:p-7 lg:p-10">
        {children}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="bg-app-gradient relative h-dvh snap-y snap-mandatory overflow-y-auto pt-16">
      {/* Optional background accents you already had from earlier message */}
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-blob blob-1" />
        <div className="bg-blob blob-2" />
        <div className="bg-blob blob-3" />
      </div>

      <CardScreen id="hero">
        <HeroSection />
      </CardScreen>
      <div className="pt-16"></div>
      <CardScreen id="what-we-do">
        <WhatWeDoSection />
      </CardScreen>

      <div className="pt-16"></div>
      <CardScreen id="featured-insights">
        <FeaturedInsightsSection />
      </CardScreen>

      <div className="pt-16"></div>
      <CardScreen id="top-news">
        <TopNewsSection />
      </CardScreen>

      <div className="pt-16"></div>
      <CardScreen id="awards-testimonials">
        <AwardsTestimonialsSection />
      </CardScreen>

      <div className="pt-16"></div>
      <CardScreen id="connect-cta">
        <ConnectCTASection />
      </CardScreen>
    </main>
  );
}
