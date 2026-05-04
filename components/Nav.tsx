export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[color:var(--ink)]/70 border-b border-[color:var(--line)]">
      <div className="container-x flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="text-2xl gold-text serif font-semibold">⚡</span>
          <span className="serif text-lg font-semibold tracking-wide">
            PANTHEON
          </span>
          <span className="hidden md:inline text-xs text-[color:var(--muted)] font-mono ml-2">
            v0.1 · alpha
          </span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-[color:var(--muted)]">
          <a href="#agents" className="hover:text-[color:var(--gold-soft)] transition">
            The Pantheon
          </a>
          <a href="#loop" className="hover:text-[color:var(--gold-soft)] transition">
            Long-Chain Loop
          </a>
          <a href="#economics" className="hover:text-[color:var(--gold-soft)] transition">
            Token Economics
          </a>
          <a href="#roadmap" className="hover:text-[color:var(--gold-soft)] transition">
            Roadmap
          </a>
          <a
            href="https://github.com/minhnq-chc/pantheon-studio"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 border border-[color:var(--line)] rounded-md hover:border-[color:var(--gold)] hover:text-[color:var(--gold-soft)] transition"
          >
            GitHub →
          </a>
        </div>
      </div>
    </nav>
  );
}
