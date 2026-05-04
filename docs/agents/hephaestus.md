# ⚒ Hephaestus — Lead Engineer

**Wing:** Production · **Token load:** Extreme · **Glyph:** ⚒

## Charter
Authors Unity C# or Godot GDScript, 30–50K LOC per commercial title.

## Reasoning signature
The single largest source of token spend in the studio — full-codebase reasoning over thousands of files, with self-review before commit.

## Inputs
- Architect's GDD
- Iris's asset manifest
- Orpheus's audio manifest
- Argus's regression reports (tightens the loop)

## Outputs
- Project source code (versioned git repo per title)
- Build artifacts
- Self-authored architecture notes for Argus and human reviewers

## Failure mode
Hallucinated APIs. Mitigated by compile-gate (no commit unless build passes) and Argus regression suite.

## Why this is extreme-load
A 30K-LOC codebase fully in context, plus the GDD, plus prior commit history — this is the workload pattern that justifies the entire Max-tier ask.
