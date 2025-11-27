import { IMAGE_BASE_URL } from '@/consts/variables';
import { FaUsers, FaHeartbeat, FaShieldAlt, FaUserMd } from 'react-icons/fa';

export const details = {
  img: `${IMAGE_BASE_URL}/blog/highrise.jpg`,
  hero: {
    title: 'Employee Benefits Insurance Solutions',
    description:
      'Comprehensive group insurance solutions for employee health, life, and accident coverage—attracting and retaining top talent with competitive benefits.',
  },
  explaination: {
    title: 'Understanding Employee Benefits Insurance',
    description:
      'Employee Benefits Insurance provides comprehensive coverage for your workforce, including group health, life, and personal accident insurance. These benefits help attract and retain talent while ensuring employee well-being and financial security.',
    overview: {
      description:
        'Modern employees expect comprehensive benefits packages. Group insurance provides cost-effective coverage with tax advantages for both employers and employees. Coverage includes hospitalization, life protection, accident coverage, and wellness programs, creating a secure and motivated workforce.',
      bullets: [
        'Cost-effective group coverage with lower premiums',
        'Tax benefits for employers and employees',
        'Improved employee satisfaction and retention',
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaHeartbeat className="text-blue-500" />,
          title: 'Group Health Insurance',
          description: 'Comprehensive medical coverage for employees and families',
        },
        {
          icon: <FaShieldAlt className="text-blue-500" />,
          title: 'Group Term Life',
          description: 'Life coverage providing financial security to families',
        },
        {
          icon: <FaUserMd className="text-blue-500" />,
          title: 'Group Personal Accident',
          description: '24/7 accident coverage for death and disability',
        },
      ],
    },
  },
  coverage: {
    desciption: 'Comprehensive employee benefit solutions designed for modern workplaces.',
    coverages: [
      {
        title: 'Group Health Insurance',
        icon: <FaHeartbeat className="text-3xl text-blue-500" />,
        body: 'Comprehensive medical coverage for employees and their families.',
        bullets: [
          'Hospitalization and surgical expenses',
          'Pre and post-hospitalization coverage',
          'Maternity and newborn care benefits',
        ],
      },
      {
        title: 'Group Term Life Insurance',
        icon: <FaShieldAlt className="text-3xl text-blue-500" />,
        body: 'Life coverage providing financial security to employee families.',
        bullets: [
          'Death benefit to nominee',
          'Optional critical illness coverage',
          'Flexible sum assured options',
        ],
      },
      {
        title: 'Group Personal Accident',
        icon: <FaUsers className="text-3xl text-blue-500" />,
        body: '24/7 accident coverage for employees on and off duty.',
        bullets: [
          'Accidental death and disability',
          'Medical expense reimbursement',
          'Worldwide coverage',
        ],
      },
      {
        title: 'Wellness Programs',
        icon: <FaUserMd className="text-3xl text-blue-500" />,
        body: 'Preventive healthcare and wellness initiatives for employees.',
        bullets: [
          'Annual health check-ups',
          'Wellness coaching and programs',
          'Mental health support',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped companies provide seamless employee benefits and claims support.',
    topic: 'employee_benefits_insurance',
  },
  relevant: {
    topic: 'employee_benefits_insurance',
  },
  knowledge: {
    industryName: 'Employee Benefits Insurance',
  },
};
