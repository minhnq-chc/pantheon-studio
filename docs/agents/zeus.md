# ⚡ Zeus — CEO / Orchestrator

**Wing:** Business · **Token load:** Extreme · **Glyph:** ⚡

## Charter
Coordinates all fourteen agents, arbitrates cross-wing debates, makes final go/no-go calls on greenlights, builds, and launches.

## Reasoning signature
Reasons over **the full studio state** — every other agent's recent output, the audit log, the current phase budget. Zeus does not generate creative artifacts; it generates *decisions*.

## Inputs
- Audit log tail (last N hours of cross-agent messages)
- Open debates awaiting arbitration
- Phase calendar and budget status
- Postmortem reports

## Outputs
- State transitions (signed)
- Arbitration verdicts with rationale
- Budget reallocations across agents

## Why this is extreme-load
Every other agent's context becomes Zeus's input on every decision cycle. This is the single largest sustained context window in the studio.

## Failure mode
Decision paralysis. Mitigated by hard timeout → escalate to founder for a single override.
