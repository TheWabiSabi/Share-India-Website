# Homepage Components

This directory contains modular components for the homepage, broken down for better maintainability and code organization.

## Component Structure

```
components/Homepage/
├── HeroSection.tsx           # Main hero section with CTA
├── WhatWeDoSection.tsx       # Services overview with pillars
├── FeaturedInsightsSection.tsx # Insights carousel section
├── TopNewsSection.tsx        # News carousel section
├── AwardsTestimonialsSection.tsx # Awards and client testimonials
├── ConnectCTASection.tsx     # Final CTA section
├── index.tsx                 # Export barrel file
└── README.md                 # This documentation
```

## Image Placeholders

The following image paths are used as placeholders and should be replaced with actual images:

### Hero Section

- `/images/hero/meeting.png` - Main hero consultation image

### Awards Section

- `/images/awards/trophy-1.svg` - 2023 IRDAI Recognition trophy
- `/images/awards/trophy-2.svg` - 2022 Insurance Today award trophy
- `/images/awards/trophy-3.svg` - 2021 Business India award trophy
- `/images/awards/trophy-4.svg` - 2020 FinServ Awards trophy

### Testimonials Section

- `/images/clients/priya.jpg` - Priya Menon avatar
- `/images/clients/arjun.jpg` - Arjun Verma avatar
- `/images/clients/kavita.jpg` - Kavita Iyer avatar

## Usage

Import and use the components in your page:

```tsx
import {
  HeroSection,
  WhatWeDoSection,
  FeaturedInsightsSection,
  TopNewsSection,
  AwardsTestimonialsSection,
  ConnectCTASection,
} from '@/components/Homepage';

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
```

## Features

- **Modular Design**: Each section is a separate component for easy maintenance
- **Performance Optimized**: Uses React.memo and useMemo for expensive computations
- **Responsive**: All components are fully responsive
- **Accessible**: Proper semantic HTML and ARIA attributes
- **Type Safe**: Full TypeScript support
- **Clean Code**: Well-structured, commented, and follows best practices

## Dependencies

These components depend on:

- `@/components/main-caraousel` - Main insights carousel
- `@/components/top-news-carousel` - Top news carousel
- Next.js Link and Image components
- Tailwind CSS for styling

## Notes

- All placeholder images should be replaced with actual assets
- The components maintain the original styling and functionality
- No code has been omitted from the original implementation
- Components are optimized for performance and maintainability
