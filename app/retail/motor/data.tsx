import { IMAGE_BASE_URL } from '@/consts/variables';
import { FaCar, FaShieldAlt, FaWrench, FaUserShield, FaRoad, FaAmbulance } from 'react-icons/fa';

export const details = {
  img: `${IMAGE_BASE_URL}/retail/car-retail.jpg`,
  hero: {
    title: 'Retail Motor Insurance Solutions',
    description:
      'Comprehensive coverage for individual vehicle owners—protecting against accidents, theft, third-party liability, natural disasters, and roadside emergencies.',
  },
  explaination: {
    title: 'Understanding Retail Motor Insurance',
    description:
      'Vehicle owners face numerous risks on the road including accidents, theft, natural calamities, and third-party liability claims. Motor insurance provides essential financial protection against vehicle damage, medical expenses, legal liabilities, and unexpected repair costs. Specialized coverage solutions ensure peace of mind and compliance with mandatory insurance regulations.',
    overview: {
      description:
        'Motor insurance protects vehicle owners from financial losses due to accidents, theft, fire, natural disasters, and third-party bodily injury or property damage claims. Coverage options include comprehensive protection, third-party liability, own damage, personal accident benefits, and add-on covers for enhanced security. Adequate motor insurance is essential for legal compliance, financial protection, and hassle-free claim settlements.',
      bullets: [
        'Own damage and comprehensive vehicle protection coverage',
        'Third-party liability for bodily injury and property damage',
        'Personal accident cover and roadside assistance benefits',
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaCar className="text-blue-500" />,
          title: 'Private Cars & Sedans',
          description: 'Personal vehicles, family cars, and private sedans',
        },
        {
          icon: <FaRoad className="text-blue-500" />,
          title: 'Two-Wheelers & Bikes',
          description: 'Motorcycles, scooters, and two-wheeler vehicles',
        },
        {
          icon: <FaShieldAlt className="text-blue-500" />,
          title: 'Commercial Vehicles',
          description: 'Taxis, goods carriers, and commercial transport vehicles',
        },
      ],
    },
  },
  coverage: {
    desciption:
      'Comprehensive protection designed specifically for motor vehicle risks and on-road emergencies.',
    coverages: [
      {
        title: 'Own Damage & Comprehensive Cover',
        icon: <FaShieldAlt className="text-3xl text-blue-500" />,
        body: 'Protection against damage to your vehicle from accidents, theft, fire, and natural disasters.',
        bullets: [
          'Accidental damage and collision coverage',
          'Theft, fire, and natural calamity protection',
          'Vandalism and malicious damage coverage',
        ],
      },
      {
        title: 'Third-Party Liability Coverage',
        icon: <FaUserShield className="text-3xl text-blue-500" />,
        body: 'Mandatory coverage for third-party bodily injury, death, and property damage claims.',
        bullets: [
          'Third-party bodily injury and death liability',
          'Third-party property damage coverage',
          'Legal defense and settlement costs',
        ],
      },
      {
        title: 'Personal Accident & Medical Cover',
        icon: <FaAmbulance className="text-3xl text-blue-500" />,
        body: 'Protection for driver and passengers against accidental injuries and medical expenses.',
        bullets: [
          'Owner-driver personal accident cover',
          'Passenger medical expense coverage',
          'Disability and death benefit compensation',
        ],
      },
      {
        title: 'Add-On Covers & Assistance',
        icon: <FaWrench className="text-3xl text-blue-500" />,
        body: 'Enhanced coverage with zero depreciation, engine protection, and roadside assistance.',
        bullets: [
          'Zero depreciation and bumper-to-bumper cover',
          'Engine and gearbox protection coverage',
          'Roadside assistance and towing services',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped retail motor insurance clients recover from accidents, theft incidents, and third-party liability claims.',
    topic: 'motor_retail',
  },
  relevant: {
    topic: 'motor_retail',
  },
  knowledge: {
    industryName: 'Retail Motor Insurance',
  },
};
