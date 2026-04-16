# Website Audit Report: shareindiainsurance.com

**Root URL**: [https://shareindiainsurance.com/](https://shareindiainsurance.com/)
**Date**: April 13, 2026

## Core Website Issues

### 1. Forms & Interactivity

- **Contact Form (/contact)**: The multi-step "Get a Quote / Contact Us" form is completely broken. It does not progress past Step 1. The "Call Us Instead" link is also unresponsive.
- **Premium Estimator (/premium-estimator)**: The tool calculates estimates correctly, but the "Get Final Quote" button routes to the broken `/contact` flow, creating a dead end.
- **Be a POSP Form (/be-a-posp)**: Returns no success confirmation, redirect, or feedback after submission despite showing a brief checkmark animation.
- **Careers (/careers)**: All "Apply Now" and "View Details" buttons have a 100% failure rate (nothing happens). Department filters, upload resume option, and "Load More" controls are entirely missing.
- **Site-Wide CTAs**: All "Book Risk Assessment", "Get Coverage Proposal", and "Get Demo Access" buttons across product/industry pages ultimately route to the broken `/contact` form.

### 2. Navigation & Linking

- **Mobile Menu**: No hamburger or mobile menu appears on mobile viewports (~375px). The desktop navigation persists, overflowing and breaking the layout.
- **Footer Social Links**: All social media icons (Twitter/X, Facebook, Instagram, LinkedIn) point to `#` placeholders rather than real profiles.
- **Broken Subpage URLs**:
  - `/corporate` should be `/corporate-insurance`
  - `/corporate/marine-transit` should be `/corporate-insurance/marine-transit-insurance`
  - `/industries/real-estate` should be `/industries/real-estate-industry`
  - `/about` > _Our Story_: the standalone `/our-story` returns a 404.

### 3. Content, CMS & UI

- **Claim Stories (/insights/claim-stories)** & **News (/news)**:
  - Several articles display copy-pasted, irrelevant, or incorrect body text.
  - "Load More" buttons are stuck on "Loading...".
  - Article social sharing buttons are dead.
- **Blogs (/blogs)**:
  - Quick navigation links scroll to `#`.
  - No newsletter subscription option exists.
  - Article social sharing buttons are dead.
- **Hero Image Mismatches**: Contextually incorrect images exist across Industries (e.g., construction cranes on Life Sciences page) and Corporate Insurance (generic residential building used everywhere).
- **Leadership Team (/about#leadership)**: Missing standard social media (LinkedIn) profile links and connection CTAs.
- **AI Toolkit (/ai-toolkit)**: Tools presented (PolicyWise, Claims AI) are just non-functional visual placeholders with descriptive text.

---

## InsureAI Deep Audit Report

**Platform URL**: [https://insurai.shareindiainsurance.com/](https://insurai.shareindiainsurance.com/)

### Authentication & Session Management

- **Avatar Route Bug**: Clicking the profile/avatar icon logged-in instantly forces a redirect to the login page (terminating the session) instead of displaying settings.
- **Registration Flow Broken**: Account creation hangs or fails silently and reverts back to the login screen without completing registration.

### Chat Interface & State

- **Conversation History**: New conversations disappear entirely and aren't saved in the sidebar. Only legacy conversations from December 2025 appear.
- **Message Persistence**: Refreshing the page wipes currently active conversations, preserving only the very first pair of messages.
- **"Saved Answers"**: Clicking the save icon returns no confirmation and the Saved Answers page remains completely blank.
- **Send and Copy Actions**: The "Copy" button lacks any visual feedback, and the generic "Send" button requires highly precise click focus.
- **Sidebar Misrouting**: Links for "Documents / Policies", "Search Knowledge Base", and "Claims / Tickets" inexplicably all route mistakenly to `/voice`.
