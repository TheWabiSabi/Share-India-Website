/* eslint-disable @next/next/no-img-element */

'use client';

import { useState } from 'react';

const testimonials = [
  {
    name: 'Amit Sharma',
    role: 'Business Owner',
    text: 'Share India helped me secure the right insurance for my business. Their team is knowledgeable and responsive!',
    image: 'https://ui-avatars.com/api/?name=Amit+Sharma&background=6bb7b7&color=fff',
    rating: 5,
  },
  {
    name: 'Priya Verma',
    role: 'HR Manager',
    text: 'The employee benefits solutions have made a real difference for our staff. Highly recommended!',
    image: 'https://ui-avatars.com/api/?name=Priya+Verma&background=6bb7b7&color=fff',
    rating: 4,
  },
  {
    name: 'Rahul Singh',
    role: 'Individual Client',
    text: 'I found the perfect personal insurance plan thanks to their expert guidance.',
    image: 'https://ui-avatars.com/api/?name=Rahul+Singh&background=6bb7b7&color=fff',
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="mb-2 flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < count ? 'text-si-bluegreen' : 'text-si-slate/50'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <polygon points="10,2 12.59,7.36 18.51,8.09 14,12.26 15.18,18.09 10,15.27 4.82,18.09 6,12.26 1.49,8.09 7.41,7.36" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const t = testimonials[idx];

  return (
    <div className="bg-si-slate/80 flex min-h-screen flex-col items-center justify-center px-4 py-12">
      <h1 className="text-si-bluegreen -mt-10 mb-20 text-center text-3xl font-bold">
        Testimonials
      </h1>
      <div className="relative flex w-full max-w-md flex-col items-center">
        {/* Card */}
        <div className="bg-si-offwhite border-si-bluegreen/20 animate-fade-in flex flex-col items-center rounded-2xl border px-8 pt-16 pb-10 shadow-xl transition-all duration-500 ease-in-out">
          {/* Profile Image */}
          <img
            src={t.image}
            alt={t.name}
            className="border-si-bluegreen bg-si-offwhite absolute -top-12 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full border-4 shadow-lg"
            style={{ objectFit: 'cover' }}
          />
          {/* Stars */}
          <StarRating count={t.rating} />
          {/* Text */}
          <p className="text-si-dark mb-6 text-center text-lg font-medium">&quot;{t.text}&quot;</p>
          {/* Name & Role */}
          <div className="flex flex-col items-center">
            <span className="text-si-bluegreen text-lg font-semibold">{t.name}</span>
            <span className="text-si-slate text-sm">{t.role}</span>
          </div>
        </div>
        {/* Navigation */}
        <button
          aria-label="Previous"
          onClick={prev}
          className="bg-si-white/80 hover:bg-si-bluegreen/20 text-si-bluegreen absolute top-1/2 left-0 -translate-y-1/2 rounded-full p-2 shadow transition-colors"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              d="M15 19l-7-7 7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          aria-label="Next"
          onClick={next}
          className="bg-si-white/80 hover:bg-si-bluegreen/20 text-si-bluegreen absolute top-1/2 right-0 -translate-y-1/2 rounded-full p-2 shadow transition-colors"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              d="M9 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {/* Dots */}
        <div className="mt-6 flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-3 w-3 rounded-full transition-all ${
                i === idx ? 'bg-si-bluegreen' : 'bg-si-slate/40'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
