import { Metadata } from 'next';
import CorporatePage from '../_components/CorporatePage';
import { details } from './data';
import { quizQuestions } from '../_data/questions/motor-fleet';

export const metadata: Metadata = {
  title: 'Motor Fleet Insurance | Commercial Vehicle Insurance | SIIB',
  description:
    'Comprehensive motor fleet insurance for commercial vehicles. Cost-effective coverage for multiple vehicles under single policy.',
  keywords:
    'fleet insurance, motor fleet insurance, commercial vehicle insurance, truck insurance, fleet management',
};

export default function MotorFleetInsurancePage() {
  return <CorporatePage details={details} questions={quizQuestions} />;
}
