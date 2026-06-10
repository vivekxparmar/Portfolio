import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiences } from "../../data/experience";
import { GiEyeTarget } from "react-icons/gi";
import { GiBossKey } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { SiTarget } from "react-icons/si";
import { BsStack } from "react-icons/bs";

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" className="relative py-10 overflow-hidden">
      {/* bg glow */}
      <div
        className="absolute top-1/2 right-0 w-96 h-96 pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.5) 0%, transparent 70%)",
          filter: "blur(80px)",
          transform: "translateY(-50%)",
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
            // 03. experience
          </p>
          <div className="flex items-end gap-4">
            <h2
              className="text-4xl sm:text-5xl font-bold text-white"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              Battle Log
            </h2>
            <div className="h-px flex-1 max-w-xs bg-linear-to-r from-indigo-500/50 to-transparent mb-3" />
          </div>
          <p className="text-slate-400 text-sm mt-3 max-w-lg">
            Real-world missions completed. Every line of code shipped in
            production.
          </p>
        </motion.div>

        {/* Experience cards */}
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="mb-8"
          >
            <div
              className="glass rounded-2xl p-7 sm:p-10 relative overflow-hidden group transition-all duration-500"
              style={{ border: `1px solid ${exp.color}25` }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  exp.color + "50";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  `0 0 40px ${exp.color}15`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  exp.color + "25";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Kanji watermark */}
              <span
                className="absolute -right-6 -bottom-4 text-[120px] font-bold pointer-events-none select-none"
                style={{
                  fontFamily: "serif",
                  color: exp.color,
                  opacity: 0.04,
                  lineHeight: 1,
                }}
              >
                戦
              </span>

              {/* Animated glow blob */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top right, ${exp.color}10 0%, transparent 60%)`,
                }}
              />

              {/* Header row */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  {/* Rank badge */}
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="px-3 py-1 rounded-lg text-xs font-bold flex items-center justify-center gap-2"
                      style={{
                        background: `${exp.color}20`,
                        border: `1px solid ${exp.color}50`,
                        color: exp.color,
                        fontFamily: "Rajdhani, sans-serif",
                        letterSpacing: "0.1em",
                        boxShadow: `0 0 12px ${exp.color}25`,
                      }}
                    >
                      <GiBossKey /> {exp.rank}
                    </span>
                    <span
                      className="px-3 py-1 rounded-lg text-xs"
                      style={{
                        background: "rgba(99,102,241,0.1)",
                        border: "1px solid rgba(99,102,241,0.2)",
                        color: "#94a3b8",
                        fontFamily: "JetBrains Mono, monospace",
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>

                  <h3
                    className="text-2xl sm:text-3xl font-bold text-white mb-1"
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span
                      style={{ color: exp.color }}
                      className="font-semibold"
                    >
                      {exp.company}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-500">{exp.location}</span>
                  </div>
                </div>

                {/* Duration badge */}
                <div
                  className="px-4 py-2 rounded-xl text-xs shrink-0 flex items-center justify-center gap-4"
                  style={{
                    background: "rgba(15,15,35,0.8)",
                    border: "1px solid rgba(99,102,241,0.2)",
                    color: "#94a3b8",
                    fontFamily: "JetBrains Mono, monospace",
                  }}
                >
                  <SlCalender />
                  {exp.duration}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-3xl">
                {exp.description}
              </p>

              {/* Highlights */}
              <div className="mb-7">
                <p
                  className="text-xs tracking-widest uppercase mb-3 flex items-center gap-4"
                  style={{
                    color: exp.color,
                    fontFamily: "JetBrains Mono, monospace",
                  }}
                >
                  <SiTarget /> Mission Objectives
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {exp.highlights.map((h, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + idx * 0.07 }}
                      className="flex items-start gap-2.5 text-sm text-slate-300"
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{
                          background: exp.color,
                          boxShadow: `0 0 6px ${exp.color}`,
                        }}
                      />
                      {h}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Tech stack pills */}
              <div>
                <p
                  className="text-xs tracking-widest uppercase mb-3 flex items-center gap-4"
                  style={{
                    color: exp.color,
                    fontFamily: "JetBrains Mono, monospace",
                  }}
                >
                  <BsStack /> Stack Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-medium"
                      style={{
                        background: `${exp.color}12`,
                        border: `1px solid ${exp.color}30`,
                        color: exp.color,
                        fontFamily: "JetBrains Mono, monospace",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Empty state — future roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="glass rounded-2xl p-6 border border-dashed border-indigo-500/25 flex flex-col gap-4"
        >
          {/* Top row - Icon and Title */}
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-xl"
              style={{
                background: "rgba(99,102,241,0.1)",
                border: "1px solid rgba(99,102,241,0.2)",
              }}
            >
              <GiEyeTarget />
            </div>
            <p
              className="text-white font-semibold text-sm"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              Next Mission - Unlocking Soon
            </p>
          </div>

          {/* Middle - Description */}
          <p
            className="text-slate-500 text-xs leading-relaxed"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            Actively seeking full-time frontend / full-stack roles · Open to in
            person, remote & hybrid
          </p>

          {/* Bottom - Status */}
          <div className="flex justify-start">
            <span
              className="flex items-center gap-1.5 text-xs text-green-400 px-3 py-1.5 rounded-lg w-fit"
              style={{
                background: "rgba(74,222,128,0.1)",
                border: "1px solid rgba(74,222,128,0.2)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
              Available
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
