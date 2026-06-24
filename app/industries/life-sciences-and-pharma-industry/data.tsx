import { FaPills, FaFlask, FaMicroscope, FaVial, FaUserShield, FaTools } from 'react-icons/fa';

export const details = {
  img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80',
  hero: {
    title: 'Life Sciences & Pharma Insurance Solutions',
    description:
      'Comprehensive coverage for pharmaceutical manufacturing, biotechnology, medical devices, and clinical research—protecting innovation in healthcare.',
  },
  explaination: {
    title: 'Understanding Life Sciences & Pharma Insurance',
    description:
      'The life sciences and pharmaceutical industry is highly regulated and involves significant risks related to product safety, clinical research, and regulatory compliance. Insurance plays a critical role in protecting companies and patients.',
    overview: {
      description:
        'Life sciences companies develop and manufacture products that directly impact human health, from pharmaceuticals and biologics to medical devices and diagnostics. This industry faces unique risks including product liability, clinical trial risks, regulatory compliance challenges, and supply chain vulnerabilities. Comprehensive insurance coverage is essential for business continuity and patient safety.',
      bullets: [
        'Highly regulated environment with strict compliance requirements',
        'Product liability risks affecting patient safety and company reputation',
        'Clinical research involving human participants requires specialized coverage',
      ],
    },
    projectTypes: {
      types: [
        {
          icon: <FaPills className="text-blue-500" />,
          title: 'Pharmaceutical Manufacturing',
          description: 'Generic and branded drug production',
        },
        {
          icon: <FaVial className="text-blue-500" />,
          title: 'Biotechnology',
          description: 'Biologics, vaccines, and gene therapy',
        },
        {
          icon: <FaMicroscope className="text-blue-500" />,
          title: 'Medical Devices',
          description: 'Diagnostic and therapeutic devices',
        },
      ],
    },
  },
  coverage: {
    desciption:
      'Comprehensive protection designed specifically for life sciences and pharmaceutical operations.',
    coverages: [
      {
        title: 'Product Liability & Recall',
        icon: <FaPills className="text-3xl text-blue-500" />,
        body: 'Comprehensive coverage for product-related claims and recall expenses.',
        bullets: [
          'Adverse drug reaction and side effect claims',
          'Product contamination and defect coverage',
          'Recall expenses and crisis management',
        ],
      },
      {
        title: 'Clinical Trial Insurance',
        icon: <FaFlask className="text-3xl text-blue-500" />,
        body: 'Protection for clinical research activities and participant safety.',
        bullets: [
          'Participant injury and adverse event coverage',
          'Investigator and site liability protection',
          'Trial cancellation and delay coverage',
        ],
      },
      {
        title: 'Professional & Regulatory Liability',
        icon: <FaUserShield className="text-3xl text-blue-500" />,
        body: 'Coverage for professional errors and regulatory compliance issues.',
        bullets: [
          'Professional indemnity for healthcare professionals',
          'Regulatory defense and compliance costs',
          'Directors and officers liability coverage',
        ],
      },
      {
        title: 'Manufacturing & Equipment',
        icon: <FaTools className="text-3xl text-blue-500" />,
        body: 'Protection for specialized manufacturing equipment and facilities.',
        bullets: [
          'GMP facility and clean room coverage',
          'Specialized equipment breakdown protection',
          'Business interruption and contamination coverage',
        ],
      },
    ],
  },
  claim_story: {
    description:
      'Stay updated with how SIIB helped life sciences clients recover from product recalls, clinical trial incidents, and regulatory compliance issues.',
    topic: 'life_sciences_pharma_industry',
  },
  relevant: {
    tagSlug: 'life-sciences-pharma-industry',
  },
  knowledge: {
    industryName: 'Life Sciences & Pharma',
  },
};
