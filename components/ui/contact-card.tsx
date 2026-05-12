import React from 'react';

export function ContactCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="card-vibrant hover-glow-blue hover-lift group flex items-center gap-4 rounded-xl border border-white/50 p-4 shadow-md ring-1 ring-black/5 transition-all duration-300">
      <div className="text-si-primary bg-si-primary/8 rounded-lg p-2.5 text-xl transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <div>
        <div className="text-si-ink/40 text-[10px] font-bold tracking-wider uppercase">{label}</div>
        <div className="text-si-ink leading-tight font-bold">{value}</div>
      </div>
    </div>
  );
}
