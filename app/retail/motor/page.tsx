import { Metadata } from 'next';
import IndustryPage from '@/app/industries/_components/main';
import { details } from './data';
import { quizQuestions } from '@/app/industries/_data/questions/retail-motor';

export const metadata: Metadata = {
  title: 'Motor Insurance | Car & Bike Insurance Online | SIIB',
  description:
    'Comprehensive motor insurance for cars, bikes, and commercial vehicles. Third-party liability, own damage, zero depreciation, and NCB benefits available.',
  keywords:
    'motor insurance, car insurance, bike insurance, vehicle insurance, third party insurance, comprehensive car insurance, NCB',
};

export default function MotorRetailInsurancePage() {
  return <IndustryPage details={details} questions={quizQuestions} />;
}
