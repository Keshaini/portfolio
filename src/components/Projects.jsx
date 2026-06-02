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
              className="proj-card group bg-[#161616] border border-[#2A2A2A] rounded-2xl p-6 hover:border-[#3A3A3A] transition-all duration-300 cursor-pointer"
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
                <svg
                  className="w-4 h-4 text-muted group-hover:text-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>

              <h3 className="font-display text-base font-600 text-soft mb-2 leading-snug">
                {p.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-5">{p.description}</p>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded bg-[#222] text-muted border border-[#2A2A2A] font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}