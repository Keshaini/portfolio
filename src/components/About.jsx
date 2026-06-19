import { useEffect, useRef } from "react";

export default function About() {
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
    <section id="about-details" className="py-24 px-6 max-w-5xl mx-auto">
      <div ref={ref} className="section-reveal">
        <div className="mb-12">
          <span className="font-mono text-xs text-accent tracking-widest uppercase">About</span>
          <h2 className="font-display text-3xl md:text-4xl font-700 text-soft mt-2">
            Get to Know Me
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Bio */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted leading-relaxed">
              I'm a third-year IT undergraduate at SLIIT (Sri Lanka Institute of Information
              Technology), specializing in Information Technology. Over the past few years I've
              built a strong foundation across full-stack web development, mobile app development,
              and database systems — working on projects ranging from campus operations platforms
              to healthcare tracking applications.
            </p>
            <p className="text-muted leading-relaxed">
              My core interest lies in full-stack development, where I enjoy connecting frontend
              experiences with solid backend architecture and well-structured databases. I'm
              currently expanding my skills further by learning Laravel and exploring data
              engineering tools and exploring AI/ML technologies.
            </p>

            {/* Quick facts grid */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {[
                { label: "Based in", value: "Colombo, Sri Lanka" },
                { label: "University", value: "SLIIT" },
                { label: "Focus", value: "Full-Stack Development" },
                { label: "Status", value: "Open to Internships" },
              ].map((f) => (
                <div key={f.label} className="bg-[#161616] border border-[#2A2A2A] rounded-xl p-3">
                  <p className="text-xs text-muted font-mono uppercase tracking-wide">{f.label}</p>
                  <p className="text-sm text-soft mt-1 font-body">{f.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Currently learning / focus card */}
          <div className="bg-[#161616] border border-[#2A2A2A] rounded-2xl p-6 h-fit">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <p className="text-xs text-muted uppercase tracking-widest font-mono mb-4">
              Currently Learning
            </p>
            <ul className="space-y-3">
              {[
                "Laravel — full-stack PHP framework",
                "Data Structures & Algorithms",
                "Data Engineering tools",
                "AI/ML technologies",
                "Software Architecture patterns",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted">
                  <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}