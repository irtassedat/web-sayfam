"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "tr" | "en" | "it";

const dict = {
  tr: {
    nav: { about: "Hakkımda", projects: "Projeler", tech: "Teknolojiler", contact: "İletişim" },
    hero: {
      firstName: "Sedat",
      lastName: "İrtaş",
      roles: ["Full-Stack Developer", "Backend Developer", "DevOps & Infrastructure", "Building with AI"],
      desc: "Gerçek zamanlı veri işlemeden otonom AI ajanlara, ölçeklenebilir full-stack platformlardan akıllı otomasyon sistemlerine kadar üretim seviyesinde yazılımlar geliştiriyorum.",
      cta: { projects: "Projelerimi İncele", github: "GitHub", linkedin: "LinkedIn" },
      stats: [
        { n: "12+", l: "Üretim Projesi" },
        { n: "6+", l: "Bot & Otomasyon" },
        { n: "400+", l: "API Endpoint" },
        { n: "3", l: "Full-Stack Platform" },
      ],
    },
    about: {
      section: "HAKKIMDA",
      titleA: "Kim ",
      titleB: "Olduğum",
      bio: "Endüstri Mühendisliği altyapımdan gelen sistematik düşünce ve optimizasyon becerileriyle, yazılım mühendisliğinde üretim seviyesinde sistemler kuruyorum. Full-stack web geliştirmeden otonom AI ajan orkestrasyonuna, gerçek zamanlı veri pipeline'larından akıllı otomasyon botlarına kadar geniş bir yelpazede projeler geliştirdim. Her projede ölçeklenebilirlik, güvenilirlik ve performansı ön planda tutuyorum.",
      name: "Sedat İrtaş",
      role: "Full-Stack Developer",
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
        { n: "12+", l: "Üretim\nProjesi" },
        { n: "400+", l: "API\nEndpoint" },
        { n: "100+", l: "Veritabanı\nModeli" },
        { n: "6", l: "Otonom\nAjan Sistemi" },
      ],
      focusTitle: "GÜNCEL ODAK",
      focus: [
        { title: "Otonom AI Ajan Sistemleri", desc: "Task queue, retry patterns, self-healing watchdog, WebSocket monitoring" },
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
          desc: "Restoran ve kafeler için end-to-end dijital menü, sipariş yönetimi ve admin paneli.",
          longDesc: "End-to-end restoran yönetim sistemi. React tabanlı responsive frontend, Node.js/Express backend, PostgreSQL veritabanı. QR kod ile menü erişimi, kategori filtreleme, ürün yönetimi, kullanıcı yetkilendirme, sipariş takibi ve admin paneli.",
          metrics: "Full-Stack",
        },
        {
          title: "E-Ticaret Platformu",
          desc: "React frontend + Spring Boot backend ile tam kapsamlı e-ticaret uygulaması.",
          longDesc: "Ürün katalog, arama/filtreleme, sepet yönetimi, ödeme entegrasyonu, kullanıcı kayıt/giriş, sipariş takibi. Backend: JPA/Hibernate, Spring Security, RESTful API. Frontend: Redux state management, responsive tasarım.",
          metrics: "React + Spring",
        },
        {
          title: "AI Ajan Orkestrasyon Sistemi",
          desc: "Otonom ajanların yaşam döngüsünü yöneten orkestrasyon platformu. Task queue, retry stratejileri, dead letter queue ve self-healing watchdog.",
          longDesc: "TypeScript monorepo ile otonom ajan orkestrasyon platformu. BaseAgent sınıfı, AgentRegistry, HttpWorker, SchedulerAgent ve WatchdogAgent. Configurable retry (fixed/linear/exponential), DLQ routing, heartbeat monitoring. Fastify REST API (13 endpoint), Next.js real-time dashboard (WebSocket), Grammy Telegram bot. CI/CD: GitHub Actions + Claude Code auto-review.",
          metrics: "6 Ajan",
        },
        {
          title: "Gerçek Zamanlı Veri İşleme Platformu",
          desc: "20+ kaynaktan yüksek hacimli veri toplama, normalizasyon ve anlık anomali tespit sistemi. Dakikada Gerçek zamanlı veri işleme kapasitesi.",
          longDesc: "20+ farklı kaynaktan gelen yüksek hacimli verileri toplar, normalize eder ve gerçek zamanlı olarak işler. WebSocket tabanlı canlı veri akışı, Redis cache katmanı ve PostgreSQL persistent storage ile çalışan distributed pipeline. Anomali tespit algoritmaları sayesinde normal dışı davranışlar milisaniyeler içinde belirlenir.",
          metrics: "Gerçek Zamanlı",
        },
        {
          title: "ML Güvenlik Modülü",
          desc: "Davranış kalıplarını çok parametreli analiz eden, otomatik risk skoru üreten hibrit motor. ML tabanlı anomali tespiti.",
          longDesc: "Kullanıcı davranışlarını çok parametreli olarak analiz eder, anomali tespit eder ve otomatik risk skoru üretir. Kural tabanlı motor + ML tabanlı pattern matching hibrit yaklaşım kullanır. Eşik değerleri dinamik olarak ayarlanır, sistem kendi kendine öğrenme kapasitesine sahiptir.",
          metrics: "ML Tabanlı",
        },
        {
          title: "Veri Toplama Pipeline",
          desc: "Çoklu API kaynağından paralel veri toplama, normalizasyon ve karşılaştırmalı analiz pipeline'ı.",
          longDesc: "Farklı formatlardaki Çoklu API kaynağından verileri paralel olarak çeker, normalize eder ve birleşik bir veritabanında depolar. Rate limiting, exponential backoff retry mekanizması, circuit breaker pattern ve veri tutarlılık kontrolü içerir.",
          metrics: "Çoklu Kaynak",
        },
        {
          title: "Tahmin Analitik Platformu",
          desc: "React frontend, Node.js backend, Supabase DB ve Telegram bot entegrasyonlu full-stack analiz ve puan sistemi.",
          longDesc: "Gerçek zamanlı veri analizi ve tahmin platformu. React/Vite ile responsive frontend, Express.js ile RESTful backend, Supabase ile veritabanı yönetimi. Telegram bot entegrasyonu ile mobil erişim. Docker Compose ile production deployment, Nginx reverse proxy.",
          metrics: "Full-Stack + Bot",
        },
        {
          title: "Otonom İzleme & Alert Sistemi",
          desc: "7/24 otonom çalışan, çoklu kaynak tarayan ve koşullu bildirim gönderen akıllı bot altyapısı.",
          longDesc: "Telegram tabanlı otonom izleme sistemi. Belirlenen kaynakları periyodik olarak tarar, veri değişikliklerini tespit eder, koşullara göre anlık veya zamanlanmış bildirimler gönderir. Cron job yönetimi, hata toleransı ve otomatik yeniden başlama mekanizması.",
          metrics: "7/24 Aktif",
        },
        {
          title: "Topluluk Yönetim Bot Ekosistemi",
          desc: "Üye yönetimi, otomatik içerik paylaşımı, yönetim komutları ve analitik dashboard içeren multi-bot sistemi.",
          longDesc: "Birden fazla Telegram botundan oluşan ekosistem: üye kayıt/doğrulama botu, otomatik içerik paylaşım botu, yönetim komutları, analitik dashboard. Docker Compose ile orkestrasyon, veri katmanı. Export/import modülleri ile veri taşıma.",
          metrics: "Multi-bot",
        },
        {
          title: "SEO Otomasyon & Sıralama Takibi",
          desc: "Programatik içerik üretimi, anahtar kelime izleme, rakip analizi ve teknik SEO otomasyon aracı.",
          longDesc: "Hedef anahtar kelimelerde sıralama takibi, rakip analizi, programatik içerik şablonları ile toplu sayfa oluşturma, teknik SEO denetim aracı. Rekabetçi Türkçe anahtar kelimelerde #1 sıralama başarısı. Otomatik raporlama ve trend analizi.",
          metrics: "#1 Sıralama",
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
        { title: "Veri & Altyapı", skills: ["PostgreSQL", "MongoDB", "Redis", "Docker / Compose", "Supabase", "Nginx / Deployment"] },
        { title: "AI & Otomasyon", skills: ["Claude AI / MCP", "Telegram Bot API", "Puppeteer / Playwright", "Pattern Matching", "Swarm Intelligence", "Cron & Scheduling"] },
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
      copyright: "© 2025 Sedat İrtaş. Tüm hakları saklıdır.",
    },
  },

  en: {
    nav: { about: "About", projects: "Projects", tech: "Technologies", contact: "Contact" },
    hero: {
      firstName: "Sedat",
      lastName: "Irtas",
      roles: ["Full-Stack Developer", "Backend Developer", "DevOps & Infrastructure", "Building with AI"],
      desc: "I build production-grade software — from real-time data processing to autonomous AI agents, from scalable full-stack platforms to intelligent automation systems.",
      cta: { projects: "View Projects", github: "GitHub", linkedin: "LinkedIn" },
      stats: [
        { n: "12+", l: "Production Projects" },
        { n: "6+", l: "Bots & Automation" },
        { n: "400+", l: "API Endpoints" },
        { n: "3", l: "Full-Stack Platforms" },
      ],
    },
    about: {
      section: "ABOUT",
      titleA: "Who ",
      titleB: "I Am",
      bio: "With a foundation in Industrial Engineering — systematic thinking, optimization, and process modeling — I build production-grade software systems. From full-stack web development to autonomous AI agent orchestration, from real-time data pipelines to intelligent automation bots. Every project prioritizes scalability, reliability, and performance.",
      name: "Sedat Irtas",
      role: "Full-Stack Developer",
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
        { n: "12+", l: "Production\nProjects" },
        { n: "400+", l: "API\nEndpoints" },
        { n: "11+", l: "Docker\nContainers" },
        { n: "6", l: "AI Agent\nOrchestration" },
      ],
      focusTitle: "CURRENT FOCUS",
      focus: [
        { title: "Autonomous AI Agent Systems", desc: "Task queue, retry patterns, self-healing watchdog, WebSocket monitoring" },
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
          desc: "End-to-end digital menu, order management, and admin panel for restaurants and cafes.",
          longDesc: "End-to-end restaurant management system. React-based responsive frontend, Node.js/Express backend, PostgreSQL database. QR code menu access, category filtering, product management, user authentication, order tracking, and admin panel.",
          metrics: "Full-Stack",
        },
        {
          title: "E-Commerce Platform",
          desc: "Full-scope e-commerce application with React frontend and Spring Boot backend.",
          longDesc: "Product catalog, search/filtering, cart management, payment integration, user registration/login, order tracking. Backend: JPA/Hibernate, Spring Security, RESTful API. Frontend: Redux state management, responsive design.",
          metrics: "React + Spring",
        },
        {
          title: "AI Agent Orchestration System",
          desc: "Agent orchestration platform managing autonomous agent lifecycles. Task queue, retry strategies, dead letter queue, and self-healing watchdog.",
          longDesc: "TypeScript monorepo for autonomous agent orchestration. BaseAgent class, AgentRegistry, HttpWorker, SchedulerAgent, and WatchdogAgent. Configurable retry (fixed/linear/exponential), DLQ routing, heartbeat monitoring. Fastify REST API (13 endpoints), Next.js real-time dashboard (WebSocket), Grammy Telegram bot. CI/CD: GitHub Actions + Claude Code auto-review.",
          metrics: "6 Agents",
        },
        {
          title: "Real-Time Data Processing Platform",
          desc: "High-volume data collection from 20+ sources with normalization and real-time anomaly detection. Real-time data processing pipeline.",
          longDesc: "Collects, normalizes, and processes high-volume data from 20+ different sources in real-time. WebSocket-based live data streaming, Redis cache layer, and PostgreSQL persistent storage in a distributed pipeline. Anomaly detection algorithms identify irregular behavior within milliseconds.",
          metrics: "Real-Time",
        },
        {
          title: "ML Security Module",
          desc: "Hybrid engine analyzing behavioral patterns with multi-parameter analysis and automatic risk scoring. ML-based anomaly detection.",
          longDesc: "Analyzes user behaviors with multi-parameter analysis, detects anomalies, and generates automatic risk scores. Uses a hybrid approach combining rule-based engine with ML-based pattern matching. Dynamic threshold adjustment with self-learning capability.",
          metrics: "ML-Based",
        },
        {
          title: "Data Collection Pipeline",
          desc: "Parallel data collection, normalization, and comparative analysis pipeline from Multiple API sources.",
          longDesc: "Pulls data in parallel from Multiple API sources in different formats, normalizes and stores in a unified database. Includes rate limiting, exponential backoff retry, circuit breaker pattern, and data consistency checks.",
          metrics: "Multi-Source",
        },
        {
          title: "Predictive Analytics Platform",
          desc: "Full-stack analytics and scoring system with React frontend, Node.js backend, Supabase DB, and Telegram bot integration.",
          longDesc: "Real-time data analysis and prediction platform. React/Vite responsive frontend, Express.js RESTful backend, Supabase database management. Telegram bot integration for mobile access. Docker Compose production deployment with Nginx reverse proxy.",
          metrics: "Full-Stack + Bot",
        },
        {
          title: "Autonomous Monitoring & Alert System",
          desc: "24/7 autonomous operation, multi-source scanning, and conditional notification bot infrastructure.",
          longDesc: "Telegram-based autonomous monitoring system. Periodically scans designated sources, detects data changes, sends instant or scheduled notifications based on conditions. Cron job management, fault tolerance, and automatic restart mechanism.",
          metrics: "24/7 Active",
        },
        {
          title: "Community Management Bot Ecosystem",
          desc: "Multi-bot system with member management, automated content sharing, admin commands, and analytics dashboard.",
          longDesc: "Ecosystem of multiple Telegram bots: member registration/verification, automated content sharing, management commands, analytics dashboard. Docker Compose orchestration, data layer. Export/import modules for data migration.",
          metrics: "Multi-bot",
        },
        {
          title: "SEO Automation & Rank Tracking",
          desc: "Programmatic content generation, keyword monitoring, competitor analysis, and technical SEO automation tool.",
          longDesc: "Keyword rank tracking, competitor analysis, bulk page creation with programmatic content templates, technical SEO audit tool. Achieved #1 ranking for competitive Turkish keywords. Automated reporting and trend analysis.",
          metrics: "#1 Ranking",
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
        { title: "Data & Infrastructure", skills: ["PostgreSQL", "MongoDB", "Redis", "Docker / Compose", "Supabase", "Nginx / Deployment"] },
        { title: "AI & Automation", skills: ["Claude AI / MCP", "Telegram Bot API", "Puppeteer / Playwright", "Pattern Matching", "Swarm Intelligence", "Cron & Scheduling"] },
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
      copyright: "© 2025 Sedat Irtas. All rights reserved.",
    },
  },

  it: {
    nav: { about: "Chi Sono", projects: "Progetti", tech: "Tecnologie", contact: "Contatti" },
    hero: {
      firstName: "Sedat",
      lastName: "Irtas",
      roles: ["Full-Stack Developer", "Backend Developer", "DevOps & Infrastructure", "Building with AI"],
      desc: "Sviluppo software di livello produttivo — dall'elaborazione dati in tempo reale agli agenti AI autonomi, dalle piattaforme full-stack scalabili ai sistemi di automazione intelligente.",
      cta: { projects: "Vedi Progetti", github: "GitHub", linkedin: "LinkedIn" },
      stats: [
        { n: "12+", l: "Progetti Produzione" },
        { n: "6+", l: "Bot & Automazione" },
        { n: "400+", l: "API Endpoints" },
        { n: "3", l: "Piattaforme Full-Stack" },
      ],
    },
    about: {
      section: "CHI SONO",
      titleA: "Chi ",
      titleB: "Sono",
      bio: "Con una base in Ingegneria Industriale — pensiero sistematico, ottimizzazione e modellazione dei processi — costruisco sistemi software di livello produttivo. Dallo sviluppo web full-stack all'orchestrazione di agenti AI autonomi, dalle pipeline dati in tempo reale ai bot di automazione intelligente. Ogni progetto da priorita a scalabilita, affidabilita e prestazioni.",
      name: "Sedat Irtas",
      role: "Full-Stack Developer",
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
        { n: "12+", l: "Progetti\nProduzione" },
        { n: "400+", l: "API\nEndpoints" },
        { n: "11+", l: "Docker\nContainers" },
        { n: "6", l: "Orchestrazione\nAgenti AI" },
      ],
      focusTitle: "FOCUS ATTUALE",
      focus: [
        { title: "Sistemi Agenti AI Autonomi", desc: "Task queue, retry patterns, self-healing watchdog, WebSocket monitoring" },
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
          desc: "Menu digitale end-to-end, gestione ordini e pannello admin per ristoranti e bar.",
          longDesc: "Sistema di gestione ristorante end-to-end. Frontend responsive React, backend Node.js/Express, database PostgreSQL. Accesso menu tramite codice QR, filtro categorie, gestione prodotti, autenticazione utente, tracking ordini e pannello admin.",
          metrics: "Full-Stack",
        },
        {
          title: "Piattaforma E-Commerce",
          desc: "Applicazione e-commerce completa con frontend React e backend Spring Boot.",
          longDesc: "Catalogo prodotti, ricerca/filtro, gestione carrello, integrazione pagamenti, registrazione/login utente, tracking ordini. Backend: JPA/Hibernate, Spring Security, API RESTful. Frontend: Redux state management, design responsive.",
          metrics: "React + Spring",
        },
        {
          title: "Sistema Orchestrazione Agenti AI",
          desc: "Piattaforma di orchestrazione agenti autonomi. Task queue, strategie di retry, dead letter queue e watchdog auto-healing.",
          longDesc: "Monorepo TypeScript per orchestrazione agenti autonomi. BaseAgent, AgentRegistry, HttpWorker, SchedulerAgent e WatchdogAgent. Retry configurabile, DLQ routing, heartbeat monitoring. Fastify REST API, Next.js dashboard real-time, Grammy Telegram bot.",
          metrics: "6 Agenti",
        },
        {
          title: "Piattaforma Elaborazione Dati Real-Time",
          desc: "Raccolta dati ad alto volume da 20+ fonti con normalizzazione e rilevamento anomalie in tempo reale. Pipeline di elaborazione dati in tempo reale.",
          longDesc: "Raccoglie, normalizza ed elabora dati ad alto volume da 20+ fonti diverse in tempo reale. Streaming live basato su WebSocket, layer cache Redis e storage persistente PostgreSQL in una pipeline distribuita.",
          metrics: "Tempo Reale",
        },
        {
          title: "ML Security Module",
          desc: "Motore ibrido che analizza pattern comportamentali con analisi multi-parametro e scoring automatico del rischio. Rilevamento anomalie basato su ML.",
          longDesc: "Analizza i comportamenti utente con analisi multi-parametro, rileva anomalie e genera punteggi di rischio automatici. Approccio ibrido: motore basato su regole + pattern matching basato su ML.",
          metrics: "ML-Based",
        },
        {
          title: "Piattaforma Aggregazione API Multi-Sorgente",
          desc: "Raccolta dati parallela, normalizzazione e pipeline di analisi comparativa da Molteplici fonti API.",
          longDesc: "Estrae dati in parallelo da Molteplici fonti API in formati diversi, normalizza e archivia in un database unificato. Include rate limiting, retry con backoff esponenziale, pattern circuit breaker e controlli di coerenza dati.",
          metrics: "Multi-Fonte",
        },
        {
          title: "Piattaforma Analisi Predittiva",
          desc: "Sistema full-stack di analisi e punteggio con React frontend, Node.js backend, Supabase DB e integrazione bot Telegram.",
          longDesc: "Piattaforma di analisi dati e previsione in tempo reale. Frontend responsive React/Vite, backend RESTful Express.js, gestione database Supabase. Integrazione bot Telegram per accesso mobile. Deploy Docker Compose con Nginx reverse proxy.",
          metrics: "Full-Stack + Bot",
        },
        {
          title: "Sistema Monitoraggio & Alert Autonomo",
          desc: "Operazione autonoma 24/7, scansione multi-sorgente e infrastruttura bot per notifiche condizionali.",
          longDesc: "Sistema di monitoraggio autonomo basato su Telegram. Scansiona periodicamente le fonti designate, rileva cambiamenti nei dati, invia notifiche istantanee o programmate in base alle condizioni.",
          metrics: "24/7 Attivo",
        },
        {
          title: "Ecosistema Bot Gestione Comunita",
          desc: "Sistema multi-bot con gestione membri, condivisione automatica contenuti, comandi admin e dashboard analitica.",
          longDesc: "Ecosistema di piu bot Telegram: registrazione/verifica membri, condivisione automatica contenuti, comandi di gestione, dashboard analitica. Orchestrazione Docker Compose, layer dati.",
          metrics: "Multi-bot",
        },
        {
          title: "Automazione SEO & Monitoraggio Ranking",
          desc: "Generazione contenuti programmatica, monitoraggio keyword, analisi competitor e strumento automazione SEO tecnica.",
          longDesc: "Monitoraggio ranking keyword, analisi competitor, creazione pagine in blocco con template contenuti programmatici, strumento audit SEO tecnico. Raggiunto #1 ranking per keyword competitive turche.",
          metrics: "#1 Ranking",
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
        { title: "Dati & Infrastruttura", skills: ["PostgreSQL", "MongoDB", "Redis", "Docker / Compose", "Supabase", "Nginx / Deployment"] },
        { title: "AI & Automazione", skills: ["Claude AI / MCP", "Telegram Bot API", "Puppeteer / Playwright", "Pattern Matching", "Swarm Intelligence", "Cron & Scheduling"] },
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
      copyright: "© 2025 Sedat Irtas. Tutti i diritti riservati.",
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
