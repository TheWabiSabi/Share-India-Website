import React from 'react';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import { Bullet } from './bullet';

export function FeatureCard({
  icon,
  title,
  description,
  listItems,
  linkText = 'Learn More',
  linkHref,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  listItems?: string[];
  linkText?: string;
  linkHref?: string;
}) {
  return (
    <div className="card-vibrant hover-glow-blue hover-lift group rounded-2xl border border-white/50 p-6 shadow-md ring-1 ring-black/5 transition-all duration-300">
      <div className="mb-4 flex items-center gap-4">
        <div className="text-si-primary bg-si-primary/8 rounded-xl p-3 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-si-ink text-xl font-bold tracking-tight">{title}</h3>
      </div>
      <div className="accent-bar-gradient mb-4 h-1 w-10 rounded transition-all group-hover:w-16" />
      <p className="text-si-ink/60 mb-5 text-[15px] leading-relaxed">{description}</p>

      {listItems && listItems.length > 0 && (
        <ul className="space-y-3">
          {listItems.map((item, index) => (
            <li
              key={index}
              className="text-si-ink/70 flex items-start gap-2.5 text-[14px] leading-snug"
            >
              <Bullet /> {item}
            </li>
          ))}
        </ul>
      )}

      {linkHref && (
        <div className="mt-6">
          <Link
            href={linkHref}
            className="text-si-primary hover:text-si-primary/80 inline-flex items-center text-sm font-bold tracking-wide uppercase transition-colors"
          >
            {linkText} <FaChevronRight className="ml-1.5 text-[10px]" />
          </Link>
        </div>
      )}
    </div>
  );
}
