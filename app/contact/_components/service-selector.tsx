'use client';

import React, { useState } from 'react';
import Link from 'next/link';

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

  return (
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
          disabled={!selected}
          className="btn-primary inline-flex flex-1 items-center justify-center gap-2 rounded-xl py-3.5 font-semibold disabled:cursor-not-allowed disabled:opacity-40"
        >
          Get Started
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M17 8l4 4m0 0l-4 4m4-4H7"
            />
          </svg>
        </button>
        <Link
          href="/contact"
          className="btn-ghost inline-flex flex-1 items-center justify-center rounded-xl py-3.5 font-semibold"
        >
          Contact Us
        </Link>
      </div>

      {selected && (
        <div className="border-si-primary/15 from-si-primary/5 mt-5 overflow-hidden rounded-2xl border bg-gradient-to-br to-white p-5">
          <div className="accent-bar-gradient mb-3 h-1 w-10 rounded" />
          <p className="text-si-ink font-semibold">
            Selected:{' '}
            <span className="text-gradient-primary">
              {services.find((s) => s.id === selected)?.label}
            </span>
          </p>
          <p className="text-si-ink/60 mt-1 text-sm">
            {services.find((s) => s.id === selected)?.description}
          </p>
        </div>
      )}
    </>
  );
}
