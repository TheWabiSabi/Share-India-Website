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
  children?: { label: string; href: string }[];
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/ & /g, '-and-')
    .replace(/\s+/g, '-')
    .replace(/[^a-z-]/g, '');

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);
  const pathname = usePathname();

  // Fonts & focus rings match homepage (black text on white/light-blue)
  const baseLinkCls =
    'transition-colors hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black/10';

  /* ========= Scroll-aware visibility (fade out on down, fade in on up) ========= */
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

  /* ========= Body scroll lock for mobile drawer ========= */
  useEffect(() => {
    if (!mobileMenu) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileMenu]);

  /* ========= Data ========= */
  const primaryLinks: NavItem[] = [
    { title: 'Retail', href: '/retail' },
    {
      title: 'Industries',
      href: '/industries',
      children: INDUSTRIES.map((t) => ({
        label: t,
        href: `/industries/${slugify(t)}`,
      })),
    },
    {
      title: 'Corporate Insurance',
      href: '/corporate-insurance',
      children: CORPORATE_INSURANCE.map((t) => ({
        label: t,
        href: `/corporate-insurance/${slugify(t)}`,
      })),
    },
    { title: 'Insights', href: '/insights' },
    { title: 'About', href: '/about' },
  ];

  const secondaryLinks = [
    { title: 'Contact Us', href: '/contact' },
    { title: 'Careers', href: '/careers' },
    { title: 'Blogs', href: '/blogs' },
    { title: 'News', href: '/news' },
  ];

  const toggleDesktop = (key: string) =>
    setOpenDesktopDropdown((prev) => (prev === key ? null : key));
  const toggleMobileAccordion = (key: string) =>
    setOpenMobileAccordion((prev) => (prev === key ? null : key));
  const activeCls = (href: string) => (pathname === href ? 'text-black' : 'text-black/80');

  /* ========= Hover-exit delay + gap guard for desktop dropdown ========= */
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

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 border-b border-slate-100 bg-white font-sans shadow-sm',
        'transition-all duration-300 will-change-transform',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0',
      ].join(' ')}
    >
      {/* DESKTOP NAVBAR */}
      <div className="hidden w-full items-center justify-between px-15 py-4 lg:flex">
        {/* Left: Logo + Primary */}
        <div className="flex items-center gap-8">
          <Link href="/" className="relative h-10 w-36" aria-label="Share India Insurance - Home">
            <Image src="/logo.png" alt="Logo" fill className="object-contain" />
          </Link>

          <nav className="flex items-center gap-6 text-[16px] font-semibold">
            {primaryLinks.map((link) => {
              const hasChildren = !!link.children?.length;

              if (!hasChildren) {
                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    className={`${baseLinkCls} ${activeCls(link.href)}`}
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
                    className={`${baseLinkCls} flex items-center gap-1 ${activeCls(link.href)}`}
                    aria-haspopup="menu"
                    aria-expanded={openDesktopDropdown === link.title}
                  >
                    {link.title}
                    <FaChevronDown
                      className={`text-xs transition-transform ${
                        openDesktopDropdown === link.title ? 'rotate-180' : ''
                      }`}
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
                        className="absolute top-full left-0 z-20 mt-3 w-[34rem] rounded-md border border-slate-200 bg-white p-4 shadow-xl"
                        onMouseEnter={cancelClose}
                        onMouseLeave={() => scheduleClose(120)}
                        role="menu"
                      >
                        <div
                          className={`grid gap-1 ${
                            link.children!.length > 8 ? 'grid-cols-2' : 'grid-cols-1'
                          }`}
                        >
                          {link.children!.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="rounded px-3 py-2 text-[14px] text-black/80 transition-colors hover:bg-[#F2F7FF] hover:text-black"
                              role="menuitem"
                            >
                              {child.label}
                            </Link>
                          ))}
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
        <div className="flex items-center gap-6 text-[14px] font-normal text-black/80">
          {secondaryLinks.map((link) => (
            <Link key={link.title} href={link.href} className={baseLinkCls}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      {/* MOBILE NAVBAR */}
      <div className="flex w-full items-center justify-between bg-white px-4 py-3 shadow-sm lg:hidden">
        <Link href="/" className="relative h-8 w-24" aria-label="Share India Insurance - Home">
          <Image src="/logo.png" alt="Logo" fill className="object-contain" />
        </Link>
        <button
          onClick={() => setMobileMenu(true)}
          aria-label="Open menu"
          type="button"
          className="text-xl text-black"
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
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            mobileMenu ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenu(false)}
        />
        {/* Drawer */}
        <aside
          role="dialog"
          aria-modal="true"
          className={`absolute top-0 right-0 flex h-screen w-[85vw] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ${
            mobileMenu ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b px-6 py-4">
            <Link href="/" className="relative h-8 w-24" onClick={() => setMobileMenu(false)}>
              <Image src="/logo.png" alt="Logo" fill className="object-contain" />
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
                      className="rounded px-1 py-2 transition-colors hover:text-black"
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
                      className={`ml-2 overflow-hidden border-l pl-3 transition-[max-height,opacity] duration-300 ${
                        open ? 'opacity-100' : 'max-h-0 opacity-0'
                      }`}
                      style={{ maxHeight: open ? 600 : 0 }}
                    >
                      <div className="flex flex-col py-1">
                        {link.children!.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileMenu(false)}
                            className="py-2 text-[14px] font-normal text-black/80 transition-colors hover:text-black"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>

            {/* Secondary */}
            <div className="mt-8 flex flex-col gap-3 border-t pt-6 text-[14px] font-normal text-black/80">
              {secondaryLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={() => setMobileMenu(false)}
                  className="transition-colors hover:text-black"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
