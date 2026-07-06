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

const LOGO_PRIMARY = '/share-india-transparent_header.webp';
const LOGO_FALLBACK = '/logo.webp';

function BrandLogo({ className }: { className?: string }) {
  const [src, setSrc] = useState(LOGO_PRIMARY);
  return (
    <div className={`relative ${className ?? ''}`} aria-label="Share India Insurance - Home">
      <Image
        src={src}
        alt="Share India Insurance"
        fill
        sizes="(max-width: 768px) 160px, 176px"
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
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();
  const lastYRef = useRef(0);
  const tickingRef = useRef(false);
  const hoverTimer = useRef<number | null>(null);

  const baseLinkCls =
    'transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-si-primary/30';

  useEffect(() => {
    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 16);
        if (y <= 8) {
          setVisible(true);
        } else {
          if (y > lastYRef.current + 4) setVisible(false);
          if (y < lastYRef.current - 4) setVisible(true);
        }
        lastYRef.current = y;
        tickingRef.current = false;
      });
    };
    lastYRef.current = window.scrollY;
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenu) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileMenu]);

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
        { label: 'Cyber', href: '/retail/cyber', desc: 'Digital security & identity theft' },
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
        {
          label: 'Investor Relations',
          href: '/about/investor-relations',
          desc: 'Annual returns & notices',
        },
        { label: 'Careers', href: '/careers', desc: 'Grow with us' },
        { label: 'Contact Us', href: '/contact', desc: 'Get in touch with us' },
      ],
    },
  ];

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

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-300 will-change-transform',
        scrolled
          ? 'border-si-primary/10 border-b bg-white/97 shadow-[0_4px_24px_-4px_rgba(45,169,255,0.12)] backdrop-blur-md'
          : 'bg-white/90 backdrop-blur-sm',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-3 opacity-0',
      ].join(' ')}
    >
      {/* DESKTOP */}
      <div className="relative hidden w-full items-center justify-between px-6 py-3 lg:flex xl:px-10">
        <div className="flex items-center gap-8 xl:gap-10">
          <Link href="/" aria-label="Share India Insurance - Home">
            <BrandLogo className="h-14 w-40 xl:h-16 xl:w-44" />
          </Link>

          <nav className="flex items-center gap-5 text-[15px] font-semibold xl:gap-6 xl:text-[16px]">
            {primaryLinks.map((link) => {
              const active = isActive(link.href);
              if (!link.children?.length) {
                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    className={`${baseLinkCls} relative py-1 ${active ? 'text-si-primary' : 'text-si-ink hover:text-si-primary'}`}
                  >
                    {link.title}
                    {active && (
                      <span className="bg-si-primary absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full" />
                    )}
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
                    onClick={() =>
                      setOpenDesktopDropdown((p) => (p === link.title ? null : link.title))
                    }
                    className={`${baseLinkCls} group flex items-center gap-1.5 py-1 ${active ? 'text-si-primary' : 'text-si-ink hover:text-si-primary'}`}
                    aria-haspopup="menu"
                    aria-expanded={openDesktopDropdown === link.title}
                  >
                    <span className="relative">
                      {link.title}
                      <span
                        className={`bg-si-primary absolute -bottom-0.5 left-0 block h-0.5 transition-all duration-200 ${openDesktopDropdown === link.title || active ? 'w-full' : 'w-0 group-hover:w-full'}`}
                      />
                    </span>
                    <FaChevronDown
                      className={`text-[10px] transition-transform duration-200 ${openDesktopDropdown === link.title ? 'text-si-primary rotate-180' : ''}`}
                    />
                  </button>

                  <AnimatePresence>
                    {openDesktopDropdown === link.title && (
                      <motion.div
                        key={link.title}
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{ duration: 0.16, ease: 'easeOut' }}
                        className="border-si-primary/10 absolute top-full left-0 z-50 mt-3 w-[40rem] overflow-hidden rounded-2xl border bg-white shadow-[0_20px_48px_-12px_rgba(45,169,255,0.2),0_0_0_1px_rgba(45,169,255,0.06)]"
                        onMouseEnter={cancelClose}
                        onMouseLeave={() => scheduleClose(120)}
                        role="menu"
                      >
                        {/* Top accent bar */}
                        <div className="from-si-primary via-si-primary-400 to-si-primary-600 h-0.5 w-full bg-gradient-to-r" />
                        <div className="mx-auto grid gap-1 p-3 sm:grid-cols-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="group hover:bg-si-primary/5 flex flex-col rounded-xl px-3 py-2.5 transition-all focus-visible:outline-none"
                              role="menuitem"
                              onClick={() => setOpenDesktopDropdown(null)}
                            >
                              <span className="text-si-ink group-hover:text-si-primary text-[13.5px] font-semibold transition-colors">
                                {child.label}
                              </span>
                              {child.desc && (
                                <span className="text-si-ink/50 mt-0.5 text-[11.5px]">
                                  {child.desc}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                        <div className="border-si-primary/8 mx-3 mb-2 border-t px-1 py-2 text-right">
                          <Link
                            href={link.href}
                            className="text-si-primary hover:text-si-primary-600 text-[12px] font-semibold transition-colors"
                            onClick={() => setOpenDesktopDropdown(null)}
                          >
                            View all {link.title.toLowerCase()} →
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

        {/* Right CTAs */}
        <div className="flex items-center gap-3 xl:gap-4">
          <Link
            href="/be-a-posp"
            className="btn-ghost rounded-full px-4 py-2 text-sm font-semibold xl:px-5"
          >
            Be a POSP
          </Link>
          <Link
            href="/ai-toolkit"
            className="btn-primary rounded-full px-4 py-2 text-sm font-semibold xl:px-5"
          >
            AI Toolkit
          </Link>
          {/* <a
            href="https://insurai.shareindiainsurance.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary rounded-full px-4 py-2 text-sm font-semibold xl:px-5"
          >
            Talk to an Agent
          </a> */}
        </div>
      </div>

      {/* MOBILE BAR */}
      <div className="flex w-full items-center justify-between px-4 py-3 lg:hidden">
        <Link href="/" aria-label="Share India Insurance - Home">
          <BrandLogo className="h-8 w-32 sm:h-10 sm:w-36" />
        </Link>
        <button
          onClick={() => setMobileMenu(true)}
          aria-label="Open menu"
          type="button"
          className="text-si-ink hover:bg-si-primary/10 hover:text-si-primary rounded-xl p-2 text-xl transition-colors"
        >
          <FaBars />
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden ${mobileMenu ? '' : 'pointer-events-none'}`}
        aria-hidden={!mobileMenu}
      >
        <div
          className={`bg-si-dark/40 absolute inset-0 backdrop-blur-sm transition-opacity duration-300 ${mobileMenu ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileMenu(false)}
        />
        <aside
          role="dialog"
          aria-modal="true"
          className={`absolute top-0 right-0 flex h-screen w-[86vw] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${mobileMenu ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Drawer header */}
          <div className="border-si-primary/10 sticky top-0 z-10 flex items-center justify-between border-b bg-white px-5 py-4">
            <Link href="/" onClick={() => setMobileMenu(false)}>
              <BrandLogo className="h-8 w-28" />
            </Link>
            <button
              onClick={() => setMobileMenu(false)}
              className="text-si-ink hover:text-si-primary rounded-lg p-1 text-xl transition-colors"
              aria-label="Close menu"
              type="button"
            >
              <FaTimes />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-5">
            <nav className="text-si-ink flex flex-col gap-1 text-[15px] font-medium">
              {primaryLinks.map((link) => {
                if (!link.children?.length) {
                  return (
                    <Link
                      key={link.title}
                      href={link.href}
                      onClick={() => setMobileMenu(false)}
                      className={`rounded-xl px-3 py-2.5 transition-colors ${isActive(link.href) ? 'bg-si-primary/8 text-si-primary font-semibold' : 'hover:bg-si-primary/5'}`}
                    >
                      {link.title}
                    </Link>
                  );
                }

                const open = openMobileAccordion === link.title;
                return (
                  <div key={link.title} className="overflow-hidden rounded-xl">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMobileAccordion((p) => (p === link.title ? null : link.title))
                      }
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 transition-colors ${open ? 'bg-si-primary/8 text-si-primary' : 'hover:bg-si-primary/5'}`}
                      aria-expanded={open}
                    >
                      <span>{link.title}</span>
                      <FaChevronDown
                        className={`text-xs transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div
                      className="overflow-hidden transition-[max-height,opacity] duration-300"
                      style={{ maxHeight: open ? 800 : 0, opacity: open ? 1 : 0 }}
                    >
                      <div className="border-si-primary/15 ml-3 flex flex-col gap-0.5 border-l pt-1 pb-2 pl-3">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileMenu(false)}
                            className="hover:text-si-primary text-si-ink/80 hover:bg-si-primary/5 rounded-lg px-2 py-2 text-[13.5px] transition-colors"
                          >
                            {child.label}
                            {child.desc && (
                              <span className="text-si-ink/40 block text-[11px]">{child.desc}</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>

            <div className="border-si-primary/10 mt-6 flex flex-col gap-2.5 border-t pt-5">
              <Link
                href="/be-a-posp"
                onClick={() => setMobileMenu(false)}
                className="btn-ghost rounded-xl py-2.5 text-center text-sm font-semibold"
              >
                Be a POSP
              </Link>
              <Link
                href="/ai-toolkit"
                onClick={() => setMobileMenu(false)}
                className="btn-primary rounded-xl py-2.5 text-center text-sm font-semibold"
              >
                AI Toolkit
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
