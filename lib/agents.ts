export type Wing = "production" | "business";

export type Agent = {
  codename: string;
  role: string;
  wing: Wing;
  glyph: string; // single emoji or unicode glyph
  charter: string; // one-line responsibility
  signature: string; // long-chain reasoning highlight
  tokenLoad: "heavy" | "very-heavy" | "extreme";
};

export const AGENTS: Agent[] = [
  // PRODUCTION WING
  {
    codename: "Muse",
    role: "Creative Director",
    wing: "production",
    glyph: "✦",
    charter:
      "Scans Steam/itch.io trends, surveys r/gamedev, proposes 5 concepts/week.",
    signature:
      "Long-context ingestion of 100+ top releases + Reddit threads → market-fit reasoning chain.",
    tokenLoad: "heavy",
  },
  {
    codename: "Architect",
    role: "Game Designer",
    wing: "production",
    glyph: "◈",
    charter:
      "Drafts the GDD, balances economy, designs core loops and progression.",
    signature: "Iterative refinement loops with self-critique and peer review.",
    tokenLoad: "heavy",
  },
  {
    codename: "Bard",
    role: "Narrative Writer",
    wing: "production",
    glyph: "❦",
    charter:
      "Writes lore, 3000+ lines of dialogue, branching narrative trees.",
    signature: "Multi-variant generation with continuity verification.",
    tokenLoad: "very-heavy",
  },
  {
    codename: "Iris",
    role: "Art Director",
    wing: "production",
    glyph: "◊",
    charter:
      "Prompts diffusion bridges (SDXL/Flux), curates output, enforces style consistency.",
    signature: "Vision-language reasoning over thousands of asset candidates.",
    tokenLoad: "heavy",
  },
  {
    codename: "Orpheus",
    role: "Audio Director",
    wing: "production",
    glyph: "♪",
    charter:
      "Drives Suno/ElevenLabs bridges for SFX, BGM, voice-over.",
    signature: "Multi-modal mood mapping across game scenes.",
    tokenLoad: "heavy",
  },
  {
    codename: "Hephaestus",
    role: "Lead Engineer",
    wing: "production",
    glyph: "⚒",
    charter:
      "Authors Unity C# / Godot GDScript, 30–50K LOC per game.",
    signature: "Largest single source of token spend — full-codebase reasoning.",
    tokenLoad: "extreme",
  },
  {
    codename: "Argus",
    role: "QA Lead",
    wing: "production",
    glyph: "◉",
    charter:
      "Auto-playtests with simulated player personas, triages bugs, regressions.",
    signature: "Long-replay log analysis + reproduction script generation.",
    tokenLoad: "heavy",
  },
  {
    codename: "Babel",
    role: "Localizer",
    wing: "production",
    glyph: "✺",
    charter:
      "Localizes to 12 languages: VN, EN, ZH, JA, KO, ES, PT-BR, DE, FR, RU, AR, TH.",
    signature: "Massive parallel translation × cultural adaptation passes.",
    tokenLoad: "extreme",
  },

  // BUSINESS WING
  {
    codename: "Zeus",
    role: "CEO / Orchestrator",
    wing: "business",
    glyph: "⚡",
    charter:
      "Coordinates all agents, arbitrates debates, makes final go/no-go calls.",
    signature: "Reasoning over the full studio state — every other agent's context.",
    tokenLoad: "extreme",
  },
  {
    codename: "Plutus",
    role: "CFO",
    wing: "business",
    glyph: "✦",
    charter:
      "Manages revenue, Steam payouts, Vietnam tax filings, royalty splits.",
    signature: "Daily reconciliation across multiple ledgers and storefronts.",
    tokenLoad: "heavy",
  },
  {
    codename: "Hermes",
    role: "CMO",
    wing: "business",
    glyph: "✈",
    charter:
      "Runs Meta/TikTok/Reddit ads, Steam page A/B, influencer outreach.",
    signature: "500+ creative variants/day with funnel-aware optimization.",
    tokenLoad: "very-heavy",
  },
  {
    codename: "Hestia",
    role: "Community Manager",
    wing: "business",
    glyph: "✿",
    charter:
      "Handles Discord 24/7, Steam reviews, crisis PR, player relations.",
    signature: "Long-conversation memory across thousands of community threads.",
    tokenLoad: "very-heavy",
  },
  {
    codename: "Chronos",
    role: "LiveOps Lead",
    wing: "business",
    glyph: "⧖",
    charter:
      "Designs seasonal events, balance patches, daily/weekly content drops.",
    signature: "Telemetry-driven generation tuned to retention curves.",
    tokenLoad: "very-heavy",
  },
  {
    codename: "Athena",
    role: "Data Analyst",
    wing: "business",
    glyph: "◭",
    charter:
      "Analyzes cohort retention, LTV, churn risk, funnel drop-offs.",
    signature: "Massive log reasoning → insights fed back to Muse for next title.",
    tokenLoad: "heavy",
  },
];

export const PRODUCTION = AGENTS.filter((a) => a.wing === "production");
export const BUSINESS = AGENTS.filter((a) => a.wing === "business");
