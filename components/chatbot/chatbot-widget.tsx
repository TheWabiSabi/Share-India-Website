// ChatbotWidget.tsx
'use client';
import { useState, useEffect, useRef } from 'react';
import type { ChatbotData, ChatMessage, ChatbotState, NavigationAction } from './chatbot-types';
import chatbotData from './responses.json';

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
      {/* Chatbot Button */}
      <div className="fixed right-6 bottom-6 z-50">
        <button
          onClick={toggleChatbot}
          className="group bg-si-bluegreen text-si-offwhite hover:bg-si-dark focus:ring-si-bluegreen flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:ring-2 focus:ring-offset-2 focus:outline-none sm:h-16 sm:w-16"
          aria-label="Open chatbot"
        >
          {state.isOpen ? (
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
        {!state.isOpen && (
          <div className="bg-si-bluegreen/30 absolute inset-0 -z-10 animate-ping rounded-full"></div>
        )}
      </div>

      {/* Chatbot Window */}
      {state.isOpen && (
        <div className="fixed right-6 bottom-24 z-50 w-80 sm:w-96">
          <div className="bg-si-primary-500 overflow-hidden rounded-2xl shadow-2xl">
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

            {/* Chat Content - Added ref here */}
            <div ref={chatContainerRef} className="h-80 overflow-y-auto scroll-smooth p-4">
              <div className="space-y-4">
                {state.messages.map((msg, index) => (
                  <div key={index}>
                    {msg.type === 'user' ? (
                      <div className="mb-2 flex justify-end">
                        <div className="bg-si-bluegreen text-si-offwhite max-w-xs rounded-2xl rounded-br-sm px-4 py-3">
                          <p className="text-sm">{msg.message}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="mb-4">
                        <div className="bg-si-slate/30 mb-3 max-w-xs rounded-2xl rounded-bl-sm px-4 py-3">
                          <p className="text-si-dark text-sm">{msg.message}</p>
                          {msg.answer && (
                            <p className="text-si-dark/80 mt-2 text-xs">{msg.answer}</p>
                          )}
                        </div>

                        {msg.buttons && msg.buttons.length > 0 && (
                          <div className="space-y-2">
                            {msg.buttons.map((button, btnIndex) => (
                              <button
                                key={btnIndex}
                                onClick={() =>
                                  handleButtonClick(button.action as NavigationAction, button.url)
                                }
                                className="border-si-bluegreen/20 text-si-bluegreen hover:bg-si-bluegreen hover:text-si-offwhite block w-full rounded-lg border px-3 py-2 text-left text-sm transition-colors"
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
                  <p className="text-si-dark/70 text-xs font-medium tracking-wide uppercase">
                    Quick Actions
                  </p>
                  <div className="space-y-2">
                    {chatbotData.quick_actions.map((action, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickAction(action.action as NavigationAction)}
                        className="border-si-bluegreen/20 text-si-bluegreen hover:bg-si-bluegreen hover:text-si-offwhite block w-full rounded-lg border px-3 py-2 text-left text-sm transition-colors"
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

            <div className="border-si-slate/30 border-t p-4">
              <div className="bg-si-slate/20 flex items-center rounded-lg px-3 py-2">
                <input
                  type="text"
                  placeholder="Please use the buttons above..."
                  className="text-si-dark placeholder-si-dark/50 flex-1 bg-transparent text-sm outline-none"
                  disabled
                />
                <button className="text-si-bluegreen/50 ml-2 cursor-not-allowed" disabled>
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
