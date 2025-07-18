'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';
import Image from 'next/image'; // Import the Image component from next/image

const menuItems = [
  {
    title: 'About',
    links: ['Overview', 'Founders and Donors', 'Reports', 'Recruitment'],
  },
  {
    title: 'People',
    links: ['Core Faculty', 'Associate Faculty', 'Students', 'Alumni', 'Staff'],
  },
  { title: 'Seminars', links: [] },
  {
    title: 'News & Events',
    links: ['News', 'Updates', 'Events', 'Newsletter'],
  },
  {
    title: 'Collaboration',
    links: ['Overview', 'SBI Technology Hub', 'Honda Cars India'],
  },
];

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    // Navbar Component
    <nav className="bg-si-offwhite left-0 z-50 flex h-[13vh] w-screen items-center pr-[2vw] font-serif text-si-dark shadow-md">
      <style jsx>{`
        .buttonStyle {
          position: relative;
        }
        .hoverMTop:after {
          position: absolute;
          bottom: 100%;
          left: 0;
          width: 0;
          height: 2px;
          background: #395b64;
          display: block;
          content: '';
          transition: width 0.5s ease-in-out;
        }
        .hoverMTop:hover:after {
          width: 100%;
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
        .hoverMeleft:after {
          position: absolute;
          top: 0%;
          left: 100%;
          width: 2px;
          height: 0;
          background: #395b64;
          display: block;
          content: '';
          transition: height 0.5s ease-in-out;
        }
        .hoverMeleft:hover:after {
          height: 100%;
        }
        .hoverMeRight:after {
          position: absolute;
          top: 0%;
          right: 100%;
          width: 2px;
          height: 0;
          background: #395b64;
          display: block;
          content: '';
          transition: height 0.5s ease-in-out;
        }
        .hoverMeRight:hover:after {
          height: 100%;
        }
      `}</style>

      {/* Logo Section on the Very Left */}
      <div className="flex h-full items-center pl-[3vw]">
        <div
          style={{
            position: 'relative',
            height: '150px',
            width: '150px',
            marginRight: '2vw',
          }}
        >
          <Image src="/logo.png" alt="Logo" layout="fill" objectFit="contain" />
        </div>
        {/* <div style={{ position: "relative", height: "30%" }}>
          <h1>Share India</h1>
        </div> */}
      </div>

      {/* Navigation and Other Elements on the Right */}
      <div className="flex flex-grow flex-col justify-between">
        {/* First Row (Search, Main Links, Social Media) */}
        {/* <div className="h-[6.5vh] flex  gap-[1vw] justify-end items-center bg-white ">
          <button>
            <FaSearch />
          </button>
          <button className="text-[1.8vh] hoverMebottom buttonStyle hover:text-blue-600 transition-all duration-300">
            Search
          </button>
          <div className="flex  gap-[1vw] text-[1.8vh] font-medium ">
            <Link
              href="/recruitment"
              className="hover:text-blue-600 transition-all duration-300"
            >
              <button className=" hoverMebottom buttonStyle">
                Recruitment
              </button>
            </Link>
            |
            <Link
              href="/admissions"
              className="hover:text-blue-600 transition-all duration-300"
            >
              <button className=" hoverMebottom buttonStyle">Admissions</button>
            </Link>
            |
            <Link
              href="/contact"
              className="hover:text-blue-600 transition-all duration-300"
            >
              <button className=" hoverMebottom buttonStyle">Contact Us</button>
            </Link>
            |
          </div>
          <div className="flex gap-[1vw]">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-[2vh] hover:text-blue-500 transition-all duration-300" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-[2vh] hover:text-blue-500 transition-all duration-300" />
            </a>
          </div>
        </div> */}

        {/* Second Row (Main Navigation) */}
        <div className="text- hoverMebottom flex h-[6vh] items-end justify-end gap-[2vw] text-[2vh] tracking-wide">
          {menuItems.map((menu) => (
            <div key={menu.title} className="group relative">
              {/* Main Dropdown Button */}
              <button
                className="hoverMebottom flex h-[5vh] items-center gap-[0.5vw] transition-all duration-300 hover:text-blue-500"
                onClick={() => toggleDropdown(menu.title)}
              >
                {menu.title}
                {menu.links.length > 0 && <FaChevronDown className="text-[1.5vh]" />}
              </button>

              {/* Dropdown Menu */}
              {menu.links.length > 0 && dropdownOpen === menu.title && (
                <div className="absolute top-full left-0 mt-[1vh] w-[18vw] animate-pulse rounded-md bg-si-offwhite p-[1vh] shadow-xl">
                  {menu.links.map((link) => (
                    <Link
                      key={link}
                      href={`/${menu.title.toLowerCase().replace(/ /g, '-')}/${link
                        .toLowerCase()
                        .replace(/ /g, '-')}`}
                      className="block rounded-md px-[1.2vw] py-[0.8vh] text-[1.8vh] transition-all duration-300 hover:bg-gray-100 hover:text-blue-500"
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
    </nav>
  );
}
