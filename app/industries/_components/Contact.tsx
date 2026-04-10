import React from 'react';

const Contact = ({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) => (
  <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all hover:border-si-primary/20 hover:shadow-md">
    <div>
      <div className="text-si-ink/40 text-xs font-bold tracking-wide uppercase">{label}</div>
      <div className="text-si-ink mt-0.5 text-sm font-semibold">{value}</div>
    </div>
    <div className="text-si-primary bg-si-primary/8 rounded-lg p-2 text-lg">{icon}</div>
  </div>
);

export default Contact;
