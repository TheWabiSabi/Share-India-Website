export const quizQuestions = [
  {
    id: '1',
    question: 'What are the two main components of home insurance coverage?',
    options: [
      'Building structure and contents',
      'Only building structure',
      'Only personal belongings',
      'Vehicle and home',
    ],
    correctAnswer: 0,
    explanation:
      'Home insurance typically covers both the building structure (walls, roof, fixtures) and contents (furniture, electronics, personal belongings).',
    difficulty: 'easy' as const,
  },
  {
    id: '2',
    question: 'Which natural disaster is typically NOT covered under standard home insurance?',
    options: ['Fire', 'Lightning', 'Flood (without add-on)', 'Storm'],
    correctAnswer: 2,
    explanation:
      'Flood damage often requires a separate add-on or rider to standard home insurance policies, while fire, lightning, and storms are usually covered by default.',
    difficulty: 'medium' as const,
  },
  {
    id: '3',
    question: 'What does "sum insured" mean in home insurance?',
    options: [
      'Monthly premium amount',
      'Maximum amount insurer will pay for claims',
      'Deductible amount',
      'Agent commission',
    ],
    correctAnswer: 1,
    explanation:
      'Sum insured is the maximum amount the insurance company will pay for covered losses. It should reflect the replacement cost of your home and belongings.',
    difficulty: 'easy' as const,
  },
  {
    id: '4',
    question: 'What is "temporary accommodation" coverage in home insurance?',
    options: [
      'Hotel stays during vacation',
      'Rent for alternative housing while home is being repaired',
      'Guest room coverage',
      'Parking space rental',
    ],
    correctAnswer: 1,
    explanation:
      'Temporary accommodation coverage pays for alternative housing costs if your home becomes uninhabitable due to a covered loss, such as fire or natural disaster.',
    difficulty: 'medium' as const,
  },
  {
    id: '5',
    question: 'Which of these is typically excluded from home insurance coverage?',
    options: [
      'Fire damage',
      'Theft of jewelry',
      'Wear and tear or gradual deterioration',
      'Storm damage',
    ],
    correctAnswer: 2,
    explanation:
      'Normal wear and tear, gradual deterioration, and maintenance issues are excluded from home insurance. Coverage is for sudden and unforeseen events only.',
    difficulty: 'hard' as const,
  },
];
