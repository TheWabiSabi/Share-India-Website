import { Metadata } from 'next';
import IndustryPage from '../_components/main';
import { details } from './data';
import { quizQuestions } from '../_data/questions/plastic';

export const metadata: Metadata = {
  title: 'Plastic Industry Insurance | Manufacturing & Processing Coverage | SIIB',
  description:
    'Specialized insurance for plastic manufacturing, injection molding, and extrusion. Coverage for fire, machinery breakdown, and product liability.',
  keywords:
    'plastic industry insurance, plastic manufacturing insurance, injection molding insurance, polymer insurance, plastic factory insurance',
};

export default function PlasticIndustryPage() {
  return <IndustryPage details={details} questions={quizQuestions} />;
}
