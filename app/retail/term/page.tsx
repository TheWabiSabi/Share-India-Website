import { Metadata } from 'next';
import IndustryPage from '@/app/industries/_components/main';
import { details } from './data';
import { quizQuestions } from '@/app/industries/_data/questions/retail-term';

export const metadata: Metadata = {
  title: 'Term Insurance Plans | Affordable Life Coverage | SIIB',
  description:
    'Pure term life insurance with high coverage at affordable premiums. Protect your family with 10-15x annual income coverage and tax benefits under Section 80C.',
  keywords:
    'term insurance, term life insurance, pure life cover, affordable life insurance, term plan, income protection',
};

export default function TermRetailInsurancePage() {
  return <IndustryPage details={details} questions={quizQuestions} />;
}
