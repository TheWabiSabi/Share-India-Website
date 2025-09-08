'use client';
import React from 'react';
import {
  FaChevronRight,
  FaShieldAlt,
  FaBuilding,
  FaHome,
  FaHammer,
  FaFire,
  FaWater,
  FaUserShield,
  FaFileContract,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
  FaExclamationTriangle,
  FaCheckCircle,
  FaRupeeSign,
  FaCertificate,
  FaKey,
  FaCity,
} from 'react-icons/fa';
import ClaimStories from '../../../components/industries/ClaimStories';
import KnowledgeQuestionnaire from '../../../components/industries/KnowledgeQuestionnaire';
import MainCaraousel from '@/components/main-caraousel';

const RealEstateInsurancePage = () => {
  // Sample data for components
  const claimStories = [
    {
      id: '1',
      title: 'High-Rise Construction Accident',
      description:
        'Crane collapse during high-rise construction caused multiple injuries and property damage, leading to significant liability claims.',
      claimAmount: '₹85 Crores',
      settlementTime: '16 months',
      riskType: 'Construction Accident',
      outcome: 'settled' as const,
      lessons: [
        'Comprehensive construction insurance is essential for high-rise projects',
        'Safety protocols and equipment maintenance prevent accidents',
        'Third-party liability coverage protects against injury claims',
      ],
    },
    {
      id: '2',
      title: 'Commercial Building Fire',
      description:
        'Electrical fault caused fire in commercial complex, damaging multiple units and causing business interruption for tenants.',
      claimAmount: '₹45 Crores',
      settlementTime: '12 months',
      riskType: 'Property Fire',
      outcome: 'settled' as const,
      lessons: [
        'Fire safety systems in commercial buildings are critical',
        'Property insurance covers building and tenant improvements',
        'Loss of rent coverage protects against income loss',
      ],
    },
    {
      id: '3',
      title: 'Professional Liability - Design Error',
      description:
        'Structural design error in residential project led to safety concerns and costly remediation work.',
      claimAmount: '₹25 Crores',
      settlementTime: '18 months',
      riskType: 'Professional Liability',
      outcome: 'settled' as const,
      lessons: [
        'Professional indemnity insurance protects against design errors',
        'Quality assurance and peer reviews reduce risks',
        'Early detection of issues minimizes remediation costs',
      ],
    },
    {
      id: '4',
      title: 'Natural Disaster - Cyclone Damage',
      description:
        'Severe cyclone damaged multiple residential projects under construction, causing delays and additional costs.',
      claimAmount: '₹35 Crores',
      settlementTime: '8 months',
      riskType: 'Natural Disaster',
      outcome: 'settled' as const,
      lessons: [
        'Weather-resistant construction reduces damage',
        'Natural catastrophe coverage is essential in vulnerable areas',
        'Proper project scheduling considers seasonal risks',
      ],
    },
  ];

  const quizQuestions = [
    {
      id: '1',
      question: 'What is the most critical insurance coverage for real estate developers?',
      options: [
        'Fire insurance only',
        'Contractors All Risk (CAR) insurance',
        'Motor vehicle insurance',
        'Personal accident insurance',
      ],
      correctAnswer: 1,
      explanation:
        'Contractors All Risk (CAR) insurance is essential as it covers construction risks, material damage, and third-party liability during development.',
      difficulty: 'easy' as const,
    },
    {
      id: '2',
      question: 'Which regulation primarily governs real estate development in India?',
      options: [
        'Companies Act',
        'Real Estate (Regulation and Development) Act (RERA)',
        'Building Code only',
        'Environmental Protection Act',
      ],
      correctAnswer: 1,
      explanation:
        'RERA 2016 is the primary legislation governing real estate development, establishing regulatory authorities and protecting buyer interests.',
      difficulty: 'medium' as const,
    },
    {
      id: '3',
      question: 'What does "Defects Liability Period" mean in construction insurance?',
      options: [
        'Period when defects are not covered',
        'Period during which contractor remains liable for defects',
        'Period for reporting defects only',
        'Period for insurance premium payment',
      ],
      correctAnswer: 1,
      explanation:
        'Defects Liability Period is the time after completion during which the contractor remains responsible for rectifying defects.',
      difficulty: 'hard' as const,
    },
    {
      id: '4',
      question: 'Which type of property insurance is mandatory for housing societies?',
      options: [
        'Fire insurance for common areas',
        'Comprehensive building insurance',
        'Individual unit insurance only',
        'No mandatory insurance',
      ],
      correctAnswer: 0,
      explanation:
        'Fire insurance for common areas is typically mandatory under society bylaws and state cooperative housing regulations.',
      difficulty: 'medium' as const,
    },
    {
      id: '5',
      question: 'What is the typical construction period coverage for high-rise projects?',
      options: ['1-2 years', '2-3 years', '3-5 years', '5+ years'],
      correctAnswer: 2,
      explanation:
        '3-5 years is typical for high-rise projects, considering planning, construction, and completion phases with potential delays.',
      difficulty: 'medium' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-[8vh] text-gray-900">
      {/* Hero */}
      <section className="w-full border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Real Estate Industry Insurance Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-700 md:text-xl">
              Comprehensive coverage for real estate development, construction, and property
              management—protecting investments from ground-breaking to occupancy.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-lg bg-blue-100 px-6 py-3 font-semibold text-blue-800 hover:bg-blue-200">
                <FaShieldAlt className="mr-2" />
                Get Coverage Proposal
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50">
                <FaFileContract className="mr-2" />
                Book Risk Assessment
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50">
                <FaPhoneAlt className="mr-2" />
                Speak to Specialist
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Specialized coverage for residential, commercial, and mixed-use developments with RERA
              compliance support.
            </div>
          </div>
        </div>
      </section>

      {/* Industry Explanation */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">
            Understanding Real Estate Industry Insurance
          </h2>
          <p className="mt-3 text-gray-700">
            The real estate industry involves significant capital investments, long development
            cycles, and complex stakeholder relationships. Comprehensive insurance coverage is
            essential for protecting these investments and ensuring project success.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Industry Overview</h3>
              <p className="mt-3 text-gray-700">
                Real estate development encompasses residential, commercial, and mixed-use projects
                involving complex construction processes, regulatory compliance, and market risks.
                The industry faces risks from construction accidents, natural disasters, design
                errors, and regulatory changes. With RERA implementation and increasing buyer
                awareness, insurance has become crucial for developer credibility and project
                financing.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Multi-year projects with significant capital exposure
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  RERA compliance requirements for buyer protection
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Professional liability risks for architects and engineers
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Key Development Types</h3>
              <div className="mt-3 space-y-3">
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaHome className="text-blue-500" />
                  <div>
                    <div className="font-medium">Residential Projects</div>
                    <div className="text-sm text-gray-600">
                      Apartments, villas, and gated communities
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaBuilding className="text-blue-500" />
                  <div>
                    <div className="font-medium">Commercial Developments</div>
                    <div className="text-sm text-gray-600">
                      Office complexes, retail, and hospitality
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaCity className="text-blue-500" />
                  <div>
                    <div className="font-medium">Mixed-Use Projects</div>
                    <div className="text-sm text-gray-600">
                      Integrated townships and smart cities
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Who We Serve</h2>
          <p className="mt-3 text-gray-700">
            Tailored insurance solutions for every stakeholder in the real estate ecosystem.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Tile icon={<FaBuilding />} title="Real Estate Developers">
              Residential and commercial project developers, including listed and private companies.
            </Tile>
            <Tile icon={<FaHammer />} title="Construction Companies">
              EPC contractors, civil contractors, and specialized construction service providers.
            </Tile>
            <Tile icon={<FaKey />} title="Property Managers">
              Facility management companies, property consultants, and maintenance service
              providers.
            </Tile>
            <Tile icon={<FaUserShield />} title="Design Professionals">
              Architects, structural engineers, and project management consultants.
            </Tile>
          </div>
        </div>
      </section>

      {/* Sample Risks */}
      <section className="w-full border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Common Risks in Real Estate Industry</h2>
          <p className="mt-3 text-gray-700">
            Understanding key risks helps in selecting appropriate insurance coverage for your real
            estate operations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <RiskCard
              icon={<FaHammer />}
              title="Construction Risks"
              description="Accidents, structural failures, and construction defects during development phase."
              severity="High"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaWater />}
              title="Natural Disasters"
              description="Earthquakes, floods, cyclones affecting construction and completed properties."
              severity="High"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaUserShield />}
              title="Professional Liability"
              description="Design errors, engineering mistakes, and professional negligence claims."
              severity="Medium"
              frequency="Low"
            />
            <RiskCard
              icon={<FaFileContract />}
              title="Regulatory & Legal Risks"
              description="RERA compliance, approval delays, and legal disputes with buyers."
              severity="Medium"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaFire />}
              title="Property Damage"
              description="Fire, theft, and vandalism affecting completed properties and construction sites."
              severity="Medium"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaExclamationTriangle />}
              title="Project Delays"
              description="Construction delays, cost overruns, and delivery timeline extensions."
              severity="Medium"
              frequency="High"
            />
          </div>
        </div>
      </section>

      {/* Claim Stories Component */}
      <ClaimStories stories={claimStories} industryName="Real Estate Industry" />

      {/* Core coverage suite */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Core Coverage Suite</h2>
          <p className="mt-3 text-gray-700">
            Comprehensive protection designed specifically for real estate development and property
            operations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaHammer className="text-2xl text-blue-500" />}
              title="Contractors All Risk (CAR)"
              body="Comprehensive coverage for construction phase including material damage and liability."
              bullets={[
                'Material damage during construction',
                'Third-party liability and property damage',
                'Natural catastrophe and weather protection',
              ]}
            />
            <Card
              icon={<FaBuilding className="text-2xl text-blue-500" />}
              title="Property & Asset Protection"
              body="Coverage for completed properties, rental income, and asset values."
              bullets={[
                'Fire and allied perils for buildings',
                'Loss of rent and business interruption',
                'Tenant improvements and betterments',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaUserShield className="text-2xl text-blue-500" />}
              title="Professional Indemnity"
              body="Protection for design professionals and project consultants."
              bullets={[
                'Architects and engineers professional liability',
                'Design error and omission coverage',
                'Project management consultant protection',
              ]}
            />
            <Card
              icon={<FaFileContract className="text-2xl text-blue-500" />}
              title="Directors & Officers Liability"
              body="Coverage for management decisions and regulatory compliance."
              bullets={[
                'RERA compliance and regulatory defense',
                'Management liability and decision coverage',
                'Shareholder and investor protection',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Insurance Plans/Products */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">
            Insurance Plans for Real Estate Industry
          </h2>
          <p className="mt-3 text-gray-700">
            Comprehensive insurance solutions tailored for different scales of real estate
            development.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <InsurancePlan
              name="Real Estate Starter Plan"
              description="Essential coverage for small to medium real estate projects"
              price="₹8L - ₹25L"
              features={[
                'Contractors All Risk (CAR)',
                'Public Liability Insurance',
                'Workmen Compensation',
                'Professional Indemnity (Basic)',
                'Fire & Allied Perils',
              ]}
              recommended={false}
            />
            <InsurancePlan
              name="Real Estate Professional Plan"
              description="Comprehensive coverage for established real estate developers"
              price="₹25L - ₹2Cr"
              features={[
                'All Starter Plan Benefits',
                'Directors & Officers Liability',
                'Enhanced Professional Indemnity',
                'Loss of Rent Coverage',
                'RERA Compliance Support',
                'Project Delay Insurance',
              ]}
              recommended={true}
            />
            <InsurancePlan
              name="Real Estate Enterprise Plan"
              description="Complete protection for large real estate companies and townships"
              price="₹2Cr+"
              features={[
                'All Professional Plan Benefits',
                'International Coverage',
                'Crisis Management Services',
                'Environmental Liability',
                'Cyber Liability Protection',
                'Dedicated Account Management',
              ]}
              recommended={false}
            />
          </div>
        </div>
      </section>

      {/* Relevant Articles Component */}
      {/* <RelevantArticles articles={articles} industryName="Real Estate Industry" /> */}
      <section className="w-full border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Industry Insights & Articles</h2>
          <p className="mt-3 text-gray-700">
            Stay updated with the latest trends, regulations, and best practices in Plastic Industry
            insurance.
          </p>
          <div className="w-full pt-6">
            <MainCaraousel color="white" layout={3} topic="real_estate_industry" />
          </div>
        </div>
      </section>

      {/* Knowledge Questionnaire Component */}
      <KnowledgeQuestionnaire questions={quizQuestions} industryName="Real Estate Industry" />

      {/* What you receive & CTA */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Building Dreams. Protecting Investments.
                </h3>
                <p className="mt-2 text-gray-700">
                  Partner with SIIB&#39;s real estate specialists for comprehensive coverage, RERA
                  compliance support, and expert risk management.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  <FaShieldAlt className="mr-2" />
                  Request Proposal
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100">
                  <FaFileContract className="mr-2" />
                  Upload Project Data
                </button>
              </div>
            </div>
          </div>

          {/* Contact strip */}
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <Contact label="Call" value="1800 210 2022" icon={<FaPhoneAlt />} />
            <Contact label="Email" value="contact.ins@shareindia.co.in" icon={<FaEnvelope />} />
            <Contact
              label="Advisory Desk"
              value="Real Estate Insurance Specialists"
              icon={<FaHeadset />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

/* Helpers */
const Tile = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-xl border border-gray-200 p-6">
    <div className="text-2xl text-blue-500">{icon}</div>
    <h3 className="mt-3 font-semibold">{title}</h3>
    <p className="mt-1 text-sm text-gray-600">{children}</p>
  </div>
);

const Card = ({
  icon,
  title,
  body,
  bullets,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  bullets: string[];
}) => (
  <div className="rounded-xl border border-gray-200 p-6">
    <div className="flex items-center gap-3">
      {icon}
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="mt-2 text-sm text-gray-700">{body}</p>
    <ul className="mt-3 space-y-1 text-sm text-gray-700">
      {bullets.map((b) => (
        <li key={b} className="flex">
          <FaChevronRight className="mt-1 mr-2 text-blue-400" />
          {b}
        </li>
      ))}
    </ul>
  </div>
);

const RiskCard = ({
  icon,
  title,
  description,
  severity,
  frequency,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  severity: string;
  frequency: string;
}) => (
  <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
    <div className="flex items-center gap-3">
      <span className="text-2xl text-red-500">{icon}</span>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="mt-3 text-sm text-gray-700">{description}</p>
    <div className="mt-4 flex gap-4">
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500">Severity:</span>
        <span
          className={`rounded-full px-2 py-1 text-xs font-medium ${
            severity === 'High'
              ? 'bg-red-100 text-red-800'
              : severity === 'Medium'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-green-100 text-green-800'
          }`}
        >
          {severity}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500">Frequency:</span>
        <span
          className={`rounded-full px-2 py-1 text-xs font-medium ${
            frequency === 'High'
              ? 'bg-red-100 text-red-800'
              : frequency === 'Medium'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-green-100 text-green-800'
          }`}
        >
          {frequency}
        </span>
      </div>
    </div>
  </div>
);

const InsurancePlan = ({
  name,
  description,
  price,
  features,
  recommended,
}: {
  name: string;
  description: string;
  price: string;
  features: string[];
  recommended: boolean;
}) => (
  <div
    className={`rounded-xl border p-6 ${
      recommended ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'
    }`}
  >
    {recommended && (
      <div className="mb-4">
        <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
          <FaCertificate className="mr-1" />
          Recommended
        </span>
      </div>
    )}
    <h3 className="text-xl font-bold text-gray-900">{name}</h3>
    <p className="mt-2 text-sm text-gray-600">{description}</p>
    <div className="mt-4 flex items-center gap-2">
      <FaRupeeSign className="text-blue-500" />
      <span className="text-2xl font-bold text-blue-600">{price}</span>
      <span className="text-sm text-gray-500">per year</span>
    </div>
    <ul className="mt-6 space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-3">
          <FaCheckCircle className="mt-1 text-green-500" />
          <span className="text-sm text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
    <button
      className={`mt-6 w-full rounded-lg px-4 py-3 font-semibold ${
        recommended
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'border border-blue-200 text-blue-700 hover:bg-blue-50'
      }`}
    >
      Get Quote
    </button>
  </div>
);

const Contact = ({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) => (
  <div className="flex items-center justify-between rounded-lg border border-gray-200 p-5">
    <div>
      <div className="text-sm text-gray-500">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
    <div className="text-xl text-blue-600">{icon}</div>
  </div>
);

export default RealEstateInsurancePage;
