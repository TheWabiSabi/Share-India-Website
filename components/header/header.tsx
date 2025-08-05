'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();

  const primaryLinks = [
    { title: 'Capabilities', href: '/capabilities' },
    { title: 'Industries', href: '/industries' },
    { title: 'Insights', href: '/insights' },
    { title: 'About', href: '/about' },
  ];

  const secondaryLinks = [
    { title: 'Contact Us', href: '/contact' },
    { title: 'Careers', href: '/careers' },
    { title: 'Investors', href: '/investors' },
    { title: 'News', href: '/news' },
  ];

  return (
    <header className="relative z-50 w-full bg-white shadow-sm">
      {/* DESKTOP NAVBAR */}
      <div className="hidden w-full items-center justify-between px-12 py-4 lg:flex">
        {/* Left: Logo + Primary Links */}
        <div className="flex items-center gap-10">
          <Link href="/" className="relative h-18 w-48">
            <Image src="/logo.png" alt="Logo" fill className="object-contain" />
          </Link>

          <nav className="text-md flex items-center gap-8 font-semibold text-gray-800">
            {primaryLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className={`transition hover:text-red-600 ${
                  pathname === link.href ? 'text-red-600' : ''
                }`}
              >
                {link.title}
              </Link>
            ))}

            <button aria-label="Search" className="text-xl text-gray-800 hover:text-red-600">
              <FiSearch />
            </button>
          </nav>
        </div>

        {/* Right: Utility Links */}
        <div className="flex items-center gap-6 text-sm font-medium text-gray-500">
          {secondaryLinks.map((link) => (
            <Link key={link.title} href={link.href} className="transition hover:text-gray-800">
              {link.title}
            </Link>
          ))}

          <span className="mx-1 text-gray-300">|</span>

          <div className="flex items-center gap-1 font-semibold text-gray-800">
            <FaGlobe />
            <span>Global</span>
            <span className="font-normal text-gray-500">| EN</span>
          </div>
        </div>
      </div>

      {/* MOBILE NAVBAR */}
      <div className="flex w-full items-center justify-between bg-white px-4 py-3 shadow-sm lg:hidden">
        {/* Logo */}
        <Link href="/" className="relative h-8 w-20">
          <Image src="/logo.png" alt="Logo" fill className="object-contain" />
        </Link>

        {/* Icons */}
        <div className="flex items-center gap-6 text-xl text-gray-800">
          <button aria-label="Search">
            <FiSearch />
          </button>
          <button onClick={() => setMobileMenu(true)} aria-label="Open menu">
            <FaBars />
          </button>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {mobileMenu && (
        <div className="fixed inset-0 z-50 bg-white px-6 py-8 lg:hidden">
          <div className="mb-6 flex items-center justify-between">
            <Link href="/" className="relative h-8 w-20">
              <Image src="/logo.png" alt="Logo" fill className="object-contain" />
            </Link>
            <button
              onClick={() => setMobileMenu(false)}
              className="text-2xl text-gray-800"
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>

          <nav className="flex flex-col gap-5 text-lg font-semibold text-gray-800">
            {primaryLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                onClick={() => setMobileMenu(false)}
                className="transition hover:text-red-600"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-4 border-t pt-6 text-base text-gray-500">
            {secondaryLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                onClick={() => setMobileMenu(false)}
                className="transition hover:text-gray-800"
              >
                {link.title}
              </Link>
            ))}

            <div className="flex items-center gap-2 border-t pt-4 font-semibold text-gray-800">
              <FaGlobe />
              <span>Global</span>
              <span className="font-normal text-gray-500">| EN</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
