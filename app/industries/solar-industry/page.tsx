'use client';
import React from 'react';
import {
  FaChevronRight,
  FaShieldAlt,
  FaSolarPanel,
  FaSun,
  FaBolt,
  FaLeaf,
  FaFire,
  FaWater,
  FaWind,
  FaWarehouse,
  FaTruckMoving,
  FaUserShield,
  FaFileContract,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
  FaTools,
  FaPlug,
  FaLock,
  FaExclamationTriangle,
  FaCheckCircle,
  FaRupeeSign,
  FaCertificate,
  FaCloud,
  FaThermometerHalf,
} from 'react-icons/fa';
import ClaimStories from '../../../components/industries/ClaimStories';
import RelevantArticles from '../../../components/industries/RelevantArticles';
import KnowledgeQuestionnaire from '../../../components/industries/KnowledgeQuestionnaire';

const SolarInsurancePage = () => {
  // Sample data for components
  const claimStories = [
    {
      id: '1',
      title: 'Hailstorm Damage to Solar Farm',
      description:
        'A 50MW solar farm suffered extensive panel damage due to severe hailstorm, affecting 30% of the installation.',
      claimAmount: '₹25 Crores',
      settlementTime: '6 months',
      riskType: 'Weather Damage',
      outcome: 'settled' as const,
      lessons: [
        'Weather-resistant panels reduce damage',
        'Quick assessment speeds up claims',
        'Business interruption coverage crucial for revenue protection',
      ],
    },
    {
      id: '2',
      title: 'Inverter Fire Incident',
      description:
        'Electrical fault in central inverter caused fire, damaging equipment and causing production loss.',
      claimAmount: '₹8 Crores',
      settlementTime: '4 months',
      riskType: 'Equipment Fire',
      outcome: 'settled' as const,
      lessons: [
        'Regular maintenance prevents electrical faults',
        'Fire suppression systems are essential',
        'Equipment breakdown coverage protects investments',
      ],
    },
    {
      id: '3',
      title: 'Theft of Solar Panels',
      description:
        'Organized theft of solar panels from remote installation site during construction phase.',
      claimAmount: '₹3 Crores',
      settlementTime: '3 months',
      riskType: 'Theft & Burglary',
      outcome: 'settled' as const,
      lessons: [
        'Security measures are vital for remote sites',
        'Construction phase coverage needed',
        'Proper documentation helps claim settlement',
      ],
    },
    {
      id: '4',
      title: 'Grid Connection Delay',
      description:
        'Regulatory delays in grid connection caused extended business interruption for completed solar project.',
      claimAmount: '₹12 Crores',
      settlementTime: '8 months',
      riskType: 'Regulatory Delay',
      outcome: 'settled' as const,
      lessons: [
        'Regulatory risk coverage is important',
        'Delay in start-up coverage protects revenue',
        'Government approvals should be expedited',
      ],
    },
  ];

  const articles = [
    {
      id: '1',
      title: 'Solar Insurance Trends 2024: Emerging Risks and Coverage Solutions',
      excerpt:
        'Comprehensive analysis of new risks in solar industry and innovative insurance products to address them.',
      author: 'Suresh Menon',
      publishDate: 'Mar 20, 2024',
      readTime: '7 min read',
      category: 'Industry Trends',
      url: '#',
      featured: true,
    },
    {
      id: '2',
      title: 'Weather Risk Management for Solar Projects in India',
      excerpt:
        'Best practices for protecting solar installations from extreme weather events and climate risks.',
      author: 'Kavita Singh',
      publishDate: 'Mar 5, 2024',
      readTime: '5 min read',
      category: 'Risk Management',
      url: '#',
    },
    {
      id: '3',
      title: 'Performance Guarantee Insurance for Solar Projects',
      excerpt:
        'Understanding performance guarantees and how insurance can protect against underperformance risks.',
      author: 'Ravi Kumar',
      publishDate: 'Feb 18, 2024',
      readTime: '6 min read',
      category: 'Performance',
      url: '#',
    },
  ];

  const quizQuestions = [
    {
      id: '1',
      question: 'What is the most common cause of solar panel damage in India?',
      options: [
        'Manufacturing defects',
        'Hailstorms and extreme weather',
        'Theft and vandalism',
        'Equipment failure',
      ],
      correctAnswer: 1,
      explanation:
        'Hailstorms and extreme weather events are the most common cause of solar panel damage, especially during monsoon seasons.',
      difficulty: 'easy' as const,
    },
    {
      id: '2',
      question: 'Which insurance coverage is essential for solar project financing?',
      options: [
        'Fire insurance only',
        'Comprehensive all-risk coverage',
        'Third-party liability only',
        'Equipment breakdown only',
      ],
      correctAnswer: 1,
      explanation:
        'Lenders typically require comprehensive all-risk coverage that includes property damage, business interruption, and liability protection.',
      difficulty: 'medium' as const,
    },
    {
      id: '3',
      question: 'What does Performance Ratio (PR) measure in solar projects?',
      options: [
        'Financial returns',
        'Actual vs theoretical energy output',
        'Equipment efficiency',
        'Maintenance costs',
      ],
      correctAnswer: 1,
      explanation:
        'Performance Ratio measures the actual energy output compared to the theoretical maximum output under standard conditions.',
      difficulty: 'hard' as const,
    },
    {
      id: '4',
      question: 'Which phase of solar project has the highest insurance risk?',
      options: ['Planning phase', 'Construction phase', 'Operation phase', 'Decommissioning phase'],
      correctAnswer: 1,
      explanation:
        'Construction phase has the highest risk due to equipment exposure, transportation risks, and potential delays.',
      difficulty: 'medium' as const,
    },
    {
      id: '5',
      question: 'What is the typical warranty period for solar panels?',
      options: ['5-10 years', '15-20 years', '20-25 years', '30+ years'],
      correctAnswer: 2,
      explanation:
        'Most solar panels come with 20-25 year performance warranties, though product warranties are typically 10-12 years.',
      difficulty: 'easy' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-[8vh] text-gray-900">
      {/* Hero */}
      <section className="w-full border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Solar Industry Insurance Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-700 md:text-xl">
              Comprehensive coverage for solar projects from construction to operation—protecting
              your renewable energy investments against weather, equipment, and performance risks.
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
              Specialized coverage for utility-scale, rooftop, and distributed solar installations
              with performance guarantees.
            </div>
          </div>
        </div>
      </section>

      {/* Industry Explanation */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Understanding Solar Industry Insurance</h2>
          <p className="mt-3 text-gray-700">
            The solar industry represents one of the fastest-growing renewable energy sectors, but
            it faces unique risks that require specialized insurance solutions.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Industry Overview</h3>
              <p className="mt-3 text-gray-700">
                Solar power generation involves complex technology, significant capital investment,
                and long-term operational commitments. Projects face risks from extreme weather,
                equipment failure, performance shortfalls, and regulatory changes. Insurance plays a
                crucial role in protecting these investments and ensuring project viability.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  25+ year project lifecycles require long-term protection
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Weather-dependent technology needs climate risk coverage
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Performance guarantees essential for financing
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Key Stakeholders</h3>
              <div className="mt-3 space-y-3">
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaSolarPanel className="text-blue-500" />
                  <div>
                    <div className="font-medium">Project Developers</div>
                    <div className="text-sm text-gray-600">EPC contractors and project owners</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaBolt className="text-blue-500" />
                  <div>
                    <div className="font-medium">Equipment Manufacturers</div>
                    <div className="text-sm text-gray-600">
                      Panel, inverter, and component suppliers
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaUserShield className="text-blue-500" />
                  <div>
                    <div className="font-medium">Investors & Lenders</div>
                    <div className="text-sm text-gray-600">
                      Financial institutions and equity partners
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
            Tailored insurance solutions for every segment of the solar value chain.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Tile icon={<FaSolarPanel />} title="Utility-Scale Projects">
              Large ground-mounted solar farms, solar parks, and grid-connected installations.
            </Tile>
            <Tile icon={<FaSun />} title="Rooftop Solar">
              Commercial and industrial rooftop installations, distributed generation systems.
            </Tile>
            <Tile icon={<FaBolt />} title="Equipment Manufacturers">
              Solar panel, inverter, and component manufacturers with product liability needs.
            </Tile>
            <Tile icon={<FaTools />} title="EPC Contractors">
              Engineering, procurement, and construction companies specializing in solar projects.
            </Tile>
          </div>
        </div>
      </section>

      {/* Sample Risks */}
      <section className="w-full border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Common Risks in Solar Industry</h2>
          <p className="mt-3 text-gray-700">
            Understanding key risks helps in selecting appropriate insurance coverage for your solar
            operations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <RiskCard
              icon={<FaCloud />}
              title="Weather & Natural Disasters"
              description="Hailstorms, cyclones, floods, and extreme weather can damage panels and infrastructure."
              severity="High"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaBolt />}
              title="Equipment Breakdown"
              description="Inverter failures, panel degradation, and electrical system malfunctions affect performance."
              severity="Medium"
              frequency="High"
            />
            <RiskCard
              icon={<FaThermometerHalf />}
              title="Performance Shortfall"
              description="Lower than expected energy generation due to various technical and environmental factors."
              severity="Medium"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaExclamationTriangle />}
              title="Construction Risks"
              description="Delays, damage during installation, and commissioning issues during project development."
              severity="High"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaLock />}
              title="Theft & Vandalism"
              description="Theft of panels and equipment, especially at remote locations during construction."
              severity="Medium"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaFileContract />}
              title="Regulatory & Policy Changes"
              description="Changes in government policies, tariffs, and grid connection regulations."
              severity="Medium"
              frequency="Low"
            />
          </div>
        </div>
      </section>

      {/* Claim Stories Component */}
      <ClaimStories stories={claimStories} industryName="Solar Industry" />

      {/* Core coverage suite */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Core Coverage Suite</h2>
          <p className="mt-3 text-gray-700">
            Comprehensive protection designed specifically for solar energy projects and operations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaFire className="text-2xl text-blue-500" />}
              title="Property & Equipment Coverage"
              body="All-risk coverage for solar panels, inverters, mounting systems, and electrical infrastructure."
              bullets={[
                'Weather damage including hail, wind, and flood',
                'Fire, lightning, and electrical surge protection',
                'Theft, vandalism, and malicious damage coverage',
              ]}
            />
            <Card
              icon={<FaBolt className="text-2xl text-blue-500" />}
              title="Business Interruption & Loss of Revenue"
              body="Protection against income loss due to equipment damage or performance shortfalls."
              bullets={[
                'Delayed start-up and commissioning delays',
                'Grid connection and transmission issues',
                'Performance guarantee shortfall coverage',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaUserShield className="text-2xl text-blue-500" />}
              title="General & Product Liability"
              body="Third-party liability coverage for bodily injury, property damage, and product defects."
              bullets={[
                'Public liability for construction and operation',
                'Product liability for equipment manufacturers',
                'Professional indemnity for consultants and contractors',
              ]}
            />
            <Card
              icon={<FaTools className="text-2xl text-blue-500" />}
              title="Construction & Erection All Risks"
              body="Comprehensive coverage during the construction and commissioning phases."
              bullets={[
                'Material damage during transportation and installation',
                'Testing and commissioning coverage',
                'Contractor equipment and third-party liability',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Insurance Plans/Products */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Insurance Plans for Solar Industry</h2>
          <p className="mt-3 text-gray-700">
            Comprehensive insurance solutions tailored for different segments of the solar industry.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <InsurancePlan
              name="Solar Starter Plan"
              description="Essential coverage for small rooftop and distributed solar installations"
              price="₹1L - ₹3L"
              features={[
                'Property Damage Coverage',
                'Equipment Breakdown',
                'Public Liability Insurance',
                'Basic Weather Protection',
                'Theft & Vandalism Coverage',
              ]}
              recommended={false}
            />
            <InsurancePlan
              name="Solar Professional Plan"
              description="Comprehensive coverage for medium-scale solar projects and commercial installations"
              price="₹3L - ₹15L"
              features={[
                'All Starter Plan Benefits',
                'Business Interruption Coverage',
                'Performance Guarantee Insurance',
                'Construction All Risks',
                'Advanced Weather Protection',
                'Regulatory Risk Coverage',
              ]}
              recommended={true}
            />
            <InsurancePlan
              name="Solar Enterprise Plan"
              description="Complete protection for utility-scale solar projects and large installations"
              price="₹15L+"
              features={[
                'All Professional Plan Benefits',
                'International Coverage',
                'Political Risk Insurance',
                'Advanced Performance Guarantees',
                'Dedicated Claims Management',
                'Risk Engineering Services',
              ]}
              recommended={false}
            />
          </div>
        </div>
      </section>

      {/* Relevant Articles Component */}
      <RelevantArticles articles={articles} industryName="Solar Industry" />

      {/* Knowledge Questionnaire Component */}
      <KnowledgeQuestionnaire questions={quizQuestions} industryName="Solar Industry" />

      {/* What you receive & CTA */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Powering Solar Success. Protecting Clean Energy Investments.
                </h3>
                <p className="mt-2 text-gray-700">
                  Partner with SIIB's renewable energy specialists for comprehensive coverage,
                  performance guarantees, and expert claims management.
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
              value="Solar Insurance Specialists"
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

export default SolarInsurancePage;
