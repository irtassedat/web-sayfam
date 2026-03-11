"use client";
import { motion } from "framer-motion";
import { useState } from "react";

type Category = "all" | "platform" | "data" | "bot" | "ai";

interface Project {
  title: string;
  desc: string;
  longDesc: string;
  tags: string[];
  category: Category[];
  metrics: string;
  color: string;
}

const projects: Project[] = [
  {
    title: "Gercek Zamanli Veri Isleme Platformu",
    desc: "Cok kaynakli veri toplama, normalizasyon ve anlik anomali tespit sistemi.",
    longDesc: "20+ farkli kaynaktan gelen yuksek hacimli verileri toplar, normalize eder ve gercek zamanli olarak isler. Dakikada 10K+ veri noktasi analiz edilir. WebSocket tabanli canli veri akisi, Redis cache katmani ve PostgreSQL persistent storage ile calisan distributed pipeline.",
    tags: ["Python", "WebSocket", "Redis", "PostgreSQL", "Docker"],
    category: ["data"],
    metrics: "10K+ veri noktasi/dk",
    color: "#6366f1",
  },
  {
    title: "Pattern Recognition & Risk Skorlama Motoru",
    desc: "Davranis kaliplarini analiz eden ve otomatik risk skoru ureten akilli motor.",
    longDesc: "Kullanici davranislarini cok parametreli olarak analiz eder, anomali tespit eder ve otomatik risk skoru uretir. Kural tabanli motor + ML tabanli pattern matching hibrit yaklasim. Esik degerleri dinamik olarak ayarlanir. %95 tespit orani, %2 false positive.",
    tags: ["Python", "Pattern Matching", "ML", "FastAPI", "MongoDB"],
    category: ["data", "ai"],
    metrics: "%95 tespit orani",
    color: "#8b5cf6",
  },
  {
    title: "Otonom Izleme & Alert Bot Sistemi",
    desc: "7/24 otonom calisan, coklu kaynak tarayan ve anlik bildirim gonderen bot altyapisi.",
    longDesc: "Telegram tabanli otonom izleme sistemi. Belirlenen kaynaklari periyodik olarak tarar, veri degisikliklerini tespit eder, kosullara gore anlik veya zamanlanmis bildirimler gonderir. Cron job yonetimi, hata toleransi ve otomatik yeniden baslama mekanizmasi. Gunluk/haftalik ozet raporlama modulu.",
    tags: ["Node.js", "Telegram API", "Cron", "MongoDB", "Docker"],
    category: ["bot"],
    metrics: "7/24 kesintisiz",
    color: "#06b6d4",
  },
  {
    title: "Cok Kaynakli API Agregasyon Platformu",
    desc: "30+ API kaynagindan veri toplayip birlestiren ve karsilastirma yapan pipeline.",
    longDesc: "Farkli formatlardaki 30+ API kaynagindan verileri paralel olarak ceker, normalize eder ve birlesik bir veritabaninda depolar. Rate limiting, retry mekanizmasi, hata yonetimi ve veri tutarlilik kontrolu icerir. Karsilastirmali analiz raporlari otomatik olusturulur.",
    tags: ["TypeScript", "REST API", "Puppeteer", "Playwright", "Docker"],
    category: ["data"],
    metrics: "30+ API kaynak",
    color: "#10b981",
  },
  {
    title: "QR Menu Yonetim Sistemi",
    desc: "Restoran ve kafeler icin dijital menu ve siparis yonetim platformu.",
    longDesc: "End-to-end restoran yonetim sistemi. React tabanli responsive frontend, Node.js/Express backend, PostgreSQL veritabani. QR kod ile menu erisimi, kategori filtreleme, urun yonetimi (CRUD), kullanici yetkilendirme (JWT), siparis takibi ve admin paneli.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "JWT"],
    category: ["platform"],
    metrics: "Full-Stack",
    color: "#f59e0b",
  },
  {
    title: "E-Ticaret Platformu",
    desc: "React frontend + Spring Boot backend ile tam kapsamli e-ticaret uygulamasi.",
    longDesc: "Urun katalog, arama/filtreleme, sepet yonetimi, odeme entegrasyonu, kullanici kayit/giris, siparis takibi. Backend tarafinda JPA/Hibernate ile veritabani yonetimi, Spring Security ile kimlik dogrulama, RESTful API tasarimi. Redux state management, Axios HTTP client.",
    tags: ["React", "Java", "Spring Boot", "JPA", "PostgreSQL", "Redux"],
    category: ["platform"],
    metrics: "React + Spring Boot",
    color: "#ef4444",
  },
  {
    title: "Topluluk Yonetim Bot Ekosistemi",
    desc: "Uye yonetimi, otomatik icerik paylasimi ve analitik dashboard iceren bot ailesi.",
    longDesc: "Birden fazla Telegram botundan olusan ekosistem: uye kayit/dogrulama botu, otomatik icerik paylasim botu (autopost), yonetim komutlari, analitik dashboard (Flask/Streamlit). Docker Compose ile orkestrasyon, SQLite/PostgreSQL veri katmani. Export/import modulleri.",
    tags: ["Python", "Flask", "Telegram API", "Docker Compose", "Dashboard"],
    category: ["bot"],
    metrics: "Multi-bot ekosistem",
    color: "#ec4899",
  },
  {
    title: "Tahmin Analitik Platformu",
    desc: "Full-stack analiz platformu: React frontend, Node.js backend, Supabase, Telegram bot.",
    longDesc: "Gercek zamanli veri analizi ve tahmin platformu. React/Vite frontend, Express.js backend, Supabase veritabani, Telegram bot entegrasyonu. Docker Compose ile production deployment, Nginx reverse proxy, SSL. Puan sistemi, liderlik tablosu, detayli istatistik paneli.",
    tags: ["React", "Node.js", "Supabase", "Telegram Bot", "Docker", "Nginx"],
    category: ["platform", "bot"],
    metrics: "Full-Stack + Bot",
    color: "#14b8a6",
  },
  {
    title: "SEO Otomasyon & Rank Takip Sistemi",
    desc: "Programatik icerik uretimi, anahtar kelime izleme ve teknik SEO otomasyon araci.",
    longDesc: "Hedef anahtar kelimelerde siralama takibi, rakip analizi, programatik icerik sablonlari ile toplu sayfa olusturma, teknik SEO denetim araci. Rekabetci Turkce anahtar kelimelerde #1 siralama basarisi. Otomatik raporlama ve trend analizi.",
    tags: ["Python", "Node.js", "SEO", "Puppeteer", "Analytics"],
    category: ["data", "ai"],
    metrics: "#1 Siralama",
    color: "#84cc16",
  },
  {
    title: "AI Ajan Orkestrasyon Sistemi (Ruflo)",
    desc: "Claude Code icin 60+ uzman ajanin koordineli calismasini saglayan orkestrasyon platformu.",
    longDesc: "Enterprise AI ajan orkestrasyon sistemi. Self-learning, fault-tolerant consensus, vector memory ve MCP entegrasyonu. Swarm intelligence ile coklu ajan koordinasyonu. TypeScript tabanli CLI araci, plugin mimarisi, dagitik gorev yonetimi.",
    tags: ["TypeScript", "Claude AI", "MCP", "Swarm", "Vector DB"],
    category: ["ai"],
    metrics: "60+ Ajan",
    color: "#a855f7",
  },
];

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "Tumu" },
  { key: "platform", label: "Full-Stack" },
  { key: "data", label: "Veri & Analiz" },
  { key: "bot", label: "Bot & Otomasyon" },
  { key: "ai", label: "AI Sistemler" },
];

export default function Projects() {
  const [active, setActive] = useState<Category>("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = active === "all" ? projects : projects.filter((p) => p.category.includes(active));

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-xs font-mono text-primary tracking-wider">PROJELER</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 tracking-tight">
            Gelistirdigim <span className="text-gradient">Sistemler</span>
          </h2>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-4 py-1.5 text-xs rounded-full border transition-all ${
                active === c.key
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted hover:border-primary/30"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              layout
              className="group p-5 rounded-xl bg-surface border border-border hover:border-opacity-50 transition-all cursor-pointer"
              style={{ borderColor: expanded === p.title ? p.color + "40" : undefined }}
              onClick={() => setExpanded(expanded === p.title ? null : p.title)}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
                  <h3 className="font-semibold text-sm">{p.title}</h3>
                </div>
                <span className="text-[9px] px-2 py-0.5 rounded-full shrink-0 ml-2" style={{ backgroundColor: p.color + "15", color: p.color }}>
                  {p.metrics}
                </span>
              </div>

              <p className="text-xs text-muted leading-relaxed mb-3">{p.desc}</p>

              {/* Expanded */}
              {expanded === p.title && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-3 p-3 rounded-lg bg-background/50 border border-border/30"
                >
                  <p className="text-[11px] text-foreground/50 leading-relaxed">{p.longDesc}</p>
                </motion.div>
              )}

              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-surface-light text-muted/70">{t}</span>
                ))}
              </div>

              <div className="mt-2 text-[9px] text-muted/30">
                {expanded === p.title ? "Daralt" : "Detay icin tikla"}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
