import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MdDashboard, MdShoppingCart, MdCode } from "react-icons/md";
import { projects } from "../../data/projects";

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  MdDashboard,
  MdShoppingCart,
  MdCode,
};

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="w-4 h-4"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

type Project = (typeof projects)[0];

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const IconComponent = iconMap[project.icon as keyof typeof iconMap];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(5,5,8,0.85)", backdropFilter: "blur(12px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.85, opacity: 0, y: 40 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="glass rounded-2xl p-8 max-w-2xl w-full relative overflow-hidden"
        style={{ border: `1px solid ${project.color}40` }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at top left, ${project.color}12 0%, transparent 60%)`,
          }}
        />

        {/* Kanji watermark */}
        <span
          className="absolute -right-4 -bottom-4 text-[140px] font-bold pointer-events-none select-none"
          style={{
            fontFamily: "serif",
            color: project.color,
            opacity: 0.05,
            lineHeight: 1,
          }}
        >
          {project.kanji}
        </span>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          style={{
            background: "rgba(99,102,241,0.1)",
            border: "1px solid rgba(99,102,241,0.2)",
          }}
        >
          ✕
        </button>

        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0"
            style={{
              background: `${project.color}15`,
              border: `1px solid ${project.color}40`,
              boxShadow: `0 0 20px ${project.color}20`,
            }}
          >
            {IconComponent && (
              <IconComponent
                className="w-7 h-7"
                style={{ color: project.color }}
              />
            )}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-md"
                style={{
                  background: `${project.color}20`,
                  color: project.color,
                  fontFamily: "Rajdhani, sans-serif",
                  letterSpacing: "0.1em",
                }}
              >
                {project.rank}
              </span>
            </div>
            <h3
              className="text-2xl font-bold text-white"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              {project.title}
            </h3>
            <p className="text-sm" style={{ color: project.color }}>
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mb-6">
          <p
            className="text-xs tracking-widest uppercase mb-3"
            style={{
              color: project.color,
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            — Key Features
          </p>
          <ul className="flex flex-col gap-2">
            {project.longDesc.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-slate-300"
              >
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                  style={{
                    background: project.color,
                    boxShadow: `0 0 6px ${project.color}`,
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Stack */}
        <div className="mb-7">
          <p
            className="text-xs tracking-widest uppercase mb-3"
            style={{
              color: project.color,
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            — Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs"
                style={{
                  background: `${project.color}12`,
                  border: `1px solid ${project.color}30`,
                  color: project.color,
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: `${project.color}15`,
              border: `1px solid ${project.color}40`,
              color: project.color,
              fontFamily: "Rajdhani, sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            <GithubIcon /> GitHub
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: `${project.color}25`,
                border: `1px solid ${project.color}60`,
                color: "#fff",
                fontFamily: "Rajdhani, sans-serif",
                letterSpacing: "0.05em",
                boxShadow: `0 0 20px ${project.color}30`,
              }}
            >
              <ExternalIcon /> Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const large = projects.filter((p) => p.size === "large");
  const small = projects.filter((p) => p.size === "small");

  return (
    <section id="projects" className="relative py-10 overflow-hidden">
      {/* bg glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-64 pointer-events-none opacity-15"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.6) 0%, transparent 70%)",
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
            // 04. projects
          </p>
          <div className="flex items-end gap-4">
            <h2
              className="text-4xl sm:text-5xl font-bold text-white"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              Jutsu Archive
            </h2>
            <div className="h-px flex-1 max-w-xs bg-linear-to-r from-indigo-500/50 to-transparent mb-3" />
          </div>
          <p className="text-slate-400 text-sm mt-3 max-w-lg">
            Each project is a technique mastered. Click any card to see the full
            breakdown.
          </p>
        </motion.div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Large card — spans 2 cols */}
          {large.map((project, i) => {
            const IconComponent = iconMap[project.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="lg:col-span-2 glass rounded-2xl p-7 sm:p-8 cursor-pointer group relative overflow-hidden transition-all duration-500 hover:scale-[1.01]"
                style={{ border: `1px solid ${project.color}25` }}
                onClick={() => setSelected(project)}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    project.color + "50";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    `0 0 50px ${project.color}15`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    project.color + "25";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Animated bg glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${project.color}10 0%, transparent 60%)`,
                  }}
                />

                {/* Kanji watermark */}
                <span
                  className="absolute -right-4 -bottom-4 text-[150px] font-bold pointer-events-none select-none transition-all duration-700 group-hover:opacity-[0.07]"
                  style={{
                    fontFamily: "serif",
                    color: project.color,
                    opacity: 0.04,
                    lineHeight: 1,
                  }}
                >
                  {project.kanji}
                </span>

                {/* Top row */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl"
                      style={{
                        background: `${project.color}15`,
                        border: `1px solid ${project.color}40`,
                        boxShadow: `0 0 16px ${project.color}20`,
                      }}
                    >
                      {IconComponent && (
                        <IconComponent
                          className="w-6 h-6"
                          style={{ color: project.color }}
                        />
                      )}
                    </div>
                    <div>
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-md block w-fit mb-1"
                        style={{
                          background: `${project.color}20`,
                          color: project.color,
                          fontFamily: "Rajdhani, sans-serif",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {project.rank}
                      </span>
                      <p
                        className="text-xs text-slate-500"
                        style={{ fontFamily: "JetBrains Mono, monospace" }}
                      >
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Expand hint */}
                  <span
                    className="text-xs text-slate-600 group-hover:text-indigo-400 transition-colors flex items-center gap-1"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    view details →
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-2xl sm:text-3xl font-bold text-white mb-3 relative z-10"
                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6 relative z-10 max-w-xl">
                  {project.description}
                </p>

                {/* Stack pills */}
                <div className="flex flex-wrap gap-2 relative z-10 mb-6">
                  {project.stack.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs"
                      style={{
                        background: `${project.color}12`,
                        border: `1px solid ${project.color}25`,
                        color: project.color,
                        fontFamily: "JetBrains Mono, monospace",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 6 && (
                    <span
                      className="px-2.5 py-1 rounded-lg text-xs text-slate-500"
                      style={{
                        border: "1px solid rgba(99,102,241,0.15)",
                        fontFamily: "JetBrains Mono, monospace",
                      }}
                    >
                      +{project.stack.length - 6} more
                    </span>
                  )}
                </div>

                {/* Links row */}
                <div className="flex gap-3 relative z-10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 hover:scale-105"
                    style={{
                      background: "rgba(99,102,241,0.1)",
                      border: "1px solid rgba(99,102,241,0.25)",
                      color: "#94a3b8",
                      fontFamily: "Rajdhani, sans-serif",
                    }}
                  >
                    <GithubIcon /> GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 hover:scale-105"
                      style={{
                        background: `${project.color}20`,
                        border: `1px solid ${project.color}40`,
                        color: project.color,
                        fontFamily: "Rajdhani, sans-serif",
                      }}
                    >
                      <ExternalIcon /> Live
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}

          {/* Small cards — right column */}
          <div className="flex flex-col gap-5">
            {small.map((project, i) => {
              const IconComponent =
                iconMap[project.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.12 }}
                  className="glass rounded-2xl p-6 cursor-pointer group relative overflow-hidden flex-1 transition-all duration-500 hover:scale-[1.02]"
                  style={{ border: `1px solid ${project.color}25` }}
                  onClick={() => setSelected(project)}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      project.color + "50";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      `0 0 30px ${project.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      project.color + "25";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Animated bg */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at top right, ${project.color}12 0%, transparent 60%)`,
                    }}
                  />

                  {/* Kanji */}
                  <span
                    className="absolute -right-2 -bottom-2 text-7xl font-bold pointer-events-none select-none"
                    style={{
                      fontFamily: "serif",
                      color: project.color,
                      opacity: 0.06,
                      lineHeight: 1,
                    }}
                  >
                    {project.kanji}
                  </span>

                  {/* Top */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                        style={{
                          background: `${project.color}15`,
                          border: `1px solid ${project.color}35`,
                        }}
                      >
                        {IconComponent && (
                          <IconComponent
                            className="w-5 h-5"
                            style={{ color: project.color }}
                          />
                        )}
                      </div>
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-md"
                        style={{
                          background: `${project.color}20`,
                          color: project.color,
                          fontFamily: "Rajdhani, sans-serif",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {project.rank}
                      </span>
                    </div>
                    <span
                      className="text-xs text-slate-600 group-hover:text-indigo-400 transition-colors"
                      style={{ fontFamily: "JetBrains Mono, monospace" }}
                    >
                      view →
                    </span>
                  </div>

                  <h3
                    className="text-lg font-bold text-white mb-1 relative z-10"
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-xs mb-3 relative z-10"
                    style={{ color: project.color }}
                  >
                    {project.subtitle}
                  </p>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4 relative z-10 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Stack pills — compact */}
                  <div className="flex flex-wrap gap-1.5 relative z-10">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-[10px]"
                        style={{
                          background: `${project.color}12`,
                          border: `1px solid ${project.color}25`,
                          color: project.color,
                          fontFamily: "JetBrains Mono, monospace",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* More projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="https://github.com/vivekxparmar"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-7 py-3 rounded-xl glass border border-indigo-500/30 text-slate-300 text-sm font-semibold hover:border-indigo-400 hover:text-white transition-all duration-300 hover:scale-105 group"
            style={{
              fontFamily: "Rajdhani, sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            <GithubIcon />
            View All Projects on GitHub
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
