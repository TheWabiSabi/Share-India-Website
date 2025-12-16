'use client';

import React, { useState } from 'react';
import { FaRobot, FaTimes } from 'react-icons/fa';

export default function FloatingAgentButton() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div className="group relative">
        {/* Tooltip */}
        <div className="absolute bottom-full left-0 mb-2 hidden w-64 rounded-lg bg-slate-900 px-4 py-3 text-sm text-white shadow-xl group-hover:block">
          <p className="font-semibold">Talk to our 24/7 live agent now!</p>
          <p className="mt-1 text-xs text-gray-300">Get instant help with your insurance needs</p>
          <div className="absolute -bottom-1 left-6 h-2 w-2 rotate-45 bg-slate-900" />
        </div>

        {/* Main Button */}
        <a
          href="https://insurai.shareindiainsurance.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-2xl transition-all hover:scale-110 hover:shadow-blue-500/50"
          aria-label="Talk to InsurAI - 24/7 Live Agent"
        >
          <FaRobot className="animate-pulse text-2xl" />

          {/* Pulse Animation */}
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
        </a>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white shadow-lg transition-all hover:bg-red-600"
          aria-label="Close agent button"
        >
          <FaTimes className="text-xs" />
        </button>
      </div>
    </div>
  );
}
