import { IMAGE_BASE_URL } from '@/consts/variables';
import {
  FaBoxes,
  FaBusinessTime,
  FaGlassWhiskey,
  FaLock,
  FaShieldAlt,
  FaStore,
} from 'react-icons/fa';

export const details = {
  img: `${IMAGE_BASE_URL}/blog/retail.jpg`,
  hero: {
    title: 'Retail & Showroom Insurance Solutions',
    description:
      'Complete insurance for retail stores, showrooms, and consumer businesses - covering stock, property, customers, and staff.',
  },
  explaination: {
    title: 'Understanding Retail & Showroom Insurance',
    description:
      'Retail businesses are exposed to theft, fire, customer injury claims, and stock loss. The right insurance keeps your store protected and your customers confident.',
    overview: {
      description:
        'Retail outlets and showrooms need protection for premises, display assets, customer areas, inventory, glass fronts, business revenue, and theft exposure.',
      bullets: [
        'Shop / showroom all-risk property cover',
        'Stock in trade insurance',
        'Burglary and theft coverage',
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaStore className="text-blue-500" />,
          title: 'Retail Stores',
          description: 'Clothing, electronics, general retail, and specialty stores',
        },
        {
          icon: <FaBoxes className="text-blue-500" />,
          title: 'High-Value Stock',
          description: 'Jewellery, electronics, auto, and premium inventory',
        },
        {
          icon: <FaGlassWhiskey className="text-blue-500" />,
          title: 'Showrooms',
          description: 'Display-led businesses with public footfall',
        },
      ],
    },
  },
  coverage: {
    desciption:
      'Complete protection for retail premises, stock, theft, public liability, glass, and business interruption.',
    coverages: [
      {
        title: 'Shop & Showroom Property',
        icon: <FaStore className="text-3xl text-blue-500" />,
        body: 'All-risk protection for stores, showrooms, fixtures, interiors, and business assets.',
        bullets: [
          'Shop / showroom all-risk property cover',
          'Property and contents protection',
          'Retail premises coverage',
        ],
      },
      {
        title: 'Stock & Theft',
        icon: <FaLock className="text-3xl text-blue-500" />,
        body: 'Protection for inventory loss, burglary, and theft incidents.',
        bullets: [
          'Stock in trade insurance',
          'Burglary and theft coverage',
          'Inventory loss recovery',
        ],
      },
      {
        title: 'Customer & Glass Risk',
        icon: <FaShieldAlt className="text-3xl text-blue-500" />,
        body: 'Coverage for public liability and glass damage at customer-facing locations.',
        bullets: ['Public liability insurance', 'Plate glass insurance', 'Customer injury claims'],
      },
      {
        title: 'Revenue Continuity',
        icon: <FaBusinessTime className="text-3xl text-blue-500" />,
        body: 'Support for revenue loss after insured damage interrupts trading.',
        bullets: [
          'Business interruption insurance',
          'Temporary closure support',
          'Retail recovery expenses',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped retail and showroom clients recover from stock loss, theft, fire, and liability claims.',
    topic: 'retail_showroom',
  },
  relevant: {
    primary: 'retail-showroom',
    insights: ['blog', 'news'],
    claimStories: ['claims-story'],
  },
  knowledge: { industryName: 'Retail & Showroom' },
};
