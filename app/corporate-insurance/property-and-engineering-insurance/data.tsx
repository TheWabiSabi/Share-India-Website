import { FaHammer, FaIndustry, FaTools, FaShieldAlt } from 'react-icons/fa';

export const details = {
  img: 'https://minio-api.internal.wabisabitech.in/share-india/blog/highrise.jpg',
  hero: {
    title: 'Property & Engineering Insurance Solutions',
    description:
      'Comprehensive coverage for construction projects, machinery, and industrial equipment—protecting against damage, breakdown, and business interruption.',
  },
  explaination: {
    title: 'Understanding Property & Engineering Insurance',
    description:
      'Property & Engineering Insurance provides specialized protection for construction projects, machinery, and industrial operations. Coverage includes CAR, EAR, machinery breakdown, and business interruption.',
    overview: {
      description:
        'Construction and industrial operations require specialized coverage. CAR Insurance covers construction projects. EAR Insurance protects machinery installation. Machinery Breakdown Insurance covers sudden failures. Business Interruption Insurance protects against revenue loss during repairs.',
      bullets: [
        'Construction and installation coverage',
        'Machinery breakdown protection',
        'Business interruption coverage',
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaHammer className="text-blue-500" />,
          title: 'Construction Projects',
          description: 'CAR insurance for building and civil works',
        },
        {
          icon: <FaIndustry className="text-blue-500" />,
          title: 'Machinery Installation',
          description: 'EAR insurance for equipment erection',
        },
        {
          icon: <FaTools className="text-blue-500" />,
          title: 'Industrial Equipment',
          description: 'Machinery breakdown coverage',
        },
      ],
    },
  },
  coverage: {
    desciption: 'Comprehensive protection for construction and industrial operations.',
    coverages: [
      {
        title: 'Contractors All Risk (CAR)',
        icon: <FaHammer className="text-3xl text-blue-500" />,
        body: 'Comprehensive coverage for construction projects.',
        bullets: [
          'Material damage during construction',
          'Third-party liability',
          'Natural catastrophe coverage',
        ],
      },
      {
        title: 'Erection All Risk (EAR)',
        icon: <FaIndustry className="text-3xl text-blue-500" />,
        body: 'Protection for machinery installation and commissioning.',
        bullets: [
          'Installation and testing coverage',
          'Commissioning risks',
          'Equipment damage protection',
        ],
      },
      {
        title: 'Machinery Breakdown',
        icon: <FaTools className="text-3xl text-blue-500" />,
        body: 'Coverage for sudden machinery failures.',
        bullets: [
          'Sudden and unforeseen breakdown',
          'Repair and replacement costs',
          'Business interruption losses',
        ],
      },
      {
        title: 'Business Interruption',
        icon: <FaShieldAlt className="text-3xl text-blue-500" />,
        body: 'Protection against revenue loss during repairs.',
        bullets: [
          'Loss of profits coverage',
          'Fixed costs protection',
          'Extra expense reimbursement',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped construction and industrial clients recover from project delays.',
    topic: 'property_engineering_insurance',
  },
  relevant: {
    topic: 'property_engineering_insurance',
  },
  knowledge: {
    industryName: 'Property & Engineering Insurance',
  },
};
