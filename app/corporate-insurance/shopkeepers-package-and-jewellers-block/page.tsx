// 'use client';
import React from 'react';
import {
  FaChevronRight,
  FaShieldAlt,
  FaStore,
  FaGem,
  FaShoppingBag,
  FaFire,
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
  FaCreditCard,
  FaEye,
} from 'react-icons/fa';
import ContactComponent from '@/app/industries/_components/Contact';
import CardComponent from '@/app/industries/_components/Card';
// import ClaimStories from '../../industries/_components/ClaimStories';
import KnowledgeQuestionnaire from '../../industries/_components/KnowledgeQuestionnaire';
import MainCaraousel from '@/components/main-caraousel';
import ClaimStories from '@/app/industries/_components/ClaimStories';

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
      {/* Industry Explanation */}
      <section className="from-si-primary-200 w-full border-b border-gray-100 bg-gradient-to-b to-transparent lg:h-screen">
        <div className="mx-auto max-w-[90vw] px-4 py-[10vh] sm:px-6 lg:max-w-[75vw] lg:px-8 lg:pt-[20vh]">
          <h2 className="text-3xl font-bold md:text-4xl">
            Understanding Shopkeepers Package & Jewellers Block Insurance
          </h2>
          <p className="mt-[9vh] text-lg text-gray-700">
            Specialized retail insurance providing comprehensive protection for shops, stores, and
            jewelry businesses against theft, damage, business interruption, and high-value
            merchandise risks with enhanced security requirements.
          </p>

          <div className="mt-[10vh] grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Industry Overview</h3>
              <p className="mt-8 text-lg text-gray-700">
                Retail businesses and jewelry stores face unique risks including theft, burglary,
                fire damage, and business interruption. Shopkeepers Package and Jewellers Block
                insurance provides comprehensive protection for stock, fixtures, premises, and
                high-value merchandise. This specialized coverage addresses the specific security
                and operational challenges faced by retail and jewelry businesses.
              </p>
              <ul className="mt-7 space-y-2 text-base text-gray-700">
                <li className="mb-6 flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Comprehensive stock and inventory protection
                </li>
                <li className="mb-6 flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Premises and fixtures coverage
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Business interruption and loss of income protection
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Key Coverage Areas</h3>
              <div className="mt-8 space-y-7">
                <div className="flex items-center gap-5 rounded-lg border border-gray-200 p-3">
                  <FaStore className="text-blue-500" />
                  <div>
                    <div className="text-lg font-medium">Retail Stores</div>
                    <div className="text-base text-gray-600">
                      General merchandise stores, boutiques, and retail outlets
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5 rounded-lg border border-gray-200 p-3">
                  <FaGem className="text-blue-500" />
                  <div>
                    <div className="text-lg font-medium">Jewelry Stores</div>
                    <div className="text-base text-gray-600">
                      Jewelry shops, precious metals dealers, and gemstone retailers
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-5 rounded-lg border border-gray-200 p-3">
                  <FaShoppingBag className="text-blue-500" />
                  <div>
                    <div className="text-lg font-medium">Specialty Retailers</div>
                    <div className="text-base text-gray-600">
                      Electronics stores, fashion retailers, and luxury goods shops
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
      </section> */}

      {/* Sample Risks */}
      {/* <section className="w-full border-b border-gray-100 bg-gray-50">
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
      </section> */}

      {/* Claim Stories Component */}
      {/* <ClaimStories stories={claimStories} industryName="Shopkeepers & Jewellers Insurance" /> */}

      {/* Core coverage suite */}
      <section className="to-si-primary-200 mt-20 w-full border-b border-gray-100 bg-gradient-to-b from-transparent lg:h-screen">
        <div className="mx-auto max-w-[90vw] px-4 py-[7vh] sm:px-6 lg:max-w-[75vw] lg:px-8 lg:pt-[10vh]">
          <h2 className="text-3xl font-bold md:text-4xl">Core Coverage Suite</h2>
          <p className="mt-2 text-lg text-gray-700">
            Comprehensive protection designed specifically for retail businesses and jewelry stores.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <CardComponent
              icon={<FaStore className="text-3xl text-blue-500" />}
              title="Shopkeepers Package Insurance"
              body="Comprehensive coverage for general retail businesses and stores with complete protection."
              bullets={[
                'Fire and allied perils for premises and stock',
                'Burglary and theft protection',
                'Public liability and customer injury coverage',
              ]}
            />
            <CardComponent
              icon={<FaGem className="text-3xl text-blue-500" />}
              title="Jewellers Block Insurance"
              body="Specialized protection for jewelry stores and precious items dealers with enhanced security."
              bullets={[
                'All-risk coverage for precious metals and gems',
                'Floater coverage for items in transit',
                'Enhanced security requirements and benefits',
              ]}
            />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <CardComponent
              icon={<FaCreditCard className="text-3xl text-blue-500" />}
              title="Money Insurance"
              body="Protection for cash and negotiable instruments in business operations with comprehensive coverage."
              bullets={[
                'Money in safe and premises coverage',
                'Cash in transit protection',
                'Counterfeit currency and forgery coverage',
              ]}
            />
            <CardComponent
              icon={<FaShoppingBag className="text-3xl text-blue-500" />}
              title="Stock & Inventory Protection"
              body="Comprehensive coverage for retail inventory and merchandise with damage protection."
              bullets={[
                'Stock damage from fire, water, and theft',
                'Spoilage and contamination coverage',
                'Seasonal stock and display protection',
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
            Stay updated with how SIIB helped retail and jewelry clients recover from theft, fire
            damage, and business interruptions.
          </p>
          <div className="pt-6 lg:w-[75vw]">
            <MainCaraousel
              color="blue"
              layout={1}
              topic="shopkeepers_jewellers_insurance"
              type="claims_story"
            />
          </div>
        </div>
      </section>

      {/* Relevant Articles Component */}
      {/* <RelevantArticles articles={articles} industryName="Shopkeepers & Jewellers" /> */}
      <section className="to-si-primary-200 w-full border-b border-gray-100 bg-gradient-to-b from-transparent">
        <div className="mx-auto max-w-[90vw] px-4 py-14 sm:px-6 lg:max-w-[75vw] lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Industry Insights & Articles</h2>
          <p className="mt-3 text-gray-700">
            Stay updated with the latest trends, security measures, and best practices in retail and
            jewelry insurance.
          </p>
          <div className="w-full pt-6">
            <MainCaraousel color="white" layout={3} topic="shopkeepers_jewellers_insurance" />
          </div>
        </div>
      </section>

      {/* Knowledge Questionnaire Component */}
      <KnowledgeQuestionnaire questions={quizQuestions} industryName="Shopkeepers & Jewellers" />

      {/* What you receive & CTA */}
      <section className="to-si-primary-200 w-full bg-gradient-to-b from-transparent">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Secure Your Retail Business Today.
                </h3>
                <p className="mt-2 text-gray-700">
                  Partner with SIIB&#39;s retail specialists for comprehensive store protection,
                  inventory coverage, and expert risk management solutions.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  <FaShieldAlt className="mr-2" />
                  Request Proposal
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100">
                  <FaFileContract className="mr-2" />
                  Upload Store Data
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
              value="Retail Insurance Specialists"
              icon={<FaHeadset />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopkeepersJewellersInsurancePage;
