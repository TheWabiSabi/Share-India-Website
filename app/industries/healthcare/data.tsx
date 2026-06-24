import { IMAGE_BASE_URL } from '@/consts/variables';
import { FaBriefcaseMedical, FaHospital, FaLaptopMedical, FaShieldAlt, FaStethoscope, FaUserMd } from 'react-icons/fa';

export const details = {
  img: `${IMAGE_BASE_URL}/blog/healthcare.jpg`,
  hero: {
    title: 'Healthcare Industry Insurance Solutions',
    description:
      'Specialized coverage for hospitals, clinics, diagnostic centres, and healthcare professionals - protecting patients, staff, and assets.',
  },
  explaination: {
    title: 'Understanding Healthcare Industry Insurance',
    description:
      'Healthcare providers face unique risks including medical malpractice, equipment failure, and regulatory liability. Comprehensive insurance ensures continuity of care and financial protection.',
    overview: {
      description:
        'Healthcare facilities need layered protection for professional liability, property, medical equipment, patient data, employees, and public exposure. The right coverage supports resilient patient care.',
      bullets: ['Medical malpractice / professional indemnity', 'Clinical establishment all-risk property cover', 'Public liability insurance'],
    },
    projectTypes: {
      types: [
        { icon: <FaHospital className="text-blue-500" />, title: 'Hospitals', description: 'Multi-specialty, surgical, and inpatient facilities' },
        { icon: <FaStethoscope className="text-blue-500" />, title: 'Clinics & Pharmacies', description: 'Outpatient care, pharmacies, and specialist practices' },
        { icon: <FaBriefcaseMedical className="text-blue-500" />, title: 'Diagnostic Centres', description: 'Labs, imaging centres, and diagnostic services' },
      ],
    },
  },
  coverage: {
    desciption: 'Specialized protection for medical liability, healthcare assets, employees, equipment, and patient data.',
    coverages: [
      { title: 'Professional Liability', icon: <FaUserMd className="text-3xl text-blue-500" />, body: 'Protection for malpractice and professional negligence claims.', bullets: ['Medical malpractice / professional indemnity', 'Clinical negligence claim defense', 'Healthcare professional liability'] },
      { title: 'Facility & Public Risk', icon: <FaHospital className="text-3xl text-blue-500" />, body: 'Coverage for clinical premises, assets, patients, visitors, and public liability.', bullets: ['Clinical establishment all-risk property cover', 'Public liability insurance', 'Fire and allied perils protection'] },
      { title: 'Staff & Equipment', icon: <FaShieldAlt className="text-3xl text-blue-500" />, body: 'Protection for healthcare employees and critical medical equipment.', bullets: ['Group health insurance for staff', 'Equipment breakdown insurance', 'Operational continuity support'] },
      { title: 'Patient Data Protection', icon: <FaLaptopMedical className="text-3xl text-blue-500" />, body: 'Cyber coverage for digital records, patient data, and healthcare systems.', bullets: ['Cyber liability (patient data protection)', 'Data breach response', 'Regulatory response support'] },
    ],
  },
  claim_story: { description: 'Stay updated with how SIIB helped healthcare clients respond to malpractice, equipment, property, and cyber claims.', topic: 'healthcare' },
  relevant: { topic: 'healthcare' },
  knowledge: { industryName: 'Healthcare Industry' },
};
