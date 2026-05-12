import React from 'react';
import {
  FaHeart,
  FaCar,
  FaHome,
  FaUmbrella,
  FaUserMd,
  FaCertificate,
  FaUsers,
  FaHandHoldingHeart,
  FaGraduationCap,
  FaFire,
  FaLock,
} from 'react-icons/fa';

export const STATS = [
  { icon: <FaCertificate />, title: 'IRDA Registered', desc: 'Licensed insurance broker' },
  {
    icon: <FaUsers />,
    title: '30+ Years Experience',
    desc: 'Group experience in financial services',
  },
  {
    icon: <FaHandHoldingHeart />,
    title: '100% Claims Assistance',
    desc: 'Complete support throughout claims',
  },
];

export const CORE_COVERAGE = [
  {
    icon: <FaHeart className="h-5 w-5" />,
    title: 'Life Insurance',
    description: "Secure your family's financial future with comprehensive life coverage plans.",
    listItems: [
      'Term Life Insurance for maximum coverage',
      'Endowment Plans with savings component',
      'ULIP Plans for investment and protection',
    ],
  },
  {
    icon: <FaUserMd className="h-5 w-5" />,
    title: 'Health Insurance',
    description: 'Comprehensive health coverage for you and your loved ones.',
    listItems: [
      'Individual Health Plans tailored for you',
      'Family Floater Plans for complete family',
      'Critical Illness Cover for major diseases',
    ],
  },
  {
    icon: <FaCar className="h-5 w-5" />,
    title: 'Motor Insurance',
    description: 'Complete protection for your vehicles with comprehensive coverage.',
    listItems: [
      'Car Insurance with comprehensive coverage',
      'Two Wheeler Insurance for bikes',
      'Commercial Vehicle insurance for business',
    ],
  },
  {
    icon: <FaHome className="h-5 w-5" />,
    title: 'Home Insurance',
    description: 'Protect your home against fire, theft, and natural disasters.',
    listItems: [
      'Structure Protection against damages',
      'Contents Coverage for belongings',
      'Liability Protection for third-party claims',
    ],
  },
];

export const SPECIALIZED_COVERAGE = [
  {
    icon: <FaGraduationCap />,
    title: 'Child Education Plans',
    description:
      "Secure your child's educational future with dedicated savings and insurance plans.",
  },
  {
    icon: <FaUmbrella />,
    title: 'Personal Accident',
    description:
      'Coverage against accidental injuries and disabilities for comprehensive protection.',
  },
  {
    icon: <FaLock />,
    title: 'Cyber Insurance',
    description: "Protection against cyber risks and digital threats in today's connected world.",
  },
  {
    icon: <FaFire />,
    title: 'Fire Insurance',
    description: 'Comprehensive fire damage coverage for your property and belongings.',
  },
];
