import { IMAGE_BASE_URL } from '@/consts/variables';
import { FaBriefcase, FaBuilding, FaLock, FaShieldAlt, FaStore, FaUsers } from 'react-icons/fa';

export const details = {
  img: `${IMAGE_BASE_URL}/blog/commercial.jpg`,
  hero: {
    title: 'Commercial Business Insurance Solutions',
    description:
      'Flexible insurance coverage for diverse commercial establishments - protecting property, people, and operations across sectors.',
  },
  explaination: {
    title: 'Understanding Commercial Business Insurance',
    description:
      'Commercial businesses that span multiple categories still face real risks - from property damage to liability claims. We offer customisable packages tailored to your specific business profile.',
    overview: {
      description:
        'Commercial establishments need adaptable protection for owned or rented premises, employees, customers, equipment, stock, revenue interruption, and theft risk.',
      bullets: [
        'Commercial property all-risk insurance',
        'Public liability insurance',
        'Business interruption insurance',
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaStore className="text-blue-500" />,
          title: 'Commercial Premises',
          description: 'Owned and rented business establishments',
        },
        {
          icon: <FaBriefcase className="text-blue-500" />,
          title: 'Service Businesses',
          description: 'Professional, local, and multi-category businesses',
        },
        {
          icon: <FaUsers className="text-blue-500" />,
          title: 'Staffed Operations',
          description: 'Businesses with employees, visitors, and public interaction',
        },
      ],
    },
  },
  coverage: {
    desciption:
      'Flexible commercial protection for property, liability, interruption, employees, theft, and staff accident exposure.',
    coverages: [
      {
        title: 'Commercial Property',
        icon: <FaBuilding className="text-3xl text-blue-500" />,
        body: 'All-risk protection for commercial premises, contents, and operating assets.',
        bullets: [
          'Commercial property all-risk insurance',
          'Premises and contents protection',
          'Owned or rented location coverage',
        ],
      },
      {
        title: 'Liability & Interruption',
        icon: <FaShieldAlt className="text-3xl text-blue-500" />,
        body: 'Coverage for third-party claims and income disruption after insured losses.',
        bullets: [
          'Public liability insurance',
          'Business interruption insurance',
          'Customer and visitor claims',
        ],
      },
      {
        title: 'Employee Protection',
        icon: <FaUsers className="text-3xl text-blue-500" />,
        body: 'Protection for employee injury and accidental harm to staff.',
        bullets: [
          "Workmen's compensation",
          'Group personal accident for staff',
          'Workforce risk support',
        ],
      },
      {
        title: 'Theft & Security Risk',
        icon: <FaLock className="text-3xl text-blue-500" />,
        body: 'Coverage for burglary, theft, and criminal loss affecting commercial operations.',
        bullets: [
          'Burglary and theft coverage',
          'Asset loss protection',
          'Security incident support',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped commercial businesses manage property, theft, liability, and interruption claims.',
    topic: 'miscellaneous_commercial',
  },
  relevant: { tagSlug: 'miscellaneous_commercial' },
  knowledge: { industryName: 'Commercial Business' },
};
