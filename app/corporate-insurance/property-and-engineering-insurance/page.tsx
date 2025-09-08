'use client';
import React from 'react';
import {
  FaChevronRight,
  FaShieldAlt,
  FaBuilding,
  FaTools,
  FaIndustry,
  FaFire,
  FaWater,
  FaWind,
  FaFileContract,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
  FaPlug,
  FaExclamationTriangle,
  FaCheckCircle,
  FaRupeeSign,
  FaCertificate,
  FaHammer,
  FaCogs,
} from 'react-icons/fa';
import ClaimStories from '../../../components/industries/ClaimStories';
import KnowledgeQuestionnaire from '../../../components/industries/KnowledgeQuestionnaire';
import MainCaraousel from '@/components/main-caraousel';

const PropertyEngineeringInsurancePage = () => {
  // Sample data for components
  const claimStories = [
    {
      id: '1',
      title: 'Manufacturing Plant Fire Damage',
      description:
        'Electrical fault caused major fire in manufacturing facility, damaging machinery and causing production shutdown for 6 months.',
      claimAmount: '₹75 Crores',
      settlementTime: '8 months',
      riskType: 'Fire & Allied Perils',
      outcome: 'settled' as const,
      lessons: [
        'Comprehensive property coverage protected against total loss',
        'Business interruption insurance covered lost revenue',
        'Quick claim processing minimized financial impact',
      ],
    },
    {
      id: '2',
      title: 'Boiler Explosion at Power Plant',
      description:
        'High-pressure boiler explosion caused extensive damage to power generation equipment and surrounding infrastructure.',
      claimAmount: '₹120 Crores',
      settlementTime: '12 months',
      riskType: 'Boiler & Pressure Vessel',
      outcome: 'settled' as const,
      lessons: [
        'Regular inspection and maintenance prevents catastrophic failures',
        'Engineering insurance covers specialized equipment replacement',
        'Emergency response planning reduces secondary damage',
      ],
    },
    {
      id: '3',
      title: 'Construction Equipment Breakdown',
      description:
        'Critical crane failure during high-rise construction caused project delays and equipment damage.',
      claimAmount: '₹25 Crores',
      settlementTime: '6 months',
      riskType: 'Construction Equipment',
      outcome: 'settled' as const,
      lessons: [
        'Equipment breakdown coverage essential for construction projects',
        'Rental equipment coverage provides continuity',
        'Proper maintenance records support claim settlement',
      ],
    },
    {
      id: '4',
      title: 'Flood Damage to Industrial Complex',
      description:
        'Monsoon flooding damaged electrical systems and machinery across multiple buildings in industrial estate.',
      claimAmount: '₹40 Crores',
      settlementTime: '10 months',
      riskType: 'Natural Catastrophe',
      outcome: 'settled' as const,
      lessons: [
        'Flood coverage essential in monsoon-prone areas',
        'Proper drainage and flood barriers reduce damage',
        'Emergency restoration services minimize downtime',
      ],
    },
  ];

  const quizQuestions = [
    {
      id: '1',
      question: 'What is the primary purpose of property insurance for businesses?',
      options: [
        'To cover employee salaries',
        'To protect physical assets against damage or loss',
        'To provide legal advice',
        'To manage business operations',
      ],
      correctAnswer: 1,
      explanation:
        'Property insurance protects businesses against financial losses from damage to or loss of physical assets like buildings, equipment, and inventory.',
      difficulty: 'easy' as const,
    },
    {
      id: '2',
      question: 'Which of the following is typically covered under engineering insurance?',
      options: [
        'Employee health benefits',
        'Machinery breakdown and equipment failure',
        'Marketing expenses',
        'Office rent',
      ],
      correctAnswer: 1,
      explanation:
        'Engineering insurance specifically covers machinery breakdown, equipment failure, and related business interruption losses.',
      difficulty: 'medium' as const,
    },
    {
      id: '3',
      question: 'What does "Reinstatement Value" mean in property insurance?',
      options: [
        'Original purchase price of the asset',
        'Current market value of the asset',
        'Cost to rebuild or replace the asset at current prices',
        'Depreciated value of the asset',
      ],
      correctAnswer: 2,
      explanation:
        'Reinstatement Value is the cost to rebuild or replace the insured property at current market prices, ensuring adequate coverage against inflation.',
      difficulty: 'hard' as const,
    },
    {
      id: '4',
      question:
        'Which natural catastrophe is most commonly excluded from standard property insurance?',
      options: ['Fire', 'Earthquake', 'Lightning', 'Windstorm'],
      correctAnswer: 1,
      explanation:
        'Earthquake is typically excluded from standard property insurance and requires separate coverage due to its catastrophic nature.',
      difficulty: 'medium' as const,
    },
    {
      id: '5',
      question: 'What is the typical waiting period for business interruption coverage?',
      options: ['No waiting period', '24-72 hours', '1 week', '1 month'],
      correctAnswer: 1,
      explanation:
        'Business interruption coverage typically has a waiting period of 24-72 hours to exclude minor, temporary disruptions.',
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
              Property & Engineering Insurance Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-700 md:text-xl">
              Comprehensive protection for your physical assets, buildings, machinery, and
              engineering projects—safeguarding your business against property damage and
              operational disruptions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-lg bg-blue-100 px-6 py-3 font-semibold text-blue-800 hover:bg-blue-200">
                <FaShieldAlt className="mr-2" />
                Get Coverage Quote
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50">
                <FaFileContract className="mr-2" />
                Schedule Assessment
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50">
                <FaPhoneAlt className="mr-2" />
                Speak to Expert
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Specialized coverage for industrial properties, construction projects, and critical
              business equipment.
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Explanation */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">
            Understanding Property & Engineering Insurance
          </h2>
          <p className="mt-3 text-gray-700">
            Property and Engineering Insurance provides comprehensive protection for your physical
            assets, from buildings and equipment to specialized machinery and construction projects.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Coverage Overview</h3>
              <p className="mt-3 text-gray-700">
                This insurance protects businesses against financial losses from damage to or
                destruction of physical assets. It covers buildings, machinery, equipment, stock,
                and other business property against various perils including fire, theft, natural
                disasters, and accidental damage. Engineering insurance specifically covers
                mechanical and electrical equipment breakdown.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Protection against fire, theft, and natural disasters
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Coverage for machinery breakdown and equipment failure
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Business interruption protection for lost revenue
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Key Benefits</h3>
              <div className="mt-3 space-y-3">
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaBuilding className="text-blue-500" />
                  <div>
                    <div className="font-medium">Asset Protection</div>
                    <div className="text-sm text-gray-600">
                      Comprehensive coverage for all business assets
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaCogs className="text-blue-500" />
                  <div>
                    <div className="font-medium">Business Continuity</div>
                    <div className="text-sm text-gray-600">Minimize operational disruptions</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaRupeeSign className="text-blue-500" />
                  <div>
                    <div className="font-medium">Financial Security</div>
                    <div className="text-sm text-gray-600">
                      Protection against major financial losses
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
            Tailored property and engineering insurance solutions for diverse business needs.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Tile icon={<FaIndustry />} title="Manufacturing Companies">
              Factories, production facilities, and industrial complexes with heavy machinery.
            </Tile>
            <Tile icon={<FaBuilding />} title="Commercial Properties">
              Office buildings, retail spaces, warehouses, and commercial complexes.
            </Tile>
            <Tile icon={<FaHammer />} title="Construction Projects">
              Building construction, infrastructure projects, and engineering works.
            </Tile>
            <Tile icon={<FaTools />} title="Equipment Owners">
              Businesses with critical machinery, boilers, and specialized equipment.
            </Tile>
          </div>
        </div>
      </section>

      {/* Sample Risks */}
      <section className="w-full border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Common Property & Engineering Risks</h2>
          <p className="mt-3 text-gray-700">
            Understanding key risks helps in selecting appropriate insurance coverage for your
            business assets.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <RiskCard
              icon={<FaFire />}
              title="Fire & Allied Perils"
              description="Fire, lightning, explosion, and smoke damage to buildings and equipment."
              severity="High"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaWater />}
              title="Natural Disasters"
              description="Floods, earthquakes, cyclones, and other natural catastrophes."
              severity="High"
              frequency="Low"
            />
            <RiskCard
              icon={<FaTools />}
              title="Machinery Breakdown"
              description="Mechanical or electrical failure of critical business equipment."
              severity="Medium"
              frequency="High"
            />
            <RiskCard
              icon={<FaExclamationTriangle />}
              title="Theft & Burglary"
              description="Theft of equipment, inventory, and other business assets."
              severity="Medium"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaPlug />}
              title="Electrical Damage"
              description="Power surges, short circuits, and electrical equipment failures."
              severity="Medium"
              frequency="High"
            />
            <RiskCard
              icon={<FaWind />}
              title="Impact Damage"
              description="Damage from vehicle impact, falling objects, and accidental collisions."
              severity="Medium"
              frequency="Medium"
            />
          </div>
        </div>
      </section>

      {/* Claim Stories Component */}
      <ClaimStories stories={claimStories} industryName="Property & Engineering Insurance" />

      {/* Core coverage suite */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Core Coverage Options</h2>
          <p className="mt-3 text-gray-700">
            Comprehensive protection designed for different types of business assets and operations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaBuilding className="text-2xl text-blue-500" />}
              title="Property Insurance"
              body="Comprehensive coverage for buildings, contents, and business assets."
              bullets={[
                'Fire and allied perils protection',
                'Burglary and theft coverage',
                'Natural catastrophe protection',
              ]}
            />
            <Card
              icon={<FaCogs className="text-2xl text-blue-500" />}
              title="Engineering Insurance"
              body="Specialized coverage for machinery and equipment breakdown."
              bullets={[
                'Boiler and pressure vessel insurance',
                'Electronic equipment insurance',
                'Machinery breakdown coverage',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaRupeeSign className="text-2xl text-blue-500" />}
              title="Business Interruption"
              body="Protection against loss of income due to property damage."
              bullets={[
                'Loss of gross profit coverage',
                'Additional expenses protection',
                'Extended indemnity periods',
              ]}
            />
            <Card
              icon={<FaHammer className="text-2xl text-blue-500" />}
              title="Construction Insurance"
              body="Specialized coverage for construction and erection projects."
              bullets={[
                'Contractors all risk (CAR) insurance',
                'Erection all risk (EAR) coverage',
                'Plant and machinery insurance',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Insurance Plans/Products */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Property & Engineering Insurance Plans</h2>
          <p className="mt-3 text-gray-700">
            Flexible insurance solutions designed for different business sizes and risk profiles.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <InsurancePlan
              name="Essential Property Plan"
              description="Basic coverage for small businesses and commercial properties"
              price="₹25K - ₹1L"
              features={[
                'Fire & Allied Perils',
                'Burglary & Theft Protection',
                'Basic Business Interruption',
                'Public Liability Coverage',
                'Standard Equipment Protection',
              ]}
              recommended={false}
            />
            <InsurancePlan
              name="Comprehensive Business Plan"
              description="Complete coverage for medium enterprises and manufacturing units"
              price="₹1L - ₹10L"
              features={[
                'All Essential Plan Benefits',
                'Machinery Breakdown Coverage',
                'Extended Business Interruption',
                'Natural Catastrophe Protection',
                'Electronic Equipment Insurance',
                'Loss of Rent Coverage',
              ]}
              recommended={true}
            />
            <InsurancePlan
              name="Industrial Enterprise Plan"
              description="Advanced protection for large industrial complexes and major projects"
              price="₹10L+"
              features={[
                'All Comprehensive Plan Benefits',
                'Boiler & Pressure Vessel Insurance',
                'Construction All Risk Coverage',
                'International Transit Protection',
                'Crisis Management Support',
                'Dedicated Claims Manager',
              ]}
              recommended={false}
            />
          </div>
        </div>
      </section>

      {/* Relevant Articles Component */}
      {/* <RelevantArticles articles={articles} industryName="Property & Engineering Insurance" /> */}
      <section className="w-full border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Industry Insights & Articles</h2>
          <p className="mt-3 text-gray-700">
            Stay updated with the latest trends, regulations, and best practices in Plastic Industry
            insurance.
          </p>
          <div className="w-full pt-6">
            <MainCaraousel color="white" layout={3} topic="property_engineering_insurance" />
          </div>
        </div>
      </section>

      {/* Knowledge Questionnaire Component */}
      <KnowledgeQuestionnaire
        questions={quizQuestions}
        industryName="Property & Engineering Insurance"
      />

      {/* What you receive & CTA */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Protecting Assets. Ensuring Continuity.
                </h3>
                <p className="mt-2 text-gray-700">
                  Partner with SIIBs property specialists for comprehensive asset protection, expert
                  risk assessment, and efficient claims management.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  <FaShieldAlt className="mr-2" />
                  Get Quote
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100">
                  <FaFileContract className="mr-2" />
                  Risk Assessment
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
              value="Property Insurance Specialists"
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

export default PropertyEngineeringInsurancePage;
