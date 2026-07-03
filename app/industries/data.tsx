import React from 'react';
import {
  FaPills,
  FaRecycle,
  FaRocket,
  FaBuilding,
  FaBriefcase,
  FaFlask,
  FaIndustry,
  FaTruck,
  FaTshirt,
  FaSolarPanel,
} from 'react-icons/fa';
import { MdEngineering } from 'react-icons/md';

export const INDUSTRIES = [
  {
    name: 'Infrastructure Industry',
    icon: <MdEngineering className="text-3xl text-blue-600" />,
    description:
      'Comprehensive insurance solutions for construction, roads, bridges, power projects, and large-scale infrastructure development.',
    risks: [
      'Contractor All Risks (CAR) insurance',
      'Erection All Risks (EAR) coverage',
      'Delay in Start-Up (DSU) insurance',
      'Third-party liability protection',
    ],
    image: '/images/infrastructure.jpg',
  },
  {
    name: 'Life Sciences & Pharma Industry',
    icon: <FaPills className="text-3xl text-blue-600" />,
    description:
      'Specialized coverage for pharmaceutical manufacturing, biotech research, clinical trials, and drug development operations.',
    risks: [
      'Product liability insurance',
      'Clinical trials liability',
      'Research & development protection',
      'Regulatory compliance coverage',
    ],
    image: '/images/pharma.jpg',
  },
  {
    name: 'Plastic Industry',
    icon: <FaRecycle className="text-3xl text-blue-600" />,
    description:
      'Tailored insurance for plastic manufacturing, injection molding, extrusion processes, and polymer production facilities.',
    risks: [
      'Machinery breakdown insurance',
      'Fire and special perils coverage',
      'Product liability protection',
      'Business interruption insurance',
    ],
    image: '/images/plastic.jpg',
  },
  {
    name: 'Startup Industry',
    icon: <FaRocket className="text-3xl text-blue-600" />,
    description:
      'Flexible insurance solutions for tech startups, SaaS companies, and emerging businesses across all growth stages.',
    risks: [
      'Directors & Officers (D&O) liability',
      'Errors & Omissions (E&O) insurance',
      'Cyber liability coverage',
      'Employment practices liability',
    ],
    image: '/images/startup.jpg',
  },
  {
    name: 'Real Estate Industry',
    icon: <FaBuilding className="text-3xl text-blue-600" />,
    description:
      'Complete protection for real estate developers, property management, construction projects, and commercial properties.',
    risks: [
      'Builders risk insurance',
      'Property all-risk coverage',
      'Professional indemnity insurance',
      'Public liability protection',
    ],
    image: '/images/real-estate.jpg',
  },
  {
    name: 'Chemical Industry',
    icon: <FaFlask className="text-3xl text-blue-600" />,
    description:
      'Comprehensive coverage for chemical manufacturing, processing plants, storage facilities, and hazardous material handling.',
    risks: [
      'Pollution liability insurance',
      'Stock and tank storage coverage',
      'Process interruption insurance',
      'Environmental liability protection',
    ],
    image: '/images/chemical.jpg',
  },
  {
    name: 'Logistics Industry',
    icon: <FaTruck className="text-3xl text-blue-600" />,
    description:
      'End-to-end insurance for logistics operations, fleet management, warehousing, and supply chain activities.',
    risks: [
      'Motor fleet insurance',
      'Cargo in-transit coverage',
      'Warehouse stock insurance',
      'Carrier legal liability',
    ],
    image: '/images/logistics.jpg',
  },
  {
    name: 'Textile Industry',
    icon: <FaTshirt className="text-3xl text-blue-600" />,
    description:
      'Specialized insurance for textile manufacturing, garment production, dyeing units, and export-oriented facilities.',
    risks: [
      'Fire and allied perils insurance',
      'Machinery breakdown coverage',
      'Stock-in-process protection',
      'Export credit insurance',
    ],
    image: '/images/textile.jpg',
  },
  {
    name: 'Solar Industry',
    icon: <FaSolarPanel className="text-3xl text-blue-600" />,
    description:
      'Renewable energy insurance for solar power plants, panel manufacturing, EPC projects, and O&M operations.',
    risks: [
      'Solar panel installation insurance',
      'Performance warranty coverage',
      'Business interruption protection',
      'Equipment breakdown insurance',
    ],
    image: '/images/solar.jpg',
  },
  {
    name: 'Manufacturing',
    icon: <FaIndustry className="text-3xl text-blue-600" />,
    description:
      'Comprehensive protection for factories, production units, machinery-driven operations, stock, workers, and product liability exposure.',
    risks: [
      'Industrial all-risk / fire and allied perils',
      'Machinery breakdown insurance',
      'Product liability protection',
      'Business interruption insurance',
    ],
    image: '/images/manufacturing.jpg',
  },
  {
    name: 'Miscellaneous Commercial',
    icon: <FaBriefcase className="text-3xl text-blue-600" />,
    description:
      'Flexible commercial insurance for diverse service, trade, entertainment, real estate, mining, and local business operations.',
    risks: [
      'Commercial property all-risk insurance',
      'Public liability insurance',
      'Business interruption coverage',
      'Burglary and theft protection',
    ],
    image: '/images/commercial.jpg',
  },
];

export const KEY_BENEFITS = [
  'Specialized risk assessment tailored to industry dynamics',
  'Compliance with sector-specific regulations and standards',
  'Coverage for unique operational and technical risks',
  'Expert claims handling with industry knowledge',
  'Cost-effective premiums through sector expertise',
  'Risk mitigation strategies aligned with business goals',
];

export const SIIB_OFFERINGS = [
  {
    title: 'Industry Expertise',
    description:
      'Deep understanding of sector-specific risks, regulatory requirements, and operational challenges across diverse industries.',
  },
  {
    title: 'Customized Solutions',
    description:
      'Tailored insurance programs designed to address unique exposures and business models in your industry.',
  },
  {
    title: 'End-to-End Support',
    description:
      'From risk assessment to claims settlement, comprehensive support at every stage of your insurance journey.',
  },
];
