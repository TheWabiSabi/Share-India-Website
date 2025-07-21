'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'How do I get a quote?',
    answer:
      "Select a service above and click 'Get Started', or contact us directly for a personalized quote.",
  },
  {
    question: 'What information do I need to provide?',
    answer: 'Basic contact details and information about your insurance or benefits needs.',
  },
  {
    question: 'How soon will I hear back?',
    answer: 'We typically respond within one business day.',
  },
  {
    question: 'Is my information secure?',
    answer: 'Yes, we take your privacy seriously and never sell your data.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-si-slate/80 flex w-full justify-center rounded-lg py-1">
      <div className="my-6 w-full max-w-2xl px-4 sm:px-8">
        <h2 className="text-si-bluegreen mb-8 text-center text-2xl font-bold sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <ul className="space-y-2">
          {faqs.map((faq, idx) => (
            <li key={idx} className="border-si-bluegreen/20 border-b last:border-b-0">
              <button
                className="text-si-dark flex w-full items-center justify-between py-4 text-left font-semibold transition-colors focus:outline-none"
                onClick={() => handleToggle(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
                style={{ background: 'transparent' }}
              >
                <span>{faq.question}</span>
                <span
                  className={`ml-2 text-lg transition-transform duration-200 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>
              {openIndex === idx && (
                <div
                  id={`faq-answer-${idx}`}
                  className="text-si-dark/90 animate-fade-in mt-1 mb-2 px-1 py-2"
                >
                  {faq.answer}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
