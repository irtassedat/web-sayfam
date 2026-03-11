"use client";

import { motion } from "framer-motion";
import { useRef, MouseEvent } from "react";

/* ── Marquee data ── */
const marqueeRow1 = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Java",
  "Spring Boot", "Express.js", "FastAPI", "Tailwind CSS", "Redux",
  "Framer Motion", "PostgreSQL", "MongoDB", "Redis",
];

const marqueeRow2 = [
  "Docker", "Supabase", "WebSocket", "REST API", "GraphQL", "JWT",
  "Puppeteer", "Playwright", "Telegram API", "Claude AI", "MCP",
  "Git", "Nginx", "Linux", "Vercel",
];

/* ── Skill categories with detail ── */
const skillCategories = [
  {
    title: "Frontend Gelistirme",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    color: "#6366f1",
    skills: [
      { name: "React / Next.js", level: "Ileri" },
      { name: "TypeScript", level: "Ileri" },
      { name: "Tailwind CSS", level: "Ileri" },
      { name: "Framer Motion", level: "Orta-Ileri" },
      { name: "Redux / Zustand", level: "Orta-Ileri" },
      { name: "Responsive Design", level: "Ileri" },
    ],
  },
  {
    title: "Backend & API",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    color: "#10b981",
    skills: [
      { name: "Node.js / Express", level: "Ileri" },
      { name: "Python / FastAPI", level: "Ileri" },
      { name: "Java / Spring Boot", level: "Orta-Ileri" },
      { name: "REST API Design", level: "Ileri" },
      { name: "WebSocket", level: "Ileri" },
      { name: "Microservices", level: "Orta-Ileri" },
    ],
  },
  {
    title: "Veri & Altyapi",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    color: "#06b6d4",
    skills: [
      { name: "PostgreSQL", level: "Ileri" },
      { name: "MongoDB", level: "Ileri" },
      { name: "Redis", level: "Orta-Ileri" },
      { name: "Docker / Compose", level: "Ileri" },
      { name: "Supabase", level: "Orta-Ileri" },
      { name: "Nginx / Deployment", level: "Orta-Ileri" },
    ],
  },
  {
    title: "AI & Otomasyon",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    color: "#a855f7",
    skills: [
      { name: "Claude AI / MCP", level: "Ileri" },
      { name: "Telegram Bot API", level: "Ileri" },
      { name: "Puppeteer / Playwright", level: "Ileri" },
      { name: "Pattern Matching", level: "Orta-Ileri" },
      { name: "Swarm Intelligence", level: "Orta-Ileri" },
      { name: "Cron & Scheduling", level: "Ileri" },
    ],
  },
];

function SkillCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      className="spotlight-card rounded-2xl p-6"
    >
      <div className="spotlight" />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: category.color + "15", color: category.color }}
          >
            {category.icon}
          </div>
          <h3 className="text-sm font-semibold">{category.title}</h3>
        </div>
        <div className="space-y-2.5">
          {category.skills.map((skill) => (
            <div key={skill.name} className="flex items-center justify-between">
              <span className="text-xs text-foreground/70">{skill.name}</span>
              <span
                className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                style={{
                  backgroundColor: skill.level === "Ileri" ? category.color + "15" : "rgba(255,255,255,0.03)",
                  color: skill.level === "Ileri" ? category.color : "var(--muted)",
                }}
              >
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-2">
      <div
        className="flex gap-3 whitespace-nowrap"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${items.length * 3}s linear infinite`,
          width: "max-content",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="px-4 py-2 rounded-xl glass text-xs text-muted/70 font-mono hover:text-primary hover:border-primary/20 transition-colors cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="tech" className="py-28 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-20" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-xs font-mono text-primary tracking-wider">TEKNOLOJILER</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 tracking-tight">
            Teknik <span className="text-gradient">Yetkinlikler</span>
          </h2>
        </motion.div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <MarqueeRow items={marqueeRow1} />
          <MarqueeRow items={marqueeRow2} reverse />
        </motion.div>

        {/* Skill Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} category={cat} index={i} />
          ))}
        </div>

        {/* Industry awareness */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 spotlight-card rounded-2xl p-6"
        >
          <div className="spotlight" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Surekli Ogrenme & Endustri Takibi</h3>
                <p className="text-[11px] text-muted">Guncel kalarak en yeni teknolojileri projelerime entegre ediyorum</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                {
                  label: "AI & LLM Ekosistemi",
                  items: "Claude AI, MCP Protokolu, Ajan Orkestrasyonu, RAG, Vector DB, Prompt Engineering",
                },
                {
                  label: "Modern Web & Cloud",
                  items: "Next.js App Router, Server Components, Edge Runtime, Serverless, Vercel, Docker Swarm",
                },
                {
                  label: "Veri & Otomasyon",
                  items: "Event-Driven Mimari, CQRS, Real-time Streaming, CI/CD Pipeline, Monitoring & Alerting",
                },
              ].map((area) => (
                <div key={area.label} className="p-3 rounded-xl bg-surface-light/50 border border-border/30">
                  <h4 className="text-[11px] font-semibold text-primary mb-1.5">{area.label}</h4>
                  <p className="text-[10px] text-muted/60 leading-relaxed">{area.items}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
