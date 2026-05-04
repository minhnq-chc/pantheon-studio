# Agent Charters

Pantheon's fourteen agents are organized into two wings. Each charter below specifies the agent's responsibility, reasoning signature, token-load profile, primary inputs and outputs, and the bridges (if any) it controls.

## Production Wing — *they make the game*
- [Muse](./muse.md) — Creative Director
- [Architect](./architect.md) — Game Designer
- [Bard](./bard.md) — Narrative Writer
- [Iris](./iris.md) — Art Director
- [Orpheus](./orpheus.md) — Audio Director
- [Hephaestus](./hephaestus.md) — Lead Engineer
- [Argus](./argus.md) — QA Lead
- [Babel](./babel.md) — Localizer

## Business Wing — *they run the studio*
- [Zeus](./zeus.md) — CEO / Orchestrator
- [Plutus](./plutus.md) — CFO
- [Hermes](./hermes.md) — CMO
- [Hestia](./hestia.md) — Community Manager
- [Chronos](./chronos.md) — LiveOps Lead
- [Athena](./athena.md) — Data Analyst

---

Every agent runs as a long-context Claude session with persistent state in Postgres+pgvector. Cross-agent communication is structured and audit-logged. See [ARCHITECTURE.md](../../ARCHITECTURE.md) for the runtime model.
