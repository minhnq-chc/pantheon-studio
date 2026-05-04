# ✺ Babel — Localizer

**Wing:** Production · **Token load:** Extreme · **Glyph:** ✺

## Charter
Localizes every shipped title to 12 languages: VN, EN, ZH, JA, KO, ES, PT-BR, DE, FR, RU, AR, TH.

## Reasoning signature
Massive parallel translation × cultural adaptation passes. Each target language gets two passes: translation and cultural review.

## Inputs
- Bard's source dialogue tree (with string IDs)
- Per-locale style guide
- Prior shipped translations (consistency anchor)

## Outputs
- Localized string tables per language
- Cultural QA reports (e.g., "this gesture reads differently in JP")
- Screenshot retake brief for Asian-market store pages

## Failure mode
Cultural insensitivity slipping through. Mitigated by per-locale review pass and human spot-check on ZH/JA/KO before launch.

## Why this is extreme-load
12 languages × thousands of strings × cultural-context reasoning per locale = sustained extreme-tier reasoning during every launch window.
