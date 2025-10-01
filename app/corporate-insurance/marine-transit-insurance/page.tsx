// 'use client';
import React from 'react';
import Image from 'next/image';
import {
  FaChevronRight,
  FaShieldAlt,
  FaShip,
  FaPlane,
  FaTruck,
  FaWarehouse,
  FaFileContract,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
} from 'react-icons/fa';
import ContactComponent from '@/app/industries/_components/Contact';
import CardComponent from '@/app/industries/_components/Card';
// import ClaimStories from '../../industries/_components/ClaimStories';
import KnowledgeQuestionnaire from '../../industries/_components/KnowledgeQuestionnaire';
import MainCaraousel from '@/components/main-caraousel';
// import ClaimStories from '@/app/industries/_components/ClaimStories';

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
      <section className="relative min-h-screen w-full">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://minio-api.internal.wabisabitech.in/share-india/blog/highrise.jpg"
            alt="Marine transit background"
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
                Marine Transit Insurance Solutions
              </h1>
              <p className="mt-6 text-lg text-gray-100/90 md:text-xl">
                Comprehensive protection for goods in transit by sea, air, road, and
                rail—safeguarding your cargo from origin to destination worldwide.
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
                Specialized coverage for importers, exporters, and logistics companies with global
                reach.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Explanation */}
      <section className="from-si-primary-200 w-full border-b border-gray-100 bg-gradient-to-b to-transparent lg:h-screen">
        <div className="mx-auto max-w-[90vw] px-4 py-[10vh] sm:px-6 lg:max-w-[75vw] lg:px-8 lg:pt-[20vh]">
          <h2 className="text-3xl font-bold md:text-4xl">Understanding Marine Transit Insurance</h2>
          <p className="mt-[9vh] text-lg text-gray-700">
            Marine Transit Insurance provides comprehensive protection for goods in transit,
            covering various modes of transportation and associated risks during the journey from
            origin to destination worldwide.
          </p>

          <div className="mt-[10vh] grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Industry Overview</h3>
              <p className="mt-8 text-lg text-gray-700">
                Global trade involves significant risks during cargo transportation by sea, air,
                road, and rail. Marine Transit insurance protects against physical loss, damage,
                theft, and natural disasters. Coverage extends from warehouse to warehouse,
                providing comprehensive protection throughout the supply chain journey for
                importers, exporters, and logistics companies.
              </p>
              <ul className="mt-7 space-y-2 text-base text-gray-700">
                <li className="mb-6 flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Multi-modal transportation coverage (sea, air, road, rail)
                </li>
                <li className="mb-6 flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Protection against theft, damage, and natural disasters
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Warehouse to warehouse comprehensive coverage
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Key Coverage Areas</h3>
              <div className="mt-8 space-y-7">
                <div className="flex items-center gap-5 rounded-lg border border-gray-200 p-3">
                  <FaShip className="text-blue-500" />
                  <div>
                    <div className="text-lg font-medium">Sea Transportation</div>
                    <div className="text-base text-gray-600">
                      Ocean freight, container shipping, and bulk cargo transport
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5 rounded-lg border border-gray-200 p-3">
                  <FaPlane className="text-blue-500" />
                  <div>
                    <div className="text-lg font-medium">Air Transportation</div>
                    <div className="text-base text-gray-600">
                      Air cargo, express shipments, and high-value goods transport
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5 rounded-lg border border-gray-200 p-3">
                  <FaTruck className="text-blue-500" />
                  <div>
                    <div className="text-lg font-medium">Land Transportation</div>
                    <div className="text-base text-gray-600">
                      Road transport, rail freight, and inland cargo movement
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      {/* <section className="w-full border-b border-gray-100 bg-white">
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
      </section> */}

      {/* Sample Risks */}
      {/* <section className="w-full border-b border-gray-100 bg-gray-50">
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
      </section> */}

      {/* Claim Stories Component */}
      {/* <ClaimStories stories={claimStories} industryName="Marine Transit Insurance" /> */}

      {/* Core coverage suite */}
      <section className="to-si-primary-200 mt-20 w-full border-b border-gray-100 bg-gradient-to-b from-transparent lg:h-screen">
        <div className="mx-auto max-w-[90vw] px-4 py-[7vh] sm:px-6 lg:max-w-[75vw] lg:px-8 lg:pt-[10vh]">
          <h2 className="text-3xl font-bold md:text-4xl">Core Coverage Suite</h2>
          <p className="mt-2 text-lg text-gray-700">
            Comprehensive protection designed specifically for cargo transportation across all
            modes.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <CardComponent
              icon={<FaShip className="text-3xl text-blue-500" />}
              title="Marine Cargo Insurance"
              body="Comprehensive coverage for goods transported by sea and inland waterways with complete protection."
              bullets={[
                'All risks coverage for sea transit',
                'General average and salvage charges',
                'Port risks and terminal coverage',
              ]}
            />
            <CardComponent
              icon={<FaPlane className="text-3xl text-blue-500" />}
              title="Air Cargo Insurance"
              body="Specialized protection for goods transported by air freight with enhanced coverage."
              bullets={[
                'All risks coverage for air transit',
                'Airport terminal risks',
                'Delay and deviation coverage',
              ]}
            />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <CardComponent
              icon={<FaTruck className="text-3xl text-blue-500" />}
              title="Road Transit Insurance"
              body="Protection for goods transported by road and rail within India with comprehensive coverage."
              bullets={[
                'Accident and collision coverage',
                'Theft and pilferage protection',
                'Loading and unloading risks',
              ]}
            />
            <CardComponent
              icon={<FaWarehouse className="text-3xl text-blue-500" />}
              title="Multi-Modal Transit"
              body="Comprehensive coverage for goods using multiple transportation modes with seamless protection."
              bullets={[
                'Seamless warehouse to warehouse coverage',
                'All transportation modes included',
                'Transhipment and storage risks',
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
            Stay updated with how SIIB helped marine transit clients recover from cargo damage,
            theft, and transportation risks.
          </p>
          <div className="pt-6 lg:w-[75vw]">
            <MainCaraousel
              color="blue"
              layout={1}
              topic="marine_transit_insurance"
              type="claims_story"
            />
          </div>
        </div>
      </section>

      {/* Relevant Articles Component */}
      {/* <RelevantArticles articles={articles} industryName="Marine Transit" /> */}
      <section className="to-si-primary-200 w-full border-b border-gray-100 bg-gradient-to-b from-transparent">
        <div className="mx-auto max-w-[90vw] px-4 py-14 sm:px-6 lg:max-w-[75vw] lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Industry Insights & Articles</h2>
          <p className="mt-3 text-gray-700">
            Stay updated with the latest trends, regulations, and best practices in Marine Transit
            insurance.
          </p>
          <div className="w-full pt-6">
            <MainCaraousel color="white" layout={3} topic="marine_transit_insurance" />
          </div>
        </div>
      </section>

      {/* Knowledge Questionnaire Component */}
      <KnowledgeQuestionnaire questions={quizQuestions} industryName="Marine Transit" />

      {/* What you receive & CTA */}
      <section className="to-si-primary-200 w-full bg-gradient-to-b from-transparent">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">Secure Your Cargo Worldwide.</h3>
                <p className="mt-2 text-gray-700">
                  Partner with SIIB&#39;s marine specialists for comprehensive cargo protection,
                  global coverage, and expert claims management.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  <FaShieldAlt className="mr-2" />
                  Request Proposal
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100">
                  <FaFileContract className="mr-2" />
                  Upload Cargo Data
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
              value="Marine Insurance Specialists"
              icon={<FaHeadset />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarineTransitInsurancePage;
