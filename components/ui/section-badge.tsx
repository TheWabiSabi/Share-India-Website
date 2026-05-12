import React from 'react';

export function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="badge-chip float-slow group mb-4 inline-flex items-center cursor-default shadow-sm ring-1 ring-si-primary/10">
      <span className="bg-si-primary/40 relative flex h-2 w-2 items-center justify-center rounded-full mr-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-si-primary opacity-75"></span>
        <span className="relative inline-flex h-1 w-1 rounded-full bg-si-primary shadow-[0_0_8px_rgba(45,169,255,0.8)]"></span>
      </span>
      <span className="text-si-ink/80 text-[11px] font-bold tracking-[0.1em] uppercase group-hover:text-si-primary transition-colors duration-300">
        {children}
      </span>
    </span>
  );
}
