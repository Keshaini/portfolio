import { useEffect, useRef } from "react";
import { education, activities, certifications } from "../data/portfolio";

export default function Education() {
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
    <section id="education" className="py-24 px-6 max-w-5xl mx-auto">
      <div ref={ref} className="section-reveal">
        <div className="mb-12">
          <span className="font-mono text-xs text-accent tracking-widest uppercase">04 / Education</span>
          <h2 className="font-display text-3xl md:text-4xl font-700 text-soft mt-2">
            Background
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Education */}
          {education.map((e) => (
            <div key={e.degree} className="md:col-span-1 bg-[#161616] border border-[#2A2A2A] rounded-2xl p-6">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-1.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="font-display font-600 text-soft text-sm leading-snug mb-1">{e.degree}</h3>
              <p className="text-xs text-accent mb-2">{e.specialization}</p>
              <p className="text-xs text-muted">{e.institution}</p>
              <span className="inline-block mt-3 text-xs font-mono px-2 py-0.5 rounded border border-[#2A2A2A] text-muted">
                {e.status}
              </span>
            </div>
          ))}

          {/* Activities */}
          <div className="md:col-span-1 bg-[#161616] border border-[#2A2A2A] rounded-2xl p-6">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
              <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
              </svg>
            </div>
            <p className="text-xs text-muted uppercase tracking-widest font-mono mb-4">Activities</p>
            {activities.map((a) => (
              <div key={a.role}>
                <h3 className="font-display font-600 text-soft text-sm">{a.role}</h3>
                <p className="text-xs text-purple-400 mt-1">{a.organization}</p>
                <p className="text-xs text-muted mt-1">{a.detail}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="md:col-span-1 bg-[#161616] border border-[#2A2A2A] rounded-2xl p-6">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
              <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </div>
            <p className="text-xs text-muted uppercase tracking-widest font-mono mb-4">Certifications</p>
            {certifications.map((c) => (
              <div key={c.name} className="border border-[#2A2A2A] rounded-xl p-3 bg-[#111]">
                <p className="text-sm font-display font-500 text-soft leading-snug">{c.name}</p>
                <p className="text-xs text-amber-400 mt-1">{c.issuer}</p>
                <p className="text-xs text-muted mt-0.5">{c.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}