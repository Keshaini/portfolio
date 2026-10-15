import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => ref.current?.classList.add("visible"), 100);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-5xl mx-auto"
    >
      <div ref={ref} className="section-reveal">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2A2A2A] bg-[#161616] mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs text-muted font-mono">Open to internship opportunities</span>
        </div>

        {/* Heading */}
        <h1 className="font-display text-5xl md:text-7xl font-800 leading-none tracking-tight mb-6">
          <span className="text-muted text-3xl md:text-4xl font-500">Hi, I'm</span>
          <br />
          <span className="text-soft">Keshaini</span>
          <br />
          <span className="text-accent">Yogeswaran</span>
        </h1>
        <p className="font-display text-xl md:text-2xl text-muted font-400 mb-6">
          Full-Stack Developer & IT Undergraduate
        </p>

        <p className="text-muted text-base md:text-lg max-w-xl leading-relaxed mb-10 font-body">
          Third-year IT undergraduate at SLIIT passionate about building end-to-end web applications,
          mobile experiences, and robust backend systems. Currently seeking internship opportunities
          in full-stack development.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mb-16">
          <a
            href="#projects"
            className="px-5 py-2.5 bg-accent text-primary text-sm font-display font-600 rounded-lg hover:bg-accent/90 transition-colors"
          >
            View Projects
          </a>
          <a
            href="/CV_Keshaini_Yogeswaran.pdf"
            download="CV_Keshaini_Yogeswaran.pdf"
            className="px-5 py-2.5 bg-[#161616] border border-[#2A2A2A] text-soft text-sm font-display font-500 rounded-lg hover:border-accent hover:text-accent transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download CV
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 border border-[#2A2A2A] text-soft text-sm font-display font-500 rounded-lg hover:border-[#444] transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Stat strip */}
        <div className="flex flex-wrap gap-8 border-t border-[#2A2A2A] pt-8">
          {[
            { num: "6+", label: "Projects Built" },
            { num: "3rd", label: "Year at SLIIT" },
            { num: "10+", label: "Technologies" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-2xl font-700 text-soft">{s.num}</div>
              <div className="text-xs text-muted mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}