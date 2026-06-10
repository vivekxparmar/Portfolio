import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const traits = [
  {
    kanji: "速",
    romaji: "HAYA",
    meaning: "Fast Learner",
    desc: "I pick up new frameworks and tools quickly — AI-assisted, always evolving.",
    color: "#6366f1",
  },
  {
    kanji: "綺",
    romaji: "KI",
    meaning: "Clean Code",
    desc: "Reusable components, typed with TypeScript, structured for scale.",
    color: "#8b5cf6",
  },
  {
    kanji: "戦",
    romaji: "SEN",
    meaning: "Battle-Tested",
    desc: "Built a real-time PMS used in a production internship environment.",
    color: "#a78bfa",
  },
  {
    kanji: "心",
    romaji: "KOKORO",
    meaning: "Detail Obsessed",
    desc: "Every pixel, every animation, every interaction — intentional.",
    color: "#c4b5fd",
  },
];

const timeline = [
  {
    year: "2022",
    event: "Started B.Tech IT",
    detail: "G H Patel College of Engineering & Technology",
  },
  {
    year: "2024",
    event: "Built First Full-Stack App",
    detail: "E-Commerce site with HTML, CSS, JS & PHP",
  },
  {
    year: "2025",
    event: "Mastered React Ecosystem",
    detail: "React 19, TypeScript, Tailwind, ShadCN, Zustand",
  },
  {
    year: "2026",
    event: "React.js Internship",
    detail: "Tech Elecon Pvt. Ltd - Built real-time Project Management System",
  },
  {
    year: "NOW",
    event: "Open to Opportunities",
    detail: "Seeking frontend / full-stack roles at product companies",
  },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="about" className="relative py-10 overflow-hidden">
      {/* bg accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div
        className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12"
        ref={ref}
      >
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p
            className="text-indigo-400 text-xs tracking-[0.3em] uppercase mb-2"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            // 01. about_me
          </p>
          <div className="flex items-end gap-4">
            <h2
              className="text-4xl sm:text-5xl font-bold text-white"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              Who Am I?
            </h2>
            <div className="h-px flex-1 max-w-xs bg-linear-to-r from-indigo-500/50 to-transparent mb-3" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT — Bio + timeline */}
          <div className="flex flex-col gap-10">
            {/* Bio card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="glass rounded-2xl p-6 sm:p-8 relative overflow-hidden"
            >
              {/* Kanji watermark */}
              <span
                className="absolute -right-4 -top-4 text-8xl font-bold pointer-events-none select-none"
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                  color: "rgba(99,102,241,0.07)",
                }}
              >
                自己
              </span>

              <p className="text-slate-300 text-base leading-relaxed mb-4">
                I'm a{" "}
                <span className="text-indigo-400 font-semibold">
                  B.Tech IT graduate
                </span>{" "}
                from GCET with a{" "}
                <span className="text-indigo-400 font-semibold">9.09 CGPA</span>
                , and a frontend developer who genuinely cares about the
                experience behind every interface.
              </p>
              <p className="text-slate-400 text-base leading-relaxed mb-4">
                During my{" "}
                <span className="text-indigo-400 font-semibold">
                  4-month internship
                </span>{" "}
                at Tech Elecon, I shipped a full-stack{" "}
                <span className="text-indigo-400 font-semibold">
                  Project Management System
                </span>{" "}
                — real-time chat, sprint planning, role-based dashboards, Google
                OAuth — the whole thing.
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                Off the screen? I recharge with{" "}
                <span className="text-violet-400 font-semibold">anime</span> —
                Solo Leveling, JJK, AOT. The same obsession I have for great
                storytelling, I bring to building great UIs.
              </p>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <p
                className="text-indigo-400 text-xs tracking-widest uppercase mb-5"
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                — Origin Story
              </p>
              <div className="flex flex-col gap-0">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex gap-4 group"
                  >
                    {/* Line + dot */}
                    <div className="flex flex-col items-center">
                      <div
                        className="w-2.5 h-2.5 rounded-full mt-1 shrink-0 transition-all duration-300 group-hover:scale-150"
                        style={{
                          background:
                            item.year === "NOW"
                              ? "#4ade80"
                              : "linear-gradient(135deg, #6366f1, #8b5cf6)",
                          boxShadow:
                            item.year === "NOW"
                              ? "0 0 10px rgba(74,222,128,0.6)"
                              : "0 0 8px rgba(99,102,241,0.5)",
                        }}
                      />
                      {i < timeline.length - 1 && (
                        <div
                          className="w-px flex-1 bg-indigo-500/20 my-1"
                          style={{ minHeight: "28px" }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pb-6">
                      <div className="flex items-center gap-3 mb-0.5">
                        <span
                          className="text-xs font-bold text-indigo-400 tracking-widest"
                          style={{ fontFamily: "JetBrains Mono, monospace" }}
                        >
                          {item.year}
                        </span>
                        <span
                          className="text-white font-semibold text-sm"
                          style={{ fontFamily: "Rajdhani, sans-serif" }}
                        >
                          {item.event}
                        </span>
                      </div>
                      <p className="text-slate-500 text-xs">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Trait cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {traits.map((trait, i) => (
              <motion.div
                key={trait.kanji}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.12 }}
                className="glass rounded-2xl p-6 group cursor-default relative overflow-hidden transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Big kanji bg */}
                <span
                  className="absolute right-3 bottom-2 text-6xl font-bold pointer-events-none select-none transition-all duration-500 group-hover:opacity-20"
                  style={{
                    fontFamily: "serif",
                    color: trait.color,
                    opacity: 0.08,
                  }}
                >
                  {trait.kanji}
                </span>

                {/* Kanji badge */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-lg font-bold"
                  style={{
                    background: `${trait.color}20`,
                    border: `1px solid ${trait.color}40`,
                    color: trait.color,
                    fontFamily: "serif",
                    boxShadow: `0 0 16px ${trait.color}20`,
                  }}
                >
                  {trait.kanji}
                </div>

                <p
                  className="text-xs tracking-widest uppercase mb-1"
                  style={{
                    color: trait.color,
                    fontFamily: "JetBrains Mono, monospace",
                  }}
                >
                  {trait.romaji}
                </p>
                <h3
                  className="text-white font-bold text-base mb-2"
                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                >
                  {trait.meaning}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {trait.desc}
                </p>
              </motion.div>
            ))}

            {/* Fun fact card — full width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.65 }}
              className="sm:col-span-2 glass rounded-2xl p-5 border border-indigo-500/20 relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                }}
              />
              <p
                className="text-xs text-indigo-400 tracking-widest uppercase mb-2"
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                fun_fact.exe
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                I built a{" "}
                <span className="text-indigo-400 font-semibold">
                  real-time collaborative PMS
                </span>{" "}
                in 4 months during my internship — with Socket.IO, role-based
                routing, Google OAuth, and a full ShadCN component library. Solo
                Leveling taught me: you level up by doing hard things.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
