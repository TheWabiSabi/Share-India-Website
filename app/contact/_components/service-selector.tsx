'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface ServiceOption {
  id: string;
  number: string;
  label: string;
  href: string;
  description: string;
}

const services: ServiceOption[] = [
  {
    id: 'business-insurance',
    number: '01',
    label: 'Business Insurance',
    href: '/corporate-insurance',
    description: 'Protect your business with comprehensive corporate coverage.',
  },
  {
    id: 'employee-benefits',
    number: '02',
    label: 'Employee Benefits',
    href: '/corporate-insurance/employee-benefits-insurance',
    description: 'Comprehensive group health & benefits for your team.',
  },
  {
    id: 'personal-insurance',
    number: '03',
    label: 'Personal Insurance',
    href: '/retail',
    description: 'Individual and family health, life, motor & home plans.',
  },
  {
    id: 'retirement-wealth',
    number: '04',
    label: 'Retirement & Wealth',
    href: '/retail/life',
    description: 'Plan for your future with smart life & savings solutions.',
  },
];

export default function ServicesSelector() {
  const [selected, setSelected] = useState<string>('');
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [loading, setLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const handleNextStep = () => {
    if (selected) setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setApiError(null);

    const selectedService = services.find((s) => s.id === selected)?.label || 'General Inquiry';

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `Inquiry: ${selectedService}`,
          message: `Phone: ${formData.phone}\nService Interested: ${selectedService}`,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong');
      }

      setStep(3);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setApiError(err.message);
    } finally {
      setLoading(false);
    }
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
                      <span className="text-si-primary border-si-primary/20 bg-si-primary/5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border text-xs font-bold tabular-nums">
                        {svc.number}
                      </span>
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
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
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

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={handleNextStep}
              disabled={!selected}
              className="bg-si-primary hover:bg-si-primary-800 hover:shadow-si-primary-700/20 inline-flex flex-1 items-center justify-center gap-3 rounded-xl py-4 text-sm font-bold tracking-wider text-white uppercase transition-all hover:shadow-lg disabled:cursor-not-allowed disabled:bg-slate-300 disabled:opacity-30"
            >
              Continue &rarr;
            </button>
            <Link
              href="tel:18002102022"
              className="hover:text-si-primary-700 inline-flex flex-1 items-center justify-center rounded-xl border-2 border-slate-200 py-4 text-sm font-bold tracking-wider text-slate-600 uppercase transition-colors hover:border-sky-200 hover:bg-sky-50"
            >
              Call Us Instead
            </Link>
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
              disabled={loading}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border-si-primary/20 focus:ring-si-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2 disabled:bg-gray-50"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-si-ink mb-1 block text-sm font-semibold">Email Address *</label>
            <input
              type="email"
              required
              disabled={loading}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="border-si-primary/20 focus:ring-si-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2 disabled:bg-gray-50"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label className="text-si-ink mb-1 block text-sm font-semibold">Phone Number *</label>
            <input
              type="tel"
              required
              disabled={loading}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="border-si-primary/20 focus:ring-si-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2 disabled:bg-gray-50"
              placeholder="+91"
            />
          </div>

          {apiError && (
            <div className="rounded-lg border border-red-100 bg-red-50 p-3 text-sm font-medium text-red-600">
              ⚠️ {apiError}
            </div>
          )}

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              disabled={loading}
              onClick={() => setStep(1)}
              className="hover:text-si-primary-700 inline-flex flex-1 items-center justify-center rounded-xl border-2 border-slate-200 py-4 text-sm font-bold tracking-wider text-slate-600 uppercase transition-colors hover:border-sky-200 hover:bg-sky-50 disabled:opacity-50"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-si-primary hover:bg-si-primary-800 hover:shadow-si-primary-700/20 inline-flex flex-1 items-center justify-center gap-3 rounded-xl py-4 text-sm font-bold tracking-wider text-white uppercase transition-all hover:shadow-lg disabled:bg-slate-400"
            >
              {loading ? 'Sending...' : 'Submit Request →'}
            </button>
          </div>
        </form>
      )}

      {/* Step 3: Success State */}
      {step === 3 && (
        <div className="rounded-2xl border border-green-100 bg-green-50 p-8 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg
              className="h-8 w-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-green-800">Request Received!</h2>
          <p className="mt-2 text-green-700">
            Thank you, {formData.name}. Our team will contact you shortly to discuss your{' '}
            {services.find((s) => s.id === selected)?.label} needs.
          </p>
          <button
            onClick={() => {
              setStep(1);
              setSelected('');
              setFormData({ name: '', email: '', phone: '' });
              setApiError(null);
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
