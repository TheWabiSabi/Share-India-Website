'use client';
import React from 'react';
import {
  FaChevronRight,
  FaShieldAlt,
  FaVideo,
  FaMusic,
  FaTheaterMasks,
  FaWater,
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
  FaCamera,
  FaStar,
} from 'react-icons/fa';
import ClaimStories from '../../../components/industries/ClaimStories';
import RelevantArticles from '../../../components/industries/RelevantArticles';
import KnowledgeQuestionnaire from '../../../components/industries/KnowledgeQuestionnaire';
import MainCaraousel from '@/components/main-caraousel';

const MediaEntertainmentInsurancePage = () => {
  // Sample data for components
  const claimStories = [
    {
      id: '1',
      title: 'Film Production Equipment Damage',
      description:
        'Expensive camera equipment worth crores damaged during outdoor film shoot due to unexpected weather conditions.',
      claimAmount: '₹35 Crores',
      settlementTime: '6 months',
      riskType: 'Equipment Damage',
      outcome: 'settled' as const,
      lessons: [
        'Equipment insurance essential for high-value film gear',
        'Weather protection and backup equipment reduce risks',
        'Proper handling and storage protocols prevent damage',
      ],
    },
    {
      id: '2',
      title: 'Celebrity Injury During Shoot',
      description:
        'Lead actor injured during action sequence, causing production delays and additional costs for film completion.',
      claimAmount: '₹50 Crores',
      settlementTime: '10 months',
      riskType: 'Cast Insurance',
      outcome: 'settled' as const,
      lessons: [
        'Cast insurance protects against production delays',
        'Safety protocols and stunt coordination prevent injuries',
        'Completion guarantee insurance ensures project delivery',
      ],
    },
    {
      id: '3',
      title: 'Concert Cancellation Due to Artist Illness',
      description:
        'Major music concert cancelled due to headline artist illness, resulting in refunds and venue costs.',
      claimAmount: '₹15 Crores',
      settlementTime: '4 months',
      riskType: 'Event Cancellation',
      outcome: 'settled' as const,
      lessons: [
        'Event cancellation insurance covers unforeseen circumstances',
        'Artist health monitoring and backup plans reduce risks',
        'Advance ticket sales increase financial exposure',
      ],
    },
    {
      id: '4',
      title: 'Copyright Infringement Lawsuit',
      description:
        'Film production company faced copyright infringement claim over music usage, leading to legal costs and settlement.',
      claimAmount: '₹8 Crores',
      settlementTime: '14 months',
      riskType: 'Intellectual Property',
      outcome: 'settled' as const,
      lessons: [
        'Errors and omissions insurance covers IP claims',
        'Proper rights clearance prevents infringement issues',
        'Legal review of content reduces liability exposure',
      ],
    },
  ];

  const articles = [
    {
      id: '1',
      title: 'Entertainment Insurance Trends 2024: OTT Platforms and Digital Content',
      excerpt:
        'How streaming platforms and digital content creation are changing entertainment insurance needs.',
      author: 'Entertainment Insurance Team',
      publishDate: 'Apr 28, 2024',
      readTime: '9 min read',
      category: 'Digital Entertainment',
      url: '#',
      featured: true,
    },
    {
      id: '2',
      title: 'Film Production Insurance: Managing Risks in Indian Cinema',
      excerpt:
        'Comprehensive guide to insurance coverage for film and television production in India.',
      author: 'Film Insurance Specialists',
      publishDate: 'Apr 20, 2024',
      readTime: '8 min read',
      category: 'Film Production',
      url: '#',
    },
    {
      id: '3',
      title: 'Event Insurance: Protecting Live Entertainment and Concerts',
      excerpt: 'Essential insurance coverage for live events, concerts, and entertainment venues.',
      author: 'Event Risk Team',
      publishDate: 'Apr 15, 2024',
      readTime: '7 min read',
      category: 'Live Events',
      url: '#',
    },
  ];

  const quizQuestions = [
    {
      id: '1',
      question: 'What is the primary purpose of cast insurance in film production?',
      options: [
        'To cover actor salaries',
        'To protect against production delays due to cast illness or injury',
        'To provide health insurance for actors',
        'To cover marketing costs',
      ],
      correctAnswer: 1,
      explanation:
        'Cast insurance protects film productions against financial losses due to delays caused by illness, injury, or death of key cast members.',
      difficulty: 'easy' as const,
    },
    {
      id: '2',
      question: 'Which insurance covers legal claims related to copyright infringement in media?',
      options: [
        'General liability insurance',
        'Errors and omissions (E&O) insurance',
        'Property insurance',
        'Workers compensation',
      ],
      correctAnswer: 1,
      explanation:
        'Errors and omissions (E&O) insurance covers legal claims related to copyright infringement, defamation, and other content-related issues.',
      difficulty: 'medium' as const,
    },
    {
      id: '3',
      question: 'What does "completion guarantee" insurance provide?',
      options: [
        'Equipment replacement guarantee',
        'Guarantee that the production will be completed and delivered',
        'Actor performance guarantee',
        'Box office success guarantee',
      ],
      correctAnswer: 1,
      explanation:
        'Completion guarantee insurance ensures that a film or production will be completed and delivered according to the agreed specifications and budget.',
      difficulty: 'hard' as const,
    },
    {
      id: '4',
      question: 'Which factor most affects entertainment insurance premiums?',
      options: [
        'Studio location only',
        'Production budget and risk assessment',
        'Number of crew members only',
        'Film genre only',
      ],
      correctAnswer: 1,
      explanation:
        'Production budget, risk assessment including stunts, locations, and cast involvement are primary factors affecting entertainment insurance premiums.',
      difficulty: 'medium' as const,
    },
    {
      id: '5',
      question: 'What is typically covered under equipment insurance for media productions?',
      options: [
        'Only cameras',
        'All production equipment including cameras, lighting, and sound equipment',
        'Only editing equipment',
        'Only vehicles',
      ],
      correctAnswer: 1,
      explanation:
        'Equipment insurance covers all production equipment including cameras, lighting, sound equipment, and other technical gear used in production.',
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
              Media & Entertainment Insurance Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-700 md:text-xl">
              Comprehensive protection for film production, television, live events, and digital
              content—covering equipment, talent, and creative risks in the entertainment industry.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-lg bg-blue-100 px-6 py-3 font-semibold text-blue-800 hover:bg-blue-200">
                <FaShieldAlt className="mr-2" />
                Get Coverage Quote
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50">
                <FaFileContract className="mr-2" />
                Production Assessment
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50">
                <FaPhoneAlt className="mr-2" />
                Speak to Expert
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Specialized coverage for film producers, event organizers, and entertainment
              companies.
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Explanation */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">
            Understanding Media & Entertainment Insurance
          </h2>
          <p className="mt-3 text-gray-700">
            Media & Entertainment Insurance provides specialized protection for the unique risks
            faced by the entertainment industry, from production delays to equipment damage.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Coverage Overview</h3>
              <p className="mt-3 text-gray-700">
                This insurance covers the complex risks in entertainment production including cast
                and crew protection, equipment coverage, production delays, intellectual property
                issues, and event cancellation. It provides financial protection for high-value
                productions and events where traditional insurance may not adequately address
                industry-specific risks.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Protection for cast, crew, and key personnel
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Coverage for expensive production equipment
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Intellectual property and content liability protection
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Key Benefits</h3>
              <div className="mt-3 space-y-3">
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaVideo className="text-blue-500" />
                  <div>
                    <div className="font-medium">Production Protection</div>
                    <div className="text-sm text-gray-600">
                      Comprehensive coverage for film and TV production
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaStar className="text-blue-500" />
                  <div>
                    <div className="font-medium">Talent Coverage</div>
                    <div className="text-sm text-gray-600">
                      Protection for key cast and crew members
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaCamera className="text-blue-500" />
                  <div>
                    <div className="font-medium">Equipment Security</div>
                    <div className="text-sm text-gray-600">
                      Coverage for high-value production equipment
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
            Comprehensive entertainment insurance solutions for all segments of the media and
            entertainment industry.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Tile icon={<FaVideo />} title="Film & TV Producers">
              Production companies creating films, television shows, and digital content.
            </Tile>
            <Tile icon={<FaMusic />} title="Event Organizers">
              Concert promoters, festival organizers, and live entertainment companies.
            </Tile>
            <Tile icon={<FaTheaterMasks />} title="Theater & Performing Arts">
              Theater companies, dance troupes, and performing arts organizations.
            </Tile>
            <Tile icon={<FaCamera />} title="Equipment Rental Companies">
              Companies providing cameras, lighting, and technical equipment for productions.
            </Tile>
          </div>
        </div>
      </section>

      {/* Sample Risks */}
      <section className="w-full border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Common Entertainment Industry Risks</h2>
          <p className="mt-3 text-gray-700">
            Understanding key entertainment risks helps in selecting appropriate insurance coverage
            for your productions and events.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <RiskCard
              icon={<FaStar />}
              title="Cast & Crew Risks"
              description="Illness, injury, or death of key talent causing production delays and additional costs."
              severity="High"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaCamera />}
              title="Equipment Damage"
              description="Damage, theft, or malfunction of expensive production equipment and technology."
              severity="Medium"
              frequency="High"
            />
            <RiskCard
              icon={<FaWater />}
              title="Weather & Natural Disasters"
              description="Adverse weather conditions affecting outdoor shoots and live events."
              severity="Medium"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaLock />}
              title="Intellectual Property Claims"
              description="Copyright infringement, defamation, and other content-related legal issues."
              severity="High"
              frequency="Low"
            />
            <RiskCard
              icon={<FaExclamationTriangle />}
              title="Event Cancellation"
              description="Cancellation of concerts, festivals, or events due to unforeseen circumstances."
              severity="High"
              frequency="Low"
            />
            <RiskCard
              icon={<FaUserShield />}
              title="Public Liability"
              description="Third-party injury or property damage during productions or events."
              severity="Medium"
              frequency="Medium"
            />
          </div>
        </div>
      </section>

      {/* Claim Stories Component */}
      <ClaimStories stories={claimStories} industryName="Media & Entertainment Insurance" />

      {/* Core coverage suite */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Core Coverage Options</h2>
          <p className="mt-3 text-gray-700">
            Specialized entertainment insurance protection designed for different types of
            productions and events.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaVideo className="text-2xl text-blue-500" />}
              title="Film & TV Production Insurance"
              body="Comprehensive coverage for film and television production activities."
              bullets={[
                'Cast insurance and key person coverage',
                'Equipment and props protection',
                'Completion guarantee and delivery bond',
              ]}
            />
            <Card
              icon={<FaMusic className="text-2xl text-blue-500" />}
              title="Event & Concert Insurance"
              body="Protection for live events, concerts, and entertainment venues."
              bullets={[
                'Event cancellation and postponement',
                'Public liability and crowd control',
                'Artist and performer coverage',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaLock className="text-2xl text-blue-500" />}
              title="Errors & Omissions Insurance"
              body="Protection against intellectual property and content-related claims."
              bullets={[
                'Copyright and trademark infringement',
                'Defamation and privacy violations',
                'Content liability and clearance issues',
              ]}
            />
            <Card
              icon={<FaCamera className="text-2xl text-blue-500" />}
              title="Equipment & Technology Coverage"
              body="Specialized protection for production equipment and technology."
              bullets={[
                'Cameras, lighting, and sound equipment',
                'Post-production and editing facilities',
                'Mobile equipment and location coverage',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Insurance Plans/Products */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Entertainment Insurance Plans</h2>
          <p className="mt-3 text-gray-700">
            Flexible entertainment insurance solutions designed for different production scales and
            event types.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <InsurancePlan
              name="Independent Production Plan"
              description="Essential coverage for small-scale productions and independent creators"
              price="₹2L - ₹10L"
              features={[
                'Basic Equipment Coverage',
                'General Liability Protection',
                'Cast Insurance (Limited)',
                'Errors & Omissions (Basic)',
                'Short-term Production Coverage',
              ]}
              recommended={false}
            />
            <InsurancePlan
              name="Commercial Production Plan"
              description="Comprehensive coverage for established production companies and events"
              price="₹10L - ₹1Cr"
              features={[
                'All Independent Plan Benefits',
                'Enhanced Cast & Crew Coverage',
                'Completion Guarantee Insurance',
                'Advanced Equipment Protection',
                'Event Cancellation Coverage',
                'International Location Coverage',
              ]}
              recommended={true}
            />
            <InsurancePlan
              name="Studio Enterprise Plan"
              description="Advanced protection for major studios and large-scale productions"
              price="₹1Cr+"
              features={[
                'All Commercial Plan Benefits',
                'Multi-Production Coverage',
                'Celebrity and Talent Protection',
                'Global Production Coverage',
                'Crisis Management Services',
                'Dedicated Entertainment Specialist',
              ]}
              recommended={false}
            />
          </div>
        </div>
      </section>

      {/* Relevant Articles Component */}
      {/* <RelevantArticles articles={articles} industryName="Media & Entertainment Insurance" /> */}
      <section className="w-full border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Industry Insights & Articles</h2>
          <p className="mt-3 text-gray-700">
            Stay updated with the latest trends, regulations, and best practices in Plastic Industry
            insurance.
          </p>
          <div className="w-full pt-6">
            <MainCaraousel color="white" layout={3} topic="media_entertainment_insurance" />
          </div>
        </div>
      </section>

      {/* Knowledge Questionnaire Component */}
      <KnowledgeQuestionnaire
        questions={quizQuestions}
        industryName="Media & Entertainment Insurance"
      />

      {/* What you receive & CTA */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Creating Stories. Protecting Dreams.
                </h3>
                <p className="mt-2 text-gray-700">
                  Partner with SIIBs entertainment specialists for comprehensive production
                  coverage, talent protection, and expert risk management.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  <FaShieldAlt className="mr-2" />
                  Get Quote
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100">
                  <FaFileContract className="mr-2" />
                  Production Assessment
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
              value="Entertainment Insurance Specialists"
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

export default MediaEntertainmentInsurancePage;
