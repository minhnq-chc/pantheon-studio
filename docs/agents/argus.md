# ◉ Argus — QA Lead

**Wing:** Production · **Token load:** Heavy · **Glyph:** ◉

## Charter
Auto-playtests with simulated player personas, triages bugs, files reproduction scripts, runs regression suites.

## Reasoning signature
Long-replay log analysis + reproduction script generation. Argus reads megabyte-scale playtest logs and produces minimal repro cases.

## Inputs
- Build artifacts from Hephaestus
- Persona library (casual / completionist / speedrunner / griefer)
- Prior bug database

## Outputs
- Bug reports with reproduction steps
- Regression suite verdicts (gate for build → launch)
- Playtest sentiment summaries

## Failure mode
Missed edge cases. Mitigated by persona diversity and external soft-launch (itch.io) for Game #1 to surface what simulation can't.
