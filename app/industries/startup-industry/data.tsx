import {
  FaRocket,
  FaLaptop,
  FaUsers,
  FaShieldAlt,
  FaExclamationTriangle,
  FaBug,
  FaUserTie,
  FaMoneyBillWave,
} from 'react-icons/fa';

export const details = {
  img: 'https://minio-api.internal.wabisabitech.in/share-india/blog/bulb.jpg',
  hero: {
    title: 'Startup Industry Insurance Solutions',
    description:
      'Comprehensive coverage for emerging businesses and tech startups—protecting against cyber risks, professional liability, and business interruption as you scale.',
  },
  explaination: {
    title: 'Understanding Startup Industry Insurance',
    description:
      'Startups face unique risks as they rapidly scale operations, handle sensitive data, and navigate regulatory requirements. These growing businesses require flexible insurance solutions covering cyber threats, professional errors, employment practices, and intellectual property disputes.',
    overview: {
      description:
        'Startup operations involve rapid growth, technology dependence, and evolving risk profiles. Insurance coverage must be scalable and address cyber security, professional liability, employment issues, and business interruption. With limited resources and high growth potential, cost-effective comprehensive protection is essential.',
      bullets: [
        'Rapidly evolving risk profile requiring scalable coverage',
        'High dependence on technology and digital operations',
        'Employment practices and professional liability exposure',
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaLaptop className="text-blue-500" />,
          title: 'Technology Startups',
          description: 'SaaS platforms, mobile apps, and software development',
        },
        {
          icon: <FaUsers className="text-blue-500" />,
          title: 'Service-Based Startups',
          description: 'Consulting, marketing, and professional services',
        },
        {
          icon: <FaRocket className="text-blue-500" />,
          title: 'Innovation & R&D',
          description: 'Biotech, fintech, and emerging technology ventures',
        },
      ],
    },
  },
  coverage: {
    desciption:
      'Comprehensive protection designed specifically for startup businesses and emerging technology companies.',
    coverages: [
      {
        title: 'Cyber Liability & Data Breach',
        icon: <FaBug className="text-3xl text-blue-500" />,
        body: 'Protection against cyber attacks, data breaches, and technology failures affecting operations.',
        bullets: [
          'Data breach notification and credit monitoring',
          'Cyber extortion and ransomware coverage',
          'Business interruption from cyber incidents',
        ],
      },
      {
        title: 'Professional & Technology E&O',
        icon: <FaUserTie className="text-3xl text-blue-500" />,
        body: 'Coverage for professional errors, software failures, and technology service mistakes.',
        bullets: [
          'Professional negligence and errors coverage',
          'Technology errors and omissions protection',
          'Intellectual property infringement defense',
        ],
      },
      {
        title: 'Employment Practices Liability',
        icon: <FaUsers className="text-3xl text-blue-500" />,
        body: 'Protection against employment-related claims and workplace litigation.',
        bullets: [
          'Wrongful termination and discrimination claims',
          'Harassment and workplace misconduct coverage',
          'Wage and hour dispute protection',
        ],
      },
      {
        title: 'Business Interruption & Key Person',
        icon: <FaMoneyBillWave className="text-3xl text-blue-500" />,
        body: 'Coverage for revenue loss and protection against key personnel risks.',
        bullets: [
          'Business interruption from covered losses',
          'Key person life and disability coverage',
          'Loss of income from operational disruptions',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped startup clients recover from cyber attacks, professional liability claims, and business disruptions.',
    topic: 'startup_industry',
  },
  relevant: {
    topic: 'startup_industry',
  },
  knowledge: {
    industryName: 'Startup Industry',
  },
};
