"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useLang } from "@/lib/i18n";

function useTypingEffect(text: string, speed = 40, delay = 0) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
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
            <span className="text-xs text-muted/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              Open Demo
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const { t } = useLang();

  const line1 = useTypingEffect("$ whoami", 60, 500);
  const line2 = useTypingEffect("sedat — full-stack developer, systems thinker, building with AI", 30, 1800);
  const line3 = useTypingEffect("$ cat journey.md", 60, 4500);

  return (
    <main className="bg-noise">
      <motion.div className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary z-[1000]" style={{ width: progressWidth }} />

      {/* ═══════ HERO ═══════ */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-aurora relative">
        <div className="beam-line" style={{ width: "35%", top: "20%", left: "5%", animationDelay: "0s" }} />
        <div className="beam-line" style={{ width: "25%", top: "70%", right: "0", left: "auto", animationDelay: "2s" }} />

        <div className="max-w-3xl w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
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
                    <p>gaming → servers → <span className="text-primary">freedom</span></p>
                    <p>industrial engineering → <span className="text-primary">systems thinking</span></p>
                    <p>AI revolution → <span className="text-accent">made the switch</span></p>
                    <p>2 years later → <span className="text-green">130K+ lines of production code</span></p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 6 }} className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-2">
              <span className="text-gradient">Sedat</span> <span className="text-foreground">İrtaş</span>
            </h1>
            <p className="text-muted text-sm mb-8">Full-Stack Developer &middot; Antalya, Turkey</p>

            <div className="flex flex-wrap justify-center gap-3 mb-16">
              <a href="https://github.com/irtassedat" target="_blank" className="px-5 py-2.5 glass rounded-xl text-sm hover:border-primary/30 transition-all flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>GitHub
              </a>
              <a href="https://www.linkedin.com/in/sedat-irta%C5%9F-04a441137/" target="_blank" className="px-5 py-2.5 glass rounded-xl text-sm hover:border-primary/30 transition-all flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>LinkedIn
              </a>
              <a href="https://dashboard-rust-chi-93.vercel.app" target="_blank" className="btn-shine px-5 py-2.5 bg-primary text-white rounded-xl text-sm hover:bg-primary-light transition-all flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green animate-pulse" />Live Demo
              </a>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {[{ n: 130, s: "K+", l: "Lines of Code" }, { n: 400, s: "+", l: "API Endpoints" }, { n: 100, s: "+", l: "DB Models" }, { n: 11, s: "+", l: "Docker Containers" }].map(stat => (
                <div key={stat.l} className="p-3 rounded-xl glass text-center">
                  <div className="text-xl font-bold text-gradient"><Counter target={stat.n} suffix={stat.s} /></div>
                  <div className="text-[9px] text-muted uppercase tracking-wider mt-1">{stat.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════ ABOUT ═══════ */}
      <Section id="about">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <span className="text-xs font-mono text-primary tracking-wider">ABOUT</span>
          <h2 className="text-3xl font-bold mt-2 mb-8">How I got here</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 text-sm text-muted leading-relaxed">
              <p>I got into computers through gaming — but I didn&apos;t just play. I dug into servers, tried to figure out how systems worked under the hood. What hooked me was the <span className="text-foreground">freedom</span> — ask a computer the right question and there&apos;s always an answer.</p>
              <p>That curiosity led me to industrial engineering. Then I watched AI change everything and realized that one person with the right tools could build what used to take entire teams. The possibilities felt <span className="text-primary">limitless</span> again.</p>
              <p>I don&apos;t just use AI — I build with it. LLMs in my CI/CD pipeline, MCP servers for tool orchestration, autonomous agents that monitor and heal themselves. <span className="text-accent">The way software gets built is changing, and I&apos;ve been building that way from the start.</span></p>
              <p className="text-foreground font-medium">Still learning. But how fast I learn is my strongest trait.</p>
            </div>
            <div className="space-y-6">
              <div className="card-glow rounded-xl p-5">
                <h3 className="text-xs font-mono text-primary mb-3">EDUCATION</h3>
                <div className="space-y-3">
                  <div><p className="font-medium text-sm">Industrial Engineering</p><p className="text-xs text-muted">Süleyman Demirel University &middot; B.Sc.</p></div>
                  <div><p className="font-medium text-sm">Full-Stack Web Development</p><p className="text-xs text-muted">Workintech Bootcamp &middot; 960 hours &middot; 78 projects</p></div>
                </div>
              </div>
              <div className="card-glow rounded-xl p-5">
                <h3 className="text-xs font-mono text-primary mb-3">CURRENT FOCUS</h3>
                <div className="space-y-2">
                  {["Autonomous Agent Architectures", "Real-Time Infrastructure (Docker, VPS)", "AI-Powered Development Workflows"].map(f => (
                    <div key={f} className="flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-green" /><span className="text-muted">{f}</span></div>
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
          <ProjectCard title={t.projects.items[2]?.title ?? "AgentForge"} description={t.projects.items[2]?.desc ?? ""} metrics="1800+ lines" tags={["TypeScript", "Fastify", "Next.js", "Redis", "WebSocket", "Docker"]} github="https://github.com/irtassedat/agentforge" live="https://dashboard-rust-chi-93.vercel.app" color="#a855f7" delay={0} />
          <ProjectCard title={t.projects.items[0]?.title ?? "QR Menu SaaS"} description={t.projects.items[0]?.desc ?? ""} metrics="12.7K lines" tags={["Node.js", "Express", "PostgreSQL", "JWT"]} github="https://github.com/irtassedat/latestv2" live="https://qr.sebastianlogic.com/menu/29" color="#f59e0b" delay={0.1} preview="/qrmenu-preview.png" />
          <ProjectCard title={t.projects.items[8]?.title ?? "Community Platform"} description={t.projects.items[8]?.desc ?? ""} metrics="64.9K lines" tags={["Fastify", "Next.js", "PostgreSQL", "Redis", "Python", "Docker"]} color="#6366f1" delay={0.2} />
          <ProjectCard title={t.projects.items[4]?.title ?? "Bot & AI Ecosystem"} description={t.projects.items[4]?.desc ?? ""} metrics="15K lines" tags={["Python", "FastAPI", "Gemini AI", "SQLite", "Telethon"]} color="#ec4899" delay={0.3} />
        </div>
      </Section>

      <div className="section-divider" />

      {/* ═══════ TECH ═══════ */}
      <Section id="tech">
        <span className="text-xs font-mono text-primary tracking-wider">TECH STACK</span>
        <h2 className="text-3xl font-bold mt-2 mb-10">Tools I use</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { c: "Backend", items: ["TypeScript", "Fastify", "Express", "Python", "FastAPI", "Java/Spring"] },
            { c: "Frontend", items: ["React 19", "Next.js 15", "Tailwind 4", "Framer Motion"] },
            { c: "Data", items: ["PostgreSQL", "Redis", "Prisma", "SQLite"] },
            { c: "Infrastructure", items: ["Docker", "Nginx", "GitHub Actions", "Cloudflare", "Linux", "WireGuard"] },
          ].map(g => (
            <motion.div key={g.c} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-glow rounded-xl p-5">
              <h3 className="text-xs font-mono text-primary mb-3">{g.c.toUpperCase()}</h3>
              <div className="space-y-1.5">{g.items.map(i => <div key={i} className="text-sm text-muted hover:text-foreground transition-colors">{i}</div>)}</div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-6 p-5 rounded-xl glass border border-primary/10">
          <span className="text-xs font-mono text-primary">AI-NATIVE WORKFLOW</span>
          <p className="text-sm text-muted mt-2">Claude Code for architecture and automated review. MCP servers for tool orchestration. Autonomous agents that monitor and heal themselves.</p>
        </motion.div>
      </Section>

      <div className="section-divider" />

      {/* ═══════ CONTACT ═══════ */}
      <Section id="contact" className="pb-32">
        <div className="text-center max-w-lg mx-auto">
          <span className="text-xs font-mono text-primary tracking-wider">CONTACT</span>
          <h2 className="text-3xl font-bold mt-2 mb-4">Let&apos;s talk</h2>
          <p className="text-sm text-muted mb-8">Open to full-stack and backend positions. Remote preferred.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="mailto:sedatirtas.1@gmail.com" className="btn-shine px-6 py-3 bg-primary text-white rounded-xl text-sm hover:bg-primary-light transition-all">sedatirtas.1@gmail.com</a>
            <a href="https://github.com/irtassedat/agentforge" target="_blank" className="px-6 py-3 glass rounded-xl text-sm hover:border-primary/30 transition-all">View AgentForge &rarr;</a>
          </div>
        </div>
      </Section>

      <footer className="py-8 px-6 text-center"><p className="text-xs text-muted/40">Built with Next.js &middot; Tailwind CSS &middot; Framer Motion</p></footer>
    </main>
  );
}
