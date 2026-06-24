// Ensures every Ghost post has the correct industry/topic tag based on list_of_blogs.json.
// Safe to re-run — only adds missing tags, never removes existing ones.
//
//   node --env-file=.env.local scripts/tag-ghost-posts.mjs            # apply
//   node --env-file=.env.local scripts/tag-ghost-posts.mjs --dry-run  # preview
//
// Requires GHOST_API_URL + GHOST_ADMIN_API_KEY in .env.local.

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import GhostAdminAPI from '@tryghost/admin-api';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const INDEX_FILE = path.join(ROOT, 'app', 'blog', 'list_of_blogs.json');

const DRY_RUN = process.argv.includes('--dry-run');

const url = process.env.GHOST_API_URL;
const key = process.env.GHOST_ADMIN_API_KEY;

if (!url || !key) {
  console.error('✗ Missing GHOST_API_URL or GHOST_ADMIN_API_KEY');
  process.exit(1);
}

const api = new GhostAdminAPI({ url, key, version: 'v5.0' });

/** "chemical_industry" → "Chemical Industry" (Ghost auto-slugifies to "chemical-industry") */
function humanize(value) {
  if (!value) return '';
  return value
    .replace(/_/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

async function main() {
  const index = JSON.parse(await readFile(INDEX_FILE, 'utf8'));
  console.log(`${DRY_RUN ? '[DRY RUN] ' : ''}Checking tags for ${index.length} posts…\n`);

  const stats = { updated: 0, skipped: 0, missing: 0, failed: 0 };

  for (const entry of index) {
    const { slug, topic, type, category } = entry;

    let existing;
    try {
      [existing] = await api.posts.browse({ filter: `slug:${slug}`, limit: 1, include: 'tags' });
    } catch {
      console.warn(`⚠ ${slug}: could not fetch from Ghost`);
      stats.missing++;
      continue;
    }

    if (!existing) {
      console.warn(`⚠ ${slug}: not in Ghost (run migrate-to-ghost.mjs first)`);
      stats.missing++;
      continue;
    }

    const existingTagNames = new Set((existing.tags ?? []).map((t) => t.name?.toLowerCase()));

    // Tags we want to ensure are present
    const wantedTags = [category, humanize(type), humanize(topic)].filter(Boolean);

    const missingTags = wantedTags.filter((name) => !existingTagNames.has(name.toLowerCase()));

    if (missingTags.length === 0) {
      console.log(`• ${slug}: tags OK`);
      stats.skipped++;
      continue;
    }

    const mergedTags = [
      ...(existing.tags ?? []).map((t) => ({ name: t.name })),
      ...missingTags.map((name) => ({ name })),
    ];

    if (DRY_RUN) {
      console.log(`~ ${slug}: would add [${missingTags.join(', ')}]`);
      stats.updated++;
      continue;
    }

    try {
      await api.posts.edit({ id: existing.id, updated_at: existing.updated_at, tags: mergedTags });
      console.log(`~ ${slug}: added [${missingTags.join(', ')}]`);
      stats.updated++;
    } catch (err) {
      console.error(`✗ ${slug}: ${err.message ?? err}`);
      stats.failed++;
    }
  }

  console.log('\n──────── summary ────────');
  console.log(stats);
  if (stats.failed > 0) process.exitCode = 1;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
