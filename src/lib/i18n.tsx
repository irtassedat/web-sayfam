"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "tr" | "en" | "it";

const dict = {
  tr: {
    nav: { about: "Hakkımda", projects: "Projeler", tech: "Teknolojiler", contact: "İletişim" },
    hero: {
      firstName: "Sedat",
      lastName: "İrtaş",
      roles: ["Full-Stack Geliştirici", "AI Sistem Mühendisi", "Veri Pipeline Mimarı", "Otomasyon Uzmanı"],
      desc: "Gerçek zamanlı veri işlemeden otonom AI ajanlara, ölçeklenebilir full-stack platformlardan akıllı otomasyon sistemlerine kadar üretim seviyesinde yazılımlar geliştiriyorum.",
      cta: { projects: "Projelerimi İncele", github: "GitHub", linkedin: "LinkedIn" },
      stats: [
        { n: "13+", l: "Üretim Projesi" },
        { n: "6+", l: "Bot & Otomasyon" },
        { n: "30+", l: "API Entegrasyonu" },
        { n: "3", l: "Full-Stack Platform" },
      ],
    },
    about: {
      section: "HAKKIMDA",
      titleA: "Kim ",
      titleB: "Olduğum",
      bio: "Endüstri Mühendisliği altyapımdan gelen sistematik düşünce ve optimizasyon becerileriyle, yazılım mühendisliğinde üretim seviyesinde sistemler kuruyorum. Full-stack web geliştirmeden otonom AI ajan orkestrasyonuna, gerçek zamanlı veri pipeline'larından akıllı otomasyon botlarına kadar geniş bir yelpazede projeler geliştirdim. Her projede ölçeklenebilirlik, güvenilirlik ve performansı ön planda tutuyorum.",
      name: "Sedat İrtaş",
      role: "Endüstri Mühendisi & Yazılım Geliştirici",
      statusAvailable: "Müsait",
      location: "Antalya, Türkiye",
      locationDesc: "Remote pozisyonlara öncelikli olarak başvuruyorum. Doğru fırsat için taşınmaya açığım.",
      prefLabel: "Tercih",
      prefs: ["Remote", "Taşınabilir", "Freelance"],
      eduTitle: "EĞİTİM",
      edu: [
        { title: "Endüstri Mühendisliği", sub: "Lisans Derecesi", desc: "Analitik düşünce, optimizasyon, süreç modelleme, istatistiksel analiz" },
        { title: "Full-Stack Web Development", sub: "Workintech Bootcamp", desc: "React, Node.js, Java/Spring Boot, SQL, REST API" },
      ],
      numbersTitle: "RAKAMLAR",
      numbers: [
        { n: "13+", l: "Üretim\nProjesi" },
        { n: "30+", l: "API\nEntegrasyonu" },
        { n: "10K+", l: "Veri Noktası\n/ Dakika" },
        { n: "60+", l: "AI Ajan\nOrkestrasyonu" },
      ],
      focusTitle: "GÜNCEL ODAK",
      focus: [
        { title: "Otonom AI Ajan Sistemleri", desc: "MCP protokolü, swarm intelligence, çoklu ajan koordinasyonu" },
        { title: "Gerçek Zamanlı Veri İşleme", desc: "Event-driven mimariler, WebSocket, streaming pipeline" },
        { title: "Dağıtık Sistemler", desc: "Docker orkestrasyon, mikroservis, fault-tolerant tasarım" },
      ],
    },
    projects: {
      section: "PROJELER",
      titleA: "Geliştirdiğim ",
      titleB: "Sistemler",
      subtitle: "Veri işleme motorlarından AI ajan sistemlerine, full-stack platformlardan otomasyon botlarına kadar üretim ortamında çalışan projeler.",
      categories: [
        { key: "all", label: "Tüm Projeler" },
        { key: "platform", label: "Full-Stack" },
        { key: "data", label: "Veri & Analiz" },
        { key: "bot", label: "Bot & Otomasyon" },
        { key: "ai", label: "AI Sistemler" },
      ],
      items: [
        {
          title: "QR Menü Yönetim Sistemi",
          desc: "8+ marka, 10+ şube, sadakat programı ve tema motoru ile multi-tenant restoran yönetim platformu.",
          longDesc: "Multi-tenant SaaS restoran yönetim sistemi. 8+ marka ve 10+ şubeyi tek panelden yönetme. React/Vite frontend (27 component, 20 sayfa), Express.js backend (21 API modülü, 176+ endpoint), PostgreSQL (25+ tablo, 12 migration). JWT + bcrypt auth, RBAC yetkilendirme (super_admin/brand_manager/branch_manager). Menü ve fiyat şablonları, tema motoru (renk/font/bileşen), sadakat programı (puan/kampanya/ödül), garson çağırma sistemi, Excel import/export, QR kod ile mobil menü erişimi. Canlı: qr.sebastianlogic.com",
          metrics: "8+ Marka",
        },
        {
          title: "E-Ticaret Platformu",
          desc: "React frontend + Spring Boot backend ile tam kapsamlı e-ticaret uygulaması.",
          longDesc: "Ürün katalog, arama/filtreleme, sepet yönetimi, ödeme entegrasyonu, kullanıcı kayıt/giriş, sipariş takibi. Backend: JPA/Hibernate, Spring Security, RESTful API. Frontend: Redux state management, responsive tasarım.",
          metrics: "React + Spring",
        },
        {
          title: "Enerji Yönetim Portfolyosu",
          desc: "Türkerler Holding için yenilenebilir enerji operasyonları ve AI tabanlı yönetim vizyonu.",
          longDesc: "Next.js 16 ve TypeScript ile geliştirilmiş interaktif portfolyo. Canvas grid animasyonları, Framer Motion geçişleri, GitHub API entegrasyonu ile canlı proje verileri. 120+ MW rüzgar, hidro ve jeotermal santral verileri. EPDK pazar analizi, rakip konumlandırma, finansal içgörüler. Vercel ile production deployment. Canlı: turkerler-portfolio.vercel.app",
          metrics: "Next.js 16",
        },
        {
          title: "SEO Otomasyon & Arama Motoru Optimizasyonu",
          desc: "Coğrafi kısıtlamalı pazarda Yandex arama motorunda #1 sıralama. Programatik içerik üretimi ve teknik SEO.",
          longDesc: "Yandex arama motorunda rekabetçi Türkçe anahtar kelimelerde #1 organik sıralama başarısı — coğrafi kısıtlamalara rağmen. Nginx + Cloudflare reverse proxy altyapısı, Yandex Webmaster doğrulaması, programatik içerik şablonları ile ölçeklenebilir sayfa üretimi. VPS üzerinde Docker deployment, SSL/TLS sertifika yönetimi, Tailscale mesh VPN ile güvenli uzaktan yönetim. Otomatik raporlama ve sıralama trend analizi.",
          metrics: "#1 Yandex",
        },
        {
          title: "AI Ajan Orkestrasyon Sistemi",
          desc: "60+ uzman ajanın koordineli çalışmasını sağlayan enterprise orkestrasyon platformu. Self-learning, fault-tolerant consensus ve vector memory ile donatılmış.",
          longDesc: "Enterprise AI ajan orkestrasyon sistemi. Self-learning yeteneği, fault-tolerant consensus mekanizması, vector memory ve MCP (Model Context Protocol) entegrasyonu. Swarm intelligence ile çoklu ajan koordinasyonu sağlar. TypeScript tabanlı CLI aracı, plugin mimarisi, dağıtık görev yönetimi. Her ajan kendi uzmanlık alanında otonom çalışırken, koordinasyon katmanı tüm sistemin tutarlı kalmasını garantiler.",
          metrics: "60+ Ajan",
        },
        {
          title: "Gerçek Zamanlı Veri İşleme Platformu",
          desc: "20+ kaynaktan yüksek hacimli veri toplama, normalizasyon ve anlık anomali tespit sistemi. Dakikada 10K+ veri noktası analiz kapasitesi.",
          longDesc: "20+ farklı kaynaktan gelen yüksek hacimli verileri toplar, normalize eder ve gerçek zamanlı olarak işler. WebSocket tabanlı canlı veri akışı, Redis cache katmanı ve PostgreSQL persistent storage ile çalışan distributed pipeline. Anomali tespit algoritmaları sayesinde normal dışı davranışlar milisaniyeler içinde belirlenir.",
          metrics: "10K+ veri/dk",
        },
        {
          title: "Pattern Recognition & Risk Motoru",
          desc: "Davranış kalıplarını çok parametreli analiz eden, otomatik risk skoru üreten hibrit motor. %95 tespit oranı.",
          longDesc: "Kullanıcı davranışlarını çok parametreli olarak analiz eder, anomali tespit eder ve otomatik risk skoru üretir. Kural tabanlı motor + ML tabanlı pattern matching hibrit yaklaşım kullanır. Eşik değerleri dinamik olarak ayarlanır, sistem kendi kendine öğrenme kapasitesine sahiptir.",
          metrics: "%95 Tespit",
        },
        {
          title: "Çok Kaynaklı API Agregasyon Platformu",
          desc: "30+ API kaynağından paralel veri toplama, normalizasyon ve karşılaştırmalı analiz pipeline'ı.",
          longDesc: "Farklı formatlardaki 30+ API kaynağından verileri paralel olarak çeker, normalize eder ve birleşik bir veritabanında depolar. Rate limiting, exponential backoff retry mekanizması, circuit breaker pattern ve veri tutarlılık kontrolü içerir.",
          metrics: "30+ Kaynak",
        },
        {
          title: "Tahmin & Analitik Platformu",
          desc: "4 Docker container'lı full-stack analitik platform. React frontend, Node.js backend, PostgreSQL ve Redis ile gerçek zamanlı tahmin sistemi.",
          longDesc: "React frontend, Node.js RESTful backend, PostgreSQL 16 veritabanı ve Redis 7 cache katmanından oluşan containerized analitik platform. Docker Compose ile orkestrasyon, tüm servisler health check ile izleniyor. Nginx reverse proxy, Cloudflare entegrasyonu, 365 gün cache optimizasyonu. Lineer regresyon tabanlı büyüme tahminleri, trend analizi ve günlük metrik toplama.",
          metrics: "4 Container",
        },
        {
          title: "Otonom İzleme & Alert Sistemi",
          desc: "7/24 otonom çalışan, çoklu kaynak tarayan ve koşullu bildirim gönderen akıllı bot altyapısı.",
          longDesc: "Telegram tabanlı otonom izleme sistemi. Belirlenen kaynakları periyodik olarak tarar, veri değişikliklerini tespit eder, koşullara göre anlık veya zamanlanmış bildirimler gönderir. Cron job yönetimi, hata toleransı ve otomatik yeniden başlama mekanizması.",
          metrics: "7/24 Aktif",
        },
        {
          title: "Topluluk Yönetim & Otomasyon Platformu",
          desc: "12K+ satır Python, 4 Docker microservice, FastAPI admin dashboard, adaptif ML skorlama ve içerik zekası motoru.",
          longDesc: "Microservice mimaride 4 Docker container'dan oluşan platform: (1) FastAPI admin dashboard - RBAC, gerçek zamanlı SSE event streaming, 10+ route modülü; (2) İçerik otomasyon motoru - APScheduler ile marka bazlı cron yönetimi, 5 içerik tipi rotasyonu, A/B test altyapısı, emoji varyasyon üretimi; (3) Üye kalite analizi - Telethon tabanlı, adaptif keyword-weighted ML skorlama, saatlik strateji optimizasyonu, otomatik grup keşfi; (4) Doğrulama sistemi. Multi-brand SaaS mimarisi, SQLite WAL mode, lineer regresyon büyüme tahminleri, audit logging. Dakikada otomatik health check ve self-healing container yönetimi.",
          metrics: "12K+ Satır",
        },
      ],
      expandHint: "Detaylar ve kaynak kodu",
      collapseHint: "Daralt",
      sourceCode: "Kaynak Kodu",
      note: "Bazı projeler özel geliştirme sürecinde olduğundan kaynak kodu paylaşılamamaktadır.",
    },
    tech: {
      section: "TEKNOLOJİLER",
      titleA: "Teknik ",
      titleB: "Yetkinlikler",
      categories: [
        { title: "Frontend Geliştirme", skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux / Zustand", "Responsive Design"] },
        { title: "Backend & API", skills: ["Node.js / Express", "Python / FastAPI", "Java / Spring Boot", "REST API Design", "WebSocket", "Microservices"] },
        { title: "Veri & Altyapı", skills: ["PostgreSQL", "MongoDB / SQLite", "Redis", "Docker / Compose", "Tailscale / VPN", "Nginx / Cloudflare"] },
        { title: "AI & Otomasyon", skills: ["Claude AI / MCP", "Telegram Bot API / Telethon", "Puppeteer / Playwright", "ML Scoring / Pattern Matching", "Swarm Intelligence", "APScheduler / Cron"] },
      ],
      awarenessTitle: "Sürekli Öğrenme & Endüstri Takibi",
      awarenessSub: "Güncel kalarak en yeni teknolojileri projelerime entegre ediyorum",
      areas: [
        { label: "AI & LLM Ekosistemi", items: "Claude AI, MCP Protokolü, Ajan Orkestrasyonu, RAG, Vector DB, Prompt Engineering" },
        { label: "Modern Web & Cloud", items: "Next.js App Router, Server Components, Edge Runtime, Serverless, Vercel, Docker Swarm" },
        { label: "Veri & Otomasyon", items: "Event-Driven Mimari, CQRS, Real-time Streaming, CI/CD Pipeline, Monitoring & Alerting" },
      ],
    },
    contact: {
      section: "İLETİŞİM",
      titleA: "Birlikte ",
      titleB: "Çalışalım",
      subtitle: "Yeni projeler, teknik görüşmeler veya iş birliği fırsatları için bana ulaşabilirsiniz.",
      github: "Açık kaynak projelerim",
      linkedin: "Profesyonel ağım",
      email: "Doğrudan iletişim",
      socialLabels: { github: "GitHub", linkedin: "LinkedIn", email: "E-posta" },
      availableTitle: "Yeni fırsatlara açığım",
      availableSub: "Remote, freelance veya danışmanlık",
    },
    footer: {
      built: "Next.js + Tailwind CSS + Framer Motion ile tasarlandı",
      copyright: "© 2026 Sedat İrtaş. Tüm hakları saklıdır.",
    },
  },

  en: {
    nav: { about: "About", projects: "Projects", tech: "Technologies", contact: "Contact" },
    hero: {
      firstName: "Sedat",
      lastName: "Irtas",
      roles: ["Full-Stack Developer", "AI Systems Engineer", "Data Pipeline Architect", "Automation Specialist"],
      desc: "I build production-grade software — from real-time data processing to autonomous AI agents, from scalable full-stack platforms to intelligent automation systems.",
      cta: { projects: "View Projects", github: "GitHub", linkedin: "LinkedIn" },
      stats: [
        { n: "13+", l: "Production Projects" },
        { n: "6+", l: "Bots & Automation" },
        { n: "30+", l: "API Integrations" },
        { n: "3", l: "Full-Stack Platforms" },
      ],
    },
    about: {
      section: "ABOUT",
      titleA: "Who ",
      titleB: "I Am",
      bio: "With a foundation in Industrial Engineering — systematic thinking, optimization, and process modeling — I build production-grade software systems. From full-stack web development to autonomous AI agent orchestration, from real-time data pipelines to intelligent automation bots. Every project prioritizes scalability, reliability, and performance.",
      name: "Sedat Irtas",
      role: "Industrial Engineer & Software Developer",
      statusAvailable: "Available",
      location: "Antalya, Turkey",
      locationDesc: "Primarily seeking remote positions. Open to relocation for the right opportunity.",
      prefLabel: "Preference",
      prefs: ["Remote", "Relocatable", "Freelance"],
      eduTitle: "EDUCATION",
      edu: [
        { title: "Industrial Engineering", sub: "Bachelor's Degree", desc: "Analytical thinking, optimization, process modeling, statistical analysis" },
        { title: "Full-Stack Web Development", sub: "Workintech Bootcamp", desc: "React, Node.js, Java/Spring Boot, SQL, REST API" },
      ],
      numbersTitle: "NUMBERS",
      numbers: [
        { n: "13+", l: "Production\nProjects" },
        { n: "30+", l: "API\nIntegrations" },
        { n: "10K+", l: "Data Points\n/ Minute" },
        { n: "60+", l: "AI Agent\nOrchestration" },
      ],
      focusTitle: "CURRENT FOCUS",
      focus: [
        { title: "Autonomous AI Agent Systems", desc: "MCP protocol, swarm intelligence, multi-agent coordination" },
        { title: "Real-Time Data Processing", desc: "Event-driven architectures, WebSocket, streaming pipelines" },
        { title: "Distributed Systems", desc: "Docker orchestration, microservices, fault-tolerant design" },
      ],
    },
    projects: {
      section: "PROJECTS",
      titleA: "Systems I've ",
      titleB: "Built",
      subtitle: "From data processing engines to AI agent systems, from full-stack platforms to automation bots — production-ready projects.",
      categories: [
        { key: "all", label: "All Projects" },
        { key: "platform", label: "Full-Stack" },
        { key: "data", label: "Data & Analytics" },
        { key: "bot", label: "Bots & Automation" },
        { key: "ai", label: "AI Systems" },
      ],
      items: [
        {
          title: "QR Menu Management System",
          desc: "Multi-tenant restaurant platform managing 8+ brands, 10+ branches with loyalty program and theme engine.",
          longDesc: "Multi-tenant SaaS restaurant management system. 8+ brands and 10+ branches from a single admin panel. React/Vite frontend (27 components, 20 pages), Express.js backend (21 API modules, 176+ endpoints), PostgreSQL (25+ tables, 12 migrations). JWT + bcrypt auth, RBAC (super_admin/brand_manager/branch_manager). Menu & price templates, theme engine (color/font/component), loyalty program (points/campaigns/rewards), waiter call system, Excel import/export, mobile QR menu. Live: qr.sebastianlogic.com",
          metrics: "8+ Brands",
        },
        {
          title: "E-Commerce Platform",
          desc: "Full-scope e-commerce application with React frontend and Spring Boot backend.",
          longDesc: "Product catalog, search/filtering, cart management, payment integration, user registration/login, order tracking. Backend: JPA/Hibernate, Spring Security, RESTful API. Frontend: Redux state management, responsive design.",
          metrics: "React + Spring",
        },
        {
          title: "Energy Management Portfolio",
          desc: "Interactive showcase for Turkerler Holding's renewable energy operations and AI-powered management vision.",
          longDesc: "Built with Next.js 16 and TypeScript. Canvas grid animations, Framer Motion transitions, GitHub API integration for live project data. 120+ MW wind, hydro, and geothermal plant data. EPDK market analysis, competitor positioning, financial insights. Production deployment on Vercel. Live: turkerler-portfolio.vercel.app",
          metrics: "Next.js 16",
        },
        {
          title: "SEO Automation & Search Engine Optimization",
          desc: "Achieved #1 Yandex ranking in geo-restricted market. Programmatic content generation and technical SEO.",
          longDesc: "#1 organic ranking on Yandex for competitive Turkish keywords — despite geographic restrictions. Nginx + Cloudflare reverse proxy infrastructure, Yandex Webmaster verification, programmatic content templates for scalable page generation. VPS Docker deployment, SSL/TLS certificate management, Tailscale mesh VPN for secure remote management. Automated reporting and ranking trend analysis.",
          metrics: "#1 Yandex",
        },
        {
          title: "AI Agent Orchestration System",
          desc: "Enterprise orchestration platform coordinating 60+ specialized agents. Self-learning, fault-tolerant consensus, and vector memory.",
          longDesc: "Enterprise AI agent orchestration system. Self-learning capability, fault-tolerant consensus mechanism, vector memory and MCP (Model Context Protocol) integration. Multi-agent coordination through swarm intelligence. TypeScript-based CLI tool, plugin architecture, distributed task management.",
          metrics: "60+ Agents",
        },
        {
          title: "Real-Time Data Processing Platform",
          desc: "High-volume data collection from 20+ sources with normalization and real-time anomaly detection. 10K+ data points per minute.",
          longDesc: "Collects, normalizes, and processes high-volume data from 20+ different sources in real-time. WebSocket-based live data streaming, Redis cache layer, and PostgreSQL persistent storage in a distributed pipeline. Anomaly detection algorithms identify irregular behavior within milliseconds.",
          metrics: "10K+ data/min",
        },
        {
          title: "Pattern Recognition & Risk Engine",
          desc: "Hybrid engine analyzing behavioral patterns with multi-parameter analysis and automatic risk scoring. 95% detection rate.",
          longDesc: "Analyzes user behaviors with multi-parameter analysis, detects anomalies, and generates automatic risk scores. Uses a hybrid approach combining rule-based engine with ML-based pattern matching. Dynamic threshold adjustment with self-learning capability.",
          metrics: "95% Detection",
        },
        {
          title: "Multi-Source API Aggregation Platform",
          desc: "Parallel data collection, normalization, and comparative analysis pipeline from 30+ API sources.",
          longDesc: "Pulls data in parallel from 30+ API sources in different formats, normalizes and stores in a unified database. Includes rate limiting, exponential backoff retry, circuit breaker pattern, and data consistency checks.",
          metrics: "30+ Sources",
        },
        {
          title: "Predictive Analytics Platform",
          desc: "4 Docker container full-stack analytics platform. React frontend, Node.js backend, PostgreSQL and Redis for real-time predictions.",
          longDesc: "Containerized analytics platform: React frontend, Node.js RESTful backend, PostgreSQL 16 database, Redis 7 cache layer. Docker Compose orchestration with health checks on all services. Nginx reverse proxy, Cloudflare integration, 365-day cache optimization. Linear regression-based growth predictions, trend analysis, and daily metric collection.",
          metrics: "4 Containers",
        },
        {
          title: "Autonomous Monitoring & Alert System",
          desc: "24/7 autonomous operation, multi-source scanning, and conditional notification bot infrastructure.",
          longDesc: "Telegram-based autonomous monitoring system. Periodically scans designated sources, detects data changes, sends instant or scheduled notifications based on conditions. Cron job management, fault tolerance, and automatic restart mechanism.",
          metrics: "24/7 Active",
        },
        {
          title: "Community Management & Automation Platform",
          desc: "12K+ lines Python, 4 Docker microservices, FastAPI admin dashboard, adaptive ML scoring, and content intelligence engine.",
          longDesc: "Microservice platform with 4 Docker containers: (1) FastAPI admin dashboard — RBAC, real-time SSE event streaming, 10+ route modules; (2) Content automation engine — APScheduler per-brand cron management, 5 content type rotation, A/B testing, emoji variation generation; (3) Member quality analysis — Telethon-based adaptive keyword-weighted ML scoring, hourly strategy optimization, automated group discovery; (4) Verification system. Multi-brand SaaS architecture, SQLite WAL mode, linear regression growth predictions, audit logging. Auto health checks with self-healing container management.",
          metrics: "12K+ Lines",
        },
      ],
      expandHint: "Details & source code",
      collapseHint: "Collapse",
      sourceCode: "Source Code",
      note: "Some projects are in private development and source code cannot be shared.",
    },
    tech: {
      section: "TECHNOLOGIES",
      titleA: "Technical ",
      titleB: "Expertise",
      categories: [
        { title: "Frontend Development", skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux / Zustand", "Responsive Design"] },
        { title: "Backend & API", skills: ["Node.js / Express", "Python / FastAPI", "Java / Spring Boot", "REST API Design", "WebSocket", "Microservices"] },
        { title: "Data & Infrastructure", skills: ["PostgreSQL", "MongoDB / SQLite", "Redis", "Docker / Compose", "Tailscale / VPN", "Nginx / Cloudflare"] },
        { title: "AI & Automation", skills: ["Claude AI / MCP", "Telegram Bot API / Telethon", "Puppeteer / Playwright", "ML Scoring / Pattern Matching", "Swarm Intelligence", "APScheduler / Cron"] },
      ],
      awarenessTitle: "Continuous Learning & Industry Tracking",
      awarenessSub: "Staying current and integrating the latest technologies into my projects",
      areas: [
        { label: "AI & LLM Ecosystem", items: "Claude AI, MCP Protocol, Agent Orchestration, RAG, Vector DB, Prompt Engineering" },
        { label: "Modern Web & Cloud", items: "Next.js App Router, Server Components, Edge Runtime, Serverless, Vercel, Docker Swarm" },
        { label: "Data & Automation", items: "Event-Driven Architecture, CQRS, Real-time Streaming, CI/CD Pipeline, Monitoring & Alerting" },
      ],
    },
    contact: {
      section: "CONTACT",
      titleA: "Let's Work ",
      titleB: "Together",
      subtitle: "Reach out for new projects, technical discussions, or collaboration opportunities.",
      github: "Open source projects",
      linkedin: "Professional network",
      email: "Direct contact",
      socialLabels: { github: "GitHub", linkedin: "LinkedIn", email: "Email" },
      availableTitle: "Open to new opportunities",
      availableSub: "Remote, freelance, or consulting",
    },
    footer: {
      built: "Designed with Next.js + Tailwind CSS + Framer Motion",
      copyright: "© 2026 Sedat Irtas. All rights reserved.",
    },
  },

  it: {
    nav: { about: "Chi Sono", projects: "Progetti", tech: "Tecnologie", contact: "Contatti" },
    hero: {
      firstName: "Sedat",
      lastName: "Irtas",
      roles: ["Sviluppatore Full-Stack", "Ingegnere Sistemi AI", "Architetto Data Pipeline", "Specialista Automazione"],
      desc: "Sviluppo software di livello produttivo — dall'elaborazione dati in tempo reale agli agenti AI autonomi, dalle piattaforme full-stack scalabili ai sistemi di automazione intelligente.",
      cta: { projects: "Vedi Progetti", github: "GitHub", linkedin: "LinkedIn" },
      stats: [
        { n: "13+", l: "Progetti Produzione" },
        { n: "6+", l: "Bot & Automazione" },
        { n: "30+", l: "Integrazioni API" },
        { n: "3", l: "Piattaforme Full-Stack" },
      ],
    },
    about: {
      section: "CHI SONO",
      titleA: "Chi ",
      titleB: "Sono",
      bio: "Con una base in Ingegneria Industriale — pensiero sistematico, ottimizzazione e modellazione dei processi — costruisco sistemi software di livello produttivo. Dallo sviluppo web full-stack all'orchestrazione di agenti AI autonomi, dalle pipeline dati in tempo reale ai bot di automazione intelligente. Ogni progetto da priorita a scalabilita, affidabilita e prestazioni.",
      name: "Sedat Irtas",
      role: "Ingegnere Industriale & Sviluppatore Software",
      statusAvailable: "Disponibile",
      location: "Antalya, Turchia",
      locationDesc: "Cerco principalmente posizioni remote. Aperto al trasferimento per l'opportunita giusta.",
      prefLabel: "Preferenza",
      prefs: ["Remoto", "Trasferibile", "Freelance"],
      eduTitle: "FORMAZIONE",
      edu: [
        { title: "Ingegneria Industriale", sub: "Laurea Triennale", desc: "Pensiero analitico, ottimizzazione, modellazione processi, analisi statistica" },
        { title: "Sviluppo Web Full-Stack", sub: "Workintech Bootcamp", desc: "React, Node.js, Java/Spring Boot, SQL, REST API" },
      ],
      numbersTitle: "NUMERI",
      numbers: [
        { n: "13+", l: "Progetti\nProduzione" },
        { n: "30+", l: "Integrazioni\nAPI" },
        { n: "10K+", l: "Dati\n/ Minuto" },
        { n: "60+", l: "Orchestrazione\nAgenti AI" },
      ],
      focusTitle: "FOCUS ATTUALE",
      focus: [
        { title: "Sistemi Agenti AI Autonomi", desc: "Protocollo MCP, swarm intelligence, coordinamento multi-agente" },
        { title: "Elaborazione Dati Tempo Reale", desc: "Architetture event-driven, WebSocket, streaming pipeline" },
        { title: "Sistemi Distribuiti", desc: "Orchestrazione Docker, microservizi, design fault-tolerant" },
      ],
    },
    projects: {
      section: "PROGETTI",
      titleA: "Sistemi ",
      titleB: "Sviluppati",
      subtitle: "Dai motori di elaborazione dati ai sistemi di agenti AI, dalle piattaforme full-stack ai bot di automazione — progetti pronti per la produzione.",
      categories: [
        { key: "all", label: "Tutti i Progetti" },
        { key: "platform", label: "Full-Stack" },
        { key: "data", label: "Dati & Analisi" },
        { key: "bot", label: "Bot & Automazione" },
        { key: "ai", label: "Sistemi AI" },
      ],
      items: [
        {
          title: "Sistema Gestione Menu QR",
          desc: "Piattaforma multi-tenant per ristoranti: 8+ marchi, 10+ sedi, programma fedelta e motore temi.",
          longDesc: "Sistema SaaS multi-tenant. 8+ marchi e 10+ sedi da un unico pannello. Frontend React/Vite (27 componenti, 20 pagine), backend Express.js (21 moduli API, 176+ endpoint), PostgreSQL (25+ tabelle, 12 migrazioni). Auth JWT + bcrypt, RBAC. Template menu e prezzi, motore temi, programma fedelta, sistema chiamata cameriere, import/export Excel, menu QR mobile. Live: qr.sebastianlogic.com",
          metrics: "8+ Marchi",
        },
        {
          title: "Piattaforma E-Commerce",
          desc: "Applicazione e-commerce completa con frontend React e backend Spring Boot.",
          longDesc: "Catalogo prodotti, ricerca/filtro, gestione carrello, integrazione pagamenti, registrazione/login utente, tracking ordini. Backend: JPA/Hibernate, Spring Security, API RESTful. Frontend: Redux state management, design responsive.",
          metrics: "React + Spring",
        },
        {
          title: "Portfolio Gestione Energia",
          desc: "Showcase interattivo per le operazioni di energia rinnovabile di Turkerler Holding e visione gestione AI.",
          longDesc: "Costruito con Next.js 16 e TypeScript. Animazioni canvas grid, transizioni Framer Motion, integrazione GitHub API per dati progetto live. Dati impianti eolici, idro e geotermici 120+ MW. Analisi mercato EPDK, posizionamento competitor. Deploy Vercel. Live: turkerler-portfolio.vercel.app",
          metrics: "Next.js 16",
        },
        {
          title: "Automazione SEO & Ottimizzazione Motori Ricerca",
          desc: "#1 ranking Yandex in mercato geo-ristretto. Generazione contenuti programmatica e SEO tecnico.",
          longDesc: "#1 ranking organico Yandex per keyword competitive turche nonostante restrizioni geografiche. Infrastruttura Nginx + Cloudflare, verifica Yandex Webmaster, template contenuti programmatici. Deploy Docker su VPS, gestione certificati SSL/TLS, Tailscale mesh VPN. Reporting automatico e analisi trend ranking.",
          metrics: "#1 Yandex",
        },
        {
          title: "Sistema Orchestrazione Agenti AI",
          desc: "Piattaforma enterprise che coordina 60+ agenti specializzati. Self-learning, consenso fault-tolerant e memoria vettoriale.",
          longDesc: "Sistema orchestrazione AI enterprise. Self-learning, consenso fault-tolerant, memoria vettoriale e integrazione MCP. Coordinamento multi-agente tramite swarm intelligence. CLI TypeScript, architettura plugin, gestione distribuita task.",
          metrics: "60+ Agenti",
        },
        {
          title: "Piattaforma Elaborazione Dati Real-Time",
          desc: "Raccolta dati ad alto volume da 20+ fonti con normalizzazione e rilevamento anomalie. 10K+ punti dati/min.",
          longDesc: "Raccoglie, normalizza ed elabora dati da 20+ fonti in tempo reale. Streaming WebSocket, cache Redis, storage PostgreSQL in pipeline distribuita.",
          metrics: "10K+ dati/min",
        },
        {
          title: "Motore Pattern Recognition & Rischio",
          desc: "Motore ibrido con analisi multi-parametro e scoring automatico del rischio. 95% rilevamento.",
          longDesc: "Analizza comportamenti utente, rileva anomalie, genera punteggi rischio automatici. Approccio ibrido: regole + ML pattern matching. Soglie dinamiche con auto-apprendimento.",
          metrics: "95% Rilevamento",
        },
        {
          title: "Piattaforma Aggregazione API Multi-Sorgente",
          desc: "Raccolta parallela, normalizzazione e analisi comparativa da 30+ fonti API.",
          longDesc: "Estrae dati in parallelo da 30+ fonti API, normalizza e archivia in database unificato. Rate limiting, retry backoff esponenziale, circuit breaker, controlli coerenza.",
          metrics: "30+ Fonti",
        },
        {
          title: "Piattaforma Analisi Predittiva",
          desc: "4 container Docker full-stack. React frontend, Node.js backend, PostgreSQL e Redis per previsioni real-time.",
          longDesc: "Piattaforma analitica containerizzata: React frontend, Node.js backend, PostgreSQL 16, Redis 7 cache. Orchestrazione Docker Compose con health check. Nginx reverse proxy, Cloudflare, cache 365 giorni. Previsioni crescita regressione lineare, analisi trend.",
          metrics: "4 Container",
        },
        {
          title: "Sistema Monitoraggio & Alert Autonomo",
          desc: "Operazione autonoma 24/7, scansione multi-sorgente e notifiche condizionali.",
          longDesc: "Sistema monitoraggio Telegram autonomo. Scansione periodica fonti, rilevamento cambiamenti, notifiche istantanee o programmate. Gestione cron job, tolleranza errori, riavvio automatico.",
          metrics: "24/7 Attivo",
        },
        {
          title: "Piattaforma Gestione & Automazione Comunita",
          desc: "12K+ righe Python, 4 microservizi Docker, dashboard FastAPI, scoring ML adattivo e motore content intelligence.",
          longDesc: "Piattaforma microservizi con 4 container Docker: (1) Dashboard admin FastAPI con RBAC, SSE real-time, 10+ moduli route; (2) Motore automazione contenuti con APScheduler, rotazione 5 tipi, A/B testing; (3) Analisi qualita membri con scoring ML adattivo Telethon; (4) Sistema verifica. Architettura SaaS multi-brand, SQLite WAL, previsioni crescita, audit logging. Health check automatici con self-healing.",
          metrics: "12K+ Righe",
        },
      ],
      expandHint: "Dettagli e codice sorgente",
      collapseHint: "Comprimi",
      sourceCode: "Codice Sorgente",
      note: "Alcuni progetti sono in sviluppo privato e il codice sorgente non puo essere condiviso.",
    },
    tech: {
      section: "TECNOLOGIE",
      titleA: "Competenze ",
      titleB: "Tecniche",
      categories: [
        { title: "Sviluppo Frontend", skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux / Zustand", "Responsive Design"] },
        { title: "Backend & API", skills: ["Node.js / Express", "Python / FastAPI", "Java / Spring Boot", "REST API Design", "WebSocket", "Microservices"] },
        { title: "Dati & Infrastruttura", skills: ["PostgreSQL", "MongoDB / SQLite", "Redis", "Docker / Compose", "Tailscale / VPN", "Nginx / Cloudflare"] },
        { title: "AI & Automazione", skills: ["Claude AI / MCP", "Telegram Bot API / Telethon", "Puppeteer / Playwright", "ML Scoring / Pattern Matching", "Swarm Intelligence", "APScheduler / Cron"] },
      ],
      awarenessTitle: "Apprendimento Continuo & Monitoraggio Settore",
      awarenessSub: "Rimango aggiornato e integro le ultime tecnologie nei miei progetti",
      areas: [
        { label: "Ecosistema AI & LLM", items: "Claude AI, Protocollo MCP, Orchestrazione Agenti, RAG, Vector DB, Prompt Engineering" },
        { label: "Web Moderno & Cloud", items: "Next.js App Router, Server Components, Edge Runtime, Serverless, Vercel, Docker Swarm" },
        { label: "Dati & Automazione", items: "Architettura Event-Driven, CQRS, Real-time Streaming, Pipeline CI/CD, Monitoring & Alerting" },
      ],
    },
    contact: {
      section: "CONTATTI",
      titleA: "Lavoriamo ",
      titleB: "Insieme",
      subtitle: "Contattami per nuovi progetti, discussioni tecniche o opportunita di collaborazione.",
      github: "Progetti open source",
      linkedin: "Network professionale",
      email: "Contatto diretto",
      socialLabels: { github: "GitHub", linkedin: "LinkedIn", email: "E-mail" },
      availableTitle: "Aperto a nuove opportunita",
      availableSub: "Remoto, freelance o consulenza",
    },
    footer: {
      built: "Progettato con Next.js + Tailwind CSS + Framer Motion",
      copyright: "© 2026 Sedat Irtas. Tutti i diritti riservati.",
    },
  },
};

type Dict = typeof dict;
type Translations = Dict[Lang];

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangContextType>({
  lang: "tr",
  setLang: () => {},
  t: dict.tr,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("tr");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-lang") as Lang | null;
    if (saved && dict[saved]) setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("portfolio-lang", l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
