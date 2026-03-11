"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/i18n";
import { StaggerText, WordReveal } from "./TextReveal";

const orbitTechs = [
  { name: "React", angle: 0 },
  { name: "Node.js", angle: 45 },
  { name: "Python", angle: 90 },
  { name: "TypeScript", angle: 135 },
  { name: "Docker", angle: 180 },
  { name: "PostgreSQL", angle: 225 },
  { name: "Redis", angle: 270 },
  { name: "Claude AI", angle: 315 },
];

export default function Hero() {
  const { t } = useLang();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % t.hero.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [t.hero.roles.length]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px] animate-pulse-soft" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[180px] animate-pulse-soft" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-4xl w-full">
        {/* Orbit ring */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px]">
          <div className="relative w-full h-full animate-spin-slow">
            <div className="absolute inset-0 rounded-full border border-border/30" />
            {orbitTechs.map((tech) => {
              const rad = (tech.angle * Math.PI) / 180;
              const x = 50 + 50 * Math.cos(rad);
              const y = 50 + 50 * Math.sin(rad);
              return (
                <div key={tech.name} className="absolute" style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}>
                  <div className="animate-spin-slow" style={{ animationDirection: "reverse" }}>
                    <div className="px-2.5 py-1 rounded-lg glass text-[10px] text-muted/70 font-mono whitespace-nowrap">
                      {tech.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative z-20 text-center">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-4"
          >
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">
              <StaggerText text="Sedat" className="text-primary" charDelay={0.06} />
              {" "}
              <StaggerText text="Irtas" className="text-foreground" delay={0.4} charDelay={0.06} />
            </h1>
          </motion.div>

          {/* Cycling role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="h-8 mb-6 flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                transition={{ duration: 0.4 }}
                className="text-sm sm:text-base font-mono text-primary tracking-wide"
              >
                {t.hero.roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Description with word reveal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mb-10"
          >
            <p className="text-sm sm:text-base text-muted leading-relaxed max-w-lg mx-auto">
              <WordReveal text={t.hero.desc} delay={1} wordDelay={0.025} />
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <a href="#projects" className="group px-6 py-3 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-light transition-all hover:shadow-lg hover:shadow-primary/20">
              {t.hero.cta.projects}
              <span className="inline-block ml-1 transition-transform group-hover:translate-x-0.5">&rarr;</span>
            </a>
            <a href="https://github.com/irtassedat" target="_blank" rel="noopener noreferrer" className="px-6 py-3 glass text-sm font-medium rounded-xl hover:border-primary/30 transition-all flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              {t.hero.cta.github}
            </a>
            <a href="https://www.linkedin.com/in/sedat-irta%C5%9F-04a441137/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 glass text-sm font-medium rounded-xl hover:border-primary/30 transition-all flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              {t.hero.cta.linkedin}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl mx-auto"
          >
            {t.hero.stats.map((s, i) => (
              <motion.div key={s.l} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6 + i * 0.1 }} className="text-center">
                <div className="text-2xl font-bold text-gradient">{s.n}</div>
                <div className="text-[10px] text-muted uppercase tracking-wider mt-1">{s.l}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-5 h-8 rounded-full border border-muted/20 flex justify-center pt-2">
          <div className="w-0.5 h-2 bg-primary/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
