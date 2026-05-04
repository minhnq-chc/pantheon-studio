<div align="center">

# ⚡ PANTHEON

### Autonomous AI Game Studio Operating System

*Fourteen specialized agents. Two wings. One founder. Zero human bottlenecks.*

[![Status](https://img.shields.io/badge/status-blueprint-d4af37?style=flat-square)](https://github.com/minhnq-chc/pantheon-studio)
[![Plan](https://img.shields.io/badge/seeking-Mimo%20Max%20Plan-d4af37?style=flat-square)](https://mimo.ai)
[![License](https://img.shields.io/badge/license-MIT-d4af37?style=flat-square)](LICENSE)
[![Built with](https://img.shields.io/badge/built%20with-Claude-d4af37?style=flat-square)](https://claude.ai)

[**Live Demo**](https://pantheon-studio.vercel.app) · [**Architecture**](./ARCHITECTURE.md) · [**Roadmap**](./ROADMAP.md) · [**Agent Charters**](./docs/agents)

</div>

---

## What is Pantheon?

Pantheon is the operating system for an **autonomous indie game studio** — a network of fourteen long-running Claude agents that ingest market signals, debate concepts, design games, write code, ship to Steam, run LiveOps, and feed every learning back into the next cycle.

It is **not** a chatbot, not a copilot, and not a single agent with tools. It is a studio.

```
Market signal → Concept → Greenlight → GDD → Code → QA → Localize → Launch → LiveOps → Insight
                                                                                          │
                                                                                          ▼
                                                                                   Next title
```

Every transition above is performed by a different agent with its own long-context reasoning chain, and every cross-agent message is persisted to an audit log.

## Why this exists

I shipped an autonomous trading agent for XAUUSD on the Claude Pro plan last year. It read live charts, ran SMC/ICT reasoning, sized positions, and placed orders through an MT5 bridge. **It worked. It still works.**

The Pro plan let me prove one agent.
The Max plan would let me run the studio.

Pantheon takes the same multi-source ingestion → debate → decision → execution → audit pattern and applies it to a domain where the output is creative: **indie games**. Each agent is, in effect, a miniature trading bot for its discipline.

## The fourteen

### Production Wing — *they make the game*

| Codename | Role | Token Load |
| --- | --- | --- |
| **Muse** ✦ | Creative Director — scans trends, proposes concepts | Heavy |
| **Architect** ◈ | Game Designer — GDD, economy, core loops | Heavy |
| **Bard** ❦ | Narrative Writer — lore, dialogue, branching trees | Very Heavy |
| **Iris** ◊ | Art Director — diffusion bridges, style enforcement | Heavy |
| **Orpheus** ♪ | Audio Director — Suno/ElevenLabs bridges | Heavy |
| **Hephaestus** ⚒ | Lead Engineer — Unity/Godot, 30–50K LOC per title | **Extreme** |
| **Argus** ◉ | QA Lead — playtest personas, regression triage | Heavy |
| **Babel** ✺ | Localizer — 12 languages with cultural adaptation | **Extreme** |

### Business Wing — *they run the studio*

| Codename | Role | Token Load |
| --- | --- | --- |
| **Zeus** ⚡ | CEO / Orchestrator — arbitrates every debate | **Extreme** |
| **Plutus** ✦ | CFO — Steam payouts, tax, royalty splits | Heavy |
| **Hermes** ✈ | CMO — ads, Steam page A/B, outreach | Very Heavy |
| **Hestia** ✿ | Community — Discord 24/7, reviews, PR | Very Heavy |
| **Chronos** ⧖ | LiveOps — seasonal events, patches | Very Heavy |
| **Athena** ◭ | Data Analyst — cohorts, LTV, retention | Heavy |

Each agent has a charter, a reasoning signature, and a token-load profile. See [`docs/agents/`](./docs/agents) for the full per-agent specification.

## Token economics

A single agent runs on a Pro plan. A studio of fourteen does not.

| Activity | Monthly tokens |
| --- | ---: |
| Build pipeline (1 game / 2 months) | 150–200M |
| LiveOps across 3 live titles | 135M |
| Marketing creative generation | 15M |
| Community ops (24/7) | 24M |
| Analytics & LiveOps reasoning | 36M |
| Self-improvement loop (RLHF, prompt tuning) | 20M |
| **Steady-state total** | **≈ 430M / month** |

A 1.6B Max grant lasts ~3.7 months at steady state. That is enough runway to ship the first commercial title and prove the studio loop end-to-end.

## 90-day plan

| Phase | Weeks | Outcome |
| --- | --- | --- |
| **Skeleton** | 1–2 | Zeus orchestrator, Postgres+pgvector memory, audit pipeline |
| **Production Wing v1** | 3–4 | Muse, Architect, Bard online — first end-to-end brief→GDD→outline |
| **Multi-modal Bridges** | 5–6 | Iris (SDXL/Flux), Orpheus (Suno/ElevenLabs), asset library |
| **Game #1 — Hyper-casual** | 7–9 | 5K-LOC mobile loop, Argus harness, itch.io soft-launch |
| **Localize & Ship** | 10–11 | Babel 12-language pass, Hermes/Hestia minimum-viable run |
| **Game #2 — Steam debut** | 12+ | Full studio loop, Chronos/Athena LiveOps, first revenue |

Full breakdown in [ROADMAP.md](./ROADMAP.md).

## Project status

This repository is the **public blueprint** for Pantheon, accompanying my application for the Mimo Max plan.

- ✅ Studio architecture and 14-agent specification
- ✅ Token-economic model
- ✅ 90-day execution plan
- ⏳ Implementation begins on Max-plan approval

The trading bot that proved the loop on a single agent is private — but the architectural pattern is the same one documented here. References available on request.

## About the founder

Solo builder from Hanoi, Vietnam. Background: building autonomous trading systems, multi-agent orchestration, and shipping software end-to-end without a team.

- GitHub: [@minhnq-chc](https://github.com/minhnq-chc)
- This repo: [pantheon-studio](https://github.com/minhnq-chc/pantheon-studio)

## Tech stack of this site

The landing page itself is built with Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS v4, and TypeScript — server-rendered, statically prerendered, deployed on Vercel.

```bash
npm install
npm run dev
```

## License

MIT — see [LICENSE](./LICENSE).
