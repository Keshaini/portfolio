import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div className="cursor-glow" style={{ left: pos.x, top: pos.y }} />
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-primary text-soft overflow-x-hidden">
      <div className="grain" />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <div className="border-t border-[#2A2A2A]" />
        <Skills />
        <div className="border-t border-[#2A2A2A]" />
        <Projects />
        <div className="border-t border-[#2A2A2A]" />
        <Education />
        <div className="border-t border-[#2A2A2A]" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}