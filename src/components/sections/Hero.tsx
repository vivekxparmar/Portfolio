import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import photo from "../../assets/photo-1.jpeg";
import resume from "../../assets/resume.pdf";

const stats = [
  { label: "CGPA", value: "9.09", suffix: "/10" },
  { label: "Experience", value: "6", suffix: " mo" },
  { label: "Projects", value: "5", suffix: "+" },
  { label: "Skills", value: "15", suffix: "+" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/vivekxparmar",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vivek-parmar-047009261/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:parmarvivek04102004@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="w-5 h-5"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-10 px-4 md:px-6 lg:px-8"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Anime corner accent lines */}
      <div className="absolute top-28 left-8 w-16 h-px bg-linear-to-r from-indigo-500 to-transparent opacity-60 hidden sm:block" />
      <div className="absolute top-28 left-8 w-px h-16 bg-linear-to-b from-indigo-500 to-transparent opacity-60 hidden sm:block" />
      <div className="absolute bottom-16 right-8 w-16 h-px bg-linear-to-l from-indigo-500 to-transparent opacity-60 hidden sm:block" />
      <div className="absolute bottom-16 right-8 w-px h-16 bg-linear-to-t from-indigo-500 to-transparent opacity-60 hidden sm:block" />

      <div className="relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-32 items-center justify-between px-4 sm:px-6">
        {/* LEFT — Text content */}
        <div className="flex flex-col gap-5 md:gap-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 w-fit"
          >
            <span
              className="glass px-4 py-1.5 rounded-full text-xs text-indigo-300 flex items-center gap-2"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2"
          >
            <p
              className="text-indigo-400 text-sm mb-2 tracking-widest uppercase"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              こんにちは — Hello, I'm
            </p>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight sm:leading-none"
              style={{
                fontFamily: "Rajdhani, sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              Vivek
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-violet-400 to-indigo-600 glow-text">
                Parmar
              </span>
            </h1>
          </motion.div>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 flex items-center gap-2 py-1"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            <span className="text-indigo-400">{">"}</span>
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React Specialist",
                2000,
                "UI/UX Enthusiast",
                2000,
                "TypeScript Dev",
                2000,
                "Anime Fan",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md py-2"
          >
            From concept to component - I bring designs to life with{" "}
            <span className="text-indigo-400 font-semibold">React</span>,{" "}
            <span className="text-indigo-400 font-semibold">TypeScript</span>,
            and{" "}
            <span className="text-indigo-400 font-semibold">Tailwind CSS</span>.
            Clean code, sharp UI, zero compromise.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-300 glow hover:scale-105 inline-flex items-center justify-center min-w-35"
              style={{
                fontFamily: "Rajdhani, sans-serif",
                letterSpacing: "0.05em",
              }}
            >
              View My Work
            </a>
            <a
              href={resume}
              target="_blank"
              className="px-6 py-3 rounded-xl glass border border-indigo-500/40 text-indigo-300 font-semibold text-sm hover:border-indigo-400 hover:text-white transition-all duration-300 hover:scale-105 inline-flex items-center justify-center min-w-35"
              style={{
                fontFamily: "Rajdhani, sans-serif",
                letterSpacing: "0.05em",
              }}
            >
              Download Resume
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex items-center gap-5 pt-6"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="text-slate-500 hover:text-indigo-400 transition-all duration-300 hover:scale-110 p-2"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Photo + Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center gap-8"
        >
          {/* Photo card */}
          <Tilt
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            glareEnable
            glareMaxOpacity={0.15}
            glareColor="#6366f1"
            className="w-full max-w-xs"
          >
            <div className="relative glass rounded-2xl p-1 glow">
              {/* Anime rank badge */}
              <div
                className="absolute -top-3 -right-3 z-10 px-3! py-1.5 rounded-lg text-xs font-bold text-white"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  fontFamily: "Rajdhani, sans-serif",
                  boxShadow: "0 0 16px rgba(99,102,241,0.6)",
                }}
              >
                S-RANK
              </div>

              {/* Replace src with your actual photo path */}
              <img
                src={photo}
                alt="Vivek Parmar"
                className="w-full rounded-xl object-cover aspect-4/5"
                style={{ filter: "brightness(0.95) contrast(1.05)" }}
                onError={(e) => {
                  // Fallback avatar if photo not found
                  const t = e.currentTarget;
                  t.style.display = "none";
                  const parent = t.parentElement!;
                  const fallback = document.createElement("div");
                  fallback.className =
                    "w-full rounded-xl aspect-[4/5] flex items-center justify-center";
                  fallback.style.background =
                    "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.2))";
                  fallback.innerHTML = `<span style="font-size:5rem;font-family:Rajdhani,sans-serif;color:#6366f1;font-weight:700">VP</span>`;
                  parent.appendChild(fallback);
                }}
              />

              {/* Scan line on photo */}
              <div
                className="absolute inset-0 rounded-xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 60%, rgba(99,102,241,0.15) 100%)",
                }}
              />
            </div>
          </Tilt>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="glass rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300"
              >
                <div
                  className="text-2xl font-bold text-white mb-1"
                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                >
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-violet-400">
                    {stat.value}
                  </span>
                  <span className="text-slate-400 text-sm ml-1">
                    {stat.suffix}
                  </span>
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
