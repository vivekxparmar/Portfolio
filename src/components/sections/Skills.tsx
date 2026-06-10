import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiReact,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiRadixui,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiC,
  SiCplusplus,
  SiPython,
  SiGit,
  SiGithub,
  SiVercel,
  SiRender,
  SiVite,
  SiNextdotjs,
  SiDocker,
  SiGraphql,
  SiFigma,
} from "react-icons/si";
import { DiVisualstudio, DiJava } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { skillCategories, growthSkills } from "../../data/skills";

// Icon map
const iconMap: Record<string, React.ElementType> = {
  SiReact,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiRadixui,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiC,
  SiCplusplus,
  SiJava: DiJava,
  SiPython,
  SiGit,
  SiGithub,
  SiVercel,
  SiRender,
  SiVite,
  SiVisualstudiocode: DiVisualstudio,
  SiNextdotjs,
  SiDocker,
  SiGraphql,
  SiAmazonwebservices: FaAws,
  SiFigma,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const active = skillCategories.find((c) => c.id === activeTab)!;

  return (
    <section
      id="skills"
      className="relative py-10 md:py-10 lg:py-10 overflow-hidden"
    >
      {/* bg glow - centered */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 pointer-events-none opacity-20"
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
        {/* Section title - CENTERED */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p
            className="text-indigo-400 text-xs tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            // 02. skills & arsenal
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
          >
            Tech Stack
          </h2>
          <div className="w-20 h-px bg-linear-to-r from-transparent via-indigo-500 to-transparent mx-auto mt-4 mb-4" />
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Tools and technologies I wield — from pixel-perfect frontends to
            real-time backends.
          </p>
        </motion.div>

        {/* Tab switcher - CENTERED */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className="relative px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300"
              style={{
                fontFamily: "Rajdhani, sans-serif",
                letterSpacing: "0.05em",
                background:
                  activeTab === cat.id
                    ? `linear-gradient(135deg, ${cat.color}30, ${cat.color}15)`
                    : "rgba(15,15,35,0.4)",
                border:
                  activeTab === cat.id
                    ? `1px solid ${cat.color}60`
                    : "1px solid rgba(99,102,241,0.15)",
                color: activeTab === cat.id ? cat.color : "#64748b",
                boxShadow:
                  activeTab === cat.id ? `0 0 20px ${cat.color}25` : "none",
              }}
            >
              <span className="mr-1.5" style={{ fontFamily: "serif" }}>
                {cat.kanji}
              </span>
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills grid - Using FLEX for proper centering */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {active.skills.map((skill, i) => {
              const IconComp = iconMap[skill.icon];
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.06 }}
                  className="glass rounded-2xl p-5 flex flex-col items-center gap-3 group cursor-default relative overflow-hidden transition-all duration-300 hover:scale-[1.05] w-35 sm:w-37.5 md:w-40"
                  style={{
                    border: "1px solid rgba(99,102,241,0.15)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      skill.color + "60";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      `0 0 24px ${skill.color}25`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(99,102,241,0.15)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${skill.color}12 0%, transparent 70%)`,
                    }}
                  />

                  {IconComp && (
                    <IconComp
                      size={36}
                      style={{ color: skill.color }}
                      className="transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-lg relative z-10"
                    />
                  )}

                  <span
                    className="text-xs text-slate-300 text-center font-medium relative z-10"
                    style={{
                      fontFamily: "Rajdhani, sans-serif",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Divider - CENTERED */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-16 bg-linear-to-r from-transparent via-indigo-500/30 to-transparent" />
          <span
            className="text-xs text-indigo-400/60 tracking-widest uppercase px-4"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            currently_unlocking
          </span>
          <div className="h-px w-16 bg-linear-to-r from-transparent via-indigo-500/30 to-transparent" />
        </div>

        {/* Growth skills - CENTERED */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {growthSkills.map((skill, i) => {
            const IconComp = iconMap[skill.icon];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="glass flex items-center gap-2.5 px-4 py-2.5 rounded-xl group cursor-default transition-all duration-300 hover:scale-105"
                style={{ border: `1px solid ${skill.color}30` }}
              >
                {IconComp && (
                  <IconComp size={16} style={{ color: skill.color }} />
                )}
                <span
                  className="text-xs text-slate-300"
                  style={{
                    fontFamily: "Rajdhani, sans-serif",
                    letterSpacing: "0.05em",
                  }}
                >
                  {skill.name}
                </span>
                <span
                  className="text-[10px] px-2 py-0.5 rounded-full"
                  style={{
                    background:
                      skill.status === "learning"
                        ? "rgba(99,102,241,0.15)"
                        : "rgba(139,92,246,0.15)",
                    color: skill.status === "learning" ? "#818cf8" : "#a78bfa",
                    fontFamily: "JetBrains Mono, monospace",
                  }}
                >
                  {skill.status}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
