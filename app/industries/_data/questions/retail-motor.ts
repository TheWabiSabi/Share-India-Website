export const quizQuestions = [
  {
    id: '1',
    question: 'What is the mandatory insurance coverage required by law for all vehicles in India?',
    options: [
      'Comprehensive insurance',
      'Third-party liability insurance',
      'Own damage insurance',
      'Personal accident cover',
    ],
    correctAnswer: 1,
    explanation:
      'Third-party liability insurance is mandatory by law in India to cover bodily injury, death, and property damage caused to third parties.',
    difficulty: 'easy' as const,
  },
  {
    id: '2',
    question: 'What does "IDV" stand for in motor insurance?',
    options: [
      'Insurance Declared Value',
      'Insured Declared Value',
      'Initial Depreciation Value',
      'Insurance Damage Verification',
    ],
    correctAnswer: 1,
    explanation:
      'IDV (Insured Declared Value) is the current market value of your vehicle, which determines the maximum claim amount for total loss or theft.',
    difficulty: 'medium' as const,
  },
  {
    id: '3',
    question: 'What is "zero depreciation" or "bumper-to-bumper" cover?',
    options: [
      'No insurance coverage',
      'Add-on that covers full claim without depreciation deduction',
      'Only covers bumper damage',
      'Free insurance for new cars',
    ],
    correctAnswer: 1,
    explanation:
      'Zero depreciation cover is an add-on that ensures you receive the full claim amount without any depreciation deduction on parts during repairs.',
    difficulty: 'medium' as const,
  },
  {
    id: '4',
    question: 'Which of these is typically NOT covered under standard motor insurance?',
    options: ['Accident damage', 'Theft', 'Normal wear and tear', 'Fire damage'],
    correctAnswer: 2,
    explanation:
      'Normal wear and tear, mechanical breakdown, and electrical failures are not covered under standard motor insurance. Only sudden and accidental damages are covered.',
    difficulty: 'easy' as const,
  },
  {
    id: '5',
    question: 'What is "No Claim Bonus" (NCB) in motor insurance?',
    options: [
      'Penalty for making claims',
      'Discount on renewal premium for claim-free years',
      'Additional coverage',
      'Increased premium',
    ],
    correctAnswer: 1,
    explanation:
      "NCB is a discount (up to 50%) on renewal premium awarded for each claim-free year. It's linked to the policyholder, not the vehicle.",
    difficulty: 'hard' as const,
  },
];
