"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { WordReveal } from "./TextReveal";
import { useRef, MouseEvent } from "react";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 25, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6 } },
};

function BentoCard({ children, className = "", variants }: { children: React.ReactNode; className?: string; variants?: typeof item }) {
  const ref = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
  };
  return (
    <motion.div ref={ref} variants={variants || item} onMouseMove={handleMouseMove} className={`spotlight-card rounded-2xl p-6 sm:p-7 ${className}`}>
      <div className="spotlight" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="py-28 px-4 relative">
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="text-xs font-mono text-primary tracking-wider">{t.about.section}</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 tracking-tight">
            {t.about.titleA}<span className="text-gradient">{t.about.titleB}</span>
          </h2>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Bio */}
          <BentoCard className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">SI</div>
              <div>
                <h3 className="font-semibold text-sm">{t.about.name}</h3>
                <p className="text-[11px] text-muted">{t.about.role}</p>
              </div>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              <WordReveal text={t.about.bio} delay={0.2} wordDelay={0.02} />
            </p>
          </BentoCard>

          {/* Status & Location */}
          <BentoCard className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative rounded-full h-2.5 w-2.5 bg-green-400" />
                </span>
                <span className="text-xs text-green-400 font-medium">{t.about.statusAvailable}</span>
              </div>
              <h3 className="font-semibold text-sm mb-1">{t.about.location}</h3>
              <p className="text-[11px] text-muted leading-relaxed">{t.about.locationDesc}</p>
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-[10px] text-muted/60 uppercase tracking-wider mb-1.5">{t.about.prefLabel}</p>
              <div className="flex flex-wrap gap-1.5">
                {t.about.prefs.map((p) => (
                  <span key={p} className="text-[10px] px-2 py-0.5 rounded-full bg-surface-light text-muted/70 border border-border/50">{p}</span>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Education */}
          <BentoCard>
            <div className="text-xs text-primary font-mono mb-3 tracking-wider">{t.about.eduTitle}</div>
            <div className="space-y-4">
              {t.about.edu.map((e, i) => (
                <div key={i} className={i > 0 ? "pt-3 border-t border-border/50" : ""}>
                  <h4 className="text-sm font-semibold">{e.title}</h4>
                  <p className="text-[11px] text-muted">{e.sub}</p>
                  <p className="text-[10px] text-muted/50 mt-1">{e.desc}</p>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Numbers */}
          <BentoCard>
            <div className="text-xs text-primary font-mono mb-4 tracking-wider">{t.about.numbersTitle}</div>
            <div className="grid grid-cols-2 gap-3">
              {t.about.numbers.map((s) => (
                <div key={s.l} className="text-center p-2.5 rounded-xl bg-surface-light/50 border border-border/30">
                  <div className="text-lg font-bold text-gradient">{s.n}</div>
                  <div className="text-[9px] text-muted uppercase tracking-wider whitespace-pre-line leading-tight mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Current Focus */}
          <BentoCard>
            <div className="text-xs text-primary font-mono mb-3 tracking-wider">{t.about.focusTitle}</div>
            <div className="space-y-3">
              {t.about.focus.map((f) => (
                <div key={f.title} className="p-2.5 rounded-xl bg-surface-light/50 border border-border/30">
                  <h4 className="text-xs font-semibold mb-0.5">{f.title}</h4>
                  <p className="text-[10px] text-muted/60 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </BentoCard>
        </motion.div>
      </div>
    </section>
  );
}
