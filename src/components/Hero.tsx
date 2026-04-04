"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useLang } from "@/lib/i18n";

const terminalLines = [
  { cmd: "$ agentforge start --mode production", delay: 0 },
  { out: "  Starting 6 agents...", delay: 1200 },
  { out: "  ✓ HttpWorker ready (5 concurrent)", delay: 1800, color: "text-green" },
  { out: "  ✓ Scheduler ready (3 cron jobs)", delay: 2200, color: "text-green" },
  { out: "  ✓ Watchdog monitoring (auto-heal: on)", delay: 2600, color: "text-green" },
  { out: "  → API listening on :3000 (13 endpoints)", delay: 3200, color: "text-accent" },
  { out: "  → Dashboard live at :3001", delay: 3600, color: "text-accent" },
  { out: "  → All systems operational", delay: 4200, color: "text-primary" },
];

function TerminalSimulation() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typedCmd, setTypedCmd] = useState("");
  const cmdText = terminalLines[0].cmd || "";

  useEffect(() => {
    // Type the command character by character
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i <= cmdText.length) {
        setTypedCmd(cmdText.slice(0, i));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 40);
    return () => clearInterval(typeInterval);
  }, [cmdText]);

  useEffect(() => {
    terminalLines.forEach((line, index) => {
      if (index === 0) return; // Skip command, handled by typing
      setTimeout(() => setVisibleLines(index), line.delay);
    });
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto rounded-xl overflow-hidden border border-border/50 bg-surface/80 backdrop-blur-sm">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/50 bg-surface-light/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <span className="text-[10px] text-muted font-mono ml-2">~/agentforge</span>
      </div>
      {/* Terminal body */}
      <div className="p-4 font-mono text-sm leading-relaxed min-h-[200px]">
        <div className="text-green">
          {typedCmd}
          {typedCmd.length < cmdText.length && <span className="terminal-cursor" />}
        </div>
        {Array.from({ length: visibleLines }).map((_, i) => {
          const line = terminalLines[i + 1];
          if (!line) return null;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className={line.color || "text-muted"}
            >
              {line.out}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function Hero() {
  const { t } = useLang();
  const [roleIndex, setRoleIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % t.hero.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [t.hero.roles.length]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-aurora bg-noise"
    >
      {/* Beam lines */}
      <div className="beam-line" style={{ width: "35%", top: "15%", left: "5%", animationDelay: "0s" }} />
      <div className="beam-line" style={{ width: "25%", top: "75%", right: "0%", left: "auto", animationDelay: "2s" }} />
      <div className="beam-line" style={{ width: "30%", top: "50%", left: "60%", animationDelay: "1s" }} />

      <div className="relative z-10 w-full max-w-4xl">
        {/* Name + Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter mb-3">
            <span className="text-gradient">{t.hero.firstName}</span>{" "}
            <span className="text-foreground">{t.hero.lastName}</span>
          </h1>

          <div className="h-7 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.3 }}
                className="text-sm font-mono text-primary tracking-wide"
              >
                {t.hero.roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12"
        >
          <TerminalSimulation />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          <a href="#projects" className="btn-shine px-6 py-3 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-light transition-all hover:shadow-lg hover:shadow-primary/20">
            {t.hero.cta.projects} <span className="ml-1">&rarr;</span>
          </a>
          <a href="https://github.com/irtassedat" target="_blank" rel="noopener noreferrer" className="px-6 py-3 glass text-sm font-medium rounded-xl hover:border-primary/30 transition-all flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/sedat-irta%C5%9F-04a441137/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 glass text-sm font-medium rounded-xl hover:border-primary/30 transition-all flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
          <a href="https://dashboard-rust-chi-93.vercel.app" target="_blank" rel="noopener noreferrer" className="px-6 py-3 glass text-sm font-medium rounded-xl hover:border-accent/30 text-accent transition-all flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
            Live Demo
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {t.hero.stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.1 }}
              className="text-center p-4 rounded-xl glass"
            >
              <div className="text-2xl font-bold text-gradient">{s.n}</div>
              <div className="text-[10px] text-muted uppercase tracking-wider mt-1 whitespace-pre-line">{s.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-5 h-8 rounded-full border border-muted/20 flex justify-center pt-2">
          <div className="w-0.5 h-2 bg-primary/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
