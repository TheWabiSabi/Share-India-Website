'use client';
import React from 'react';
import {
  FaChevronRight,
  FaShieldAlt,
  FaUserShield,
  FaGavel,
  FaHandshake,
  FaLeaf,
  FaFire,
  FaWater,
  FaWind,
  FaWarehouse,
  FaTruckMoving,
  FaFileContract,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
  FaPlug,
  FaLock,
  FaExclamationTriangle,
  FaCheckCircle,
  FaRupeeSign,
  FaCertificate,
  FaUsers,
  FaBuilding,
} from 'react-icons/fa';
import ClaimStories from '../../../components/industries/ClaimStories';
import RelevantArticles from '../../../components/industries/RelevantArticles';
import KnowledgeQuestionnaire from '../../../components/industries/KnowledgeQuestionnaire';

const LiabilityInsurancePage = () => {
  // Sample data for components
  const claimStories = [
    {
      id: '1',
      title: 'Product Liability Claim - Food Contamination',
      description:
        'Food manufacturer faced liability claims after contaminated products caused food poisoning in multiple customers.',
      claimAmount: '₹15 Crores',
      settlementTime: '14 months',
      riskType: 'Product Liability',
      outcome: 'settled' as const,
      lessons: [
        'Product liability insurance essential for manufacturers',
        'Quality control processes prevent contamination',
        'Recall insurance covers withdrawal costs',
      ],
    },
    {
      id: '2',
      title: 'Public Liability - Shopping Mall Accident',
      description:
        'Customer injured due to wet floor in shopping mall, leading to compensation claim for medical expenses and damages.',
      claimAmount: '₹8 Crores',
      settlementTime: '10 months',
      riskType: 'Public Liability',
      outcome: 'settled' as const,
      lessons: [
        'Public liability coverage protects against third-party claims',
        'Proper safety measures reduce accident risks',
        'Quick response and documentation help claim settlement',
      ],
    },
    {
      id: '3',
      title: 'Professional Indemnity - Consultant Error',
      description:
        "Engineering consultant faced claim for design error that caused structural problems in client's building project.",
      claimAmount: '₹25 Crores',
      settlementTime: '18 months',
      riskType: 'Professional Indemnity',
      outcome: 'settled' as const,
      lessons: [
        'Professional indemnity essential for service providers',
        'Proper documentation and quality checks prevent errors',
        'Coverage includes legal defense costs',
      ],
    },
    {
      id: '4',
      title: 'Employment Practices Liability',
      description:
        'Company faced discrimination lawsuit from former employee, claiming wrongful termination and harassment.',
      claimAmount: '₹5 Crores',
      settlementTime: '12 months',
      riskType: 'Employment Practices',
      outcome: 'settled' as const,
      lessons: [
        'Employment practices liability protects against HR claims',
        'Proper HR policies and training prevent issues',
        'Documentation of employment decisions is crucial',
      ],
    },
  ];

  const articles = [
    {
      id: '1',
      title: 'Liability Insurance Trends 2024: Emerging Risks and Coverage Evolution',
      excerpt:
        'Latest developments in liability insurance covering new risks and regulatory changes.',
      author: 'Liability Risk Team',
      publishDate: 'Apr 18, 2024',
      readTime: '9 min read',
      category: 'Liability Insurance',
      url: '#',
      featured: true,
    },
    {
      id: '2',
      title: 'Product Liability in the Digital Age: E-commerce and Marketplace Risks',
      excerpt:
        'Understanding product liability risks for online businesses and digital marketplaces.',
      author: 'Product Liability Specialists',
      publishDate: 'Apr 12, 2024',
      readTime: '7 min read',
      category: 'Product Liability',
      url: '#',
    },
    {
      id: '3',
      title: 'Professional Indemnity: Protecting Service Providers in India',
      excerpt:
        'Comprehensive guide to professional indemnity insurance for consultants and service providers.',
      author: 'Professional Lines Team',
      publishDate: 'Apr 5, 2024',
      readTime: '8 min read',
      category: 'Professional Indemnity',
      url: '#',
    },
  ];

  const quizQuestions = [
    {
      id: '1',
      question: 'What is the primary purpose of public liability insurance?',
      options: [
        'To cover employee injuries',
        'To protect against third-party injury and property damage claims',
        'To cover business property damage',
        'To provide legal advice',
      ],
      correctAnswer: 1,
      explanation:
        'Public liability insurance protects businesses against claims from third parties for bodily injury or property damage caused by business operations.',
      difficulty: 'easy' as const,
    },
    {
      id: '2',
      question: 'Which professionals typically need professional indemnity insurance?',
      options: [
        'Factory workers only',
        'Consultants, advisors, and service providers',
        'Retail shop owners only',
        'Security guards only',
      ],
      correctAnswer: 1,
      explanation:
        'Professional indemnity insurance is essential for consultants, advisors, and service providers who give professional advice or services.',
      difficulty: 'medium' as const,
    },
    {
      id: '3',
      question: 'What does "retroactive date" mean in professional indemnity insurance?',
      options: [
        'The policy start date',
        'The earliest date from which claims can be covered',
        'The policy expiry date',
        'The premium payment date',
      ],
      correctAnswer: 1,
      explanation:
        'Retroactive date is the earliest date from which professional acts are covered, typically set when first obtaining professional indemnity insurance.',
      difficulty: 'hard' as const,
    },
    {
      id: '4',
      question: 'Which of the following is typically covered under product liability insurance?',
      options: [
        'Manufacturing defects only',
        'Design defects, manufacturing defects, and inadequate warnings',
        'Shipping costs only',
        'Marketing expenses only',
      ],
      correctAnswer: 1,
      explanation:
        'Product liability insurance covers design defects, manufacturing defects, and failure to provide adequate warnings or instructions.',
      difficulty: 'medium' as const,
    },
    {
      id: '5',
      question: 'What is the typical coverage limit recommended for public liability insurance?',
      options: ['₹1 Lakh', '₹10 Lakhs', '₹1-5 Crores', '₹100 Crores'],
      correctAnswer: 2,
      explanation:
        '₹1-5 Crores is typically recommended for public liability insurance, depending on business size and risk exposure.',
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
              Liability Insurance Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-700 md:text-xl">
              Comprehensive protection against third-party claims, professional negligence, and
              legal liabilities—safeguarding your business reputation and financial stability.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-lg bg-blue-100 px-6 py-3 font-semibold text-blue-800 hover:bg-blue-200">
                <FaShieldAlt className="mr-2" />
                Get Coverage Quote
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50">
                <FaFileContract className="mr-2" />
                Risk Assessment
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50">
                <FaPhoneAlt className="mr-2" />
                Speak to Expert
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Specialized coverage for public liability, product liability, and professional
              indemnity risks.
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Explanation */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Understanding Liability Insurance</h2>
          <p className="mt-3 text-gray-700">
            Liability insurance protects businesses against financial losses arising from legal
            claims made by third parties for injury, damage, or professional negligence.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Coverage Overview</h3>
              <p className="mt-3 text-gray-700">
                Liability insurance covers legal costs and compensation payments when your business
                is held legally responsible for injury to third parties, damage to their property,
                or professional mistakes. It includes public liability, product liability,
                professional indemnity, and employment practices liability coverage.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Protection against third-party injury and property damage claims
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Coverage for professional errors and omissions
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Legal defense costs and settlement payments
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Key Benefits</h3>
              <div className="mt-3 space-y-3">
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaGavel className="text-blue-500" />
                  <div>
                    <div className="font-medium">Legal Protection</div>
                    <div className="text-sm text-gray-600">Defense against lawsuits and claims</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaHandshake className="text-blue-500" />
                  <div>
                    <div className="font-medium">Reputation Management</div>
                    <div className="text-sm text-gray-600">
                      Protect business reputation and relationships
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaRupeeSign className="text-blue-500" />
                  <div>
                    <div className="font-medium">Financial Security</div>
                    <div className="text-sm text-gray-600">
                      Coverage for compensation and legal costs
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
            Comprehensive liability insurance solutions for businesses across all sectors and
            professional services.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Tile icon={<FaBuilding />} title="Businesses & Retailers">
              Shops, restaurants, offices, and commercial establishments serving the public.
            </Tile>
            <Tile icon={<FaUsers />} title="Professional Services">
              Consultants, advisors, architects, engineers, and service providers.
            </Tile>
            <Tile icon={<FaHandshake />} title="Manufacturers">
              Product manufacturers and suppliers with product liability exposure.
            </Tile>
            <Tile icon={<FaUserShield />} title="Employers">
              Companies with employees requiring employment practices liability coverage.
            </Tile>
          </div>
        </div>
      </section>

      {/* Sample Risks */}
      <section className="w-full border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Common Liability Risks</h2>
          <p className="mt-3 text-gray-700">
            Understanding key liability risks helps in selecting appropriate insurance coverage for
            your business operations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <RiskCard
              icon={<FaUserShield />}
              title="Public Liability"
              description="Third-party injury or property damage caused by business operations or premises."
              severity="High"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaHandshake />}
              title="Product Liability"
              description="Defective products causing injury or damage to consumers or users."
              severity="High"
              frequency="Low"
            />
            <RiskCard
              icon={<FaGavel />}
              title="Professional Negligence"
              description="Errors, omissions, or negligent acts in professional services or advice."
              severity="Medium"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaUsers />}
              title="Employment Practices"
              description="Discrimination, harassment, or wrongful termination claims from employees."
              severity="Medium"
              frequency="Low"
            />
            <RiskCard
              icon={<FaExclamationTriangle />}
              title="Contractual Liability"
              description="Liability assumed under contracts and agreements with third parties."
              severity="Medium"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaLeaf />}
              title="Environmental Liability"
              description="Pollution or environmental damage caused by business operations."
              severity="High"
              frequency="Low"
            />
          </div>
        </div>
      </section>

      {/* Claim Stories Component */}
      <ClaimStories stories={claimStories} industryName="Liability Insurance" />

      {/* Core coverage suite */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Core Coverage Options</h2>
          <p className="mt-3 text-gray-700">
            Comprehensive liability protection designed for different types of business risks and
            professional exposures.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaUserShield className="text-2xl text-blue-500" />}
              title="Public Liability Insurance"
              body="Protection against third-party injury and property damage claims."
              bullets={[
                'Bodily injury to third parties',
                'Property damage to third-party assets',
                'Legal defense and settlement costs',
              ]}
            />
            <Card
              icon={<FaHandshake className="text-2xl text-blue-500" />}
              title="Product Liability Insurance"
              body="Coverage for defective products causing injury or damage to users."
              bullets={[
                'Design and manufacturing defects',
                'Inadequate warnings or instructions',
                'Product recall expenses',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaGavel className="text-2xl text-blue-500" />}
              title="Professional Indemnity"
              body="Protection against claims arising from professional errors and negligence."
              bullets={[
                'Errors and omissions in professional services',
                'Breach of professional duty',
                'Loss of documents and data',
              ]}
            />
            <Card
              icon={<FaUsers className="text-2xl text-blue-500" />}
              title="Employment Practices Liability"
              body="Coverage for employment-related claims and HR issues."
              bullets={[
                'Discrimination and harassment claims',
                'Wrongful termination lawsuits',
                'Wage and hour disputes',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Insurance Plans/Products */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Liability Insurance Plans</h2>
          <p className="mt-3 text-gray-700">
            Flexible liability insurance solutions designed for different business sizes and risk
            exposures.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <InsurancePlan
              name="Basic Liability Plan"
              description="Essential coverage for small businesses and service providers"
              price="₹15K - ₹50K"
              features={[
                'Public Liability Coverage',
                'Basic Professional Indemnity',
                'Legal Defense Costs',
                'Third-party Property Damage',
                'Standard Coverage Limits',
              ]}
              recommended={false}
            />
            <InsurancePlan
              name="Comprehensive Liability Plan"
              description="Complete coverage for medium enterprises and manufacturers"
              price="₹50K - ₹5L"
              features={[
                'All Basic Plan Benefits',
                'Product Liability Coverage',
                'Employment Practices Liability',
                'Enhanced Coverage Limits',
                'Contractual Liability Protection',
                'Crisis Management Support',
              ]}
              recommended={true}
            />
            <InsurancePlan
              name="Enterprise Liability Plan"
              description="Advanced protection for large corporations and high-risk businesses"
              price="₹5L+"
              features={[
                'All Comprehensive Plan Benefits',
                'Environmental Liability Coverage',
                'International Liability Protection',
                'Directors & Officers Liability',
                'Cyber Liability Coverage',
                'Dedicated Claims Manager',
              ]}
              recommended={false}
            />
          </div>
        </div>
      </section>

      {/* Relevant Articles Component */}
      <RelevantArticles articles={articles} industryName="Liability Insurance" />

      {/* Knowledge Questionnaire Component */}
      <KnowledgeQuestionnaire questions={quizQuestions} industryName="Liability Insurance" />

      {/* What you receive & CTA */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Defending Rights. Protecting Reputation.
                </h3>
                <p className="mt-2 text-gray-700">
                  Partner with SIIB's liability specialists for comprehensive protection, expert
                  legal support, and professional claims management.
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
              value="Liability Insurance Specialists"
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

export default LiabilityInsurancePage;
