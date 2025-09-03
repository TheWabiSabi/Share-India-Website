'use client';
import React from 'react';
import {
  FaChevronRight,
  FaShieldAlt,
  FaTruck,
  FaCar,
  FaBus,
  FaFire,
  FaWater,
  FaTruckMoving,
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
  FaRoute,
} from 'react-icons/fa';
import ClaimStories from '../../../components/industries/ClaimStories';
import RelevantArticles from '../../../components/industries/RelevantArticles';
import KnowledgeQuestionnaire from '../../../components/industries/KnowledgeQuestionnaire';

const MotorFleetInsurancePage = () => {
  // Sample data for components
  const claimStories = [
    {
      id: '1',
      title: 'Multi-Vehicle Highway Accident',
      description:
        'Chain collision involving 5 company vehicles on highway during monsoon, causing injuries and vehicle damage.',
      claimAmount: '₹35 Crores',
      settlementTime: '8 months',
      riskType: 'Multi-Vehicle Accident',
      outcome: 'settled' as const,
      lessons: [
        'Fleet insurance covers multiple vehicle accidents efficiently',
        'Driver training programs reduce accident frequency',
        'GPS tracking and monitoring improve fleet safety',
      ],
    },
    {
      id: '2',
      title: 'Commercial Vehicle Theft',
      description:
        'Organized theft of 10 delivery vehicles from company parking facility during night hours.',
      claimAmount: '₹15 Crores',
      settlementTime: '6 months',
      riskType: 'Vehicle Theft',
      outcome: 'settled' as const,
      lessons: [
        'Comprehensive coverage protects against theft losses',
        'Security measures and tracking devices deter theft',
        'Proper documentation speeds up claim settlement',
      ],
    },
    {
      id: '3',
      title: 'Third-Party Liability Claim',
      description:
        'Company truck caused accident resulting in multiple injuries and property damage to third parties.',
      claimAmount: '₹8 Crores',
      settlementTime: '12 months',
      riskType: 'Third-Party Liability',
      outcome: 'settled' as const,
      lessons: [
        'Adequate third-party coverage is mandatory and crucial',
        'Driver verification and training prevent liability issues',
        'Quick response and proper documentation help claims',
      ],
    },
    {
      id: '4',
      title: 'Natural Disaster Fleet Damage',
      description:
        'Cyclone damaged 25 vehicles parked at company depot, causing extensive repair and replacement needs.',
      claimAmount: '₹22 Crores',
      settlementTime: '10 months',
      riskType: 'Natural Disaster',
      outcome: 'settled' as const,
      lessons: [
        'Natural catastrophe coverage essential for fleet protection',
        'Proper parking facilities reduce weather damage',
        'Fleet management systems help track and protect vehicles',
      ],
    },
  ];

  const articles = [
    {
      id: '1',
      title: 'Fleet Insurance Trends 2024: Telematics and Usage-Based Pricing',
      excerpt:
        'How telematics and IoT are revolutionizing fleet insurance pricing and risk management.',
      author: 'Fleet Insurance Team',
      publishDate: 'Apr 22, 2024',
      readTime: '8 min read',
      category: 'Fleet Management',
      url: '#',
      featured: true,
    },
    {
      id: '2',
      title: 'Electric Vehicle Fleet Insurance: New Considerations and Coverage',
      excerpt:
        'Understanding insurance implications and coverage needs for electric commercial vehicle fleets.',
      author: 'EV Insurance Specialists',
      publishDate: 'Apr 16, 2024',
      readTime: '7 min read',
      category: 'Electric Vehicles',
      url: '#',
    },
    {
      id: '3',
      title: 'Fleet Safety Management: Reducing Accidents and Insurance Costs',
      excerpt:
        'Best practices for fleet safety management to minimize accidents and optimize insurance premiums.',
      author: 'Fleet Safety Team',
      publishDate: 'Apr 10, 2024',
      readTime: '9 min read',
      category: 'Fleet Safety',
      url: '#',
    },
  ];

  const quizQuestions = [
    {
      id: '1',
      question: 'What is the minimum number of vehicles typically required for fleet insurance?',
      options: ['2 vehicles', '5 vehicles', '10 vehicles', '20 vehicles'],
      correctAnswer: 1,
      explanation:
        'Most insurers offer fleet insurance for businesses with 5 or more vehicles, though some may consider smaller fleets.',
      difficulty: 'easy' as const,
    },
    {
      id: '2',
      question: 'Which factor most significantly affects fleet insurance premiums?',
      options: [
        'Vehicle color',
        'Driver experience and safety record',
        'Vehicle brand only',
        'Parking location only',
      ],
      correctAnswer: 1,
      explanation:
        'Driver experience, safety record, and claims history are the most significant factors affecting fleet insurance premiums.',
      difficulty: 'medium' as const,
    },
    {
      id: '3',
      question: 'What does "Blanket Coverage" mean in fleet insurance?',
      options: [
        'Coverage only during winter',
        'Single policy covering all vehicles in the fleet',
        'Coverage only for accidents',
        'Coverage only for new vehicles',
      ],
      correctAnswer: 1,
      explanation:
        'Blanket Coverage provides a single policy that covers all vehicles in the fleet under one comprehensive insurance contract.',
      difficulty: 'hard' as const,
    },
    {
      id: '4',
      question: 'Which technology is increasingly used for fleet insurance risk assessment?',
      options: [
        'Radio systems',
        'Telematics and GPS tracking',
        'Manual logbooks only',
        'Phone calls only',
      ],
      correctAnswer: 1,
      explanation:
        'Telematics and GPS tracking provide real-time data on driver behavior, vehicle usage, and risk factors for insurance assessment.',
      difficulty: 'medium' as const,
    },
    {
      id: '5',
      question: 'What is typically the most cost-effective approach for fleet insurance?',
      options: [
        'Individual policies for each vehicle',
        'Comprehensive fleet policy with volume discounts',
        'Third-party only coverage',
        'No insurance coverage',
      ],
      correctAnswer: 1,
      explanation:
        'Comprehensive fleet policies typically offer volume discounts and simplified administration, making them more cost-effective than individual policies.',
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
              Motor Fleet Insurance Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-700 md:text-xl">
              Comprehensive protection for your commercial vehicle fleet—covering cars, trucks,
              buses, and specialized vehicles with efficient management and competitive pricing.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-lg bg-blue-100 px-6 py-3 font-semibold text-blue-800 hover:bg-blue-200">
                <FaShieldAlt className="mr-2" />
                Get Fleet Quote
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50">
                <FaFileContract className="mr-2" />
                Fleet Assessment
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50">
                <FaPhoneAlt className="mr-2" />
                Speak to Expert
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Specialized coverage for logistics companies, delivery services, and businesses with
              multiple vehicles.
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Explanation */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Understanding Motor Fleet Insurance</h2>
          <p className="mt-3 text-gray-700">
            Motor Fleet Insurance provides comprehensive coverage for businesses operating multiple
            vehicles, offering cost-effective protection and simplified administration.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Coverage Overview</h3>
              <p className="mt-3 text-gray-700">
                Fleet insurance covers multiple vehicles under a single policy, providing protection
                against accidents, theft, fire, and third-party liabilities. It includes
                comprehensive coverage for vehicle damage, driver protection, and business-specific
                risks. The policy can be customized based on vehicle types, usage patterns, and
                business requirements.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Single policy covering multiple vehicles
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Comprehensive and third-party liability coverage
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Volume discounts and simplified administration
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Key Benefits</h3>
              <div className="mt-3 space-y-3">
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaRupeeSign className="text-blue-500" />
                  <div>
                    <div className="font-medium">Cost Efficiency</div>
                    <div className="text-sm text-gray-600">
                      Volume discounts and reduced administrative costs
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaRoute className="text-blue-500" />
                  <div>
                    <div className="font-medium">Fleet Management</div>
                    <div className="text-sm text-gray-600">
                      Centralized policy management and reporting
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaUserShield className="text-blue-500" />
                  <div>
                    <div className="font-medium">Comprehensive Protection</div>
                    <div className="text-sm text-gray-600">
                      Complete coverage for all fleet vehicles
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
            Comprehensive fleet insurance solutions for businesses across various industries with
            multiple vehicle operations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Tile icon={<FaTruckMoving />} title="Logistics Companies">
              Freight carriers, courier services, and transportation companies with delivery fleets.
            </Tile>
            <Tile icon={<FaBus />} title="Passenger Transport">
              Bus operators, taxi services, and employee transportation providers.
            </Tile>
            <Tile icon={<FaCar />} title="Corporate Fleets">
              Companies with employee vehicles, sales teams, and executive car fleets.
            </Tile>
            <Tile icon={<FaTools />} title="Service Providers">
              Field service companies, maintenance providers, and mobile service businesses.
            </Tile>
          </div>
        </div>
      </section>

      {/* Sample Risks */}
      <section className="w-full border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Common Fleet Insurance Risks</h2>
          <p className="mt-3 text-gray-700">
            Understanding key fleet risks helps in selecting appropriate insurance coverage for your
            vehicle operations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <RiskCard
              icon={<FaExclamationTriangle />}
              title="Road Accidents"
              description="Vehicle collisions, overturning, and traffic accidents causing damage and injuries."
              severity="High"
              frequency="High"
            />
            <RiskCard
              icon={<FaLock />}
              title="Vehicle Theft"
              description="Theft of vehicles, parts, or cargo from fleet operations."
              severity="Medium"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaFire />}
              title="Fire & Explosion"
              description="Vehicle fires, fuel explosions, and electrical system failures."
              severity="High"
              frequency="Low"
            />
            <RiskCard
              icon={<FaUserShield />}
              title="Third-Party Liability"
              description="Legal liability for injury or property damage to third parties."
              severity="High"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaWater />}
              title="Natural Disasters"
              description="Flood, hail, cyclone, and other weather-related damage to vehicles."
              severity="Medium"
              frequency="Low"
            />
            <RiskCard
              icon={<FaTools />}
              title="Mechanical Breakdown"
              description="Engine failure, transmission problems, and major mechanical issues."
              severity="Medium"
              frequency="High"
            />
          </div>
        </div>
      </section>

      {/* Claim Stories Component */}
      <ClaimStories stories={claimStories} industryName="Motor Fleet Insurance" />

      {/* Core coverage suite */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Core Coverage Options</h2>
          <p className="mt-3 text-gray-700">
            Comprehensive fleet protection designed for different vehicle types and business
            operations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaTruck className="text-2xl text-blue-500" />}
              title="Commercial Vehicle Coverage"
              body="Comprehensive protection for trucks, vans, and commercial vehicles."
              bullets={[
                'Own damage and theft protection',
                'Third-party liability coverage',
                'Driver and passenger protection',
              ]}
            />
            <Card
              icon={<FaCar className="text-2xl text-blue-500" />}
              title="Corporate Car Fleet"
              body="Specialized coverage for executive and employee vehicle fleets."
              bullets={[
                'Comprehensive car insurance',
                'Personal accident cover for drivers',
                'Roadside assistance and support',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaBus className="text-2xl text-blue-500" />}
              title="Passenger Vehicle Coverage"
              body="Protection for buses, taxis, and passenger transport vehicles."
              bullets={[
                'Passenger liability coverage',
                'Vehicle damage protection',
                'Route permit and license coverage',
              ]}
            />
            <Card
              icon={<FaRoute className="text-2xl text-blue-500" />}
              title="Fleet Management Services"
              body="Additional services to optimize fleet operations and safety."
              bullets={[
                'Telematics and GPS tracking',
                'Driver training and safety programs',
                'Claims management and reporting',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Insurance Plans/Products */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Motor Fleet Insurance Plans</h2>
          <p className="mt-3 text-gray-700">
            Flexible fleet insurance solutions designed for different fleet sizes and business
            requirements.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <InsurancePlan
              name="Small Fleet Plan"
              description="Essential coverage for small business fleets (5-20 vehicles)"
              price="₹50K - ₹3L"
              features={[
                'Comprehensive Vehicle Coverage',
                'Third-Party Liability',
                'Basic Driver Protection',
                'Standard Claims Support',
                'Annual Policy Management',
              ]}
              recommended={false}
            />
            <InsurancePlan
              name="Commercial Fleet Plan"
              description="Comprehensive coverage for medium to large fleets (20-100 vehicles)"
              price="₹3L - ₹25L"
              features={[
                'All Small Fleet Benefits',
                'Enhanced Liability Limits',
                'Fleet Management Services',
                'Telematics Integration',
                'Dedicated Account Manager',
                'Volume Discounts',
              ]}
              recommended={true}
            />
            <InsurancePlan
              name="Enterprise Fleet Plan"
              description="Advanced protection for large fleet operations (100+ vehicles)"
              price="₹25L+"
              features={[
                'All Commercial Fleet Benefits',
                'Customized Coverage Solutions',
                'Advanced Fleet Analytics',
                'Risk Management Consulting',
                'Priority Claims Processing',
                'Multi-Location Coverage',
              ]}
              recommended={false}
            />
          </div>
        </div>
      </section>

      {/* Relevant Articles Component */}
      <RelevantArticles articles={articles} industryName="Motor Fleet Insurance" />

      {/* Knowledge Questionnaire Component */}
      <KnowledgeQuestionnaire questions={quizQuestions} industryName="Motor Fleet Insurance" />

      {/* What you receive & CTA */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Moving Business Forward. Protecting Every Mile.
                </h3>
                <p className="mt-2 text-gray-700">
                  Partner with SIIBs fleet specialists for comprehensive vehicle protection, cost
                  optimization, and expert fleet management support.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  <FaShieldAlt className="mr-2" />
                  Get Quote
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100">
                  <FaFileContract className="mr-2" />
                  Fleet Assessment
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
              value="Fleet Insurance Specialists"
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

export default MotorFleetInsurancePage;
