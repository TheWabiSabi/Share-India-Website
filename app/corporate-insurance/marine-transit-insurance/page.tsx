'use client';
import React from 'react';
import {
  FaChevronRight,
  FaShieldAlt,
  FaShip,
  FaPlane,
  FaTruck,
  FaFire,
  FaWater,
  FaWind,
  FaWarehouse,
  FaTruckMoving,
  FaFileContract,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
  FaTools,
  FaExclamationTriangle,
  FaCheckCircle,
  FaRupeeSign,
  FaCertificate,
  FaBoxes,
  FaGlobe,
} from 'react-icons/fa';
import ClaimStories from '../../../components/industries/ClaimStories';
import RelevantArticles from '../../../components/industries/RelevantArticles';
import KnowledgeQuestionnaire from '../../../components/industries/KnowledgeQuestionnaire';
import MainCaraousel from '@/components/main-caraousel';

const MarineTransitInsurancePage = () => {
  // Sample data for components
  const claimStories = [
    {
      id: '1',
      title: 'Container Ship Cargo Damage',
      description:
        'Rough seas caused container damage during international shipment, affecting electronics worth crores.',
      claimAmount: '₹45 Crores',
      settlementTime: '8 months',
      riskType: 'Sea Transit Damage',
      outcome: 'settled' as const,
      lessons: [
        'Marine cargo insurance essential for international trade',
        'Proper packaging reduces damage during rough weather',
        'Documentation and surveys crucial for claim settlement',
      ],
    },
    {
      id: '2',
      title: 'Air Cargo Theft at Airport',
      description:
        'High-value pharmaceutical shipment stolen from airport cargo terminal during transit.',
      claimAmount: '₹18 Crores',
      settlementTime: '6 months',
      riskType: 'Theft & Pilferage',
      outcome: 'settled' as const,
      lessons: [
        'Air cargo insurance covers theft and pilferage risks',
        'Secure packaging and tracking reduce theft exposure',
        'Airport security measures are critical for high-value goods',
      ],
    },
    {
      id: '3',
      title: 'Road Transit Accident',
      description:
        'Truck carrying textile goods overturned due to poor road conditions, causing total loss of cargo.',
      claimAmount: '₹8 Crores',
      settlementTime: '4 months',
      riskType: 'Road Transit Accident',
      outcome: 'settled' as const,
      lessons: [
        'Road transit insurance covers accident-related losses',
        'Driver training and vehicle maintenance prevent accidents',
        'Route planning and weather monitoring reduce risks',
      ],
    },
    {
      id: '4',
      title: 'Port Fire Damage',
      description:
        'Fire at port warehouse damaged multiple import consignments awaiting customs clearance.',
      claimAmount: '₹25 Crores',
      settlementTime: '10 months',
      riskType: 'Port & Terminal Risk',
      outcome: 'settled' as const,
      lessons: [
        'Port risks coverage protects goods during storage',
        'Fire safety measures at ports are crucial',
        'Extended coverage needed for customs delays',
      ],
    },
  ];

  const articles = [
    {
      id: '1',
      title: 'Marine Insurance Trends 2024: Digital Documentation and Blockchain',
      excerpt:
        'How digital transformation is revolutionizing marine insurance documentation and claims processing.',
      author: 'Marine Insurance Team',
      publishDate: 'Apr 20, 2024',
      readTime: '9 min read',
      category: 'Marine Insurance',
      url: '#',
      featured: true,
    },
    {
      id: '2',
      title: 'Cargo Security: Protecting High-Value Shipments in Transit',
      excerpt:
        'Best practices for securing valuable cargo during international and domestic transportation.',
      author: 'Cargo Security Specialists',
      publishDate: 'Apr 14, 2024',
      readTime: '7 min read',
      category: 'Cargo Security',
      url: '#',
    },
    {
      id: '3',
      title: 'Incoterms 2020: Insurance Implications for International Trade',
      excerpt:
        'Understanding insurance responsibilities under different Incoterms for importers and exporters.',
      author: 'Trade Finance Team',
      publishDate: 'Apr 7, 2024',
      readTime: '8 min read',
      category: 'International Trade',
      url: '#',
    },
  ];

  const quizQuestions = [
    {
      id: '1',
      question: 'What does marine cargo insurance primarily cover?',
      options: [
        'Only sea transportation',
        'Goods in transit by sea, air, and land',
        'Only the ship or aircraft',
        'Only port operations',
      ],
      correctAnswer: 1,
      explanation:
        'Marine cargo insurance covers goods in transit by various modes including sea, air, road, and rail transportation.',
      difficulty: 'easy' as const,
    },
    {
      id: '2',
      question: 'Which Incoterm places maximum insurance responsibility on the seller?',
      options: [
        'FOB (Free on Board)',
        'CIF (Cost, Insurance, and Freight)',
        'EXW (Ex Works)',
        'FCA (Free Carrier)',
      ],
      correctAnswer: 1,
      explanation:
        'Under CIF terms, the seller must arrange and pay for insurance coverage during the main carriage to the destination port.',
      difficulty: 'medium' as const,
    },
    {
      id: '3',
      question: 'What are "General Average" contributions in marine insurance?',
      options: [
        'Average claim amounts',
        'Shared losses when cargo is sacrificed to save the ship',
        'Standard insurance premiums',
        'Port handling charges',
      ],
      correctAnswer: 1,
      explanation:
        'General Average is a maritime law principle where all parties share losses when cargo is deliberately sacrificed to save the ship and remaining cargo.',
      difficulty: 'hard' as const,
    },
    {
      id: '4',
      question: 'Which document is essential for marine cargo insurance claims?',
      options: [
        'Invoice only',
        'Bill of Lading and Commercial Invoice',
        'Passport only',
        'Bank statement only',
      ],
      correctAnswer: 1,
      explanation:
        'Bill of Lading (proof of shipment) and Commercial Invoice (proof of value) are essential documents for marine cargo insurance claims.',
      difficulty: 'medium' as const,
    },
    {
      id: '5',
      question: 'What is the typical coverage period for marine cargo insurance?',
      options: [
        'Only during sea voyage',
        'Warehouse to warehouse',
        'Only at ports',
        'Only during loading/unloading',
      ],
      correctAnswer: 1,
      explanation:
        'Marine cargo insurance typically provides warehouse to warehouse coverage, protecting goods from origin to final destination.',
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
              Marine Transit Insurance Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-700 md:text-xl">
              Comprehensive protection for goods in transit by sea, air, road, and rail—safeguarding
              your cargo from origin to destination worldwide.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-lg bg-blue-100 px-6 py-3 font-semibold text-blue-800 hover:bg-blue-200">
                <FaShieldAlt className="mr-2" />
                Get Coverage Quote
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50">
                <FaFileContract className="mr-2" />
                Cargo Assessment
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50">
                <FaPhoneAlt className="mr-2" />
                Speak to Expert
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Specialized coverage for importers, exporters, and logistics companies with global
              reach.
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Explanation */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Understanding Marine Transit Insurance</h2>
          <p className="mt-3 text-gray-700">
            Marine Transit Insurance provides comprehensive protection for goods in transit,
            covering various modes of transportation and associated risks during the journey.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Coverage Overview</h3>
              <p className="mt-3 text-gray-700">
                This insurance protects cargo against physical loss or damage during transportation
                by sea, air, road, or rail. It covers risks such as accidents, theft, fire, natural
                disasters, and handling damage. Coverage typically extends from warehouse to
                warehouse, providing comprehensive protection throughout the supply chain journey.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Multi-modal transportation coverage (sea, air, road, rail)
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Protection against theft, damage, and natural disasters
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Warehouse to warehouse coverage
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Key Benefits</h3>
              <div className="mt-3 space-y-3">
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaGlobe className="text-blue-500" />
                  <div>
                    <div className="font-medium">Global Coverage</div>
                    <div className="text-sm text-gray-600">
                      Worldwide protection for international trade
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaBoxes className="text-blue-500" />
                  <div>
                    <div className="font-medium">Cargo Protection</div>
                    <div className="text-sm text-gray-600">
                      Comprehensive coverage for all cargo types
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaRupeeSign className="text-blue-500" />
                  <div>
                    <div className="font-medium">Financial Security</div>
                    <div className="text-sm text-gray-600">
                      Protection against transit-related losses
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
            Comprehensive marine transit insurance solutions for businesses engaged in domestic and
            international trade.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Tile icon={<FaShip />} title="Importers & Exporters">
              Businesses engaged in international trade requiring cargo protection during transit.
            </Tile>
            <Tile icon={<FaTruckMoving />} title="Logistics Companies">
              Freight forwarders, shipping agents, and logistics service providers.
            </Tile>
            <Tile icon={<FaWarehouse />} title="Manufacturers">
              Companies shipping raw materials and finished goods domestically and internationally.
            </Tile>
            <Tile icon={<FaBoxes />} title="E-commerce Businesses">
              Online retailers and marketplaces shipping products to customers worldwide.
            </Tile>
          </div>
        </div>
      </section>

      {/* Sample Risks */}
      <section className="w-full border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Common Marine Transit Risks</h2>
          <p className="mt-3 text-gray-700">
            Understanding key transit risks helps in selecting appropriate insurance coverage for
            your cargo shipments.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <RiskCard
              icon={<FaWater />}
              title="Sea Perils"
              description="Rough seas, collision, grounding, and general average contributions during sea transit."
              severity="High"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaExclamationTriangle />}
              title="Theft & Pilferage"
              description="Cargo theft during transit, at ports, or during temporary storage."
              severity="Medium"
              frequency="High"
            />
            <RiskCard
              icon={<FaFire />}
              title="Fire & Explosion"
              description="Fire damage to cargo during transportation or storage at terminals."
              severity="High"
              frequency="Low"
            />
            <RiskCard
              icon={<FaTruck />}
              title="Road Transit Risks"
              description="Vehicle accidents, overturning, and collision during road transportation."
              severity="Medium"
              frequency="High"
            />
            <RiskCard
              icon={<FaWind />}
              title="Natural Disasters"
              description="Damage from cyclones, floods, earthquakes affecting cargo in transit."
              severity="High"
              frequency="Low"
            />
            <RiskCard
              icon={<FaTools />}
              title="Handling Damage"
              description="Damage during loading, unloading, and handling at ports and terminals."
              severity="Medium"
              frequency="High"
            />
          </div>
        </div>
      </section>

      {/* Claim Stories Component */}
      <ClaimStories stories={claimStories} industryName="Marine Transit Insurance" />

      {/* Core coverage suite */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Core Coverage Options</h2>
          <p className="mt-3 text-gray-700">
            Comprehensive transit protection designed for different modes of transportation and
            cargo types.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaShip className="text-2xl text-blue-500" />}
              title="Marine Cargo Insurance"
              body="Comprehensive coverage for goods transported by sea and inland waterways."
              bullets={[
                'All risks coverage for sea transit',
                'General average and salvage charges',
                'Port risks and terminal coverage',
              ]}
            />
            <Card
              icon={<FaPlane className="text-2xl text-blue-500" />}
              title="Air Cargo Insurance"
              body="Specialized protection for goods transported by air freight."
              bullets={[
                'All risks coverage for air transit',
                'Airport terminal risks',
                'Delay and deviation coverage',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaTruck className="text-2xl text-blue-500" />}
              title="Road Transit Insurance"
              body="Protection for goods transported by road and rail within India."
              bullets={[
                'Accident and collision coverage',
                'Theft and pilferage protection',
                'Loading and unloading risks',
              ]}
            />
            <Card
              icon={<FaBoxes className="text-2xl text-blue-500" />}
              title="Multi-Modal Transit"
              body="Comprehensive coverage for goods using multiple transportation modes."
              bullets={[
                'Seamless warehouse to warehouse coverage',
                'All transportation modes included',
                'Transhipment and storage risks',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Insurance Plans/Products */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Marine Transit Insurance Plans</h2>
          <p className="mt-3 text-gray-700">
            Flexible transit insurance solutions designed for different cargo values and
            transportation needs.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <InsurancePlan
              name="Basic Transit Plan"
              description="Essential coverage for domestic and regional cargo shipments"
              price="₹5K - ₹25K"
              features={[
                'Road Transit Coverage',
                'Basic Theft Protection',
                'Fire & Accident Coverage',
                'Standard Documentation',
                'Domestic Coverage Only',
              ]}
              recommended={false}
            />
            <InsurancePlan
              name="International Trade Plan"
              description="Comprehensive coverage for importers and exporters"
              price="₹25K - ₹2L"
              features={[
                'All Basic Plan Benefits',
                'Marine Cargo Coverage',
                'Air Freight Protection',
                'Multi-Modal Transit',
                'Global Coverage',
                'Port & Terminal Risks',
              ]}
              recommended={true}
            />
            <InsurancePlan
              name="Enterprise Logistics Plan"
              description="Advanced protection for large-scale logistics operations"
              price="₹2L+"
              features={[
                'All International Plan Benefits',
                'High-Value Cargo Coverage',
                'Specialized Cargo Protection',
                'Annual Open Policies',
                'Dedicated Claims Support',
                'Risk Management Services',
              ]}
              recommended={false}
            />
          </div>
        </div>
      </section>

      {/* Relevant Articles Component */}
      {/* <RelevantArticles articles={articles} industryName="Marine Transit Insurance" /> */}
      <section className="w-full border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Industry Insights & Articles</h2>
          <p className="mt-3 text-gray-700">
            Stay updated with the latest trends, regulations, and best practices in Plastic Industry
            insurance.
          </p>
          <div className="w-full pt-6">
            <MainCaraousel color="white" layout={3} topic="marine_transit_insurance" />
          </div>
        </div>
      </section>

      {/* Knowledge Questionnaire Component */}
      <KnowledgeQuestionnaire questions={quizQuestions} industryName="Marine Transit Insurance" />

      {/* What you receive & CTA */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Securing Cargo. Enabling Trade.
                </h3>
                <p className="mt-2 text-gray-700">
                  Partner with SIIBs marine specialists for comprehensive cargo protection, global
                  coverage, and expert claims management.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  <FaShieldAlt className="mr-2" />
                  Get Quote
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100">
                  <FaFileContract className="mr-2" />
                  Cargo Assessment
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
              value="Marine Insurance Specialists"
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

export default MarineTransitInsurancePage;
