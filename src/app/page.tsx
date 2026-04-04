"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";
import { useLang, Lang } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

const langOptions: { key: Lang; label: string }[] = [
  { key: "tr", label: "TR" },
  { key: "en", label: "EN" },
  { key: "it", label: "IT" },
];

function HeroControls() {
  const { lang, setLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="absolute top-6 right-6 z-50 flex items-center gap-2"
    >
      <div className="flex items-center rounded-lg overflow-hidden border border-border/30 bg-surface/50 backdrop-blur-sm">
        {langOptions.map((l) => (
          <button
            key={l.key}
            onClick={() => setLang(l.key)}
            className={`px-2 py-1 text-[10px] font-mono transition-all ${
              lang === l.key ? "bg-primary text-white" : "text-muted/50 hover:text-foreground"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>
      <button
        onClick={toggleTheme}
        className="p-1.5 rounded-lg border border-border/30 bg-surface/50 backdrop-blur-sm text-muted/50 hover:text-foreground transition-colors"
      >
        {theme === "dark" ? (
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
        ) : (
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 006.002-2.248z" />
          </svg>
        )}
      </button>
    </motion.div>
  );
}

function useTypingEffect(text: string, speed = 40, delay = 0) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    setDisplayed("");
    setDone(false);
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i <= text.length) { setDisplayed(text.slice(0, i)); i++; }
        else { clearInterval(interval); setDone(true); }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);
  return { displayed, done };
}

function RichText({ text, className = "" }: { text: string; className?: string }) {
  const colors = ["text-primary", "text-accent", "text-green"];
  let colorIdx = 0;
  const parts = text.split(/(<[^>]+>)/);
  return (
    <span className={className}>
      {parts.map((part, i) => {
        if (part.startsWith("<") && part.endsWith(">")) {
          const color = colors[colorIdx % colors.length];
          colorIdx++;
          return <span key={i} className={color}>{part.slice(1, -1)}</span>;
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}

function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`py-24 px-6 md:px-12 lg:px-20 ${className}`}>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
}

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered) setTriggered(true);
    }, { threshold: 0.5 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [triggered]);

  useEffect(() => {
    if (!triggered) return;
    const steps = 30;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(interval); }
      else setCount(Math.floor(current));
    }, 50);
    return () => clearInterval(interval);
  }, [triggered, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function ProjectCard({ title, description, metrics, tags, github, live, color, delay, preview }: {
  title: string; description: string; metrics: string; tags: string[];
  github?: string; live?: string; color: string; delay: number; preview?: string;
}) {
  const handleCardClick = () => {
    if (live?.includes("sebastianlogic")) {
      window.open(live, "_blank", "width=420,height=880,menubar=no,toolbar=no,location=no,status=no");
    } else if (live) {
      window.open(live, "_blank");
    } else {
      window.open("https://github.com/irtassedat", "_blank");
    }
  };

  const handleSourceClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(github || "https://github.com/irtassedat", "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      onClick={handleCardClick}
      className="card-glow rounded-2xl p-6 group cursor-pointer relative overflow-hidden"
    >
      {preview && (
        <div className="absolute -bottom-2 -right-2 w-[80px] opacity-[0.12] group-hover:opacity-25 transition-opacity duration-500 pointer-events-none">
          <div className="rounded-[0.5rem] border border-foreground/10 overflow-hidden">
            <img src={preview} alt="" className="w-full" />
          </div>
        </div>
      )}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3 flex-wrap">
            <motion.div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: color, boxShadow: `0 0 12px ${color}50` }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <h3 className="font-semibold">{title}</h3>
            {live && (
              <span className="flex items-center gap-1 text-[9px] px-2 py-0.5 rounded-full bg-green/10 text-green border border-green/20">
                <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />Live
              </span>
            )}
          </div>
          <span className="text-xs px-3 py-1 rounded-full font-mono shrink-0" style={{ backgroundColor: color + "15", color }}>{metrics}</span>
        </div>
        <p className="text-sm text-muted leading-relaxed mb-4">{description}</p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.map(t => (
            <motion.span
              key={t}
              whileHover={{ scale: 1.05, borderColor: color + "40" }}
              className="text-[10px] px-2 py-0.5 rounded-full bg-surface-light text-muted/70 border border-border/30 transition-colors"
            >
              {t}
            </motion.span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {github && (
            <button onClick={handleSourceClick} className="text-xs text-muted hover:text-primary transition-colors flex items-center gap-1 opacity-0 group-hover:opacity-100">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              View Source
            </button>
          )}
          {live && (
            <span className="text-xs text-primary/70 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
              Open Demo
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function MoreProjects({ t }: { t: ReturnType<typeof useLang>["t"] }) {
  const [expanded, setExpanded] = useState(false);

  const extraProjects = [
    { title: t.projects.items[1]?.title ?? "E-Commerce Platform", desc: t.projects.items[1]?.desc ?? "", metrics: "Full-Stack", tags: ["React", "Redux", "Java", "Spring Boot", "PostgreSQL"], github: "https://github.com/irtassedat/ecommerce", color: "#ef4444" },
    { title: t.projects.items[3]?.title ?? "Real-Time Data Platform", desc: t.projects.items[3]?.desc ?? "", metrics: "Real-Time", tags: ["Python", "WebSocket", "Redis", "PostgreSQL", "Docker"], color: "#6366f1" },
    { title: t.projects.items[5]?.title ?? "Data Pipeline", desc: t.projects.items[5]?.desc ?? "", metrics: "Multi-Source", tags: ["TypeScript", "REST API", "Playwright", "Docker"], color: "#10b981" },
    { title: t.projects.items[6]?.title ?? "Predictive Analytics", desc: t.projects.items[6]?.desc ?? "", metrics: "Full-Stack + Bot", tags: ["React", "Node.js", "PostgreSQL", "Telegram Bot"], color: "#14b8a6" },
    { title: t.projects.items[7]?.title ?? "Monitoring System", desc: t.projects.items[7]?.desc ?? "", metrics: "24/7 Active", tags: ["Node.js", "Telegram API", "Cron", "Docker"], color: "#06b6d4" },
    { title: t.projects.items[9]?.title ?? "SEO Automation", desc: t.projects.items[9]?.desc ?? "", metrics: "#1 Ranking", tags: ["Python", "Node.js", "Yandex SEO", "Cloudflare"], color: "#84cc16" },
  ];

  return (
    <div className="mt-8 text-center">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-4 mb-6 overflow-hidden"
          >
            {extraProjects.map((p, i) => (
              <ProjectCard key={p.title} title={p.title} description={p.desc} metrics={p.metrics} tags={p.tags} github={p.github} color={p.color} delay={i * 0.05} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setExpanded(!expanded)}
        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl glass text-sm text-muted hover:text-foreground hover:border-primary/30 transition-all"
      >
        <motion.svg
          animate={{ rotate: expanded ? 180 : 0 }}
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </motion.svg>
        {expanded ? (t.projects.collapseHint ?? "Show less") : (t.projects.expandHint ?? "View all projects")}
      </button>
    </div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const { t } = useLang();

  const line1 = useTypingEffect("$ whoami", 60, 500);
  const line2 = useTypingEffect(t.hero.terminal.line2, 30, 1800);
  const line3 = useTypingEffect("$ cat journey.md", 60, 4500);

  const [introComplete, setIntroComplete] = useState(false);
  const [introHidden, setIntroHidden] = useState(false);

  useEffect(() => {
    if (!introComplete) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [introComplete]);

  useEffect(() => {
    if (line3.done && !introComplete) {
      const timer = setTimeout(() => setIntroComplete(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [line3.done, introComplete]);

  const handleIntroExitComplete = useCallback(() => {
    setIntroHidden(true);
  }, []);

  return (
    <main className="bg-noise">
      <motion.div className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary z-[1000]" style={{ width: progressWidth }} />

      {/* ═══════ TERMINAL INTRO (fullscreen overlay) ═══════ */}
      <AnimatePresence onExitComplete={handleIntroExitComplete}>
        {!introComplete && (
          <motion.div
            key="terminal-intro"
            className="fixed inset-0 z-[900] flex items-center justify-center px-6 bg-background"
            exit={{ y: "-100vh", opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <HeroControls />
            <button
              onClick={() => setIntroComplete(true)}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[11px] text-muted/30 hover:text-muted/70 transition-colors font-mono tracking-wider"
            >
              skip intro &rarr;
            </button>
            <div className="max-w-3xl w-full">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="rounded-xl overflow-hidden border border-border/50 bg-surface/80 backdrop-blur-sm">
                  <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/30">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/70" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                      <div className="w-3 h-3 rounded-full bg-green/70" />
                    </div>
                    <span className="text-[10px] text-muted font-mono ml-2">terminal</span>
                  </div>
                  <div className="p-5 font-mono text-sm space-y-1.5">
                    <div className="text-green">{line1.displayed}{!line1.done && <span className="terminal-cursor" />}</div>
                    {line1.done && <div className="text-foreground/80">{line2.displayed}{!line2.done && <span className="terminal-cursor" />}</div>}
                    {line2.done && (<><div className="h-2" /><div className="text-green">{line3.displayed}{!line3.done && <span className="terminal-cursor" />}</div></>)}
                    {line3.done && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-muted text-xs mt-2 leading-relaxed space-y-1">
                        {t.hero.terminal.journey.map((line, i) => (
                          <p key={i}><RichText text={line} /></p>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════ HERO ═══════ */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-aurora relative">
        {introHidden && <HeroControls />}
        {introHidden && (
          <>
            <div className="beam-line" style={{ width: "35%", top: "20%", left: "5%", animationDelay: "0s" }} />
            <div className="beam-line" style={{ width: "25%", top: "70%", right: "0", left: "auto", animationDelay: "2s" }} />
          </>
        )}

        <div className="max-w-3xl w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={introHidden ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-2">
              <span className="text-gradient">{t.hero.firstName}</span> <span className="text-foreground">{t.hero.lastName}</span>
            </h1>
            <p className="text-muted text-sm mb-8">{t.about.role} &middot; {t.about.location}</p>

            <div className="flex flex-wrap justify-center gap-3 mb-16">
              <a href="https://github.com/irtassedat" target="_blank" className="px-5 py-2.5 glass rounded-xl text-sm hover:border-primary/30 transition-all flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>{t.hero.cta.github}
              </a>
              <a href="https://www.linkedin.com/in/sedat-irta%C5%9F-04a441137/" target="_blank" className="px-5 py-2.5 glass rounded-xl text-sm hover:border-primary/30 transition-all flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>{t.hero.cta.linkedin}
              </a>
              <a href="https://dashboard-rust-chi-93.vercel.app" target="_blank" className="btn-shine px-5 py-2.5 bg-primary text-white rounded-xl text-sm hover:bg-primary-light transition-all flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green animate-pulse" />Live Demo
              </a>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {t.hero.stats.map(stat => {
                const match = stat.n.match(/^(\d+)(.*)$/);
                const num = match ? parseInt(match[1]) : 0;
                const suffix = match ? match[2] : "";
                return (
                  <div key={stat.l} className="p-3 rounded-xl glass text-center">
                    <div className="text-xl font-bold text-gradient"><Counter target={num} suffix={suffix} /></div>
                    <div className="text-[9px] text-muted uppercase tracking-wider mt-1">{stat.l}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════ ABOUT ═══════ */}
      <Section id="about">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <span className="text-xs font-mono text-primary tracking-wider">{t.about.section}</span>
          <h2 className="text-3xl font-bold mt-2 mb-8">{t.about.howIGotHere}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 text-sm text-muted leading-relaxed">
              {t.about.paragraphs.map((p, i) => {
                const isLast = i === t.about.paragraphs.length - 1;
                if (isLast) return <p key={i} className="text-foreground font-medium">{p}</p>;
                return <p key={i}><RichText text={p} /></p>;
              })}
            </div>
            <div className="space-y-6">
              <div className="card-glow rounded-xl p-5">
                <h3 className="text-xs font-mono text-primary mb-3">{t.about.eduTitle}</h3>
                <div className="space-y-3">
                  {t.about.edu.map((e, i) => (
                    <div key={i}><p className="font-medium text-sm">{e.title}</p><p className="text-xs text-muted">{e.sub}</p></div>
                  ))}
                </div>
              </div>
              <div className="card-glow rounded-xl p-5">
                <h3 className="text-xs font-mono text-primary mb-3">{t.about.focusTitle}</h3>
                <div className="space-y-2">
                  {t.about.focus.map(f => (
                    <div key={f.title} className="flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-green" /><span className="text-muted">{f.title}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      <div className="section-divider" />

      {/* ═══════ PROJECTS ═══════ */}
      <Section id="projects">
        <span className="text-xs font-mono text-primary tracking-wider">{t.projects.section}</span>
        <h2 className="text-3xl font-bold mt-2 mb-3">{t.projects.titleA}<span className="text-gradient">{t.projects.titleB}</span></h2>
        <p className="text-sm text-muted mb-10">{t.projects.subtitle}</p>
        <div className="grid md:grid-cols-2 gap-4">
          <ProjectCard title={t.projects.items[0]?.title ?? "QR Menu SaaS"} description={t.projects.items[0]?.desc ?? ""} metrics="12.7K lines" tags={["Node.js", "Express", "PostgreSQL", "JWT"]} github="https://github.com/irtassedat/latestv2" live="https://qr.sebastianlogic.com/menu/29" color="#f59e0b" delay={0} preview="/qrmenu-preview.png" />
          <ProjectCard title={t.projects.items[2]?.title ?? "AgentForge"} description={t.projects.items[2]?.desc ?? ""} metrics="1800+ lines" tags={["TypeScript", "Fastify", "Next.js", "Redis", "WebSocket", "Docker"]} github="https://github.com/irtassedat/agentforge" live="https://dashboard-rust-chi-93.vercel.app" color="#a855f7" delay={0.1} />
          <ProjectCard title={t.projects.items[8]?.title ?? "Community Platform"} description={t.projects.items[8]?.desc ?? ""} metrics="64.9K lines" tags={["Fastify", "Next.js", "PostgreSQL", "Redis", "Python", "Docker"]} color="#6366f1" delay={0.2} />
          <ProjectCard title={t.projects.items[4]?.title ?? "Bot & AI Ecosystem"} description={t.projects.items[4]?.desc ?? ""} metrics="15K lines" tags={["Python", "FastAPI", "Gemini AI", "SQLite", "Telethon"]} color="#ec4899" delay={0.3} />
        </div>
        <MoreProjects t={t} />
      </Section>

      <div className="section-divider" />

      {/* ═══════ TECH ═══════ */}
      <Section id="tech">
        <span className="text-xs font-mono text-primary tracking-wider">{t.tech.section}</span>
        <h2 className="text-3xl font-bold mt-2 mb-10">{t.tech.titleA}<span className="text-gradient">{t.tech.titleB}</span></h2>
        {/* ── 3D Orbital Tech Visualization ── */}
        {(() => {
          const categoryColors = ["#06b6d4", "#22c55e", "#f59e0b", "#a855f7"];
          const animClasses = ["orbit-ring-0", "orbit-ring-1", "orbit-ring-2", "orbit-ring-3"];
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mx-auto"
            >
              {/* Center element */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className="orbit-center-glow w-16 h-16 md:w-20 md:h-20 rounded-full bg-surface border border-border/50 flex items-center justify-center">
                  <span className="text-lg md:text-xl font-bold text-gradient">SI</span>
                </div>
              </div>

              {/* Orbit scene */}
              <div className="orbit-scene mx-auto">
                <div className="orbit-stage">
                  {t.tech.categories.map((cat, catIdx) => {
                    const color = categoryColors[catIdx];
                    return (
                      <div
                        key={cat.title}
                        className={`orbit-ring ${animClasses[catIdx]}`}
                        style={{ "--ring-color": color } as React.CSSProperties}
                      >
                        <div className="orbit-track" />
                        {cat.skills.map((skill, skillIdx) => {
                          const angle = (360 / cat.skills.length) * skillIdx;
                          return (
                            <div
                              key={skill}
                              className="orbit-tag-wrapper"
                              style={{ "--tag-angle": `${angle}deg` } as React.CSSProperties}
                            >
                              <div className="orbit-tag" style={{ "--tag-color": color } as React.CSSProperties}>
                                {skill}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Category legend */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-5 mt-6">
                {t.tech.categories.map((cat, i) => (
                  <div key={cat.title} className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: categoryColors[i], boxShadow: `0 0 8px ${categoryColors[i]}50` }} />
                    <span className="text-[10px] md:text-xs text-muted font-mono">{cat.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })()}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-6 p-5 rounded-xl glass border border-primary/10">
          <span className="text-xs font-mono text-primary">{t.tech.aiNative.title}</span>
          <p className="text-sm text-muted mt-2">{t.tech.aiNative.desc}</p>
        </motion.div>
      </Section>

      <div className="section-divider" />

      {/* ═══════ CONTACT ═══════ */}
      <Section id="contact" className="pb-32">
        <div className="text-center max-w-lg mx-auto">
          <span className="text-xs font-mono text-primary tracking-wider">{t.contact.section}</span>
          <h2 className="text-3xl font-bold mt-2 mb-4">{t.contact.letsChat}</h2>
          <p className="text-sm text-muted mb-8">{t.contact.openTo}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="mailto:sedatirtas.1@gmail.com" className="btn-shine px-6 py-3 bg-primary text-white rounded-xl text-sm hover:bg-primary-light transition-all">sedatirtas.1@gmail.com</a>
            <a href="https://github.com/irtassedat/agentforge" target="_blank" className="px-6 py-3 glass rounded-xl text-sm hover:border-primary/30 transition-all">View AgentForge &rarr;</a>
          </div>
        </div>
      </Section>

      <footer className="py-8 px-6 text-center"><p className="text-xs text-muted/40">{t.footer.built}</p></footer>
    </main>
  );
}
