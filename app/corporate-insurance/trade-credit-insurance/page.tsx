import { Metadata } from 'next';
import CorporatePage from '../_components/CorporatePage';
import { details } from './data';
import { quizQuestions } from '../_data/questions/trade-credit';

export const metadata: Metadata = {
  title: 'Trade Credit Insurance | Accounts Receivable Protection | SIIB',
  description:
    'Protect your accounts receivable with trade credit insurance. Coverage against buyer insolvency, default, and political risks.',
  keywords:
    'trade credit insurance, credit insurance, accounts receivable insurance, export credit insurance, buyer default protection',
};

export default function TradeCreditInsurancePage() {
  return <CorporatePage details={details} questions={quizQuestions} />;
}
