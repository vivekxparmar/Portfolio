import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { educationData } from "../../data/experience";
import { FaGraduationCap, FaCalendarAlt, FaTrophy } from "react-icons/fa";
import { MdSchool, MdLocationOn } from "react-icons/md";
import { GiShuriken } from "react-icons/gi";

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="education"
      className="relative py-10 md:py-10 lg:py-10 overflow-hidden"
    >
      {/* bg glow */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div
        className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12"
        ref={ref}
      >
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-center"
        >
          <p
            className="text-indigo-400 text-xs tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            // 05. education
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-indigo-500/50" />
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              Training Arc
            </h2>
            <div className="h-px w-12 bg-linear-to-l from-transparent to-indigo-500/50" />
          </div>
          <p className="text-slate-400 text-sm mt-4 max-w-2xl mx-auto">
            Every shinobi has an origin. Here's where the training happened.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {educationData.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="glass rounded-2xl p-7 group relative overflow-hidden transition-all duration-500"
              style={{ border: `1px solid ${edu.color}25` }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  edu.color + "50";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  `0 0 40px ${edu.color}12`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  edu.color + "25";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* bg glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top left, ${edu.color}08 0%, transparent 60%)`,
                }}
              />

              {/* Kanji watermark */}
              <span
                className="absolute -right-4 -bottom-4 text-[120px] font-bold pointer-events-none select-none"
                style={{
                  fontFamily: "serif",
                  color: edu.color,
                  opacity: 0.05,
                  lineHeight: 1,
                }}
              >
                学
              </span>

              <div className="flex flex-wrap items-start justify-between gap-4">
                {/* Left */}
                <div className="flex items-start gap-4">
                  {/* Icon - React Icon */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0"
                    style={{
                      background: `${edu.color}15`,
                      border: `1px solid ${edu.color}40`,
                      boxShadow: `0 0 16px ${edu.color}20`,
                    }}
                  >
                    <FaGraduationCap
                      className="w-6 h-6"
                      style={{ color: edu.color }}
                    />
                  </div>

                  <div>
                    {/* Rank */}
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-md inline-flex items-center gap-1.5 mb-2"
                      style={{
                        background: `${edu.color}20`,
                        color: edu.color,
                        fontFamily: "Rajdhani, sans-serif",
                        letterSpacing: "0.1em",
                        boxShadow: `0 0 10px ${edu.color}20`,
                      }}
                    >
                      <GiShuriken className="w-3 h-3" /> {edu.rank}
                    </span>

                    <h3
                      className="text-xl sm:text-2xl font-bold text-white mb-2"
                      style={{ fontFamily: "Rajdhani, sans-serif" }}
                    >
                      {edu.degree}
                    </h3>

                    {/* Institution with FIXED icon size - using inline styles to force size */}
                    <div
                      className="flex items-center gap-2 mb-1.5"
                      style={{ color: edu.color }}
                    >
                      <MdSchool
                        style={{
                          width: "16px",
                          height: "16px",
                          minWidth: "16px",
                          minHeight: "16px",
                        }}
                      />
                      <span className="text-sm font-medium">
                        {edu.institution}
                      </span>
                    </div>

                    {/* Location with FIXED icon size - using inline styles to force size */}
                    <div className="flex items-center gap-2">
                      <MdLocationOn
                        style={{
                          width: "14px",
                          height: "14px",
                          minWidth: "14px",
                          minHeight: "14px",
                        }}
                      />
                      <span className="text-xs text-slate-500">
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right — duration + grade */}
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <span
                    className="px-3 py-1.5 rounded-xl text-xs flex items-center gap-1.5 whitespace-nowrap"
                    style={{
                      background: "rgba(15,15,35,0.8)",
                      border: "1px solid rgba(99,102,241,0.2)",
                      color: "#94a3b8",
                      fontFamily: "JetBrains Mono, monospace",
                    }}
                  >
                    <FaCalendarAlt className="w-3 h-3" /> {edu.duration}
                  </span>
                  <span
                    className="px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 whitespace-nowrap"
                    style={{
                      background: `${edu.color}15`,
                      border: `1px solid ${edu.color}40`,
                      color: edu.color,
                      fontFamily: "Rajdhani, sans-serif",
                      letterSpacing: "0.05em",
                    }}
                  >
                    <FaTrophy className="w-3 h-3" /> {edu.grade}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              {edu.highlights && edu.highlights.length > 0 && (
                <div className="mt-5 pt-5 border-t border-indigo-500/10">
                  <ul className="flex flex-wrap gap-x-6 gap-y-2">
                    {edu.highlights.map((h, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs text-slate-400"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{
                            background: edu.color,
                            boxShadow: `0 0 6px ${edu.color}`,
                          }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
