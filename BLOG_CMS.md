# Blog CMS (Ghost) — local setup

The blog is powered by a self-hosted **Ghost CMS** (Docker + MySQL 8). The Next.js
app reads published posts through the **Ghost Content API** and renders a
server-side paginated list of **7 posts per page**.

## 1. Start the CMS stack

```bash
docker compose -f docker-compose.cms.yml up -d
```

This starts:

- `ghost-db` — MySQL 8 (data persisted in the `mysql_data` volume)
- `ghost-cms` — Ghost 5 on **http://localhost:2368** (themes/settings/uploaded
  images persisted in the `ghost_content` volume)

Credentials default to the values in `.env.example`. To override, create a `.env`
file next to `docker-compose.cms.yml` with `MYSQL_*` values.

## 2. Set up Ghost + get the Content API key

1. Open **http://localhost:2368/ghost** and complete the owner setup.
2. Go to **Settings → Integrations → Add custom integration**.
3. Copy the **Content API Key** (not the Admin API key).
4. In the app directory, copy `.env.example` to `.env.local` and set:

   ```
   GHOST_API_URL=http://localhost:2368
   GHOST_CONTENT_API_KEY=<your content api key>
   ```

## 3. Create content (field mapping)

When writing posts in Ghost Admin, the app maps Ghost fields as follows:

| App field   | Ghost field                                  |
| ----------- | -------------------------------------------- |
| category    | **primary tag** (first tag on the post)      |
| type/topic/industry | additional tags                       |
| author      | primary author                               |
| date        | published date                               |
| read time   | Ghost's auto-computed reading time           |
| image       | feature image                                |
| featured    | the post's **Feature this post** toggle      |
| body        | the post content (rendered HTML)             |

To verify pagination, publish at least 8 posts (2 pages).

## 3a. Lock down Ghost's own public theme (headless setup)

The public reads the **Next.js** app, not Ghost's built-in theme. To avoid a
second, duplicate public site on `:2368`:

- **Ghost Admin → Settings → Site → Make this site private** (toggle on).
  This password-protects the themed front-end and adds `noindex`, so search
  engines and visitors can't reach Ghost's own pages.

The **Content API still works** with private mode on — it's authenticated by the
integration key, which is independent of the front-end password. After enabling
it, confirm the app still loads posts (step 4); if `/blogs` ever returns empty,
re-check `GHOST_CONTENT_API_KEY`.

Writers continue to use **`localhost:2368/ghost`** (Admin) as normal — login
there is unaffected by the private-site toggle.

## 4. Run the app

```bash
npm run dev
```

- List: **http://localhost:3000/blogs** (and `/blogs?page=2`, …)
- Post: **http://localhost:3000/blog/<slug>**

## Migrating the legacy MDX posts into Ghost

A one-off script imports the 55 `markdowns/*.mdx` posts (joined with
`app/blog/list_of_blogs.json`) into Ghost via the **Admin API**.

1. In Ghost Admin → Settings → Integrations → your integration, copy the
   **Admin API Key** (format `<id>:<secret>` — different from the Content key)
   into `.env.local` as `GHOST_ADMIN_API_KEY`.
2. Preview without writing anything:
   ```bash
   npm run migrate:ghost:dry
   ```
3. Run it for real:
   ```bash
   npm run migrate:ghost
   ```
   Re-running is safe — posts are matched by slug and skipped if they already
   exist (use `... --force` to overwrite instead).

**Mapping:** category → primary tag; type/topic/industry/frontmatter tags →
additional tags; `excerpt` → custom excerpt; `image` → feature image; `featured`
preserved; `date` → publish date; markdown body → post HTML.

**Author caveat:** the legacy bylines (e.g. "Risk Analytics Team") are team names,
not real accounts, and Ghost authors must be staff users — which the Admin API
can't create. Migrated posts are therefore authored by the **Ghost owner account**.
If you want the bylines back, create staff accounts for them and reassign, or pick
one shared author.

## Writing content in Ghost (for the team)

The public `/blogs` page has two sections:

- **Recommended** — driven by Ghost's **"Feature this post"** toggle (the old
  site's recommendation signal). Featured posts appear in the Recommended strip
  and are excluded from "Latest" to avoid duplication.
- **Latest** — newest non-featured posts, shown as an accordion (one opens at a
  time; readers expand a post inline).

Authoring features (all native to the Ghost editor at `/ghost`):

- **Slash commands** — type `/` for cards: `/code` (renders with syntax
  highlighting + a copy button on the public site), `/bulleted list`,
  `/numbered list`, `/image`, `/markdown`, `/html`, `/callout`, `/toggle`,
  `/embed`, `/bookmark`, etc.
- **Tags** — in the post settings panel, type a tag name to create it on the
  fly. The first tag becomes the post's category; the rest show as tags. Prefix
  a tag with `#` to make it **internal** (hidden from the public site).
- **Referencing another post** — paste the other post's URL into the editor;
  Ghost turns it into a rich **bookmark card** (or use it as a normal link). No
  special syntax needed.
- **Unique IDs** — every post already has an immutable unique id and a unique
  slug (Ghost auto-dedupes slugs), so post identifiers never collide.

The public post page auto-builds a **table of contents** from the post's
headings and adds anchor links, and the code blocks get a copy button.

## Stopping / resetting

```bash
docker compose -f docker-compose.cms.yml down        # stop, keep data
docker compose -f docker-compose.cms.yml down -v      # stop and WIPE all data
```

## Pending cutover (legacy flat-file system)

The old MDX system still exists but is no longer used by the routes. Once Ghost
content is in place, these can be removed in a follow-up:

- `markdowns/`
- `app/blog/list_of_blogs.json`
- `app/blog/list_of_breaking_news.ts` (verify unused first)
- `app/blog/blog.interface.ts` (replaced by `BlogCard` in `lib/ghost.ts`)
- the `next-mdx-remote` dependency in `package.json`
