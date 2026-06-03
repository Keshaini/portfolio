import { useEffect, useRef } from "react";
import { skills } from "../data/portfolio";

const categories = ["All", "Frontend", "Backend", "Mobile", "Database", "Other"];
const catColors = {
  Frontend: "text-blue-400 border-blue-400/30 bg-blue-400/5",
  Backend: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
  Mobile: "text-purple-400 border-purple-400/30 bg-purple-400/5",
  Database: "text-amber-400 border-amber-400/30 bg-amber-400/5",
  Other: "text-rose-400 border-rose-400/30 bg-rose-400/5",
};

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) ref.current?.classList.add("visible"); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const grouped = categories.slice(1).map((cat) => ({
    cat,
    items: skills.filter((s) => s.category === cat),
  }));

  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <div ref={ref} className="section-reveal">
        <div className="mb-12">
          <span className="font-mono text-xs text-accent tracking-widest uppercase">Skills</span>
          <h2 className="font-display text-3xl md:text-4xl font-700 text-soft mt-2">
            Technical Stack
          </h2>
        </div>

        <div className="space-y-8">
          {grouped.map(({ cat, items }) =>
            items.length === 0 ? null : (
              <div key={cat}>
                <p className="text-xs text-muted uppercase tracking-widest font-mono mb-3">{cat}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s.name}
                      className={`skill-pill px-3 py-1.5 rounded-lg border text-sm font-body transition-transform duration-200 ${catColors[s.category]}`}
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}