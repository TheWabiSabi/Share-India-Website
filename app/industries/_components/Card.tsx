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
  <div className="group hover:border-si-primary/20 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-lg">
    <div className="mb-4 flex items-center gap-3">
      <div className="text-si-primary bg-si-primary/8 rounded-xl p-2.5 transition-transform group-hover:scale-105">
        {icon}
      </div>
      <h3 className="text-si-ink text-lg font-bold">{title}</h3>
    </div>
    <p className="text-si-ink/70 text-sm leading-relaxed">{body}</p>
    <ul className="mt-4 space-y-2">
      {bullets.map((b) => (
        <li key={b} className="text-si-ink/70 flex items-start gap-2 text-sm">
          <FaChevronRight className="text-si-primary mt-1 h-3 w-3 shrink-0" />
          {b}
        </li>
      ))}
    </ul>
  </div>
);

export default Card;
