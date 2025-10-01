import Link from 'next/link';
import Image from 'next/image';
import { memo, useMemo } from 'react';

// Focus points we want to communicate
const FOCUS_POINTS = ['Analyse gaps', 'Right product fit', 'Apt underwriting', 'Claims advocacy'];

const STATS_DATA = [
  { k: '6,000+', v: 'Claims handled' },
  { k: '21,000+', v: 'Retail Clients' },
  { k: '9,000+', v: 'Corporate Clients' },
];

// Memoized icons to prevent re-renders
const ArrowIcon = memo(() => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
));
ArrowIcon.displayName = 'ArrowIcon';

const ChevronIcon = memo(() => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
));
ChevronIcon.displayName = 'ChevronIcon';

export default function HeroSection() {
  // Memoize lists for perf
  const focusBadges = useMemo(
    () =>
      FOCUS_POINTS.map((label) => (
        <span key={label} className="badge-chip will-change-auto">
          {label}
        </span>
      )),
    [],
  );

  const statsGrid = useMemo(
    () =>
      STATS_DATA.map(({ k, v }) => (
        <div key={v} className="will-change-auto">
          <div className="accent-bar-gradient mb-2 h-1 w-12" />
          <div className="text-si-ink text-2xl font-bold">{k}</div>
          <div className="text-si-ink/70 text-sm font-medium">{v}</div>
        </div>
      )),
    [],
  );

  return (
    <section className="section-vibrant-blue section-divider-bottom relative isolate mt-10">
      {/* Background layers */}
      <div className="hero-grid absolute inset-0" />
      <div className="from-si-primary-50 to-si-primary-200 pointer-events-none absolute inset-0 bg-gradient-to-b" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 md:px-12">
        <div className="grid min-h-[86vh] grid-cols-1 items-center gap-10 py-20 md:grid-cols-2">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Compliance / credibility tag — no mention of brokers */}
            <div className="from-si-primary/15 to-si-red/10 text-si-primary border-si-primary/20 mb-4 inline-flex items-center gap-2 rounded-full border bg-gradient-to-r px-4 py-2 text-sm font-semibold backdrop-blur-sm">
              <span className="accent-dot-vibrant h-2 w-2 rounded-full" />
              IRDAI-licensed
            </div>

            <h1 className="text-si-ink text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl">
              Insurance, <span className="text-gradient-primary">Simplified</span>.
            </h1>

            <p className="text-si-ink/80 mt-5 max-w-xl text-lg leading-relaxed">
              <strong>Share India</strong> focuses on your risk story: we analyse coverage gaps,
              craft the right product fit with apt underwriting, and stand with you at claims—so
              businesses and families can focus on what matters.
            </p>

            {/* Focus chips: communicate the new positioning */}
            <div className="mt-6 flex flex-wrap gap-2">{focusBadges}</div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/contact?type=quote" className="btn-primary">
                Get a Quote
                <ArrowIcon />
              </Link>
              <Link href="#what-we-do" className="btn-ghost">
                Explore Solutions
                <ChevronIcon />
              </Link>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-6">{statsGrid}</div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="from-si-primary/20 to-si-red/10 absolute -inset-6 rounded-3xl bg-gradient-to-br opacity-30" />
            <div className="shadow-elevate-vibrant border-si-primary/10 relative rounded-2xl border bg-white/95 p-6">
              {/* Switched to a relative path as requested */}
              <Image
                src="https://minio-api.internal.wabisabitech.in/share-india/about/meeting.png"
                alt="Consultation at Share India"
                width={320}
                height={240}
                className="h-auto w-full rounded-xl object-cover"
                priority
                quality={60}
              />
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="card-vibrant rounded-lg p-3">
                  <div className="text-si-ink/60 text-xs font-medium">Avg. savings (SMB)</div>
                  <div className="text-gradient-primary text-lg font-bold">12 - 18%</div>
                </div>
                <div className="card-accent-red rounded-lg p-3">
                  <div className="text-si-ink/60 text-xs font-medium">Locations Reached</div>
                  <div className="text-gradient-accent text-lg font-bold">250+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
