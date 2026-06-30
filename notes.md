# Notes — Ghost CMS Primary/Secondary Tag Feature

> Working memory for the "show tagged posts in the right section of the right
> website page" feature. Keep this accurate; update as we learn.
> **(assumption)** = needs confirmation before we rely on it.

---

## 0. Locked decisions (from the client / user)

1. **Two-level tagging.**
   - **Primary tag = WHICH website page** the post belongs to (e.g.
     `infrastructure-industry`).
   - **Secondary tag = WHICH section on that page** it renders in (e.g.
     `claims-story`, `news`). Primary loads first, then secondary.
2. **Secondary vocabulary is per-primary.** Each primary tag carries its *own*
   list of secondary tags = exactly the post-loading sections that page has.
   See the master map in §4.
3. **WIPE ALL LEGACY.** The old flat-file blog system (`list_of_blogs.json`,
   `markdowns/*.mdx`, breaking-news, `next-mdx-remote`, the JSON-reading
   carousels) is removed. Everything post-related is driven by Ghost. Inventory
   in §5.
4. **DO NOT redesign page sections.** The section layouts were built by senior
   devs for the client and stay exactly as-is. My only job re: pages is to
   *read* what post-loading sections each page already has and assign primary +
   secondary tags to match. We only swap each section's **data source** from
   legacy → Ghost; we never add/remove/restyle sections.

---

## 1. How filtering must work (Ghost)

- Primary + secondary = AND filter in Ghost NQL: `tags:<primary>+tags:<secondary>`
  (the `+` is AND; `,` would be OR). A post needs BOTH tags to show in a section.
- `lib/ghost.ts` currently only has `getPostsByTag(oneSlug)` → single membership
  test. Needs a multi-tag variant. (Details in §6.)

---

## 2. Current data sources (BEFORE this change)

Two post-like sections exist on the section-page templates, and today they pull
from **different** sources — this is what we're unifying onto Ghost:

| Section label (UI)              | Component                            | Source (today) | Source (after) |
| ------------------------------- | ------------------------------------ | -------------- | -------------- |
| "Claim Stories"                 | `MainCaraousel type="claims_story"`  | legacy JSON    | **Ghost** `primary + claims-story` |
| "Industry Insights & Articles"  | `GhostTagStrip tagSlug=…`            | Ghost (1 tag)  | **Ghost** `primary + news` |

Legacy taxonomy that already mirrors the secondary idea (`consts/types.ts`):
`types = ['news', 'blogs', 'claims_story']`.

---

## 3. Page inventory — templates & which pages use them

**3 templates + 3 landing pages.** Section layouts are FROZEN (read-only).

### Template A — `app/industries/_components/main.tsx` (`IndustryPage`)
Used by **all 9 industry pages AND all 7 retail sub-pages**.
Post-loading sections (in order): **Claim Stories**, **Industry Insights & Articles**.

### Template B — `app/corporate-insurance/_components/CorporatePage.tsx`
Used by **all 10 corporate sub-pages**.
Post-loading sections: **Claim Stories**, **Industry Insights & Articles**.

### Landing pages — NO post-loading sections
- `app/industries/page.tsx`, `app/corporate-insurance/page.tsx`,
  `app/retail/page.tsx` → no posts. **No primary tag needed.**

### Site-wide post pages (not primary-scoped — global feeds)
- `app/blogs/page.tsx` — featured + latest (already Ghost). Keep.
- `app/blog/[slug]/page.tsx` — single post + related (already Ghost). Keep.
- `app/page.tsx` (home) — `MainCaraousel` legacy → migrate to Ghost latest.
- `app/insights/page.tsx` — `MainCaraousel featured` legacy → Ghost featured.
- `app/insights/claim-stories/page.tsx` — legacy JSON → Ghost `claim-story` feed.
- `app/news/page.tsx` — legacy JSON + breaking-news → Ghost `news` feed.
- `components/top-news-carousel.tsx` — legacy JSON → Ghost.

---

## 4. MASTER MAP — primary tag → [secondary tags]

Derived purely from the sections each page already has (both templates expose the
same two post sections, so the map is currently uniform: every section page gets
`claim-story` + `news`). Structured per-primary so individual pages can diverge
later without touching others.

> **Secondary slug naming (DECIDED — reuse what already exists in Ghost):**
> The existing `scripts/tag-ghost-posts.mjs` already tags Ghost posts from the
> legacy `type` field → Ghost slugs `news`, `claims-story`, `blogs`. We reuse
> those so already-tagged posts light up immediately (no retag needed):
> - "Claim Stories" section → **`claims-story`**
> - "Industry Insights & Articles" section → **`news`**
> - (`blogs` exists as a 3rd option if an Articles section is ever split out.)

### Industries (Template A) — primary slug → secondaries
| Page | Primary tag | Secondary tags |
| ---- | ----------- | -------------- |
| Chemical | `chemical-industry` | `claims-story`, `news` |
| Infrastructure | `infrastructure-industry` | `claims-story`, `news` |
| Life Sciences & Pharma | `life-sciences-pharma-industry` | `claims-story`, `news` |
| Logistics | `logistics-industry` | `claims-story`, `news` |
| Plastic | `plastic-industry` | `claims-story`, `news` |
| Real Estate | `real-estate-industry` | `claims-story`, `news` |
| Solar | `solar-industry` | `claims-story`, `news` |
| Startup | `startup-industry` | `claims-story`, `news` |
| Textile | `textile-industry` | `claims-story`, `news` |

### Corporate (Template B) — primary slug → secondaries
| Page | Primary tag | Secondary tags |
| ---- | ----------- | -------------- |
| Employee Benefits | `employee-benefits-insurance` | `claims-story`, `news` |
| Group Travel | `group-travel-insurance` | `claims-story`, `news` |
| Liability | `liability-insurance` | `claims-story`, `news` |
| Marine Transit | `marine-transit-insurance` | `claims-story`, `news` |
| Media & Entertainment | `media-entertainment-insurance` | `claims-story`, `news` |
| Motor Fleet | `motor-fleet-insurance` | `claims-story`, `news` |
| Office Package | `office-package-insurance` | `claims-story`, `news` |
| Property & Engineering | `property-engineering-insurance` | `claims-story`, `news` |
| Shopkeepers & Jewellers | `shopkeepers-package-jewellers-block` | `claims-story`, `news` |
| Trade Credit | `trade-credit-insurance` | `claims-story`, `news` |

### Retail sub-pages (Template A) — primary slug → secondaries
| Page | Primary tag | Secondary tags |
| ---- | ----------- | -------------- |
| Cyber | `retail-cyber` | `claims-story`, `news` |
| Health | `retail-health` | `claims-story`, `news` |
| Home | `home-insurance` | `claims-story`, `news` |
| Life | `retail-life` | `claims-story`, `news` |
| Motor | `motor-insurance` | `claims-story`, `news` |
| Term | `term-insurance` | `claims-story`, `news` |
| Travel | `retail-travel` | `claims-story`, `news` |

> ⚠️ Retail primary slugs are inconsistent (`retail-*` vs `*-insurance`). These
> are the slugs currently hardcoded in each `data.tsx` and must match what's
> created in production Ghost. Flagged for the client to normalise (Open Q4).
> The "articles" variance the client mentioned ("some sites have articles, some
> don't") does NOT exist in the current sections — every section page has exactly
> the same 2 post sections. Add `article` to a primary's list only if/when that
> page actually gains an Articles section.

---

## 5. Legacy wipe inventory (decision #3)

**Files to delete:**
- `app/blog/list_of_blogs.json`
- `app/blog/list_of_breaking_news.ts`
- `app/blog/blog.interface.ts`
- `markdowns/` (all 55 `.mdx`)
- `next-mdx-remote` dep in `package.json` (verify no other use)
- `scripts/migrate-to-ghost.mjs` (one-off MDX→Ghost importer; reads JSON + markdowns)
- `scripts/tag-ghost-posts.mjs` (auto-tagger; reads JSON) + the `migrate:ghost*`
  npm scripts in `package.json`

**IMPORTANT — the existing tagging pipeline (the origin of our tags):**
`scripts/tag-ghost-posts.mjs` reads `list_of_blogs.json` and ensures each Ghost
post carries: `category`, `humanize(type)`, `humanize(topic)`.
- `topic` → **primary tag** (e.g. `infrastructure_industry` → "Infrastructure
  Industry" → Ghost slug `infrastructure-industry`). Matches §4 primaries. ✓
- `type` → **secondary tag** (`news`/`blogs`/`claims_story` → slugs `news`,
  `blogs`, `claims-story`). This is where our secondary vocab comes from.
Once content writers tag manually in Ghost Admin (the new model), this auto-tagger
is obsolete — but deleting it loses the only record of the tag scheme, hence it's
captured here in §4 + this section before removal.

**Code that imports legacy `list_of_blogs.json` / breaking-news (must migrate to
Ghost BEFORE deleting, keeping each section's UI unchanged):**
- `components/main-caraousel.tsx` — reads JSON. Consumers: home `app/page.tsx`,
  `app/insights/page.tsx`, Template A Claim Stories, Template B Claim Stories.
- `app/insights/claim-stories/page.tsx` — reads JSON + `blog.interface`.
- `app/insights/page.tsx` — reads JSON (+ MainCaraousel).
- `app/news/page.tsx` — reads JSON + `list_of_breaking_news` + `blog.interface`.
- `components/top-news-carousel.tsx` — reads JSON.

➡️ Plan: replace `MainCaraousel`'s JSON datasource with Ghost (a Ghost-backed
carousel that accepts `primary`/`secondary`/`featured`), then point every
consumer at it; rewrite `news` / `claim-stories` / `top-news` pages to fetch from
Ghost. Sections/markup unchanged.

---

## 6. Planned code changes (sections frozen — data layer only)

1. **`lib/ghost.ts`** — add `getPostsByTags(slugs: string[], limit)` →
   `filter: slugs.map(s => 'tags:'+s).join('+')`. Reuse for primary+secondary.
2. **API route** `app/api/ghost/tag/[slug]/route.ts` — accept secondary +
   honor `limit`: `/api/ghost/tag/<primary>?section=<secondary>&limit=<n>`.
   (Also fixes the currently-ignored `limit` param.)
3. **Data files (`data.tsx`)** — replace `relevant: { tagSlug }` with
   `relevant: { primary, sections: [...] }` per the §4 map. Drop `claim_story.topic`
   legacy field once Claim Stories is Ghost-backed.
4. **Templates A & B** — Claim Stories section swaps `MainCaraousel` → Ghost strip
   filtered by `primary + claim-story`; Insights section uses `primary + news`.
   Markup/styling untouched.
5. **Ghost-backed carousel** to replace legacy `MainCaraousel` for home/insights/
   news/top-news; delete legacy files (§5).

---

## 7. Open questions

- **Q1 — RESOLVED.** Secondary slugs named from what's in the code = the existing
  Ghost tags: `claims-story` (Claim Stories section) + `news` (Insights & Articles
  section). See §4 / §5.
- **Q2 — global feeds: RESOLVED in scope.** Wiping legacy *forces* migrating
  home / insights / news / claim-stories / top-news to Ghost (they import the JSON).
- **Q3 — retail slug normalisation:** keep mixed `retail-*` / `*-insurance`, or
  standardise? (Changing requires retagging in production Ghost.) Still open.
- **Q4 — migration/tagging status: VERIFIED LOCALLY (2026-06-30).** Brought up the
  Docker stack; the June `ghost_content` volume persisted, 55 posts present, the
  `.env.local` Content key works. Results in §9. (Prod still unconfirmed, but local
  mirrors what migration produced.)

---

## 8. Decisions log
- **D1:** Two-level primary/secondary tagging, AND-filtered in Ghost. (§0.1)
- **D2:** Secondary vocab is per-primary; mapped in §4. (§0.2)
- **D3:** Wipe all legacy flat-file blog system. (§0.3, inventory §5)
- **D4:** Page sections are frozen — data-source swap only, no layout changes. (§0.4)
- **D5:** Current sections are uniform (2 per section page) → every primary maps
  to `[claims-story, news]` until a page actually gains a new section.
- **D6:** Secondary slugs = existing Ghost tags `claims-story` + `news` (from
  legacy `type` via `tag-ghost-posts.mjs`); no retag needed if scripts ran. (Q1)
- **D7:** A clean delete of legacy is NOT safe yet — 5 app files + 2 scripts import
  the JSON; they must be migrated to Ghost first, then deleted. (§5, Q2)
- **D8:** Section → secondary mapping FINAL: "Claim Stories" → `claims-story`;
  "Industry Insights & Articles" → `blog` OR `news`. Stray `claim-story` (1 post)
  to be ignored/cleaned. `blog` is singular. (§9)
- **D9:** Retail = per-product tags going forward; retail data-file slugs unchanged;
  pages stay empty until tagged in Ghost. (§9)

---

## 10. PHASE 1 — DONE (2026-06-30)

Section feature implemented + verified live (tsc clean, eslint clean):
- `lib/ghost.ts`: `getPostsByTag` → **`getPostsBySection(primary, sections[], limit)`**
  building `tags:<primary>+tags:[a,b]`.
- `app/api/ghost/tag/[slug]/route.ts`: accepts repeatable `?section=` + honors
  `?limit=` (old ignored-limit bug fixed).
- `components/blog/ghost-tag-strip.tsx`: props `tagSlug` → **`primary` + `sections`**.
- Both templates' Insights section now `primary + insights` ([blog, news]).
- `main.interface.ts` + `CorporatePage.tsx` types + all **26 `data.tsx`** files:
  `relevant: { primary, insights: ['blog','news'], claimStories: ['claims-story'] }`.

Verified via dev server → live Ghost: infrastructure insights=1, employee-benefits
insights=10, infra claim-stories=1, retail motor=0 (expected), limit honored.

**NOT done in Phase 1 (deferred to Phase 2):** Claim Stories section still renders
the legacy `MainCaraousel` (topic-based, off `list_of_blogs.json`). Its Ghost
secondary tags are already in the data (`relevant.claimStories`) ready to wire when
the carousel migrates. Legacy files NOT deleted yet.

---

## 11. PHASE 2 — DONE (2026-06-30)

All legacy flat-file blog data removed; every consumer now reads Ghost. Verified:
`tsc` clean, `eslint .` clean, `next build` compiled successfully, live API checks pass.

**Data layer (`lib/ghost.ts`):** added `BlogRow` + `toRow(post)` (legacy-shaped row
derived from Ghost tags: `type` from news/blog/claims-story, `industry` retail vs
corporate, `topic` from primary tag, `breaking` from a `breaking-news` tag) and a
flexible `getPosts({primary, sections, featured, limit})`.

**New route:** `app/api/ghost/posts/route.ts` → `BlogRow[]` for
`?featured` / `?primary&section` / `?section` / latest.

**`MainCaraousel`** rewritten as a Ghost client fetcher (same Swiper markup); props
`type/topic/industry` → `primary/sections/featured`. Consumers updated:
- Home `app/page.tsx` (latest) and `app/insights/page.tsx` (featured) — unchanged calls.
- Templates A & B Claim Stories → `primary + claimStories` ([claims-story]).

**Standalone pages** migrated to fetch `BlogRow[]` client-side (layouts untouched):
`app/insights/page.tsx`, `app/insights/claim-stories/page.tsx` (`?section=claims-story`),
`app/news/page.tsx` (`?section=news`), `components/top-news-carousel.tsx` (`?section=news`).

**Deleted:** `app/blog/list_of_blogs.json`, `list_of_breaking_news.ts`,
`blog.interface.ts`, `markdowns/` (55 mdx), `scripts/migrate-to-ghost.mjs`,
`scripts/tag-ghost-posts.mjs`; removed `migrate:ghost*` npm scripts and deps
`next-mdx-remote`, `@tryghost/admin-api`, `gray-matter`, `marked`.

**Behavior change to flag:** breaking news was a 4-slug hardcoded list; now driven by
a Ghost **`breaking-news`** tag (`BlogRow.breaking`). Existing posts carry no such tag
yet, so the news page's Breaking section is empty until posts are tagged (same
"going-forward" model as retail). `industry`/`topic`/`type` are now derived from tags.

---

## 12. Tag cleanup + prefix + validation (2026-06-30)

**Ghost tag cleanup (via Admin API):** 143 → 31 tags. Deleted 119 migration-noise
tags; merged stray `claim-story` (1 post) into `claims-story`; created 7 missing
valid tags (6 retail primaries + `breaking-news`).

**Prefixed display names (slugs PINNED — never renamed):** every tag now reads
`Primary: <Website>` or `Secondary: <Section>` in the Ghost editor for authoring
clarity (e.g. `Secondary: News`/`Article`/`Claim Story`/`Breaking News`). Slugs stay
`news`/`blog`/`claims-story`/etc. so all filters keep working. `cleanTagName()` in
`consts/tags.ts` strips the prefix in `toCard`/`toRow` so the PUBLIC site shows clean
names ("Infrastructure Industry", "Claim Story" — no "Primary:"/"Secondary:").

**Validation / error handling (`consts/tags.ts`):** `PRIMARY_TAGS`, `SECONDARY_TAGS`,
`ALLOWED_SECTIONS` (per-primary; uniform = claims-story/blog/news), and
`assertValidSection(primary, section)` throwing `TagValidationError`. Both API routes
validate primary+section and return **HTTP 400** with a clear message on a bad combo
(unknown primary, unknown secondary, or secondary not allowed for that primary).
`breaking-news` is intentionally NOT an allowed page section (it's a global news flag).
Client fetchers guard with `Array.isArray(data)` so a 400 can't crash a page.
Verified: valid→200, all 3 invalid classes→400; tsc/eslint/`next build` clean.

**Side effect to flag:** deleting the descriptive content tags means a post's Ghost
`primary_tag` (first tag = the card's category badge) may now be a section tag, so some
cards show "News"/"Article"/"Claim Story" as the category. Cosmetic only. If we'd
rather the badge always show the website name, change `toCard`/`toRow` `category` to
prefer the post's PRIMARY_TAGS tag over Ghost's `primary_tag`.

---

## 13. Plan change — 3 
 tags only (2026-06-30)

Client simplified to **exactly 3 secondary tags: `news`, `blog`, `claims-story`**.
Verified the plan against the code; it's coherent and simpler. Changes made:

- `consts/tags.ts`: `SECONDARY_TAGS` = `['news','blog','claims-story']` (dropped
  `breaking-news`). `ALLOWED_SECTIONS` unchanged (claims-story/blog/news per primary).
- **In-page "Insights & Articles" section = `blog` + `news`** — already so, no change.
- **Dedicated section pages follow secondary only (ignore primary):**
  - `/news` → `?section=news` (already)
  - `/insights/claim-stories` → `?section=claims-story` (already)
  - **`/blogs` → now `blog`-only**: `getFeaturedPosts(6,'blog')` + `getLatestPosts(page,'blog')`
    (added optional `section` param to both). Verified 31 blog posts, page 200.
- **Breaking news:** the 4th tag is gone, so the `/news` page's Breaking section is now
  driven by Ghost's native **`featured`** flag (`toRow.breaking = post.featured`). Mark a
  news post "Feature this post" in Ghost to make it breaking. (Currently 0 featured news
  → Breaking section empty, handled gracefully.)
- **Ghost tags:** deleted `breaking-news` tag; renamed `Secondary: Article` →
  **`Secondary: Blog`** (slug stays `blog`). Now 30 tags total.
- Validation: `breaking-news` is now an unknown secondary → API returns 400.
- tsc / eslint / `next build` all clean.

---

## 14. Crash-proof pagination — 5 per page + Next/Prev (2026-06-30)

Goal: never render more than ~5 posts at once (render-time crash-proofing under
many posts), Discord-style Next/Prev with background prefetch.

**Reusables:** `components/blog/pager.tsx` (Prev/Next + indicator) and
`components/blog/use-paged.ts` → `usePagedArray(items, perPage=5)` (windows an
in-memory array; resets to page 1 on filter change via render-time pattern — no
setState-in-effect).

**Two strategies (per the filtered-page decision = keep filters, window render):**
- **Server-paged + prefetch** (no client filter): in-page **Insights sections**
  (`GhostTagStrip`) now fetch 5/page via `?page=N&limit=5`, prefetch page N+1 so
  Next is instant, cache pages so Prev is instant. `getPostsBySection` +
  `/api/ghost/tag/[slug]` gained `page`. `/blogs` SSR list → `POSTS_PER_PAGE` 7→5.
- **Client-windowed** (existing search/category/date filters preserved):
  `/insights`, `/news`, `/insights/claim-stories` fetch the matching set once, then
  render only 5 at a time with `<Pager>` (replaced their growing "Load More").
  Only 5 cards in the DOM at any time; paging is instant (data in memory).

Verified: employee-benefits Insights = page1 5 / page2 5 / page3 0 (Next disables);
all list pages 200; tsc/eslint/`next build` clean.

---

## 9. VERIFIED findings — live Ghost query (local, 2026-06-30)

Queried the running Content API directly. Ground truth:

**Mechanism works.** `tags:<primary>%2Btags:<secondary>` (the `+` MUST be URL-encoded
as `%2B`; a raw `+` decodes to a space and silently returns an error/empty) returns
the right posts. Examples: `infrastructure-industry + news` = 1,
`infrastructure-industry + claims-story` = 1, `liability-insurance + claims-story` = 1.
➡️ The Ghost SDK encodes this for us; raw fetch/curl must encode.

**Secondary vocab on real posts (from legacy `type`):**
`claims-story` = 16, `blog` = 31, `news` = 8.
- Claim Stories section → **`claims-story`** ✓ (NOT `claim-story` — that's a stray
  1-post duplicate tag to ignore/clean).
- "Insights & Articles" section → the bulk is **`blog`** (31), with **`news`** (8).
  ⚠️ `blog` is SINGULAR (not `blogs`, which has 0 posts). Decision needed: does the
  Insights section filter `blog`, `news`, or both? (See revised Open Q.)

**Primary tags — industry & corporate: GOOD.** All 9 industry + 10 corporate
slugs in §4 exist and carry posts (2–3 each; employee-benefits has 14).

**Primary tags — RETAIL: BROKEN.** Confirmed root cause of prod breakage.
Legacy content only ever had ONE retail topic: `topic: 'retail'` (→ Ghost tag
`retail`, 16 posts). There is **no per-product retail topic** in the data. So the
7 retail `data.tsx` slugs all return **0 posts**:
`retail-cyber`=0, `retail-health`=0, `home-insurance`=0, `retail-life`=0,
`motor-insurance`=0, `retail-travel`=0; only `term-insurance`=1.
➡️ Fix options: (a) create per-product retail tags in Ghost + retag retail posts,
or (b) collapse all 7 retail pages onto the single `retail` primary, or
(c) writers tag future retail posts with the per-product slugs going forward.
Needs a client decision.

**Insights section filter — DECIDED (data-driven):** per-primary breakdown of
non-claim posts is mostly `blog` + some `news` (e.g. employee-benefits: blog 10;
motor-fleet: blog 3; infrastructure: news 1; startup: blog 2 + news 1). `news`
alone would leave most pages at 0–1. → **"Industry Insights & Articles" filters
`blog` OR `news`** (= everything that isn't `claims-story`). NQL:
`tags:<primary>+tags:[blog,news]` (note: section OR-set in brackets, AND-ed to the
primary). Switchable to `blog`-only later if the client prefers.

**Retail tagging — DECIDED:** per-product tags GOING FORWARD. Keep the 7 retail
primary slugs in §4 as-is; do NOT change data files. Retail pages will show 0
posts until writers tag retail posts with the per-product slug in Ghost Admin.
(No retag of the existing 16 `retail` posts.)
