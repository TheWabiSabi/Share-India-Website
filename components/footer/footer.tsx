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
      title: "Products",
      links: [
        { label: "Health Insurance", href: "/health-insurance" },
        { label: "Life Insurance", href: "/life-insurance" },
        { label: "Term Insurance", href: "/term-insurance" },
        { label: "Motor Insurance", href: "/motor-insurance" },
        { label: "Travel Insurance", href: "/travel-insurance" },
        { label: "Corporate Insurance", href: "/corporate-insurance" }
      ]
    },
    {
      title: "Contact Us",
      links: [
        { label: "Locate Us", href: "/locate-us" },
        { label: "Grievance Redressal", href: "/grievance-redressal" }
      ]
    },
    {
      title: "Info Center",
      links: [
        { label: "Insyclopedia", href: "/insyclopedia" },
        { label: "Downloads", href: "/downloads" },
        { label: "Blog", href: "/blog" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms & Conditions", href: "/terms-conditions" },
        { label: "Legal Disclaimers", href: "/legal-disclaimers" },
        { label: "Cancellation & Refund Policy", href: "/cancellation-refund" }
      ]
    },
    {
      title: "Quick Links",
      links: [
        { label: "Insurepreneur (POSP)", href: "/insurepreneur" },
        { label: "IRDAI Website", href: "https://www.irdai.gov.in" },
        { label: "Group Site", href: "/group-site" }
      ]
    }
  ];

  // Company contact information
  const contactInfo = {
    address: "Unit No- 1, D Wing, Ground Floor, Gundecha Onclave, Kherani Rd, Next to Post Office, Saki Naka, Andheri (E), Mumbai - 400072",
    phone: "1800 210 2022",
    email: "contact.ins@shareindia.co.in"
  };

  // Social media links
  const socialLinks = [
  { name: "Twitter", href: "#", icon: "/icons/twitter.png" },
  { name: "Facebook", href: "#", icon: "/icons/facebook.png" },
  { name: "YouTube", href: "#", icon: "/icons/youtube.png" },
  { name: "LinkedIn", href: "#", icon: "/icons/linkedin.png" }
  ];

  return (
    <footer className="bg-slate-800 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8">
          
          {/* Company Info Section */}
          <div className="lg:col-span-2">
            <div className="mb-7">
              <Image
                src="/share-india-logo.png"
                alt="Share India Insurance"
                width={200}
                height={60}
                className="mb-4"
              />
              <p className="text-sm text-gray-400 leading-relaxed">
                Your trusted partner for comprehensive insurance solutions.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
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
                <Link href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-white">
                  {contactInfo.email}
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Links Sections */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
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

      {/*Newsletter Subscription*/}
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
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>© Share India Insurance Brokers Private Limited</p>
              <p>CIN: U66000DL2018PTC337469 | IRDA Direct Broker Code: IRDA/DB 692</p>
              <p>Licensed by IRDAI | Category - Direct Life & General</p>
              <p>Copyright © 2024 ShareIndiaInsurance.com. All Rights Reserved</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Site Map
              </Link>
              <Link href="/privacy-statement" className="hover:text-white transition-colors">
                Privacy Statement
              </Link>
              <Link href="/legal-notice" className="hover:text-white transition-colors">
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