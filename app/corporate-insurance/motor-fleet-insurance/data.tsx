import { FaTruck, FaCar, FaShieldAlt, FaTools } from 'react-icons/fa';

export const details = {
  img: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80',
  hero: {
    title: 'Motor Fleet Insurance Solutions',
    description:
      'Comprehensive fleet insurance for commercial vehicles—protecting multiple vehicles under single policy with cost savings and simplified management.',
  },
  explaination: {
    title: 'Understanding Motor Fleet Insurance',
    description:
      'Motor Fleet Insurance provides comprehensive coverage for businesses operating multiple vehicles. Single policy covers all vehicles with discounted premiums, centralized management, and flexible add-ons.',
    overview: {
      description:
        'Businesses with multiple vehicles benefit from fleet insurance offering cost savings, simplified administration, and comprehensive coverage. Blanket policies allow easy addition/removal of vehicles. Coverage includes own damage, third-party liability, driver training, GPS tracking, and breakdown assistance.',
      bullets: [
        'Discounted premiums for multiple vehicles',
        'Centralized policy management',
        'Flexible vehicle addition and removal',
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaTruck className="text-blue-500" />,
          title: 'Commercial Vehicles',
          description: 'Trucks, vans, and goods carriers',
        },
        {
          icon: <FaCar className="text-blue-500" />,
          title: 'Corporate Cars',
          description: 'Company cars and executive vehicles',
        },
        {
          icon: <FaTools className="text-blue-500" />,
          title: 'Service Vehicles',
          description: 'Maintenance and service fleet',
        },
      ],
    },
  },
  coverage: {
    desciption: 'Comprehensive protection designed for commercial vehicle fleets.',
    coverages: [
      {
        title: 'Own Damage Coverage',
        icon: <FaCar className="text-3xl text-blue-500" />,
        body: 'Protection for vehicle damage from accidents and perils.',
        bullets: [
          'Accident and collision damage',
          'Fire, theft, and natural disasters',
          'Vandalism and malicious damage',
        ],
      },
      {
        title: 'Third-Party Liability',
        icon: <FaShieldAlt className="text-3xl text-blue-500" />,
        body: 'Mandatory coverage for third-party claims.',
        bullets: [
          'Third-party bodily injury',
          'Third-party property damage',
          'Legal liability coverage',
        ],
      },
      {
        title: 'Fleet Management Add-ons',
        icon: <FaTools className="text-3xl text-blue-500" />,
        body: 'Enhanced coverage and fleet management services.',
        bullets: [
          'GPS tracking and telematics',
          'Driver training programs',
          '24/7 breakdown assistance',
        ],
      },
      {
        title: 'Blanket Policy Coverage',
        icon: <FaTruck className="text-3xl text-blue-500" />,
        body: 'Flexible policy for easy fleet management.',
        bullets: [
          'Single policy for all vehicles',
          'Easy vehicle addition/removal',
          'Simplified claims process',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped fleet operators manage vehicle claims and minimize downtime.',
    topic: 'motor_fleet_insurance',
  },
  relevant: {
    tagSlug: 'motor-fleet-insurance',
  },
  knowledge: {
    industryName: 'Motor Fleet Insurance',
  },
};
