import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const Card = ({
  icon,
  title,
  body,
  bullets,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  bullets: string[];
}) => (
  <div className="card-vibrant hover-glow-blue hover-lift group rounded-2xl border border-white/50 p-6 shadow-md ring-1 ring-black/5 transition-all duration-300">
    <div className="mb-4 flex items-center gap-4">
      <div className="text-si-primary bg-si-primary/8 rounded-xl p-3 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-si-ink text-xl font-bold tracking-tight">{title}</h3>
    </div>
    <div className="accent-bar-gradient mb-4 h-1 w-10 rounded transition-all group-hover:w-16" />
    <p className="text-si-ink/60 text-[15px] leading-relaxed">{body}</p>
    <ul className="mt-6 space-y-3">
      {bullets.map((b) => (
        <li key={b} className="text-si-ink/70 flex items-start gap-2.5 text-[14.5px] leading-snug">
          <FaChevronRight className="text-si-primary mt-1 h-3 w-3 shrink-0 opacity-60" />
          {b}
        </li>
      ))}
    </ul>
  </div>
);

export default Card;
