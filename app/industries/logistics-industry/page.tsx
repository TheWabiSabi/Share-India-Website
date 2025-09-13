'use client';
import React from 'react';
import {
  FaChevronRight,
  FaShieldAlt,
  FaTruck,
  FaShip,
  FaFire,
  FaWater,
  FaWarehouse,
  FaUserShield,
  FaFileContract,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
  FaTools,
  FaLock,
  FaExclamationTriangle,
  FaCheckCircle,
  FaRupeeSign,
  FaCertificate,
  FaBoxes,
  FaRoute,
} from 'react-icons/fa';
import ClaimStories from '../_components/ClaimStories';
import KnowledgeQuestionnaire from '../_components/KnowledgeQuestionnaire';
import MainCaraousel from '@/components/main-caraousel';

const LogisticsInsurancePage = () => {
  // Sample data for components
  const claimStories = [
    {
      id: '1',
      title: 'Highway Truck Accident with Cargo Loss',
      description:
        'Multi-vehicle accident on national highway resulted in truck rollover, complete cargo loss, and third-party liability claims.',
      claimAmount: '₹15 Crores',
      settlementTime: '8 months',
      riskType: 'Motor & Cargo',
      outcome: 'settled' as const,
      lessons: [
        'Comprehensive motor insurance with adequate coverage is essential',
        'Cargo insurance protects against total loss scenarios',
        'Driver training and vehicle maintenance reduce accident risks',
      ],
    },
    {
      id: '2',
      title: 'Warehouse Fire Destroys Electronics Shipment',
      description:
        'Electrical short circuit caused warehouse fire, destroying high-value electronics awaiting distribution.',
      claimAmount: '₹25 Crores',
      settlementTime: '6 months',
      riskType: 'Warehouse Fire',
      outcome: 'settled' as const,
      lessons: [
        'Warehouse legal liability insurance covers stored goods',
        'Fire detection and suppression systems are critical',
        'Proper segregation of high-value items reduces exposure',
      ],
    },
    {
      id: '3',
      title: 'Port Container Theft',
      description:
        'Organized theft of multiple containers at port facility resulted in significant cargo losses and security concerns.',
      claimAmount: '₹8 Crores',
      settlementTime: '10 months',
      riskType: 'Theft & Pilferage',
      outcome: 'settled' as const,
      lessons: [
        'Port and terminal security measures need enhancement',
        'Cargo insurance covers theft and pilferage risks',
        'GPS tracking and monitoring systems help prevent theft',
      ],
    },
    {
      id: '4',
      title: 'Cold Chain Failure Damages Pharmaceuticals',
      description:
        'Refrigeration system failure during transport caused temperature excursion, damaging pharmaceutical shipment.',
      claimAmount: '₹12 Crores',
      settlementTime: '5 months',
      riskType: 'Cold Chain Failure',
      outcome: 'settled' as const,
      lessons: [
        'Temperature-controlled logistics require specialized coverage',
        'Backup refrigeration systems prevent total loss',
        'Continuous monitoring alerts prevent damage escalation',
      ],
    },
  ];

  const quizQuestions = [
    {
      id: '1',
      question: 'What is the most common cause of cargo damage in logistics operations?',
      options: [
        'Theft and pilferage',
        'Handling and transportation damage',
        'Natural disasters',
        'Fire incidents',
      ],
      correctAnswer: 1,
      explanation:
        'Handling and transportation damage accounts for the majority of cargo insurance claims due to rough handling, vibration, and impact during transit.',
      difficulty: 'easy' as const,
    },
    {
      id: '2',
      question: 'Which insurance coverage is mandatory for commercial vehicle operators in India?',
      options: [
        'Comprehensive motor insurance',
        'Third-party liability insurance',
        'Cargo insurance',
        'Driver personal accident insurance',
      ],
      correctAnswer: 1,
      explanation:
        'Third-party liability insurance is mandatory under the Motor Vehicles Act for all commercial vehicles operating in India.',
      difficulty: 'easy' as const,
    },
    {
      id: '3',
      question: 'What does CIF stand for in international trade terms?',
      options: [
        'Cost, Insurance, and Freight',
        'Cargo Insurance and Forwarding',
        'Commercial Invoice and Finance',
        'Container Import Fee',
      ],
      correctAnswer: 0,
      explanation:
        'CIF (Cost, Insurance, and Freight) is an Incoterm where the seller pays for cost, insurance, and freight to deliver goods to the destination port.',
      difficulty: 'medium' as const,
    },
    {
      id: '4',
      question:
        'Which type of warehouse legal liability coverage is most important for 3PL providers?',
      options: [
        'Fire and allied perils only',
        'Comprehensive warehouse legal liability',
        'Public liability only',
        'Employee liability only',
      ],
      correctAnswer: 1,
      explanation:
        "Comprehensive warehouse legal liability covers the 3PL provider's legal liability for damage to customers' goods while in their custody.",
      difficulty: 'hard' as const,
    },
    {
      id: '5',
      question: 'What is the typical temperature range for pharmaceutical cold chain logistics?',
      options: ['0°C to 5°C', '2°C to 8°C', '5°C to 15°C', '-20°C to 0°C'],
      correctAnswer: 1,
      explanation:
        '2°C to 8°C is the standard temperature range for most pharmaceutical products requiring cold chain logistics.',
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
              Logistics Industry Insurance Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-700 md:text-xl">
              Comprehensive coverage for transportation, warehousing, and supply chain
              operations—protecting cargo, vehicles, and logistics infrastructure.
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
              Specialized coverage for road, rail, air, and sea transportation with warehouse legal
              liability protection.
            </div>
          </div>
        </div>
      </section>

      {/* Industry Explanation */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">
            Understanding Logistics Industry Insurance
          </h2>
          <p className="mt-3 text-gray-700">
            The logistics industry is the backbone of global trade, involving complex networks of
            transportation, warehousing, and distribution. This sector faces diverse risks requiring
            comprehensive insurance solutions.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Industry Overview</h3>
              <p className="mt-3 text-gray-700">
                Logistics operations involve multiple modes of transportation, temporary storage,
                and handling of diverse cargo types. The industry faces risks from accidents, theft,
                natural disasters, and operational failures. With the growth of e-commerce and
                global trade, logistics insurance has become increasingly complex, requiring
                specialized coverage for different segments and cargo types.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Multi-modal transportation requiring integrated coverage
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  High-value cargo exposure across supply chains
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Third-party liability risks in transportation and warehousing
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Key Service Areas</h3>
              <div className="mt-3 space-y-3">
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaTruck className="text-blue-500" />
                  <div>
                    <div className="font-medium">Transportation Services</div>
                    <div className="text-sm text-gray-600">Road, rail, air, and sea freight</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaWarehouse className="text-blue-500" />
                  <div>
                    <div className="font-medium">Warehousing & Distribution</div>
                    <div className="text-sm text-gray-600">Storage, handling, and fulfillment</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaRoute className="text-blue-500" />
                  <div>
                    <div className="font-medium">Supply Chain Management</div>
                    <div className="text-sm text-gray-600">End-to-end logistics solutions</div>
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
            Tailored insurance solutions for every segment of the logistics ecosystem.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Tile icon={<FaTruck />} title="Transportation Companies">
              Trucking companies, freight forwarders, and multi-modal transport operators.
            </Tile>
            <Tile icon={<FaWarehouse />} title="Warehouse Operators">
              3PL providers, distribution centers, and cold storage facilities.
            </Tile>
            <Tile icon={<FaShip />} title="Shipping & Ports">
              Shipping lines, port operators, and container terminal services.
            </Tile>
            <Tile icon={<FaBoxes />} title="E-commerce Logistics">
              Last-mile delivery, fulfillment centers, and courier services.
            </Tile>
          </div>
        </div>
      </section>

      {/* Sample Risks */}
      <section className="w-full border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Common Risks in Logistics Industry</h2>
          <p className="mt-3 text-gray-700">
            Understanding key risks helps in selecting appropriate insurance coverage for your
            logistics operations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <RiskCard
              icon={<FaTruck />}
              title="Transportation Accidents"
              description="Vehicle accidents, cargo damage, and third-party liability during transportation."
              severity="High"
              frequency="High"
            />
            <RiskCard
              icon={<FaExclamationTriangle />}
              title="Cargo Theft & Pilferage"
              description="Theft of goods during transit, storage, or handling operations."
              severity="Medium"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaFire />}
              title="Warehouse Fires"
              description="Fire incidents in warehouses and distribution centers causing cargo damage."
              severity="High"
              frequency="Low"
            />
            <RiskCard
              icon={<FaWater />}
              title="Natural Disasters"
              description="Floods, cyclones, and earthquakes affecting transportation and storage facilities."
              severity="High"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaLock />}
              title="Cyber Security"
              description="Cyber attacks on logistics systems, GPS tracking, and supply chain networks."
              severity="Medium"
              frequency="Low"
            />
            <RiskCard
              icon={<FaTools />}
              title="Equipment Breakdown"
              description="Failure of handling equipment, refrigeration systems, and loading machinery."
              severity="Medium"
              frequency="Medium"
            />
          </div>
        </div>
      </section>

      {/* Claim Stories Component */}
      <ClaimStories stories={claimStories} industryName="Logistics Industry" />

      {/* Core coverage suite */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Core Coverage Suite</h2>
          <p className="mt-3 text-gray-700">
            Comprehensive protection designed specifically for logistics and transportation
            operations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaTruck className="text-2xl text-blue-500" />}
              title="Motor & Cargo Insurance"
              body="Comprehensive coverage for vehicles and cargo during transportation."
              bullets={[
                'Commercial vehicle insurance with adequate coverage',
                'Cargo insurance for goods in transit',
                'Third-party liability and passenger coverage',
              ]}
            />
            <Card
              icon={<FaWarehouse className="text-2xl text-blue-500" />}
              title="Warehouse Legal Liability"
              body="Protection for goods stored in warehouses and distribution centers."
              bullets={[
                'Bailee liability for customer goods',
                'Fire and allied perils coverage',
                'Handling and storage damage protection',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaUserShield className="text-2xl text-blue-500" />}
              title="Public & Employer Liability"
              body="Third-party liability coverage for logistics operations."
              bullets={[
                'Public liability for third-party injury and property damage',
                'Employer liability and workmen compensation',
                'Professional indemnity for logistics services',
              ]}
            />
            <Card
              icon={<FaShip className="text-2xl text-blue-500" />}
              title="Marine & International Transit"
              body="Coverage for international shipments and marine transportation."
              bullets={[
                'Marine cargo insurance for sea and air freight',
                'Import/export transit coverage',
                'Port and terminal operator liability',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Insurance Plans/Products */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Insurance Plans for Logistics Industry</h2>
          <p className="mt-3 text-gray-700">
            Comprehensive insurance solutions tailored for different segments of the logistics
            industry.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <InsurancePlan
              name="Logistics Starter Plan"
              description="Essential coverage for small transportation and logistics companies"
              price="₹2L - ₹8L"
              features={[
                'Commercial Vehicle Insurance',
                'Basic Cargo Coverage',
                'Public Liability Insurance',
                'Workmen Compensation',
                'Driver Personal Accident',
              ]}
              recommended={false}
            />
            <InsurancePlan
              name="Logistics Professional Plan"
              description="Comprehensive coverage for established logistics service providers"
              price="₹8L - ₹40L"
              features={[
                'All Starter Plan Benefits',
                'Warehouse Legal Liability',
                'Enhanced Cargo Coverage',
                'Marine Transit Insurance',
                'Equipment Breakdown',
                'Professional Indemnity',
              ]}
              recommended={true}
            />
            <InsurancePlan
              name="Logistics Enterprise Plan"
              description="Complete protection for large logistics and supply chain companies"
              price="₹40L+"
              features={[
                'All Professional Plan Benefits',
                'International Coverage',
                'Cyber Liability Protection',
                'Crisis Management Services',
                'Supply Chain Interruption',
                'Dedicated Account Management',
              ]}
              recommended={false}
            />
          </div>
        </div>
      </section>

      {/* Relevant Articles Component */}
      {/* <RelevantArticles articles={articles} industryName="Logistics Industry" /> */}
      <section className="w-full border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Industry Insights & Articles</h2>
          <p className="mt-3 text-gray-700">
            Stay updated with the latest trends, regulations, and best practices in Plastic Industry
            insurance.
          </p>
          <div className="w-full pt-6">
            <MainCaraousel color="white" layout={3} topic="logistics_industry" />
          </div>
        </div>
      </section>

      {/* Knowledge Questionnaire Component */}
      <KnowledgeQuestionnaire questions={quizQuestions} industryName="Logistics Industry" />

      {/* What you receive & CTA */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Moving Forward. Protecting Every Mile.
                </h3>
                <p className="mt-2 text-gray-700">
                  Partner with SIIB&#39;s logistics specialists for comprehensive coverage, cargo
                  protection, and expert claims management.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  <FaShieldAlt className="mr-2" />
                  Request Proposal
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100">
                  <FaFileContract className="mr-2" />
                  Upload Fleet Data
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
              value="Logistics Insurance Specialists"
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

export default LogisticsInsurancePage;
