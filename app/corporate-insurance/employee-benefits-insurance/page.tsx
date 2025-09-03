'use client';
import React from 'react';
import {
  FaChevronRight,
  FaShieldAlt,
  FaUsers,
  FaHeartbeat,
  FaUmbrella,
  FaFileContract,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
  FaExclamationTriangle,
  FaCheckCircle,
  FaRupeeSign,
  FaCertificate,
  FaHospital,
  FaHandHoldingHeart,
} from 'react-icons/fa';
import ClaimStories from '../../../components/industries/ClaimStories';
import RelevantArticles from '../../../components/industries/RelevantArticles';
import KnowledgeQuestionnaire from '../../../components/industries/KnowledgeQuestionnaire';

const EmployeeBenefitsInsurancePage = () => {
  // Sample data for components
  const claimStories = [
    {
      id: '1',
      title: 'Group Health Insurance - Critical Illness',
      description:
        'Employee diagnosed with cancer required extensive treatment, with group health insurance covering medical expenses and providing family support.',
      claimAmount: '₹25 Lakhs',
      settlementTime: '2 months',
      riskType: 'Group Health Insurance',
      outcome: 'settled' as const,
      lessons: [
        'Group health insurance provides comprehensive medical coverage',
        'Critical illness coverage essential for serious conditions',
        'Cashless treatment facilities reduce financial stress',
      ],
    },
    {
      id: '2',
      title: 'Group Life Insurance - Accidental Death',
      description:
        'Employee died in road accident, with group life insurance providing financial support to family and covering funeral expenses.',
      claimAmount: '₹50 Lakhs',
      settlementTime: '1 month',
      riskType: 'Group Life Insurance',
      outcome: 'settled' as const,
      lessons: [
        'Group life insurance provides financial security to families',
        'Accidental death benefit provides additional coverage',
        'Quick claim settlement helps families during difficult times',
      ],
    },
    {
      id: '3',
      title: 'Group Personal Accident - Workplace Injury',
      description:
        'Employee injured in workplace accident resulting in temporary disability, with insurance covering medical treatment and income replacement.',
      claimAmount: '₹15 Lakhs',
      settlementTime: '6 weeks',
      riskType: 'Group Personal Accident',
      outcome: 'settled' as const,
      lessons: [
        'Personal accident insurance covers workplace injuries',
        'Disability benefits provide income replacement',
        'Comprehensive coverage includes medical and rehabilitation costs',
      ],
    },
    {
      id: '4',
      title: 'Employee Assistance Program - Mental Health',
      description:
        'Multiple employees accessed mental health support during pandemic, with EAP providing counseling and wellness services.',
      claimAmount: '₹8 Lakhs',
      settlementTime: 'Ongoing',
      riskType: 'Employee Wellness',
      outcome: 'settled' as const,
      lessons: [
        'Employee assistance programs support mental health',
        'Preventive wellness programs reduce long-term costs',
        'Comprehensive employee benefits improve retention',
      ],
    },
  ];

  const articles = [
    {
      id: '1',
      title: 'Employee Benefits Trends 2024: Mental Health and Wellness Programs',
      excerpt:
        'How companies are expanding employee benefits to include comprehensive mental health and wellness support.',
      author: 'Employee Benefits Team',
      publishDate: 'Apr 30, 2024',
      readTime: '8 min read',
      category: 'Employee Wellness',
      url: '#',
      featured: true,
    },
    {
      id: '2',
      title: 'Group Health Insurance: Designing Comprehensive Medical Benefits',
      excerpt:
        'Best practices for structuring group health insurance plans that meet diverse employee needs.',
      author: 'Health Insurance Specialists',
      publishDate: 'Apr 22, 2024',
      readTime: '9 min read',
      category: 'Health Insurance',
      url: '#',
    },
    {
      id: '3',
      title: 'Employee Retention Through Benefits: ROI of Comprehensive Coverage',
      excerpt:
        'How comprehensive employee benefits programs improve retention and reduce recruitment costs.',
      author: 'HR Benefits Consultants',
      publishDate: 'Apr 18, 2024',
      readTime: '7 min read',
      category: 'HR Strategy',
      url: '#',
    },
  ];

  const quizQuestions = [
    {
      id: '1',
      question: 'What is the primary advantage of group insurance over individual insurance?',
      options: [
        'Higher coverage limits',
        'Lower premiums due to group buying power',
        'Better claim service',
        'More policy options',
      ],
      correctAnswer: 1,
      explanation:
        'Group insurance typically offers lower premiums due to group buying power and reduced administrative costs per person.',
      difficulty: 'easy' as const,
    },
    {
      id: '2',
      question: 'Which employee benefit is typically mandatory under Indian labor laws?',
      options: [
        'Group health insurance',
        'Employees State Insurance (ESI) for eligible employees',
        'Group life insurance',
        'Personal accident insurance',
      ],
      correctAnswer: 1,
      explanation:
        'ESI is mandatory for employees earning up to ₹25,000 per month in companies with 10 or more employees.',
      difficulty: 'medium' as const,
    },
    {
      id: '3',
      question: 'What does "portability" mean in group health insurance?',
      options: [
        'Ability to use insurance anywhere',
        'Ability to continue coverage when changing jobs',
        'Ability to add family members',
        'Ability to increase coverage',
      ],
      correctAnswer: 1,
      explanation:
        'Portability allows employees to continue their health insurance coverage when changing jobs, maintaining continuity of benefits.',
      difficulty: 'hard' as const,
    },
    {
      id: '4',
      question: 'Which factor most affects group insurance premiums?',
      options: [
        'Company location only',
        'Age profile and claims history of the group',
        'Industry type only',
        'Number of employees only',
      ],
      correctAnswer: 1,
      explanation:
        'Age profile, health status, and claims history of the employee group are primary factors in determining group insurance premiums.',
      difficulty: 'medium' as const,
    },
    {
      id: '5',
      question:
        'What is the typical waiting period for pre-existing conditions in group health insurance?',
      options: [
        'No waiting period',
        '1-4 years depending on the condition',
        '6 months',
        '10 years',
      ],
      correctAnswer: 1,
      explanation:
        'Group health insurance typically has waiting periods of 1-4 years for pre-existing conditions, depending on the specific condition and policy terms.',
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
              Employee Benefits Insurance Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-700 md:text-xl">
              Comprehensive employee benefits programs including group health, life, and wellness
              coverage—attracting talent and ensuring employee well-being.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-lg bg-blue-100 px-6 py-3 font-semibold text-blue-800 hover:bg-blue-200">
                <FaShieldAlt className="mr-2" />
                Get Benefits Quote
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50">
                <FaFileContract className="mr-2" />
                Benefits Consultation
              </button>
              <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50">
                <FaPhoneAlt className="mr-2" />
                Speak to Expert
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Specialized programs for HR departments and companies seeking comprehensive employee
              welfare solutions.
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Explanation */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">
            Understanding Employee Benefits Insurance
          </h2>
          <p className="mt-3 text-gray-700">
            Employee Benefits Insurance provides comprehensive coverage for employee health, life,
            disability, and wellness needs, helping companies attract and retain talent.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Coverage Overview</h3>
              <p className="mt-3 text-gray-700">
                Employee benefits insurance encompasses group health insurance, group life
                insurance, personal accident coverage, and wellness programs. These benefits provide
                financial security to employees and their families while helping employers comply
                with regulations and improve employee satisfaction. The coverage can be customized
                based on company size, budget, and employee demographics.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Comprehensive health and medical coverage for employees
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Life and disability protection for financial security
                </li>
                <li className="flex items-start">
                  <FaChevronRight className="mt-1 mr-2 text-blue-400" />
                  Wellness programs and preventive healthcare benefits
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Key Benefits</h3>
              <div className="mt-3 space-y-3">
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaUsers className="text-blue-500" />
                  <div>
                    <div className="font-medium">Employee Retention</div>
                    <div className="text-sm text-gray-600">
                      Attract and retain top talent with comprehensive benefits
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaHeartbeat className="text-blue-500" />
                  <div>
                    <div className="font-medium">Health & Wellness</div>
                    <div className="text-sm text-gray-600">
                      Promote employee health and productivity
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <FaUmbrella className="text-blue-500" />
                  <div>
                    <div className="font-medium">Financial Security</div>
                    <div className="text-sm text-gray-600">
                      Provide financial protection for employees and families
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
            Comprehensive employee benefits insurance solutions for organizations of all sizes
            across various industries.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Tile icon={<FaUsers />} title="Corporate Employers">
              Large corporations and multinational companies with diverse employee populations.
            </Tile>
            <Tile icon={<FaHeartbeat />} title="SME Businesses">
              Small and medium enterprises seeking cost-effective employee benefits programs.
            </Tile>
            <Tile icon={<FaHandHoldingHeart />} title="Startups">
              Growing companies looking to attract talent with competitive benefits packages.
            </Tile>
            <Tile icon={<FaHospital />} title="Healthcare Organizations">
              Hospitals, clinics, and healthcare providers requiring specialized employee coverage.
            </Tile>
          </div>
        </div>
      </section>

      {/* Sample Risks */}
      <section className="w-full border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Common Employee Benefits Risks</h2>
          <p className="mt-3 text-gray-700">
            Understanding key employee risks helps in designing appropriate benefits coverage for
            your workforce.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <RiskCard
              icon={<FaHeartbeat />}
              title="Medical Emergencies"
              description="Serious illnesses, accidents, and medical conditions requiring expensive treatment."
              severity="High"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaExclamationTriangle />}
              title="Workplace Accidents"
              description="Injuries occurring during work hours or in workplace premises."
              severity="Medium"
              frequency="Medium"
            />
            <RiskCard
              icon={<FaUmbrella />}
              title="Disability & Income Loss"
              description="Temporary or permanent disability affecting employee's ability to work and earn."
              severity="High"
              frequency="Low"
            />
            <RiskCard
              icon={<FaUsers />}
              title="Family Health Issues"
              description="Medical emergencies affecting employee family members covered under group plans."
              severity="Medium"
              frequency="High"
            />
            <RiskCard
              icon={<FaHandHoldingHeart />}
              title="Mental Health Challenges"
              description="Stress, anxiety, and mental health issues affecting employee well-being and productivity."
              severity="Medium"
              frequency="High"
            />
            <RiskCard
              icon={<FaHospital />}
              title="Critical Illness"
              description="Life-threatening conditions like cancer, heart disease requiring extensive treatment."
              severity="High"
              frequency="Low"
            />
          </div>
        </div>
      </section>

      {/* Claim Stories Component */}
      <ClaimStories stories={claimStories} industryName="Employee Benefits Insurance" />

      {/* Core coverage suite */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Core Coverage Options</h2>
          <p className="mt-3 text-gray-700">
            Comprehensive employee benefits protection designed for different organizational needs
            and employee demographics.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaHeartbeat className="text-2xl text-blue-500" />}
              title="Group Health Insurance"
              body="Comprehensive medical coverage for employees and their families."
              bullets={[
                'Hospitalization and medical treatment coverage',
                'Outpatient and preventive healthcare benefits',
                'Maternity and newborn care coverage',
              ]}
            />
            <Card
              icon={<FaUmbrella className="text-2xl text-blue-500" />}
              title="Group Life & Disability Insurance"
              body="Financial protection for employees and their beneficiaries."
              bullets={[
                'Group term life insurance coverage',
                'Accidental death and dismemberment benefits',
                'Disability income replacement coverage',
              ]}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              icon={<FaUsers className="text-2xl text-blue-500" />}
              title="Group Personal Accident"
              body="Protection against accidents and injuries for employees."
              bullets={[
                '24/7 accident coverage worldwide',
                'Medical expenses and hospitalization',
                'Temporary and permanent disability benefits',
              ]}
            />
            <Card
              icon={<FaHandHoldingHeart className="text-2xl text-blue-500" />}
              title="Employee Wellness Programs"
              body="Comprehensive wellness and preventive healthcare initiatives."
              bullets={[
                'Annual health check-ups and screenings',
                'Mental health and counseling services',
                'Fitness and wellness program benefits',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Insurance Plans/Products */}
      <section className="w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold md:text-3xl">Employee Benefits Insurance Plans</h2>
          <p className="mt-3 text-gray-700">
            Flexible employee benefits solutions designed for different company sizes and budget
            requirements.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <InsurancePlan
              name="Essential Benefits Plan"
              description="Basic employee benefits package for small businesses and startups"
              price="₹15K - ₹50K"
              features={[
                'Group Health Insurance (Basic)',
                'Group Life Insurance',
                'Personal Accident Coverage',
                'Basic Wellness Programs',
                'Standard Network Hospitals',
              ]}
              recommended={false}
            />
            <InsurancePlan
              name="Comprehensive Benefits Plan"
              description="Complete employee benefits program for medium to large organizations"
              price="₹50K - ₹5L"
              features={[
                'All Essential Plan Benefits',
                'Enhanced Health Coverage',
                'Critical Illness Coverage',
                'Maternity and Newborn Benefits',
                'Mental Health Support',
                'Extended Network Access',
              ]}
              recommended={true}
            />
            <InsurancePlan
              name="Premium Benefits Plan"
              description="Advanced employee benefits package for large corporations"
              price="₹5L+"
              features={[
                'All Comprehensive Plan Benefits',
                'International Coverage',
                'Executive Health Programs',
                'Concierge Medical Services',
                'Advanced Wellness Programs',
                'Dedicated Benefits Administrator',
              ]}
              recommended={false}
            />
          </div>
        </div>
      </section>

      {/* Relevant Articles Component */}
      <RelevantArticles articles={articles} industryName="Employee Benefits Insurance" />

      {/* Knowledge Questionnaire Component */}
      <KnowledgeQuestionnaire
        questions={quizQuestions}
        industryName="Employee Benefits Insurance"
      />

      {/* What you receive & CTA */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Caring for People. Building Success.
                </h3>
                <p className="mt-2 text-gray-700">
                  Partner with SIIBs employee benefits specialists for comprehensive workforce
                  protection, wellness programs, and expert benefits administration.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                  <FaShieldAlt className="mr-2" />
                  Get Quote
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100">
                  <FaFileContract className="mr-2" />
                  Benefits Consultation
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
              value="Employee Benefits Specialists"
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
      <span className="text-sm text-gray-500">per employee/year</span>
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

export default EmployeeBenefitsInsurancePage;
