import { Metadata } from 'next';
import IndustryPage from '@/app/industries/_components/main';
import { details } from './data';
import { quizQuestions } from '@/app/industries/_data/questions/retail-cyber';

export const metadata: Metadata = {
  title: 'Cyber Insurance | Data Breach & Identity Theft Protection | SIIB',
  description:
    'Personal cyber insurance protecting against data breaches, identity theft, online fraud, and cyber attacks. Coverage for individuals and small businesses.',
  keywords:
    'cyber insurance, data breach insurance, identity theft protection, cyber security insurance, online fraud protection',
};

export default function CyberRetailInsurancePage() {
  return <IndustryPage details={details} questions={quizQuestions} />;
}
