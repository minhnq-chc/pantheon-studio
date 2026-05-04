const PHASES = [
  {
    quarter: "Weeks 1–2",
    title: "Skeleton",
    items: [
      "Zeus orchestrator core (state machine, agent registry)",
      "Postgres + pgvector for shared memory",
      "Audit log pipeline (every cross-agent message persisted)",
    ],
  },
  {
    quarter: "Weeks 3–4",
    title: "Production Wing v1",
    items: [
      "Muse, Architect, Bard online (text-only loop)",
      "First end-to-end: brief → GDD → narrative outline",
      "Peer-review protocol shipped",
    ],
  },
  {
    quarter: "Weeks 5–6",
    title: "Multi-modal Bridges",
    items: [
      "Iris (SDXL/Flux art bridge)",
      "Orpheus (Suno + ElevenLabs audio bridge)",
      "Asset library + style consistency checker",
    ],
  },
  {
    quarter: "Weeks 7–9",
    title: "Game #1 — Hyper-casual",
    items: [
      "Hephaestus codes a 5K-LOC mobile loop",
      "Argus auto-playtest harness",
      "Soft-launch on itch.io as low-stakes proof",
    ],
  },
  {
    quarter: "Weeks 10–11",
    title: "Localize & Ship",
    items: [
      "Babel (12 languages) + cultural QA",
      "Hermes + Hestia minimum-viable run",
      "Launch postmortem feeds back into Muse",
    ],
  },
  {
    quarter: "Weeks 12+",
    title: "Game #2 — Steam debut",
    items: [
      "Full Production + Business loop",
      "Chronos + Athena LiveOps",
      "First commercial revenue → CFO reconciliation",
    ],
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="section bg-[color:var(--ink-2)]/40">
      <div className="container-x">
        <div className="text-center mb-16">
          <span className="tag">90-Day Roadmap</span>
          <h2 className="serif mt-6 text-4xl md:text-6xl tracking-tight">
            From <span className="gold-text">scaffold</span> to{" "}
            <span className="gold-text">Steam debut.</span>
          </h2>
          <p className="text-[color:var(--muted)] mt-6 max-w-2xl mx-auto">
            A deliberate sequence: skeleton, then production wing, then
            multi-modal, then a low-stakes ship, then a real one. Each phase
            unblocks the next.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PHASES.map((p, i) => (
            <div key={p.quarter} className="card p-6 relative">
              <div className="absolute top-6 right-6 serif text-3xl text-[color:var(--gold)]/30">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--gold)]">
                {p.quarter}
              </div>
              <h3 className="serif text-2xl mt-2 mb-4">{p.title}</h3>
              <ul className="space-y-2 text-sm text-[color:var(--marble)]/80">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="text-[color:var(--gold)] mt-1 leading-none">
                      ◆
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
