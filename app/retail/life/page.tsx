import { Metadata } from 'next';
import IndustryPage from '@/app/industries/_components/main';
import { details } from './data';
import { quizQuestions } from '@/app/industries/_data/questions/retail-life';

export const metadata: Metadata = {
  title: 'Life Insurance Plans | Term & Whole Life Insurance | SIIB',
  description:
    "Comprehensive life insurance plans including term life, whole life, endowment, and ULIP options. Secure your family's financial future with competitive premiums and tax benefits.",
  keywords:
    'life insurance, term life insurance, whole life insurance, endowment plans, ULIP, life cover, family protection',
};

export default function LifeRetailInsurancePage() {
  return <IndustryPage details={details} questions={quizQuestions} />;
}
