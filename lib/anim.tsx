// src/lib/anim.ts  (NO "use client")
export type EaseKey = 'standard' | 'emphasized' | 'decel' | 'accel' | 'linear';

// A valid Framer Motion Easing: 4-tuple or a keyword
export type EaseValue =
  | [number, number, number, number]
  | 'linear'
  | 'easeIn'
  | 'easeOut'
  | 'easeInOut';

export const easings: Record<EaseKey, EaseValue> = {
  standard: [0.22, 1.0, 0.36, 1.0],
  emphasized: [0.2, 0.0, 0.0, 1.0],
  decel: [0.05, 0.7, 0.1, 1.0],
  accel: [0.3, 0.0, 0.8, 0.15],
  linear: 'linear',
};

export const durations = {
  xshort: 0.25,
  short: 0.4,
  base: 0.6,
  long: 0.8,
  xlong: 1.0,
} as const;

export function t({
  duration = durations.base,
  delay = 0,
  ease = 'standard' as EaseKey,
}: { duration?: number; delay?: number; ease?: EaseKey } = {}) {
  // Return shape matches Framer Motion's Transition
  return { duration, delay, ease: easings[ease] as EaseValue };
}
