import { FaStore, FaGem, FaShieldAlt, FaTruck } from 'react-icons/fa';

export const details = {
  img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80',
  hero: {
    title: 'Shopkeepers & Jewellers Block Insurance',
    description:
      'Specialized coverage for retail shops and jewellery businesses—protecting stock, premises, and valuables with comprehensive all-risk protection.',
  },
  explaination: {
    title: 'Understanding Shopkeepers & Jewellers Insurance',
    description:
      'Shopkeepers Package and Jewellers Block Insurance provide specialized protection for retail businesses. Coverage includes stock, premises, equipment, and unique risks faced by jewellers including transit, exhibitions, and mysterious disappearance.',
    overview: {
      description:
        'Retail businesses face unique risks requiring specialized coverage. Shopkeepers Package combines building, stock, and liability coverage. Jewellers Block provides all-risk protection for precious items in premises, transit, exhibitions, and even with customers on approval, with coverage for mysterious disappearance.',
      bullets: [
        'Comprehensive stock and premises coverage',
        'All-risk protection for jewellery and valuables',
        'Coverage during transit and exhibitions',
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaStore className="text-blue-500" />,
          title: 'Retail Shops',
          description: 'General merchandise, electronics, and specialty stores',
        },
        {
          icon: <FaGem className="text-blue-500" />,
          title: 'Jewellery Stores',
          description: 'Gold, diamond, and precious stone retailers',
        },
        {
          icon: <FaTruck className="text-blue-500" />,
          title: 'Transit & Exhibitions',
          description: 'Coverage during transport and trade shows',
        },
      ],
    },
  },
  coverage: {
    desciption: 'Specialized protection designed for retail and jewellery businesses.',
    coverages: [
      {
        title: 'Shopkeepers Package Policy',
        icon: <FaStore className="text-3xl text-blue-500" />,
        body: 'Comprehensive coverage for retail shop operations.',
        bullets: [
          'Building, stock, and furniture coverage',
          'Fire, theft, and burglary protection',
          'Public liability coverage',
        ],
      },
      {
        title: 'Jewellers Block Insurance',
        icon: <FaGem className="text-3xl text-blue-500" />,
        body: 'All-risk coverage for jewellery and precious items.',
        bullets: [
          'Stock in premises and safe',
          'Transit and exhibition coverage',
          'Mysterious disappearance protection',
        ],
      },
      {
        title: 'Stock Declaration Policy',
        icon: <FaShieldAlt className="text-3xl text-blue-500" />,
        body: 'Flexible coverage based on monthly stock declarations.',
        bullets: [
          'Monthly stock value declarations',
          'Premium based on actual stock',
          'Adequate coverage throughout year',
        ],
      },
      {
        title: 'Transit & Exhibition Cover',
        icon: <FaTruck className="text-3xl text-blue-500" />,
        body: 'Protection during transportation and trade shows.',
        bullets: [
          'Transit to/from suppliers and customers',
          'Exhibition and trade show coverage',
          'Goods on approval with customers',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped shopkeepers and jewellers recover from theft, fire, and transit losses.',
    topic: 'shopkeepers_jewellers_insurance',
  },
  relevant: {
    topic: 'shopkeepers_jewellers_insurance',
  },
  knowledge: {
    industryName: 'Shopkeepers & Jewellers Insurance',
  },
};
