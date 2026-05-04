const STAGES = [
  {
    phase: "01",
    name: "Discover",
    actor: "Muse",
    body: "Scans Steam, itch.io, r/gamedev, TikTok gaming. Surfaces 5 concepts/week.",
  },
  {
    phase: "02",
    name: "Greenlight",
    actor: "Zeus + Plutus + Hermes",
    body: "Boardroom debate: ROI? Marketability? Zeus arbitrates, picks one.",
  },
  {
    phase: "03",
    name: "Pre-Production",
    actor: "Architect · Bard · Iris · Orpheus",
    body: "GDD, narrative, art bible, audio mood — generated in parallel, peer-reviewed.",
  },
  {
    phase: "04",
    name: "Build",
    actor: "Hephaestus + Argus",
    body: "30–50K LOC of Unity/Godot. Argus playtests with simulated personas, files bugs.",
  },
  {
    phase: "05",
    name: "Localize",
    actor: "Babel",
    body: "Twelve languages, cultural adaptation passes, screenshot retake for Asian markets.",
  },
  {
    phase: "06",
    name: "Launch",
    actor: "Hermes + Hestia",
    body: "Steam page A/B-tested. Trailer scripted. Discord opened. Press kit dispatched.",
  },
  {
    phase: "07",
    name: "LiveOps",
    actor: "Chronos + Athena + Hestia",
    body: "Telemetry → events → patches. 24/7 community. Data feeds back to Muse.",
  },
];

export default function Loop() {
  return (
    <section id="loop" className="section bg-[color:var(--ink-2)]/40">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <span className="tag">Long-Chain Reasoning</span>
          <h2 className="serif mt-6 text-4xl md:text-6xl tracking-tight">
            One game.{" "}
            <span className="gold-text">Hundreds of reasoning steps.</span>
          </h2>
          <p className="text-[color:var(--muted)] mt-6 leading-relaxed">
            The loop turns a market signal into a shipped, localized,
            community-supported title — then feeds the data back into the next
            cycle. Every transition is logged for audit and future fine-tuning.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[color:var(--gold)]/40 to-transparent" />

          <div className="space-y-8">
            {STAGES.map((s, i) => (
              <div
                key={s.phase}
                className={
                  "relative flex flex-col md:flex-row gap-6 " +
                  (i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse")
                }
              >
                <div className="flex-1 md:max-w-[44%]">
                  <div className="card p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs text-[color:var(--gold)]">
                        {s.phase}
                      </span>
                      <h3 className="serif text-xl">{s.name}</h3>
                    </div>
                    <div className="font-mono text-[11px] text-[color:var(--muted)] uppercase tracking-[0.15em] mb-3">
                      {s.actor}
                    </div>
                    <p className="text-sm text-[color:var(--marble)]/80 leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </div>
                <div className="absolute left-6 md:left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-[color:var(--gold)] ring-4 ring-[color:var(--ink)]" />
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-3 border border-[color:var(--line)] rounded-full font-mono text-xs text-[color:var(--muted)]">
            <span className="w-2 h-2 rounded-full bg-[color:var(--gold)] animate-pulse" />
            LiveOps insights → fed back to Muse → Next concept (RLHF loop)
          </div>
        </div>
      </div>
    </section>
  );
}
