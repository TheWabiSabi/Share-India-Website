import { IMAGE_BASE_URL } from '@/consts/variables';
import { FaHome, FaExclamationTriangle, FaTools, FaShieldAlt, FaBolt } from 'react-icons/fa';

export const details = {
  img: `${IMAGE_BASE_URL}/retail/home-retail.jpg`,
  hero: {
    title: 'Retail Home Insurance Solutions',
    description:
      'Comprehensive coverage for homeowners—protecting against property damage, natural disasters, theft, liability claims, and personal belongings loss.',
  },
  explaination: {
    title: 'Understanding Retail Home Insurance',
    description:
      'Homeowners face numerous risks including fire damage, natural calamities, theft, structural damage, and liability from accidents on their property. These incidents can result in substantial financial losses, repair costs, and legal liabilities. Specialized insurance solutions provide comprehensive protection for your home structure, personal belongings, and financial security against unforeseen events.',
    overview: {
      description:
        'Home insurance is essential for protecting one of your most valuable assets. Coverage addresses structural damage from fire, floods, and earthquakes, replacement of personal belongings, temporary accommodation costs during repairs, and liability protection for injuries occurring on your property. Comprehensive protection ensures financial stability, peace of mind, and swift recovery from disasters.',
      bullets: [
        'Structure and building damage coverage from natural disasters',
        'Personal belongings and valuable possessions protection',
        'Liability coverage for injuries and property damage claims',
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaHome className="text-blue-500" />,
          title: 'Independent Houses',
          description: 'Single-family homes, villas, and standalone properties',
        },
        {
          icon: <FaShieldAlt className="text-blue-500" />,
          title: 'Apartments & Condos',
          description: 'Multi-unit dwellings, flats, and gated communities',
        },
        {
          icon: <FaTools className="text-blue-500" />,
          title: 'Rental Properties',
          description: 'Landlord coverage, tenant protection, and rental income loss',
        },
      ],
    },
  },
  coverage: {
    desciption:
      'Comprehensive protection designed specifically for homeowners and residential property risks.',
    coverages: [
      {
        title: 'Building & Structure Protection',
        icon: <FaHome className="text-3xl text-blue-500" />,
        body: 'Coverage for damage to your home structure and permanent fixtures.',
        bullets: [
          'Fire, lightning, and explosion damage',
          'Earthquake, flood, and natural disaster protection',
          'Foundation, walls, and roof repair coverage',
        ],
      },
      {
        title: 'Personal Belongings Coverage',
        icon: <FaShieldAlt className="text-3xl text-blue-500" />,
        body: 'Protection for furniture, electronics, jewelry, and personal possessions.',
        bullets: [
          'Theft and burglary claim coverage',
          'Accidental damage to valuables',
          'Worldwide personal belongings protection',
        ],
      },
      {
        title: 'Natural Disaster & Weather Protection',
        icon: <FaBolt className="text-3xl text-blue-500" />,
        body: 'Enhanced coverage for natural calamities and weather-related damage.',
        bullets: [
          'Flood, cyclone, and storm damage',
          'Earthquake and landslide coverage',
          'Temporary accommodation and relocation costs',
        ],
      },
      {
        title: 'Liability & Legal Protection',
        icon: <FaExclamationTriangle className="text-3xl text-blue-500" />,
        body: 'Coverage for third-party injury claims and legal defense costs.',
        bullets: [
          'Personal injury and medical expense coverage',
          'Property damage liability to neighbors',
          'Legal defense and settlement costs',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped homeowners recover from fire damage, natural disasters, theft incidents, and liability claims.',
    topic: 'home_retail',
  },
  relevant: {
    primary: 'home-insurance',
    insights: ['blog', 'news'],
    claimStories: ['claims-story'],
  },
  knowledge: {
    industryName: 'Retail Home Insurance',
  },
};
