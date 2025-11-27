import { IMAGE_BASE_URL } from '@/consts/variables';
import {
  FaIndustry,
  FaRecycle,
  FaFlask,
  FaShieldAlt,
  FaExclamationTriangle,
  FaCogs,
  FaBoxes,
} from 'react-icons/fa';

export const details = {
  img: `${IMAGE_BASE_URL}/blog/factory.jpg`,
  hero: {
    title: 'Plastic Industry Insurance Solutions',
    description:
      'Comprehensive coverage for plastic manufacturing, processing, and recycling—protecting against equipment breakdown, environmental liability, and product defects.',
  },
  explaination: {
    title: 'Understanding Plastic Industry Insurance',
    description:
      'Plastic manufacturing involves complex processes with high-temperature machinery, chemical handling, and environmental considerations. These operations require specialized insurance to protect against equipment failure, environmental liability, product defects, and supply chain disruptions.',
    overview: {
      description:
        'Plastic manufacturers face unique risks from raw material processing to finished product distribution. Insurance must cover equipment breakdown, environmental compliance, product liability, and business interruption. With increasing regulatory scrutiny and supply chain volatility, comprehensive risk management is essential for operational continuity.',
      bullets: [
        'High-temperature machinery and equipment breakdown risks',
        'Environmental compliance and pollution liability exposure',
        'Product defect and recall cost protection requirements',
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaIndustry className="text-blue-500" />,
          title: 'Injection & Blow Molding',
          description: 'Consumer goods, packaging, and automotive components',
        },
        {
          icon: <FaRecycle className="text-blue-500" />,
          title: 'Recycling & Processing',
          description: 'Plastic recycling, waste processing, and resin production',
        },
        {
          icon: <FaFlask className="text-blue-500" />,
          title: 'Specialty Plastics',
          description: 'Medical devices, aerospace, and high-performance materials',
        },
      ],
    },
  },
  coverage: {
    desciption:
      'Comprehensive protection designed specifically for plastic manufacturing operations and related risks.',
    coverages: [
      {
        title: 'Equipment Breakdown & Machinery',
        icon: <FaCogs className="text-3xl text-blue-500" />,
        body: 'Protection against machinery failure, overheating, and production equipment damage.',
        bullets: [
          'Injection molding and extrusion equipment coverage',
          'Boiler and machinery breakdown protection',
          'Business interruption from equipment failure',
        ],
      },
      {
        title: 'Environmental & Pollution Liability',
        icon: <FaShieldAlt className="text-3xl text-blue-500" />,
        body: 'Coverage for environmental cleanup, regulatory compliance, and pollution incidents.',
        bullets: [
          'Pollution cleanup and remediation costs',
          'Regulatory compliance and penalty coverage',
          'Third-party environmental damage claims',
        ],
      },
      {
        title: 'Product Liability & Recall',
        icon: <FaExclamationTriangle className="text-3xl text-blue-500" />,
        body: 'Protection against defective products, contamination, and mandatory product recalls.',
        bullets: [
          'Product defect and contamination coverage',
          'Product recall and withdrawal expenses',
          'Consumer injury and property damage claims',
        ],
      },
      {
        title: 'Supply Chain & Business Interruption',
        icon: <FaBoxes className="text-3xl text-blue-500" />,
        body: 'Coverage for supply chain disruptions and revenue loss from operational interruptions.',
        bullets: [
          'Raw material supply chain disruption coverage',
          'Business interruption and extra expense protection',
          'Contingent business interruption from suppliers',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped plastic manufacturing clients recover from equipment failures, environmental incidents, and product liability claims.',
    topic: 'plastic_industry',
  },
  relevant: {
    topic: 'plastic_industry',
  },
  knowledge: {
    industryName: 'Plastic Industry',
  },
};
