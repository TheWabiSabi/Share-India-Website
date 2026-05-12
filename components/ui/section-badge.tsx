import React from 'react';

export function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="badge-chip float-slow group ring-si-primary/10 mb-4 inline-flex cursor-default items-center shadow-sm ring-1">
      <span className="bg-si-primary/40 relative mr-2 flex h-2 w-2 items-center justify-center rounded-full">
        <span className="bg-si-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
        <span className="bg-si-primary relative inline-flex h-1 w-1 rounded-full shadow-[0_0_8px_rgba(45,169,255,0.8)]"></span>
      </span>
      <span className="text-si-ink/80 group-hover:text-si-primary text-[11px] font-bold tracking-[0.1em] uppercase transition-colors duration-300">
        {children}
      </span>
    </span>
  );
}
