# Knowledge Graph — Share India Insurance Website

> **For AI coding agents:** Read this file at the start of every session. It is the cheapest way (~800 tokens) to understand the full codebase. Do not read raw source files until you know you need them.

**Last updated:** 2026-04-09

---

## How to Use This Knowledge Graph

The `KnowledgeGraph/graph/` folder contains structured JSON files that cache the repo's architecture. Load them instead of source files.

### Session Start Protocol (All Agents)

```
Step 1 — Always: Read KnowledgeGraph/KnowledgeGraph.md          (~800 tokens)
Step 2 — If needed: Read the relevant graph/ JSON files         (~200–600 tokens each)
Step 3 — Only if the task requires it: Read the specific source file
```

**Never** load source files speculatively at session start. Load graph files first, then load only the source file your task touches.

### Which Graph File to Load for Each Task

| Task type | Load this graph file |
|---|---|
| Adding/modifying a route or page | `graph/routes.json` |
| Adding/modifying a component | `graph/components.json` |
| Using animation or Framer Motion | `graph/components.json` → `animationSystem` |
| Adding types or constants | `graph/types-and-constants.json` |
| Changing build, Docker, or dependencies | `graph/build-and-config.json` |
| Any change that feels tricky or has edge cases | `graph/decisions-and-gotchas.json` |
| Deciding whether to read a source file | `graph/token-cost-map.json` |

### Files to Never Load

Check `graph/decisions-and-gotchas.json → doNotLoad` or `graph/token-cost-map.json → NEVER_LOAD` before reading any file. Do not load:
- `full-export.md` (138KB / ~35k tokens)
- `app/premium-estimator/data.ts` (225KB / ~56k tokens)
- All `markdowns/*.mdx` at once (~125k tokens combined)
- `package-lock.json`, `node_modules/`, `.next/`

---

## Project Overview

| Field | Value |
|---|---|
| **Name** | Share India Insurance Brokers — Public Website |
| **Domain** | `https://insurance.shareindia.com` |
| **Framework** | Next.js 15 App Router, TypeScript, React 19 |
| **Styling** | Tailwind CSS v4 (PostCSS, `@theme {}` in globals.css) |
| **Deploy** | Docker standalone image (`output: 'standalone'`) |
| **Dev server** | `npm run dev` → Turbopack |
| **Purpose** | Marketing/informational site for IRDA-licensed insurance broker; retail, corporate, industry products |

---

## Architecture Map

```
KnowledgeGraph/               ← Context cache for agents (this folder)
├── KnowledgeGraph.md         ← You are here
├── TokensInstructions.md     ← Universal session efficiency rules
├── TokensGraphing.md         ← Universal graph maintenance protocol
└── graph/                    ← Structured JSON cache files
    ├── routes.json           ← All Next.js routes
    ├── components.json       ← All components + animation system
    ├── types-and-constants.json ← All TS types, constants, design tokens
    ├── build-and-config.json ← Build, Docker, dependencies
    ├── decisions-and-gotchas.json ← Known bugs, typos, key decisions
    └── token-cost-map.json   ← Token cost for every file

app/                          ← Next.js App Router (all routes)
├── layout.tsx                ← Root layout: Header, Footer, ChatbotWidget, FloatingAgentButton
├── page.tsx                  ← Homepage (42KB — largest single page)
├── globals.css               ← CSS reset, @theme tokens
├── style.css                 ← App-wide Tailwind extensions
├── sitemap.ts                ← Dynamic sitemap generator
├── blog/                     ← Blog index + list_of_blogs.json
├── blogs/                    ← Individual blog post renderer (MDX)
├── about/, contact/, careers/, be-a-posp/
├── retail/                   ← + 7 sub-routes (life/term/health/motor/home/travel/cyber)
├── corporate-insurance/      ← + 10 sub-routes
├── industries/               ← + 9 sub-routes
├── insights/, news/
├── premium-estimator/        ← data.ts is 225KB — see NEVER_LOAD
└── privacy-policy/, terms-conditions/, legal-disclaimers/, cancellation-refund/

components/
├── header/header.tsx         ← Full nav (19.6KB)
├── footer/footer.tsx         ← Full footer (12.8KB)
├── chatbot/                  ← Widget + types + responses.json (content)
├── cards/                    ← blue-blog-card, white-blog-card
├── motion.tsx                ← Framer Motion wrappers (FadeUp, FadeIn, Stagger, Item, FlyIn)
├── main-caraousel.tsx        ← Hero carousel (TYPO in filename — do not rename)
└── top-news-carousel.tsx

consts/                       ← All shared constants and type unions
├── variables.ts              ← IMAGE_BASE_URL
├── industries.ts             ← AllIndustries: 'corporate' | 'retail'
├── types.ts                  ← AllTypes: 'news' | 'blogs' | 'claims_story'
└── topics.ts                 ← AllTopics (20 topic strings)

lib/anim.tsx                  ← Animation primitives (easings, durations, t())
markdowns/                    ← 41 MDX blog articles (UUID filenames)
public/                       ← Static assets
```

---

## Key Decisions (Quick Reference)

> Full detail in `graph/decisions-and-gotchas.json`

| Decision | Implication |
|---|---|
| Turbopack in dev only | Never use `--turbopack` in Docker/CI |
| `output: 'standalone'` | Docker copies `.next/standalone` — do not change |
| MDX files use UUID names | Don't use UUID as URL slug; look up slug in `list_of_blogs.json` |
| Tailwind v4 (no config.js) | All tokens in `app/globals.css @theme {}` |
| Animations centralised | Always use `components/motion.tsx`; no inline FM variants |
| Images from CDN | Remote images → `static.shareindiainsurance.com` only |
| Chatbot is data-driven | Edit chatbot content in `components/chatbot/responses.json` |
| `main-caraousel.tsx` typo | Do NOT rename the file without mass-updating imports |
| Two known interface typos | `explaination` and `desciption` in `app/industries/main.interface.ts` |

---

## Active State

> **Update this section after every significant session.**

- **Status:** Active development
- **Current focus:** *(update me)*
- **Known blockers:** *(update me)*
- **Last significant change:** Full KnowledgeGraph built and graphed — all graph/ JSON files created (2026-04-09)

---

## Graph Update Rules

- Updated the `Active State` section above after every session.
- Update the relevant `graph/*.json` file after: new routes, new components, dependency changes, schema changes, key decisions.
- Run the **Graph Health Check** (in `TokensGraphing.md`) at the start of any new sprint or after a long break.
- **Target size for this file:** ≤200 lines. If it grows beyond that, move detail into a new `graph/*.json` file.
