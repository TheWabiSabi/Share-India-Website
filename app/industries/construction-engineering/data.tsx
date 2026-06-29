import { IMAGE_BASE_URL } from '@/consts/variables';
import {
  FaBuilding,
  FaCogs,
  FaExclamationTriangle,
  FaHardHat,
  FaShieldAlt,
  FaTools,
} from 'react-icons/fa';
import { InfrastructureInsuranceDetails } from '../main.interface';

export const details: InfrastructureInsuranceDetails = {
  img: `${IMAGE_BASE_URL}/blog/construction.jpg`,
  hero: {
    title: 'Construction & Engineering Insurance Solutions',
    description:
      'Comprehensive coverage for construction sites, civil engineering projects, and contracting businesses - from groundbreaking to handover.',
  },
  explaination: {
    title: 'Understanding Construction & Engineering Insurance',
    description:
      'Construction and engineering businesses face risks from project delays, worksite accidents, equipment damage, and third-party liabilities. Tailored insurance ensures your projects stay protected at every stage.',
    overview: {
      description:
        'Project owners, contractors, and engineers need protection across planning, construction, installation, testing, and handover. A structured insurance program helps control losses from site incidents, damaged machinery, design exposure, and public liability claims.',
      bullets: [
        'Contractor All Risks (CAR) insurance',
        'Erection All Risks (EAR) coverage',
        "Workmen's Compensation insurance",
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaBuilding className="text-blue-500" />,
          title: 'Residential & Commercial',
          description: 'Buildings, complexes, offices, and mixed-use developments',
        },
        {
          icon: <FaHardHat className="text-blue-500" />,
          title: 'Infrastructure Projects',
          description: 'Roads, bridges, utilities, and public works',
        },
        {
          icon: <FaCogs className="text-blue-500" />,
          title: 'Industrial Engineering',
          description: 'Plants, installations, testing, and commissioning',
        },
      ],
    },
  },
  coverage: {
    desciption:
      'Comprehensive protection for construction sites, engineering projects, workers, machinery, and third-party liabilities.',
    coverages: [
      {
        title: 'CAR & EAR Coverage',
        icon: <FaHardHat className="text-3xl text-blue-500" />,
        body: 'Protection for civil works, erection, installation, testing, and commissioning phases.',
        bullets: [
          'Contractor All Risks (CAR) insurance',
          'Erection All Risks (EAR) coverage',
          'Project duration and handover protection',
        ],
      },
      {
        title: 'Worker & Public Liability',
        icon: <FaShieldAlt className="text-3xl text-blue-500" />,
        body: 'Coverage for worksite injuries and third-party claims arising from project activity.',
        bullets: [
          "Workmen's Compensation insurance",
          'Third-party public liability',
          'Site accident claim support',
        ],
      },
      {
        title: 'Equipment Protection',
        icon: <FaTools className="text-3xl text-blue-500" />,
        body: 'Insurance for heavy machinery, equipment breakdown, and operational interruption.',
        bullets: [
          'Equipment breakdown insurance',
          'Heavy machinery risk protection',
          'Repair and replacement cost support',
        ],
      },
      {
        title: 'Professional Indemnity',
        icon: <FaExclamationTriangle className="text-3xl text-blue-500" />,
        body: 'Protection for engineering errors, design exposures, and professional liability claims.',
        bullets: [
          'Professional indemnity for engineers',
          'Design and consultancy liability',
          'Contractual risk protection',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped construction and engineering clients recover from worksite losses, equipment damage, and liability claims.',
    topic: 'construction_engineering',
  },
  relevant: { tagSlug: 'construction_engineering' },
  knowledge: { industryName: 'Construction & Engineering' },
};
