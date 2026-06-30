import { IMAGE_BASE_URL } from '@/consts/variables';
import { FaBoxes, FaHardHat, FaRoad, FaTruck, FaUserTie } from 'react-icons/fa';

export const details = {
  img: `${IMAGE_BASE_URL}/blog/logistics.jpg`,
  hero: {
    title: 'Transport & Infrastructure Insurance Solutions',
    description:
      'Specialized coverage for transport operators, fleet owners, and infrastructure businesses - protecting vehicles, cargo, and operations.',
  },
  explaination: {
    title: 'Understanding Transport & Infrastructure Insurance',
    description:
      'Transport and infrastructure businesses face risks from road accidents, cargo damage, third-party liability, and operational disruptions. Comprehensive coverage ensures your fleet and assets stay protected.',
    overview: {
      description:
        'Fleet operators, freight businesses, passenger transport providers, and infrastructure operators need coverage for vehicles, drivers, cargo, contractual liability, and project assets.',
      bullets: [
        'Motor fleet insurance (commercial vehicles)',
        'Cargo in-transit insurance',
        'Third-party liability',
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaTruck className="text-blue-500" />,
          title: 'Fleet Operators',
          description: 'Commercial vehicles, freight, and passenger fleets',
        },
        {
          icon: <FaBoxes className="text-blue-500" />,
          title: 'Freight & Cargo',
          description: 'Goods movement, cargo handling, and transit exposure',
        },
        {
          icon: <FaRoad className="text-blue-500" />,
          title: 'Infrastructure Operations',
          description: 'Transport-linked infrastructure and project assets',
        },
      ],
    },
  },
  coverage: {
    desciption:
      'Specialized protection for commercial vehicles, cargo movement, third-party liability, carrier obligations, drivers, and infrastructure projects.',
    coverages: [
      {
        title: 'Fleet & Vehicle Risk',
        icon: <FaTruck className="text-3xl text-blue-500" />,
        body: 'Coverage for commercial vehicles, accidents, damage, and fleet operations.',
        bullets: [
          'Motor fleet insurance (commercial vehicles)',
          'Third-party liability',
          'Commercial vehicle claim support',
        ],
      },
      {
        title: 'Cargo & Carrier Liability',
        icon: <FaBoxes className="text-3xl text-blue-500" />,
        body: 'Protection for goods in transit and legal liability as a carrier.',
        bullets: [
          'Cargo in-transit insurance',
          'Carrier legal liability',
          'Freight damage and loss coverage',
        ],
      },
      {
        title: 'Driver & Workforce',
        icon: <FaUserTie className="text-3xl text-blue-500" />,
        body: 'Coverage for drivers and transport employees exposed to operational risks.',
        bullets: [
          "Workmen's compensation for drivers",
          'Employee injury support',
          'Operational workforce protection',
        ],
      },
      {
        title: 'Infrastructure Projects',
        icon: <FaHardHat className="text-3xl text-blue-500" />,
        body: 'Project insurance for infrastructure assets and transport-related operations.',
        bullets: [
          'Infrastructure project insurance',
          'Project asset protection',
          'Operational disruption support',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped transport and infrastructure clients handle vehicle, cargo, liability, and project claims.',
    topic: 'transport_infrastructure',
  },
  relevant: {
    primary: 'transport-infrastructure',
    insights: ['blog', 'news'],
    claimStories: ['claims-story'],
  },
  knowledge: { industryName: 'Transport & Infrastructure' },
};
