import { FaCreditCard, FaShieldAlt, FaGlobe, FaChartLine } from 'react-icons/fa';

export const details = {
  img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
  hero: {
    title: 'Trade Credit Insurance Solutions',
    description:
      'Protect your accounts receivable against non-payment risks—enabling confident credit extension and business growth with comprehensive coverage.',
  },
  explaination: {
    title: 'Understanding Trade Credit Insurance',
    description:
      'Trade Credit Insurance protects businesses against non-payment of trade receivables due to customer insolvency, protracted default, or political risks. Enables confident credit extension to new customers and markets.',
    overview: {
      description:
        'Trade Credit Insurance protects against commercial and political risks. Commercial risks include buyer insolvency and protracted default. Political risks cover war, government actions, and currency restrictions. Whole Turnover Policies cover entire sales ledger, enabling business growth and market expansion.',
      bullets: [
        'Protection against buyer insolvency',
        'Political risk coverage for exports',
        'Enables confident credit extension',
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaCreditCard className="text-blue-500" />,
          title: 'Domestic Trade',
          description: 'Protection for domestic credit sales',
        },
        {
          icon: <FaGlobe className="text-blue-500" />,
          title: 'Export Trade',
          description: 'International trade credit coverage',
        },
        {
          icon: <FaChartLine className="text-blue-500" />,
          title: 'Whole Turnover',
          description: 'Comprehensive sales ledger protection',
        },
      ],
    },
  },
  coverage: {
    desciption: 'Comprehensive protection for trade receivables and credit sales.',
    coverages: [
      {
        title: 'Commercial Risk Coverage',
        icon: <FaCreditCard className="text-3xl text-blue-500" />,
        body: 'Protection against buyer insolvency and default.',
        bullets: [
          'Buyer insolvency protection',
          'Protracted default coverage',
          'Credit limit management',
        ],
      },
      {
        title: 'Political Risk Coverage',
        icon: <FaGlobe className="text-3xl text-blue-500" />,
        body: 'Protection for international trade risks.',
        bullets: [
          'War and civil unrest coverage',
          'Government action protection',
          'Currency inconvertibility',
        ],
      },
      {
        title: 'Whole Turnover Policy',
        icon: <FaShieldAlt className="text-3xl text-blue-500" />,
        body: 'Comprehensive coverage for entire sales ledger.',
        bullets: [
          'All eligible customers covered',
          'Simplified administration',
          'Portfolio protection',
        ],
      },
      {
        title: 'Credit Management Services',
        icon: <FaChartLine className="text-3xl text-blue-500" />,
        body: 'Value-added credit management support.',
        bullets: [
          'Buyer credit assessment',
          'Credit limit recommendations',
          'Collection assistance',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped businesses recover from customer defaults and insolvencies.',
    topic: 'trade_credit_insurance',
  },
  relevant: {
    topic: 'trade_credit_insurance',
  },
  knowledge: {
    industryName: 'Trade Credit Insurance',
  },
};
