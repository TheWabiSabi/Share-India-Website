'use client';
import React from 'react';
import {
  FaChevronRight,
  FaShieldAlt,
  FaStore,
  FaGem,
  FaShoppingBag,
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
  FaCreditCard,
  FaEye,
} from 'react-icons/fa';
import ClaimStories from '../../../components/industries/ClaimStories';
import RelevantArticles from '../../../components/industries/RelevantArticles';
import KnowledgeQuestionnaire from '../../../components/industries/KnowledgeQuestionnaire';

const ShopkeepersJewellersInsurancePage = () => {
  // Sample data for components
  const claimStories = [
    {
      id: '1',
      title: 'Jewelry Store Robbery - High-Value Theft',
      description:
        'Armed robbery at jewelry store resulted in theft of gold ornaments and precious stones worth several crores.',
      claimAmount: '₹2.5 Crores',
      settlementTime: '8 months',
      riskType: 'Burglary & Robbery',
      outcome: 'settled' as const,
      lessons: [
        'Jewellers block insurance provides comprehensive theft protection',
        'Advanced security systems and protocols reduce robbery risks',
        'Proper valuation and documentation essential for claims',
      ],
    },
    {
      id: '2',
      title: 'Retail Store Fire - Inventory Loss',
      description:
        'Electrical fire in retail clothing store destroyed entire inventory and damaged shop fixtures.',
      claimAmount: '₹45 Lakhs',
      settlementTime: '5 months',
      riskType: 'Fire & Stock Damage',
      outcome: 'settled' as const,
      lessons: [
        'Shopkeepers package covers comprehensive stock protection',
        'Fire safety measures and electrical maintenance prevent incidents',
        'Business interruption coverage helps during reconstruction',
      ],
    },
    {
      id: '3',
      title: 'Customer Injury - Public Liability',
      description:
        'Customer slipped on wet floor in supermarket, resulting in serious injury and compensation claim.',
      claimAmount: '₹8 Lakhs',
      settlementTime: '6 months',
      riskType: 'Public Liability',
      outcome: 'settled' as const,
      lessons: [
        'Public liability coverage protects against customer injury claims',
        'Proper floor maintenance and warning signs prevent accidents',
        'Quick medical assistance and documentation help claims',
      ],
    },
    {
      id: '4',
      title: 'Money in Transit Theft',
      description:
        'Cash collection from multiple retail outlets stolen during transit to bank, affecting daily operations.',
      claimAmount: '₹12 Lakhs',
      settlementTime: '3 months',
      riskType: 'Money Insurance',
      outcome: 'settled' as const,
      lessons: [
        'Money insurance covers cash in transit and safe risks',
        'Secure transportation and timing reduce theft exposure',
        'Digital payment systems minimize cash handling risks',
      ],
    },
  ];

  const articles = [
    {
      id: '1',
      title: 'Retail Insurance Trends 2024: E-commerce Integration and Omnichannel Risks',
      excerpt:
        'How modern retail operations are changing insurance needs and coverage requirements.',
      author: 'Retail Insurance Team',
      publishDate: 'May 5, 2024',
      readTime: '8 min read',
      category: 'Retail Insurance',
      url: '#',
      featured: true,
    },
    {
      id: '2',
      title: 'Jewellery Insurance: Protecting High-Value Inventory and Operations',
      excerpt: 'Specialized insurance solutions for jewelry retailers and precious metals dealers.',
      author: 'Jewellery Insurance Specialists',
      publishDate: 'Apr 28, 2024',
      readTime: '9 min read',
      category: 'Jewellery Insurance',
      url: '#',
    },
    {
      id: '3',
      title: 'Small Retail Business Security: Insurance and Risk Management',
      excerpt:
        'Best practices for protecting small retail businesses from theft, fire, and liability risks.',
      author: 'Retail Risk Team',
      publishDate: 'Apr 22, 2024',
      readTime: '7 min read',
      category: 'Retail Security',
      url: '#',
    },
  ];

  const quizQuestions = [
    {
      id: '1',
      question:
        'What is the primary difference between shopkeepers package and jewellers block insurance?',
      options: [
        'No difference, they are the same',
        'Jewellers block provides specialized coverage for high-value precious items',
        'Shopkeepers package is more expensive',
        'Jewellers block only covers theft',
      ],
      correctAnswer: 1,
      explanation:
        'Jewellers block insurance provides specialized coverage for precious metals, gems, and jewelry with higher security requirements and valuation methods.',
      difficulty: 'medium' as const,
    },
    {
      id: '2',
      question: 'Which coverage is typically included in a shopkeepers package policy?',
      options: [
        'Only fire insurance',
        'Fire, burglary, stock, money, and public liability coverage',
        'Only theft insurance',
        'Only public liability',
      ],
      correctAnswer: 1,
      explanation:
        'Shopkeepers package typically includes comprehensive coverage for fire, burglary, stock, money in transit/safe, and public liability.',
      difficulty: 'easy' as const,
    },
    {
      id: '3',
      question: 'What does "floater coverage" mean in jewellers block insurance?',
      options: [
        'Coverage only for water damage',
        'Coverage for jewelry items regardless of location',
        'Coverage only for floating displays',
        'Coverage for price fluctuations',
      ],
      correctAnswer: 1,
      explanation:
        'Floater coverage protects jewelry items regardless of their location - in the store, safe, transit, or temporary locations like exhibitions.',
      difficulty: 'hard' as const,
    },
    {
      id: '4',
      question: 'Which security measure most affects retail insurance premiums?',
      options: [
        'Store color scheme',
        'Burglar alarms, CCTV, and security systems',
        'Store size only',
        'Number of employees only',
      ],
      correctAnswer: 1,
      explanation:
        'Security systems like burglar alarms, CCTV, safes, and security guards significantly impact retail insurance premiums by reducing risk.',
      difficulty: 'medium' as const,
    },
    {
      id: '5',
      question: 'What is the typical basis for valuing jewelry in insurance claims?',
      options: [
        'Purchase price only',
        'Current market value or replacement cost',
        'Sentimental value',
        'Weight of metal only',
      ],
      correctAnswer: 1,
      explanation:
        'Jewelry is typically valued based on current market value or replacement cost, considering precious metal prices and craftsmanship.',
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
              Shopkeepers Package & Jewellers Block Insurance
            </h1>
            <p className="mt-6 text-lg text-gray-700 md:text-xl">
              Specialized protection for retail businesses and jewelry stores—covering inventory,
              premises, and high-value assets with comprehensive security-focused coverage.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-lg bg-blue-100 px-6 py-3 font-semibold text-blue-800 hover:bg-blue-200">
                <FaShieldAlt className="mr-2" />
                Get Retail Quote
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50">
                <FaFileContract className="mr-2" />
                Store Assessment
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50">
                <FaPhoneAlt className="mr-2" />
                Speak to Expert
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Specialized coverage for retail stores, jewelry shops, and high-value inventory
              businesses.
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Explanation */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">
            Understanding Shopkeepers & Jewellers Insurance
          </h2>
          <p className="mt-3 text-gray-700">
            Specialized insurance solutions designed for retail businesses and jewelry stores,
            providing comprehensive protection for high-value inventory and unique retail risks.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Coverage Overview</h3>
              <p className="mt-3 text-gray-700">
                These specialized policies provide comprehensive protection for retail operations,
                with shopkeepers package covering general retail risks and jewellers block offering
                enhanced protection for precious metals, gems, and jewelry. Coverage includes fire,
                theft, burglary, stock protection, money insurance, and public liability, with
                specialized valuation and security requirements for high-value items.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Comprehensive coverage for retail premises and inventory
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Specialized protection for high-value and precious items
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Money insurance and public liability coverage
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Key Benefits</h3>
              <div className="mt-3 space-y-3">
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaStore className="text-blue-500" />
                  <div>
                    <div className="font-medium">Retail-Specific Coverage</div>
                    <div className="text-sm text-gray-600">
                      Tailored protection for retail operations
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaGem className="text-blue-500" />
                  <div>
                    <div className="font-medium">High-Value Protection</div>
                    <div className="text-sm text-gray-600">
                      Specialized coverage for precious items
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaEye className="text-blue-500" />
                  <div>
                    <div className="font-medium">Security Focus</div>
                    <div className="text-sm text-gray-600">
                      Enhanced security requirements and benefits
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
            Specialized insurance solutions for retail businesses across various sectors and value
            categories.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Tile icon={<FaStore />} title="Retail Stores">
              Clothing, electronics, furniture, and general merchandise retailers.
            </Tile>
            <Tile icon={<FaGem />} title="Jewelry Stores">
              Gold, diamond, and precious stone dealers with high-value inventory.
            </Tile>
            <Tile icon={<FaShoppingBag />} title="Supermarkets & Groceries">
              Food retailers, supermarkets, and grocery chain stores.
            </Tile>
            <Tile icon={<FaCreditCard />} title="Specialty Retailers">
              Luxury goods, antiques, art dealers, and high-value specialty stores.
            </Tile>
          </div>
        </div>
      </section>

      {/* Sample Risks */}
      <section className="w-full border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Common Retail Insurance Risks</h2>
          <p className="mt-3 text-gray-700">
            Understanding key retail risks helps in selecting appropriate insurance coverage for
            your business operations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <RiskCard
              icon={<FaLock />}
              title="Theft & Burglary"
              description="Shoplifting, burglary, and armed robbery affecting inventory and cash."
              severity="High"
              frequency="High"
            />
            <RiskCard
              icon={<FaFire />}
              title="Fire & Stock Damage"
              description="Fire damage to premises and inventory causing business disruption."
              severity="High"
              frequency="Low"
            />
            <RiskCard
              icon={<FaUserShield />}
              title="Customer Liability"
              description="Customer injuries on premises leading to compensation claims."
              severity="Medium"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaCreditCard />}
              title="Money & Cash Risks"
              description="Theft of cash from premises, safe, or during transit to bank."
              severity="Medium"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaWater />}
              title="Stock Damage"
              description="Water damage, spoilage, and contamination affecting inventory."
              severity="Medium"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaExclamationTriangle />}
              title="Business Interruption"
              description="Loss of income due to premises damage or operational disruptions."
              severity="Medium"
              frequency="Low"
            />
          </div>
        </div>
      </section>

      {/* Claim Stories Component */}
      <ClaimStories stories={claimStories} industryName="Shopkeepers & Jewellers Insurance" />

      {/* Core coverage suite */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Core Coverage Options</h2>
          <p className="mt-3 text-gray-700">
            Comprehensive retail protection designed for different types of retail operations and
            inventory values.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaStore className="text-2xl text-blue-500" />}
              title="Shopkeepers Package Insurance"
              body="Comprehensive coverage for general retail businesses and stores."
              bullets={[
                'Fire and allied perils for premises and stock',
                'Burglary and theft protection',
                'Public liability and customer injury coverage',
              ]}
            />
            <Card
              icon={<FaGem className="text-2xl text-blue-500" />}
              title="Jewellers Block Insurance"
              body="Specialized protection for jewelry stores and precious items dealers."
              bullets={[
                'All-risk coverage for precious metals and gems',
                'Floater coverage for items in transit',
                'Enhanced security requirements and benefits',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaCreditCard className="text-2xl text-blue-500" />}
              title="Money Insurance"
              body="Protection for cash and negotiable instruments in business operations."
              bullets={[
                'Money in safe and premises coverage',
                'Cash in transit protection',
                'Counterfeit currency and forgery coverage',
              ]}
            />
            <Card
              icon={<FaShoppingBag className="text-2xl text-blue-500" />}
              title="Stock & Inventory Protection"
              body="Comprehensive coverage for retail inventory and merchandise."
              bullets={[
                'Stock damage from fire, water, and theft',
                'Spoilage and contamination coverage',
                'Seasonal stock and display protection',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Insurance Plans/Products */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Retail Insurance Plans</h2>
          <p className="mt-3 text-gray-700">
            Flexible retail insurance solutions designed for different business sizes and inventory
            values.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <InsurancePlan
              name="Basic Retail Plan"
              description="Essential coverage for small retail stores and shops"
              price="₹10K - ₹50K"
              features={[
                'Fire & Allied Perils',
                'Burglary & Theft Protection',
                'Basic Stock Coverage',
                'Public Liability (₹5L)',
                'Money Insurance (₹50K)',
              ]}
              recommended={false}
            />
            <InsurancePlan
              name="Comprehensive Retail Plan"
              description="Complete coverage for established retail businesses"
              price="₹50K - ₹5L"
              features={[
                'All Basic Plan Benefits',
                'Enhanced Stock Coverage',
                'Business Interruption',
                'Increased Liability Limits',
                'Electronic Equipment Insurance',
                'Plate Glass Insurance',
              ]}
              recommended={true}
            />
            <InsurancePlan
              name="Jewellers Block Plan"
              description="Specialized protection for jewelry stores and high-value retailers"
              price="₹2L+"
              features={[
                'All-Risk Jewellery Coverage',
                'Floater Coverage Worldwide',
                'Enhanced Security Benefits',
                'High-Value Money Insurance',
                'Professional Valuation Services',
                'Dedicated Jewellery Specialist',
              ]}
              recommended={false}
            />
          </div>
        </div>
      </section>

      {/* Relevant Articles Component */}
      <RelevantArticles articles={articles} industryName="Shopkeepers & Jewellers Insurance" />

      {/* Knowledge Questionnaire Component */}
      <KnowledgeQuestionnaire
        questions={quizQuestions}
        industryName="Shopkeepers & Jewellers Insurance"
      />

      {/* What you receive & CTA */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Securing Retail Success. Protecting Precious Assets.
                </h3>
                <p className="mt-2 text-gray-700">
                  Partner with SIIB's retail insurance specialists for comprehensive coverage,
                  security expertise, and dedicated support for your business.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  <FaShieldAlt className="mr-2" />
                  Get Quote
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100">
                  <FaFileContract className="mr-2" />
                  Store Assessment
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
              value="Retail Insurance Specialists"
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

export default ShopkeepersJewellersInsurancePage;
