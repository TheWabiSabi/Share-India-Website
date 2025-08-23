// types/chatbot.types.ts

interface ChatbotButton {
  text: string;
  action: string;
  type: 'navigation' | 'info' | 'redirect';
  url?: string;
}

interface ChatbotFlow {
  message: string;
  answer?: string;
  url?: string;
  buttons?: ChatbotButton[];
}

interface FallbackResponse {
  message: string;
  action: string;
}

interface QuickAction {
  text: string;
  action: string;
}

interface ChatbotFlows {
  welcome: ChatbotFlow;
  about_menu: ChatbotFlow;
  about_journey: ChatbotFlow;
  about_impact: ChatbotFlow;
  about_leaders: ChatbotFlow;
  about_testimonials: ChatbotFlow;
  industries_menu: ChatbotFlow;
  industry_healthcare: ChatbotFlow;
  industry_manufacturing: ChatbotFlow;
  insurance_menu: ChatbotFlow;
  corporate_insurance_menu: ChatbotFlow;
  corporate_liability: ChatbotFlow;
  retail_insurance: ChatbotFlow;
  insights_menu: ChatbotFlow;
  blog_posts: ChatbotFlow;
  contact_menu: ChatbotFlow;
  contact_info: ChatbotFlow;
  careers: ChatbotFlow;
  get_quote: ChatbotFlow;
  [key: string]: ChatbotFlow; // For dynamic flow additions
}

interface FallbackResponses {
  default: FallbackResponse;
  error: FallbackResponse;
}

interface ChatbotData {
  chatbot_flows: ChatbotFlows;
  fallback_responses: FallbackResponses;
  quick_actions: QuickAction[];
}

// Message types for the chat interface
interface ChatMessage {
  type: 'user' | 'bot';
  message: string;
  answer?: string;
  buttons?: ChatbotButton[];
  timestamp?: Date;
}

// Component state interface
interface ChatbotState {
  isOpen: boolean;
  currentFlow: string;
  messages: ChatMessage[];
  isLoading: boolean;
}

// Props interface for the ChatbotWidget component
interface ChatbotWidgetProps {
  data?: ChatbotData;
  onButtonClick?: (action: string, url?: string) => void;
  onMessageSent?: (message: string) => void;
  customStyles?: {
    primaryColor?: string;
    textColor?: string;
    backgroundColor?: string;
  };
  disabled?: boolean;
}

// Navigation action types
type NavigationAction =
  | 'welcome'
  | 'about_menu'
  | 'about_journey'
  | 'about_impact'
  | 'about_leaders'
  | 'about_testimonials'
  | 'industries_menu'
  | 'industry_healthcare'
  | 'industry_manufacturing'
  | 'insurance_menu'
  | 'corporate_insurance_menu'
  | 'corporate_liability'
  | 'retail_insurance'
  | 'insights_menu'
  | 'blog_posts'
  | 'contact_menu'
  | 'contact_info'
  | 'careers'
  | 'get_quote'
  | 'redirect';

// Export all interfaces
export type {
  ChatbotButton,
  ChatbotFlow,
  FallbackResponse,
  QuickAction,
  ChatbotFlows,
  FallbackResponses,
  ChatbotData,
  ChatMessage,
  ChatbotState,
  ChatbotWidgetProps,
  NavigationAction,
};

// Default export for the main interface
export default ChatbotData;
