export const quizQuestions = [
  {
    id: '1',
    question: 'What is the primary coverage provided by retail cyber insurance?',
    options: [
      'Physical theft of computers',
      'Data breach and customer notification expenses',
      'Employee health insurance',
      'Building fire damage',
    ],
    correctAnswer: 1,
    explanation:
      'Retail cyber insurance primarily covers data breach incidents, including customer notification costs, credit monitoring, and regulatory compliance expenses.',
    difficulty: 'easy' as const,
  },
  {
    id: '2',
    question: 'Which of these is covered under PCI DSS compliance penalties?',
    options: [
      'Employee salary disputes',
      'Payment card industry fines and assessment costs',
      'Property damage claims',
      'Vehicle accidents',
    ],
    correctAnswer: 1,
    explanation:
      'PCI DSS (Payment Card Industry Data Security Standard) compliance penalties cover fines and costs related to payment card data breaches and security failures.',
    difficulty: 'medium' as const,
  },
  {
    id: '3',
    question: 'What should a retail business do immediately after discovering a data breach?',
    options: [
      'Wait and see if customers notice',
      'Notify insurance provider and begin incident response',
      'Delete all evidence',
      'Ignore it if no money was stolen',
    ],
    correctAnswer: 1,
    explanation:
      'Immediate notification to your insurance provider and starting incident response procedures is critical for minimizing damage and ensuring coverage.',
    difficulty: 'easy' as const,
  },
  {
    id: '4',
    question: 'Which type of cyber attack involves encrypting business data and demanding payment?',
    options: ['Phishing', 'Ransomware', 'DDoS attack', 'Social engineering'],
    correctAnswer: 1,
    explanation:
      'Ransomware attacks encrypt business data and demand payment for decryption keys. Cyber insurance typically covers ransom payments and recovery costs.',
    difficulty: 'medium' as const,
  },
  {
    id: '5',
    question: 'What is typically NOT covered by retail cyber insurance?',
    options: [
      'Data breach notification costs',
      'Ransomware payment and negotiation',
      'Intentional data theft by business owner',
      'Forensic investigation expenses',
    ],
    correctAnswer: 2,
    explanation:
      'Intentional acts by the business owner or management are typically excluded from cyber insurance coverage. Only unintentional breaches and external attacks are covered.',
    difficulty: 'hard' as const,
  },
];
