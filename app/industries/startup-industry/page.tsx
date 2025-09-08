'use client';
import React from 'react';
import {
  FaChevronRight,
  FaShieldAlt,
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaUserShield,
  FaFileContract,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
  FaLock,
  FaExclamationTriangle,
  FaCheckCircle,
  FaRupeeSign,
  FaCertificate,
  FaCode,
  FaChartLine,
} from 'react-icons/fa';
import ClaimStories from '../../../components/industries/ClaimStories';
import RelevantArticles from '../../../components/industries/RelevantArticles';
import KnowledgeQuestionnaire from '../../../components/industries/KnowledgeQuestionnaire';
import MainCaraousel from '@/components/main-caraousel';

const StartupInsurancePage = () => {
  // Sample data for components
  const claimStories = [
    {
      id: '1',
      title: 'Cyber Attack on Fintech Startup',
      description:
        'Ransomware attack on fintech platform compromised customer data and caused service disruption for 72 hours.',
      claimAmount: '₹15 Crores',
      settlementTime: '6 months',
      riskType: 'Cyber Security',
      outcome: 'settled' as const,
      lessons: [
        'Cyber insurance is essential for tech startups handling sensitive data',
        'Incident response planning reduces downtime and costs',
        'Regular security audits prevent vulnerabilities',
      ],
    },
    {
      id: '2',
      title: 'Product Liability - E-commerce Platform',
      description:
        'Defective product sold through e-commerce platform caused consumer injury, leading to liability claims against the platform.',
      claimAmount: '₹8 Crores',
      settlementTime: '10 months',
      riskType: 'Product Liability',
      outcome: 'settled' as const,
      lessons: [
        'E-commerce platforms need product liability coverage',
        'Vendor screening and quality controls reduce risks',
        'Clear terms of service help limit liability exposure',
      ],
    },
    {
      id: '3',
      title: 'Employment Practices Liability',
      description:
        'Former employee filed discrimination lawsuit against startup, claiming wrongful termination and harassment.',
      claimAmount: '₹3 Crores',
      settlementTime: '14 months',
      riskType: 'Employment Practices',
      outcome: 'settled' as const,
      lessons: [
        'Employment practices liability insurance protects against HR-related claims',
        'Proper HR policies and training prevent issues',
        'Documentation of employment decisions is crucial',
      ],
    },
    {
      id: '4',
      title: 'Professional Liability - SaaS Provider',
      description:
        'Software bug in SaaS platform caused client data loss, resulting in professional liability claims and business interruption.',
      claimAmount: '₹12 Crores',
      settlementTime: '8 months',
      riskType: 'Professional Liability',
      outcome: 'settled' as const,
      lessons: [
        'Professional liability insurance covers software errors and omissions',
        'Regular testing and quality assurance prevent bugs',
        'Service level agreements should include liability limitations',
      ],
    },
  ];

  const articles = [
    {
      id: '1',
      title: 'Startup Insurance Guide 2024: Essential Coverage for New Ventures',
      excerpt:
        'Comprehensive guide to insurance needs for startups across different stages of growth and industry sectors.',
      author: 'Ankit Sharma',
      publishDate: 'Apr 12, 2024',
      readTime: '10 min read',
      category: 'Startup Guide',
      url: '#',
      featured: true,
    },
    {
      id: '2',
      title: 'Cyber Security Insurance for Tech Startups: What You Need to Know',
      excerpt:
        'Understanding cyber risks and insurance requirements for technology startups handling sensitive data.',
      author: 'Priya Nair',
      publishDate: 'Apr 5, 2024',
      readTime: '8 min read',
      category: 'Cyber Security',
      url: '#',
    },
    {
      id: '3',
      title: 'D&O Insurance for Startup Founders: Protecting Leadership Decisions',
      excerpt:
        'Why directors and officers insurance is crucial for startup founders and how to choose the right coverage.',
      author: 'Rajesh Gupta',
      publishDate: 'Mar 28, 2024',
      readTime: '7 min read',
      category: 'Leadership Protection',
      url: '#',
    },
  ];

  const quizQuestions = [
    {
      id: '1',
      question: 'What is the most critical insurance coverage for tech startups?',
      options: [
        'Fire insurance',
        'Cyber liability insurance',
        'Motor vehicle insurance',
        'Building insurance',
      ],
      correctAnswer: 1,
      explanation:
        'Cyber liability insurance is critical for tech startups as they handle sensitive data and face significant cyber risks that can impact business operations.',
      difficulty: 'easy' as const,
    },
    {
      id: '2',
      question:
        'Which insurance protects startup founders from personal liability for business decisions?',
      options: [
        'General liability insurance',
        'Professional indemnity insurance',
        'Directors and Officers (D&O) insurance',
        'Employment practices liability insurance',
      ],
      correctAnswer: 2,
      explanation:
        'Directors and Officers (D&O) insurance protects founders and executives from personal liability arising from their management decisions and actions.',
      difficulty: 'medium' as const,
    },
    {
      id: '3',
      question: 'What does "Errors and Omissions" insurance typically cover for startups?',
      options: [
        'Property damage only',
        'Professional mistakes and negligence',
        'Employee injuries only',
        'Cyber attacks only',
      ],
      correctAnswer: 1,
      explanation:
        'Errors and Omissions (E&O) insurance covers professional mistakes, negligence, and failure to deliver promised services or products.',
      difficulty: 'medium' as const,
    },
    {
      id: '4',
      question: 'At what stage should startups typically consider getting insurance?',
      options: [
        'Only after Series A funding',
        'Only after profitability',
        'From incorporation/early stage',
        'Only when required by law',
      ],
      correctAnswer: 2,
      explanation:
        'Startups should consider insurance from incorporation as risks exist from day one, and early coverage is often more affordable.',
      difficulty: 'hard' as const,
    },
    {
      id: '5',
      question: 'Which factor most affects startup insurance premiums?',
      options: [
        'Company age only',
        'Number of employees only',
        'Industry sector and risk profile',
        'Office location only',
      ],
      correctAnswer: 2,
      explanation:
        'Industry sector and risk profile are the primary factors, as different industries (fintech, healthcare, e-commerce) have varying risk exposures.',
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
              Startup Industry Insurance Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-700 md:text-xl">
              Comprehensive coverage for startups and emerging businesses—protecting innovation,
              data, and growth from cyber risks to professional liability.
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
              Specialized coverage for tech startups, SaaS companies, and digital platforms with
              scalable protection.
            </div>
          </div>
        </div>
      </section>

      {/* Industry Explanation */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">
            Understanding Startup Industry Insurance
          </h2>
          <p className="mt-3 text-gray-700">
            Startups operate in a dynamic environment with unique risks related to technology, rapid
            growth, and innovation. Insurance protection is essential for sustainable growth and
            investor confidence.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Industry Overview</h3>
              <p className="mt-3 text-gray-700">
                The startup ecosystem encompasses technology companies, digital platforms, and
                innovative business models that disrupt traditional industries. These ventures face
                unique risks including cyber threats, professional liability, employment practices
                issues, and rapid scaling challenges. Insurance provides crucial protection for
                founders, employees, and investors while supporting business continuity and growth.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  High cyber risk exposure due to digital operations
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Professional liability from software and service delivery
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Employment practices risks in fast-growing teams
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Key Startup Categories</h3>
              <div className="mt-3 space-y-3">
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaCode className="text-blue-500" />
                  <div>
                    <div className="font-medium">Technology & SaaS</div>
                    <div className="text-sm text-gray-600">
                      Software development and cloud services
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaChartLine className="text-blue-500" />
                  <div>
                    <div className="font-medium">Fintech & Digital Payments</div>
                    <div className="text-sm text-gray-600">
                      Financial technology and payment platforms
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaUsers className="text-blue-500" />
                  <div>
                    <div className="font-medium">E-commerce & Marketplaces</div>
                    <div className="text-sm text-gray-600">
                      Online retail and digital marketplaces
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
            Tailored insurance solutions for startups at every stage of growth and across all
            sectors.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Tile icon={<FaRocket />} title="Early-Stage Startups">
              Seed and Series A companies building innovative products and services.
            </Tile>
            <Tile icon={<FaCode />} title="Tech Companies">
              Software development, SaaS platforms, and technology service providers.
            </Tile>
            <Tile icon={<FaChartLine />} title="Fintech Startups">
              Digital payments, lending platforms, and financial technology companies.
            </Tile>
            <Tile icon={<FaLightbulb />} title="Innovation Labs">
              Corporate innovation labs, incubators, and accelerator programs.
            </Tile>
          </div>
        </div>
      </section>

      {/* Sample Risks */}
      <section className="w-full border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Common Risks in Startup Industry</h2>
          <p className="mt-3 text-gray-700">
            Understanding key risks helps in selecting appropriate insurance coverage for your
            startup operations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <RiskCard
              icon={<FaLock />}
              title="Cyber Security Threats"
              description="Data breaches, ransomware attacks, and system compromises affecting operations and customer data."
              severity="High"
              frequency="High"
            />
            <RiskCard
              icon={<FaUserShield />}
              title="Professional Liability"
              description="Software errors, service failures, and professional negligence claims from clients."
              severity="Medium"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaUsers />}
              title="Employment Practices"
              description="Discrimination, harassment, and wrongful termination claims from employees."
              severity="Medium"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaFileContract />}
              title="Intellectual Property"
              description="Patent infringement, copyright violations, and trade secret theft claims."
              severity="Medium"
              frequency="Low"
            />
            <RiskCard
              icon={<FaExclamationTriangle />}
              title="Directors & Officers Liability"
              description="Management decisions, fiduciary breaches, and shareholder disputes."
              severity="Medium"
              frequency="Low"
            />
            <RiskCard
              icon={<FaChartLine />}
              title="Business Interruption"
              description="Service outages, system failures, and operational disruptions affecting revenue."
              severity="Medium"
              frequency="Medium"
            />
          </div>
        </div>
      </section>

      {/* Claim Stories Component */}
      <ClaimStories stories={claimStories} industryName="Startup Industry" />

      {/* Core coverage suite */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Core Coverage Suite</h2>
          <p className="mt-3 text-gray-700">
            Comprehensive protection designed specifically for startup operations and growth stages.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaLock className="text-2xl text-blue-500" />}
              title="Cyber Liability & Data Protection"
              body="Comprehensive coverage for cyber threats and data security incidents."
              bullets={[
                'Data breach response and notification costs',
                'Ransomware and cyber extortion coverage',
                'Business interruption from cyber events',
              ]}
            />
            <Card
              icon={<FaUserShield className="text-2xl text-blue-500" />}
              title="Professional & Product Liability"
              body="Protection against professional errors and product-related claims."
              bullets={[
                'Software errors and omissions coverage',
                'Product liability for digital products',
                'Service level agreement breach protection',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaUsers className="text-2xl text-blue-500" />}
              title="Employment Practices Liability"
              body="Coverage for employment-related claims and HR issues."
              bullets={[
                'Discrimination and harassment claims',
                'Wrongful termination protection',
                'Wage and hour dispute coverage',
              ]}
            />
            <Card
              icon={<FaRocket className="text-2xl text-blue-500" />}
              title="Directors & Officers Liability"
              body="Protection for founders and executives against management liability."
              bullets={[
                'Management decision protection',
                'Shareholder and investor dispute coverage',
                'Regulatory investigation defense',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Insurance Plans/Products */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Insurance Plans for Startups</h2>
          <p className="mt-3 text-gray-700">
            Scalable insurance solutions designed for startups at different growth stages.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <InsurancePlan
              name="Startup Essentials Plan"
              description="Basic coverage for early-stage startups and small teams"
              price="₹50K - ₹2L"
              features={[
                'Cyber Liability (Basic)',
                'Professional Indemnity',
                'General Liability',
                'Employment Practices (Basic)',
                'Key Person Insurance',
              ]}
              recommended={false}
            />
            <InsurancePlan
              name="Growth Stage Plan"
              description="Comprehensive coverage for scaling startups with funding"
              price="₹2L - ₹10L"
              features={[
                'All Essentials Plan Benefits',
                'Directors & Officers Liability',
                'Enhanced Cyber Coverage',
                'Product Liability',
                'Business Interruption',
                'International Coverage',
              ]}
              recommended={true}
            />
            <InsurancePlan
              name="Enterprise Startup Plan"
              description="Complete protection for mature startups and unicorns"
              price="₹10L+"
              features={[
                'All Growth Stage Benefits',
                'Advanced Cyber & Privacy Coverage',
                'IPO Readiness Coverage',
                'Crisis Management Services',
                'Global Operations Protection',
                'Dedicated Risk Management Team',
              ]}
              recommended={false}
            />
          </div>
        </div>
      </section>

      {/* Relevant Articles Component */}
      {/* <RelevantArticles articles={articles} industryName="Startup Industry" /> */}
      <section className="w-full border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Industry Insights & Articles</h2>
          <p className="mt-3 text-gray-700">
            Stay updated with the latest trends, regulations, and best practices in Plastic Industry
            insurance.
          </p>
          <div className="w-full pt-6">
            <MainCaraousel color="white" layout={3} topic="startup_industry" />
          </div>
        </div>
      </section>

      {/* Knowledge Questionnaire Component */}
      <KnowledgeQuestionnaire questions={quizQuestions} industryName="Startup Industry" />

      {/* What you receive & CTA */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Fueling Innovation. Protecting Growth.
                </h3>
                <p className="mt-2 text-gray-700">
                  Partner with SIIB&#39;s startup specialists for scalable coverage, cyber
                  protection, and expert risk management tailored for emerging businesses.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  <FaShieldAlt className="mr-2" />
                  Request Proposal
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100">
                  <FaFileContract className="mr-2" />
                  Upload Company Data
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
              value="Startup Insurance Specialists"
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

export default StartupInsurancePage;
