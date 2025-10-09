import Link from 'next/link';
import Image from 'next/image';
import { memo, useMemo } from 'react';

const FOCUS_POINTS = ['Analyse gaps', 'Right product fit', 'Apt underwriting', 'Claims advocacy'];

const STATS_DATA = [
  { k: '6,000+', v: 'Claims handled' },
  { k: '21,000+', v: 'Retail Clients' },
  { k: '9,000+', v: 'Corporate Clients' },
];

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

export default function HeroSection() {
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
          <div className="from-si-primary/15 to-si-red/10 text-si-primary border-si-primary/20 mb-3 inline-flex items-center gap-2 rounded-full border bg-gradient-to-r px-3 py-1.5 text-xs font-semibold backdrop-blur-sm sm:mb-4 sm:px-4 sm:py-2 sm:text-sm">
            <span className="accent-dot-vibrant h-2 w-2 rounded-full" />
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
          <div className="from-si-primary/20 to-si-red/10 absolute -inset-4 rounded-3xl bg-gradient-to-br opacity-40 blur-md sm:-inset-6" />
          <div className="shadow-elevate-vibrant relative rounded-2xl border bg-white/95 p-3 sm:p-5">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="https://minio-api.internal.wabisabitech.in/share-india/about/meeting.png"
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
              <div className="card-vibrant rounded-xl p-3 sm:p-4">
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
