import { IMAGE_BASE_URL } from '@/consts/variables';
import {
  FaFlask,
  FaIndustry,
  FaFire,
  FaShieldAlt,
  FaTruck,
  FaExclamationTriangle,
  FaHardHat,
} from 'react-icons/fa';

export const details = {
  img: `${IMAGE_BASE_URL}/blog/chemical.jpg`,
  hero: {
    title: 'Chemical Industry Insurance Solutions',
    description:
      'Comprehensive coverage for chemical manufacturing, processing, and distribution—protecting against fire, explosion, pollution, and product liability risks.',
  },
  explaination: {
    title: 'Understanding Chemical Industry Insurance',
    description:
      'Chemical manufacturing involves complex processes with inherent risks including fire, explosion, toxic releases, and environmental contamination. These operations require specialized insurance solutions to protect against property damage, business interruption, and extensive liability exposures.',
    overview: {
      description:
        'Chemical industry operations face unique hazards from raw material handling to final product distribution. Insurance coverage must address property risks, environmental liabilities, product recall costs, and regulatory compliance issues. Comprehensive risk management is essential for protecting assets, employees, and surrounding communities.',
      bullets: [
        'High-hazard manufacturing processes requiring specialized coverage',
        'Environmental liability and pollution remediation costs',
        'Product liability and recall expense protection',
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaFlask className="text-blue-500" />,
          title: 'Chemical Manufacturing',
          description: 'Petrochemicals, specialty chemicals, and pharmaceuticals',
        },
        {
          icon: <FaIndustry className="text-blue-500" />,
          title: 'Processing & Refining',
          description: 'Oil refineries, gas processing, and chemical treatment',
        },
        {
          icon: <FaTruck className="text-blue-500" />,
          title: 'Storage & Distribution',
          description: 'Chemical terminals, tank farms, and transportation',
        },
      ],
    },
  },
  coverage: {
    desciption:
      'Comprehensive protection designed specifically for chemical industry operations and risks.',
    coverages: [
      {
        title: 'Property & Fire Insurance',
        icon: <FaFire className="text-3xl text-blue-500" />,
        body: 'Protection against fire, explosion, and property damage specific to chemical operations.',
        bullets: [
          'Fire and explosion damage coverage',
          'Equipment breakdown and machinery loss',
          'Business interruption and extra expenses',
        ],
      },
      {
        title: 'Environmental & Pollution Liability',
        icon: <FaShieldAlt className="text-3xl text-blue-500" />,
        body: 'Coverage for environmental cleanup costs and third-party pollution claims.',
        bullets: [
          'Pollution cleanup and remediation costs',
          'Third-party environmental liability',
          'Regulatory defense and compliance costs',
        ],
      },
      {
        title: 'Product & General Liability',
        icon: <FaExclamationTriangle className="text-3xl text-blue-500" />,
        body: 'Protection against product defects, contamination, and general business liability.',
        bullets: [
          'Product liability and contamination coverage',
          'Product recall and withdrawal expenses',
          'General liability for operations and premises',
        ],
      },
      {
        title: 'Workers Compensation & Safety',
        icon: <FaHardHat className="text-3xl text-blue-500" />,
        body: 'Enhanced coverage for employee injuries and occupational health exposures.',
        bullets: [
          'Chemical exposure and occupational illness',
          'Enhanced workers compensation benefits',
          'Safety equipment and training support',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped chemical industry clients recover from plant accidents, environmental incidents, and product liability claims.',
    topic: 'chemical_industry',
  },
  relevant: {
    primary: 'chemical-industry',
    insights: ['blog', 'news'],
    claimStories: ['claims-story'],
  },
  knowledge: {
    industryName: 'Chemical Industry',
  },
};
