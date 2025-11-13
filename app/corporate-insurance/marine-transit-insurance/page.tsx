import { Metadata } from 'next';
import CorporatePage from '../_components/CorporatePage';
import { details } from './data';
import { quizQuestions } from '../_data/questions/marine-transit';

export const metadata: Metadata = {
  title: 'Marine Transit Insurance | Cargo Insurance Solutions | SIIB',
  description:
    'Comprehensive marine transit insurance for goods in transit by sea, air, road, and rail. Protect your cargo from origin to destination with SIIB.',
  keywords:
    'marine insurance, cargo insurance, transit insurance, import export insurance, freight insurance',
};

export default function MarineTransitInsurancePage() {
  return <CorporatePage details={details} questions={quizQuestions} />;
}
