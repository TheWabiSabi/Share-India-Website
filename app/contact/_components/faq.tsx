'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'How do I get a quote?',
    answer:
      "Select a service above and click 'Get Started', or contact us directly for a personalised quote from our team.",
  },
  {
    question: 'What information do I need to provide?',
    answer:
      'Basic contact details and information about your insurance or benefits needs — our advisors guide you through everything else.',
  },
  {
    question: 'How soon will I hear back?',
    answer:
      'We typically respond within one business day. For urgent queries, call our toll-free line: 1800 210 2022.',
  },
  {
    question: 'Is my information secure?',
    answer:
      'Yes, we take your privacy seriously and never sell or share your personal data with third parties.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mt-10">
      <div className="mb-7 text-center">
        <div className="accent-bar-gradient mx-auto mb-3 h-1 w-12 rounded" />
        <h2 className="text-si-ink text-2xl font-bold">
          Frequently Asked <span className="text-gradient-primary">Questions</span>
        </h2>
      </div>

      <ul className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = open === idx;
          return (
            <li
              key={idx}
              className={`overflow-hidden rounded-2xl border transition-all duration-200 ${isOpen ? 'border-si-primary/20 shadow-sm' : 'border-gray-100 bg-white'}`}
            >
              <button
                className={`flex w-full items-center justify-between p-5 text-left transition-colors ${isOpen ? 'bg-si-primary/5' : 'bg-white hover:bg-gray-50'}`}
                onClick={() => setOpen(isOpen ? null : idx)}
                aria-expanded={isOpen}
              >
                <span
                  className={`font-semibold transition-colors ${isOpen ? 'text-si-primary' : 'text-si-ink'}`}
                >
                  {faq.question}
                </span>
                <span
                  className={`text-si-primary border-si-primary/20 bg-si-primary/5 ml-4 shrink-0 rounded-full border p-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                >
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div
                className="overflow-hidden transition-[max-height,opacity] duration-300"
                style={{ maxHeight: isOpen ? 200 : 0, opacity: isOpen ? 1 : 0 }}
              >
                <div className="border-si-primary/5 border-t px-5 py-4">
                  <div className="accent-bar-gradient mb-2 h-1 w-8 rounded" />
                  <p className="text-si-ink/70 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
