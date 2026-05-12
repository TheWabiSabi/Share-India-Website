import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

export function Bullet({ icon }: { icon?: React.ReactNode }) {
  if (icon) {
    return <span className="text-si-primary mt-1 shrink-0">{icon}</span>;
  }
  return <FaChevronRight className="text-si-primary mt-1 h-3 w-3 shrink-0" />;
}
