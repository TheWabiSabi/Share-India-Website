"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Business Owner",
    text: "Share India helped me secure the right insurance for my business. Their team is knowledgeable and responsive!",
    image: "https://ui-avatars.com/api/?name=Amit+Sharma&background=6bb7b7&color=fff",
    rating: 5,
  },
  {
    name: "Priya Verma",
    role: "HR Manager",
    text: "The employee benefits solutions have made a real difference for our staff. Highly recommended!",
    image: "https://ui-avatars.com/api/?name=Priya+Verma&background=6bb7b7&color=fff",
    rating: 4,
  },
  {
    name: "Rahul Singh",
    role: "Individual Client",
    text: "I found the perfect personal insurance plan thanks to their expert guidance.",
    image: "https://ui-avatars.com/api/?name=Rahul+Singh&background=6bb7b7&color=fff",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < count ? "text-si-bluegreen" : "text-si-slate/50"}`}
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
    <div className="bg-si-slate/80 min-h-screen flex flex-col items-center justify-center py-12 px-4">
      <h1 className="text-si-bluegreen text-3xl font-bold mb-10 mt-8 text-center">
        Testimonials
      </h1>
      <div className="relative w-full max-w-md flex flex-col items-center">
        {/* Card */}
        <div className="bg-si-offwhite rounded-2xl shadow-xl border border-si-bluegreen/20 px-8 pt-16 pb-10 flex flex-col items-center transition-all duration-500 ease-in-out animate-fade-in">
          {/* Profile Image */}
          <img
            src={t.image}
            alt={t.name}
            className="w-24 h-24 rounded-full border-4 border-si-bluegreen shadow-lg absolute -top-12 left-1/2 -translate-x-1/2 bg-si-offwhite"
            style={{ objectFit: "cover" }}
          />
          {/* Stars */}
          <StarRating count={t.rating} />
          {/* Text */}
          <p className="text-si-dark text-lg mb-6 text-center font-medium">&quot;{t.text}&quot;</p>
          {/* Name & Role */}
          <div className="flex flex-col items-center">
            <span className="text-si-bluegreen font-semibold text-lg">{t.name}</span>
            <span className="text-si-slate text-sm">{t.role}</span>
          </div>
        </div>
        {/* Navigation */}
        <button
          aria-label="Previous"
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-si-white/80 hover:bg-si-bluegreen/20 text-si-bluegreen rounded-full shadow p-2 transition-colors"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          aria-label="Next"
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-si-white/80 hover:bg-si-bluegreen/20 text-si-bluegreen rounded-full shadow p-2 transition-colors"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {/* Dots */}
        <div className="flex gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === idx ? "bg-si-bluegreen" : "bg-si-slate/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
