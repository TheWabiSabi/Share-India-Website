'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronDown, FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const menuItems = [
  {
    title: 'About',
    links: ['Journey', 'Impact', 'Leaders and Team', 'Testimonials'],
  },
  {
    title: 'Insights',
    links: [],
  },
  { title: 'Blog', links: [] },
];

const socialLinks = {
  fb: 'https://facebook.com',
  insta: 'https://instagram.com',
  x: 'https://x.com',
  linkedIn: 'https://linkedin.com',
};

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleDropdown = (menu: string) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  const handleMouseEnter = (menu: string) => {
    if (menuItems.find((item) => item.title === menu)!.links.length > 0) {
      setDropdownOpen(menu);
    }
  };

  const handleClick = (menu: string) => {
    // Navigate to the main page for the menu item
    window.location.href = `/${menu.toLowerCase().replace(/ /g, '-')}`;
    // setDropdownOpen(null); // optional
  };

  return (
    <nav className="text-si-dark relative left-0 z-50 flex h-[10vh] w-[100vw] items-center bg-white px-[4vw] font-serif shadow-md">
      {/* Logo */}
      <div className="flex h-full items-center pt-3 lg:pt-0">
        <Link
          href={'/'}
          style={{ position: 'relative', height: '140px', width: '140px', marginRight: '2vw' }}
        >
          <Image src="/logo.png" alt="Logo" fill style={{ objectFit: 'contain' }} />
        </Link>
      </div>

      {/* Hamburger (Mobile) */}
      <button
        onClick={() => setMobileMenu(true)}
        className="absolute top-1/2 right-4 -translate-y-1/2 text-2xl focus:outline-none lg:hidden"
        aria-label="Open menu"
      >
        <FaBars />
      </button>

      {/* Desktop Menu */}
      <div className="hidden flex-grow flex-col justify-between lg:flex">
        <style jsx>{`
          .buttonStyle {
            position: relative;
          }
          .hoverMebottom:after {
            position: absolute;
            top: 100%;
            left: 0%;
            width: 0;
            height: 4px;
            background: #395b64;
            display: block;
            content: '';
            transition: width 0.35s ease-in-out;
          }
          .hoverMebottom:hover:after {
            width: 100%;
          }
        `}</style>

        <div className="flex h-[10vh] flex-grow flex-col items-end gap-[2vw] text-[2vh] tracking-wide">
          <div className="text-si-dark flex h-[6.5vh] items-center justify-end gap-[1vw] bg-white">
            {/* Search Button */}
            <button>
              <FaSearch />
            </button>
            <button className="hoverMebottom buttonStyle hover:text-si-bluegreen/80 text-[1.8vh] transition-all duration-300">
              Search
            </button>
            |{/* Main Links */}
            <div className="flex gap-[1vw] text-[1.8vh] font-medium">
              <Link
                href="/contact"
                className="hover:text-si-bluegreen/80 transition-all duration-300"
              >
                <button className="hoverMebottom buttonStyle">Contact Us</button>
              </Link>

              {/* Dropdown Menu */}
              {menu.links.length > 0 && dropdownOpen === menu.title && (
                <div className="bg-si-offwhite absolute top-full left-0 z-60 mt-[1vh] w-[18vw] rounded-md p-[1vh] shadow-xl">
                  {menu.links.map((link) => (
                    <Link
                      key={link}
                      onClick={() => setDropdownOpen(null)}
                      href={`/${menu.title.toLowerCase().replace(/ /g, '-')}/${link
                        .toLowerCase()
                        .replace(/ /g, '-')}`}
                      className="hover:bg-si-slate hover:text-si-bluegreen block rounded-md px-[1.2vw] py-[0.8vh] text-[1.8vh] transition-all duration-300"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* Social Media Icons could go here if needed */}
          </div>
          <div className="-my-3 flex items-end justify-end gap-[2vw] text-[2vh] tracking-wide">
            {menuItems.map((menu) => (
              // FIX: wrapper contains label+dropdown; events handled on wrapper (no gap!)
              <div
                key={menu.title}
                className="group hoverMebottom relative"
                onMouseEnter={() => handleMouseEnter(menu.title)}
                onMouseLeave={handleMouseLeave}
                style={{ display: 'inline-block' }} // makes sure dropdown touches menu item!
              >
                <Link
                  className="hoverMebottom hover:text-si-bluegreen/80 flex h-[5vh] items-center gap-[0.5vw] transition-all duration-300"
                  onClick={() => handleClick(menu.title)}
                  href={`/${menu.title.toLowerCase()}`}
                >
                  {menu.title}
                  {menu.links.length > 0 && <FaChevronDown className="text-[1.5vh]" />}
                </Link>

                {menu.links.length > 0 && dropdownOpen === menu.title && (
                  <div
                    className="absolute top-full left-0 z-60 mt-[1vh] w-[18vw] rounded-md bg-white p-[1vh] shadow-xl"
                    style={{ minWidth: 180 }}
                  >
                    {menu.links.map((link) => (
                      <Link
                        key={link}
                        onClick={() => setDropdownOpen(null)}
                        href={`/${menu.title.toLowerCase().replace(/ /g, '-')}/${link.toLowerCase().replace(/ /g, '-')}`}
                        className="hover:bg-si-slate hover:text-si-bluegreen block rounded-md px-[1.2vw] py-[0.8vh] text-[1.8vh] transition-all duration-300"
                      >
                        {link}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className="pointer-events-none fixed top-0 left-0 z-50 h-screen w-screen lg:hidden">
        {/* Backdrop overlay */}
        <div
          className={`absolute top-0 left-0 h-full w-full bg-black transition-opacity duration-300 ease-in-out ${
            mobileMenu ? 'pointer-events-auto opacity-40' : 'opacity-0'
          }`}
          onClick={() => setMobileMenu(false)}
          aria-hidden="true"
        />

        {/* Animated Drawer */}
        <div
          className={`bg-si-offwhite fixed top-0 left-0 flex h-screen w-[76vw] flex-col p-6 pt-12 shadow-xl transition-transform duration-300 ease-in-out ${
            mobileMenu ? 'pointer-events-auto translate-x-0' : '-translate-x-full'
          }`}
          style={{ zIndex: 60 }}
          tabIndex={-1}
          aria-hidden={!mobileMenu}
        >
          <button
            onClick={() => setMobileMenu(false)}
            className="absolute top-3 right-3 text-2xl focus:outline-none"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
          <div className="flex flex-col gap-3">
            {menuItems.map((menu) => (
              <div key={menu.title} className="relative">
                <Link
                  className="flex w-full items-center py-2 text-left text-lg font-medium hover:text-blue-500"
                  onClick={() => {
                    setMobileMenu(false);
                    toggleDropdown(menu.title);
                  }}
                  href={`/${menu.title.toLowerCase()}`}
                >
                  {menu.title}
                  {menu.links.length > 0 && (
                    <FaChevronDown
                      className="ml-2 text-base transition-transform"
                      style={{
                        transform: dropdownOpen === menu.title ? 'rotate(180deg)' : '',
                      }}
                    />
                  )}
                </Link>

                {menu.links.length > 0 && dropdownOpen === menu.title && (
                  <div className="mt-1 ml-5 flex flex-col">
                    {menu.links.map((link) => (
                      <Link
                        key={link}
                        href={`/${menu.title.toLowerCase().replace(/ /g, '-')}/${link
                          .toLowerCase()
                          .replace(/ /g, '-')}`}
                        className="hover:bg-si-slate/30 block rounded px-2 py-1 text-base transition-all hover:text-blue-600"
                        onClick={() => setMobileMenu(false)}
                      >
                        {link}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-auto flex gap-4 py-4">
            <a
              href={socialLinks.fb}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href={socialLinks.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <FaXTwitter />
            </a>
            <a
              href={socialLinks.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={socialLinks.insta}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
