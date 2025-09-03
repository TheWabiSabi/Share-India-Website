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
    <div className="section-spot-alt relative mt-10 rounded-2xl">
      <div className="bg-pattern-grid absolute inset-0 rounded-2xl opacity-15" />
      <div className="relative mx-auto my-6 w-full max-w-4xl px-6 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="accent-bar-gradient mx-auto mb-4 h-2 w-16" />
          <h2 className="text-si-ink text-2xl font-semibold sm:text-3xl">
            Frequently Asked <span className="text-gradient-primary">Questions</span>
          </h2>
        </div>

        <ul className="space-y-4">
          {faqs.map((faq, idx) => (
            <li key={idx} className="card-vibrant hover-lift overflow-hidden rounded-xl">
              <button
                className="text-si-ink hover:from-si-primary/5 hover:to-si-red/5 flex w-full items-center justify-between p-6 text-left font-semibold transition-colors hover:bg-gradient-to-r focus:outline-none"
                onClick={() => handleToggle(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span className="text-lg">{faq.question}</span>
                <span
                  className={`text-si-primary ml-4 text-xl transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>
              {openIndex === idx && (
                <div
                  id={`faq-answer-${idx}`}
                  className="animate-fade-in from-si-primary/5 to-si-red/5 bg-gradient-to-r px-6 pb-6"
                >
                  <div className="accent-bar-gradient mb-3 h-1 w-8" />
                  <p className="text-si-ink/80 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
