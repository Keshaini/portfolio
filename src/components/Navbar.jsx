import { useState, useEffect } from "react";

const links = ["About", "Skills", "Projects", "Education", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F0F0F]/90 backdrop-blur-md border-b border-[#2A2A2A]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-display font-700 text-accent text-lg tracking-tight">
          PORTFOLIO<span className="text-soft"></span>
        </span>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-sm text-muted hover:text-soft transition-colors font-body"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-muted hover:text-soft"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1">
            <span className={`block h-px w-5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-px w-5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#161616] border-t border-[#2A2A2A] px-6 pb-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm text-muted hover:text-soft border-b border-[#2A2A2A] last:border-0"
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}