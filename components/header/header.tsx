'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const INDUSTRIES = [
  'Infrastructure Industry',
  'Life Sciences & Pharma Industry',
  'Plastic Industry',
  'Startup Industry',
  'Real Estate Industry',
  'Chemical Industry',
  'Logistics Industry',
  'Textile Industry',
  'Solar Industry',
];

const CORPORATE_INSURANCE = [
  'Property & Engineering Insurance',
  'Liability Insurance',
  'Marine Transit Insurance',
  'Trade Credit Insurance',
  'Media & Entertainment Insurance',
  'Employee Benefits Insurance',
  'Motor Fleet Insurance',
  'Office Package Insurance',
  'Shopkeepers Package & Jewellers Block',
  'Group Travel Insurance Plans',
];

/** ===== Controls ===== */
const FULL_WIDTH_DROPDOWNS = false; // <-- set true for 100% width dropdowns
const SUBMENU_BG_CLS = 'bg-white'; // <-- clean white background for submenus

type NavItem = {
  title: string;
  href: string;
  children?: { label: string; href: string; desc?: string }[];
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/ & /g, '-and-')
    .replace(/\s+/g, '-')
    .replace(/[^a-z-]/g, '');

// ---- Logo with fallback
const LOGO_PRIMARY = '/share-india-transparent_header.png';
const LOGO_FALLBACK = '/logo.png';

function BrandLogo({ className }: { className?: string }) {
  const [src, setSrc] = useState(LOGO_PRIMARY);
  return (
    <div className={`relative ${className ?? ''}`} aria-label="Share India Insurance - Home">
      <Image
        src={src}
        alt="Share India Insurance"
        fill
        className="object-contain"
        priority
        onError={() => setSrc(LOGO_FALLBACK)}
      />
    </div>
  );
}

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);
  const pathname = usePathname();

  // IMPORTANT: removed hover:underline here to avoid double underline on top-level tabs.
  const baseLinkCls =
    'transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black/10';

  // Scroll-aware visibility
  const [visible, setVisible] = useState(true);
  const lastYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const lastY = lastYRef.current;

        if (y <= 8) {
          setVisible(true);
        } else {
          const goingDown = y > lastY + 4;
          const goingUp = y < lastY - 4;
          if (goingDown) setVisible(false);
          if (goingUp) setVisible(true);
        }

        lastYRef.current = y;
        tickingRef.current = false;
      });
    };

    lastYRef.current = window.scrollY;
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Body scroll lock for mobile drawer
  useEffect(() => {
    if (!mobileMenu) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileMenu]);

  // Data
  const primaryLinks: NavItem[] = [
    {
      title: 'Retail',
      href: '/retail',
      children: [
        { label: 'Health', href: '/retail/health', desc: 'Plans, coverage, claims' },
        { label: 'Term', href: '/retail/term', desc: 'Pure protection, riders' },
        { label: 'Life', href: '/retail/life', desc: 'Whole, endowment, ULIP' },
        { label: 'Motor', href: '/retail/motor', desc: 'Car, bike, own-damage' },
        { label: 'Travel', href: '/retail/travel', desc: 'Domestic & international' },
        { label: 'Home', href: '/retail/home', desc: 'Structure & contents' },
        {
          label: 'Cyber',
          href: '/retail/cyber',
          desc: 'Digital security & identity theft',
        },
      ],
    },
    {
      title: 'Industries',
      href: '/industries',
      children: INDUSTRIES.map((t) => ({
        label: t,
        href: `/industries/${slugify(t)}`,
        desc: 'Solutions & case studies',
      })),
    },
    {
      title: 'Corporate Insurance',
      href: '/corporate-insurance',
      children: CORPORATE_INSURANCE.map((t) => ({
        label: t,
        href: `/corporate-insurance/${slugify(t)}`,
        desc: 'Coverage, FAQs & claims',
      })),
    },
    {
      title: 'Insights',
      href: '/insights',
      children: [
        {
          label: 'Claim Stories',
          href: '/insights/claim-stories',
          desc: 'Real journeys & learnings',
        },
        { label: 'Blogs', href: '/blogs', desc: 'Expert takes, tips & trends' },
        { label: 'News', href: '/news', desc: 'Announcements & media coverage' },
        { label: 'Premium Estimator', href: '/premium-estimator', desc: 'Calculate your premium' },
      ],
    },
    {
      title: 'About',
      href: '/about',
      children: [
        { label: 'Our Story', href: '/about#our-story', desc: 'Where we began & why' },
        { label: 'Leadership', href: '/about#leadership', desc: 'Experience that guides us' },
        { label: 'Our Team', href: '/about#our-team', desc: 'People behind the promise' },
        {
          label: 'Awards & Recognition',
          href: '/about#awards-recognition',
          desc: 'Milestones & credibility',
        },
        { label: 'Testimonials', href: '/about#testimonials', desc: 'What clients say' },
        { label: 'Careers', href: '/careers', desc: 'Grow with us' },
        { label: 'Contact Us', href: '/contact', desc: 'Get in touch with us' },
      ],
    },
  ];

  // const utilityLinks = [
  //   { title: 'Contact Us', href: '/contact', variant: 'link' as const },
  //   { title: 'Be a POSP', href: '/be-a-posp', variant: 'button' as const },
  // ];

  const toggleDesktop = (key: string) =>
    setOpenDesktopDropdown((prev) => (prev === key ? null : key));
  const toggleMobileAccordion = (key: string) =>
    setOpenMobileAccordion((prev) => (prev === key ? null : key));
  const activeCls = (href: string) => (pathname === href ? 'text-black' : 'text-black/80');

  // Hover-exit delay + gap guard
  const hoverTimer = useRef<number | null>(null);
  const openNow = (key: string) => {
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
    setOpenDesktopDropdown(key);
  };
  const scheduleClose = (delay = 140) => {
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => {
      setOpenDesktopDropdown(null);
      hoverTimer.current = null;
    }, delay);
  };
  const cancelClose = () => {
    if (hoverTimer.current) {
      window.clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
  };

  // width classes for dropdown panels
  const panelWidthCls = FULL_WIDTH_DROPDOWNS
    ? 'left-0 right-0 w-screen rounded-none border-0' // <-- 100% width
    : 'left-0 w-[38rem] rounded-xl border border-slate-200'; // compact

  return (
    <header
      className={[
        'border-si-primary/10 fixed inset-x-0 top-0 z-50 border-b',
        'bg-white/95 backdrop-blur-md transition-all duration-300 will-change-transform',
        'shadow-[0_4px_20px_-4px_rgba(45,169,255,0.1)]',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0',
      ].join(' ')}
    >
      {/* DESKTOP NAVBAR */}
      <div className="relative hidden w-full items-center justify-between px-6 py-3 lg:flex xl:px-10">
        {/* Left: Logo + Primary */}
        <div className="flex items-center gap-8 xl:gap-10">
          <Link href="/" aria-label="Share India Insurance - Home" className="hover-lift">
            <BrandLogo className="h-14 w-40 xl:h-16 xl:w-44" />
          </Link>

          <nav className="flex items-center gap-5 text-[15px] font-semibold xl:gap-6 xl:text-[16px]">
            {primaryLinks.map((link) => {
              const hasChildren = !!link.children?.length;

              if (!hasChildren) {
                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    className={`${baseLinkCls} ${activeCls(link.href)} decoration-2 underline-offset-4 hover:underline`}
                  >
                    {link.title}
                  </Link>
                );
              }

              return (
                <div
                  key={link.title}
                  className="dropdown-guard relative"
                  onMouseEnter={() => openNow(link.title)}
                  onMouseLeave={() => scheduleClose(150)}
                >
                  <button
                    type="button"
                    onClick={() => toggleDesktop(link.title)}
                    className={`${baseLinkCls} group flex items-center gap-1 ${activeCls(link.href)}`}
                    aria-haspopup="menu"
                    aria-expanded={openDesktopDropdown === link.title}
                  >
                    {/* Top-level: keep ONLY the animated bar underline (no text underline here) */}
                    <span className="relative">
                      {link.title}
                      <span className="absolute -bottom-1 left-0 block h-[2px] w-0 bg-blue-600 transition-all group-hover:w-full" />
                    </span>
                    <FaChevronDown
                      className={`text-xs transition-transform ${openDesktopDropdown === link.title ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <AnimatePresence>
                    {openDesktopDropdown === link.title && (
                      <motion.div
                        key={link.title}
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className={[
                          'absolute top-full z-50 mt-3 overflow-hidden p-0 shadow-[0_20px_40px_-20px_rgba(30,64,175,0.25)]',
                          panelWidthCls,
                          SUBMENU_BG_CLS, // <-- clean white background
                        ].join(' ')}
                        onMouseEnter={cancelClose}
                        onMouseLeave={() => scheduleClose(120)}
                        role="menu"
                      >
                        <div className="mx-auto grid max-w-7xl gap-2 p-4 sm:grid-cols-2">
                          {link.children!.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="group rounded-lg px-3 py-2 transition-all hover:bg-white/40 focus-visible:outline-none"
                              role="menuitem"
                            >
                              <div className="flex flex-col">
                                {/* Submenu items: SINGLE underline on hover */}
                                <span className="text-[14px] font-medium text-slate-900 decoration-2 underline-offset-4 group-hover:underline">
                                  {child.label}
                                </span>
                                {child.desc && (
                                  <span className="text-[12px] text-slate-700">{child.desc}</span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                        {/* view all row */}
                        <div className="mx-auto max-w-7xl border-t border-white/40 px-4 py-2 text-right">
                          <Link
                            href={link.href}
                            className="text-[12px] text-blue-800 decoration-2 underline-offset-4 hover:underline"
                          >
                            View all {link.title.toLowerCase()}
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Right: Utility */}
        <div className="text-si-ink flex items-center gap-3 text-[13px] font-medium xl:gap-4 xl:text-[14px]">
          {/* Utility links: single underline on hover */}
          <Link
            href="/be-a-posp"
            className="btn-primary hover-lift rounded-full px-4 py-2 text-sm font-semibold transition-all xl:px-5 xl:py-2.5"
          >
            Be a POSP
          </Link>
          <a
            href="https://insurai.shareindiainsurance.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hover-lift rounded-full px-4 py-2 text-sm font-semibold transition-all xl:px-5 xl:py-2.5"
          >
            Talk to an Agent
          </a>
        </div>
      </div>

      {/* MOBILE NAVBAR */}
      <div className="flex w-full items-center justify-between px-4 py-3 lg:hidden">
        <Link href="/" aria-label="Share India Insurance - Home" className="hover-lift">
          <BrandLogo className="h-8 w-32 sm:h-10 sm:w-36" />
        </Link>
        <button
          onClick={() => setMobileMenu(true)}
          aria-label="Open menu"
          type="button"
          className="text-si-ink hover:bg-si-primary/10 hover:text-si-primary rounded-lg p-2 text-xl transition-colors"
        >
          <FaBars />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden ${mobileMenu ? '' : 'pointer-events-none'}`}
        aria-hidden={!mobileMenu}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${mobileMenu ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileMenu(false)}
        />
        {/* Drawer */}
        <aside
          role="dialog"
          aria-modal="true"
          className={`absolute top-0 right-0 flex h-screen w-[86vw] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ${mobileMenu ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white px-6 py-4">
            <Link href="/" onClick={() => setMobileMenu(false)}>
              <BrandLogo className="h-8 w-28" />
            </Link>
            <button
              onClick={() => setMobileMenu(false)}
              className="text-2xl text-black"
              aria-label="Close menu"
              type="button"
            >
              <FaTimes />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            {/* Primary */}
            <nav className="flex flex-col gap-2 text-[16px] font-medium text-black">
              {primaryLinks.map((link) => {
                const hasChildren = !!link.children?.length;

                if (!hasChildren) {
                  return (
                    <Link
                      key={link.title}
                      href={link.href}
                      onClick={() => setMobileMenu(false)}
                      className="rounded px-1 py-2 decoration-2 underline-offset-4 transition-colors hover:underline"
                    >
                      {link.title}
                    </Link>
                  );
                }

                const open = openMobileAccordion === link.title;
                return (
                  <div key={link.title} className="rounded">
                    <button
                      type="button"
                      onClick={() => toggleMobileAccordion(link.title)}
                      className="flex w-full items-center justify-between px-1 py-2"
                      aria-expanded={open}
                      aria-controls={`accordion-${slugify(link.title)}`}
                    >
                      <span>{link.title}</span>
                      <FaChevronDown
                        className={`text-sm transition-transform ${open ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div
                      id={`accordion-${slugify(link.title)}`}
                      className={`ml-2 overflow-hidden border-l pl-3 transition-[max-height,opacity] duration-300 ${open ? 'opacity-100' : 'max-h-0 opacity-0'}`}
                      style={{ maxHeight: open ? 800 : 0 }}
                    >
                      <div className="flex flex-col py-1">
                        {link.children!.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileMenu(false)}
                            className="py-2 text-[14px] font-normal text-black/80 decoration-2 underline-offset-4 transition-colors hover:underline"
                          >
                            {child.label}
                            {child.desc && (
                              <span className="block text-[12px] text-slate-500">{child.desc}</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>

            {/* Secondary / Utility */}
            <div className="mt-8 flex flex-col gap-3 border-t pt-6 text-[14px] font-medium text-black">
              <Link
                href="/be-a-posp"
                onClick={() => setMobileMenu(false)}
                className="rounded-full border border-blue-700 bg-blue-700 px-3 py-2 text-center text-white shadow-[0_2px_10px_rgba(37,99,235,0.35)] ring-1 ring-white/40 transition hover:bg-blue-800"
              >
                Be a POSP
              </Link>
              <a
                href="https://insurai.shareindiainsurance.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenu(false)}
                className="rounded-full border border-blue-700 bg-blue-700 px-3 py-2 text-center text-white shadow-[0_2px_10px_rgba(37,99,235,0.35)] ring-1 ring-white/40 transition hover:bg-blue-800"
              >
                Talk to an Agent
              </a>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
