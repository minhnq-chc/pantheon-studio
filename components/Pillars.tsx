const PILLARS = [
  {
    n: "I",
    title: "Multi-Agent, Not Multi-Prompt",
    body: "Each agent owns a domain — narrative, code, ads, LiveOps. They debate, peer-review, and arbitrate through Zeus. No single megaprompt; collaboration emerges from clean boundaries.",
  },
  {
    n: "II",
    title: "Long-Chain Reasoning by Default",
    body: "Decisions trace through ingestion → debate → compliance → execution → audit. Every game ship is the output of hundreds of reasoning steps recorded as an auditable log.",
  },
  {
    n: "III",
    title: "Economics That Justify the Tokens",
    body: "A live game on Steam earns continuously while LiveOps agents tune retention. Token spend is a unit cost against revenue, not a research budget.",
  },
];

export default function Pillars() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="grid md:grid-cols-3 gap-6">
          {PILLARS.map((p) => (
            <div key={p.n} className="card p-8 relative overflow-hidden">
              <div className="absolute -top-4 -right-2 serif text-[8rem] leading-none text-[color:var(--gold)]/8 select-none pointer-events-none">
                {p.n}
              </div>
              <div className="relative">
                <div className="font-mono text-xs text-[color:var(--gold)] tracking-[0.2em] uppercase">
                  Pillar {p.n}
                </div>
                <h3 className="serif text-2xl mt-3 mb-4 leading-tight">
                  {p.title}
                </h3>
                <p className="text-sm text-[color:var(--muted)] leading-relaxed">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
