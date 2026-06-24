# Ghost CMS Migration & Operations Guide

A complete guide for contributors: how the headless **Ghost CMS** blog works, how
to run it locally, how to write/migrate content, and how to scale it to
staging/production.

> Quick reference lives in [`BLOG_CMS.md`](./BLOG_CMS.md). This document is the
> full guide.

---

## 1. Architecture

The blog is **headless**. Ghost is the content store + writing app; the public
never sees Ghost's own theme — they see our Next.js app.

```
                       ┌─────────────────────────┐
   Writers  ──login──▶ │  Ghost Admin (/ghost)   │   ← write, tag, publish
                       │  Ghost 5 + MySQL 8      │
                       └───────────┬─────────────┘
                                   │  Content API (read-only, key-auth)
                                   ▼
   Public  ──────────▶  Next.js app  /blogs , /blog/[slug]   ← what users see
```

| Surface     | URL (local)            | Who          | Notes                                       |
| ----------- | ---------------------- | ------------ | ------------------------------------------- |
| Ghost Admin | `localhost:2368/ghost` | Team (login) | Writing app, settings, integrations         |
| Ghost theme | `localhost:2368`       | nobody       | Bypassed; lock down via "Make site private" |
| Public blog | `localhost:3000/blogs` | Everyone     | Next.js, server-rendered, no login          |

**Key components in this repo**

| Path                                   | Purpose                                                                       |
| -------------------------------------- | ----------------------------------------------------------------------------- |
| `docker-compose.cms.yml`               | Local Ghost 5 + MySQL 8 stack                                                 |
| `lib/ghost.ts`                         | Content API client + mappers (`toCard`/`toArticle`), queries, `extractToc`    |
| `app/blogs/page.tsx`                   | Public list: **Recommended** (featured) banner + **Latest** accordion + pager |
| `app/blog/[slug]/page.tsx`             | Single post: TOC, tags, related, share                                        |
| `components/blog/post-body.tsx`        | Renders Ghost HTML + Prism highlight + copy buttons                           |
| `components/blog/latest-accordion.tsx` | One-open-at-a-time inline reader                                              |
| `components/blog/share-buttons.tsx`    | Twitter/LinkedIn/WhatsApp/Copy-link                                           |
| `scripts/migrate-to-ghost.mjs`         | One-off importer (legacy MDX → Ghost)                                         |

---

## 2. Prerequisites

- **Node** ≥ 20.11 (repo runs on 20+; the migration script uses `--env-file`).
- **Docker** + Docker Compose.
- npm (this project uses `package-lock.json`).

---

## 3. Local setup (first run)

```bash
# 1. Start Ghost + MySQL
docker compose -f docker-compose.cms.yml up -d

# 2. Open Ghost admin and complete owner setup
open http://localhost:2368/ghost

# 3. Create a Custom Integration:
#    Settings → Integrations → Add custom integration
#    Copy BOTH keys it shows.

# 4. Configure the Next.js app
cp .env.example .env.local
#    Set in .env.local:
#      GHOST_API_URL=http://localhost:2368
#      GHOST_CONTENT_API_KEY=<the Content API Key>     ← public site reads with this
#      GHOST_ADMIN_API_KEY=<id:secret Admin API Key>   ← only the migration script

# 5. Run the app
npm install
npm run dev
#    Public blog: http://localhost:3000/blogs
```

> **Two different keys.** The **Content API Key** (26-hex) is read-only and used
> by the running site. The **Admin API Key** (`<id>:<secret>`) grants write access
> and is used **only** by the migration script. `.env.local` is gitignored — never
> commit either key.

### Lock down Ghost's own theme (recommended)

Ghost Admin → **Settings → Site → Make this site private**. This password-protects
Ghost's built-in front-end on `:2368` so there's no duplicate public site. The
Content API keeps working (it's key-authenticated, independent of the toggle).

---

## 4. How the public blog behaves

- **`/blogs`** — server-rendered, two sections:
  - **Recommended** — posts with Ghost's **"Feature this post"** toggle on. First
    one is a large banner; the rest are cards. Shown on page 1.
  - **Latest** — newest **non-featured** posts (so no duplication), as an
    **accordion**: one post is expanded inline at a time. Paginated 7/page.
- **`/blog/[slug]`** — full post with auto **table of contents** (from `h2`/`h3`),
  anchored headings, tags, related posts (same primary tag), working share buttons.
- **Code blocks** get syntax highlighting (Prism) + a hover **copy** button.
- Missing slug → **404**.

---

## 5. Writing content (for the team)

Everything below is **native to Ghost** — no code needed.

- **Editor / slash commands** — in a post body type `/` for cards: `/code`
  (highlighted + copyable on the site), `/bulleted list`, `/numbered list`,
  `/image`, `/markdown`, `/html`, `/callout`, `/toggle`, `/embed`, `/bookmark`, …
- **Recommended** — toggle **"Feature this post"** in the post settings panel.
- **Tags** — in post settings, type a tag to create it. The **first tag is the
  category**; the rest render as tags. Prefix with `#` for an **internal** tag
  (hidden from the public site, useful for organization).
- **Reference another post** — paste its URL in the editor → Ghost makes a rich
  **bookmark card** (or a normal link). No special syntax.
- **Unique IDs** — every post already has an immutable `id` and a unique `slug`
  (Ghost auto-dedupes), so identifiers never collide.

### Field mapping (Ghost → site)

| Ghost field       | Shown as                                          |
| ----------------- | ------------------------------------------------- |
| Feature this post | Recommended strip                                 |
| Reading time      | "x min read"                                      |
| Primary author    | Byline                                            |
| Published date    | Date (rendered deterministically as "3 Jun 2026") |
| Feature image     | Card/hero image                                   |
| First tag         | Category badge                                    |
| Other tags        | Tag chips                                         |
| Post body         | Article HTML                                      |

---

## 6. Migrating legacy MDX posts

One-off import of `markdowns/*.mdx` + `app/blog/list_of_blogs.json` into Ghost.

```bash
# Requires GHOST_ADMIN_API_KEY in .env.local
npm run migrate:ghost:dry     # preview (no writes)
npm run migrate:ghost         # import
npm run migrate:ghost -- --force   # overwrite existing (idempotent update)
```

- **Idempotent** — matches by slug; skips existing posts unless `--force`.
- **Mapping** — category→primary tag; type/topic/industry/frontmatter→tags;
  `excerpt`→custom excerpt; `image`→feature image; `featured` preserved;
  `date`→publish date (parsed as UTC); markdown body→HTML (legacy JSX `className`
  is normalized to `class`).
- **Author caveat** — Ghost authors must be real staff users (the Admin API can't
  create arbitrary ones), so migrated posts are authored by the **owner account**.
  Original team bylines remain in the `.mdx` frontmatter. To restore them, create
  staff accounts and reassign, or pick one shared author.

---

## 7. Scaling to staging / production

The local compose file is **local-only** (`NODE_ENV=development`,
`url=http://localhost:2368`). For staging/prod:

### 7.1 Run Ghost as its own service

- Host Ghost on its own subdomain, e.g. `cms.yourdomain.com`, behind HTTPS
  (Ghost in `NODE_ENV=production` **requires** an `https://` `url` and a working
  mail config for staff invites/password resets).
- Use a **managed MySQL 8** (RDS/Cloud SQL/etc.) instead of the bundled container,
  or a container with a durable, backed-up volume. Keep
  `--default-authentication-plugin=mysql_native_password` (Ghost 5 needs it).

### 7.2 Persist media on object storage

Ghost stores uploaded images on the local `content/images` volume by default. For
horizontal scaling / durability, use a **Ghost storage adapter** (S3/MinIO/GCS) so
images don't live on a single container disk. You already run MinIO — an S3 adapter
pointed at MinIO keeps the existing image domain.

### 7.3 Wire the Next.js app to prod Ghost

- Set per-environment env vars (don't commit them):
  - `GHOST_API_URL=https://cms.yourdomain.com`
  - `GHOST_CONTENT_API_KEY=<prod content key>`
- Add the prod image host(s) to `next.config.ts` `images.remotePatterns`
  (the CMS domain and/or the S3/MinIO/CDN domain). The local `localhost:2368`
  entry is dev-only; the `unoptimized={src.startsWith('http://localhost')}` guard
  in the cards means prod images are always optimized.

### 7.4 Caching & performance

- The blog pages are dynamic server components. For higher traffic, add
  **ISR/revalidation** (e.g. `export const revalidate = 300`) or tag-based
  revalidation, and/or a Ghost **webhook** (post published/updated) that triggers
  on-demand revalidation so edits go live without a redeploy.
- Put a CDN in front of both the Next.js app and Ghost's image domain.

### 7.5 Operations

- **Backups**: dump MySQL regularly + back up the `content/` volume (or rely on
  object storage versioning for images). Ghost Admin → Settings → Export also
  produces a JSON content export.
- **Upgrades**: bump the `ghost:5-alpine` tag deliberately; read Ghost's migration
  notes. MySQL data persists in its volume across container recreation.
- **Secrets**: keep API keys in your platform's secret manager, mirroring the
  `.env.example` names.

---

## 8. Troubleshooting

| Symptom                                                          | Cause / fix                                                                                                                                                             |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/blogs` throws "Missing GHOST_API_URL or GHOST_CONTENT_API_KEY" | `.env.local` not set or app not restarted after editing it.                                                                                                             |
| `/blogs` 500: `"url" parameter is not allowed` (image)           | A feature image host isn't in `next.config.ts` `remotePatterns`. Add it. Local Ghost uploads (`http://localhost:2368`) are served directly via the `unoptimized` guard. |
| Hydration mismatch on dates                                      | Don't format dates with `toLocaleDateString` in client components — use the server-computed `dateLabel` from `toCard`.                                                  |
| Migration: "GHOST_ADMIN_API_KEY looks wrong"                     | You used the Content key. Use the **Admin** key (`id:secret`).                                                                                                          |
| Migration reports everything "missing"                           | Wrong working dir / old Node. Run from repo root on Node ≥ 20.11.                                                                                                       |
| Recommended/TOC not showing                                      | No featured posts / post has no `h2`/`h3` headings. Both sections hide gracefully when empty.                                                                           |
| Ghost admin won't load                                           | `docker compose -f docker-compose.cms.yml ps` — check `ghost-db` is healthy; Ghost waits for it.                                                                        |

```bash
# Reset everything (DESTROYS all Ghost data + images)
docker compose -f docker-compose.cms.yml down -v
```
