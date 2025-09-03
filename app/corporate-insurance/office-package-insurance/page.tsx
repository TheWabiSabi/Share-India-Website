'use client';
import React from 'react';
import {
  FaChevronRight,
  FaShieldAlt,
  FaBuilding,
  FaLaptop,
  FaBriefcase,
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
  FaDesktop,
  FaWifi,
} from 'react-icons/fa';
import ClaimStories from '../../../components/industries/ClaimStories';
import RelevantArticles from '../../../components/industries/RelevantArticles';
import KnowledgeQuestionnaire from '../../../components/industries/KnowledgeQuestionnaire';

const OfficePackageInsurancePage = () => {
  // Sample data for components
  const claimStories = [
    {
      id: '1',
      title: 'Office Fire Damage - IT Equipment Loss',
      description:
        'Electrical short circuit caused office fire, destroying computers, servers, and office equipment worth several lakhs.',
      claimAmount: '₹15 Lakhs',
      settlementTime: '3 months',
      riskType: 'Fire & Equipment Damage',
      outcome: 'settled' as const,
      lessons: [
        'Office package insurance covers comprehensive equipment protection',
        'Regular electrical maintenance prevents fire incidents',
        'Data backup and recovery services minimize business disruption',
      ],
    },
    {
      id: '2',
      title: 'Burglary - Office Equipment Theft',
      description:
        'Office break-in resulted in theft of laptops, printers, and other valuable office equipment during weekend.',
      claimAmount: '₹8 Lakhs',
      settlementTime: '6 weeks',
      riskType: 'Burglary & Theft',
      outcome: 'settled' as const,
      lessons: [
        'Comprehensive coverage protects against theft and burglary',
        'Security systems and surveillance reduce theft risks',
        'Proper inventory documentation speeds claim settlement',
      ],
    },
    {
      id: '3',
      title: 'Public Liability - Client Injury',
      description:
        'Client slipped and injured in office premises, leading to medical expenses and compensation claim.',
      claimAmount: '₹3 Lakhs',
      settlementTime: '4 months',
      riskType: 'Public Liability',
      outcome: 'settled' as const,
      lessons: [
        'Public liability coverage protects against visitor injuries',
        'Proper office maintenance and safety measures prevent accidents',
        'Quick response and documentation help claim resolution',
      ],
    },
    {
      id: '4',
      title: 'Business Interruption - Power Outage',
      description:
        'Extended power outage due to transformer failure caused business disruption and loss of productivity.',
      claimAmount: '₹5 Lakhs',
      settlementTime: '2 months',
      riskType: 'Business Interruption',
      outcome: 'settled' as const,
      lessons: [
        'Business interruption coverage compensates for lost income',
        'Backup power systems reduce operational disruptions',
        'Proper documentation of losses supports claims',
      ],
    },
  ];

  const articles = [
    {
      id: '1',
      title: 'Office Insurance Trends 2024: Remote Work and Hybrid Office Models',
      excerpt:
        'How changing work patterns are affecting office insurance needs and coverage requirements.',
      author: 'Office Insurance Team',
      publishDate: 'May 2, 2024',
      readTime: '7 min read',
      category: 'Office Insurance',
      url: '#',
      featured: true,
    },
    {
      id: '2',
      title: 'Small Business Insurance: Protecting Your Office Operations',
      excerpt:
        'Essential insurance coverage for small businesses and professional service providers.',
      author: 'SME Insurance Specialists',
      publishDate: 'Apr 25, 2024',
      readTime: '8 min read',
      category: 'Small Business',
      url: '#',
    },
    {
      id: '3',
      title: 'Cyber Security for Small Offices: Insurance and Prevention',
      excerpt:
        'Protecting small offices from cyber threats and understanding cyber insurance needs.',
      author: 'Cyber Risk Team',
      publishDate: 'Apr 20, 2024',
      readTime: '6 min read',
      category: 'Cyber Security',
      url: '#',
    },
  ];

  const quizQuestions = [
    {
      id: '1',
      question: 'What is typically included in an office package insurance policy?',
      options: [
        'Only fire insurance',
        'Fire, burglary, public liability, and equipment coverage',
        'Only equipment insurance',
        'Only public liability',
      ],
      correctAnswer: 1,
      explanation:
        'Office package insurance typically includes fire and allied perils, burglary, public liability, and office equipment coverage in one comprehensive policy.',
      difficulty: 'easy' as const,
    },
    {
      id: '2',
      question: 'Which type of business typically benefits most from office package insurance?',
      options: [
        'Manufacturing companies only',
        'Small and medium enterprises with office operations',
        'Large corporations only',
        'Retail stores only',
      ],
      correctAnswer: 1,
      explanation:
        'Office package insurance is designed for SMEs and professional service providers who need comprehensive but cost-effective coverage.',
      difficulty: 'medium' as const,
    },
    {
      id: '3',
      question: 'What does "reinstatement value" mean for office equipment insurance?',
      options: [
        'Original purchase price',
        'Current market value',
        'Cost to replace with new equipment of similar type',
        'Depreciated value',
      ],
      correctAnswer: 2,
      explanation:
        'Reinstatement value covers the cost to replace damaged equipment with new equipment of similar type and capacity at current market prices.',
      difficulty: 'hard' as const,
    },
    {
      id: '4',
      question: 'Which factor most affects office package insurance premiums?',
      options: [
        'Office color scheme',
        'Location, security measures, and sum insured',
        'Number of employees only',
        'Office furniture style',
      ],
      correctAnswer: 1,
      explanation:
        'Office location, security measures, fire safety systems, and total sum insured are primary factors affecting office insurance premiums.',
      difficulty: 'medium' as const,
    },
    {
      id: '5',
      question: 'What is typically the minimum sum insured for office package policies?',
      options: ['₹50,000', '₹1 Lakh', '₹5 Lakhs', '₹50 Lakhs'],
      correctAnswer: 1,
      explanation:
        '₹1 Lakh is typically the minimum sum insured for office package policies, though this may vary by insurer and location.',
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
              Office Package Insurance Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-700 md:text-xl">
              Comprehensive protection for small and medium businesses—covering office premises,
              equipment, and operations with convenient all-in-one coverage.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-lg bg-blue-100 px-6 py-3 font-semibold text-blue-800 hover:bg-blue-200">
                <FaShieldAlt className="mr-2" />
                Get Package Quote
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50">
                <FaFileContract className="mr-2" />
                Office Assessment
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50">
                <FaPhoneAlt className="mr-2" />
                Speak to Expert
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Specialized coverage for professional services, consultancies, and small business
              operations.
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Explanation */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Understanding Office Package Insurance</h2>
          <p className="mt-3 text-gray-700">
            Office Package Insurance provides comprehensive protection for small and medium
            businesses in a single, convenient policy covering multiple risks and assets.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Coverage Overview</h3>
              <p className="mt-3 text-gray-700">
                This insurance combines multiple coverages including fire and allied perils,
                burglary and theft, public liability, and office equipment protection in one
                comprehensive package. It's designed specifically for small and medium enterprises,
                professional service providers, and office-based businesses that need
                cost-effective, comprehensive protection without the complexity of multiple
                policies.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  All-in-one coverage for office premises and contents
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Protection for office equipment and technology
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Public liability and business interruption coverage
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Key Benefits</h3>
              <div className="mt-3 space-y-3">
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaBriefcase className="text-blue-500" />
                  <div>
                    <div className="font-medium">Simplified Coverage</div>
                    <div className="text-sm text-gray-600">
                      One policy for multiple protection needs
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaRupeeSign className="text-blue-500" />
                  <div>
                    <div className="font-medium">Cost Effective</div>
                    <div className="text-sm text-gray-600">
                      Bundled coverage at competitive rates
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaDesktop className="text-blue-500" />
                  <div>
                    <div className="font-medium">Equipment Protection</div>
                    <div className="text-sm text-gray-600">
                      Comprehensive IT and office equipment coverage
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
            Comprehensive office package insurance solutions for businesses across various
            professional services and office-based operations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Tile icon={<FaBriefcase />} title="Professional Services">
              Consultants, lawyers, accountants, and other professional service providers.
            </Tile>
            <Tile icon={<FaLaptop />} title="IT & Technology">
              Software companies, IT services, and technology startups with office operations.
            </Tile>
            <Tile icon={<FaBuilding />} title="Small Businesses">
              SMEs, trading companies, and service businesses with office premises.
            </Tile>
            <Tile icon={<FaDesktop />} title="Co-working Spaces">
              Shared office spaces, business centers, and flexible workspace providers.
            </Tile>
          </div>
        </div>
      </section>

      {/* Sample Risks */}
      <section className="w-full border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Common Office Insurance Risks</h2>
          <p className="mt-3 text-gray-700">
            Understanding key office risks helps in selecting appropriate insurance coverage for
            your business operations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <RiskCard
              icon={<FaFire />}
              title="Fire & Allied Perils"
              description="Fire, lightning, explosion, and electrical damage to office premises and equipment."
              severity="High"
              frequency="Low"
            />
            <RiskCard
              icon={<FaLock />}
              title="Burglary & Theft"
              description="Theft of office equipment, computers, and valuable business assets."
              severity="Medium"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaUserShield />}
              title="Public Liability"
              description="Third-party injury or property damage occurring on office premises."
              severity="Medium"
              frequency="Low"
            />
            <RiskCard
              icon={<FaPlug />}
              title="Equipment Breakdown"
              description="Failure of computers, servers, and other critical office equipment."
              severity="Medium"
              frequency="High"
            />
            <RiskCard
              icon={<FaWater />}
              title="Water Damage"
              description="Damage from burst pipes, leaks, or flooding affecting office operations."
              severity="Medium"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaExclamationTriangle />}
              title="Business Interruption"
              description="Loss of income due to office damage or operational disruptions."
              severity="Medium"
              frequency="Low"
            />
          </div>
        </div>
      </section>

      {/* Claim Stories Component */}
      <ClaimStories stories={claimStories} industryName="Office Package Insurance" />

      {/* Core coverage suite */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Core Coverage Options</h2>
          <p className="mt-3 text-gray-700">
            Comprehensive office protection designed for small and medium business operations and
            professional services.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaBuilding className="text-2xl text-blue-500" />}
              title="Office Premises Coverage"
              body="Protection for office building, fixtures, and physical infrastructure."
              bullets={[
                'Fire and allied perils protection',
                'Burglary and theft coverage',
                'Natural catastrophe protection',
              ]}
            />
            <Card
              icon={<FaLaptop className="text-2xl text-blue-500" />}
              title="Office Equipment Insurance"
              body="Comprehensive coverage for computers, furniture, and office assets."
              bullets={[
                'IT equipment and computer systems',
                'Office furniture and fixtures',
                'Electronic equipment insurance',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaUserShield className="text-2xl text-blue-500" />}
              title="Public Liability Coverage"
              body="Protection against third-party claims and visitor injuries."
              bullets={[
                'Visitor injury and property damage',
                'Professional liability protection',
                'Legal defense and settlement costs',
              ]}
            />
            <Card
              icon={<FaBriefcase className="text-2xl text-blue-500" />}
              title="Business Interruption"
              body="Coverage for loss of income due to office damage or disruption."
              bullets={[
                'Loss of gross profit coverage',
                'Additional expenses protection',
                'Temporary office rental costs',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Insurance Plans/Products */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Office Package Insurance Plans</h2>
          <p className="mt-3 text-gray-700">
            Flexible office insurance solutions designed for different business sizes and coverage
            requirements.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <InsurancePlan
              name="Basic Office Plan"
              description="Essential coverage for small offices and startups"
              price="₹5K - ₹25K"
              features={[
                'Fire & Allied Perils',
                'Burglary & Theft Protection',
                'Basic Equipment Coverage',
                'Public Liability (₹10L)',
                'Standard Policy Terms',
              ]}
              recommended={false}
            />
            <InsurancePlan
              name="Professional Office Plan"
              description="Comprehensive coverage for established businesses and professional services"
              price="₹25K - ₹1L"
              features={[
                'All Basic Plan Benefits',
                'Enhanced Equipment Coverage',
                'Business Interruption',
                'Increased Liability Limits',
                'Electronic Equipment Insurance',
                'Money Insurance',
              ]}
              recommended={true}
            />
            <InsurancePlan
              name="Premium Office Plan"
              description="Advanced protection for larger offices and high-value operations"
              price="₹1L+"
              features={[
                'All Professional Plan Benefits',
                'Cyber Liability Coverage',
                'International Coverage',
                'Directors & Officers Liability',
                'Crisis Management Support',
                'Dedicated Account Manager',
              ]}
              recommended={false}
            />
          </div>
        </div>
      </section>

      {/* Relevant Articles Component */}
      <RelevantArticles articles={articles} industryName="Office Package Insurance" />

      {/* Knowledge Questionnaire Component */}
      <KnowledgeQuestionnaire questions={quizQuestions} industryName="Office Package Insurance" />

      {/* What you receive & CTA */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Simplifying Protection. Empowering Business.
                </h3>
                <p className="mt-2 text-gray-700">
                  Partner with SIIB's office insurance specialists for comprehensive coverage,
                  simplified administration, and expert support for your business.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  <FaShieldAlt className="mr-2" />
                  Get Quote
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100">
                  <FaFileContract className="mr-2" />
                  Office Assessment
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
              value="Office Insurance Specialists"
              icon={<FaHeadset />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

/* Helpers - Same as previous pages */
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

export default OfficePackageInsurancePage;
