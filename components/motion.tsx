'use client';

import React, { PropsWithChildren } from 'react';
import { motion, type Variants, useReducedMotion } from 'framer-motion';
import { t, durations, type EaseKey } from '@/lib/anim';

/* =========
   Variants (no transitions here)
   ========= */
export const variants = {
  fadeUp: (distance = 18): Variants => ({
    hidden: { opacity: 0, y: distance, scale: 0.995 },
    show: { opacity: 1, y: 0, scale: 1.0 },
  }),

  fadeIn: (): Variants => ({
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }),

  fly: (dir: 'up' | 'down' | 'left' | 'right', amount = 24): Variants => {
    const o = { x: 0, y: 0 };
    if (dir === 'up') o.y = amount;
    if (dir === 'down') o.y = -amount;
    if (dir === 'left') o.x = amount;
    if (dir === 'right') o.x = -amount;
    return {
      hidden: { opacity: 0, ...o },
      show: { opacity: 1, x: 0, y: 0 },
    };
  },
};

/* =========
   Primitives
   ========= */

export function FadeUp({
  children,
  distance = 18,
  delay = 0,
  duration = durations.base,
  ease = 'standard',
  once = true,
  amount = 0.25,
  className,
}: PropsWithChildren<{
  distance?: number;
  delay?: number;
  duration?: number;
  ease?: EaseKey;
  once?: boolean;
  amount?: number;
  className?: string;
}>) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={variants.fadeUp(distance)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={t({ delay, duration, ease })}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({
  children,
  delay = 0,
  duration = durations.base,
  ease = 'standard',
  once = true,
  amount = 0.25,
  className,
}: PropsWithChildren<{
  delay?: number;
  duration?: number;
  ease?: EaseKey;
  once?: boolean;
  amount?: number;
  className?: string;
}>) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={variants.fadeIn()}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={t({ delay, duration, ease })}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  delayChildren = 0.05,
  staggerChildren = 0.08,
  delay = 0,
  once = true,
  amount = 0.2,
  className,
}: PropsWithChildren<{
  delayChildren?: number;
  staggerChildren?: number;
  delay?: number;
  once?: boolean;
  amount?: number;
  className?: string;
}>) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            ...t({ delay }),
            staggerChildren,
            delayChildren,
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}

export function Item({
  children,
  duration = durations.short,
  ease = 'standard',
  className,
}: PropsWithChildren<{ duration?: number; ease?: EaseKey; className?: string }>) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 12, scale: 0.98 },
        show: { opacity: 1, y: 0, scale: 1.0 },
      }}
      transition={t({ duration, ease })}
    >
      {children}
    </motion.div>
  );
}

export function FlyIn({
  children,
  dir = 'up',
  amount = 24,
  delay = 0,
  duration = durations.base,
  ease = 'standard',
  once = true,
  amountInView = 0.3,
  className,
}: PropsWithChildren<{
  dir?: 'up' | 'down' | 'left' | 'right';
  amount?: number;
  delay?: number;
  duration?: number;
  ease?: EaseKey;
  once?: boolean;
  amountInView?: number;
  className?: string;
}>) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={variants.fly(dir, amount)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: amountInView }}
      transition={t({ delay, duration, ease })}
    >
      {children}
    </motion.div>
  );
}

/* Springs for micro-interactions */
export const springs = {
  hoverLift: { type: 'spring', stiffness: 380, damping: 28, mass: 0.6 } as const,
  press: { type: 'spring', stiffness: 600, damping: 40, mass: 0.8 } as const,
  gentleFloat: { type: 'spring', stiffness: 120, damping: 18, mass: 0.6 } as const,
};
export { t, durations };
