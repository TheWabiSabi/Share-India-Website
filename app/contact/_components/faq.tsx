'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'How do I get a quote?',
    answer:
      "Select a service on the left and click 'Continue', or reach out to our corporate line directly for a personalized assessment from our team.",
  },
  {
    question: 'What information do I need to provide?',
    answer:
      'Basic contact details and a brief overview of your coverage needs. Our specialized advisors will systematically guide you through the rest.',
  },
  {
    question: 'How soon will I hear back?',
    answer:
      'We operate on strict SLAs and typically respond within one business day. For immediate assistance, please utilize our toll-free line.',
  },
  {
    question: 'Is my corporate data secure?',
    answer:
      'Absolutely. We adhere to stringent data protection protocols and never disclose personal or corporate data to unauthorized third parties.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      <h3 className="text-si-primary-950 mb-6 text-lg font-semibold">Frequently Asked Questions</h3>

      <div className="border-t border-slate-100">
        {faqs.map((faq, idx) => {
          const isOpen = open === idx;
          return (
            <div key={idx} className="border-b border-slate-100">
              <button
                className="group flex w-full items-center justify-between py-5 text-left focus:outline-none"
                onClick={() => setOpen(isOpen ? null : idx)}
                aria-expanded={isOpen}
              >
                <span
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isOpen
                      ? 'text-si-primary-700'
                      : 'group-hover:text-si-primary-700 text-slate-700'
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`ml-6 flex h-6 w-6 shrink-0 items-center justify-center text-lg font-light transition-colors ${
                    // Light si-primary (+) when closed, touch of red (-) when open
                    isOpen ? 'text-rose-500' : 'group-hover:text-si-primary-600 text-sky-400'
                  }`}
                >
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: isOpen ? '200px' : '0',
                  opacity: isOpen ? 1 : 0,
                  marginBottom: isOpen ? '20px' : '0',
                }}
              >
                <p className="pr-8 text-sm leading-relaxed font-light text-slate-500">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
