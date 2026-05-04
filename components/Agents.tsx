import { AGENTS, BUSINESS, PRODUCTION, type Agent } from "@/lib/agents";

const LOAD_LABEL: Record<Agent["tokenLoad"], string> = {
  heavy: "Heavy",
  "very-heavy": "Very Heavy",
  extreme: "Extreme",
};

const LOAD_BARS: Record<Agent["tokenLoad"], number> = {
  heavy: 2,
  "very-heavy": 3,
  extreme: 4,
};

function Card({ agent }: { agent: Agent }) {
  return (
    <div className="card p-6 relative h-full flex flex-col">
      <div className="flex items-start justify-between">
        <div>
          <div className="font-mono text-[10px] text-[color:var(--muted)] uppercase tracking-[0.2em]">
            {agent.wing === "production" ? "Production Wing" : "Business Wing"}
          </div>
          <div className="serif text-2xl mt-1 gold-text font-semibold">
            {agent.codename}
          </div>
          <div className="text-sm text-[color:var(--marble)] mt-0.5">
            {agent.role}
          </div>
        </div>
        <span className="serif text-3xl text-[color:var(--gold)]/70 leading-none">
          {agent.glyph}
        </span>
      </div>

      <p className="text-sm text-[color:var(--muted)] mt-4 leading-relaxed flex-1">
        {agent.charter}
      </p>

      <div className="mt-4 pt-4 border-t border-[color:var(--line)]">
        <div className="text-[10px] uppercase font-mono tracking-[0.2em] text-[color:var(--muted)]">
          Reasoning Signature
        </div>
        <p className="text-xs text-[color:var(--marble)]/80 mt-1.5 leading-relaxed">
          {agent.signature}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[color:var(--muted)]">
          Token Load
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[color:var(--gold-soft)] font-mono">
            {LOAD_LABEL[agent.tokenLoad]}
          </span>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className={
                  "w-1 h-3 rounded-sm " +
                  (i <= LOAD_BARS[agent.tokenLoad]
                    ? "bg-[color:var(--gold)]"
                    : "bg-[color:var(--line)]")
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Wing({ title, subtitle, agents }: { title: string; subtitle: string; agents: Agent[] }) {
  return (
    <div className="mb-16">
      <div className="flex items-end justify-between mb-8 flex-wrap gap-2">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--gold)]">
            {subtitle}
          </div>
          <h3 className="serif text-3xl md:text-4xl mt-1">{title}</h3>
        </div>
        <span className="text-sm text-[color:var(--muted)] font-mono">
          {agents.length} agents
        </span>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {agents.map((a) => (
          <Card key={a.codename} agent={a} />
        ))}
      </div>
    </div>
  );
}

export default function Agents() {
  return (
    <section id="agents" className="section">
      <div className="container-x">
        <div className="text-center mb-16">
          <span className="tag">The Pantheon</span>
          <h2 className="serif mt-6 text-4xl md:text-6xl tracking-tight">
            Fourteen agents, two wings,
            <br />
            <span className="gold-text">one autonomous studio.</span>
          </h2>
          <p className="text-[color:var(--muted)] mt-6 max-w-2xl mx-auto">
            Production builds the games. Business runs the company. Zeus
            arbitrates between them every cycle, and feedback flows back into
            Muse for the next title.
          </p>
        </div>

        <Wing
          title="Production Wing"
          subtitle="They make the game."
          agents={PRODUCTION}
        />
        <Wing
          title="Business Wing"
          subtitle="They run the studio."
          agents={BUSINESS}
        />

        <div className="text-center text-xs font-mono text-[color:var(--muted)]">
          {AGENTS.length} agents · 2 wings · 1 founder ·{" "}
          <span className="text-[color:var(--gold-soft)]">orchestrated by Zeus</span>
        </div>
      </div>
    </section>
  );
}
