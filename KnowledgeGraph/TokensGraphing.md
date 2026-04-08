# Knowledge Graph — Maintenance Guide

> **Universal file.** Drop this into any project's `KnowledgeGraph/` folder unchanged.
> It explains how to maintain the entire `KnowledgeGraph/` system for any agent or developer.

---

## What Is This System?

The `KnowledgeGraph/` folder is a persistent, structured context cache that lives in the repo root. Instead of re-reading large source files at the start of every session, agents and developers read small, curated files from this folder.

```
KnowledgeGraph/
├── KnowledgeGraph.md          ← Repo-specific: protocol + architecture + active state
├── TokensInstructions.md      ← Universal: how to run efficient sessions
├── TokensGraphing.md          ← Universal: how to maintain this folder (this file)
└── graph/                     ← Structured data cache
    ├── routes.json            ← All routes/pages
    ├── components.json        ← All components + libraries
    ├── types-and-constants.json ← All types, constants, design tokens
    ├── build-and-config.json  ← Build, deploy, dependencies
    ├── decisions-and-gotchas.json ← Bugs, typos, key decisions, do-not-load list
    └── token-cost-map.json    ← Token cost per file (use to decide what to load)
```

> **Core principle:** Build the graph once, query it cheaply forever.

The graph replaces expensive per-session re-reads (3,000–50,000+ tokens) with cheap structured lookups (~200–800 tokens each).

---

## What Goes in Each File

### `KnowledgeGraph.md` (repo-specific)

Keep under **200 lines**. Include:

| Section | Content |
|---|---|
| **Session Start Protocol** | How agents should use the graph files |
| **Which graph file for which task** | Routing table for agents |
| **Project Overview** | Stack, domain, deploy target |
| **Architecture Map** | Directory tree + what lives where |
| **Key Decisions** | Non-obvious choices + implications |
| **Active State** | Current sprint, focus, blockers — update every session |
| **Graph Update Rules** | When/how to update this file |

**Do NOT store:** raw code, full file contents, temporary notes, anything that changes daily.

### `graph/*.json` (repo-specific, structured data)

Each file covers one domain:

| File | Contains |
|---|---|
| `routes.json` | Every route path, its file, size, and sitemap priority |
| `components.json` | Every component, its file, size, exports, external deps, and the animation system |
| `types-and-constants.json` | All TypeScript types, type unions, design system tokens |
| `build-and-config.json` | Next.js config, scripts, all dependencies, Docker config |
| `decisions-and-gotchas.json` | Known bugs, filename typos, key architectural decisions, do-not-load list |
| `token-cost-map.json` | Token cost estimate per file, tiered by safe-to-load vs never-load |

**Do NOT store:** raw code, full file contents, config values that are secrets (link to `.env.example` instead).

### `TokensInstructions.md` and `TokensGraphing.md` (universal — never modify)

These files should be copied unchanged to every new project. Never put repo-specific content in them.

---

## When to Update the Graph (Regraph Triggers)

### High Priority — update within the same session

| Event | What to update |
|---|---|
| New route or page added | `graph/routes.json`, Architecture Map in `KnowledgeGraph.md` |
| New component created | `graph/components.json` |
| New type or constant added | `graph/types-and-constants.json` |
| Dependency added or removed | `graph/build-and-config.json` |
| Non-obvious bug or gotcha discovered | `graph/decisions-and-gotchas.json` |
| Non-obvious decision made | `graph/decisions-and-gotchas.json` |
| Session ends (always) | `Active State` in `KnowledgeGraph.md` |

### Medium Priority — update at end of session

| Event | What to update |
|---|---|
| Refactor changes directory structure | Architecture Map in `KnowledgeGraph.md`, relevant `graph/*.json` |
| New canonical reference file created | `graph/token-cost-map.json` |
| Token cost estimate for a file was wrong | `graph/token-cost-map.json` |

### Do NOT Update For

- In-progress or half-complete work (wait until it's shipped)
- Code-level details readable directly from the source file
- Temporary notes or experimental results

---

## How to Update

**Instruct the agent in-session:**
```
"Update KnowledgeGraph/graph/routes.json — we just added the /claims route at app/claims/page.tsx."
"Update the Active State in KnowledgeGraph/KnowledgeGraph.md — we finished the header refactor."
```

**Or edit the JSON/Markdown files directly** — they are plain text.

**Golden rule:** If you had to explain something to the agent at the start of this session that it didn't already know, add it to the graph so you never explain it again.

---

## Token Savings Model

| Approach | Tokens loaded per session |
|---|---|
| No graph — re-read relevant source files | 3,000–50,000+ |
| Graph — read `KnowledgeGraph.md` + 1–2 JSON files | 800–2,000 |
| **Savings per session** | **~2,000–48,000 tokens** |

Savings compound across sessions. A mature, well-maintained graph provides value on every single session for the lifetime of the project.

---

## Graph Health Check

Run at the start of any new sprint or after a long break:

1. Does the **Architecture Map** reflect the current directory structure?
2. Does **Active State** reflect the current focus — not last sprint's?
3. Are there stale **Key Decisions** that were later reversed?
4. Are all `graph/*.json` file paths still valid?
5. Are the `token-cost-map.json` cost estimates still accurate?

Update any stale data before starting work. A stale graph is worse than no graph — it actively misleads the agent.

---

## Porting to a New Repository

1. Copy the entire `KnowledgeGraph/` folder to the new repo root.
2. **Delete** the contents of `KnowledgeGraph.md` → fill in with the new repo's data.
3. **Delete** all `graph/*.json` files → create new ones by exploring the new repo.
4. Keep `TokensInstructions.md` and `TokensGraphing.md` **unchanged**.
5. Commit the folder — the graph is persistent project infrastructure, not a scratch file.

**Minimal viable graph for a new repo:**
```
KnowledgeGraph.md          ← Overview + architecture map + active state
graph/routes.json          ← All routes/pages
graph/decisions-and-gotchas.json ← Key decisions + do-not-load list
graph/token-cost-map.json  ← Cost per file
```
Add the other data files as the project matures and you learn which information is repeatedly asked for.
