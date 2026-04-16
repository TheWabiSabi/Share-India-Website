'use client';

import React, { useState } from 'react';


interface ServiceOption {
  id: string;
  label: string;
  href: string;
  description: string;
  emoji: string;
}

const services: ServiceOption[] = [
  {
    id: 'business-insurance',
    emoji: '🏢',
    label: 'Business Insurance',
    href: '/corporate-insurance',
    description: 'Protect your business with comprehensive corporate coverage',
  },
  {
    id: 'employee-benefits',
    emoji: '👥',
    label: 'Employee Benefits',
    href: '/corporate-insurance/employee-benefits-insurance',
    description: 'Comprehensive group health & benefits for your team',
  },
  {
    id: 'personal-insurance',
    emoji: '🛡️',
    label: 'Personal Insurance',
    href: '/retail',
    description: 'Individual and family health, life, motor & home plans',
  },
  {
    id: 'retirement-wealth',
    emoji: '💰',
    label: 'Retirement & Private Wealth',
    href: '/retail/life',
    description: 'Plan for your future with smart life & savings solutions',
  },
];

export default function ServicesSelector() {
  const [selected, setSelected] = useState<string>('');
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleNextStep = () => {
    if (selected) setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setStep(3);
  };

  return (
    <>
      {/* Step 1: Select Service */}
      {step === 1 && (
        <>
          <div className="space-y-3">
            {services.map((svc) => {
              const isActive = selected === svc.id;
              return (
                <button
                  key={svc.id}
                  onClick={() => setSelected(svc.id)}
                  className={[
                    'w-full rounded-2xl border p-5 text-left transition-all duration-200',
                    'focus-visible:ring-si-primary/40 focus:outline-none focus-visible:ring-2',
                    isActive
                      ? 'border-si-primary/30 bg-si-primary/5 shadow-[0_0_0_3px_rgba(45,169,255,0.1)]'
                      : 'hover:border-si-primary/20 border-gray-100 bg-white hover:shadow-sm',
                  ].join(' ')}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{svc.emoji}</span>
                      <div>
                        <div
                          className={`text-base font-bold transition-colors ${isActive ? 'text-si-primary' : 'text-si-ink'}`}
                        >
                          {svc.label}
                        </div>
                        <div className="text-si-ink/55 mt-0.5 text-sm">{svc.description}</div>
                      </div>
                    </div>
                    <div
                      className={`ml-4 shrink-0 rounded-full p-1.5 transition-all ${isActive ? 'bg-si-primary text-white' : 'text-si-ink/30 bg-gray-100'}`}
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d={isActive ? 'M5 13l4 4L19 7' : 'M9 5l7 7-7 7'}
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={handleNextStep}
              disabled={!selected}
              className="btn-primary inline-flex flex-1 items-center justify-center gap-2 rounded-xl py-3.5 font-semibold disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H7"
                />
              </svg>
            </button>
            <a
              href="tel:18002102022"
              className="btn-ghost inline-flex flex-1 items-center justify-center rounded-xl py-3.5 font-semibold"
            >
              Call Us Instead
            </a>
          </div>
        </>
      )}

      {/* Step 2: Form Input */}
      {step === 2 && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-si-ink mb-1 block text-sm font-semibold">Full Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border-si-primary/20 focus:ring-si-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-si-ink mb-1 block text-sm font-semibold">Email Address *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="border-si-primary/20 focus:ring-si-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label className="text-si-ink mb-1 block text-sm font-semibold">Phone Number *</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="border-si-primary/20 focus:ring-si-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2"
              placeholder="+91"
            />
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="btn-ghost inline-flex flex-1 items-center justify-center rounded-xl py-3.5 font-semibold"
            >
              Back
            </button>
            <button
              type="submit"
              className="btn-primary inline-flex flex-1 items-center justify-center gap-2 rounded-xl py-3.5 font-semibold"
            >
              Submit Request
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </div>
        </form>
      )}

      {/* Step 3: Success State */}
      {step === 3 && (
        <div className="text-center rounded-2xl border border-green-100 bg-green-50 p-8 shadow-sm">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-green-800">Request Received!</h2>
          <p className="mt-2 text-green-700">
            Thank you, {formData.name}. Our team will contact you shortly to discuss your {services.find((s) => s.id === selected)?.label} needs.
          </p>
          <button
            onClick={() => {
              setStep(1);
              setSelected('');
              setFormData({ name: '', email: '', phone: '' });
            }}
            className="mt-6 font-semibold text-green-700 underline hover:text-green-800"
          >
            Start Another Request
          </button>
        </div>
      )}
    </>
  );
}
