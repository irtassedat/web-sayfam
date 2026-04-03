"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, MouseEvent } from "react";
import { useLang } from "@/lib/i18n";

type Category = "all" | "platform" | "data" | "bot" | "ai";

interface ProjectBase {
  tags: string[];
  category: Category[];
  color: string;
  github?: string[];
  live?: string;
  featured?: boolean;
}

const projectBases: ProjectBase[] = [
  {
    tags: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "Tailwind CSS"],
    category: ["platform"],
    color: "#f59e0b",
    github: ["https://github.com/irtassedat/qrmenu-frontend", "https://github.com/irtassedat/qrmenu-backend"],
    live: "https://qr.sebastianlogic.com/menu/29",
    featured: true,
  },
  {
    tags: ["React", "Java", "Spring Boot", "JPA", "PostgreSQL", "Redux"],
    category: ["platform"],
    color: "#ef4444",
    github: ["https://github.com/irtassedat/ecommerce", "https://github.com/irtassedat/ecommerce-backendAPI"],
  },
  {
    tags: ["Next.js 16", "TypeScript", "Framer Motion", "Tailwind CSS"],
    category: ["platform"],
    color: "#0ea5e9",
    github: ["https://github.com/irtassedat/turkerler-portfolio"],
  },
  { tags: ["Python", "Node.js", "Yandex SEO", "Nginx", "Cloudflare"], category: ["data", "ai"], color: "#84cc16" },
  {
    tags: ["TypeScript", "Fastify", "Next.js", "WebSocket", "Vitest", "Docker"],
    category: ["ai"],
    color: "#a855f7",
    featured: true,
    github: ["https://github.com/irtassedat/agentforge"],
    live: "https://dashboard-rust-chi-93.vercel.app",
  },
  { tags: ["Python", "WebSocket", "Redis", "PostgreSQL", "Docker"], category: ["data"], color: "#6366f1", featured: true },
  { tags: ["Python", "Isolation Forest", "ML", "FastAPI"], category: ["data", "ai"], color: "#8b5cf6" },
  { tags: ["TypeScript", "REST API", "Playwright", "Docker"], category: ["data"], color: "#10b981" },
  { tags: ["React", "Node.js", "PostgreSQL", "Redis", "Docker Compose", "Nginx"], category: ["platform", "bot"], color: "#14b8a6" },
  { tags: ["Node.js", "Telegram API", "Cron", "Docker"], category: ["bot"], color: "#06b6d4" },
  { tags: ["Python", "FastAPI", "Telethon", "Docker Compose", "SQLite"], category: ["bot", "data", "ai"], color: "#ec4899", featured: true },
];

function ProjectCard({ base, text, index }: {
  base: ProjectBase;
  text: { title: string; desc: string; longDesc: string; metrics: string };
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    cardRef.current.style.setProperty("--rx", `${(y - 0.5) * -6}deg`);
    cardRef.current.style.setProperty("--ry", `${(x - 0.5) * 6}deg`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--rx", "0deg");
    cardRef.current.style.setProperty("--ry", "0deg");
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      layout
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setExpanded(!expanded)}
      className={`card-glow rounded-2xl p-5 cursor-pointer relative ${base.featured ? "sm:col-span-2" : ""}`}
      style={{
        transform: "perspective(800px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
        transition: "transform 0.2s ease-out, border-color 0.4s, box-shadow 0.4s",
        willChange: "transform",
        zIndex: 1,
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: base.color, boxShadow: `0 0 12px ${base.color}40` }} />
          <h3 className="font-semibold text-sm sm:text-base">{text.title}</h3>
          {base.github && (
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-green/10 text-green border border-green/20 font-medium">
              Open Source
            </span>
          )}
          {base.live && (
            <a href={base.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-1 text-[9px] px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20 font-medium hover:bg-accent/20 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
              Live
            </a>
          )}
        </div>
        <span className="text-[10px] px-3 py-1 rounded-full shrink-0 ml-2 font-medium" style={{ backgroundColor: base.color + "12", color: base.color }}>
          {text.metrics}
        </span>
      </div>

      <p className="text-xs text-muted leading-relaxed mb-3 ml-5">{text.desc}</p>

      {/* Expanded */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-3 ml-5"
          >
            <div className="p-4 rounded-xl bg-background/60 border border-border/30">
              <p className="text-xs text-foreground/50 leading-relaxed font-mono">{text.longDesc}</p>
              {base.github && (
                <div className="mt-3 pt-3 border-t border-border/30 flex flex-wrap gap-2">
                  {base.github.map((url) => (
                    <a key={url} href={url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-light hover:bg-primary/10 text-[11px] text-muted hover:text-primary transition-colors border border-border/50 hover:border-primary/30">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                      {url.split("/").pop()}
                    </a>
                  ))}
                </div>
              )}
              {base.live && base.live.includes("sebastianlogic") && (
                <div className="mt-4 pt-4 border-t border-border/30">
                  <p className="text-[10px] text-muted/60 uppercase tracking-wider font-semibold mb-3">Canli Demo</p>
                  <div className="flex justify-center">
                    <div className="relative mx-auto w-[200px] h-[400px] rounded-[2rem] border-[6px] border-foreground/20 bg-black shadow-2xl overflow-hidden">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-foreground/20 rounded-b-xl z-10" />
                      <iframe
                        src={base.live}
                        className="w-[390px] h-[844px] origin-top-left border-0"
                        style={{ transform: "scale(0.4835)", transformOrigin: "top left" }}
                        title="QR Menu Live Demo"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 ml-5">
        {base.tags.map((tag) => (
          <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-surface-light text-muted/60 border border-border/30 hover:border-primary/20 hover:text-primary/60 transition-colors">
            {tag}
          </span>
        ))}
      </div>

      {/* Expand hint */}
      <div className="mt-2.5 ml-5 flex items-center gap-1.5">
        <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }} className="text-muted/30">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </motion.span>
        <span className="text-[10px] text-muted/30">{expanded ? t.projects.collapseHint : t.projects.expandHint}</span>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useLang();
  const [active, setActive] = useState<Category>("all");

  const projectItems = t.projects.items.map((text, i) => ({ text, base: projectBases[i] }));
  const filtered = active === "all" ? projectItems : projectItems.filter((p) => p.base.category.includes(active));

  return (
    <section id="projects" className="py-28 px-4 relative">
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
          <span className="text-xs font-mono text-primary tracking-wider">{t.projects.section}</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 tracking-tight">
            {t.projects.titleA}<span className="text-gradient">{t.projects.titleB}</span>
          </h2>
          <p className="text-sm text-muted mt-3 max-w-lg mx-auto">{t.projects.subtitle}</p>
        </motion.div>

        {/* Filter */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-2 mb-10">
          {t.projects.categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key as Category)}
              className={`px-4 py-2 text-xs rounded-lg transition-all duration-300 ${
                active === c.key ? "bg-primary text-white shadow-lg shadow-primary/20" : "glass text-muted hover:text-foreground"
              }`}
            >
              {c.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProjectCard key={p.text.title} base={p.base} text={p.text} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-6 text-center">
          <p className="text-[11px] text-muted/40">{t.projects.note}</p>
        </motion.div>
      </div>
    </section>
  );
}
