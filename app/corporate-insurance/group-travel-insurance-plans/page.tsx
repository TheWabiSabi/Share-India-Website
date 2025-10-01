// 'use client';
import React from 'react';
import Image from 'next/image';
import {
  FaChevronRight,
  FaShieldAlt,
  FaPlane,
  FaGlobe,
  FaUsers,
  FaFileContract,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
  FaHospital,
  FaLock,
} from 'react-icons/fa';
import ContactComponent from '@/app/industries/_components/Contact';
import CardComponent from '@/app/industries/_components/Card';
// import ClaimStories from '../../industries/_components/ClaimStories';
import KnowledgeQuestionnaire from '../../industries/_components/KnowledgeQuestionnaire';
import MainCaraousel from '@/components/main-caraousel';
// import ClaimStories from '@/app/industries/_components/ClaimStories';
const GroupTravelInsurancePage = () => {
  // Sample data for components
  // const claimStories = [
  //   {
  //     id: '1',
  //     title: 'Medical Emergency During Business Trip',
  //     description:
  //       'Employee hospitalized abroad for heart attack during business conference, with insurance covering medical expenses and repatriation.',
  //     claimAmount: '₹18 Lakhs',
  //     settlementTime: '2 weeks',
  //     riskType: 'Medical Emergency',
  //     outcome: 'settled' as const,
  //     lessons: [
  //       'Group travel insurance provides comprehensive medical coverage abroad',
  //       'Emergency evacuation coverage essential for serious conditions',
  //       'Cashless treatment facilities reduce financial stress',
  //     ],
  //   },
  //   {
  //     id: '2',
  //     title: 'Trip Cancellation - Natural Disaster',
  //     description:
  //       'Corporate team trip cancelled due to earthquake at destination, with insurance covering non-refundable expenses.',
  //     claimAmount: '₹8 Lakhs',
  //     settlementTime: '3 weeks',
  //     riskType: 'Trip Cancellation',
  //     outcome: 'settled' as const,
  //     lessons: [
  //       'Trip cancellation coverage protects against unforeseen events',
  //       'Natural disaster coverage essential for international travel',
  //       'Advance booking increases financial exposure',
  //     ],
  //   },
  //   {
  //     id: '3',
  //     title: 'Lost Baggage - Business Equipment',
  //     description:
  //       'Sales team lost baggage containing laptops and presentation materials during international client visit.',
  //     claimAmount: '₹3 Lakhs',
  //     settlementTime: '1 month',
  //     riskType: 'Baggage Loss',
  //     outcome: 'settled' as const,
  //     lessons: [
  //       'Baggage insurance covers business equipment and personal items',
  //       'Proper documentation and receipts speed up claims',
  //       'Backup equipment and data reduce business impact',
  //     ],
  //   },
  //   {
  //     id: '4',
  //     title: 'Flight Delay - Missed Conference',
  //     description:
  //       'Flight delays caused team to miss important business conference, resulting in additional accommodation and rebooking costs.',
  //     claimAmount: '₹2 Lakhs',
  //     settlementTime: '2 weeks',
  //     riskType: 'Travel Delay',
  //     outcome: 'settled' as const,
  //     lessons: [
  //       'Travel delay coverage compensates for additional expenses',
  //       'Business travel insurance protects against missed opportunities',
  //       'Flexible booking options reduce delay impact',
  //     ],
  //   },
  // ];

  const quizQuestions = [
    {
      id: '1',
      question: 'What is the primary benefit of group travel insurance over individual policies?',
      options: [
        'Higher coverage limits',
        'Cost savings and simplified administration',
        'Better destinations',
        'Longer coverage periods',
      ],
      correctAnswer: 1,
      explanation:
        'Group travel insurance offers cost savings through volume discounts and simplified administration for companies managing multiple travelers.',
      difficulty: 'easy' as const,
    },
    {
      id: '2',
      question: 'Which coverage is typically mandatory for business travel to certain countries?',
      options: [
        'Baggage insurance only',
        'Medical insurance with minimum coverage amounts',
        'Trip cancellation only',
        'Personal accident only',
      ],
      correctAnswer: 1,
      explanation:
        'Many countries require visitors to have medical insurance with minimum coverage amounts as a visa requirement.',
      difficulty: 'medium' as const,
    },
    {
      id: '3',
      question: 'What does "emergency evacuation" coverage include in travel insurance?',
      options: [
        'Flight upgrades only',
        'Medical repatriation and emergency transportation',
        'Hotel upgrades only',
        'Baggage delivery',
      ],
      correctAnswer: 1,
      explanation:
        'Emergency evacuation covers medical repatriation to home country and emergency transportation to nearest adequate medical facility.',
      difficulty: 'hard' as const,
    },
    {
      id: '4',
      question: 'Which factor most affects group travel insurance premiums?',
      options: [
        'Group size only',
        'Destination risk profile and trip duration',
        'Airline choice only',
        'Hotel category only',
      ],
      correctAnswer: 1,
      explanation:
        'Destination risk profile, trip duration, traveler age, and activities are primary factors affecting group travel insurance premiums.',
      difficulty: 'medium' as const,
    },
    {
      id: '5',
      question: 'What is typically covered under "trip interruption" insurance?',
      options: [
        'Flight delays only',
        'Additional expenses to return home due to covered reasons',
        'Hotel changes only',
        'Meal upgrades',
      ],
      correctAnswer: 1,
      explanation:
        'Trip interruption covers additional transportation and accommodation expenses to return home early due to covered emergencies.',
      difficulty: 'medium' as const,
    },
  ];
  return (
    <div className="min-h-screen bg-white pt-[8vh] text-gray-900">
      {/* Hero */}
      <section className="relative min-h-screen w-full">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://minio-api.internal.wabisabitech.in/share-india/blog/highrise.jpg"
            alt="Group travel background"
            fill
            priority
            className="object-cover"
            sizes="100vw 100vh"
          />
          {/* Gradient + subtle blur overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/50 to-slate-900/30 backdrop-blur-sm" />
        </div>

        <div className="relative w-full pt-[15vh] md:pt-[30vh]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-white">
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                Group Travel Insurance Plans
              </h1>
              <p className="mt-6 text-lg text-gray-100/90 md:text-xl">
                Comprehensive protection for corporate travel and group trips—covering medical
                emergencies, trip cancellation, and travel-related risks worldwide.
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
              </div>
              <div className="mt-4 text-sm text-gray-100">
                Specialized coverage for corporate travel, business trips, and group travel
                programs.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Explanation */}
      <section className="from-si-primary-200 w-full border-b border-gray-100 bg-gradient-to-b to-transparent lg:h-screen">
        <div className="mx-auto max-w-[90vw] px-4 py-[10vh] sm:px-6 lg:max-w-[75vw] lg:px-8 lg:pt-[20vh]">
          <h2 className="text-3xl font-bold md:text-4xl">Understanding Group Travel Insurance</h2>
          <p className="mt-[9vh] text-lg text-gray-700">
            Group Travel Insurance provides comprehensive protection for corporate travelers and
            group trips, covering medical emergencies, trip disruptions, and travel-related risks.
          </p>

          <div className="mt-[10vh] grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Coverage Overview</h3>
              <p className="mt-8 text-lg text-gray-700">
                This insurance covers multiple travelers under a single policy, providing medical
                coverage, trip cancellation, baggage protection, and emergency assistance. Its
                designed for companies with traveling employees, group tours, and corporate events,
                offering cost-effective protection and simplified administration for multiple
                travelers.
              </p>
              <ul className="mt-7 space-y-2 text-base text-gray-700">
                <li className="mb-6 flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Comprehensive medical coverage worldwide
                </li>
                <li className="mb-6 flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Trip cancellation and interruption protection
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  24/7 emergency assistance and support
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Key Coverage Areas</h3>
              <div className="mt-8 space-y-7">
                <div className="flex items-center gap-5 rounded-lg border border-gray-200 p-3">
                  <FaUsers className="text-blue-500" />
                  <div>
                    <div className="text-lg font-medium">Corporate Travelers</div>
                    <div className="text-base text-gray-600">
                      Companies with employees traveling for business
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5 rounded-lg border border-gray-200 p-3">
                  <FaPlane className="text-blue-500" />
                  <div>
                    <div className="text-lg font-medium">Group Tours</div>
                    <div className="text-base text-gray-600">
                      Tour operators and organized group travel programs
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5 rounded-lg border border-gray-200 p-3">
                  <FaGlobe className="text-blue-500" />
                  <div>
                    <div className="text-lg font-medium">International Assignments</div>
                    <div className="text-base text-gray-600">
                      Employees on international projects and assignments
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core coverage suite */}
      <section className="to-si-primary-200 mt-20 w-full border-b border-gray-100 bg-gradient-to-b from-transparent lg:h-screen">
        <div className="mx-auto max-w-[90vw] px-4 py-[7vh] sm:px-6 lg:max-w-[75vw] lg:px-8 lg:pt-[10vh]">
          <h2 className="text-3xl font-bold md:text-4xl">Core Coverage Suite</h2>
          <p className="mt-2 text-lg text-gray-700">
            Comprehensive travel protection designed for different types of group travel and
            business requirements.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <CardComponent
              icon={<FaHospital className="text-3xl text-blue-500" />}
              title="Medical & Emergency Coverage"
              body="Comprehensive medical protection and emergency assistance worldwide."
              bullets={[
                'Medical treatment and hospitalization coverage',
                'Emergency evacuation and repatriation',
                '24/7 emergency assistance hotline',
              ]}
            />
            <CardComponent
              icon={<FaPlane className="text-3xl text-blue-500" />}
              title="Trip Protection Coverage"
              body="Protection against trip cancellation, interruption, and delays."
              bullets={[
                'Trip cancellation and interruption coverage',
                'Travel delay and missed connection benefits',
                'Additional accommodation and meal expenses',
              ]}
            />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <CardComponent
              icon={<FaLock className="text-3xl text-blue-500" />}
              title="Baggage & Personal Effects"
              body="Protection for luggage, personal belongings, and business equipment."
              bullets={[
                'Lost, stolen, or damaged baggage coverage',
                'Personal effects and business equipment',
                'Emergency purchase of essential items',
              ]}
            />
            <CardComponent
              icon={<FaUsers className="text-3xl text-blue-500" />}
              title="Group-Specific Benefits"
              body="Additional benefits designed for group travel and corporate programs."
              bullets={[
                'Group accident and disability coverage',
                'Hijack and kidnap protection',
                'Corporate liability and duty of care',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Claim Stories */}
      <section className="to-si-primary-200 w-full border-b border-gray-100 bg-gradient-to-t from-transparent py-10">
        <div className="mx-auto max-w-[90vw] px-4 py-14 sm:px-6 lg:max-w-[80vw] lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Claim Stories</h2>
          <p className="mt-3 text-gray-700">
            Stay updated with how SIIB helped group travel clients with medical emergencies, trip
            cancellations, and travel-related incidents worldwide.
          </p>
          <div className="pt-6 lg:w-[75vw]">
            <MainCaraousel
              color="blue"
              layout={1}
              topic="group_travel_insurance"
              type="claims_story"
            />
          </div>
        </div>
      </section>

      {/* Relevant Articles Component */}
      <section className="to-si-primary-200 w-full border-b border-gray-100 bg-gradient-to-b from-transparent">
        <div className="mx-auto max-w-[90vw] px-4 py-14 sm:px-6 lg:max-w-[75vw] lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Industry Insights & Articles</h2>
          <p className="mt-3 text-gray-700">
            Stay updated with the latest trends, regulations, and best practices in Group Travel
            insurance.
          </p>
          <div className="w-full pt-6">
            <MainCaraousel color="white" layout={3} topic="group_travel_insurance" />
          </div>
        </div>
      </section>

      {/* Knowledge Questionnaire Component */}
      <KnowledgeQuestionnaire questions={quizQuestions} industryName="Group Travel Insurance" />

      {/* What you receive & CTA */}
      <section className="to-si-primary-200 w-full bg-gradient-to-b from-transparent">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Enabling Safe Travel. Protecting Every Journey.
                </h3>
                <p className="mt-2 text-gray-700">
                  Partner with SIIB&#39;s travel insurance specialists for comprehensive coverage,
                  global support, and expert travel risk management.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  <FaShieldAlt className="mr-2" />
                  Request Proposal
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100">
                  <FaFileContract className="mr-2" />
                  Upload Travel Data
                </button>
              </div>
            </div>
          </div>

          {/* Contact strip */}
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <ContactComponent label="Call" value="1800 210 2022" icon={<FaPhoneAlt />} />
            <ContactComponent
              label="Email"
              value="contact.ins@shareindia.co.in"
              icon={<FaEnvelope />}
            />
            <ContactComponent
              label="Advisory Desk"
              value="Travel Insurance Specialists"
              icon={<FaHeadset />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
/* Helpers - Commented out as we now use imported components */
/* const Tile = ({
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
      <span className="text-sm text-gray-500">per person</span>
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
); */

export default GroupTravelInsurancePage;
