import { FaShieldAlt, FaUserShield, FaExclamationTriangle, FaLock } from 'react-icons/fa';

export const details = {
  img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80',
  hero: {
    title: 'Liability Insurance Solutions',
    description:
      'Comprehensive liability coverage protecting businesses against third-party claims, professional errors, product defects, and cyber risks.',
  },
  explaination: {
    title: 'Understanding Liability Insurance',
    description:
      'Liability Insurance protects businesses against legal claims from third parties. Coverage includes public liability, product liability, professional indemnity, directors & officers liability, and cyber liability.',
    overview: {
      description:
        'Businesses face various liability exposures requiring specialized protection. Public Liability covers third-party injury and property damage. Product Liability protects against defective products. Professional Indemnity covers professional errors. D&O Liability protects management decisions. Cyber Liability covers data breaches and cyber attacks.',
      bullets: [
        'Third-party injury and property damage coverage',
        'Professional errors and omissions protection',
        'Cyber risks and data breach coverage',
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaShieldAlt className="text-blue-500" />,
          title: 'Public Liability',
          description: 'Third-party bodily injury and property damage',
        },
        {
          icon: <FaUserShield className="text-blue-500" />,
          title: 'Professional Indemnity',
          description: 'Professional errors and omissions coverage',
        },
        {
          icon: <FaLock className="text-blue-500" />,
          title: 'Cyber Liability',
          description: 'Data breaches and cyber attack protection',
        },
      ],
    },
  },
  coverage: {
    desciption: 'Comprehensive liability protection for modern business risks.',
    coverages: [
      {
        title: 'Public Liability Insurance',
        icon: <FaShieldAlt className="text-3xl text-blue-500" />,
        body: 'Protection against third-party injury and property damage claims.',
        bullets: [
          'Bodily injury and death liability',
          'Property damage to third parties',
          'Legal defense and settlement costs',
        ],
      },
      {
        title: 'Product Liability Insurance',
        icon: <FaExclamationTriangle className="text-3xl text-blue-500" />,
        body: 'Coverage for claims from defective products.',
        bullets: ['Product defect claims', 'Consumer injury and damage', 'Product recall expenses'],
      },
      {
        title: 'Professional Indemnity',
        icon: <FaUserShield className="text-3xl text-blue-500" />,
        body: 'Protection for professional service providers.',
        bullets: ['Professional errors and omissions', 'Negligence claims', 'Legal defense costs'],
      },
      {
        title: 'Cyber Liability Insurance',
        icon: <FaLock className="text-3xl text-blue-500" />,
        body: 'Coverage for cyber risks and data breaches.',
        bullets: [
          'Data breach notification costs',
          'Cyber attack response',
          'Business interruption from cyber incidents',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped businesses manage liability claims and legal defense.',
    topic: 'liability_insurance',
  },
  relevant: {
    primary: 'liability-insurance',
    insights: ['blog', 'news'],
    claimStories: ['claims-story'],
  },
  knowledge: {
    industryName: 'Liability Insurance',
  },
};
