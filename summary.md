# PR Summary — Ghost CMS Blog Integration
### Branch: `feat/ghost-cms-blog` → `dev`
### For maintainer reference / voice notes

---

## 1. All Changes Listed

### New Files Added
| File | What it is |
|---|---|
| `lib/ghost.ts` | Ghost Content API client — the brain of the entire blog system |
| `docker-compose.cms.yml` | Local Ghost + MySQL 8 + Mailpit stack for development |
| `app/api/ghost/tag/[slug]/route.ts` | Next.js API route — serves tagged blog posts to client components |
| `app/blogs/page.tsx` | New public blog list page (replaces the old `app/blog/page.tsx`) |
| `components/blog/ghost-tag-strip.tsx` | Client component that shows Ghost posts by tag on product pages |
| `components/blog/latest-accordion.tsx` | Accordion UI for the blog list — one post expands inline at a time |
| `components/blog/post-body.tsx` | Ghost HTML renderer with Prism syntax highlighting and copy buttons |
| `components/blog/share-buttons.tsx` | Twitter / LinkedIn / WhatsApp / copy-link share buttons |
| `scripts/migrate-to-ghost.mjs` | One-time script that imported 55 legacy MDX posts into Ghost |
| `scripts/tag-ghost-posts.mjs` | Maintenance script that ensures all Ghost posts have correct topic tags |
| `BLOG_CMS.md` | Quick-reference doc for working with the blog |
| `GHOST_CMS_MIGRATION_GUIDE.md` | Full contributor guide: setup, writing workflow, production scaling |
| `full-export.md` | Raw export of all migrated blog content (reference artifact) |

### Files Deleted
| File | Why removed |
|---|---|
| `app/blog/page.tsx` | Old flat-file blog list — replaced by `app/blogs/page.tsx` |
| `app/blog/[slug]/blog-content.tsx` | Old MDX content renderer — Ghost renders HTML directly now |
| `middleware.ts` | Was setting cache/security headers — removed (functionality moved or no longer needed) |
| `components/web-vitals.tsx` | Web Vitals reporter — removed from layout |
| `components/client-widgets.tsx` | Wrapper that bundled multiple client widgets — replaced by direct component imports |
| `scripts/optimize-images.js` | Image optimisation scripts — webp/jpg handled differently now |
| `scripts/optimize-logos.js` | Same as above |
| `scripts/optimize-team-images.js` | Same as above |
| `BLOG_FIX_AND_OPTIMIZATIONS.md` | Stale planning doc — no longer relevant |
| `PERFORMANCE_OPTIMIZATION.md` | Stale planning doc — no longer relevant |
| `QA_REPORT.md` | Stale QA doc — no longer relevant |

### Files Modified (grouped below in Section 2)
- `app/blog/[slug]/page.tsx` — fully rewritten
- `app/layout.tsx` — minor cleanup
- `app/globals.css` — Ghost content card styles added
- `next.config.ts` — image domain allowlist expanded
- `package.json` — dependencies added/removed
- `.env.example` — Ghost env vars documented
- `app/industries/_components/main.tsx` — blog carousel replaced
- `app/corporate-insurance/_components/CorporatePage.tsx` — blog carousel replaced
- `app/industries/main.interface.ts` — interface updated
- **9 industry data files** — one field changed each
- **10 corporate-insurance data files** — one field changed each
- **7 retail data files** — one field changed each
- `consts/topics.ts` — topic constants updated
- `app/layout.tsx` — chatbot + floating agent button wired in directly

---

## 2. Changes Grouped by Category

### Group A — Ghost CMS Core
`lib/ghost.ts`, `docker-compose.cms.yml`, `.env.example`, `next.config.ts`

### Group B — Blog Public Pages
`app/blogs/page.tsx`, `app/blog/[slug]/page.tsx`, `components/blog/latest-accordion.tsx`, `components/blog/post-body.tsx`, `components/blog/share-buttons.tsx`, `app/globals.css` (Ghost card styles)

### Group C — Tag Strips on Product Pages
`app/api/ghost/tag/[slug]/route.ts`, `components/blog/ghost-tag-strip.tsx`, `app/industries/main.interface.ts`, `app/industries/_components/main.tsx`, `app/corporate-insurance/_components/CorporatePage.tsx`, all 26 data files (9 industry + 10 corporate + 7 retail)

### Group D — Migration & Maintenance Scripts
`scripts/migrate-to-ghost.mjs`, `scripts/tag-ghost-posts.mjs`, `package.json` (added `migrate:ghost` npm scripts)

### Group E — Dependency & App Cleanup
`package.json`, `middleware.ts` (deleted), `components/web-vitals.tsx` (deleted), `components/client-widgets.tsx` (deleted), `app/layout.tsx`, 3 image-optimization scripts deleted, 3 stale docs deleted

### Group F — Asset Changes
Several `.webp` images replaced with `.jpg` equivalents in `public/` (leadership, team, be-a-posp, about). The webp versions were deleted; new jpg sources added.

### Group G — Documentation
`BLOG_CMS.md` (new), `GHOST_CMS_MIGRATION_GUIDE.md` (new), `BLOG_FIX_AND_OPTIMIZATIONS.md` (deleted), `PERFORMANCE_OPTIMIZATION.md` (deleted), `QA_REPORT.md` (deleted)

---

## 3. Group Descriptions

### Group A — Ghost CMS Core
This is the foundation layer. Before this PR, there was no Ghost CMS — blog posts lived as `.mdx` files in the repo. This group sets up Ghost as a separate, self-hosted content management system. `lib/ghost.ts` is the single file the Next.js app uses to talk to Ghost — it holds the API client, functions to fetch posts (by page, by slug, by tag, related posts), and mappers that convert Ghost's raw post format into a flat shape the UI components can consume. `docker-compose.cms.yml` lets any developer spin up a local Ghost instance with one command. `.env.example` documents the three environment variables the app needs. `next.config.ts` was extended to allow images from Ghost's servers.

### Group B — Blog Public Pages
This is the reader-facing blog experience. The old `/blog` page loaded all posts from a static JSON file in the repo and filtered them client-side — meaning content updates required a code deploy. The new `/blogs` page fetches live from Ghost at request time. It has two sections: a "Recommended" strip showing posts that are marked featured in Ghost, and a "Latest" accordion where each article can be expanded and read inline without leaving the page. The individual post page at `/blog/[slug]` was fully rewritten — it now renders the actual HTML that Ghost produces, with an auto-generated table of contents built from the post's headings, tag chips, related article suggestions, and working share buttons.

### Group C — Tag Strips on Product Pages
This is the most visible new feature for users browsing product pages. Every industry page (e.g. Solar Industry, Logistics), every corporate insurance product page (e.g. Employee Benefits, Marine Transit), and every retail page (e.g. Health, Motor) now has a live "Industry Insights" section that shows blog posts relevant to that page. The connection is made through Ghost tags — a post tagged `solar-industry` automatically appears on the Solar Industry page. Because the product pages are client-side rendered, they can't call Ghost directly, so they go through a small Next.js API route (`/api/ghost/tag/[slug]`) which proxies the request. The `GhostTagStrip` component handles loading states, empty states, and the card grid. The 26 data files (across three sections of the site) each had a single field renamed from `relevant.topic` to `relevant.tagSlug` to carry the Ghost tag slug.

### Group D — Migration & Maintenance Scripts
Two utility scripts that run manually, not as part of the build or CI. `migrate-to-ghost.mjs` was the one-time script that read all 55 legacy `.mdx` blog posts, converted their markdown to HTML, mapped their metadata to Ghost fields, and imported them into Ghost via the Admin API. It's idempotent (safe to re-run) and supports `--dry-run`. `tag-ghost-posts.mjs` came second — it reads the blog post index, checks whether each Ghost post already has the correct industry/topic tags, and adds any that are missing. It never removes existing tags. Both scripts need to be run against the production Ghost instance before the site fully works in production.

### Group E — Dependency & App Cleanup
The package swap: removed `next-pwa` (PWA support), `@next/bundle-analyzer`, and `compression`. Added `@tryghost/content-api` (reading posts), `@tryghost/admin-api` (writing/tagging posts from scripts), `prismjs` (code syntax highlighting in blog posts), `gray-matter` and `marked` (used by the migration script to parse MDX front-matter and markdown). The middleware that was setting cache and security headers was deleted — this functionality either moved to Next.js config or is handled at the infrastructure layer. `WebVitals` and `ClientWidgets` wrappers were removed from the root layout; the chatbot widget and floating agent button are now imported directly.

### Group F — Asset Changes
Some images in `public/` were converted from `.webp` to `.jpg`. This is unrelated to the blog work — it was a parallel cleanup of image formats for compatibility reasons.

### Group G — Documentation
Two stale planning documents (`BLOG_FIX_AND_OPTIMIZATIONS.md`, `PERFORMANCE_OPTIMIZATION.md`) and a stale `QA_REPORT.md` were deleted since they no longer reflected the codebase. Two new docs were added: `BLOG_CMS.md` is a short quick-reference for day-to-day blog management (how to write, publish, tag); `GHOST_CMS_MIGRATION_GUIDE.md` is the full technical guide covering architecture, local setup, the writing workflow, how to scale Ghost to production (managed MySQL, S3/MinIO for images, ISR/webhook caching), and troubleshooting.

---

## 4. Major Key Changes — Detailed Explanations

---

### KEY CHANGE 1 — The Blog Moved Off the Repo

**Before:** Blog posts were `.mdx` files checked into the Git repository under `markdowns/`. Updating a blog post meant opening a code editor, editing a `.mdx` file, committing, and deploying. The list of all posts was a static `list_of_blogs.json` file also in the repo.

**After:** Blog posts live in Ghost CMS — a separate application with its own admin dashboard at `/ghost`. Writers log into Ghost, write in a rich editor, hit publish, and the website shows the post immediately — no code, no deploy, no engineer needed.

**What connects them:** `lib/ghost.ts` is the bridge. It holds a lazy-initialized Ghost Content API client. Every time a visitor loads a blog page, the Next.js server calls Ghost's API and gets the latest posts. The 55 legacy posts were imported into Ghost using the migration script so nothing was lost.

**Important:** The `.mdx` files and `list_of_blogs.json` are still in the repo but are no longer used by the blog. They're left in place for now and will be removed in a follow-up PR.

---

### KEY CHANGE 2 — The `/blogs` Page Architecture

**Before (`app/blog/page.tsx`):** Loaded `list_of_blogs.json` statically, filtered and paginated client-side in the browser.

**After (`app/blogs/page.tsx`):** A Next.js server component. On every request it calls Ghost in parallel for featured posts and the current page of latest posts. It renders two sections:

- **Recommended** — posts marked "featured" in Ghost, shown as a large banner card + smaller cards. Only appears on page 1.
- **Latest** — server-paginated list (7 per page) using a custom accordion. When a reader clicks a post title, the full article body expands inline — they read it right there without navigating away.

Notice the URL also changed: `/blog` → `/blogs`. There is a redirect in `next.config.ts` to handle this if old links exist anywhere.

---

### KEY CHANGE 3 — Ghost Tag Strips on Product Pages (the main new feature)

This is the feature that makes Ghost do more than just power the blog list.

**The idea:** A post about solar energy insurance should appear on the Solar Industry page. A post about employee benefits should appear on the Employee Benefits product page. Instead of manually curating these, it's done automatically through Ghost tags.

**How it works end-to-end:**

1. When a post is published in Ghost, it gets tagged (e.g. `Solar Industry` — Ghost converts this to the slug `solar-industry` automatically).
2. The Solar Industry data file (`app/industries/solar-industry/data.tsx`) has a field `relevant: { tagSlug: 'solar-industry' }`.
3. The industry page component reads that `tagSlug` and passes it to `<GhostTagStrip tagSlug="solar-industry" />`.
4. `GhostTagStrip` is a client component — it fires a `fetch` to `/api/ghost/tag/solar-industry`.
5. That API route calls `getPostsByTag('solar-industry', 6)` in `lib/ghost.ts`, gets the posts from Ghost, maps them to cards, and returns JSON.
6. `GhostTagStrip` receives the cards and renders a 3-column grid of `WhiteBlogCard` components.

**Why the API route is needed:** The industry, corporate, and retail page components are all `'use client'` components (they have interactive UI). Client components can't call Ghost directly because Ghost's API needs the secret key which must never reach the browser. The `/api/ghost/tag/[slug]` route runs on the server, holds the key, and acts as a safe proxy.

**The 26 data files:** Each file had one line changed — `relevant: { topic: 'solar_industry' }` → `relevant: { tagSlug: 'solar-industry' }`. The slug format is kebab-case (hyphens, lowercase) because that's the format Ghost uses internally for tag slugs.

---

### KEY CHANGE 4 — The `/blog/[slug]` Post Page Rewrite

**Before:** Looked up the post in `list_of_blogs.json`, then loaded and rendered the `.mdx` file from disk.

**After:** Calls `getPostBySlug(slug)` which asks Ghost's API for the post. Ghost returns fully rendered HTML — the writer's formatted text, images, embeds, code blocks, everything. The page:

- Builds a **table of contents** automatically from the post's `h2` and `h3` headings (using `extractToc` in `lib/ghost.ts`) — these become anchor links in the right sidebar.
- Renders the post HTML inside `PostBody` which applies Prism syntax highlighting to code blocks and adds a copy-to-clipboard button to each one.
- Shows **related articles** — up to 2 posts that share the same primary tag, fetched from Ghost.
- If the slug doesn't exist in Ghost, returns a proper 404 page.
- **Author and date** come directly from Ghost — whatever the editor sets in Ghost Admin is what appears on the site. No defaults, no overrides.

---

### KEY CHANGE 5 — Resilient Error Handling Throughout

Every Ghost API call in `lib/ghost.ts` is wrapped in a try/catch that returns an empty result instead of throwing. This means:

- If Ghost is down or the env vars are misconfigured on the server, `/blogs` shows an empty state with a message — it doesn't crash with a 500 error.
- If a tag has no matching posts, `GhostTagStrip` shows "No articles available" — the rest of the product page is unaffected.
- If `getRelatedPosts` fails, the sidebar just has no related articles — the main post still loads.

This was an explicit fix made in the last commit of this branch (`fix(blog): add error boundary to getLatestPosts`).

---

### KEY CHANGE 6 — What Needs to Happen Before Production Works

The code is complete and correct. But three server-side steps are required before the live site matches local:

1. **Environment variables on the server** — the Docker container (on both the staging VPS and the production EC2 instances behind the ASG) needs `GHOST_API_URL=https://ghost.shareindiainsurance.com` and `GHOST_CONTENT_API_KEY` set at runtime. Currently these are missing, so the live site returns empty blogs.

2. **Migrate 55 posts to production Ghost** — the production Ghost at `ghost.shareindiainsurance.com` currently has only 2 placeholder posts. Running `scripts/migrate-to-ghost.mjs` pointed at production will import all 55.

3. **Tag posts in production Ghost** — after migration, running `scripts/tag-ghost-posts.mjs` against production will add the industry/topic tags so the product page strips work.

The Admin API key for the production Ghost is needed for steps 2 and 3 — get it from `ghost.shareindiainsurance.com/ghost` → Settings → Integrations.

---

*This file is a reference for voice notes to maintainers. It is not checked-in documentation.*
