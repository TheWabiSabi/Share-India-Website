import {
  FaShieldAlt,
  FaPlane,
  FaSuitcase,
  FaHospital,
  FaPassport,
  FaUserShield,
  FaGlobe,
} from 'react-icons/fa';

export const details = {
  img: 'https://minio-api.internal.wabisabitech.in/share-india/retail/travel-retail.jpg',
  hero: {
    title: 'Retail Travel Insurance Solutions',
    description:
      'Comprehensive coverage for travelers—protecting against trip cancellations, medical emergencies, baggage loss, flight delays, and travel document issues.',
  },
  explaination: {
    title: 'Understanding Retail Travel Insurance',
    description:
      'Travel insurance provides essential protection for domestic and international travelers against unforeseen events that can disrupt travel plans. Coverage addresses trip cancellations, medical emergencies abroad, lost or delayed baggage, flight disruptions, and emergency evacuations. Specialized insurance solutions protect against financial losses, medical expenses, and travel-related liabilities.',
    overview: {
      description:
        'Modern travelers face various risks including unexpected trip cancellations, medical emergencies in unfamiliar locations, baggage mishandling, and travel delays. Insurance coverage must address emergency medical treatment costs, trip interruption expenses, baggage compensation, and travel document replacement. Comprehensive travel protection is essential for safeguarding vacation investments, ensuring medical support abroad, and providing peace of mind during domestic and international journeys.',
      bullets: [
        'Trip cancellation and interruption reimbursement coverage',
        'Emergency medical treatment and evacuation protection',
        'Baggage loss, delay, and personal belongings compensation',
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaPlane className="text-blue-500" />,
          title: 'International Travel',
          description: 'Overseas trips, multi-country tours, and long-term travel',
        },
        {
          icon: <FaGlobe className="text-blue-500" />,
          title: 'Domestic Travel',
          description: 'Within-country trips, business travel, and short vacations',
        },
        {
          icon: <FaUserShield className="text-blue-500" />,
          title: 'Multi-Trip Coverage',
          description: 'Annual plans, frequent travelers, and business trips',
        },
      ],
    },
  },
  coverage: {
    desciption:
      'Comprehensive protection designed specifically for travel risks and unexpected disruptions.',
    coverages: [
      {
        title: 'Trip Cancellation & Interruption',
        icon: <FaShieldAlt className="text-3xl text-blue-500" />,
        body: 'Protection for non-refundable trip costs due to unexpected cancellations or interruptions.',
        bullets: [
          'Medical emergencies and illness before departure',
          'Family member death or serious injury coverage',
          'Natural disasters and severe weather events',
        ],
      },
      {
        title: 'Medical Emergency & Evacuation',
        icon: <FaHospital className="text-3xl text-blue-500" />,
        body: 'Coverage for medical treatment abroad and emergency transportation expenses.',
        bullets: [
          'Hospitalization and outpatient treatment costs',
          'Emergency medical evacuation and repatriation',
          'Dental treatment relief and accidental coverage',
        ],
      },
      {
        title: 'Baggage Loss & Delay',
        icon: <FaSuitcase className="text-3xl text-blue-500" />,
        body: 'Protection against lost, delayed, or damaged checked baggage and personal belongings.',
        bullets: [
          'Compensation for lost or permanently delayed baggage',
          'Essential purchase reimbursement during delays',
          'Personal belongings and electronic device coverage',
        ],
      },
      {
        title: 'Travel Document & Flight Protection',
        icon: <FaPassport className="text-3xl text-blue-500" />,
        body: 'Enhanced coverage for travel document loss and flight disruptions.',
        bullets: [
          'Lost passport replacement and emergency documentation',
          'Flight delay, cancellation, and missed connection coverage',
          'Bounced hotel and airline booking reimbursement',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped travelers recover from medical emergencies, trip cancellations, baggage loss, and flight disruption incidents.',
    topic: 'retail_travel',
  },
  relevant: {
    topic: 'retail_travel',
  },
  knowledge: {
    industryName: 'Retail Travel Insurance',
  },
};
