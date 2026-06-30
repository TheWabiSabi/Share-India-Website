import { IMAGE_BASE_URL } from '@/consts/variables';
import {
  FaBuilding,
  FaCogs,
  FaExclamationTriangle,
  FaHardHat,
  FaPlug,
  FaRoad,
  FaUserShield,
} from 'react-icons/fa';

export const details = {
  img: `${IMAGE_BASE_URL}/blog/construction.jpg`,
  hero: {
    title: 'Infrastructure Industry Insurance Solutions',
    description:
      'Comprehensive coverage for roads, bridges, power plants, and smart city projects—protecting critical infrastructure investments from construction to operation.',
  },
  explaination: {
    title: 'Understanding Infrastructure Industry Insurance',
    description:
      'Infrastructure development is the backbone of economic growth, involving massive investments in roads, bridges, power plants, airports, and smart city projects. These projects face unique risks requiring specialized insurance solutions.',
    overview: {
      description:
        'Infrastructure projects involve complex engineering, long construction periods, multiple stakeholders, and significant public interest. They require comprehensive risk management covering construction risks, performance guarantees, environmental liabilities, and long-term operational risks. Insurance plays a crucial role in project financing and risk allocation.',
      bullets: [
        'Multi-year projects with complex risk profile',
        'Public-private partnerships requiring specialized coverage',
        'Performance guarantees essential for project completion',
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaRoad className="text-blue-500" />,
          title: 'Transportation Infrastructure',
          description: 'Roads, highways, bridges, and tunnels',
        },
        {
          icon: <FaPlug className="text-blue-500" />,
          title: 'Power & Energy',
          description: 'Power plants, transmission lines, and renewable energy',
        },
        {
          icon: <FaBuilding className="text-blue-500" />,
          title: 'Urban Infrastructure',
          description: 'Smart cities, metro systems, and airports',
        },
      ],
    },
  },
  coverage: {
    desciption:
      'Comprehensive protection designed specifically for infrastructure projects and operations.',
    coverages: [
      {
        title: 'Contractors All Risk (CAR)',
        icon: <FaHardHat className="text-3xl text-blue-500" />,
        body: 'Comprehensive coverage for construction phase including material damage and third-party liability.',
        bullets: [
          'Material damage during construction',
          'Natural catastrophe and weather damage',
          'Third-party liability and property damage',
        ],
      },
      {
        title: 'Erection All Risk (EAR)',
        icon: <FaCogs className="text-3xl text-blue-500" />,
        body: 'Specialized coverage for mechanical and electrical installation and commissioning.',
        bullets: [
          'Machinery and equipment installation',
          'Testing and commissioning coverage',
          'Maintenance period protection',
        ],
      },
      {
        title: 'Professional Indemnity & Performance',
        icon: <FaUserShield className="text-3xl text-blue-500" />,
        body: 'Protection against design errors and performance guarantee requirements.',
        bullets: [
          'Design and engineering errors coverage',
          'Performance guarantee insurance',
          'Advance payment guarantee protection',
        ],
      },
      {
        title: 'Delay in Start-up & Business Interruption',
        icon: <FaExclamationTriangle className="text-3xl text-blue-500" />,
        body: 'Coverage for project delays and revenue loss during construction and operation.',
        bullets: [
          'Delay in start-up coverage',
          'Business interruption protection',
          'Loss of revenue during delays',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped infrastructure clients recover from project delays, construction losses, and unforeseen risks.',
    topic: 'infrastructure_industry',
  },
  relevant: {
    primary: 'infrastructure-industry',
    insights: ['blog', 'news'],
  },
  knowledge: {
    industryName: 'Infrastructure Industry',
  },
};
