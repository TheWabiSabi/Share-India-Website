import { FaShip, FaPlane, FaTruck, FaWarehouse } from 'react-icons/fa';

export const details = {
  img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80',
  hero: {
    title: 'Marine Transit Insurance Solutions',
    description:
      'Comprehensive protection for goods in transit by sea, air, road, and rail—safeguarding your cargo from origin to destination worldwide.',
  },
  explaination: {
    title: 'Understanding Marine Transit Insurance',
    description:
      'Marine Transit Insurance provides comprehensive protection for goods in transit, covering various modes of transportation and associated risks during the journey from origin to destination worldwide.',
    overview: {
      description:
        'Global trade involves significant risks during cargo transportation by sea, air, road, and rail. Marine Transit insurance protects against physical loss, damage, theft, and natural disasters. Coverage extends from warehouse to warehouse, providing comprehensive protection throughout the supply chain journey for importers, exporters, and logistics companies.',
      bullets: [
        'Multi-modal transportation coverage (sea, air, road, rail)',
        'Protection against theft, damage, and natural disasters',
        'Warehouse to warehouse comprehensive coverage',
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaShip className="text-blue-500" />,
          title: 'Sea Transportation',
          description: 'Ocean freight, container shipping, and bulk cargo transport',
        },
        {
          icon: <FaPlane className="text-blue-500" />,
          title: 'Air Transportation',
          description: 'Air cargo, express shipments, and high-value goods transport',
        },
        {
          icon: <FaTruck className="text-blue-500" />,
          title: 'Land Transportation',
          description: 'Road transport, rail freight, and inland cargo movement',
        },
      ],
    },
  },
  coverage: {
    desciption:
      'Comprehensive protection designed specifically for cargo transportation across all modes.',
    coverages: [
      {
        title: 'Marine Cargo Insurance',
        icon: <FaShip className="text-3xl text-blue-500" />,
        body: 'Comprehensive coverage for goods transported by sea and inland waterways.',
        bullets: [
          'All risks coverage for sea transit',
          'General average and salvage charges',
          'Port risks and terminal coverage',
        ],
      },
      {
        title: 'Air Cargo Insurance',
        icon: <FaPlane className="text-3xl text-blue-500" />,
        body: 'Specialized protection for goods transported by air freight.',
        bullets: [
          'All risks coverage for air transit',
          'Airport terminal risks',
          'Delay and deviation coverage',
        ],
      },
      {
        title: 'Road Transit Insurance',
        icon: <FaTruck className="text-3xl text-blue-500" />,
        body: 'Protection for goods transported by road and rail within India.',
        bullets: [
          'Accident and collision coverage',
          'Theft and pilferage protection',
          'Loading and unloading risks',
        ],
      },
      {
        title: 'Multi-Modal Transit',
        icon: <FaWarehouse className="text-3xl text-blue-500" />,
        body: 'Comprehensive coverage for goods using multiple transportation modes.',
        bullets: [
          'Seamless warehouse to warehouse coverage',
          'All transportation modes included',
          'Transhipment and storage risks',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped marine transit clients recover from cargo damage, theft, and transportation risks.',
    topic: 'marine_transit_insurance',
  },
  relevant: {
    topic: 'marine_transit_insurance',
  },
  knowledge: {
    industryName: 'Marine Transit Insurance',
  },
};
