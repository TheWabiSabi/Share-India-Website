// One-off migration: legacy flat-file MDX posts -> Ghost CMS (via Admin API).
//
//   node --env-file=.env.local scripts/migrate-to-ghost.mjs            # migrate
//   node --env-file=.env.local scripts/migrate-to-ghost.mjs --dry-run  # preview only
//   node --env-file=.env.local scripts/migrate-to-ghost.mjs --force    # update existing
//
// Requires GHOST_API_URL + GHOST_ADMIN_API_KEY (the Admin key is the "<id>:<secret>"
// value from the same custom integration as the Content API key).
//
// Idempotent: posts are matched by slug; existing ones are skipped unless --force.

import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import GhostAdminAPI from '@tryghost/admin-api';
import matter from 'gray-matter';
import { marked } from 'marked';

// fileURLToPath works on any Node >= 12 (import.meta.dirname needs >= 20.11).
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const POSTS_FOLDER = path.join(ROOT, 'markdowns');
const INDEX_FILE = path.join(ROOT, 'app', 'blog', 'list_of_blogs.json');

const DRY_RUN = process.argv.includes('--dry-run');
const FORCE = process.argv.includes('--force');

const url = process.env.GHOST_API_URL;
const key = process.env.GHOST_ADMIN_API_KEY;

if (!url || !key) {
  console.error('✗ Missing GHOST_API_URL or GHOST_ADMIN_API_KEY in .env.local');
  process.exit(1);
}
if (!key.includes(':')) {
  console.error(
    '✗ GHOST_ADMIN_API_KEY looks wrong. It must be the Admin API key in "<id>:<secret>" form\n' +
      '  (Settings → Integrations → your integration → Admin API Key), not the Content API key.',
  );
  process.exit(1);
}

const api = new GhostAdminAPI({ url, key, version: 'v5.0' });

/** "infrastructure_industry" -> "Infrastructure Industry"; "retail" -> "Retail". */
function humanize(value) {
  if (!value) return '';
  return value
    .replace(/_/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

/** Ordered, de-duped tag names. First entry becomes Ghost's primary_tag. */
function buildTags(entry, frontmatter) {
  const candidates = [
    entry.category, // primary (= category in the old UI)
    humanize(entry.type), // claims_story -> Claims Story
    humanize(entry.topic), // infrastructure_industry -> Infrastructure Industry
    humanize(entry.industry), // corporate -> Corporate
    ...(Array.isArray(frontmatter.tags) ? frontmatter.tags : []),
  ];
  const seen = new Set();
  const tags = [];
  for (const raw of candidates) {
    const name = String(raw ?? '').trim();
    if (!name) continue;
    const k = name.toLowerCase();
    if (seen.has(k)) continue;
    seen.add(k);
    tags.push({ name });
  }
  return tags;
}

/** Drop a leading body line that just repeats the title (common in the legacy files). */
function stripDuplicateTitle(body, title) {
  const lines = body.split('\n');
  let i = 0;
  while (i < lines.length && lines[i].trim() === '') i++;
  if (i < lines.length && lines[i].replace(/^#+\s*/, '').trim() === title.trim()) {
    lines.splice(i, 1);
  }
  return lines.join('\n');
}

// Parse a date as UTC. Handles non-zero-padded "YYYY-M-D" (which `new Date()`
// would otherwise read as *local* time, shifting the day in non-UTC zones).
function parseDateUTC(dateStr) {
  if (!dateStr) return null;
  const m = String(dateStr)
    .trim()
    .match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (m) {
    return new Date(Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3])));
  }
  const d = new Date(dateStr);
  return Number.isNaN(d.getTime()) ? null : d;
}

function toPublishedAt(dateStr) {
  const d = parseDateUTC(dateStr);
  if (!d) return new Date().toISOString();
  // Don't schedule into the future — clamp to "now" so it publishes immediately.
  return (d.getTime() > Date.now() ? new Date() : d).toISOString();
}

async function fileExists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const index = JSON.parse(await readFile(INDEX_FILE, 'utf8'));
  console.log(
    `${DRY_RUN ? '[DRY RUN] ' : ''}Migrating ${index.length} posts to ${url}${FORCE ? ' (force)' : ''}\n`,
  );

  const summary = { created: 0, updated: 0, skipped: 0, missing: 0, failed: 0 };

  for (const entry of index) {
    const slug = entry.slug;
    const mdPath = path.join(POSTS_FOLDER, `${slug}.mdx`);

    if (!(await fileExists(mdPath))) {
      console.warn(`⚠ ${slug}: no markdown file, skipping`);
      summary.missing++;
      continue;
    }

    try {
      const { data: fm, content } = matter(await readFile(mdPath, 'utf8'));
      const body = stripDuplicateTitle(content, entry.title);
      // marked passes raw HTML through; legacy files use JSX `className` — make it valid HTML.
      const html = marked.parse(body, { gfm: true }).replace(/className=/g, 'class=');

      const postData = {
        title: entry.title,
        slug,
        html,
        custom_excerpt: (fm.excerpt ? String(fm.excerpt) : '').slice(0, 300) || undefined,
        feature_image: entry.image || undefined,
        featured: Boolean(entry.featured),
        status: 'published',
        published_at: toPublishedAt(entry.date),
        tags: buildTags(entry, fm),
      };

      const [existing] = await api.posts.browse({ filter: `slug:${slug}`, limit: 1 });

      if (existing && !FORCE) {
        console.log(`• ${slug}: exists, skipping`);
        summary.skipped++;
        continue;
      }

      if (DRY_RUN) {
        console.log(
          `${existing ? '~' : '+'} ${slug}  [${postData.tags.map((t) => t.name).join(', ')}]` +
            `${postData.featured ? '  ★featured' : ''}`,
        );
        if (existing) summary.updated++;
        else summary.created++;
        continue;
      }

      if (existing) {
        await api.posts.edit(
          { ...postData, id: existing.id, updated_at: existing.updated_at },
          { source: 'html' },
        );
        console.log(`~ ${slug}: updated`);
        summary.updated++;
      } else {
        await api.posts.add(postData, { source: 'html' });
        console.log(`+ ${slug}: created`);
        summary.created++;
      }
    } catch (err) {
      console.error(`✗ ${slug}: ${err.message ?? err}`);
      summary.failed++;
    }
  }

  console.log('\n──────── summary ────────');
  console.log(summary);
  if (summary.failed > 0) process.exitCode = 1;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
