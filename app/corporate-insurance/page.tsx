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
  FaIndustry,
  FaShip,
  FaCreditCard,
  FaFilm,
  FaUsers,
  FaTruck,
  FaBuilding,
  FaStore,
  FaPlane,
} from 'react-icons/fa';
import { MdEngineering } from 'react-icons/md';

// Corporate Insurance Products
const CORPORATE_INSURANCE = [
  {
    name: 'Property & Engineering Insurance',
    icon: <MdEngineering className="text-3xl text-blue-600" />,
    description:
      'Comprehensive protection for construction projects, machinery, equipment, and infrastructure against physical damage and operational risks.',
    coverage: [
      'Contractors All Risk (CAR) insurance',
      'Erection All Risk (EAR) coverage',
      'Machinery breakdown protection',
      'Electronic equipment insurance',
    ],
  },
  {
    name: 'Liability Insurance',
    icon: <FaShieldAlt className="text-3xl text-blue-600" />,
    description:
      'Protection against legal liabilities from third-party injuries, property damage, and professional errors or omissions.',
    coverage: [
      'Public liability insurance',
      'Product liability coverage',
      'Professional indemnity insurance',
      'Directors & Officers (D&O) liability',
    ],
  },
  {
    name: 'Marine Transit Insurance',
    icon: <FaShip className="text-3xl text-blue-600" />,
    description:
      'Coverage for goods in transit by sea, air, or land against loss or damage during shipments.',
    coverage: [
      'Import/export cargo insurance',
      'Domestic transit coverage',
      'Open marine policies',
      'Project cargo insurance',
    ],
  },
  {
    name: 'Trade Credit Insurance',
    icon: <FaCreditCard className="text-3xl text-blue-600" />,
    description:
      'Protect accounts receivable from non-payment risks due to buyer insolvency or default.',
    coverage: [
      'Buyer default protection',
      'Political risk coverage',
      'Insolvency protection',
      'Debt collection support',
    ],
  },
  {
    name: 'Media & Entertainment Insurance',
    icon: <FaFilm className="text-3xl text-blue-600" />,
    description:
      'Specialized coverage for production risks, equipment, and event cancellation in media industry.',
    coverage: [
      'Film production insurance',
      'Equipment and props coverage',
      'Event cancellation insurance',
      'Errors & omissions liability',
    ],
  },
  {
    name: 'Employee Benefits Insurance',
    icon: <FaUsers className="text-3xl text-blue-600" />,
    description:
      'Comprehensive group health, life, and personal accident coverage for your workforce.',
    coverage: [
      'Group health insurance',
      'Group life insurance',
      'Personal accident coverage',
      'Critical illness protection',
    ],
  },
  {
    name: 'Motor Fleet Insurance',
    icon: <FaTruck className="text-3xl text-blue-600" />,
    description: 'Cost-effective coverage for companies managing multiple commercial vehicles.',
    coverage: [
      'Comprehensive vehicle coverage',
      'Third-party liability',
      'Driver personal accident',
      'Fleet management support',
    ],
  },
  {
    name: 'Office Package Insurance',
    icon: <FaBuilding className="text-3xl text-blue-600" />,
    description: 'All-in-one protection for office premises, contents, and business interruption.',
    coverage: [
      'Building and contents insurance',
      'Business interruption cover',
      'Money insurance',
      'Electronic equipment protection',
    ],
  },
  {
    name: 'Shopkeepers Package & Jewellers Block',
    icon: <FaStore className="text-3xl text-blue-600" />,
    description:
      'Tailored solutions for retail businesses covering stock, premises, and unique risks.',
    coverage: [
      'Stock and inventory protection',
      'Burglary and theft coverage',
      'Glass breakage insurance',
      'Public liability protection',
    ],
  },
  {
    name: 'Group Travel Insurance Plans',
    icon: <FaPlane className="text-3xl text-blue-600" />,
    description: 'Complete travel protection for employee business trips and corporate travel.',
    coverage: [
      'Medical emergencies abroad',
      'Trip cancellation coverage',
      'Baggage loss protection',
      'Emergency evacuation',
    ],
  },
];

// Key Benefits
const KEY_BENEFITS = [
  'Comprehensive risk mitigation for business assets',
  'Regulatory compliance and statutory requirements',
  'Business continuity and financial stability',
  'Customized coverage tailored to industry needs',
  'Expert claims support and risk advisory',
  'Cost optimization through bundled packages',
];

// Industries Served
const INDUSTRIES = [
  'Manufacturing & Engineering',
  'Construction & Infrastructure',
  'IT & Technology Services',
  'Healthcare & Pharmaceuticals',
  'Retail & E-commerce',
  'Hospitality & Tourism',
  'Logistics & Transportation',
  'Financial Services & Banking',
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

// Card Component for Coverage Details
const CoverageCard = ({
  icon,
  title,
  description,
  coverage,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  coverage: string[];
}) => (
  <div className="rounded-lg border border-gray-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-md">
    <div className="mb-4 flex items-center gap-4">
      {icon}
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="mb-4 text-gray-700">{description}</p>
    <ul className="space-y-2">
      {coverage.map((item, index) => (
        <li key={index} className="flex items-start text-sm text-gray-600">
          <FaChevronRight className="mt-1 mr-2 text-blue-400" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const CorporateInsurancePage = () => {
  return (
    <div className="min-h-screen bg-white pt-[8vh] text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://minio-api.internal.wabisabitech.in/share-india/corporate/office.jpg"
            alt="Corporate insurance solutions"
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
                Corporate Insurance Solutions
              </h1>
              <p className="mt-6 text-lg text-gray-100/90 md:text-xl">
                Comprehensive risk management and insurance solutions tailored for businesses of all
                sizes. Protect your assets, employees, and operations with Share India Insurance
                Brokers (SIIB).
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-100 px-6 py-3 font-semibold text-blue-800 hover:bg-blue-200">
                  <FaShieldAlt className="mr-2" />
                  Get Coverage Proposal
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-white hover:bg-white/10">
                  <FaFileContract className="mr-2" />
                  Book Risk Assessment
                </button>
              </div>
              <div className="mt-4 text-sm text-gray-100">
                Trusted by leading enterprises across manufacturing, construction, IT, healthcare,
                and more.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="from-si-primary-200 w-full border-b border-gray-100 bg-gradient-to-b to-transparent lg:min-h-screen">
        <div className="mx-auto max-w-[90vw] px-4 py-[10vh] sm:px-6 lg:max-w-[75vw] lg:px-8 lg:pt-[20vh]">
          <h2 className="text-3xl font-bold md:text-4xl">Why Corporate Insurance Matters</h2>
          <p className="mt-[9vh] text-lg text-gray-700">
            In today&apos;s dynamic business environment, protecting your organization from
            unforeseen risks is critical. Corporate insurance provides financial security, ensures
            regulatory compliance, and enables business continuity during challenging times.
          </p>

          <div className="mt-[10vh] grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Key Benefits</h3>
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
              <h3 className="text-2xl font-semibold text-gray-900">Industries We Serve</h3>
              <div className="mt-8 space-y-3">
                {INDUSTRIES.map((industry, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4"
                  >
                    <FaIndustry className="text-xl text-blue-600" />
                    <div className="font-medium text-gray-900">{industry}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Products Section */}
      <section className="to-si-primary-200 w-full border-b border-gray-100 bg-gradient-to-b from-transparent lg:min-h-screen">
        <div className="mx-auto max-w-[90vw] px-4 py-[10vh] sm:px-6 lg:max-w-[75vw] lg:px-8">
          <h2 className="text-3xl font-bold md:text-4xl">Our Corporate Insurance Products</h2>
          <p className="mt-6 text-lg text-gray-700">
            Comprehensive coverage options designed to protect every aspect of your business
            operations.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {CORPORATE_INSURANCE.map((product, index) => (
              <CoverageCard
                key={index}
                icon={product.icon}
                title={product.name}
                description={product.description}
                coverage={product.coverage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SIIB Section */}
      <section className="to-si-primary-200 w-full border-b border-gray-100 bg-gradient-to-t from-transparent">
        <div className="mx-auto max-w-[90vw] px-4 py-14 sm:px-6 lg:max-w-[75vw] lg:px-8">
          <h2 className="text-3xl font-bold md:text-4xl">Why Choose SIIB</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Expert Advisory</h3>
              <p className="text-gray-700">
                Dedicated insurance specialists with deep industry expertise to guide your risk
                management strategy.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Customized Solutions</h3>
              <p className="text-gray-700">
                Tailored insurance packages designed to meet your specific business needs and risk
                profile.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Claims Excellence</h3>
              <p className="text-gray-700">
                Swift claims processing with dedicated support to minimize business disruption
                during critical times.
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
                  Ready to Protect Your Business?
                </h3>
                <p className="mt-2 text-gray-700">
                  Partner with SIIB&apos;s corporate insurance specialists for comprehensive
                  coverage, expert risk management, and seamless claims support.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  <FaShieldAlt className="mr-2" />
                  Request Proposal
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100">
                  <FaFileContract className="mr-2" />
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>

          {/* Contact Strip */}
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <Contact label="Call" value="1800 210 2022" icon={<FaPhoneAlt />} />
            <Contact label="Email" value="contact.ins@shareindia.co.in" icon={<FaEnvelope />} />
            <Contact
              label="Advisory Desk"
              value="Corporate Insurance Specialists"
              icon={<FaHeadset />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateInsurancePage;
