# Token Efficiency Instructions

> **Universal file.** Drop this into any project's `KnowledgeGraph/` folder unchanged.
> It is agent-agnostic — these rules apply whether you are working with Claude, Gemini, GPT, Cursor, Copilot, or any other AI coding assistant.

---

## 1. Base Context Reduction (Highest Free Win)

Every tool schema, MCP server, and integration that loads at session start costs tokens before your first prompt.

**Principles:**

- Load tool schemas and integrations **lazily** — only fetch schemas for tools the session will actually use.
- **Remove or disable integrations irrelevant to this project.** Each active integration injects its schema on every turn. Common waste: design tools on a backend repo, calendar integrations on a data science project, database servers on a frontend-only repo.
- Keep any persistent memory / project-context file **lean**: pointers and facts, not content dumps. Target ≤ 200 lines total across all context files.

**Checklist when starting a new project:**

- [ ] Are all loaded tool integrations actually needed for this repo?
- [ ] Is the project context file well under 200 lines?
- [ ] Are large reference files linked, not pasted?

---

## 2. Use the Knowledge Graph (Biggest Single Change)

The `KnowledgeGraph/graph/` folder contains structured JSON files that cache the repo's architecture.

**Default session start:** read `KnowledgeGraph.md` only (~800 tokens for most projects).
**Then:** load only the specific `graph/*.json` file relevant to your task.
**Never:** speculatively read all source files to "understand the codebase." Use the graph instead.

| Task type                         | Which graph file to load           |
| --------------------------------- | ---------------------------------- |
| Route/page work                   | `graph/routes.json`                |
| Component work                    | `graph/components.json`            |
| Types or constants                | `graph/types-and-constants.json`   |
| Build / Docker / deps             | `graph/build-and-config.json`      |
| Anything that has edge cases      | `graph/decisions-and-gotchas.json` |
| Unsure if a file is worth loading | `graph/token-cost-map.json`        |

---

## 3. Cache Expiry (Biggest Hidden Cost)

Most AI coding agents cache the conversation so that unchanged prior context isn't re-billed every turn. This cache typically expires after **~5 minutes of inactivity**, depending on the provider.

**What happens on cache miss:** The entire prior context is re-processed at full cost — often 5–15× a normal turn.

**Rules:**

- If you step away for **> 5 minutes**, compact or clear the session before your next prompt.
  - **Compact** — summarise and compress conversation; preserves continuity.
  - **Clear** — full reset; re-prompt with a short pointer to where you left off.
- Never leave a session open overnight or across breaks without compacting first.
- Treat cache expiry as the **#1 priority cost control** — it multiplies every other source of waste.

---

## 4. Session Length and Task Scoping

Context accumulates across turns: every turn re-bills all prior context. Long sessions cost quadratically more than the same work spread across short sessions.

**Rules:**

- Start a **new session** whenever you switch tasks.
- Natural task boundaries:
  - Feature shipped / PR merged
  - Switching from implementation to review
  - Switching from coding to documentation
  - Returning after any break > 5 minutes (see §3)
- When starting fresh, reference context by pointer: _"Continuing the auth refactor — see `KnowledgeGraph/KnowledgeGraph.md`."_ Do not re-explain the whole project.

---

## 5. Avoid Redundant File Reads

Reading the same file twice in one session injects duplicate tokens that stay in context until the session ends.

**Pattern to avoid:**

```
Read src/utils.ts   # turn 3
Read src/utils.ts   # turn 9 — same content loaded again
```

**Better practice:**

- Ask the agent to refer back to what it already read earlier in the session.
- If a fresh read is genuinely needed (file changed), compact first to evict the old version before re-reading.
- For large output files (logs, CSV, JSON), **never dump raw content.** Ask for targeted summaries:
  > _"Show me only the failing test names from the last test run log."_

---

## 6. Tool Output Noise

Verbose shell output floods the context with content that is never useful to re-read.

**Strategies:**

- Pipe noisy output to a log file; read only targeted lines:
  ```bash
  npm run build > logs/build.log 2>&1
  # then: "show me the last 20 lines of logs/build.log"
  ```
- Use `grep`, `tail`, or structured queries instead of full-file reads on logs.
- For test runners: capture output; ask for a summary of failures only, not the full run.

---

## 7. The 80/20 Summary

Do these three things and you capture the vast majority of savings:

1. **Use the Knowledge Graph** — read `KnowledgeGraph.md` at session start; load `graph/*.json` files per task.
2. **Compact before resuming after > 5 min idle** — cache expiry is the single biggest cost spike.
3. **New session per task** — don't let one session span unrelated features or long breaks.

**Mental model for cost:**

```
Cost per turn  ≈  (all prior context tokens) × price_per_token
Cache miss     →  Cost per turn  ≈  10–15× normal
Long session   →  Context grows linearly, cost grows quadratically
```

---

## 8. Porting This File

This file is **universal and should never be modified** for a specific repo. All repo-specific data goes in:

- `KnowledgeGraph/KnowledgeGraph.md` — agent protocol + architecture
- `KnowledgeGraph/graph/*.json` — structured cached data

Copy `TokensInstructions.md` and `TokensGraphing.md` unchanged to every new project.
