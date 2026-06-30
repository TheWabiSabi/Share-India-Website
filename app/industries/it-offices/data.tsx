import { IMAGE_BASE_URL } from '@/consts/variables';
import { FaBriefcase, FaBuilding, FaLaptopCode, FaNetworkWired, FaShieldAlt, FaUserTie } from 'react-icons/fa';

export const details = {
  img: `${IMAGE_BASE_URL}/blog/office.jpg`,
  hero: {
    title: 'IT & Office Business Insurance Solutions',
    description:
      'Tailored insurance for IT companies, software firms, BPOs, and professional offices - covering cyber risk, liability, and business assets.',
  },
  explaination: {
    title: 'Understanding IT & Office Business Insurance',
    description:
      'IT and office-based businesses are increasingly exposed to cyber threats, data breaches, and professional liability claims. Comprehensive coverage protects your people, data, and operations.',
    overview: {
      description:
        'Software firms, BPOs, consultants, and professional offices need coverage for data, contractual obligations, equipment, employees, directors, and revenue continuity.',
      bullets: ['Cyber liability and data breach insurance', 'Errors & Omissions (E&O) / Professional indemnity', 'Directors & Officers (D&O) liability'],
    },
    projectTypes: {
      types: [
        { icon: <FaLaptopCode className="text-blue-500" />, title: 'Software & IT Services', description: 'Product, services, SaaS, and managed technology firms' },
        { icon: <FaNetworkWired className="text-blue-500" />, title: 'BPOs', description: 'Voice, back-office, and data processing operations' },
        { icon: <FaBriefcase className="text-blue-500" />, title: 'Professional Offices', description: 'Consulting and other office-based businesses' },
      ],
    },
  },
  coverage: {
    desciption: 'Tailored protection for cyber incidents, professional liability, management liability, employees, assets, and interruption.',
    coverages: [
      { title: 'Cyber & Data Risk', icon: <FaShieldAlt className="text-3xl text-blue-500" />, body: 'Protection against cyber attacks, data breach events, and incident response costs.', bullets: ['Cyber liability and data breach insurance', 'Client data exposure support', 'Breach notification and recovery'] },
      { title: 'Professional Liability', icon: <FaUserTie className="text-3xl text-blue-500" />, body: 'Coverage for service errors, omissions, and professional negligence claims.', bullets: ['Errors & Omissions (E&O) / Professional indemnity', 'Contractual liability support', 'Client claim defense'] },
      { title: 'Management & People', icon: <FaBriefcase className="text-3xl text-blue-500" />, body: 'Protection for directors, officers, employees, and workplace benefits.', bullets: ['Directors & Officers (D&O) liability', 'Group health and personal accident cover', 'Employee risk protection'] },
      { title: 'Office Assets & Continuity', icon: <FaBuilding className="text-3xl text-blue-500" />, body: 'Coverage for office equipment, contents, and revenue disruption.', bullets: ['Office contents and equipment insurance', 'Business interruption insurance', 'Remote and office operation support'] },
    ],
  },
  claim_story: { description: 'Stay updated with how SIIB helped IT and office clients respond to cyber, liability, employee, and property claims.', topic: 'it_offices' },
  relevant: {
    primary: 'it-offices',
    insights: ['blog', 'news'],
  },
  knowledge: { industryName: 'IT & Office Business' },
};
