import React from 'react';

const Tile = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="group hover:border-si-primary/20 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-lg">
    <div className="text-si-primary bg-si-primary/8 mb-4 inline-flex rounded-xl p-2.5 text-xl transition-transform group-hover:scale-105">
      {icon}
    </div>
    <h3 className="text-si-ink mb-2 font-bold">{title}</h3>
    <p className="text-si-ink/60 text-sm leading-relaxed">{children}</p>
  </div>
);

export default Tile;
