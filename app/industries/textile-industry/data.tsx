import {
  FaTshirt,
  FaIndustry,
  FaCut,
  FaFire,
  FaExclamationTriangle,
  FaTruck,
  FaCogs,
} from 'react-icons/fa';

export const details = {
  img: 'https://minio-api.internal.wabisabitech.in/share-india/blog/textile.jpg',
  hero: {
    title: 'Textile Industry Insurance Solutions',
    description:
      'Comprehensive coverage for textile manufacturing, garment production, and fashion retail—protecting against fire risks, equipment breakdown, and supply chain disruptions.',
  },
  explaination: {
    title: 'Understanding Textile Industry Insurance',
    description:
      'Textile manufacturing involves flammable materials, complex machinery, and global supply chains. These operations face risks including fire hazards, equipment breakdown, product liability, and international trade disruptions requiring specialized insurance coverage.',
    overview: {
      description:
        'Textile operations span from fiber production to finished garments, involving fire-prone materials and expensive machinery. Insurance must cover property risks, business interruption, product liability, and supply chain disruptions. With global sourcing and fashion industry volatility, comprehensive protection is essential.',
      bullets: [
        'High fire risk from flammable materials and processes',
        'Complex global supply chain exposure management',
        'Seasonal business fluctuations and inventory protection',
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaIndustry className="text-blue-500" />,
          title: 'Textile Manufacturing',
          description: 'Spinning, weaving, dyeing, and fabric production',
        },
        {
          icon: <FaTshirt className="text-blue-500" />,
          title: 'Garment & Apparel',
          description: 'Clothing manufacturing, fashion retail, and accessories',
        },
        {
          icon: <FaCut className="text-blue-500" />,
          title: 'Technical Textiles',
          description: 'Industrial fabrics, medical textiles, and specialty materials',
        },
      ],
    },
  },
  coverage: {
    desciption:
      'Comprehensive protection designed specifically for textile manufacturing and garment industry operations.',
    coverages: [
      {
        title: 'Fire & Property Insurance',
        icon: <FaFire className="text-3xl text-blue-500" />,
        body: 'Enhanced fire coverage for textile facilities with flammable materials and high-risk processes.',
        bullets: [
          'Fire and explosion damage coverage',
          'Raw material and finished goods protection',
          'Business interruption from fire incidents',
        ],
      },
      {
        title: 'Machinery & Equipment Breakdown',
        icon: <FaCogs className="text-3xl text-blue-500" />,
        body: 'Protection for textile machinery, looms, and production equipment against breakdown.',
        bullets: [
          'Textile machinery and loom breakdown coverage',
          'Dyeing and finishing equipment protection',
          'Production line interruption coverage',
        ],
      },
      {
        title: 'Product & Export Liability',
        icon: <FaExclamationTriangle className="text-3xl text-blue-500" />,
        body: 'Coverage for product defects, safety issues, and international trade liability.',
        bullets: [
          'Product liability and safety defect coverage',
          'Export credit and trade disruption protection',
          'Consumer injury from textile products',
        ],
      },
      {
        title: 'Supply Chain & Transit',
        icon: <FaTruck className="text-3xl text-blue-500" />,
        body: 'Protection for global supply chains, cargo in transit, and trade finance.',
        bullets: [
          'Marine cargo and transit coverage',
          'Supply chain disruption protection',
          'International trade finance insurance',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped textile industry clients recover from fire incidents, equipment failures, and supply chain disruptions.',
    topic: 'textile_industry',
  },
  relevant: {
    topic: 'textile_industry',
  },
  knowledge: {
    industryName: 'Textile Industry',
  },
};
