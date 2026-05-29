'use client';

import { useReportWebVitals } from 'next/web-vitals';

/**
 * Web Vitals Reporting Component
 * 
 * Sends Core Web Vitals metrics to console (dev) or analytics endpoint (production)
 * 
 * Core Web Vitals:
 * - CLS (Cumulative Layout Shift): < 0.1 good, < 0.25 needs improvement
 * - FID (First Input Delay): < 100ms good, < 300ms needs improvement
 * - LCP (Largest Contentful Paint): < 2.5s good, < 4s needs improvement
 * - FCP (First Contentful Paint): < 1.8s good, < 3s needs improvement
 * - TTFB (Time to First Byte): < 0.8s good, < 1.8s needs improvement
 * - INP (Interaction to Next Paint): < 200ms good, < 500ms needs improvement
 */
export function WebVitals() {
  useReportWebVitals((metric) => {
    // In development, log to console
    if (process.env.NODE_ENV === 'development') {
      console.log('[Web Vitals]', {
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        id: metric.id,
      });
    }

    // In production, send to analytics endpoint
    // TODO: Replace with your analytics endpoint (Google Analytics, Vercel Analytics, etc.)
    if (process.env.NODE_ENV === 'production') {
      const body = JSON.stringify({
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
        id: metric.id,
        navigationType: metric.navigationType,
      });

      // Example: Send to Google Analytics
      if (typeof window !== 'undefined' && 'gtag' in window) {
        // @ts-ignore
        window.gtag('event', metric.name, {
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_category: 'Web Vitals',
          event_label: metric.id,
          non_interaction: true,
        });
      }

      // Example: Send to custom analytics endpoint
      // fetch('/api/analytics/web-vitals', {
      //   method: 'POST',
      //   body,
      //   headers: { 'Content-Type': 'application/json' },
      //   keepalive: true,
      // }).catch(console.error);
    }
  });

  return null;
}
