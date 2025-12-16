import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { memo, useMemo } from 'react';
import './style.css';
import { ReactNode } from 'react';
import { IMAGE_BASE_URL } from '@/consts/variables';
import { FaShieldAlt, FaLightbulb, FaUsers, FaStar } from 'react-icons/fa';

// Dynamic imports for carousels
const MainCaraousel = dynamic(() => import('@/components/main-caraousel'), { ssr: true });
const TopNewsCarousel = dynamic(() => import('@/components/top-news-carousel'), { ssr: true });

// Clean responsive card with plain white background
function CardScreen({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <section
      id={id}
      className="flex min-h-[calc(100dvh-var(--header-h))] items-center justify-center px-3 first:mt-[var(--header-h)] sm:px-4 md:px-6 lg:px-8 xl:px-12"
      aria-roledescription="Full-screen card section"
    >
      {/* 
        BACKGROUND COLOR CONTROL:
        To change card background color, modify the 'bg-white' class below:
        - bg-white = plain white (current)
        - bg-gray-50 = light gray
        - bg-blue-50 = light blue
        - bg-slate-50 = light slate
      */}
      <div className="w-full max-w-7xl rounded-2xl border border-gray-100 bg-white p-4 shadow-lg sm:rounded-3xl sm:p-6 md:p-8 lg:p-10 xl:p-12">
        {children}
      </div>
    </section>
  );
}

// Reusable Icons
const ArrowIcon = memo(() => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
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
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
));
ChevronIcon.displayName = 'ChevronIcon';

const ShieldIcon = memo(() => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
    <path
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3l7 3v5c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-3z"
    />
    <path strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
  </svg>
));
ShieldIcon.displayName = 'ShieldIcon';

const Bullet = memo(() => (
  <span className="bg-si-primary ring-si-primary/20 inline-block h-1.5 w-1.5 rounded-full ring-2" />
));
Bullet.displayName = 'Bullet';

const FOCUS_POINTS = ['Analyse gaps', 'Right product fit', 'Apt underwriting', 'Claims advocacy'];
const STATS_DATA = [
  { k: '6,000+', v: 'Claims handled' },
  { k: '21,000+', v: 'Retail Clients' },
  { k: '9,000+', v: 'Corporate Clients' },
];

// Hero Section Component
function HeroSection() {
  const focusBadges = useMemo(
    () =>
      FOCUS_POINTS.map((label) => (
        <span
          key={label}
          className="badge-chip rounded-full px-3 py-1 text-sm whitespace-nowrap shadow-sm ring-1 ring-black/5 will-change-auto"
        >
          {label}
        </span>
      )),
    [],
  );

  const statsGrid = useMemo(
    () =>
      STATS_DATA.map(({ k, v }) => (
        <div key={v} className="will-change-auto">
          <div className="accent-bar-gradient mb-2 h-1 w-10 md:w-12" />
          <div className="text-si-ink text-xl font-extrabold sm:text-2xl">{k}</div>
          <div className="text-si-ink/70 text-xs font-medium sm:text-sm">{v}</div>
        </div>
      )),
    [],
  );

  return (
    <section aria-label="Share India insurance hero" className="isolate">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 xl:gap-16">
        {/* Left */}
        <div className="max-w-2xl">
          <div className="text-si-primary border-si-primary/20 bg-si-primary/5 mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold sm:mb-4 sm:px-4 sm:py-2 sm:text-sm">
            <span className="bg-si-primary h-2 w-2 rounded-full" />
            IRDAI-licensed
          </div>

          <h1 className="text-si-ink text-4xl leading-[1.1] font-semibold sm:text-5xl md:text-6xl">
            Insurance, <span className="text-gradient-primary">Simplified</span>.
          </h1>

          <p className="text-si-ink/80 mt-4 max-w-xl text-base leading-relaxed sm:mt-5 sm:text-lg">
            <strong>Share India</strong> focuses on your risk story: we analyse coverage gaps, craft
            the right product fit with apt underwriting, and stand with you at claims—so businesses
            and families can focus on what matters.
          </p>

          {/* Focus chips */}
          <div className="-mx-1 mt-5 overflow-x-auto pb-2 sm:mt-6 sm:overflow-visible">
            <div className="flex min-w-max gap-2 px-1 sm:min-w-0 sm:flex-wrap">{focusBadges}</div>
          </div>

          {/* Actions */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href="/contact?type=quote"
              className="btn-primary group inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold sm:px-5 sm:py-3 sm:text-base"
              aria-label="Get a quote"
            >
              <span>Get a Quote</span>
              <span className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none">
                <ArrowIcon />
              </span>
            </Link>

            <Link
              href="#what-we-do"
              className="btn-ghost inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold sm:px-5 sm:py-3 sm:text-base"
              aria-label="Explore solutions"
            >
              <span>Explore Solutions</span>
              <ChevronIcon />
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-8 grid max-w-lg grid-cols-2 gap-5 sm:gap-6 md:grid-cols-3">
            {statsGrid}
          </div>
        </div>

        {/* Right */}
        <div className="relative order-first sm:order-none">
          {/* soft halo (brand hues) */}
          <div className="bg-si-primary/5 absolute -inset-4 rounded-3xl opacity-30 blur-md sm:-inset-6" />
          <div className="shadow-elevate-vibrant relative rounded-2xl border-b-amber-50 bg-white/95 p-3 sm:p-5">
            <div className="overflow-hidden rounded-xl">
              <Image
                src={`${IMAGE_BASE_URL}/about/meeting.png`}
                alt="Consultation at Share India"
                width={1200}
                height={900}
                priority
                quality={70}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 48vw, 520px"
                className="aspect-[4/3] h-auto w-full rounded-xl object-cover object-center"
              />
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3 text-sm sm:mt-4">
              <div className="border-si-primary/10 rounded-xl border bg-white p-3 shadow-sm sm:p-4">
                <div className="text-si-ink/60 text-[11px] font-medium sm:text-xs">
                  Avg. savings (SMB)
                </div>
                <div className="text-gradient-primary text-base font-extrabold sm:text-lg">
                  12 - 18%
                </div>
              </div>
              <div className="card-accent-red rounded-xl p-3 sm:p-4">
                <div className="text-si-ink/60 text-[11px] font-medium sm:text-xs">
                  Locations Reached
                </div>
                <div className="text-gradient-accent text-base font-extrabold sm:text-lg">250+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// What We Do Section Component
function WhatWeDoSection() {
  const FEATURES = [
    'Personal Claim Support',
    'Tailored wording',
    'Proactive Claims strategy',
    'Digital policy & renewals',
  ];

  return (
    <section id="what-we-do" aria-label="What we do at Share India" className="isolate">
      <div className="mx-auto max-w-7xl">
        {/* Header row */}
        <header className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          {/* Heading + copy */}
          <div className="max-w-2xl flex-1">
            <span className="border-si-primary/20 bg-si-primary/5 text-si-primary mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase">
              <span className="bg-si-primary h-2 w-2 rounded-full" />
              What We Do
            </span>

            <h2 className="text-si-ink text-[clamp(22px,4.2vw,36px)] leading-tight font-semibold">
              Share India prioritises <span className="text-gradient-primary">outcomes</span> first
            </h2>

            <p className="text-si-ink/80 mt-3 text-[clamp(14px,2.6vw,18px)] leading-relaxed">
              We advise, place, and service cover across leading Indian insurers—backed by claims
              advocacy and data-driven risk insights—so you can buy with confidence and recover
              faster.
            </p>
          </div>

          {/* Why choose us — contrast box */}
          <aside className="w-full max-w-xl lg:w-auto">
            <div className="border-si-primary/10 rounded-xl border bg-white p-4 shadow-sm sm:p-5">
              <div className="flex items-start gap-3">
                <div className="text-si-primary">
                  <ShieldIcon />
                </div>
                <div>
                  <div className="text-si-ink/70 text-sm font-semibold">Why clients choose us</div>
                  <ul className="text-si-ink mt-2 grid gap-2 text-[clamp(13px,2.8vw,16px)] sm:grid-cols-2">
                    {FEATURES.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <Bullet /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </header>

        {/* Divider accent */}
        <div className="bg-si-primary/20 mt-6 h-[1.5px] w-full rounded" />

        {/* Service Pillars */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'Advisory & Placement',
              icon: (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  aria-hidden
                >
                  <path
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12M6 12h12"
                  />
                </svg>
              ),
              lines: [
                'Market scans, best-fit quotes, negotiation',
                'Property, Marine, Liability',
                'Health & Group Benefits',
              ],
            },
            {
              title: 'Claims Advocacy',
              icon: (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  aria-hidden
                >
                  <path
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4"
                  />
                </svg>
              ),
              lines: [
                'Strategy, documentation, follow-through',
                'Dedicated claims desk',
                'Faster TAT with liaisons',
              ],
            },
            {
              title: 'Risk Engineering',
              icon: (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  aria-hidden
                >
                  <path
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12h18M12 3v18"
                  />
                </svg>
              ),
              lines: [
                'Surveys, loss-prevention, underwriting fit',
                'FM & statutory compliance',
                'Catastrophe & cyber posture',
              ],
            },
            {
              title: 'Digital Tools',
              icon: (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  aria-hidden
                >
                  <path
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 7h16M4 12h10M4 17h7"
                  />
                </svg>
              ),
              lines: [
                'Requests, vault, renewal tracking, analytics',
                'Self-serve + assisted',
                'API-ready for enterprise',
              ],
            },
          ].map(({ title, icon, lines }) => (
            <article
              key={title}
              className="group hover:border-si-primary/20 flex flex-col rounded-xl border border-gray-100 bg-white p-4 transition-all hover:shadow-md sm:p-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-si-ink text-[clamp(14px,3.2vw,18px)] font-semibold">{title}</h3>
                <div className="text-si-primary">{icon}</div>
              </div>
              <ul className="text-si-ink/80 space-y-2 text-[clamp(13px,2.8vw,15px)]">
                {lines.map((l) => (
                  <li key={l} className="flex items-center gap-2">
                    <Bullet /> {l}
                  </li>
                ))}
              </ul>

              {/* subtle bottom accent on hover */}
              <div className="bg-si-primary/0 group-hover:bg-si-primary/60 mt-4 h-1 rounded opacity-0 transition group-hover:opacity-100" />
            </article>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm sm:px-5 sm:py-4">
          <div className="flex items-center gap-3">
            <div className="accent-bar-gradient h-1 w-20 rounded" />
            <p className="text-si-ink/80 text-[clamp(13px,2.8vw,15px)]">
              Access to <strong className="text-si-ink">40+ insurers</strong> • Issue within{' '}
              <strong className="text-si-ink">24–48h</strong> • Dedicated claims support
            </p>
          </div>
          <div className="flex gap-2">
            <Link
              href="/contact?type=quote"
              className="btn-primary hover-lift inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all"
            >
              Get a Quote <ArrowIcon />
            </Link>
            <Link
              href="/insights"
              className="btn-ghost hover-lift inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all"
            >
              Read Insights <ChevronIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Featured Insights Section Component
function FeaturedInsightsSection() {
  return (
    <section id="featured-insights" aria-labelledby="featured-insights-title" className="isolate">
      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-6 max-w-3xl sm:mb-8">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-[11px] font-bold tracking-wide text-blue-700 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500/70" />
            Insights
          </span>
          <h2
            id="featured-insights-title"
            className="text-3xl leading-tight font-semibold text-slate-900 sm:text-4xl"
          >
            Featured <span className="bg-si-primary bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700/85 sm:mt-4 sm:text-lg">
            Expert explainers from Share India Brokers — market trends, risk solutions, and how
            policy changes affect businesses and families in India.
          </p>
        </header>

        {/* Carousel card */}
        <div
          className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm ring-1 ring-slate-900/5 sm:p-4"
          role="region"
          aria-label="Featured insights carousel"
        >
          {/* Fixed min-height to reduce layout shift while items hydrate */}
          <div className="min-h-[280px] sm:min-h-[320px]">
            <MainCaraousel color="blue" layout={1} />
          </div>
        </div>

        {/* CTA strip */}
        <div
          className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm sm:mt-5 sm:px-6 sm:py-4"
          aria-label="Insights call to action"
        >
          <div className="flex items-center gap-3">
            <div className="bg-si-primary/30 h-2 w-16 rounded" />
            <p className="text-sm text-slate-700/85">
              Curated weekly by our brokerage team • No jargon, just outcomes
            </p>
          </div>

          <Link
            href="/insights"
            className="bg-si-primary-400 inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40"
            aria-label="Explore all insights"
          >
            Explore All Insights
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Top News Section Component
function TopNewsSection() {
  return (
    <section
      id="top-news"
      aria-labelledby="top-news-title"
      className="isolate scroll-mt-[var(--header-h)]"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Header row */}
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <span className="text-si-primary border-si-primary/20 bg-si-primary/5 mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase sm:px-4 sm:py-2">
              <span className="bg-si-primary h-1.5 w-1.5 rounded-full" />
              News, Decoded
            </span>
            <h2
              id="top-news-title"
              className="text-[clamp(22px,4.2vw,36px)] leading-tight font-semibold text-slate-900"
            >
              Not caught up? We&apos;ve got you.
            </h2>
            <p className="mt-3 text-[clamp(14px,2.6vw,18px)] leading-relaxed text-slate-700/85">
              Our team distills complex insurance and risk headlines into punchy explainers—what
              happened, why it matters, and what you should do next.
            </p>
          </div>

          {/* What you'll find */}
          <div className="w-full max-w-md lg:w-auto lg:max-w-none">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-2 text-sm font-medium text-slate-600">What you&apos;ll find</div>
              <ul className="grid gap-2 text-sm text-slate-700/90 sm:grid-cols-2">
                {[
                  'Impact on premiums & coverage',
                  'Regulatory updates (IRDAI & more)',
                  'Sector-wise implications',
                  'Clear actionables',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <svg
                      className="text-si-primary h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Carousel (stable min-height to reduce CLS while hydrating) */}
        <div className="mt-8 sm:mt-10">
          <div className="min-h-[260px] sm:min-h-[300px]">
            <TopNewsCarousel />
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm ring-1 ring-slate-900/5 sm:mt-10 sm:px-6 sm:py-5">
          <div className="flex items-center gap-3">
            <div className="accent-bar-gradient h-2 w-14 rounded" />
            <p className="text-sm text-slate-700/85">
              Updated weekly • Editor&apos;s picks • No jargon
            </p>
          </div>

          <Link
            href="/news"
            className="bg-si-primary hover:bg-si-primary-600 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40"
            aria-label="Browse all news"
          >
            Browse All News
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Awards & Testimonials Section Component
function AwardsTestimonialsSection() {
  const awards = [
    {
      year: '2022',
      award: 'SME Superstars - Awarded to SIIB by Chola MS',
      img: '/awards/chola-ms.jpeg',
    },
    {
      year: '2024',
      award: 'Diamond Club - Awarded to SIIB by digit Inner Circle',
      img: '/awards/digit.jpeg',
    },
    {
      year: '2025',
      award: 'CEO of the year to Mr. Ajay Kumar Patel - Awared by UBS Forums',
      img: '/awards/ubs-ceo.jpeg',
    },
    {
      year: '2025',
      award: 'Best Claims Partner of the year - Awared to SIIB by UBS Forums',
      img: '/awards/ubs-claims.jpeg',
    },
  ];

  const testimonials = [
    {
      name: 'API Holdings',
      // role: 'Digital Healthcare Platform',
      text: 'Share India Insurance Brokers’ proactive approach, professionalism, and flawless execution have made managing our insurance portfolio seamless and efficient — a partnership we truly value.',
      avatar: '/testimonials/api-holding.png',
    },
    {
      name: 'Sunjewels Pvt. Ltd.',
      // role: 'Jewellery Chain',
      text: 'For three years, Team Share India — especially Mr. Raunaq Pai, Mr. Shekhar Pradhan, and Mr. Sagar Agre — have impressed us with their professionalism, reliability, and proactive service.',
      avatar: '/testimonials/sun-jewels.png',
    },
    {
      name: 'Global Ocean Logistics India Ltd',
      // role: 'Founder, GreenEdge Retail',
      text: 'For over four years, Share India’s expertise, responsiveness, and attention to detail have ensured smooth, reliable insurance support and a partnership built on trust and excellence.',
      avatar: '/testimonials/global-ocean.png',
    },
    {
      name: 'Santu Mondal',
      // role: 'Founder, GreenEdge Retail',
      text: 'My experience with Raunaq Pai and Share India Insurance has been exceptional — Raunaq’s professionalism, expertise, and prompt support made the entire insurance process seamless and trustworthy.',
      avatar: '/testimonials/santu-mondal.png',
    },
  ];

  return (
    <section
      id="awards-testimonials"
      aria-labelledby="awards-testimonials-title"
      className="isolate scroll-mt-[var(--header-h)]"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Header */}
        <header className="mb-8 text-center sm:mb-10">
          <span className="text-si-primary border-si-primary/20 bg-si-primary/5 mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase sm:px-4 sm:py-2">
            <span className="bg-si-primary h-1.5 w-1.5 rounded-full" />
            Recognition &amp; Trust
          </span>
          <h2
            id="awards-testimonials-title"
            className="text-[clamp(22px,4.2vw,36px)] leading-tight font-semibold text-slate-900"
          >
            <span className="text-gradient-primary">Awards &amp; Testimonials</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[clamp(14px,2.6vw,18px)] leading-relaxed text-slate-700/85">
            Celebrated for excellence, trusted by clients. Here&apos;s what the industry and our
            partners say about us.
          </p>
        </header>

        {/* Awards Grid */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {awards.map((a) => (
            <article
              key={a.award}
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-md sm:p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white">
                  <Image src={a.img} alt={`${a.year} award`} fill className="object-cover" />
                </div>
                <div>
                  <div className="accent-bar-gradient mb-1 h-1.5 w-10 rounded" />
                  <h3 className="text-[clamp(16px,3.2vw,18px)] font-semibold text-slate-900">
                    {a.year}
                  </h3>
                </div>
              </div>
              <p className="text-[clamp(13px,2.8vw,15px)] text-slate-700/85">{a.award}</p>
            </article>
          ))}
        </div>

        {/* Testimonials */}
        <div>
          <div className="mb-5 text-center sm:mb-7">
            <h3 className="text-[clamp(20px,3.8vw,30px)] leading-tight font-semibold text-slate-900">
              <span className="text-gradient-primary">What Our Clients Say</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="card-accent-red flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-slate-900/5 transition hover:border-slate-300 hover:shadow-md sm:p-6"
              >
                <blockquote className="text-[clamp(13px,2.8vw,15px)] leading-relaxed text-slate-700/90">
                  &quot;{t.text}&quot;
                </blockquote>

                <figcaption className="mt-5 flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full shadow ring-2 ring-white">
                    <Image src={t.avatar} alt={`${t.name} photo`} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{t.name}</div>
                    {/* <div className="text-xs text-slate-600">{t.role}</div> */}
                  </div>
                </figcaption>

                <div className="accent-bar-gradient mt-5 h-1.5 w-10 rounded" />
              </figure>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center sm:mt-10">
          <a
            href="/contact"
            className="btn-primary inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-[15px] font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40"
            aria-label="Contact Share India Brokers"
          >
            Read More
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

// Connect CTA Section Component
function ConnectCTASection() {
  return (
    <section id="connect-cta" aria-labelledby="connect-cta-title" className="isolate">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 md:px-8">
        <h3
          id="connect-cta-title"
          className="text-[clamp(22px,4.2vw,36px)] font-semibold text-slate-900"
        >
          Let&apos;s Connect
        </h3>

        <p className="mx-auto mt-3 max-w-2xl text-[clamp(14px,2.6vw,18px)] leading-relaxed text-slate-700/85">
          Ready to take the next step? Our team of experts is here to help you navigate your journey
          with confidence.
        </p>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Schedule a Call',
              desc: 'Book a consultation with our advisors',
              href: '/contact?type=call',
              iconBg: 'bg-si-primary/10',
              iconCls: 'text-si-primary',
              glowCls: 'hover-glow-blue',
              cardTone: 'bg-white border-slate-200',
            },
            {
              title: 'Send a Message',
              desc: 'Get in touch with questions or inquiries',
              href: '/contact?type=message',
              iconBg: 'bg-si-red/10',
              iconCls: 'text-si-red',
              glowCls: 'hover-glow-red',
              cardTone: 'card-accent-red',
            },
            {
              title: 'Visit Our Office',
              desc: 'Meet our team at our convenient locations',
              href: '/contact?type=visit',
              iconBg: 'bg-si-primary/10',
              iconCls: 'text-si-primary',
              glowCls: 'hover-glow-blue',
              cardTone: 'bg-white border-slate-200',
              wide: true,
            },
          ].map(({ title, desc, href, iconBg, iconCls, glowCls, cardTone, wide }, i) => (
            <Link
              key={title}
              href={href}
              className={[
                'group rounded-xl p-5 text-left sm:p-6',
                'border border-slate-200 bg-white shadow-sm ring-1 ring-slate-900/5',
                'transition hover:border-slate-300 hover:shadow-md',
                cardTone,
                glowCls,
                wide ? 'sm:col-span-2 lg:col-span-1' : '',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40',
              ].join(' ')}
              aria-label={title}
            >
              <div
                className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full ${iconBg}`}
              >
                <svg
                  className={`${iconCls} h-6 w-6`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {i === 0 && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  )}
                  {i === 1 && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  )}
                  {i === 2 && (
                    <>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </>
                  )}
                </svg>
              </div>

              <h4 className="text-[clamp(15px,3.2vw,18px)] font-semibold text-slate-900">
                {title}
              </h4>
              <p className="mt-1 text-[clamp(13px,2.8vw,15px)] text-slate-700/80">{desc}</p>
            </Link>
          ))}
        </div>

        {/* Primary CTA */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 text-[15px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40 sm:px-8 sm:py-4"
          >
            Connect With Our Team
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

// InsurAI Section Component
function InsurAISection() {
  return (
    <section className="isolate">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left - Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-500/10 px-4 py-2 backdrop-blur-sm">
              <FaStar className="text-cyan-600" />
              <span className="text-sm font-semibold text-cyan-900">
                AI-Powered Insurance Advisor
              </span>
            </div>

            <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
              Meet{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                InsurAI
              </span>
            </h2>

            <p className="mt-6 text-xl leading-relaxed text-slate-700/85">
              Your personal AI insurance advisor that simplifies complex insurance decisions and
              supports you throughout the entire policy lifecycle.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  icon: FaShieldAlt,
                  title: 'Smart Recommendations',
                  desc: 'Analyzes your life stage, financial goals, and risk profile to recommend optimal insurance plans',
                },
                {
                  icon: FaLightbulb,
                  title: 'Clear Explanations',
                  desc: 'Explains coverage, exclusions, and benefits in simple language you can understand',
                },
                {
                  icon: FaUsers,
                  title: 'Lifecycle Support',
                  desc: 'Track policies, get renewal reminders, and receive step-by-step claims guidance',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white/80 p-4 backdrop-blur-sm transition-all hover:shadow-md"
                >
                  <div className="flex-shrink-0 rounded-lg bg-gradient-to-br from-cyan-100 to-blue-100 p-3">
                    <feature.icon className="text-xl text-cyan-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{feature.title}</h3>
                    <p className="mt-1 text-sm text-slate-700/85">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://insurai.shareindiainsurance.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                <FaStar className="transition-transform group-hover:rotate-12" />
                Try InsurAI Now
                <ArrowIcon />
              </a>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50"
              >
                Learn More About Us
              </Link>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border-4 border-white bg-gradient-to-br from-white to-cyan-50/50 p-8 shadow-2xl">
              <div className="space-y-6">
                {/* AI Chat Simulation */}
                <div className="rounded-xl bg-white p-4 shadow-md">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600">
                      <FaStar className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">InsurAI</div>
                      <div className="text-xs text-green-600">● Online 24/7</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="rounded-lg bg-gradient-to-r from-cyan-50 to-blue-50 p-3 text-sm text-slate-700">
                      Hi! I&apos;m InsurAI. I can help you find the perfect insurance plan based on
                      your needs.
                    </div>
                    <div className="ml-8 rounded-lg bg-slate-100 p-3 text-sm text-slate-700">
                      I need health insurance for my family
                    </div>
                    <div className="rounded-lg bg-gradient-to-r from-cyan-50 to-blue-50 p-3 text-sm text-slate-700">
                      Great! Let me analyze the best options for you...
                    </div>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Instant Quotes', value: '< 2 min' },
                    { label: 'Plans Compared', value: '40+' },
                    { label: 'Avg. Savings', value: '15%' },
                    { label: 'Response Time', value: '24/7' },
                  ].map((stat, index) => (
                    <div key={index} className="rounded-lg bg-white p-4 text-center shadow-sm">
                      <div className="text-2xl font-bold text-cyan-600">{stat.value}</div>
                      <div className="mt-1 text-xs text-slate-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="bg-app-gradient relative min-h-screen pt-16">
      {/* Enhanced background with better mobile optimization */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Additional subtle pattern overlay */}
        <div className="bg-pattern-dots absolute inset-0 opacity-30" />
      </div>

      {/* Hero Section */}
      <CardScreen id="hero">
        <HeroSection />
      </CardScreen>

      {/* Spacing */}
      <div className="py-8" />

      {/* InsurAI Section */}
      <CardScreen id="insurai">
        <InsurAISection />
      </CardScreen>

      {/* Spacing */}
      <div className="py-8" />

      {/* What We Do Section */}
      <CardScreen id="what-we-do">
        <WhatWeDoSection />
      </CardScreen>

      {/* Featured Insights Section */}
      <CardScreen id="featured-insights">
        <FeaturedInsightsSection />
      </CardScreen>

      {/* Spacing */}
      <div className="py-8" />

      {/* Top News Section */}
      <CardScreen id="top-news">
        <TopNewsSection />
      </CardScreen>

      {/* Spacing */}
      <div className="py-8" />

      {/* Awards & Testimonials Section */}
      <CardScreen id="awards-testimonials">
        <AwardsTestimonialsSection />
      </CardScreen>

      {/* Spacing */}
      <div className="py-8" />

      {/* Connect CTA Section */}
      <CardScreen id="connect-cta">
        <ConnectCTASection />
      </CardScreen>

      {/* Bottom spacing for mobile */}
      <div className="pb-8" />
    </main>
  );
}
