import { IMAGE_BASE_URL } from '@/consts/variables';
import {
  FaSolarPanel,
  FaBolt,
  FaTools,
  FaExclamationTriangle,
  FaCogs,
  FaHome,
} from 'react-icons/fa';

export const details = {
  img: `${IMAGE_BASE_URL}/blog/solar-panel.jpg`,
  hero: {
    title: 'Solar Industry Insurance Solutions',
    description:
      'Comprehensive coverage for solar installations, manufacturing, and operations—protecting renewable energy investments from weather damage, equipment failure, and performance risks.',
  },
  explaination: {
    title: 'Understanding Solar Industry Insurance',
    description:
      'Solar energy projects involve significant capital investments in equipment exposed to weather elements for decades. These installations require specialized insurance covering equipment damage, performance guarantees, installation risks, and long-term operational protection against natural catastrophes and equipment failure.',
    overview: {
      description:
        'Solar projects face unique risks from installation through 25+ year operational periods. Coverage must address weather damage, equipment failure, performance shortfalls, and installation accidents. With rapid industry growth and evolving technology, comprehensive insurance is essential for protecting investments and ensuring project viability.',
      bullets: [
        'Long-term equipment exposure to weather and environmental risks',
        'Performance guarantee requirements for energy generation',
        'Installation and commissioning phase accident protection',
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaSolarPanel className="text-blue-500" />,
          title: 'Utility-Scale Solar',
          description: 'Large solar farms, grid-connected installations, and power plants',
        },
        {
          icon: <FaHome className="text-blue-500" />,
          title: 'Commercial & Residential',
          description: 'Rooftop installations, distributed solar, and microgrids',
        },
        {
          icon: <FaCogs className="text-blue-500" />,
          title: 'Manufacturing & Components',
          description: 'Solar panel production, inverters, and component manufacturing',
        },
      ],
    },
  },
  coverage: {
    desciption:
      'Comprehensive protection designed specifically for solar energy projects and renewable energy operations.',
    coverages: [
      {
        title: 'Solar Equipment & Property',
        icon: <FaSolarPanel className="text-3xl text-blue-500" />,
        body: 'All-risk coverage for solar panels, inverters, and installation equipment against weather and damage.',
        bullets: [
          'Solar panel and inverter damage coverage',
          'Weather-related damage protection (hail, wind, storm)',
          'Theft and vandalism of equipment',
        ],
      },
      {
        title: 'Performance & Energy Yield',
        icon: <FaBolt className="text-3xl text-blue-500" />,
        body: 'Protection against underperformance and energy generation shortfalls affecting revenue.',
        bullets: [
          'Performance ratio guarantee insurance',
          'Energy yield shortfall coverage',
          'Equipment efficiency degradation protection',
        ],
      },
      {
        title: 'Installation & Construction',
        icon: <FaTools className="text-3xl text-blue-500" />,
        body: 'Coverage for installation risks, construction accidents, and commissioning phase protection.',
        bullets: [
          'Installation accident and injury coverage',
          'Construction all-risk during build phase',
          'Commissioning and testing protection',
        ],
      },
      {
        title: 'Business Interruption & Revenue',
        icon: <FaExclamationTriangle className="text-3xl text-blue-500" />,
        body: 'Protection against revenue loss from equipment failure and operational interruptions.',
        bullets: [
          'Lost revenue from equipment downtime',
          'Business interruption from natural disasters',
          'Grid connection delay coverage',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped solar industry clients recover from weather damage, equipment failures, and performance shortfalls.',
    topic: 'solar_industry',
  },
  relevant: {
    primary: 'solar-industry',
    insights: ['blog', 'news'],
    claimStories: ['claims-story'],
  },
  knowledge: {
    industryName: 'Solar Industry',
  },
};
