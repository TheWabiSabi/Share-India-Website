'use client';
import React from 'react';
import Image from 'next/image';
import {
  FaShieldAlt,
  FaFileContract,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
  FaChevronRight,
  FaPills,
  FaRecycle,
  FaRocket,
  FaBuilding,
  FaFlask,
  FaTruck,
  FaTshirt,
  FaSolarPanel,
} from 'react-icons/fa';
import { MdEngineering } from 'react-icons/md';

// Industry Categories with Details
const INDUSTRIES = [
  {
    name: 'Infrastructure Industry',
    icon: <MdEngineering className="text-3xl text-blue-600" />,
    description:
      'Comprehensive insurance solutions for construction, roads, bridges, power projects, and large-scale infrastructure development.',
    risks: [
      'Contractor All Risks (CAR) insurance',
      'Erection All Risks (EAR) coverage',
      'Delay in Start-Up (DSU) insurance',
      'Third-party liability protection',
    ],
    image: '/images/infrastructure.jpg',
  },
  {
    name: 'Life Sciences & Pharma Industry',
    icon: <FaPills className="text-3xl text-blue-600" />,
    description:
      'Specialized coverage for pharmaceutical manufacturing, biotech research, clinical trials, and drug development operations.',
    risks: [
      'Product liability insurance',
      'Clinical trials liability',
      'Research & development protection',
      'Regulatory compliance coverage',
    ],
    image: '/images/pharma.jpg',
  },
  {
    name: 'Plastic Industry',
    icon: <FaRecycle className="text-3xl text-blue-600" />,
    description:
      'Tailored insurance for plastic manufacturing, injection molding, extrusion processes, and polymer production facilities.',
    risks: [
      'Machinery breakdown insurance',
      'Fire and special perils coverage',
      'Product liability protection',
      'Business interruption insurance',
    ],
    image: '/images/plastic.jpg',
  },
  {
    name: 'Startup Industry',
    icon: <FaRocket className="text-3xl text-blue-600" />,
    description:
      'Flexible insurance solutions for tech startups, SaaS companies, and emerging businesses across all growth stages.',
    risks: [
      'Directors & Officers (D&O) liability',
      'Errors & Omissions (E&O) insurance',
      'Cyber liability coverage',
      'Employment practices liability',
    ],
    image: '/images/startup.jpg',
  },
  {
    name: 'Real Estate Industry',
    icon: <FaBuilding className="text-3xl text-blue-600" />,
    description:
      'Complete protection for real estate developers, property management, construction projects, and commercial properties.',
    risks: [
      'Builders risk insurance',
      'Property all-risk coverage',
      'Professional indemnity insurance',
      'Public liability protection',
    ],
    image: '/images/real-estate.jpg',
  },
  {
    name: 'Chemical Industry',
    icon: <FaFlask className="text-3xl text-blue-600" />,
    description:
      'Comprehensive coverage for chemical manufacturing, processing plants, storage facilities, and hazardous material handling.',
    risks: [
      'Pollution liability insurance',
      'Stock and tank storage coverage',
      'Process interruption insurance',
      'Environmental liability protection',
    ],
    image: '/images/chemical.jpg',
  },
  {
    name: 'Logistics Industry',
    icon: <FaTruck className="text-3xl text-blue-600" />,
    description:
      'End-to-end insurance for logistics operations, fleet management, warehousing, and supply chain activities.',
    risks: [
      'Motor fleet insurance',
      'Cargo in-transit coverage',
      'Warehouse stock insurance',
      'Carrier legal liability',
    ],
    image: '/images/logistics.jpg',
  },
  {
    name: 'Textile Industry',
    icon: <FaTshirt className="text-3xl text-blue-600" />,
    description:
      'Specialized insurance for textile manufacturing, garment production, dyeing units, and export-oriented facilities.',
    risks: [
      'Fire and allied perils insurance',
      'Machinery breakdown coverage',
      'Stock-in-process protection',
      'Export credit insurance',
    ],
    image: '/images/textile.jpg',
  },
  {
    name: 'Solar Industry',
    icon: <FaSolarPanel className="text-3xl text-blue-600" />,
    description:
      'Renewable energy insurance for solar power plants, panel manufacturing, EPC projects, and O&M operations.',
    risks: [
      'Solar panel installation insurance',
      'Performance warranty coverage',
      'Business interruption protection',
      'Equipment breakdown insurance',
    ],
    image: '/images/solar.jpg',
  },
];

// Why Industry-Specific Insurance Matters
const KEY_BENEFITS = [
  'Specialized risk assessment tailored to industry dynamics',
  'Compliance with sector-specific regulations and standards',
  'Coverage for unique operational and technical risks',
  'Expert claims handling with industry knowledge',
  'Cost-effective premiums through sector expertise',
  'Risk mitigation strategies aligned with business goals',
];

// What SIIB Offers
const SIIB_OFFERINGS = [
  {
    title: 'Industry Expertise',
    description:
      'Deep understanding of sector-specific risks, regulatory requirements, and operational challenges across diverse industries.',
  },
  {
    title: 'Customized Solutions',
    description:
      'Tailored insurance programs designed to address unique exposures and business models in your industry.',
  },
  {
    title: 'End-to-End Support',
    description:
      'From risk assessment to claims settlement, comprehensive support at every stage of your insurance journey.',
  },
];

// Contact Component
const Contact = ({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) => (
  <div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4">
    <div className="text-2xl text-blue-600">{icon}</div>
    <div>
      <div className="text-sm text-gray-600">{label}</div>
      <div className="font-semibold text-gray-900">{value}</div>
    </div>
  </div>
);

// Industry Card Component
const IndustryCard = ({
  icon,
  name,
  description,
  risks,
}: {
  icon: React.ReactNode;
  name: string;
  description: string;
  risks: string[];
}) => (
  <div className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-300 hover:shadow-lg">
    <div className="mb-4 flex items-center gap-4">
      <div className="transition-transform group-hover:scale-110">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
    </div>
    <p className="mb-4 text-gray-700">{description}</p>
    <div className="mb-3 text-sm font-semibold text-gray-900">Key Coverage Areas:</div>
    <ul className="space-y-2">
      {risks.map((risk, index) => (
        <li key={index} className="flex items-start text-sm text-gray-600">
          <FaChevronRight className="mt-1 mr-2 text-blue-400" />
          {risk}
        </li>
      ))}
    </ul>
    <div className="mt-5">
      <a
        href={`/industries/${name.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and')}`}
        className="inline-flex items-center text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
      >
        Learn More <FaChevronRight className="ml-1 text-xs" />
      </a>
    </div>
  </div>
);

const IndustriesPage = () => {
  return (
    <div className="min-h-screen bg-white pt-[8vh] text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://minio-api.internal.wabisabitech.in/share-india/industry/factory.jpg"
            alt="Industry insurance solutions"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/50 to-slate-900/30 backdrop-blur-sm" />
        </div>

        <div className="relative w-full pt-[15vh] md:pt-[30vh]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-white">
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                Industry-Specific Insurance Solutions
              </h1>
              <p className="mt-6 text-lg text-gray-100/90 md:text-xl">
                Specialized insurance coverage tailored to the unique risks and challenges of your
                industry. From infrastructure to life sciences, logistics to renewable energy—we
                understand your business.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/premium-estimator"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-100 px-6 py-3 font-semibold text-blue-800 hover:bg-blue-200"
                >
                  <FaShieldAlt className="mr-2" />
                  Get Coverage Proposal
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-white hover:bg-white/10"
                >
                  <FaFileContract className="mr-2" />
                  Book Risk Assessment
                </a>
              </div>
              <div className="mt-4 text-sm text-gray-100">
                Trusted by leading enterprises across 9+ major industry sectors in India.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Industry-Specific Insurance Section */}
      <section className="from-si-primary-200 w-full border-b border-gray-100 bg-gradient-to-b to-transparent lg:min-h-screen">
        <div className="mx-auto max-w-[90vw] px-4 py-[10vh] sm:px-6 lg:max-w-[75vw] lg:px-8 lg:pt-[20vh]">
          <h2 className="text-3xl font-bold md:text-4xl">
            Why Industry-Specific Insurance Matters
          </h2>
          <p className="mt-[9vh] text-lg text-gray-700">
            Every industry faces unique operational risks, regulatory requirements, and business
            challenges. Generic insurance policies often leave critical exposures unaddressed.
            Industry-specific insurance ensures comprehensive protection aligned with your
            sector&#39;s distinct needs.
          </p>

          <div className="mt-[10vh] grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Key Advantages</h3>
              <ul className="mt-8 space-y-2 text-base text-gray-700">
                {KEY_BENEFITS.map((benefit, index) => (
                  <li key={index} className="mb-6 flex items-start">
                    <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">What SIIB Offers</h3>
              <div className="mt-8 space-y-5">
                {SIIB_OFFERINGS.map((offering, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="mb-2 text-lg font-semibold text-gray-900">{offering.title}</div>
                    <div className="text-base text-gray-600">{offering.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="to-si-primary-200 w-full border-b border-gray-100 bg-gradient-to-b from-transparent lg:min-h-screen">
        <div className="mx-auto max-w-[90vw] px-4 py-[10vh] sm:px-6 lg:max-w-[75vw] lg:px-8">
          <h2 className="text-3xl font-bold md:text-4xl">Industries We Serve</h2>
          <p className="mt-6 text-lg text-gray-700">
            Comprehensive insurance solutions designed for the specific operational, technical, and
            regulatory challenges of your industry.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {INDUSTRIES.map((industry, index) => (
              <IndustryCard
                key={index}
                icon={industry.icon}
                name={industry.name}
                description={industry.description}
                risks={industry.risks}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="to-si-primary-200 w-full border-b border-gray-100 bg-gradient-to-t from-transparent">
        <div className="mx-auto max-w-[90vw] px-4 py-14 sm:px-6 lg:max-w-[75vw] lg:px-8">
          <h2 className="text-3xl font-bold md:text-4xl">Our Approach to Industry Insurance</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg">
              <div className="mb-3 text-2xl font-bold text-blue-600">01</div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Risk Assessment</h3>
              <p className="text-gray-700">
                In-depth analysis of your industry operations, identifying sector-specific risks,
                compliance requirements, and potential exposures.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg">
              <div className="mb-3 text-2xl font-bold text-blue-600">02</div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Solution Design</h3>
              <p className="text-gray-700">
                Customized insurance programs combining standard and specialized coverage to address
                your unique business needs and risk profile.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg">
              <div className="mb-3 text-2xl font-bold text-blue-600">03</div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Ongoing Support</h3>
              <p className="text-gray-700">
                Continuous risk monitoring, policy reviews, claims assistance, and advisory support
                throughout your business lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="to-si-primary-200 w-full bg-gradient-to-b from-transparent">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="bg-si-white rounded-2xl border border-blue-200 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Protect Your Industry. Secure Your Future.
                </h3>
                <p className="mt-2 text-gray-700">
                  Partner with SIIB&apos;s industry insurance specialists for tailored coverage,
                  expert risk management, and dedicated support designed for your sector.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="/premium-estimator"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
                >
                  <FaShieldAlt className="mr-2" />
                  Get Coverage Proposal
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100"
                >
                  <FaFileContract className="mr-2" />
                  Book Risk Assessment
                </a>
              </div>
            </div>
          </div>

          {/* Contact Strip */}
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <Contact label="Call" value="1800 210 2022" icon={<FaPhoneAlt />} />
            <Contact label="Email" value="contact.ins@shareindia.co.in" icon={<FaEnvelope />} />
            <Contact
              label="Advisory Desk"
              value="Industry Insurance Specialists"
              icon={<FaHeadset />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
