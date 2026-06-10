import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MdEmail, MdFileDownload } from "react-icons/md";
import {
  FaLinkedin,
  FaGithub,
  FaCheckCircle,
  FaBolt,
  FaSearch,
} from "react-icons/fa";
// import { SiGmail } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import resume from "../../assets/resume.pdf";

const contactLinks = [
  {
    label: "Email",
    value: "parmarvivek04102004@gmail.com",
    href: "mailto:parmarvivek04102004@gmail.com",
    icon: <MdEmail className="w-6 h-6" />,
    color: "#6366f1",
    cta: "Send Email",
  },
  {
    label: "LinkedIn",
    value: "vivek-parmar-047009261",
    href: "https://www.linkedin.com/in/vivek-parmar-047009261/",
    icon: <FaLinkedin className="w-6 h-6" />,
    color: "#0077b5",
    cta: "Connect",
  },
  {
    label: "GitHub",
    value: "vivekxparmar",
    href: "https://github.com/vivekxparmar",
    icon: <FaGithub className="w-6 h-6" />,
    color: "#ffffff",
    cta: "Follow",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const copyEmail = () => {
    navigator.clipboard.writeText("parmarvivek04102004@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative py-10 md:py-10 lg:py-10 overflow-hidden"
    >
      {/* bg glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-64 pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.6) 0%, transparent 70%)",
          filter: "blur(60px)",
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
            // 06. contact
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-indigo-500/50" />
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              Summon Me
            </h2>
            <div className="h-px w-12 bg-linear-to-l from-transparent to-indigo-500/50" />
          </div>
          <p className="text-slate-400 text-sm mt-4 max-w-2xl mx-auto">
            Have a mission for me? Whether it's a job, a freelance project, or
            just a conversation — I respond fast.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          {/* LEFT — CTA card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Main CTA */}
            <div
              className="glass rounded-2xl p-8 relative overflow-hidden mb-5"
              style={{ border: "1px solid rgba(99,102,241,0.25)" }}
            >
              {/* Kanji watermark */}
              <span
                className="absolute -right-4 -bottom-4 text-[120px] font-bold pointer-events-none select-none"
                style={{
                  fontFamily: "serif",
                  color: "#6366f1",
                  opacity: 0.05,
                  lineHeight: 1,
                }}
              >
                召
              </span>

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{
                  background: "rgba(99,102,241,0.15)",
                  border: "1px solid rgba(99,102,241,0.3)",
                  boxShadow: "0 0 20px rgba(99,102,241,0.2)",
                }}
              >
                <FaBolt className="w-7 h-7 text-indigo-400" />
              </div>

              <h3
                className="text-2xl font-bold text-white mb-2"
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              >
                Let's Build Something Great
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                I'm actively looking for frontend developer roles. If you have
                an exciting product to build, a team to join, or a freelance
                project — let's talk.
              </p>

              {/* Email copy button */}
              <button
                onClick={copyEmail}
                className="w-full flex items-center justify-between px-4 sm:px-5 py-4 rounded-xl transition-all duration-300 group hover:scale-[1.01]"
                style={{
                  background: "rgba(99,102,241,0.08)",
                  border: "1px solid rgba(99,102,241,0.25)",
                }}
              >
                <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                  <span className="text-indigo-400 shrink-0">
                    <MdEmail className="w-5 h-5" />
                  </span>
                  <span
                    className="text-xs sm:text-sm text-slate-300 truncate"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    parmarvivek04102004@gmail.com
                  </span>
                </div>
                <span
                  className="text-xs px-2 sm:px-2.5 py-1 rounded-lg transition-all duration-300 shrink-0 ml-2"
                  style={{
                    background: copied
                      ? "rgba(74,222,128,0.15)"
                      : "rgba(99,102,241,0.15)",
                    color: copied ? "#4ade80" : "#818cf8",
                    border: copied
                      ? "1px solid rgba(74,222,128,0.3)"
                      : "1px solid rgba(99,102,241,0.3)",
                    fontFamily: "JetBrains Mono, monospace",
                  }}
                >
                  {copied ? (
                    <>
                      <FaCheckCircle className="w-3 h-3 inline mr-1" /> copied!
                    </>
                  ) : (
                    "copy"
                  )}
                </span>
              </button>

              {/* Send email CTA */}
              <a
                href="mailto:parmarvivek04102004@gmail.com"
                className="mt-4 flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl text-white font-bold text-sm transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  boxShadow: "0 0 30px rgba(99,102,241,0.35)",
                  fontFamily: "Rajdhani, sans-serif",
                  letterSpacing: "0.08em",
                }}
              >
                <AiOutlineMail className="w-4 h-4" /> Send Me an Email
              </a>
            </div>

            {/* Status card */}
            <div
              className="glass rounded-2xl p-5 flex items-center gap-4"
              style={{ border: "1px solid rgba(74,222,128,0.2)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: "rgba(74,222,128,0.1)",
                  border: "1px solid rgba(74,222,128,0.2)",
                }}
              >
                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse inline-block" />
              </div>
              <div>
                <p
                  className="text-white text-sm font-semibold"
                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                >
                  Currently Available
                </p>
                <p
                  className="text-slate-500 text-xs flex items-start gap-1"
                  style={{ fontFamily: "JetBrains Mono, monospace" }}
                >
                  Response time: within 24 hours · Based in Gujarat, India
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Social links */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <p
              className="text-xs text-indigo-400 tracking-widest uppercase mb-2 text-center lg:text-left flex items-center justify-center lg:justify-start gap-2"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              <FaSearch className="w-3 h-3" />
              Find Me On
            </p>

            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass rounded-2xl p-5 flex items-center gap-5 group transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                style={{ border: `1px solid ${link.color}20` }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    link.color + "50";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    `0 0 25px ${link.color}12`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    link.color + "20";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${link.color}12`,
                    border: `1px solid ${link.color}30`,
                    color: link.color,
                  }}
                >
                  {link.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <p
                    className="text-white font-semibold text-sm mb-0.5"
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    {link.label}
                  </p>
                  <p
                    className="text-slate-500 text-xs truncate"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    {link.value}
                  </p>
                </div>

                <span
                  className="text-xs px-3 py-1.5 rounded-lg shrink-0 transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: `${link.color}12`,
                    border: `1px solid ${link.color}30`,
                    color: link.color,
                    fontFamily: "Rajdhani, sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                  }}
                >
                  {link.cta}
                </span>
              </motion.a>
            ))}

            {/* Resume download card */}
            <motion.a
              href={resume}
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="glass rounded-2xl p-5 flex items-center gap-5 group transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              style={{
                border: "1px solid rgba(99,102,241,0.25)",
                background:
                  "linear-gradient(135deg, rgba(99,102,241,0.05), rgba(139,92,246,0.05))",
              }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "rgba(99,102,241,0.15)",
                  border: "1px solid rgba(99,102,241,0.35)",
                  boxShadow: "0 0 16px rgba(99,102,241,0.2)",
                }}
              >
                <MdFileDownload className="w-6 h-6 text-indigo-400" />
              </div>
              <div className="flex-1">
                <p
                  className="text-white font-semibold text-sm mb-0.5"
                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                >
                  Download Resume
                </p>
                <p
                  className="text-slate-500 text-xs"
                  style={{ fontFamily: "JetBrains Mono, monospace" }}
                >
                  resume.pdf
                </p>
              </div>
              <span
                className="text-xs px-3 py-1.5 rounded-lg text-indigo-400"
                style={{
                  background: "rgba(99,102,241,0.12)",
                  border: "1px solid rgba(99,102,241,0.3)",
                  fontFamily: "Rajdhani, sans-serif",
                  fontWeight: 600,
                }}
              >
                Download
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
