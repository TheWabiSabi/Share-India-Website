import { IMAGE_BASE_URL } from '@/consts/variables';
import { FaBoxes, FaCogs, FaFire, FaIndustry, FaShieldAlt, FaTruck } from 'react-icons/fa';

export const details = {
  img: `${IMAGE_BASE_URL}/blog/manufacturing.jpg`,
  hero: {
    title: 'Manufacturing Industry Insurance Solutions',
    description:
      'Comprehensive protection for factories, production plants, and manufacturing units - covering machinery, stock, workers, and liability.',
  },
  explaination: {
    title: 'Understanding Manufacturing Industry Insurance',
    description:
      'Manufacturing businesses face risks from machinery breakdowns, fire, product liability, and supply chain disruptions. Robust insurance keeps your plant operational and your business protected.',
    overview: {
      description:
        'Factories and production units need coverage for industrial property, machinery, products, workers, business income, raw material, finished stock, and goods in transit.',
      bullets: ['Industrial all-risk / fire and allied perils', 'Machinery breakdown insurance', 'Product liability insurance'],
    },
    projectTypes: {
      types: [
        { icon: <FaIndustry className="text-blue-500" />, title: 'Factories & Plants', description: 'Production facilities, utilities, and industrial premises' },
        { icon: <FaCogs className="text-blue-500" />, title: 'Machinery-Driven Units', description: 'Equipment-intensive manufacturing operations' },
        { icon: <FaBoxes className="text-blue-500" />, title: 'Stock & Supply Chains', description: 'Raw materials, finished goods, and transit exposure' },
      ],
    },
  },
  coverage: {
    desciption: 'Comprehensive protection for manufacturing assets, machinery, products, workers, interruption, and cargo movement.',
    coverages: [
      { title: 'Industrial Property', icon: <FaFire className="text-3xl text-blue-500" />, body: 'Protection against fire, allied perils, and physical loss to industrial assets.', bullets: ['Industrial all-risk / fire and allied perils', 'Stock and plant protection', 'Factory property coverage'] },
      { title: 'Machinery & Operations', icon: <FaCogs className="text-3xl text-blue-500" />, body: 'Coverage for sudden machinery breakdown and operational disruption.', bullets: ['Machinery breakdown insurance', 'Business interruption insurance', 'Repair and replacement support'] },
      { title: 'Product & Worker Liability', icon: <FaShieldAlt className="text-3xl text-blue-500" />, body: 'Protection for product-related claims and employee injuries.', bullets: ['Product liability insurance', "Workmen's compensation", 'Manufacturing liability claims'] },
      { title: 'Transit & Supply Chain', icon: <FaTruck className="text-3xl text-blue-500" />, body: 'Coverage for goods moving through suppliers, plants, warehouses, and customers.', bullets: ['Marine / cargo insurance for goods in transit', 'Supply chain disruption support', 'Finished goods movement protection'] },
    ],
  },
  claim_story: { description: 'Stay updated with how SIIB helped manufacturing clients recover from fire, machinery, product liability, and cargo claims.', topic: 'manufacturing' },
  relevant: {
    primary: 'manufacturing',
    insights: ['blog', 'news'],
  },
  knowledge: { industryName: 'Manufacturing Industry' },
};
