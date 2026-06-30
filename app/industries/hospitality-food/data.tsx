import { IMAGE_BASE_URL } from '@/consts/variables';
import { FaCocktail, FaFire, FaHotel, FaShieldAlt, FaStore, FaUtensils } from 'react-icons/fa';

export const details = {
  img: `${IMAGE_BASE_URL}/blog/hospitality.jpg`,
  hero: {
    title: 'Hospitality & Food Business Insurance',
    description:
      'End-to-end insurance for hotels, restaurants, cafes, cloud kitchens, and catering businesses - covering property, liability, and business interruption.',
  },
  explaination: {
    title: 'Understanding Hospitality & Food Business Insurance',
    description:
      'Hospitality and food businesses face risks from food contamination, fire, customer accidents, and reputational damage. The right coverage keeps your business running through unexpected events.',
    overview: {
      description:
        'Hotels, restaurants, cafes, cloud kitchens, and caterers need protection for guests, stock, equipment, staff, business income, and food safety incidents.',
      bullets: ['Fire and allied perils insurance', 'Public liability / food liability insurance', 'Business interruption insurance'],
    },
    projectTypes: {
      types: [
        { icon: <FaHotel className="text-blue-500" />, title: 'Hotels', description: 'Rooms, guest areas, restaurants, and amenities' },
        { icon: <FaUtensils className="text-blue-500" />, title: 'Restaurants & Cafes', description: 'Dine-in food businesses and customer-facing outlets' },
        { icon: <FaStore className="text-blue-500" />, title: 'Cloud Kitchens & Catering', description: 'Delivery kitchens, events, and catering operations' },
      ],
    },
  },
  coverage: {
    desciption: 'End-to-end protection for property, customer liability, food exposure, equipment, staff, and revenue interruption.',
    coverages: [
      { title: 'Property & Fire', icon: <FaFire className="text-3xl text-blue-500" />, body: 'Protection for premises, fixtures, interiors, and business assets.', bullets: ['Fire and allied perils insurance', 'Business interruption insurance', 'Property restoration support'] },
      { title: 'Food & Public Liability', icon: <FaShieldAlt className="text-3xl text-blue-500" />, body: 'Coverage for customer injury, food contamination, and third-party claims.', bullets: ['Public liability / food liability insurance', 'Customer accident claims', 'Food safety incident response'] },
      { title: 'Special Hospitality Risk', icon: <FaCocktail className="text-3xl text-blue-500" />, body: 'Coverage for alcohol service and hospitality-specific exposures.', bullets: ['Liquor liability (if applicable)', 'Guest and event liability', 'Reputational risk support'] },
      { title: 'Kitchen & Staff Protection', icon: <FaUtensils className="text-3xl text-blue-500" />, body: 'Coverage for kitchen equipment, employee injury, and operating disruption.', bullets: ['Machinery breakdown (kitchen equipment)', "Workmen's compensation", 'Equipment repair and replacement'] },
    ],
  },
  claim_story: { description: 'Stay updated with how SIIB helped hospitality and food clients recover from fire, food liability, and business interruption claims.', topic: 'hospitality_food' },
  relevant: {
    primary: 'hospitality-food',
    insights: ['blog', 'news'],
  },
  knowledge: { industryName: 'Hospitality & Food Business' },
};
