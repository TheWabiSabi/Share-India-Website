// ChatbotWidget.tsx
'use client';
import { useState, useEffect, useRef } from 'react';
import type { ChatbotData, ChatMessage, ChatbotState, NavigationAction } from './chatbot-types';
import chatbotData from './responses.json';
<style jsx global>{`
  @keyframes breathe {
    0% {
      transform: scale(1);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.18);
    }
    50% {
      transform: scale(1.065);
      box-shadow: 0 14px 30px rgba(0, 0, 0, 0.22);
    }
    100% {
      transform: scale(1);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.18);
    }
  }
  @keyframes ripple {
    0% {
      transform: scale(1);
      opacity: 0.45;
    }
    70% {
      transform: scale(2.2);
      opacity: 0.05;
    }
    100% {
      transform: scale(2.35);
      opacity: 0;
    }
  }
  @keyframes ripple2 {
    0% {
      transform: scale(1);
      opacity: 0.3;
    }
    70% {
      transform: scale(2.8);
      opacity: 0.04;
    }
    100% {
      transform: scale(3);
      opacity: 0;
    }
  }
  .animate-breathe {
    animation: breathe 2.2s ease-in-out infinite;
  }
  .animate-ripple {
    animation: ripple 2.4s ease-out infinite;
  }
  .animate-ripple2 {
    animation: ripple2 3s 0.6s ease-out infinite;
  }

  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .animate-breathe,
    .animate-ripple,
    .animate-ripple2 {
      animation: none !important;
    }
  }
`}</style>;
const ChatbotWidget: React.FC = () => {
  const [state, setState] = useState<ChatbotState>({
    isOpen: false,
    currentFlow: 'welcome',
    messages: [],
    isLoading: false,
  });

  // Add ref for the chat container
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Type-safe chatbot data
  const data: ChatbotData = chatbotData as unknown as ChatbotData;

  // Function to scroll to bottom
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  // Auto-scroll when messages change
  useEffect(() => {
    scrollToBottom();
  }, [state.messages]);

  const toggleChatbot = (): void => {
    setState((prev) => ({
      ...prev,
      isOpen: !prev.isOpen,
      currentFlow: prev.isOpen ? 'welcome' : prev.currentFlow,
      messages: prev.isOpen ? [] : prev.messages,
    }));
  };

  const handleButtonClick = (action: NavigationAction, url?: string): void => {
    setState((prev) => ({ ...prev, isLoading: true }));

    // Add user message
    const userMessage: ChatMessage = {
      type: 'user',
      message: action.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
      timestamp: new Date(),
    };

    if (action === 'redirect' && url) {
      window.open(url, '_blank');
      setState((prev) => ({ ...prev, isLoading: false }));
      return;
    }

    // Get flow data
    const flowData = data.chatbot_flows[action];
    if (flowData) {
      const botResponse: ChatMessage = {
        type: 'bot',
        message: flowData.message,
        answer: flowData.answer,
        buttons: flowData.buttons,
        timestamp: new Date(),
      };

      setTimeout(() => {
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, userMessage, botResponse],
          currentFlow: action,
          isLoading: false,
        }));
      }, 500);
    } else {
      const fallbackResponse: ChatMessage = {
        type: 'bot',
        message: data.fallback_responses.default.message,
        buttons: data.chatbot_flows.welcome.buttons,
        timestamp: new Date(),
      };

      setTimeout(() => {
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, userMessage, fallbackResponse],
          currentFlow: 'welcome',
          isLoading: false,
        }));
      }, 500);
    }
  };

  const handleQuickAction = (action: NavigationAction): void => {
    const flowData = data.chatbot_flows[action];
    if (flowData) {
      const botResponse: ChatMessage = {
        type: 'bot',
        message: flowData.message,
        answer: flowData.answer,
        buttons: flowData.buttons,
        timestamp: new Date(),
      };

      setState((prev) => ({
        ...prev,
        messages: [botResponse],
        currentFlow: action,
      }));
    }
  };

  // Initialize welcome message
  useEffect(() => {
    if (state.isOpen && state.messages.length === 0) {
      const welcomeFlow = data.chatbot_flows[state.currentFlow];
      const welcomeMessage: ChatMessage = {
        type: 'bot',
        message: welcomeFlow.message,
        buttons: welcomeFlow.buttons,
        timestamp: new Date(),
      };

      setState((prev) => ({
        ...prev,
        messages: [welcomeMessage],
      }));
    }
  }, [state.isOpen, data.chatbot_flows, state.currentFlow, state.messages.length]);

  return (
    <>
      {/* Chatbot Button (refined) */}
      <div className="fixed right-6 bottom-6 z-50">
        <div className="flex items-end gap-3">
          {/* Prompt bubble (clickable, hidden on xs) */}
          <button
            type="button"
            onClick={toggleChatbot}
            aria-label="Open chat"
            className="bg-si-primary hover:bg-si-primary-600 relative hidden rounded-2xl px-4 py-2 text-sm text-white shadow-xl transition-all duration-200 select-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:outline-none sm:block"
          >
            <span className="block">What can I help you with today?</span>

            {/* Tail */}
            <span
              aria-hidden="true"
              className="bg-si-primary absolute -right-1.5 bottom-2 h-3 w-3 rotate-45"
            />
            {/* Typing dot badge */}
            <span
              aria-hidden="true"
              className="text-si-primary absolute -right-1 inline-flex items-center justify-center rounded-full bg-white px-1.5 py-0.5 text-[10px] font-semibold shadow"
            >
              • • •
            </span>
          </button>

          {/* Round launcher (breathing + ripples when closed) */}
          <div className="relative">
            {/* Ripples show only when closed */}
            {!state.isOpen && (
              <>
                <span className="animate-ripple bg-si-primary/30 pointer-events-none absolute inset-0 -z-10 rounded-full" />
                <span className="animate-ripple2 bg-si-primary/20 pointer-events-none absolute inset-0 -z-10 rounded-full" />
              </>
            )}

            <button
              type="button"
              aria-label={state.isOpen ? 'Close chatbot' : 'Open chatbot'}
              aria-expanded={state.isOpen}
              onClick={toggleChatbot}
              className={`group flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl transition-all focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:outline-none ${state.isOpen ? 'bg-si-primary hover:bg-si-primary-600' : 'bg-si-primary hover:bg-si-primary-600'} ${!state.isOpen ? 'animate-breathe' : ''} sm:h-16 sm:w-16`}
            >
              {state.isOpen ? (
                /* Close icon */
                <svg
                  className="h-6 w-6 sm:h-7 sm:w-7"
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
                /* Chat icon */
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
          </div>
        </div>
      </div>

      {/* Chatbot Window */}
      {state.isOpen && (
        <div className="fixed right-6 bottom-24 z-50 w-80 sm:w-96">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
            {/* Header */}
            <div className="bg-si-primary px-6 py-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
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
                  className="rounded-full p-1 text-white/80 transition-colors hover:text-white"
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

            {/* Chat Content - Added ref here */}
            <div ref={chatContainerRef} className="h-80 overflow-y-auto scroll-smooth p-4">
              <div className="space-y-4">
                {state.messages.map((msg, index) => (
                  <div key={index}>
                    {msg.type === 'user' ? (
                      <div className="mb-2 flex justify-end">
                        <div className="bg-si-primary max-w-xs rounded-2xl rounded-br-sm px-4 py-3 text-white">
                          <p className="text-sm">{msg.message}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="mb-4">
                        <div className="mb-3 max-w-xs rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-3">
                          <p className="text-sm text-gray-800">{msg.message}</p>
                          {msg.answer && <p className="mt-2 text-xs text-gray-600">{msg.answer}</p>}
                        </div>

                        {msg.buttons && msg.buttons.length > 0 && (
                          <div className="space-y-2">
                            {msg.buttons.map((button, btnIndex) => (
                              <button
                                key={btnIndex}
                                onClick={() =>
                                  handleButtonClick(button.action as NavigationAction, button.url)
                                }
                                className="border-si-primary/20 text-si-primary hover:bg-si-primary block w-full rounded-lg border px-3 py-2 text-left text-sm transition-colors hover:text-white"
                              >
                                {button.text}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {state.messages.length === 0 && (
                <div className="space-y-2">
                  <p className="text-xs font-medium tracking-wide text-gray-600 uppercase">
                    Quick Actions
                  </p>
                  <div className="space-y-2">
                    {chatbotData.quick_actions.map((action, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickAction(action.action as NavigationAction)}
                        className="border-si-primary/20 text-si-primary hover:bg-si-primary block w-full rounded-lg border px-3 py-2 text-left text-sm transition-colors hover:text-white"
                      >
                        {action.action === 'get_quote' && '📊 '}
                        {action.action === 'contact_info' && '📞 '}
                        {action.action === 'welcome' && '🏠 '}
                        {action.text}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-gray-200 p-4">
              <div className="flex items-center rounded-lg bg-gray-100 px-3 py-2">
                <input
                  type="text"
                  placeholder="Please use the buttons above..."
                  className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-500 outline-none"
                  disabled
                />
                <button className="ml-2 cursor-not-allowed text-gray-400" disabled>
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
};

export default ChatbotWidget;
