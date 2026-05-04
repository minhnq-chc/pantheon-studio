export default function Hero() {
  return (
    <section id="top" className="relative section grain overflow-hidden">
      <div className="container-x relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="tag">
            <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--gold)] animate-pulse" />
            Building in public · Seeking Mimo Max plan
          </span>

          <h1 className="serif mt-8 text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight">
            An autonomous{" "}
            <span className="gold-text">game studio</span>
            <br />
            that runs itself.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-[color:var(--muted)] max-w-2xl leading-relaxed">
            Pantheon is an operating system of{" "}
            <span className="text-[color:var(--marble)] font-medium">
              14 specialised AI agents
            </span>{" "}
            that design, build, ship, and operate indie games — 24 hours a day,
            in twelve languages, across every storefront. One founder. A whole
            studio.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#agents"
              className="px-6 py-3 rounded-lg bg-[color:var(--gold)] text-[color:var(--ink)] font-medium hover:bg-[color:var(--gold-soft)] transition"
            >
              Meet the 14 agents
            </a>
            <a
              href="https://github.com/minhnq-chc/pantheon-studio"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg border border-[color:var(--line)] hover:border-[color:var(--gold)] hover:text-[color:var(--gold-soft)] transition"
            >
              View on GitHub →
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl">
            {[
              { value: "14", label: "Agents" },
              { value: "2", label: "Wings" },
              { value: "12", label: "Languages" },
              { value: "~430M", label: "Tokens / month" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="serif text-3xl md:text-4xl font-semibold gold-text">
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)] mt-1 font-mono">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="divider-pillar mt-24" />
      </div>
    </section>
  );
}
