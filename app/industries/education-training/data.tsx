import { IMAGE_BASE_URL } from '@/consts/variables';
import {
  FaBookOpen,
  FaBuilding,
  FaChalkboardTeacher,
  FaLaptop,
  FaShieldAlt,
  FaUserGraduate,
} from 'react-icons/fa';

export const details = {
  img: `${IMAGE_BASE_URL}/blog/education.jpg`,
  hero: {
    title: 'Education & Training Institution Insurance',
    description:
      'Protecting schools, colleges, coaching centres, and training institutes - covering students, staff, and infrastructure.',
  },
  explaination: {
    title: 'Understanding Education & Training Insurance',
    description:
      'Educational institutions manage high foot traffic, valuable assets, and duty-of-care obligations. Insurance coverage safeguards against accidents, property damage, and liability claims.',
    overview: {
      description:
        'Schools, colleges, coaching centres, and training institutes need protection for premises, students, staff, digital platforms, and leadership decisions. A tailored program helps maintain continuity and trust.',
      bullets: [
        'Building and contents insurance',
        'Student personal accident cover',
        'Public liability insurance',
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaUserGraduate className="text-blue-500" />,
          title: 'Schools & Colleges',
          description: 'Campuses, classrooms, labs, and student facilities',
        },
        {
          icon: <FaChalkboardTeacher className="text-blue-500" />,
          title: 'Coaching & Vocational',
          description: 'Coaching centres, skill programs, and training academies',
        },
        {
          icon: <FaLaptop className="text-blue-500" />,
          title: 'Online & Hybrid Learning',
          description: 'Digital platforms, data, and remote learning operations',
        },
      ],
    },
  },
  coverage: {
    desciption:
      'Coverage for educational premises, students, staff, management liability, and digital learning exposure.',
    coverages: [
      {
        title: 'Property Protection',
        icon: <FaBuilding className="text-3xl text-blue-500" />,
        body: 'Insurance for campus buildings, contents, equipment, and learning infrastructure.',
        bullets: [
          'Building and contents insurance',
          'Fire and allied perils protection',
          'Asset and equipment coverage',
        ],
      },
      {
        title: 'Student & Public Safety',
        icon: <FaShieldAlt className="text-3xl text-blue-500" />,
        body: 'Coverage for student accidents and third-party claims on institutional premises.',
        bullets: [
          'Student personal accident cover',
          'Public liability insurance',
          'Visitor and campus safety claims',
        ],
      },
      {
        title: 'Management & Staff',
        icon: <FaBookOpen className="text-3xl text-blue-500" />,
        body: 'Protection for institutional leadership and employees.',
        bullets: [
          'Directors & Officers (D&O) liability',
          "Workmen's compensation for staff",
          'Employment-related risk support',
        ],
      },
      {
        title: 'Digital Learning Risk',
        icon: <FaLaptop className="text-3xl text-blue-500" />,
        body: 'Cyber protection for online education platforms and student data.',
        bullets: [
          'Cyber liability for digital learning platforms',
          'Data breach response',
          'Online operation continuity',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped education clients manage property, accident, cyber, and liability claims.',
    topic: 'education_training',
  },
  relevant: {
    primary: 'education-training',
    insights: ['blog', 'news'],
  },
  knowledge: { industryName: 'Education & Training' },
};
