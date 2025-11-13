import {
  FaShieldAlt,
  FaLock,
  FaCreditCard,
  FaDatabase,
  FaUserShield,
  FaNetworkWired,
} from 'react-icons/fa';

export const details = {
  img: 'https://minio-api.internal.wabisabitech.in/share-india/retail/cyber-retail.jpg',
  hero: {
    title: 'Retail Cyber Insurance Solutions',
    description:
      'Comprehensive coverage for retail businesses—protecting against data breaches, payment fraud, ransomware attacks, and customer privacy violations.',
  },
  explaination: {
    title: 'Understanding Retail Cyber Insurance',
    description:
      'Retail businesses handle vast amounts of customer data, payment information, and digital transactions daily. These operations face significant cyber risks including data breaches, payment card fraud, ransomware attacks, and regulatory penalties. Specialized insurance solutions protect against financial losses, legal liabilities, and business disruption from cyber incidents.',
    overview: {
      description:
        'Retail operations rely heavily on point-of-sale systems, e-commerce platforms, and customer databases, creating multiple cyber vulnerability points. Insurance coverage must address data breach notification costs, regulatory fines, payment card industry (PCI) penalties, business interruption, and cyber extortion. Comprehensive cyber protection is essential for safeguarding customer trust, brand reputation, and business continuity.',
      bullets: [
        'Data breach and customer notification expense coverage',
        'Payment card fraud and PCI DSS compliance penalties',
        'Ransomware and cyber extortion response protection',
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaCreditCard className="text-blue-500" />,
          title: 'E-commerce & Online Retail',
          description: 'Online stores, marketplaces, and digital payment platforms',
        },
        {
          icon: <FaNetworkWired className="text-blue-500" />,
          title: 'Brick-and-Mortar Retail',
          description: 'Physical stores, POS systems, and in-store transactions',
        },
        {
          icon: <FaDatabase className="text-blue-500" />,
          title: 'Omnichannel Retail',
          description: 'Multi-channel operations, loyalty programs, and CRM systems',
        },
      ],
    },
  },
  coverage: {
    desciption:
      'Comprehensive protection designed specifically for retail cyber risks and digital operations.',
    coverages: [
      {
        title: 'Data Breach & Privacy Liability',
        icon: <FaShieldAlt className="text-3xl text-blue-500" />,
        body: 'Protection against customer data breaches and privacy violation claims.',
        bullets: [
          'Data breach notification and credit monitoring',
          'Privacy liability and regulatory defense',
          'Crisis management and public relations costs',
        ],
      },
      {
        title: 'Payment Card & Fraud Coverage',
        icon: <FaCreditCard className="text-3xl text-blue-500" />,
        body: 'Coverage for payment card fraud, PCI fines, and fraudulent transactions.',
        bullets: [
          'PCI DSS fines and assessment costs',
          'Card replacement and fraud losses',
          'Merchant account compromise coverage',
        ],
      },
      {
        title: 'Ransomware & Cyber Extortion',
        icon: <FaLock className="text-3xl text-blue-500" />,
        body: 'Protection against ransomware attacks and cyber extortion demands.',
        bullets: [
          'Ransomware payment and negotiation costs',
          'System restoration and data recovery',
          'Business interruption and lost revenue',
        ],
      },
      {
        title: 'Network Security & Incident Response',
        icon: <FaUserShield className="text-3xl text-blue-500" />,
        body: 'Enhanced coverage for security failures and incident response expenses.',
        bullets: [
          'Forensic investigation and breach analysis',
          'Legal and regulatory compliance support',
          'Third-party vendor and supply chain liability',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped retail clients recover from data breaches, ransomware attacks, and payment card fraud incidents.',
    topic: 'retail_cyber',
  },
  relevant: {
    topic: 'retail_cyber',
  },
  knowledge: {
    industryName: 'Retail Cyber Insurance',
  },
};
