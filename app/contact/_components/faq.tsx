'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "How do I get a quote?",
    answer: "Select a service above and click 'Get Started', or contact us directly for a personalized quote."
  },
  {
    question: "What information do I need to provide?",
    answer: "Basic contact details and information about your insurance or benefits needs."
  },
  {
    question: "How soon will I hear back?",
    answer: "We typically respond within one business day."
  },
  {
    question: "Is my information secure?",
    answer: "Yes, we take your privacy seriously and never sell your data."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full flex justify-center rounded-lg bg-si-slate/80 py-1">
      <div className="w-full max-w-2xl px-4 sm:px-8 my-6">
        <h2 className="text-si-bluegreen text-2xl sm:text-3xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <ul className="space-y-2">
          {faqs.map((faq, idx) => (
            <li
              key={idx}
              className="border-b border-si-bluegreen/20 last:border-b-0"
            >
              <button
                className="w-full flex justify-between items-center text-left font-semibold text-si-dark py-4 focus:outline-none transition-colors"
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
                  className="text-si-dark/90 px-1 py-2 mt-1 mb-2 animate-fade-in"
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