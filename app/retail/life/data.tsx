import { IMAGE_BASE_URL } from '@/consts/variables';
import {
  FaShieldAlt,
  FaUniversity,
  FaPiggyBank,
  FaHandHoldingUsd,
  FaUmbrella,
} from 'react-icons/fa';

export const details = {
  img: `${IMAGE_BASE_URL}/retail/life-retail.jpg`,
  hero: {
    title: 'Retail Life Insurance Solutions',
    description:
      "Comprehensive life coverage for individuals and families—protecting against financial uncertainty, securing dependents' future, providing wealth creation, and ensuring legacy planning.",
  },
  explaination: {
    title: 'Understanding Retail Life Insurance',
    description:
      'Life insurance provides essential financial protection for individuals and their families against the uncertainties of life. These solutions safeguard loved ones from financial hardship, cover outstanding debts, fund education expenses, and ensure long-term financial security. Specialized insurance products offer pure protection, investment opportunities, retirement planning, and legacy creation tailored to diverse life stages and financial goals.',
    overview: {
      description:
        "Life insurance serves as a financial safety net, ensuring that dependents maintain their standard of living in the event of the policyholder's untimely demise. Coverage options range from affordable term protection to comprehensive whole life policies with cash value accumulation. Modern life insurance solutions address multiple financial needs including debt repayment, children's education, retirement income, and wealth transfer, making them essential components of sound financial planning.",
      bullets: [
        'Financial security and income replacement for dependents',
        'Debt repayment coverage including home loans and personal loans',
        'Tax benefits and wealth accumulation opportunities',
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaShieldAlt className="text-blue-500" />,
          title: 'Term Life Insurance',
          description: 'Pure protection plans with high coverage at affordable premiums',
        },
        {
          icon: <FaPiggyBank className="text-blue-500" />,
          title: 'Whole & Universal Life',
          description: 'Permanent coverage with cash value accumulation and flexibility',
        },
        {
          icon: <FaUniversity className="text-blue-500" />,
          title: 'Investment & Retirement Plans',
          description: 'ULIPs, endowment plans, and pension solutions for long-term goals',
        },
      ],
    },
  },
  coverage: {
    desciption:
      'Comprehensive protection designed specifically for individual and family financial security needs.',
    coverages: [
      {
        title: 'Term Life Protection',
        icon: <FaShieldAlt className="text-3xl text-blue-500" />,
        body: 'Affordable pure protection coverage ensuring family financial security.',
        bullets: [
          'High sum assured with cost-effective premiums',
          'Flexible coverage periods and payout options',
          'Optional riders for critical illness and accidental death',
        ],
      },
      {
        title: 'Whole Life & Universal Coverage',
        icon: <FaUmbrella className="text-3xl text-blue-500" />,
        body: 'Lifetime protection with guaranteed cash value accumulation and flexibility.',
        bullets: [
          'Permanent coverage up to age 99 or 100',
          'Guaranteed cash value growth and loan options',
          'Flexible premiums and adjustable death benefits',
        ],
      },
      {
        title: 'Investment & Savings Plans',
        icon: <FaPiggyBank className="text-3xl text-blue-500" />,
        body: 'Dual benefit plans combining life protection with wealth creation.',
        bullets: [
          'Unit-linked insurance plans (ULIPs) with market-linked returns',
          'Endowment and money-back policies with maturity benefits',
          'Tax-efficient wealth accumulation under Section 80C',
        ],
      },
      {
        title: 'Retirement & Pension Solutions',
        icon: <FaHandHoldingUsd className="text-3xl text-blue-500" />,
        body: 'Specialized plans ensuring financial independence during retirement years.',
        bullets: [
          'Regular annuity payouts for post-retirement income',
          'Pension plans with lump sum and periodic payment options',
          'Guaranteed income and legacy planning benefits',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped families receive timely claim settlements, supporting beneficiaries through difficult times with compassionate service.',
    topic: 'retail_life',
  },
  relevant: {
    tagSlug: 'retail-life',
  },
  knowledge: {
    industryName: 'Retail Life Insurance',
  },
};
