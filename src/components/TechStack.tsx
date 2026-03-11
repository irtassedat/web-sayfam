"use client";

import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
  color: string;
}

const categories: { title: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 92, color: "#6366f1" },
      { name: "TypeScript", level: 88, color: "#3178c6" },
      { name: "Tailwind CSS", level: 90, color: "#06b6d4" },
      { name: "Framer Motion", level: 80, color: "#a855f7" },
      { name: "Redux / Zustand", level: 82, color: "#764abc" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js / Express", level: 90, color: "#10b981" },
      { name: "Python / FastAPI", level: 88, color: "#f59e0b" },
      { name: "Java / Spring Boot", level: 78, color: "#ef4444" },
      { name: "REST API Design", level: 92, color: "#6366f1" },
      { name: "WebSocket / Real-time", level: 85, color: "#06b6d4" },
    ],
  },
  {
    title: "Veri & Altyapi",
    skills: [
      { name: "PostgreSQL", level: 88, color: "#3178c6" },
      { name: "MongoDB", level: 85, color: "#10b981" },
      { name: "Redis", level: 80, color: "#ef4444" },
      { name: "Docker / Compose", level: 86, color: "#2496ed" },
      { name: "Supabase", level: 82, color: "#3ecf8e" },
    ],
  },
  {
    title: "AI & Otomasyon",
    skills: [
      { name: "Claude AI / MCP", level: 90, color: "#a855f7" },
      { name: "Telegram Bot API", level: 92, color: "#2aabee" },
      { name: "Puppeteer / Playwright", level: 88, color: "#f59e0b" },
      { name: "Pattern Matching / ML", level: 78, color: "#ec4899" },
      { name: "Cron & Scheduler", level: 90, color: "#84cc16" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-mono text-primary tracking-wider">TEKNOLOJILER</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 tracking-tight">
            Teknik <span className="text-gradient">Yetkinlikler</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              className="p-5 rounded-xl bg-surface border border-border"
            >
              <h3 className="text-sm font-semibold mb-4 text-foreground/80">{cat.title}</h3>
              <div className="space-y-3">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-muted">{skill.name}</span>
                      <span className="text-[10px] text-muted/50 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-surface-light rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: ci * 0.1 + si * 0.05, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 p-5 rounded-xl bg-surface border border-border"
        >
          <h3 className="text-sm font-semibold mb-4 text-foreground/80 text-center">Araclar & Platformlar</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Git", "GitHub", "VS Code", "Vercel", "Nginx",
              "Linux", "Postman", "Figma", "Jira", "Claude Code",
              "Docker Hub", "NPM", "PyPI", "JWT", "OAuth",
            ].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 text-[11px] rounded-full bg-surface-light text-muted/70 border border-border/50 hover:border-primary/20 hover:text-primary/70 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
