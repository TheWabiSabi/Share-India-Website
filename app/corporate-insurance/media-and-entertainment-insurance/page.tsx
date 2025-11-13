import { Metadata } from 'next';
import CorporatePage from '../_components/CorporatePage';
import { details } from './data';
import { quizQuestions } from '../_data/questions/media-entertainment';

export const metadata: Metadata = {
  title: 'Media & Entertainment Insurance | Film Production Insurance | SIIB',
  description:
    'Specialized insurance for media and entertainment industry. Coverage for film production, events, equipment, and liability.',
  keywords:
    'media insurance, entertainment insurance, film production insurance, event insurance, production coverage',
};

export default function MediaEntertainmentInsurancePage() {
  return <CorporatePage details={details} questions={quizQuestions} />;
}
