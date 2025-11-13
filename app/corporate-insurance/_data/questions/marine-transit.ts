export const quizQuestions = [
  {
    id: '1',
    question: 'What does marine cargo insurance primarily cover?',
    options: [
      'Only sea transportation',
      'Goods in transit by sea, air, and land',
      'Only the ship or aircraft',
      'Only port operations',
    ],
    correctAnswer: 1,
    explanation:
      'Marine cargo insurance covers goods in transit by various modes including sea, air, road, and rail transportation.',
    difficulty: 'easy' as const,
  },
  {
    id: '2',
    question: 'Which Incoterm places maximum insurance responsibility on the seller?',
    options: [
      'FOB (Free on Board)',
      'CIF (Cost, Insurance, and Freight)',
      'EXW (Ex Works)',
      'FCA (Free Carrier)',
    ],
    correctAnswer: 1,
    explanation:
      'Under CIF terms, the seller must arrange and pay for insurance coverage during the main carriage to the destination port.',
    difficulty: 'medium' as const,
  },
  {
    id: '3',
    question: 'What are "General Average" contributions in marine insurance?',
    options: [
      'Average claim amounts',
      'Shared losses when cargo is sacrificed to save the ship',
      'Standard insurance premiums',
      'Port handling charges',
    ],
    correctAnswer: 1,
    explanation:
      'General Average is a maritime law principle where all parties share losses when cargo is deliberately sacrificed to save the ship and remaining cargo.',
    difficulty: 'hard' as const,
  },
  {
    id: '4',
    question: 'Which document is essential for marine cargo insurance claims?',
    options: [
      'Invoice only',
      'Bill of Lading and Commercial Invoice',
      'Passport only',
      'Bank statement only',
    ],
    correctAnswer: 1,
    explanation:
      'Bill of Lading (proof of shipment) and Commercial Invoice (proof of value) are essential documents for marine cargo insurance claims.',
    difficulty: 'medium' as const,
  },
  {
    id: '5',
    question: 'What is the typical coverage period for marine cargo insurance?',
    options: [
      'Only during sea voyage',
      'Warehouse to warehouse',
      'Only at ports',
      'Only during loading/unloading',
    ],
    correctAnswer: 1,
    explanation:
      'Marine cargo insurance typically provides warehouse to warehouse coverage, protecting goods from origin to final destination.',
    difficulty: 'medium' as const,
  },
];
