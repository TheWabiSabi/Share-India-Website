import { FaBuilding, FaDesktop, FaShieldAlt, FaMoneyBillWave } from 'react-icons/fa';

export const details = {
  img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
  hero: {
    title: 'Office Package Insurance Solutions',
    description:
      'Comprehensive coverage for office premises, contents, equipment, and liability—protecting your business operations under a single convenient policy.',
  },
  explaination: {
    title: 'Understanding Office Package Insurance',
    description:
      'Office Package Insurance provides all-in-one protection for office premises, furniture, equipment, and business liabilities. This comprehensive solution simplifies insurance management while ensuring complete protection for your office operations.',
    overview: {
      description:
        'Modern offices require comprehensive protection against multiple risks. Office Package Insurance combines building, contents, equipment, and liability coverage under a single policy, offering convenience and cost savings. Coverage includes fire, theft, electronic equipment, money in transit, and public liability.',
      bullets: [
        'Single policy for multiple coverages',
        'Cost-effective bundled premiums',
        'Simplified claims and policy management',
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaBuilding className="text-blue-500" />,
          title: 'Building & Contents',
          description: 'Office premises, furniture, and fixtures coverage',
        },
        {
          icon: <FaDesktop className="text-blue-500" />,
          title: 'Electronic Equipment',
          description: 'Computers, servers, and IT infrastructure protection',
        },
        {
          icon: <FaMoneyBillWave className="text-blue-500" />,
          title: 'Money & Valuables',
          description: 'Cash in transit and premises coverage',
        },
      ],
    },
  },
  coverage: {
    desciption: 'Comprehensive protection designed for modern office operations.',
    coverages: [
      {
        title: 'Building & Contents Insurance',
        icon: <FaBuilding className="text-3xl text-blue-500" />,
        body: 'Protection for office premises, furniture, and fixtures.',
        bullets: [
          'Fire and allied perils coverage',
          'Furniture, fixtures, and fittings',
          'Tenant improvements and betterments',
        ],
      },
      {
        title: 'Electronic Equipment Insurance',
        icon: <FaDesktop className="text-3xl text-blue-500" />,
        body: 'Comprehensive coverage for IT infrastructure and equipment.',
        bullets: [
          'Computers, servers, and networking equipment',
          'Accidental damage and breakdown',
          'Data recovery expenses',
        ],
      },
      {
        title: 'Money Insurance',
        icon: <FaMoneyBillWave className="text-3xl text-blue-500" />,
        body: 'Coverage for cash and valuables in transit and premises.',
        bullets: [
          'Cash in transit to/from bank',
          'Cash in safe and counter',
          'Cheques and negotiable instruments',
        ],
      },
      {
        title: 'Public Liability Insurance',
        icon: <FaShieldAlt className="text-3xl text-blue-500" />,
        body: 'Protection against third-party injury and property damage claims.',
        bullets: [
          'Visitor injury on premises',
          'Property damage to third parties',
          'Legal defense costs',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped office clients recover from fire, theft, and equipment damage incidents.',
    topic: 'office_package_insurance',
  },
  relevant: {
    tagSlug: 'office-package-insurance',
  },
  knowledge: {
    industryName: 'Office Package Insurance',
  },
};
