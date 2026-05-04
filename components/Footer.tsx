export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)] mt-12">
      <div className="container-x py-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <div>
          <div className="serif text-2xl gold-text">Pantheon</div>
          <div className="text-xs font-mono text-[color:var(--muted)] uppercase tracking-[0.2em] mt-1">
            Autonomous AI Game Studio Operating System
          </div>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[color:var(--muted)]">
          <a href="#agents" className="hover:text-[color:var(--gold-soft)]">Agents</a>
          <a href="#loop" className="hover:text-[color:var(--gold-soft)]">Loop</a>
          <a href="#economics" className="hover:text-[color:var(--gold-soft)]">Economics</a>
          <a href="#roadmap" className="hover:text-[color:var(--gold-soft)]">Roadmap</a>
          <a
            href="https://github.com/minhnq-chc/pantheon-studio"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[color:var(--gold-soft)]"
          >
            GitHub
          </a>
        </div>
        <div className="text-xs font-mono text-[color:var(--muted)]">
          © 2026 · Built solo from Hanoi · MIT
        </div>
      </div>
    </footer>
  );
}
