'use client';

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import './style.css';
import { ReactNode } from 'react';
import { IMAGE_BASE_URL } from '@/consts/variables';
import { FadeUp, FadeIn, Stagger, Item, FlyIn } from '@/components/motion';

// Dynamic imports for carousels (client-only)
const MainCaraousel = dynamic(() => import('@/components/main-caraousel'), { ssr: false });
const TopNewsCarousel = dynamic(() => import('@/components/top-news-carousel'), { ssr: false });

// ─── Reusable primitives ──────────────────────────────────────────────────────

function SectionBadge({ children }: { children: ReactNode }) {
  return (
    <span className="badge-chip float-slow group ring-si-primary/10 mb-4 inline-flex cursor-default items-center shadow-sm ring-1">
      <span className="bg-si-primary/40 relative mr-2 flex h-2 w-2 items-center justify-center rounded-full">
        <span className="bg-si-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
        <span className="bg-si-primary relative inline-flex h-1 w-1 rounded-full shadow-[0_0_8px_rgba(45,169,255,0.8)]"></span>
      </span>
      <span className="text-si-ink/80 group-hover:text-si-primary text-[11px] font-bold tracking-[0.1em] uppercase transition-colors duration-300">
        {children}
      </span>
    </span>
  );
}

function ArrowIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="text-si-primary h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Bullet() {
  return (
    <span className="bg-si-primary ring-si-primary/20 inline-block h-1.5 w-1.5 shrink-0 rounded-full ring-2" />
  );
}

/** Full-screen card wrapper used by every homepage section */
function CardScreen({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <section
      id={id}
      className="flex min-h-[calc(100dvh-var(--header-h))] items-center justify-center px-3 first:mt-[var(--header-h)] sm:px-4 md:px-6 lg:px-8 xl:px-12"
    >
      <div className="w-full max-w-7xl rounded-2xl border border-gray-100 bg-white p-4 shadow-lg sm:rounded-3xl sm:p-6 md:p-8 lg:p-10 xl:p-12">
        {children}
      </div>
    </section>
  );
}

// ─── Static data ──────────────────────────────────────────────────────────────

const FOCUS_POINTS = ['Analyse gaps', 'Right product fit', 'Apt underwriting', 'Claims advocacy'];
const STATS_DATA = [
  { k: '6,000+', v: 'Claims handled' },
  { k: '21,000+', v: 'Retail Clients' },
  { k: '9,000+', v: 'Corporate Clients' },
];

const SERVICE_PILLARS = [
  {
    title: 'Advisory & Placement',
    desc: [
      'Market scans, best-fit quotes, negotiation',
      'Property, Marine, Liability',
      'Health & Group Benefits',
    ],
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
        <path
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
  },
  {
    title: 'Claims Advocacy',
    desc: [
      'Strategy, documentation, follow-through',
      'Dedicated claims desk',
      'Faster TAT with liaisons',
    ],
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
        <path
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: 'Risk Engineering',
    desc: [
      'Surveys, loss-prevention, underwriting fit',
      'FM & statutory compliance',
      'Catastrophe & cyber posture',
    ],
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
        <path
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <circle cx="12" cy="12" r="3" strokeWidth={1.8} />
      </svg>
    ),
  },
  {
    title: 'Digital Tools',
    desc: [
      'Requests, vault, renewal tracking, analytics',
      'Self-serve + assisted',
      'API-ready for enterprise',
    ],
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
        <path
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

const AWARDS = [
  {
    year: '2022',
    award: 'SME Superstars — Awarded to SIIB by Chola MS',
    img: '/awards/chola-ms.jpeg',
  },
  {
    year: '2024',
    award: 'Diamond Club — Awarded to SIIB by Digit Inner Circle',
    img: '/awards/digit.jpeg',
  },
  {
    year: '2025',
    award: 'CEO of the Year to Mr. Ajay Kumar Patel — Awarded by UBS Forums',
    img: '/awards/ubs-ceo.jpeg',
  },
  {
    year: '2025',
    award: 'Best Claims Partner of the Year — Awarded to SIIB by UBS Forums',
    img: '/awards/ubs-claims.jpeg',
  },
];

const TESTIMONIALS = [
  {
    name: 'API Holdings',
    text: "Share India Insurance Brokers' proactive approach, professionalism, and flawless execution have made managing our insurance portfolio seamless and efficient — a partnership we truly value.",
    avatar: '/testimonials/api-holding.png',
  },
  {
    name: 'Sunjewels Pvt. Ltd.',
    text: 'For three years, Team Share India — especially Mr. Raunaq Pai, Mr. Shekhar Pradhan, and Mr. Sagar Agre — have impressed us with their professionalism, reliability, and proactive service.',
    avatar: '/testimonials/sun-jewels.png',
  },
  {
    name: 'Global Ocean Logistics India Ltd',
    text: "For over four years, Share India's expertise, responsiveness, and attention to detail have ensured smooth, reliable insurance support and a partnership built on trust and excellence.",
    avatar: '/testimonials/global-ocean.png',
  },
  {
    name: 'Santu Mondal',
    text: "My experience with Raunaq Pai and Share India Insurance has been exceptional — Raunaq's professionalism, expertise, and prompt support made the entire insurance process seamless and trustworthy.",
    avatar: '/testimonials/santu-mondal.png',
  },
];

const INSURAI_FEATURES = [
  {
    title: 'Smart Recommendations',
    desc: 'Analyses your life stage, financial goals, and risk profile to recommend optimal insurance plans.',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
        <path
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: 'Clear Explanations',
    desc: 'Explains coverage, exclusions, and benefits in simple language you can understand.',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
        <path
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    title: 'Lifecycle Support',
    desc: 'Track policies, get renewal reminders, and receive step-by-step claims guidance.',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
        <path
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
];

const INSURAI_STATS = [
  { label: 'Instant Quotes', value: '< 2 min' },
  { label: 'Plans Compared', value: '40+' },
  { label: 'Avg. Savings', value: '15%' },
  { label: 'Response Time', value: '24/7' },
];

const CONNECT_CARDS = [
  {
    title: 'Schedule a Call',
    desc: 'Book a consultation with our advisors',
    href: '/contact?type=call',
    accentCls: 'hover-glow-blue',
    icon: (
      <svg
        className="text-si-primary h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    iconBg: 'bg-si-primary/10',
  },
  {
    title: 'Send a Message',
    desc: 'Get in touch with questions or inquiries',
    href: '/contact?type=message',
    accentCls: 'hover-glow-red card-accent-red',
    icon: (
      <svg className="text-si-red h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    iconBg: 'bg-si-red/10',
  },
  {
    title: 'Visit Our Office',
    desc: 'Meet our team at our convenient locations',
    href: '/contact?type=visit',
    accentCls: 'hover-glow-blue sm:col-span-2 lg:col-span-1',
    icon: (
      <svg
        className="text-si-primary h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
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
      </svg>
    ),
    iconBg: 'bg-si-primary/10',
  },
];

// ─── Sections ─────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section aria-label="Share India insurance hero" className="isolate">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 xl:gap-16">
        {/* Left */}
        <div className="max-w-2xl">
          <FadeIn>
            <div className="text-si-primary border-si-primary/20 bg-si-primary/5 mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold sm:px-4 sm:py-2 sm:text-sm">
              <span className="bg-si-primary h-2 w-2 rounded-full" />
              IRDAI-licensed
            </div>
          </FadeIn>

          <FadeUp delay={0.05}>
            <h1 className="text-si-ink text-4xl leading-[1.1] font-semibold sm:text-5xl md:text-6xl">
              Insurance, <span className="text-gradient-primary">Simplified</span>.
            </h1>
          </FadeUp>

          <FadeUp delay={0.12}>
            <p className="text-si-ink/80 mt-4 max-w-xl text-base leading-relaxed sm:mt-5 sm:text-lg">
              <strong>Share India</strong> focuses on your risk story: we analyse coverage gaps,
              craft the right product fit with apt underwriting, and stand with you at claims—so
              businesses and families can focus on what matters.
            </p>
          </FadeUp>

          {/* Focus chips */}
          <FadeUp delay={0.18}>
            <div className="-mx-1 mt-5 overflow-x-auto pb-2 sm:mt-6 sm:overflow-visible">
              <div className="flex min-w-max gap-2 px-1 sm:min-w-0 sm:flex-wrap">
                {FOCUS_POINTS.map((label) => (
                  <span
                    key={label}
                    className="badge-chip rounded-full px-3 py-1 text-sm whitespace-nowrap shadow-sm ring-1 ring-black/5"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Actions */}
          <FadeUp delay={0.22}>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
              <Link
                href="/contact?type=quote"
                className="btn-primary group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold sm:text-base"
                aria-label="Get a quote"
              >
                Get a Quote
                <span className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none">
                  <ArrowIcon />
                </span>
              </Link>
              <Link
                href="#what-we-do"
                className="btn-ghost inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold sm:text-base"
                aria-label="Explore solutions"
              >
                Explore Solutions
                <ChevronIcon />
              </Link>
            </div>
          </FadeUp>

          {/* Stats */}
          <Stagger delay={0.28} staggerChildren={0.1}>
            <div className="mt-8 grid max-w-lg grid-cols-2 gap-5 sm:gap-6 md:grid-cols-3">
              {STATS_DATA.map(({ k, v }) => (
                <Item key={v}>
                  <div>
                    <div className="accent-bar-gradient mb-2 h-1 w-10 md:w-12" />
                    <div className="text-si-ink text-xl font-extrabold sm:text-2xl">{k}</div>
                    <div className="text-si-ink/70 text-xs font-medium sm:text-sm">{v}</div>
                  </div>
                </Item>
              ))}
            </div>
          </Stagger>
        </div>

        {/* Right — image card */}
        <FlyIn dir="left" delay={0.1} className="relative order-first sm:order-none">
          <div className="bg-si-primary/5 absolute -inset-4 rounded-3xl opacity-30 blur-md sm:-inset-6" />
          <div className="shadow-elevate-vibrant relative rounded-2xl bg-white/95 p-3 sm:p-5">
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
                  12 – 18%
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
        </FlyIn>
      </div>
    </section>
  );
}

function WhatWeDoSection() {
  const WHY_FEATURES = [
    'Personal Claim Support',
    'Tailored wording',
    'Proactive Claims strategy',
    'Digital policy & renewals',
  ];

  return (
    <section id="what-we-do" aria-label="What we do at Share India" className="isolate">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl flex-1">
            <FadeIn>
              <SectionBadge>What We Do</SectionBadge>
            </FadeIn>
            <FadeUp delay={0.06}>
              <h2 className="text-si-ink text-[clamp(22px,4.2vw,36px)] leading-tight font-semibold">
                Share India prioritises <span className="text-gradient-primary">outcomes</span>{' '}
                first
              </h2>
            </FadeUp>
            <FadeUp delay={0.12}>
              <p className="text-si-ink/80 mt-3 text-[clamp(14px,2.6vw,18px)] leading-relaxed">
                We advise, place, and service cover across leading Indian insurers—backed by claims
                advocacy and data-driven risk insights—so you can buy with confidence and recover
                faster.
              </p>
            </FadeUp>
          </div>

          {/* Why choose us box */}
          <FlyIn dir="right" delay={0.08}>
            <aside className="w-full max-w-xl lg:w-auto">
              <div className="border-si-primary/10 rounded-xl border bg-white p-4 shadow-sm sm:p-5">
                <div className="flex items-start gap-3">
                  <svg
                    className="text-si-primary mt-0.5 h-5 w-5 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path
                      strokeWidth={1.6}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3l7 3v5c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-3z"
                    />
                    <path
                      strokeWidth={1.6}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                  <div>
                    <div className="text-si-ink/70 text-sm font-semibold">
                      Why clients choose us
                    </div>
                    <ul className="text-si-ink mt-2 grid gap-2 text-[clamp(13px,2.8vw,16px)] sm:grid-cols-2">
                      {WHY_FEATURES.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <Bullet /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
          </FlyIn>
        </header>

        <div className="bg-si-primary/20 mt-6 h-[1.5px] w-full rounded" />

        {/* Service Pillars */}
        <Stagger delay={0.1} staggerChildren={0.09}>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_PILLARS.map(({ title, icon, desc }) => (
              <Item key={title}>
                <article className="group hover:border-si-primary/20 flex h-full flex-col rounded-xl border border-gray-100 bg-white p-4 transition-all hover:shadow-md sm:p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-si-ink text-[clamp(14px,3.2vw,16px)] font-semibold">
                      {title}
                    </h3>
                    <div className="text-si-primary bg-si-primary/5 group-hover:bg-si-primary/10 rounded-lg p-1.5 transition-colors">
                      {icon}
                    </div>
                  </div>
                  <ul className="text-si-ink/80 space-y-2 text-[clamp(13px,2.8vw,14px)]">
                    {desc.map((l) => (
                      <li key={l} className="flex items-start gap-2">
                        <Bullet /> <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-si-primary/0 group-hover:bg-si-primary mt-auto h-0.5 rounded pt-4 opacity-0 transition-all group-hover:opacity-100" />
                </article>
              </Item>
            ))}
          </div>
        </Stagger>

        {/* CTA strip */}
        <FadeUp delay={0.2}>
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
                className="btn-primary hover-lift inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium"
              >
                Get a Quote <ArrowIcon />
              </Link>
              <Link
                href="/insights"
                className="btn-ghost hover-lift inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium"
              >
                Read Insights <ChevronIcon />
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function InsurAISection() {
  return (
    <section aria-labelledby="insurai-title" className="isolate">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left — content */}
          <div>
            <FadeIn>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-500/10 px-4 py-2">
                <svg
                  className="h-4 w-4 text-cyan-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <span className="text-sm font-semibold text-cyan-900">
                  AI-Powered Insurance Advisor
                </span>
              </div>
            </FadeIn>

            <FadeUp delay={0.06}>
              <h2 id="insurai-title" className="text-si-ink text-4xl font-bold md:text-5xl">
                Meet{' '}
                <span className="to-si-primary bg-gradient-to-r from-cyan-600 bg-clip-text text-transparent">
                  InsurAI
                </span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.12}>
              <p className="text-si-ink/80 mt-5 text-lg leading-relaxed">
                Your personal AI insurance advisor that simplifies complex insurance decisions and
                supports you throughout the entire policy lifecycle.
              </p>
            </FadeUp>

            <Stagger delay={0.18} staggerChildren={0.08}>
              <div className="mt-8 space-y-3">
                {INSURAI_FEATURES.map(({ title, desc, icon }) => (
                  <Item key={title}>
                    <div className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white/80 p-4 transition-all hover:border-cyan-200 hover:shadow-md">
                      <div className="to-si-primary/10 shrink-0 rounded-lg bg-gradient-to-br from-cyan-50 p-2.5 text-cyan-700">
                        {icon}
                      </div>
                      <div>
                        <h3 className="text-si-ink font-semibold">{title}</h3>
                        <p className="text-si-ink/70 mt-1 text-sm">{desc}</p>
                      </div>
                    </div>
                  </Item>
                ))}
              </div>
            </Stagger>

            <FadeUp delay={0.32}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://insurai.shareindiainsurance.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group to-si-primary inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 px-7 py-3.5 font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Try InsurAI Now
                  <ArrowIcon />
                </a>
                <Link
                  href="/ai-toolkit"
                  className="btn-ghost inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-semibold"
                >
                  More services by ShareIndia
                  <ArrowIcon />
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* Right — visual */}
          <FlyIn dir="left" delay={0.1}>
            <div className="relative">
              <div className="to-si-primary/15 absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-400/15 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white bg-gradient-to-br from-white to-cyan-50/50 p-6 shadow-2xl sm:p-8">
                {/* Chat UI */}
                <div className="rounded-xl bg-white p-4 shadow-md">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="to-si-primary flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 shadow-sm">
                      <svg
                        className="h-5 w-5 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-si-ink font-semibold">InsurAI</div>
                      <div className="text-xs text-emerald-600">● Online 24/7</div>
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    <div className="to-si-primary/5 text-si-ink/80 rounded-lg bg-gradient-to-r from-cyan-50 p-3 text-sm">
                      Hi! I&apos;m InsurAI. I can help you find the perfect insurance plan based on
                      your needs.
                    </div>
                    <div className="text-si-ink/80 ml-8 rounded-lg bg-gray-100 p-3 text-sm">
                      I need health insurance for my family
                    </div>
                    <div className="to-si-primary/5 text-si-ink/80 rounded-lg bg-gradient-to-r from-cyan-50 p-3 text-sm">
                      Great! Let me analyse the best options for you...
                    </div>
                  </div>
                </div>

                {/* Stats mini-grid */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {INSURAI_STATS.map(({ label, value }) => (
                    <div
                      key={label}
                      className="rounded-lg bg-white p-3 text-center shadow-sm ring-1 ring-black/5"
                    >
                      <div className="text-xl font-bold text-cyan-600">{value}</div>
                      <div className="text-si-ink/60 mt-0.5 text-xs">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FlyIn>
        </div>
      </div>
    </section>
  );
}

function FeaturedInsightsSection() {
  return (
    <section id="featured-insights" aria-labelledby="featured-insights-title" className="isolate">
      <div className="relative mx-auto max-w-7xl">
        <header className="mb-6 max-w-3xl sm:mb-8">
          <FadeIn>
            <SectionBadge>Insights</SectionBadge>
          </FadeIn>
          <FadeUp delay={0.06}>
            <h2
              id="featured-insights-title"
              className="text-si-ink text-3xl leading-tight font-semibold sm:text-4xl"
            >
              Featured <span className="text-gradient-primary">Insights</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.12}>
            <p className="text-si-ink/80 mt-3 text-base leading-relaxed sm:mt-4 sm:text-lg">
              Expert explainers from Share India Brokers — market trends, risk solutions, and how
              policy changes affect businesses and families in India.
            </p>
          </FadeUp>
        </header>

        <FadeIn delay={0.15}>
          <div
            className="rounded-2xl border border-gray-100 bg-white p-3 shadow-sm ring-1 ring-black/5 sm:p-4"
            role="region"
            aria-label="Featured insights carousel"
          >
            <div className="min-h-[280px] sm:min-h-[320px]">
              <MainCaraousel color="blue" layout={1} />
            </div>
          </div>
        </FadeIn>

        <FadeUp delay={0.2}>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm sm:mt-5 sm:px-6 sm:py-4">
            <div className="flex items-center gap-3">
              <div className="bg-si-primary/30 h-2 w-16 rounded" />
              <p className="text-si-ink/80 text-sm">
                Curated weekly by our brokerage team • No jargon, just outcomes
              </p>
            </div>
            <Link
              href="/insights"
              className="btn-primary inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold"
              aria-label="Explore all insights"
            >
              Explore All Insights
              <ArrowIcon />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function TopNewsSection() {
  const FIND_ITEMS = [
    'Impact on premiums & coverage',
    'Regulatory updates (IRDAI & more)',
    'Sector-wise implications',
    'Clear actionables',
  ];

  return (
    <section
      id="top-news"
      aria-labelledby="top-news-title"
      className="isolate scroll-mt-[var(--header-h)]"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <FadeIn>
              <SectionBadge>News, Decoded</SectionBadge>
            </FadeIn>
            <FadeUp delay={0.06}>
              <h2
                id="top-news-title"
                className="text-si-ink text-[clamp(22px,4.2vw,36px)] leading-tight font-semibold"
              >
                Not caught up? We&apos;ve got you.
              </h2>
            </FadeUp>
            <FadeUp delay={0.12}>
              <p className="text-si-ink/80 mt-3 text-[clamp(14px,2.6vw,18px)] leading-relaxed">
                Our team distils complex insurance and risk headlines into punchy explainers—what
                happened, why it matters, and what you should do next.
              </p>
            </FadeUp>
          </div>

          {/* What you'll find box */}
          <FlyIn dir="right" delay={0.08}>
            <div className="w-full max-w-md lg:w-auto lg:max-w-none">
              <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
                <div className="text-si-ink/70 mb-2 text-sm font-semibold">
                  What you&apos;ll find
                </div>
                <ul className="text-si-ink/80 grid gap-2 text-sm sm:grid-cols-2">
                  {FIND_ITEMS.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckIcon /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FlyIn>
        </div>

        <FadeIn delay={0.18}>
          <div className="mt-8 sm:mt-10">
            <div className="min-h-[260px] sm:min-h-[300px]">
              <TopNewsCarousel />
            </div>
          </div>
        </FadeIn>

        <FadeUp delay={0.22}>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm ring-1 ring-black/5 sm:mt-10 sm:px-6 sm:py-5">
            <div className="flex items-center gap-3">
              <div className="accent-bar-gradient h-2 w-14 rounded" />
              <p className="text-si-ink/80 text-sm">
                Updated weekly • Editor&apos;s picks • No jargon
              </p>
            </div>
            <Link
              href="/news"
              className="btn-primary inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold"
              aria-label="Browse all news"
            >
              Browse All News
              <ArrowIcon />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function AwardsTestimonialsSection() {
  return (
    <section
      id="awards-testimonials"
      aria-labelledby="awards-testimonials-title"
      className="isolate scroll-mt-[var(--header-h)]"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Header */}
        <FadeUp>
          <header className="mb-8 text-center sm:mb-10">
            <SectionBadge>Recognition & Trust</SectionBadge>
            <h2
              id="awards-testimonials-title"
              className="text-si-ink text-[clamp(22px,4.2vw,36px)] leading-tight font-semibold"
            >
              <span className="text-gradient-primary">Awards & Testimonials</span>
            </h2>
            <p className="text-si-ink/80 mx-auto mt-3 max-w-2xl text-[clamp(14px,2.6vw,18px)] leading-relaxed">
              Celebrated for excellence, trusted by clients. Here&apos;s what the industry and our
              partners say about us.
            </p>
          </header>
        </FadeUp>

        {/* Awards */}
        <Stagger staggerChildren={0.09}>
          <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AWARDS.map((a) => (
              <Item key={a.award}>
                <article className="group hover:border-si-primary/20 flex h-full flex-col rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md sm:p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-100 bg-white">
                      <Image
                        src={a.img}
                        alt={`${a.year} award`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="accent-bar-gradient mb-1 h-1.5 w-10 rounded" />
                      <h3 className="text-si-ink text-[clamp(16px,3.2vw,18px)] font-semibold">
                        {a.year}
                      </h3>
                    </div>
                  </div>
                  <p className="text-si-ink/80 text-[clamp(13px,2.8vw,14px)]">{a.award}</p>
                </article>
              </Item>
            ))}
          </div>
        </Stagger>

        {/* Testimonials */}
        <div>
          <FadeUp>
            <div className="mb-6 text-center sm:mb-8">
              <h3 className="text-si-ink text-[clamp(20px,3.8vw,30px)] leading-tight font-semibold">
                <span className="text-gradient-primary">What Our Clients Say</span>
              </h3>
            </div>
          </FadeUp>

          <Stagger staggerChildren={0.1}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {TESTIMONIALS.map((t) => (
                <Item key={t.name}>
                  <figure className="card-accent-red flex h-full flex-col justify-between rounded-xl border border-gray-100 bg-white p-5 shadow-sm ring-1 ring-black/5 transition-all hover:shadow-md sm:p-6">
                    <blockquote className="text-si-ink/85 text-[clamp(13px,2.8vw,15px)] leading-relaxed">
                      &ldquo;{t.text}&rdquo;
                    </blockquote>
                    <figcaption className="mt-5 flex items-center gap-3">
                      <div className="relative h-11 w-11 overflow-hidden rounded-full shadow ring-2 ring-white">
                        <Image
                          src={t.avatar}
                          alt={`${t.name} logo`}
                          fill
                          sizes="44px"
                          className="object-cover"
                        />
                      </div>
                      <div className="text-si-ink font-semibold">{t.name}</div>
                    </figcaption>
                    <div className="accent-bar-gradient mt-5 h-1.5 w-10 rounded" />
                  </figure>
                </Item>
              ))}
            </div>
          </Stagger>

          <FadeUp delay={0.2}>
            <div className="mt-8 flex justify-center sm:mt-10">
              <Link
                href="/about"
                className="btn-primary focus-visible:ring-si-primary/40 inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-semibold focus-visible:ring-2"
                aria-label="Read more about Share India Insurance"
              >
                Read More About Us
                <ArrowIcon />
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function ConnectCTASection() {
  return (
    <section
      id="connect-cta"
      aria-labelledby="connect-cta-title"
      className="bg-gradient-to-b from-white to-si-primary-200 py-16 transition-colors duration-500 md:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 md:px-8">
        <FadeUp>
          <h2
            id="connect-cta-title"
            className="text-si-ink text-[clamp(24px,4.5vw,42px)] font-bold tracking-tight"
          >
            Ready to <span className="text-gradient-primary">Get Started?</span>
          </h2>
          <p className="text-si-ink/70 mx-auto mt-4 max-w-2xl text-lg leading-relaxed md:text-xl">
            Whether you&apos;re an individual, a startup, or a large enterprise, our experts are
            ready to build the perfect protection strategy for you.
          </p>
        </FadeUp>

        <Stagger delay={0.1} staggerChildren={0.1}>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CONNECT_CARDS.map(({ title, desc, href, accentCls, icon, iconBg }) => (
              <Item key={title}>
                <Link
                  href={href}
                  className={[
                    'group card-vibrant hover-glow-blue hover-lift block rounded-2xl p-6 text-left sm:p-8',
                    'border border-white/50 shadow-md ring-1 ring-black/5',
                    'transition-all duration-300',
                    'focus-visible:ring-si-primary/40 focus:outline-none focus-visible:ring-2',
                    accentCls,
                  ].join(' ')}
                  aria-label={title}
                >
                  <div
                    className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-110 ${iconBg}`}
                  >
                    {icon}
                  </div>
                  <h3 className="text-si-ink text-xl font-bold tracking-tight">{title}</h3>
                  <p className="text-si-ink/60 mt-2 text-sm leading-relaxed">{desc}</p>
                  <div className="text-si-primary mt-6 flex items-center gap-2 text-xs font-bold tracking-wider uppercase opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    Learn More <ArrowIcon className="h-3 w-3" />
                  </div>
                </Link>
              </Item>
            ))}
          </div>
        </Stagger>

        <FadeUp delay={0.3}>
          <div className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="btn-primary hover-glow-blue focus:ring-si-primary/30 inline-flex items-center gap-3 rounded-2xl px-10 py-5 text-base font-bold transition-all hover:scale-105 focus:ring-4 active:scale-95"
            >
              Speak to a Consultant
              <ArrowIcon className="h-5 w-5" />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main className="bg-app-gradient relative min-h-screen pt-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-pattern-dots absolute inset-0 opacity-20" />
      </div>

      <CardScreen id="hero">
        <HeroSection />
      </CardScreen>

      <div className="py-6" />

      <CardScreen id="insurai">
        <InsurAISection />
      </CardScreen>

      <div className="py-6" />

      <CardScreen id="what-we-do">
        <WhatWeDoSection />
      </CardScreen>

      <CardScreen id="featured-insights">
        <FeaturedInsightsSection />
      </CardScreen>

      <div className="py-6" />

      <CardScreen id="top-news">
        <TopNewsSection />
      </CardScreen>

      <div className="py-6" />

      <CardScreen id="awards-testimonials">
        <AwardsTestimonialsSection />
      </CardScreen>

      <div className="py-6" />

      <CardScreen id="connect-cta">
        <ConnectCTASection />
      </CardScreen>

      <div className="pb-8" />
    </main>
  );
}
