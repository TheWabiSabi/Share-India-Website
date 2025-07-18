'use client';
import { useEffect, useRef } from 'react';
export default function HorizontalCarousal() {
  // Fix: Properly type the ref for HTMLDivElement
  const scrollTextRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (scrollTextRef.current) {
        const scrollY = window.scrollY;
        const scrollSpeed = 0.4; // Adjust this value to control scroll sensitivity
        // Now this will work without TypeScript errors
        scrollTextRef.current.style.transform = `translateX(${-scrollY * scrollSpeed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div
        ref={scrollTextRef}
        className="horizontal-scroll-text font-bold whitespace-nowrap text-gray-200 select-none"
      >
        What We Do What We Do What We Do What We Do What We Do What We Do What We Do What We Do
      </div>
    </div>
  );
}
