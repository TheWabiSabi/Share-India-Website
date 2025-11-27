import { IMAGE_BASE_URL } from '@/consts/variables';
import { FaBuilding, FaHome, FaHammer, FaUserShield, FaFileContract, FaCity } from 'react-icons/fa';

export const details = {
  img: `${IMAGE_BASE_URL}/blog/construction.jpg`,
  hero: {
    title: 'Real Estate Industry Insurance Solutions',
    description:
      'Comprehensive coverage for real estate development, construction, and property management—protecting investments from ground-breaking to occupancy.',
  },
  explaination: {
    title: 'Understanding Real Estate Industry Insurance',
    description:
      'The real estate industry involves significant capital investments, long development cycles, and complex stakeholder relationships. Comprehensive insurance coverage is essential for protecting these investments and ensuring project success.',
    overview: {
      description:
        'Real estate development encompasses residential, commercial, and mixed-use projects involving complex construction processes, regulatory compliance, and market risks. The industry faces risks from construction accidents, natural disasters, design errors, and regulatory changes. With RERA implementation and increasing buyer awareness, insurance has become crucial for developer credibility and project financing.',
      bullets: [
        'Multi-year projects with significant capital exposure',
        'RERA compliance requirements for buyer protection',
        'Professional liability risks for architects and engineers',
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaHome className="text-blue-500" />,
          title: 'Residential Projects',
          description: 'Apartments, villas, and gated communities',
        },
        {
          icon: <FaBuilding className="text-blue-500" />,
          title: 'Commercial Developments',
          description: 'Office complexes, retail, and hospitality',
        },
        {
          icon: <FaCity className="text-blue-500" />,
          title: 'Mixed-Use Projects',
          description: 'Integrated townships and smart cities',
        },
      ],
    },
  },
  coverage: {
    desciption:
      'Comprehensive protection designed specifically for real estate development and property operations.',
    coverages: [
      {
        title: 'Contractors All Risk (CAR)',
        icon: <FaHammer className="text-3xl text-blue-500" />,
        body: 'Comprehensive coverage for construction phase including material damage and liability.',
        bullets: [
          'Material damage during construction',
          'Third-party liability and property damage',
          'Natural catastrophe and weather protection',
        ],
      },
      {
        title: 'Property & Asset Protection',
        icon: <FaBuilding className="text-3xl text-blue-500" />,
        body: 'Coverage for completed properties, rental income, and asset values.',
        bullets: [
          'Fire and allied perils for buildings',
          'Loss of rent and business interruption',
          'Tenant improvements and betterments',
        ],
      },
      {
        title: 'Professional Indemnity',
        icon: <FaUserShield className="text-3xl text-blue-500" />,
        body: 'Protection for design professionals and project consultants.',
        bullets: [
          'Architects and engineers professional liability',
          'Design error and omission coverage',
          'Project management consultant protection',
        ],
      },
      {
        title: 'Directors & Officers Liability',
        icon: <FaFileContract className="text-3xl text-blue-500" />,
        body: 'Coverage for management decisions and regulatory compliance.',
        bullets: [
          'RERA compliance and regulatory defense',
          'Management liability and decision coverage',
          'Shareholder and investor protection',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped real estate clients recover from construction accidents, natural disasters, and professional liability claims.',
    topic: 'real_estate_industry',
  },
  relevant: {
    topic: 'real_estate_industry',
  },
  knowledge: {
    industryName: 'Real Estate Industry',
  },
};
