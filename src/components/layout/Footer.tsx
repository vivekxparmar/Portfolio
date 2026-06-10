import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-indigo-500/10 py-10 overflow-hidden">
      {/* top fade */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4! sm:px-10 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left — logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <span
              className="text-lg font-bold text-white glow-text"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              VP<span className="text-indigo-400">.</span>
            </span>
            <span
              className="text-xs text-slate-600"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              {"<shinobi_dev />"}
            </span>
          </motion.div>

          {/* Center — credit */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs text-slate-600 text-center"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            © {year} Vivek Parmar · Built with{" "}
            <span className="text-indigo-400">React</span> +{" "}
            <span className="text-indigo-400">Framer Motion</span> +{" "}
            <span className="text-violet-400">anime aesthetic</span>
          </motion.p>

          {/* Right — back to top */}
          <motion.a
            href="#hero"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs text-slate-500 hover:text-indigo-400 transition-colors flex items-center gap-1.5 group"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            back_to_top
            <span className="group-hover:-translate-y-0.5 transition-transform duration-200">
              ↑
            </span>
          </motion.a>
        </div>

        {/* Bottom Japanese quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-6"
        >
          <p className="text-xs text-slate-500" style={{ fontFamily: "serif" }}>
            「諦めなければ、夢は叶う」
          </p>
          <p
            className="text-[10px] text-slate-500 mt-0.5"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            "If you don't give up, dreams come true." — Naruto
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
