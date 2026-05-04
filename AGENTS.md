# Agents in this repository

This file is the entry point for AI assistants working on the Pantheon codebase.

For the **fourteen agents that constitute the Pantheon studio itself**, see [`docs/agents/`](./docs/agents).

For **architecture and runtime model**, see [ARCHITECTURE.md](./ARCHITECTURE.md).

For the **build sequence**, see [ROADMAP.md](./ROADMAP.md).

---

## Repository conventions

- Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS v4 (not v3 — uses `@theme inline`), TypeScript.
- Server components by default. Client components only when interactivity is unavoidable.
- All copy is in English on the landing page (this is the Mimo Max plan application surface).
- No emojis in code or comments unless they are part of the agent glyph set in [`lib/agents.ts`](./lib/agents.ts).

## Project status

This repository is the public blueprint accompanying the Mimo Max plan application. Implementation of the studio runtime begins on plan approval.

<!-- BEGIN:nextjs-agent-rules -->
## Note on Next.js 16
This version has breaking changes — APIs, conventions, and file structure may differ from older training data. Refer to `node_modules/next/dist/docs/` and heed deprecation notices when editing.
<!-- END:nextjs-agent-rules -->
