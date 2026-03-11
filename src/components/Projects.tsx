"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, MouseEvent } from "react";

type Category = "all" | "platform" | "data" | "bot" | "ai";

interface Project {
  title: string;
  desc: string;
  longDesc: string;
  tags: string[];
  category: Category[];
  metrics: string;
  color: string;
  github?: string[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "AI Ajan Orkestrasyon Sistemi",
    desc: "60+ uzman ajanin koordineli calismasini saglayan enterprise orkestrasyon platformu. Self-learning, fault-tolerant consensus ve vector memory ile donatilmis.",
    longDesc: "Enterprise AI ajan orkestrasyon sistemi. Self-learning yetenegi, fault-tolerant consensus mekanizmasi, vector memory ve MCP (Model Context Protocol) entegrasyonu. Swarm intelligence ile coklu ajan koordinasyonu saglar. TypeScript tabanli CLI araci, plugin mimarisi, dagitik gorev yonetimi. Her ajan kendi uzmanlik alaninda otonom calisirken, koordinasyon katmani tum sistemin tutarli kalmasini garantiler.",
    tags: ["TypeScript", "Claude AI", "MCP", "Swarm Intelligence", "Vector DB"],
    category: ["ai"],
    metrics: "60+ Ajan",
    color: "#a855f7",
    featured: true,
  },
  {
    title: "Gercek Zamanli Veri Isleme Platformu",
    desc: "20+ kaynaktan yuksek hacimli veri toplama, normalizasyon ve anlik anomali tespit sistemi. Dakikada 10K+ veri noktasi analiz kapasitesi.",
    longDesc: "20+ farkli kaynaktan gelen yuksek hacimli verileri toplar, normalize eder ve gercek zamanli olarak isler. WebSocket tabanli canli veri akisi, Redis cache katmani ve PostgreSQL persistent storage ile calisan distributed pipeline. Anomali tespit algoritmalari sayesinde normal disi davranislar milisaniyeler icinde belirlenir. Horizontal scaling destegi ile artan yuk altinda bile performans korunur.",
    tags: ["Python", "WebSocket", "Redis", "PostgreSQL", "Docker"],
    category: ["data"],
    metrics: "10K+ veri/dk",
    color: "#6366f1",
    featured: true,
  },
  {
    title: "Pattern Recognition & Risk Motoru",
    desc: "Davranis kaliplarini cok parametreli analiz eden, otomatik risk skoru ureten hibrit motor. %95 tespit orani, %2 false positive.",
    longDesc: "Kullanici davranislarini cok parametreli olarak analiz eder, anomali tespit eder ve otomatik risk skoru uretir. Kural tabanli motor + ML tabanli pattern matching hibrit yaklasim kullanir. Esik degerleri dinamik olarak ayarlanir, sistem kendi kendine ogrenme kapasitesine sahiptir. Detayli loglama ve audit trail ile tam izlenebilirlik saglar.",
    tags: ["Python", "Pattern Matching", "ML", "FastAPI", "MongoDB"],
    category: ["data", "ai"],
    metrics: "%95 Tespit",
    color: "#8b5cf6",
  },
  {
    title: "Cok Kaynakli API Agregasyon Platformu",
    desc: "30+ API kaynagindan paralel veri toplama, normalizasyon ve karsilastirmali analiz pipeline'i.",
    longDesc: "Farkli formatlardaki 30+ API kaynagindan verileri paralel olarak ceker, normalize eder ve birlesik bir veritabaninda depolar. Rate limiting, exponential backoff retry mekanizmasi, circuit breaker pattern ve veri tutarlilik kontrolu icerir. Karsilastirmali analiz raporlari otomatik olusturulur. Yeni kaynak eklemek plugin sistemi sayesinde dakikalar icerisinde mumkundur.",
    tags: ["TypeScript", "REST API", "Puppeteer", "Playwright", "Docker"],
    category: ["data"],
    metrics: "30+ Kaynak",
    color: "#10b981",
  },
  {
    title: "Tahmin Analitik Platformu",
    desc: "React frontend, Node.js backend, Supabase DB ve Telegram bot entegrasyonlu full-stack analiz ve puan sistemi.",
    longDesc: "Gercek zamanli veri analizi ve tahmin platformu. React/Vite ile responsive frontend, Express.js ile RESTful backend, Supabase ile veritabani yonetimi. Telegram bot entegrasyonu ile mobil erisim. Docker Compose ile production deployment, Nginx reverse proxy, SSL sertifikasi. Puan sistemi, liderlik tablosu, detayli istatistik paneli ve trend analizi modulleri.",
    tags: ["React", "Node.js", "Supabase", "Telegram Bot", "Docker", "Nginx"],
    category: ["platform", "bot"],
    metrics: "Full-Stack + Bot",
    color: "#14b8a6",
  },
  {
    title: "Otonom Izleme & Alert Sistemi",
    desc: "7/24 otonom calisan, coklu kaynak tarayan ve kosullu bildirim gonderen akilli bot altyapisi.",
    longDesc: "Telegram tabanli otonom izleme sistemi. Belirlenen kaynaklari periyodik olarak tarar, veri degisikliklerini tespit eder, kosullara gore anlik veya zamanlanmis bildirimler gonderir. Cron job yonetimi, hata toleransi ve otomatik yeniden baslama mekanizmasi. Gunluk ve haftalik ozet raporlama modulu. Watchdog sureci ile sistemin surekli ayakta kalmasini garanti eder.",
    tags: ["Node.js", "Telegram API", "Cron", "MongoDB", "Docker"],
    category: ["bot"],
    metrics: "7/24 Aktif",
    color: "#06b6d4",
  },
  {
    title: "Topluluk Yonetim Bot Ekosistemi",
    desc: "Uye yonetimi, otomatik icerik paylasimi, yonetim komutlari ve analitik dashboard iceren multi-bot sistemi.",
    longDesc: "Birden fazla Telegram botundan olusan ekosistem: uye kayit/dogrulama botu, otomatik icerik paylasim botu (autopost), yonetim komutlari, analitik dashboard (Flask/Streamlit). Docker Compose ile orkestrasyon, SQLite/PostgreSQL veri katmani. Export/import modulleri ile veri tasima, scheduled posting ve icerik kuyruk yonetimi.",
    tags: ["Python", "Flask", "Telegram API", "Docker Compose", "Streamlit"],
    category: ["bot"],
    metrics: "Multi-bot",
    color: "#ec4899",
  },
  {
    title: "SEO Otomasyon & Rank Takip",
    desc: "Programatik icerik uretimi, anahtar kelime izleme, rakip analizi ve teknik SEO otomasyon araci. #1 siralama basarisi.",
    longDesc: "Hedef anahtar kelimelerde siralama takibi, rakip analizi, programatik icerik sablonlari ile toplu sayfa olusturma, teknik SEO denetim araci. Rekabetci Turkce anahtar kelimelerde #1 siralama basarisi. Otomatik raporlama, trend analizi ve SERP pozisyon degisim alarmlari. Headless browser ile dinamik sayfa analizi.",
    tags: ["Python", "Node.js", "SEO", "Puppeteer", "Analytics"],
    category: ["data", "ai"],
    metrics: "#1 Siralama",
    color: "#84cc16",
  },
  {
    title: "QR Menu Yonetim Sistemi",
    desc: "Restoran ve kafeler icin end-to-end dijital menu, siparis yonetimi ve admin paneli. Full-stack uygulama.",
    longDesc: "End-to-end restoran yonetim sistemi. React tabanli responsive frontend, Node.js/Express backend, PostgreSQL veritabani. QR kod ile menu erisimi, kategori filtreleme, urun yonetimi (CRUD), kullanici yetkilendirme (JWT), siparis takibi ve admin paneli. Masalara ozel QR kod uretimi ve anlık menu guncelleme.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "JWT"],
    category: ["platform"],
    metrics: "Full-Stack",
    color: "#f59e0b",
    github: [
      "https://github.com/irtassedat/latestv2",
      "https://github.com/irtassedat/qrmenu-backend",
    ],
  },
  {
    title: "E-Ticaret Platformu",
    desc: "React frontend + Spring Boot backend ile tam kapsamli e-ticaret uygulamasi. Redux state, JPA/Hibernate, Spring Security.",
    longDesc: "Urun katalog, arama/filtreleme, sepet yonetimi, odeme entegrasyonu, kullanici kayit/giris, siparis takibi. Backend tarafinda JPA/Hibernate ile veritabani yonetimi, Spring Security ile kimlik dogrulama, RESTful API tasarimi. Redux state management, Axios HTTP client. Responsive tasarim, urun detay sayfalari ve admin yonetim paneli.",
    tags: ["React", "Java", "Spring Boot", "JPA", "PostgreSQL", "Redux"],
    category: ["platform"],
    metrics: "React + Spring",
    color: "#ef4444",
    github: [
      "https://github.com/irtassedat/ecommerce",
      "https://github.com/irtassedat/ecommerce-backendAPI",
    ],
  },
];

const categories: { key: Category; label: string; count?: number }[] = [
  { key: "all", label: "Tum Projeler" },
  { key: "platform", label: "Full-Stack" },
  { key: "data", label: "Veri & Analiz" },
  { key: "bot", label: "Bot & Otomasyon" },
  { key: "ai", label: "AI Sistemler" },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--spotlight-x", `${x}px`);
    cardRef.current.style.setProperty("--spotlight-y", `${y}px`);
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
      onClick={() => setExpanded(!expanded)}
      className={`spotlight-card rounded-2xl p-6 cursor-pointer transition-all duration-300 glow-card ${
        project.featured ? "md:col-span-2" : ""
      }`}
      style={{
        borderColor: expanded ? project.color + "30" : undefined,
      }}
    >
      <div className="spotlight" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div
              className="w-3 h-3 rounded-full shrink-0"
              style={{ backgroundColor: project.color, boxShadow: `0 0 12px ${project.color}40` }}
            />
            <h3 className="font-semibold text-sm sm:text-base">{project.title}</h3>
          </div>
          <span
            className="text-[10px] px-3 py-1 rounded-full shrink-0 ml-3 font-medium"
            style={{ backgroundColor: project.color + "12", color: project.color }}
          >
            {project.metrics}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-muted leading-relaxed mb-4 ml-6">
          {project.desc}
        </p>

        {/* Expanded detail */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-4 ml-6"
            >
              <div className="p-4 rounded-xl bg-background/60 border border-border/30">
                <p className="text-xs text-foreground/50 leading-relaxed">{project.longDesc}</p>

                {/* GitHub links */}
                {project.github && project.github.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-border/30 flex flex-wrap gap-2">
                    {project.github.map((url) => {
                      const repoName = url.split("/").pop();
                      return (
                        <a
                          key={url}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-light hover:bg-primary/10 text-[11px] text-muted hover:text-primary transition-colors border border-border/50 hover:border-primary/30"
                        >
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                          {repoName}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 ml-6">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-[10px] px-2.5 py-0.5 rounded-full bg-surface-light text-muted/60 border border-border/30"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Expand hint */}
        <div className="mt-3 ml-6 flex items-center gap-1.5">
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-muted/30"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.span>
          <span className="text-[10px] text-muted/30">
            {expanded ? "Daralt" : "Detaylar ve kaynak kodu"}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all" ? projects : projects.filter((p) => p.category.includes(active));

  return (
    <section id="projects" className="py-28 px-4 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="text-xs font-mono text-primary tracking-wider">PROJELER</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 tracking-tight">
            Gelistirdigim <span className="text-gradient">Sistemler</span>
          </h2>
          <p className="text-sm text-muted mt-3 max-w-lg mx-auto">
            Veri isleme motorlarindan AI ajan sistemlerine, full-stack platformlardan
            otomasyon botlarina kadar uretim ortaminda calisan projeler.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-5 py-2 text-xs rounded-xl transition-all duration-300 ${
                active === c.key
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "glass text-muted hover:text-foreground"
              }`}
            >
              {c.label}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-[11px] text-muted/40">
            Bazi projeler ozel gelistirme surecinde oldugundan kaynak kodu paylasilamamaktadir.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
