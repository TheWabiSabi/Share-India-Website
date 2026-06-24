import { FaPlane, FaUsers, FaBriefcase, FaGlobe } from 'react-icons/fa';

export const details = {
  img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80',
  hero: {
    title: 'Group Travel Insurance Plans',
    description:
      'Comprehensive travel insurance for corporate groups and business travelers—protecting against medical emergencies, trip cancellations, and travel disruptions worldwide.',
  },
  explaination: {
    title: 'Understanding Group Travel Insurance',
    description:
      'Group Travel Insurance provides cost-effective coverage for multiple travelers under a single policy. Ideal for corporate travel, business trips, and employee delegations with comprehensive protection for medical emergencies, trip disruptions, and baggage issues.',
    overview: {
      description:
        'Corporate travel requires comprehensive protection for employees traveling domestically and internationally. Group Travel Insurance offers medical emergency coverage, trip cancellation protection, baggage loss coverage, and 24/7 assistance. Annual multi-trip policies provide unlimited trips within a year, ideal for frequent business travelers.',
      bullets: [
        'Cost-effective coverage for multiple travelers',
        'Medical emergencies and evacuation coverage',
        'Trip cancellation and baggage protection',
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaBriefcase className="text-blue-500" />,
          title: 'Business Travel',
          description: 'Corporate employees traveling for work purposes',
        },
        {
          icon: <FaGlobe className="text-blue-500" />,
          title: 'International Travel',
          description: 'Overseas business trips and conferences',
        },
        {
          icon: <FaUsers className="text-blue-500" />,
          title: 'Group Delegations',
          description: 'Team travel and corporate events',
        },
      ],
    },
  },
  coverage: {
    desciption: 'Comprehensive protection designed for corporate and group travel.',
    coverages: [
      {
        title: 'Medical Emergency Coverage',
        icon: <FaPlane className="text-3xl text-blue-500" />,
        body: 'Comprehensive medical coverage during travel abroad.',
        bullets: [
          'Emergency medical treatment',
          'Medical evacuation and repatriation',
          'Hospital cash allowance',
        ],
      },
      {
        title: 'Trip Cancellation & Interruption',
        icon: <FaBriefcase className="text-3xl text-blue-500" />,
        body: 'Protection against trip cancellation and interruption costs.',
        bullets: [
          'Non-refundable ticket costs',
          'Hotel and accommodation losses',
          'Emergency return expenses',
        ],
      },
      {
        title: 'Baggage & Personal Effects',
        icon: <FaUsers className="text-3xl text-blue-500" />,
        body: 'Coverage for lost, delayed, or damaged baggage.',
        bullets: [
          'Lost or delayed baggage compensation',
          'Personal belongings coverage',
          'Emergency purchase reimbursement',
        ],
      },
      {
        title: 'Annual Multi-Trip Coverage',
        icon: <FaGlobe className="text-3xl text-blue-500" />,
        body: 'Unlimited trips within a year under single policy.',
        bullets: [
          'Multiple trips covered annually',
          'Simplified policy management',
          'Cost-effective for frequent travelers',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped corporate travelers with medical emergencies and trip disruptions.',
    topic: 'group_travel_insurance',
  },
  relevant: {
    tagSlug: 'group-travel-insurance',
  },
  knowledge: {
    industryName: 'Group Travel Insurance',
  },
};
