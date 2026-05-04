const ROWS = [
  { activity: "Build pipeline (1 game / 2 months)", per: "300–400M tokens", monthly: "150–200M" },
  { activity: "LiveOps across portfolio (3 live titles)", per: "1.5M / game / day", monthly: "135M" },
  { activity: "Marketing creative generation", per: "500K / day", monthly: "15M" },
  { activity: "Community ops (Discord + Steam, 24/7)", per: "800K / day", monthly: "24M" },
  { activity: "Analytics & LiveOps reasoning", per: "1.2M / day", monthly: "36M" },
  { activity: "Self-improvement loop (RLHF, prompt tuning)", per: "—", monthly: "20M" },
];

const TOTAL = "≈ 430M tokens / month";

export default function TokenEconomics() {
  return (
    <section id="economics" className="section">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="tag">Token Economics</span>
            <h2 className="serif mt-6 text-4xl md:text-5xl tracking-tight leading-[1.1]">
              Why this needs the{" "}
              <span className="gold-text">Max plan.</span>
            </h2>
            <p className="text-[color:var(--muted)] mt-6 leading-relaxed">
              A single agent can run on a Pro plan. Pantheon is not a single
              agent — it is a studio of fourteen working in parallel, each
              owning a domain that demands long-context reasoning. The math is
              sober, not aspirational.
            </p>
            <p className="text-[color:var(--muted)] mt-4 leading-relaxed">
              Below is the steady-state monthly footprint at 3 live games and 1
              in production. Token spend scales linearly with portfolio size —
              the moat compounds as titles accumulate.
            </p>

            <div className="mt-8 p-6 card">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                Steady-state monthly burn
              </div>
              <div className="serif text-4xl mt-2 gold-text font-semibold">
                {TOTAL}
              </div>
              <div className="text-xs text-[color:var(--muted)] mt-2 font-mono">
                ~3.7 months to consume a 1.6B token Max grant
              </div>
            </div>
          </div>

          <div>
            <div className="card overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[color:var(--line)] bg-[color:var(--ink-2)]">
                    <th className="text-left py-3 px-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
                      Activity
                    </th>
                    <th className="text-right py-3 px-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
                      Rate
                    </th>
                    <th className="text-right py-3 px-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
                      Monthly
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((r) => (
                    <tr
                      key={r.activity}
                      className="border-b border-[color:var(--line)]/50 last:border-0"
                    >
                      <td className="py-4 px-5 text-[color:var(--marble)]/90">
                        {r.activity}
                      </td>
                      <td className="py-4 px-5 text-right text-[color:var(--muted)] font-mono text-xs">
                        {r.per}
                      </td>
                      <td className="py-4 px-5 text-right text-[color:var(--gold-soft)] font-mono">
                        {r.monthly}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-[color:var(--ink-2)]">
                    <td className="py-4 px-5 serif text-base">Total</td>
                    <td className="py-4 px-5"></td>
                    <td className="py-4 px-5 text-right serif gold-text text-lg font-semibold">
                      ≈ 430M
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[color:var(--muted)] mt-4 font-mono">
              All figures are conservative steady-state estimates. Build months
              spike to 600M+ tokens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
