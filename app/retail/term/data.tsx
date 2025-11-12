import {
  FaShieldAlt,
  FaHeart,
  FaUmbrella,
  FaUserShield,
  FaHandHoldingUsd,
  FaFileInvoiceDollar,
  FaUsers,
} from 'react-icons/fa';

export const details = {
  img: 'https://minio-api.internal.wabisabitech.in/share-india/retail/term-retail.jpg',
  hero: {
    title: 'Term Insurance Solutions',
    description:
      'Comprehensive life coverage for individuals and families—providing financial security, income replacement, debt protection, and peace of mind with affordable premiums.',
  },
  explaination: {
    title: 'Understanding Term Insurance',
    description:
      "Term insurance provides pure life coverage at affordable premiums, ensuring your family's financial stability in your absence. These policies offer high coverage amounts, protecting against lost income, outstanding debts, and future financial obligations. Specialized insurance solutions safeguard your loved ones from financial hardship, maintain their standard of living, and secure long-term financial goals.",
    overview: {
      description:
        "Term insurance operations focus on providing maximum life coverage with flexible payout options, customizable riders, and tax-efficient benefits. Coverage must address income replacement needs, debt repayment obligations, children's education expenses, and family's ongoing lifestyle requirements. Comprehensive life protection is essential for safeguarding family security, financial independence, and long-term wealth planning.",
      bullets: [
        'High life coverage at affordable premium rates',
        'Flexible payout options including lump sum and monthly income',
        'Tax benefits under Section 80C and Section 10(10D)',
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaUsers className="text-blue-500" />,
          title: 'Individual & Family Protection',
          description: 'Working professionals, self-employed individuals, and breadwinners',
        },
        {
          icon: <FaHandHoldingUsd className="text-blue-500" />,
          title: 'Debt & Liability Coverage',
          description: 'Home loans, business loans, and personal financial obligations',
        },
        {
          icon: <FaUserShield className="text-blue-500" />,
          title: 'Income Replacement',
          description: 'Salary replacement, business income protection, and retirement planning',
        },
      ],
    },
  },
  coverage: {
    desciption:
      'Comprehensive protection designed specifically for life insurance needs and family financial security.',
    coverages: [
      {
        title: 'Life Cover & Death Benefit',
        icon: <FaShieldAlt className="text-3xl text-blue-500" />,
        body: 'Pure life coverage providing lump sum or regular income to beneficiaries.',
        bullets: [
          'Death benefit payout to nominated beneficiaries',
          'Multiple payout options: lump sum, monthly, or combination',
          'Coverage up to 85 years of age with flexible tenure',
        ],
      },
      {
        title: 'Critical Illness & Disability',
        icon: <FaHeart className="text-3xl text-blue-500" />,
        body: 'Enhanced coverage for critical illnesses, terminal conditions, and disability support.',
        bullets: [
          'Lump sum payment on diagnosis of listed critical illnesses',
          'Terminal illness coverage and accelerated benefits',
          'Permanent disability protection due to accidents',
        ],
      },
      {
        title: 'Accidental Death & Rider Benefits',
        icon: <FaUmbrella className="text-3xl text-blue-500" />,
        body: 'Additional protection for accidental death and customizable rider options.',
        bullets: [
          'Additional payout over base sum assured for accidental death',
          'Waiver of premium rider for disability situations',
          'Life stage benefit increases without medical underwriting',
        ],
      },
      {
        title: 'Tax Benefits & Financial Planning',
        icon: <FaFileInvoiceDollar className="text-3xl text-blue-500" />,
        body: 'Tax-efficient coverage with deductions and exemptions under Income Tax Act.',
        bullets: [
          'Tax deduction up to ₹1.5 lakhs under Section 80C',
          'Death benefit completely tax-free under Section 10(10D)',
          'Additional tax benefits under Section 80D for critical illness riders',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped families secure their financial future and successfully settle term insurance claims during difficult times.',
    topic: 'term_insurance',
  },
  relevant: {
    topic: 'term_insurance',
  },
  knowledge: {
    industryName: 'Term Insurance',
  },
};
