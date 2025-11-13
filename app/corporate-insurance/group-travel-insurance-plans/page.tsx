import { Metadata } from 'next';
import CorporatePage from '../_components/CorporatePage';
import { details } from './data';
import { quizQuestions } from '../_data/questions/group-travel';

export const metadata: Metadata = {
  title: 'Group Travel Insurance Plans | Corporate Travel Insurance | SIIB',
  description:
    'Comprehensive group travel insurance for corporate travelers. Medical emergency, trip cancellation, and baggage coverage worldwide.',
  keywords:
    'group travel insurance, corporate travel insurance, business travel insurance, international travel insurance',
};

export default function GroupTravelInsurancePage() {
  return <CorporatePage details={details} questions={quizQuestions} />;
}
