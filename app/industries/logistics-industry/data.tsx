import { IMAGE_BASE_URL } from '@/consts/variables';
import { FaTruck, FaShip, FaWarehouse, FaShieldAlt, FaBoxes } from 'react-icons/fa';

export const details = {
  img: `${IMAGE_BASE_URL}/blog/transport-cartons.jpg`,
  hero: {
    title: 'Logistics Industry Insurance Solutions',
    description:
      'Comprehensive coverage for transportation, warehousing, and supply chain operations—protecting cargo, vehicles, and logistics operations from origin to destination.',
  },
  explaination: {
    title: 'Understanding Logistics Industry Insurance',
    description:
      'Logistics operations involve complex supply chains with multiple transportation modes, warehousing facilities, and cargo handling processes. These operations face risks including cargo damage, vehicle accidents, warehouse incidents, and supply chain disruptions requiring specialized insurance coverage.',
    overview: {
      description:
        'Logistics companies manage intricate networks involving road, rail, air, and sea transportation, along with warehouse and distribution operations. Insurance coverage must address cargo protection, fleet risks, warehouse liabilities, and business interruption from supply chain disruptions. Comprehensive coverage is essential for protecting assets and maintaining operational continuity.',
      bullets: [
        'Multi-modal transportation requiring diverse coverage types',
        'Cargo protection from origin to final destination',
        'Fleet and warehouse liability exposure management',
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaTruck className="text-blue-500" />,
          title: 'Road Transportation',
          description: 'Trucking fleets, last-mile delivery, and inland transit',
        },
        {
          icon: <FaShip className="text-blue-500" />,
          title: 'Marine & Air Cargo',
          description: 'Ocean freight, air cargo, and international shipping',
        },
        {
          icon: <FaWarehouse className="text-blue-500" />,
          title: 'Warehousing & Distribution',
          description: 'Storage facilities, distribution centers, and fulfillment',
        },
      ],
    },
  },
  coverage: {
    desciption:
      'Comprehensive protection designed specifically for logistics operations and supply chain risks.',
    coverages: [
      {
        title: 'Marine Cargo Insurance',
        icon: <FaBoxes className="text-3xl text-blue-500" />,
        body: 'All-risk coverage for goods in transit by sea, air, road, and rail from origin to destination.',
        bullets: [
          'All-risk cargo protection during transit',
          'Institute Cargo Clauses A, B, and C coverage',
          'Warehouse-to-warehouse protection',
        ],
      },
      {
        title: 'Fleet & Motor Insurance',
        icon: <FaTruck className="text-3xl text-blue-500" />,
        body: 'Comprehensive coverage for commercial vehicle fleets including liability and physical damage.',
        bullets: [
          'Commercial vehicle physical damage coverage',
          'Motor third-party liability protection',
          'Fleet management and telematics integration',
        ],
      },
      {
        title: 'Warehouse & Storage Insurance',
        icon: <FaWarehouse className="text-3xl text-blue-500" />,
        body: 'Protection for warehouse facilities, stored goods, and logistics infrastructure.',
        bullets: [
          'Warehouse property and contents coverage',
          'Goods in storage and handling risks',
          'Cold storage and specialized facility protection',
        ],
      },
      {
        title: 'Carrier & Logistics Liability',
        icon: <FaShieldAlt className="text-3xl text-blue-500" />,
        body: 'Professional liability coverage for logistics providers and freight forwarders.',
        bullets: [
          'Carrier liability for cargo damage or loss',
          'Freight forwarder professional indemnity',
          'Supply chain disruption coverage',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped logistics clients recover from cargo losses, vehicle accidents, and supply chain disruptions.',
    topic: 'logistics_industry',
  },
  relevant: {
    tagSlug: 'logistics-industry',
  },
  knowledge: {
    industryName: 'Logistics Industry',
  },
};
