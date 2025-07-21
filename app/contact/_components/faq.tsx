'use client';

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
  return (
    <div className="mt-10 rounded-xl bg-si-slate/80 p-6 shadow">
      <h2 className="text-si-bluegreen text-xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <ul className="space-y-5">
        {faqs.map((faq, idx) => (
          <li key={idx} className="border-b border-si-bluegreen/20 pb-4 last:border-b-0">
            <p className="font-semibold text-si-dark">{faq.question}</p>
            <p className="text-si-dark/80 mt-1">{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}