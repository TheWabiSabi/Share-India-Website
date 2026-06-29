import { IMAGE_BASE_URL } from '@/consts/variables';
import { FaBoxes, FaCogs, FaFire, FaShieldAlt, FaSnowflake, FaWarehouse } from 'react-icons/fa';

export const details = {
  img: `${IMAGE_BASE_URL}/blog/logistics.jpg`,
  hero: {
    title: 'Warehousing & Logistics Insurance Solutions',
    description:
      'End-to-end insurance for warehouses, storage facilities, and logistics operations - protecting stock, premises, and supply chains.',
  },
  explaination: {
    title: 'Understanding Warehousing & Logistics Insurance',
    description:
      'Warehousing and logistics businesses manage high-value inventory and complex operations. Insurance protects against stock loss, fire, flooding, liability, and business interruptions.',
    overview: {
      description:
        'Warehouse operators, 3PL providers, cold storage facilities, and distribution centres need coverage for stock, premises, machinery, employees, liability, and business continuity.',
      bullets: [
        'Warehouse stock (stock-in-storage) insurance',
        'Fire and allied perils coverage',
        'Burglary and theft insurance',
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaWarehouse className="text-blue-500" />,
          title: 'Warehouses',
          description: 'Owned warehouses and storage facilities',
        },
        {
          icon: <FaSnowflake className="text-blue-500" />,
          title: 'Cold Storage',
          description: 'Temperature-controlled storage and sensitive inventory',
        },
        {
          icon: <FaBoxes className="text-blue-500" />,
          title: '3PL & Distribution',
          description: 'Third-party logistics and distribution centres',
        },
      ],
    },
  },
  coverage: {
    desciption:
      'End-to-end protection for warehouse stock, premises, theft, liability, machinery, and business interruption.',
    coverages: [
      {
        title: 'Stock & Storage',
        icon: <FaBoxes className="text-3xl text-blue-500" />,
        body: 'Protection for inventory held in storage and logistics facilities.',
        bullets: [
          'Warehouse stock (stock-in-storage) insurance',
          'Total stock value protection',
          'Inventory loss recovery',
        ],
      },
      {
        title: 'Fire, Flood & Theft',
        icon: <FaFire className="text-3xl text-blue-500" />,
        body: 'Coverage for common warehouse loss events affecting premises and goods.',
        bullets: [
          'Fire and allied perils coverage',
          'Burglary and theft insurance',
          'Flooding and allied risk support',
        ],
      },
      {
        title: 'Liability & Operations',
        icon: <FaShieldAlt className="text-3xl text-blue-500" />,
        body: 'Protection for public, product, and operational liability exposures.',
        bullets: [
          'Public and product liability',
          'Business interruption insurance',
          'Supply chain continuity support',
        ],
      },
      {
        title: 'Warehouse Machinery',
        icon: <FaCogs className="text-3xl text-blue-500" />,
        body: 'Coverage for forklifts, conveyors, and material handling equipment.',
        bullets: [
          'Machinery breakdown (forklifts, conveyors)',
          'Equipment repair and replacement',
          'Operational downtime support',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped warehousing and logistics clients recover from stock, fire, theft, liability, and machinery claims.',
    topic: 'warehousing_logistics',
  },
  relevant: { tagSlug: 'warehousing_logistics' },
  knowledge: { industryName: 'Warehousing & Logistics' },
};
