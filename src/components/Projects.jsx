import { useEffect, useRef } from "react";
import { projects } from "../data/portfolio";

export default function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) ref.current?.classList.add("visible"); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <div ref={ref} className="section-reveal">
        <div className="mb-12">
          <span className="font-mono text-xs text-accent tracking-widest uppercase">03 / Projects</span>
          <h2 className="font-display text-3xl md:text-4xl font-700 text-soft mt-2">
            Featured Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="proj-card group bg-[#161616] border border-[#2A2A2A] rounded-2xl p-6 hover:border-[#3A3A3A] transition-all duration-300"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <span
                  className="text-xs font-mono px-2.5 py-1 rounded-full border"
                  style={{
                    color: p.color,
                    borderColor: `${p.color}30`,
                    backgroundColor: `${p.color}08`,
                  }}
                >
                  {p.category}
                </span>
              </div>

              <h3 className="font-display text-base font-600 text-soft mb-2 leading-snug">
                {p.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-5">{p.description}</p>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded bg-[#222] text-muted border border-[#2A2A2A] font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* View code button */}
              {p.repo ? (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-soft hover:text-accent transition-colors font-body border-t border-[#2A2A2A] pt-4 w-full"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Code
                  <svg className="w-3.5 h-3.5 ml-auto group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              ) : (
                <div className="flex items-center gap-2 text-sm text-muted/50 font-body border-t border-[#2A2A2A] pt-4 w-full">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  Repo coming soon
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}