import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import resume from "../../assets/resume.pdf";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(15,15,35,0.55)] backdrop-blur-lg  py-4"
          : "bg-transparent py-6"
      }`}
      style={
        scrolled
          ? {
              background: "rgba(15, 15, 35, 0.55)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              // borderBottom: "1px solid rgba(99, 102, 241, 0.2)",
            }
          : {}
      }
    >
      {/* Centered container */}
      <div className="w-full flex justify-center px-4 sm:px-6">
        <div className="w-full max-w-6xl flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group shrink-0">
            <span
              className="text-xl font-bold text-white"
              style={{
                fontFamily: "Rajdhani, sans-serif",
                letterSpacing: "0.05em",
                textShadow:
                  "0 0 20px rgba(99, 102, 241, 0.8), 0 0 40px rgba(99, 102, 241, 0.4)",
              }}
            >
              VP<span className="text-indigo-400">.</span>
            </span>
            <span
              className="text-xs text-indigo-400/60 hidden sm:block"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              {"<shinobi_dev />"}
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-400 hover:text-indigo-400 transition-colors duration-200 relative group py-2"
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
            {/* Resume button */}
            <a
              href={resume}
              target="_blank"
              className="hidden md:inline-flex px-4 py-2 rounded-lg border border-indigo-500/50 text-indigo-400 text-sm hover:bg-indigo-500/10 hover:border-indigo-400 transition-all duration-300"
              style={{
                fontFamily: "Rajdhani, sans-serif",
                fontWeight: 600,
                boxShadow: scrolled
                  ? "0 0 20px rgba(99, 102, 241, 0.4)"
                  : "none",
              }}
            >
              Resume
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-indigo-500/10 transition-colors"
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-indigo-400 transition-all rounded-full ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-indigo-400 transition-all rounded-full ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-indigo-400 transition-all rounded-full ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4"
            style={{
              background: "rgba(15, 15, 35, 0.55)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderTop: "1px solid rgba(99, 102, 241, 0.2)",
            }}
          >
            <div className="flex flex-col items-center px-6 py-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-300 hover:text-indigo-400 transition-colors py-2 text-base"
                  style={{
                    fontFamily: "Rajdhani, sans-serif",
                    fontWeight: 500,
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={resume}
                target="_blank"
                className="px-6 py-2.5 rounded-lg border border-indigo-500/50 text-indigo-400 text-center hover:bg-indigo-500/10 mt-2"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
