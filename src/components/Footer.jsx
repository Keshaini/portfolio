export default function Footer() {
  return (
    <footer className="border-t border-[#2A2A2A] py-8 px-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-mono text-xs text-muted">
        Built with React + Tailwind CSS · Deployed on Vercel
      </span>
      <span className="font-mono text-xs text-muted">
        © {new Date().getFullYear()} · All rights reserved
      </span>
    </footer>
  );
}