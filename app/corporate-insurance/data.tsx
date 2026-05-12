import React from 'react';
import {
  FaShieldAlt,
  FaShip,
  FaCreditCard,
  FaFilm,
  FaUsers,
  FaTruck,
  FaBuilding,
  FaStore,
  FaPlane,
} from 'react-icons/fa';
import { MdEngineering } from 'react-icons/md';

export const CORPORATE_INSURANCE = [
  {
    name: 'Property & Engineering Insurance',
    icon: <MdEngineering className="text-3xl text-blue-600" />,
    description:
      'Comprehensive protection for construction projects, machinery, equipment, and infrastructure against physical damage and operational risks.',
    coverage: [
      'Contractors All Risk (CAR) insurance',
      'Erection All Risk (EAR) coverage',
      'Machinery breakdown protection',
      'Electronic equipment insurance',
    ],
  },
  {
    name: 'Liability Insurance',
    icon: <FaShieldAlt className="text-3xl text-blue-600" />,
    description:
      'Protection against legal liabilities from third-party injuries, property damage, and professional errors or omissions.',
    coverage: [
      'Public liability insurance',
      'Product liability coverage',
      'Professional indemnity insurance',
      'Directors & Officers (D&O) liability',
    ],
  },
  {
    name: 'Marine Transit Insurance',
    icon: <FaShip className="text-3xl text-blue-600" />,
    description:
      'Coverage for goods in transit by sea, air, or land against loss or damage during shipments.',
    coverage: [
      'Import/export cargo insurance',
      'Domestic transit coverage',
      'Open marine policies',
      'Project cargo insurance',
    ],
  },
  {
    name: 'Trade Credit Insurance',
    icon: <FaCreditCard className="text-3xl text-blue-600" />,
    description:
      'Protect accounts receivable from non-payment risks due to buyer insolvency or default.',
    coverage: [
      'Buyer default protection',
      'Political risk coverage',
      'Insolvency protection',
      'Debt collection support',
    ],
  },
  {
    name: 'Media & Entertainment Insurance',
    icon: <FaFilm className="text-3xl text-blue-600" />,
    description:
      'Specialized coverage for production risks, equipment, and event cancellation in media industry.',
    coverage: [
      'Film production insurance',
      'Equipment and props coverage',
      'Event cancellation insurance',
      'Errors & omissions liability',
    ],
  },
  {
    name: 'Employee Benefits Insurance',
    icon: <FaUsers className="text-3xl text-blue-600" />,
    description:
      'Comprehensive group health, life, and personal accident coverage for your workforce.',
    coverage: [
      'Group health insurance',
      'Group life insurance',
      'Personal accident coverage',
      'Critical illness protection',
    ],
  },
  {
    name: 'Motor Fleet Insurance',
    icon: <FaTruck className="text-3xl text-blue-600" />,
    description: 'Cost-effective coverage for companies managing multiple commercial vehicles.',
    coverage: [
      'Comprehensive vehicle coverage',
      'Third-party liability',
      'Driver personal accident',
      'Fleet management support',
    ],
  },
  {
    name: 'Office Package Insurance',
    icon: <FaBuilding className="text-3xl text-blue-600" />,
    description: 'All-in-one protection for office premises, contents, and business interruption.',
    coverage: [
      'Building and contents insurance',
      'Business interruption cover',
      'Money insurance',
      'Electronic equipment protection',
    ],
  },
  {
    name: 'Shopkeepers Package & Jewellers Block',
    icon: <FaStore className="text-3xl text-blue-600" />,
    description:
      'Tailored solutions for retail businesses covering stock, premises, and unique risks.',
    coverage: [
      'Stock and inventory protection',
      'Burglary and theft coverage',
      'Glass breakage insurance',
      'Public liability protection',
    ],
  },
  {
    name: 'Group Travel Insurance Plans',
    icon: <FaPlane className="text-3xl text-blue-600" />,
    description: 'Complete travel protection for employee business trips and corporate travel.',
    coverage: [
      'Medical emergencies abroad',
      'Trip cancellation coverage',
      'Baggage loss protection',
      'Emergency evacuation',
    ],
  },
];

export const KEY_BENEFITS = [
  'Comprehensive risk mitigation for business assets',
  'Regulatory compliance and statutory requirements',
  'Business continuity and financial stability',
  'Customized coverage tailored to industry needs',
  'Expert claims support and risk advisory',
  'Cost optimization through bundled packages',
];

export const INDUSTRIES = [
  'Manufacturing & Engineering',
  'Construction & Infrastructure',
  'IT & Technology Services',
  'Healthcare & Pharmaceuticals',
  'Retail & E-commerce',
  'Hospitality & Tourism',
  'Logistics & Transportation',
  'Financial Services & Banking',
];
