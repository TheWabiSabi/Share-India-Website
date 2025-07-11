# Share India Insurance - Modern Website (Next.js + Tailwind + TypeScript)

This is the official frontend codebase for rebuilding the [Share India Insurance](https://shareindiainsurance.com/home/index.html) website using modern web technologies — **Next.js (App Router)**, **Tailwind CSS**, and **TypeScript**. The site is designed to be fully responsive, maintainable, SEO-friendly, and scalable.

---

## 🧩 Project Scope

### 🚀 Home Page

- Catchy Short Intro
- Featured Insights
- Featured Impact Stories
- Target Audience

### 🧠 Insights Section

- Topic-Based Filters
- News
- Articles & Blogs (SIIB’s Opinions)

### 🧬 About Section

- Journey of SIIB
- Impact of SIIB
- Testimonials
- Leaders and Team

### 👔 Careers

### 📞 Contact Us

- Appointment Booking
- Meeting Scheduler (with Mobile 2FA)

### 🛠️ Services

- Life Insurance
- Health Insurance
- Term Insurance
- Vehicle Insurance
- Business Insurance
- Travel Insurance

### 🤖 AI Chatbot (Bottom-Right Floating Assistant)

---

## 🏗️ Project Structure (Hybrid Component Pattern)

```
app/
├── page.tsx # Home Page
├── about/
│ ├── page.tsx
│ └── _components/ # About-specific UI blocks
├── insights/
│ ├── page.tsx
│ └── _components/
├── services/
│ └── life/page.tsx
├── contact/
│ └── page.tsx
components/
├── layout/ # Navbar, Footer, etc.
├── ui/ # Buttons, Inputs, Cards, etc.
public/ # Static Assets
styles/ # Tailwind + Global Styles
types/ # Shared TypeScript types
lib/ # Utilities (SEO, fetchers, etc.)
```

---

## 🧑‍💻 Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
npx next dev
```

Open http://localhost:3000 in your browser to see the site.

You can begin by editing app/page.tsx for the homepage. The app uses the Next.js App Router, so every route corresponds to a folder inside app/.

## 🛠️ Scripts

```
npm run dev           # Start development server
npm run build         # Create production build
npm run lint          # Run ESLint checks
npm run format        # Run Prettier formatting
```

# 📁 Folder Structure & Component Conventions

This project follows a hybrid folder structure for organizing components, optimized for clarity, modularity, and maintainability.

## ✅ Component Convention

We divide components into two main categories:

---

## 1. Global Components (`/components`)

Reusable, shareable components used across multiple pages:

```
components/
├── layout/        # Navbar, Footer, PageWrapper, etc.
├── ui/            # Button, Input, Card, etc.
├── common/        # Reusable visual components
```

- These components should be **generic and flexible**.
- Use TypeScript props and clear naming conventions.
- If a component is reused in more than one route, **it belongs here**.

---

## 2. Route-Specific Components (`_components/` inside route folder)

Scoped components that belong only to a specific page or route:

```
app/
├── about/
│   ├── page.tsx
│   └── _components/
│       ├── Journey.tsx
│       ├── Team.tsx
```

- Components here are **not reused** outside their parent route.
- The `_components` prefix ensures **Next.js does not treat them as routes**.
- Keeps the codebase clean and self-contained.

> 📌 **Note:** Never import from another route’s `_components` folder. If a component needs to be shared, move it to the global `/components` directory.

---

## 🚦 Rule of Thumb

| Where to put it?                 | Rule                          |
| -------------------------------- | ----------------------------- |
| `/components/ui/Button.tsx`      | Reusable anywhere             |
| `app/about/_components/Team.tsx` | Only used in the `About` page |
| Imported by multiple pages       | Move to `/components`         |

---

## 📦 Example Folder Structure

```
app/
├── about/
│   ├── page.tsx
│   └── _components/
│       └── Journey.tsx
components/
├── layout/
│   └── Navbar.tsx
├── ui/
│   └── Button.tsx
```

---

This convention ensures a **clean separation of concerns**, prevents cross-page coupling, and maintains long-term scalability.
