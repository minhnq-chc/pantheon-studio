# Pantheon — 90-Day Roadmap

> From scaffold to Steam debut. A deliberate sequence: skeleton → production wing → multi-modal → low-stakes ship → real ship. Each phase unblocks the next.

The plan assumes Mimo Max plan approval on **day 0**.

---

## Phase 1 — Skeleton (Weeks 1–2)

**Goal:** A minimal Zeus that can route messages between two stub agents and persist everything.

- [ ] Zeus orchestrator core: state machine, agent registry, debate protocol skeleton
- [ ] Postgres + pgvector schema (episodic + semantic + audit tables)
- [ ] Audit log pipeline — every cross-agent message persisted, replayable
- [ ] Two stub agents (Muse-stub, Architect-stub) exchanging contract documents
- [ ] Local dev harness: replay any past day's audit log

**Exit criterion:** A 24-hour run with zero lost messages and full replay fidelity.

---

## Phase 2 — Production Wing v1 (Weeks 3–4)

**Goal:** The first end-to-end *text* output: market signal → concept → GDD → narrative outline.

- [ ] Muse online — Steam/itch.io/r/gamedev ingestion, weekly concept reports
- [ ] Architect online — GDD generation with self-critique loop
- [ ] Bard online — narrative outline + character sheets
- [ ] Peer-review protocol shipped (any agent can critique any other's output)
- [ ] First end-to-end run on a real concept candidate

**Exit criterion:** A complete brief→GDD→outline produced autonomously, reviewed by a human, judged "shippable as a starting point."

---

## Phase 3 — Multi-modal Bridges (Weeks 5–6)

**Goal:** Visuals and audio enter the loop.

- [ ] Iris bridge to SDXL / Flux — prompted, curated, style-consistency-checked
- [ ] Orpheus bridge to Suno + ElevenLabs — BGM, SFX, placeholder VO
- [ ] Asset library with versioning + embedding-based search
- [ ] Style consistency checker (refuses outputs that drift from the art bible)

**Exit criterion:** A complete pre-production package (GDD + narrative + art bible + audio mood board) for one concept, generated end-to-end.

---

## Phase 4 — Game #1: Hyper-casual (Weeks 7–9)

**Goal:** Ship something. The bar is low on purpose.

- [ ] Hephaestus authors a 5K-LOC mobile hyper-casual loop in Unity or Godot
- [ ] Argus auto-playtest harness with simulated personas
- [ ] Build → playtest → bug → patch loop runs autonomously for 5+ days
- [ ] Soft-launch on itch.io as a low-stakes proof of the studio loop

**Exit criterion:** Game #1 live on itch.io, playable, with telemetry feeding Athena.

---

## Phase 5 — Localize & Ship (Weeks 10–11)

**Goal:** Prove the business wing.

- [ ] Babel passes Game #1 through 12 languages with cultural QA
- [ ] Hermes minimum-viable run: Steam-style page mockup, ad creative variants
- [ ] Hestia minimum-viable run: Discord opened, response automation live
- [ ] Launch postmortem flows back into Muse (RLHF loop closed)

**Exit criterion:** RLHF loop demonstrably affects the next Muse concept slate. The studio learns.

---

## Phase 6 — Game #2: Steam debut (Weeks 12+)

**Goal:** The real one.

- [ ] Full Production + Business loop running in parallel
- [ ] Chronos LiveOps schedule for first 90 days post-launch
- [ ] Athena cohort/LTV dashboards live
- [ ] First commercial revenue → Plutus reconciliation
- [ ] Steam page live, wishlists accumulating, launch trailer dispatched

**Exit criterion:** Game #2 on Steam with paying customers and a working LiveOps loop.

---

## Beyond 90 days

By month four the studio should be running **3 live titles + 1 in production** at the steady-state token footprint described in [README.md](./README.md#token-economics) (~430M tokens/month). At that point the Max plan grant is approximately 70% consumed and the question becomes whether revenue from Games #1–3 covers the next billion tokens.

That is the entire thesis: **prove a self-funding autonomous studio, then scale the portfolio.**

---

## Risk register

| Risk | Likelihood | Mitigation |
| --- | --- | --- |
| Hephaestus produces unshippable code | Medium | Argus regression gates; human spot-check before each merge to main |
| Game #1 fails to attract any players | High (it's hyper-casual on itch.io) | Game #1 is explicitly a *process* proof, not a *commercial* proof |
| Token budget overruns during build | Medium | Zeus enforces per-phase ceilings; defers non-critical agents |
| Bridge services (SDXL, Suno) outage | Low | Cached fallback packs; multi-vendor for audio |
| Solo founder bus factor | High | Public blueprint (this repo) + audit log = full reproducibility |

---

*Built solo, in public, from Hanoi.*
