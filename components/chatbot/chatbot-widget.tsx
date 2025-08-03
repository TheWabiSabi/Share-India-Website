'use client';

import { useState } from 'react';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chatbot Button */}
      <div className="fixed right-6 bottom-6 z-50">
        <button
          onClick={toggleChatbot}
          className="group bg-si-bluegreen text-si-offwhite hover:bg-si-dark focus:ring-si-bluegreen flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:ring-2 focus:ring-offset-2 focus:outline-none sm:h-16 sm:w-16"
          aria-label="Open chatbot"
        >
          {isOpen ? (
            // Close icon
            <svg
              className="h-6 w-6 transition-transform duration-300 sm:h-7 sm:w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Chat icon
            <svg
              className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 sm:h-7 sm:w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          )}
        </button>

        {/* Pulse animation when closed */}
        {!isOpen && (
          <div className="bg-si-bluegreen/30 absolute inset-0 -z-10 animate-ping rounded-full"></div>
        )}
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed right-6 bottom-24 z-50 w-80 sm:w-96">
          <div className="bg-si-white overflow-hidden rounded-2xl shadow-2xl">
            {/* Header */}
            <div className="bg-si-bluegreen text-si-offwhite px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-si-offwhite/20 flex h-8 w-8 items-center justify-center rounded-full">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Share India Assistant</h3>
                    <p className="text-xs opacity-90">Online • Typically replies instantly</p>
                  </div>
                </div>
                <button
                  onClick={toggleChatbot}
                  className="text-si-offwhite/80 hover:text-si-offwhite rounded-full p-1 transition-colors"
                  aria-label="Close chatbot"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Chat Content */}
            <div className="h-80 overflow-y-auto p-4">
              {/* Welcome Message */}
              <div className="mb-4">
                <div className="bg-si-slate/30 max-w-xs rounded-2xl rounded-bl-sm px-4 py-3">
                  <p className="text-si-dark text-sm">
                    Hello! 👋 I'm your Share India assistant. How can I help you today?
                  </p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                <p className="text-si-dark/70 text-xs font-medium tracking-wide uppercase">
                  Quick Actions
                </p>
                <div className="space-y-2">
                  <button className="border-si-bluegreen/20 text-si-bluegreen hover:bg-si-bluegreen hover:text-si-offwhite block w-full rounded-lg border px-3 py-2 text-left text-sm transition-colors">
                    📊 Get a Quote
                  </button>
                  <button className="border-si-bluegreen/20 text-si-bluegreen hover:bg-si-bluegreen hover:text-si-offwhite block w-full rounded-lg border px-3 py-2 text-left text-sm transition-colors">
                    📞 Schedule a Consultation
                  </button>
                  <button className="border-si-bluegreen/20 text-si-bluegreen hover:bg-si-bluegreen hover:text-si-offwhite block w-full rounded-lg border px-3 py-2 text-left text-sm transition-colors">
                    💡 Learn About Our Services
                  </button>
                  <button className="border-si-bluegreen/20 text-si-bluegreen hover:bg-si-bluegreen hover:text-si-offwhite block w-full rounded-lg border px-3 py-2 text-left text-sm transition-colors">
                    🏢 Find Our Offices
                  </button>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="border-si-slate/30 border-t p-4">
              <div className="bg-si-slate/20 flex items-center rounded-lg px-3 py-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="text-si-dark placeholder-si-dark/50 flex-1 bg-transparent text-sm outline-none"
                />
                <button className="text-si-bluegreen hover:text-si-dark ml-2 transition-colors">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
