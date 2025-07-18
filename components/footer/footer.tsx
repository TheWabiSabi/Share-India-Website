import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Types for better type safety
interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  // Footer sections data - easily configurable
  const footerSections: FooterSection[] = [
    {
      title: 'Products',
      links: [
        { label: 'Health Insurance', href: '/health-insurance' },
        { label: 'Life Insurance', href: '/life-insurance' },
        { label: 'Term Insurance', href: '/term-insurance' },
        { label: 'Motor Insurance', href: '/motor-insurance' },
        { label: 'Travel Insurance', href: '/travel-insurance' },
        { label: 'Corporate Insurance', href: '/corporate-insurance' },
      ],
    },
    {
      title: 'Contact Us',
      links: [
        { label: 'Locate Us', href: '/locate-us' },
        { label: 'Grievance Redressal', href: '/grievance-redressal' },
      ],
    },
    {
      title: 'Info Center',
      links: [
        { label: 'Insyclopedia', href: '/insyclopedia' },
        { label: 'Downloads', href: '/downloads' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms & Conditions', href: '/terms-conditions' },
        { label: 'Legal Disclaimers', href: '/legal-disclaimers' },
        { label: 'Cancellation & Refund Policy', href: '/cancellation-refund' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { label: 'Insurepreneur (POSP)', href: '/insurepreneur' },
        { label: 'IRDAI Website', href: 'https://www.irdai.gov.in' },
        { label: 'Group Site', href: '/group-site' },
      ],
    },
  ];

  // Company contact information
  const contactInfo = {
    address:
      'Unit No- 1, D Wing, Ground Floor, Gundecha Onclave, Kherani Rd, Next to Post Office, Saki Naka, Andheri (E), Mumbai - 400072',
    phone: '1800 210 2022',
    email: 'contact.ins@shareindia.co.in',
  };

  // Social media links
  const socialLinks = [
    {
      name: 'Twitter',
      href: '#',
      svgPath:
        'M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z',
    },
    {
      name: 'Facebook',
      href: '#',
      svgPath:
        'M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z',
    },
    {
      name: 'Instagram',
      href: '#',
      svgPath:
        'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z', // Add YouTube SVG path here if available
    },
    {
      name: 'LinkedIn',
      href: '#',
      svgPath:
        'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z',
    },
  ];
  return (
    <footer className="bg-si-dark text-si-slate font-serif">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-7">
          {/* Company Info Section */}
          <div className="lg:col-span-2">
            <div className="mb-7">
              <Image
                src="/logo.png"
                alt="Share India Insurance"
                width={200}
                height={60}
                className="mb-4"
              />
              <p className="text-sm leading-relaxed text-gray-400">
                Your trusted partner for comprehensive insurance solutions.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="mb-6 flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 transition-colors duration-200 hover:bg-slate-600"
                  aria-label={social.name}
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    aria-hidden="true"
                    className="object-contain"
                  >
                    <path d={social.svgPath} />
                  </svg>
                </Link>
              ))}
            </div>

            {/* Contact Information */}
            <div className="space-y-2 text-sm">
              <div className="flex items-start">
                <span className="mr-2">📍</span>
                <span className="text-gray-400">{contactInfo.address}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                <Link href={`tel:${contactInfo.phone}`} className="text-gray-400 hover:text-white">
                  {contactInfo.phone}
                </Link>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✉️</span>
                <Link
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-400 hover:text-white"
                >
                  {contactInfo.email}
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="mb-4 font-semibold text-si-offwhite">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Subscription
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-white font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-400 text-sm">
                Subscribe to our newsletter for insurance tips, updates, and exclusive offers.
              </p>
            </div>
            <div className="flex w-full md:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-l-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-md transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Bottom Footer */}
      <div className="border-t border-si-bluegreen bg-si-dark">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between text-sm text-gray-400 md:flex-row">
            <div className="mb-4 text-center md:mb-0 md:text-left">
              <p>© Share India Insurance Brokers Private Limited</p>
              <p>CIN: U66000DL2018PTC337469 | IRDA Direct Broker Code: IRDA/DB 692</p>
              <p>Licensed by IRDAI | Category - Direct Life & General</p>
              <p>Copyright © 2024 ShareIndiaInsurance.com. All Rights Reserved</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/sitemap" className="transition-colors hover:text-white">
                Site Map
              </Link>
              <Link href="/privacy-statement" className="transition-colors hover:text-white">
                Privacy Statement
              </Link>
              <Link href="/legal-notice" className="transition-colors hover:text-white">
                Legal Notice
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
