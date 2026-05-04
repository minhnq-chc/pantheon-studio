export default function Founder() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="card p-10 md:p-14 max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute -top-12 -right-12 serif text-[14rem] leading-none text-[color:var(--gold)]/8 select-none pointer-events-none">
            “
          </div>

          <div className="relative">
            <span className="tag">Founder Note</span>
            <h2 className="serif mt-6 text-3xl md:text-4xl leading-[1.2]">
              I already proved the loop on a single agent.
              <br />
              <span className="gold-text">Pantheon is the same idea, scaled to fourteen.</span>
            </h2>

            <div className="mt-8 space-y-4 text-[color:var(--marble)]/85 leading-relaxed">
              <p>
                I&apos;m Minh — solo builder from Vietnam. Last year I shipped an
                autonomous trading agent for XAUUSD on Claude Pro. It read live
                charts, ran SMC/ICT reasoning chains, sized positions, and
                placed orders through an MT5 bridge. It worked. It still works.
              </p>
              <p>
                Pantheon takes that pattern — multi-source ingestion → debate →
                decision → execution → audit — and applies it to a domain
                where the output is creative: indie games. Each agent is a
                miniature trading bot for its discipline.
              </p>
              <p>
                The Pro plan let me prove one agent. The Max plan would let me
                run the studio. Six titles in twelve months is the plan; the
                first one ships within ninety days.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-[color:var(--line)] flex flex-wrap gap-x-8 gap-y-3 items-center">
              <div>
                <div className="serif text-lg">Minh Nguyen</div>
                <div className="text-xs font-mono text-[color:var(--muted)] uppercase tracking-[0.2em]">
                  Solo founder · Hanoi, Vietnam
                </div>
              </div>
              <div className="flex gap-3 ml-auto">
                <a
                  href="https://github.com/minhnq-chc"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-sm border border-[color:var(--line)] rounded-md hover:border-[color:var(--gold)] hover:text-[color:var(--gold-soft)] transition"
                >
                  GitHub
                </a>
                <a
                  href="https://github.com/minhnq-chc/pantheon-studio"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-sm bg-[color:var(--gold)] text-[color:var(--ink)] rounded-md hover:bg-[color:var(--gold-soft)] transition font-medium"
                >
                  This Repo →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
