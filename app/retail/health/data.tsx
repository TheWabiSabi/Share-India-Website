import { IMAGE_BASE_URL } from '@/consts/variables';
import {
  FaHospital,
  FaUserMd,
  FaHeartbeat,
  FaPills,
  FaAmbulance,
  FaHandHoldingMedical,
} from 'react-icons/fa';

export const details = {
  img: `${IMAGE_BASE_URL}/retail/health-retail.jpg`,
  hero: {
    title: 'Retail Health Insurance Solutions',
    description:
      'Comprehensive coverage for individuals and families—protecting against medical expenses, hospitalization costs, critical illnesses, and preventive care needs.',
  },
  explaination: {
    title: 'Understanding Retail Health Insurance',
    description:
      'Individual and family health insurance provides essential financial protection against rising healthcare costs, medical emergencies, and chronic disease management. Modern health plans cover hospitalization expenses, pre and post-hospitalization care, daycare procedures, and preventive health check-ups. Specialized insurance solutions protect against unexpected medical bills, critical illness diagnosis, and long-term healthcare needs.',
    overview: {
      description:
        'Healthcare costs continue to rise, making comprehensive health insurance essential for financial security and access to quality medical care. Insurance coverage must address hospitalization expenses, surgical procedures, diagnostic tests, prescription medications, and critical illness treatment. Comprehensive health protection ensures peace of mind, timely medical intervention, and protection against catastrophic healthcare expenses.',
      bullets: [
        'Hospitalization and surgical expense coverage',
        'Critical illness and disease-specific protection',
        'Preventive care and wellness benefit programs',
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaUserMd className="text-blue-500" />,
          title: 'Individual Health Plans',
          description: 'Personal coverage, young adult plans, and senior citizen policies',
        },
        {
          icon: <FaHeartbeat className="text-blue-500" />,
          title: 'Family Floater Plans',
          description:
            'Multi-member coverage, shared sum insured, and comprehensive family protection',
        },
        {
          icon: <FaAmbulance className="text-blue-500" />,
          title: 'Critical Illness & Top-Up',
          description: 'Disease-specific coverage, super top-up plans, and enhanced protection',
        },
      ],
    },
  },
  coverage: {
    desciption:
      'Comprehensive protection designed specifically for individual and family healthcare needs.',
    coverages: [
      {
        title: 'Hospitalization & Surgery Coverage',
        icon: <FaHospital className="text-3xl text-blue-500" />,
        body: 'Protection against inpatient hospitalization and surgical procedure expenses.',
        bullets: [
          'Room rent, ICU charges, and nursing expenses',
          'Surgical procedures and anesthesia costs',
          'Pre and post-hospitalization medical expenses',
        ],
      },
      {
        title: 'Critical Illness Protection',
        icon: <FaHeartbeat className="text-3xl text-blue-500" />,
        body: 'Coverage for specified critical illnesses and major disease diagnosis.',
        bullets: [
          'Cancer, heart attack, and stroke coverage',
          'Lump-sum benefit upon diagnosis',
          'Organ transplant and major surgery expenses',
        ],
      },
      {
        title: 'Daycare & OPD Benefits',
        icon: <FaPills className="text-3xl text-blue-500" />,
        body: 'Protection for daycare procedures and outpatient department treatments.',
        bullets: [
          'Daycare surgeries and procedures',
          'Diagnostic tests and pathology expenses',
          'OPD consultation and medicine costs',
        ],
      },
      {
        title: 'Wellness & Preventive Care',
        icon: <FaHandHoldingMedical className="text-3xl text-blue-500" />,
        body: 'Enhanced coverage for preventive health check-ups and wellness programs.',
        bullets: [
          'Annual health check-ups and screenings',
          'Vaccination and immunization coverage',
          'Wellness rewards and premium discounts',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped retail clients manage hospitalization claims, critical illness treatments, and emergency medical expenses.',
    topic: 'retail_health',
  },
  relevant: {
    tagSlug: 'retail-health',
  },
  knowledge: {
    industryName: 'Retail Health Insurance',
  },
};
