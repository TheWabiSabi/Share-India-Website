'use client';

import dynamic from 'next/dynamic';

// Lazy load non-critical widgets (chatbot & floating button)
const ChatbotWidget = dynamic(() => import('@/components/chatbot/chatbot-widget'), {
  ssr: false,
  loading: () => null,
});

const FloatingAgentButton = dynamic(() => import('@/components/FloatingAgentButton'), {
  ssr: false,
  loading: () => null,
});

/**
 * Client-only widgets that don't block initial page load
 */
export function ClientWidgets() {
  return (
    <>
      <ChatbotWidget />
      <FloatingAgentButton />
    </>
  );
}
