import {
  HeroSection,
  WhatWeDoSection,
  FeaturedInsightsSection,
  TopNewsSection,
  AwardsTestimonialsSection,
  ConnectCTASection,
} from '@/components/Homepage';
import './style.css';

export default function HomePage() {
  return (
    <main className="text-si-dark bg-white font-sans">
      <HeroSection />
      <WhatWeDoSection />
      <FeaturedInsightsSection />
      <TopNewsSection />
      <AwardsTestimonialsSection />
      <ConnectCTASection />
    </main>
  );
}
