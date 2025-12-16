# Share India Insurance Brokers - Official Website

A modern, responsive insurance brokerage platform built with Next.js 15, TypeScript, and Tailwind CSS. This website serves as the digital presence for Share India Insurance Brokers (SIIB), an IRDA-licensed insurance broker offering comprehensive insurance solutions across retail, corporate, and industry sectors.

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Core Features](#core-features)
- [Pages & Routes](#pages--routes)
- [Components](#components)
- [Configuration](#configuration)
- [Development](#development)
- [Deployment](#deployment)
- [SEO & Performance](#seo--performance)
- [Contributing](#contributing)

## Overview

Share India Insurance Brokers website is a comprehensive digital platform designed to provide insurance solutions, educational content, and seamless customer engagement. The platform features an AI-powered insurance advisor (InsurAI), advanced premium calculator, and extensive information about insurance products across multiple sectors.

### Business Highlights

- **IRDA Licensed**: Authorized insurance broker with regulatory compliance
- **40+ Insurance Partners**: Access to leading Indian insurers
- **6,000+ Claims Handled**: Proven track record in claims advocacy
- **21,000+ Retail Clients**: Trusted by individuals and families
- **9,000+ Corporate Clients**: Serving businesses across industries
- **250+ Locations**: Pan-India presence and service reach

## Key Features

### 1. InsurAI - AI-Powered Insurance Advisor

- 24/7 AI-powered insurance consultation
- Personalized plan recommendations based on life stage and risk profile
- Policy tracking and renewal reminders
- Step-by-step claims guidance
- Accessible at: `https://insurai.shareindiainsurance.com`

### 2. Advanced Premium Estimator

- Industry-specific insurance selection
- Customizable insured amounts per insurance type
- Real-time premium calculation
- Transparent rate units (per mille, percentage, flat rates)
- Coverage categories:
  - Asset Insurance (Fire, Machinery, Burglary, etc.)
  - Liability Insurance (Professional Indemnity, Cyber, D&O, etc.)
  - Marine Insurance (Transit, Open Policy, Sales Turnover)
  - Employee Benefits (Group Medical, Personal Accident, etc.)
  - Special Policies (Event, Title, Trade Credit, etc.)

### 3. Comprehensive Insurance Coverage

- **Retail Insurance**: Health, Life, Term, Motor, Travel, Home, Cyber
- **Corporate Insurance**: Property & Engineering, Liability, Marine Transit, Motor Fleet, Employee Benefits
- **Industry Solutions**: Infrastructure, Pharma, Real Estate, Chemical, Solar, Logistics, Textile, Plastic, Startup

### 4. Interactive Chatbot

- Context-aware conversation flows
- Quick navigation to insurance products
- Team information and contact options
- Integration with InsurAI platform
- Premium estimator access

### 5. Floating Agent Button

- Persistent call-to-action across all pages
- Direct link to InsurAI platform
- Animated pulse effect for visibility
- Dismissible with smooth animations

## Technology Stack

### Core Framework

- **Next.js 15.3.5**: React framework with App Router
- **React 19**: Latest React with concurrent features
- **TypeScript 5**: Type-safe development
- **Tailwind CSS 4**: Utility-first CSS framework

### Key Libraries

- **Framer Motion 12**: Advanced animations and transitions
- **React Icons 5**: Comprehensive icon library
- **Swiper 11**: Touch-enabled carousel/slider
- **Marked 16**: Markdown parsing for content
- **Next MDX Remote 5**: MDX content rendering

### Development Tools

- **ESLint 9**: Code quality and consistency
- **Prettier 3**: Code formatting
- **TypeScript**: Static type checking

## Project Structure

```
share-india-website/
├── app/                          # Next.js App Router pages
│   ├── about/                    # About Us page with team info
│   ├── api/                      # API routes
│   ├── be-a-posp/               # POSP agent registration
│   ├── blogs/                    # Blog listing and articles
│   ├── careers/                  # Career opportunities
│   ├── contact/                  # Contact form and info
│   ├── corporate-insurance/      # Corporate insurance products
│   ├── industries/               # Industry-specific solutions
│   ├── insights/                 # Insurance insights and guides
│   ├── news/                     # News and updates
│   ├── premium-estimator/        # Premium calculator tool
│   ├── retail/                   # Retail insurance products
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Homepage
│   └── globals.css              # Global styles
├── components/                   # Reusable React components
│   ├── chatbot/                 # Chatbot widget and responses
│   ├── footer/                  # Footer component
│   ├── header/                  # Navigation header
│   ├── main-caraousel/          # Insights carousel
│   ├── top-news-carousel/       # News carousel
│   └── FloatingAgentButton.tsx  # Persistent CTA button
├── consts/                      # Constants and configuration
│   └── variables.ts             # Environment variables
├── lib/                         # Utility functions
├── markdowns/                   # Markdown content files
├── public/                      # Static assets
│   ├── awards/                  # Award images
│   ├── team/                    # Team member photos
│   └── testimonials/            # Client testimonial images
├── .env.example                 # Environment variables template
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-org/share-india-website.git
cd share-india-website
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:

```env
NEXT_PUBLIC_IMAGE_BASE_URL=https://your-cdn-url.com
NEXT_PUBLIC_API_URL=https://api.yoursite.com
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Core Features

### Homepage Sections

1. **Hero Section**
   - IRDA-licensed badge
   - Value proposition
   - Key statistics (Claims, Clients, Locations)
   - Primary CTAs (Get Quote, Explore Solutions)

2. **InsurAI Section**
   - AI advisor introduction
   - Feature highlights (Smart Recommendations, Clear Explanations, Lifecycle Support)
   - AI chat simulation
   - Statistics grid (Response time, Plans compared, Savings)
   - Direct link to InsurAI platform

3. **What We Do**
   - Service pillars (Advisory, Claims, Risk Engineering, Digital Tools)
   - Access to 40+ insurers
   - 24-48h policy issuance

4. **Featured Insights**
   - Carousel of expert articles
   - Market trends and risk solutions
   - Policy change impacts

5. **Top News**
   - Latest insurance news
   - Regulatory updates
   - Sector implications

6. **Awards & Testimonials**
   - Industry recognition (2022-2025)
   - Client testimonials from major companies
   - Trust indicators

7. **Connect CTA**
   - Multiple contact options
   - Office visit information
   - Consultation scheduling

### About Us Page

- **Our Story**: Company history and mission
- **Leadership**: Ms. Sonam Gupta (President) profile
- **Our Team**: 10 insurance professionals with expertise areas
  - Senior Leadership (3 members)
  - Operational Leadership (4 members)
  - Regional Leadership (2 members)
- **InsurAI Section**: Detailed AI advisor information
- **Awards & Recognition**: Industry accolades
- **Testimonials**: Client success stories

### Premium Estimator

- **Industry Selection**: Choose from 9+ industries
- **Insurance Type Selection**: Multiple categories with checkboxes
- **Customizable Amounts**: Edit insured amount per insurance type (default: ₹10,00,000)
- **Real-time Calculation**: Instant premium computation
- **Rate Transparency**: Clear display of rate units
- **Shopping Cart**: Review selected insurances with amounts and premiums
- **Contact CTA**: Option to get better rates through consultation
- **Disclaimer**: Indicative rates notice

## Pages & Routes

### Main Pages

- `/` - Homepage
- `/about` - About Us
- `/contact` - Contact form and information
- `/careers` - Career opportunities
- `/be-a-posp` - POSP agent registration

### Insurance Products

- `/retail` - Retail insurance overview
- `/retail/health` - Health insurance
- `/retail/life` - Life insurance
- `/retail/term` - Term insurance
- `/retail/motor` - Motor insurance
- `/retail/travel` - Travel insurance
- `/retail/home` - Home insurance
- `/retail/cyber` - Cyber insurance

### Corporate Solutions

- `/corporate-insurance` - Corporate insurance overview
- `/corporate-insurance/property-and-engineering-insurance`
- `/corporate-insurance/liability-insurance`
- `/corporate-insurance/marine-transit-insurance`
- `/corporate-insurance/motor-fleet-insurance`
- `/corporate-insurance/employee-benefits-insurance`

### Industry Solutions

- `/industries` - Industries overview
- `/industries/infrastructure-industry`
- `/industries/life-sciences-and-pharma-industry`
- `/industries/real-estate-industry`
- `/industries/chemical-industry`
- `/industries/solar-industry`
- `/industries/logistics-industry`
- `/industries/textile-industry`
- `/industries/plastic-industry`
- `/industries/startup-industry`

### Content & Resources

- `/blogs` - Blog articles
- `/news` - News and updates
- `/insights` - Insurance insights
- `/insights/claim-stories` - Claim success stories
- `/premium-estimator` - Premium calculator

### Legal

- `/privacy-policy` - Privacy policy
- `/terms-conditions` - Terms and conditions
- `/legal-disclaimers` - Legal disclaimers
- `/cancellation-refund` - Cancellation and refund policy

## Components

### Layout Components

**Header** (`components/header/header.tsx`)

- Responsive navigation with dropdown menus
- Mobile hamburger menu
- Scroll-aware visibility
- Hover effects and animations
- Links to InsurAI and POSP registration

**Footer** (`components/footer/footer.tsx`)

- Multi-column layout
- Quick links to all sections
- Social media links
- Contact information
- Legal links

### Interactive Components

**ChatbotWidget** (`components/chatbot/chatbot-widget.tsx`)

- Persistent chat interface
- Context-aware responses
- Navigation assistance
- Integration with InsurAI
- Quick action buttons

**FloatingAgentButton** (`components/FloatingAgentButton.tsx`)

- Fixed position button
- Animated pulse effect
- Tooltip on hover
- Links to InsurAI platform
- Dismissible with close button

**MainCarousel** (`components/main-caraousel/`)

- Swiper-based carousel
- Featured insights display
- Responsive breakpoints
- Touch-enabled navigation

**TopNewsCarousel** (`components/top-news-carousel/`)

- News article carousel
- Auto-play functionality
- Pagination controls

### Utility Components

**CardScreen** (in `app/page.tsx`)

- Full-screen card sections
- Responsive padding
- Consistent styling
- Customizable background colors

## Configuration

### Environment Variables

Create a `.env.local` file with:

```env
# Image CDN
NEXT_PUBLIC_IMAGE_BASE_URL=https://your-cdn-url.com

# API Endpoints
NEXT_PUBLIC_API_URL=https://api.yoursite.com

# InsurAI Platform
NEXT_PUBLIC_INSURAI_URL=https://insurai.shareindiainsurance.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Tailwind Configuration

Custom theme colors defined in `tailwind.config.ts`:

- `si-primary`: Primary brand color (blue)
- `si-red`: Accent color (red)
- `si-ink`: Text color
- Custom gradients and shadows

### Next.js Configuration

Key settings in `next.config.ts`:

- Image optimization
- MDX support
- Environment variables
- Build optimizations

## Development

### Available Scripts

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code with Prettier
npm run format

# Check code formatting
npm run format:check
```

### Code Quality

- **ESLint**: Enforces code quality standards
- **Prettier**: Maintains consistent code formatting
- **TypeScript**: Provides type safety
- **Tailwind CSS**: Utility-first styling approach

### Best Practices

1. **Component Structure**: Use functional components with TypeScript
2. **Styling**: Prefer Tailwind utility classes over custom CSS
3. **Performance**: Optimize images with Next.js Image component
4. **Accessibility**: Include ARIA labels and semantic HTML
5. **SEO**: Use proper metadata and structured data
6. **Responsive Design**: Mobile-first approach with breakpoints

## Deployment

### Production Build

```bash
npm run build
npm start
```

### Docker Deployment

Three Docker configurations available:

1. **Development** (`docker-compose.dev.yml`)

```bash
docker-compose -f docker-compose.dev.yml up
```

2. **Staging** (`docker-compose.staging.yml`)

```bash
docker-compose -f docker-compose.staging.yml up
```

3. **Production** (`docker-compose.prod.yml`)

```bash
docker-compose -f docker-compose.prod.yml up
```

### Deployment Platforms

Compatible with:

- Vercel (recommended for Next.js)
- AWS (EC2, ECS, Amplify)
- Google Cloud Platform
- Azure
- DigitalOcean
- Self-hosted with Docker

### Environment-Specific Configuration

Ensure proper environment variables are set for each environment:

- Development: `.env.local`
- Staging: `.env.staging`
- Production: `.env.production`

## SEO & Performance

### SEO Features

- **Metadata**: Comprehensive meta tags for all pages
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter previews
- **Structured Data**: Schema.org markup for rich snippets
- **Sitemap**: Auto-generated sitemap at `/sitemap.xml`
- **Robots.txt**: Search engine crawling instructions

### Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Dynamic Imports**: Lazy loading for heavy components
- **Font Optimization**: Google Fonts with display swap
- **CSS Optimization**: Tailwind CSS purging unused styles
- **Caching**: Static generation and incremental static regeneration

### Lighthouse Scores Target

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## Team

### Leadership

- **Ms. Sonam Gupta** - President

### Senior Leadership

- **Prakash Rao Dumble** - Head, General Insurance (30 years experience)
- **Ram Chandra** - Head, Life Insurance (25 years experience)
- **Ravi Shahani** - Head of Business Excellence

### Operational Leadership

- **Shekhar Pradhan** - Claim Manager
- **Manish Chavan** - Product Manager
- **Vidhi Shah** - Head Underwriter
- **Rajendra Muppidwar** - Area Manager

### Regional Leadership

- **Raunaq Pai** - Zonal Head, West
- **Akash Agam** - Area Head, North

## Contributing

### Development Workflow

1. Create a feature branch from `main`
2. Make your changes following code standards
3. Run linting and formatting
4. Test thoroughly across devices
5. Submit pull request with detailed description

### Code Standards

- Follow TypeScript best practices
- Use functional components with hooks
- Maintain consistent naming conventions
- Write descriptive commit messages
- Add comments for complex logic
- Ensure responsive design
- Test accessibility features

## Support & Contact

### Technical Support

- Email: tech@shareindia.co.in
- Phone: 1800 210 2022

### Business Inquiries

- Email: contact.ins@shareindia.co.in
- Website: https://shareindiainsurance.com

### Career Opportunities

- Email: careers@shareindia.co.in
- Page: https://shareindiainsurance.com/careers

## License

Copyright © 2025 Share India Insurance Brokers. All rights reserved.

This project is proprietary and confidential. Unauthorized copying, distribution, or use of this software is strictly prohibited.

---

**Version**: 1.0.0  
**Last Updated**: December 2025  
**Maintained By**: WabiSabi Tech Solutions
