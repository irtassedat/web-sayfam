"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "tr" | "en" | "it";

const dict = {
  tr: {
    nav: { about: "Hakkimda", projects: "Projeler", tech: "Teknolojiler", contact: "Iletisim" },
    hero: {
      roles: ["Full-Stack Gelistirici", "AI Sistem Muhendisi", "Veri Pipeline Mimari", "Otomasyon Uzmani"],
      desc: "Gercek zamanli veri islemeden otonom AI ajanlara, olceklenebilir full-stack platformlardan akilli otomasyon sistemlerine kadar uretim seviyesinde yazilimlar gelistiriyorum.",
      cta: { projects: "Projelerimi Incele", github: "GitHub", linkedin: "LinkedIn" },
      stats: [
        { n: "12+", l: "Uretim Projesi" },
        { n: "6+", l: "Bot & Otomasyon" },
        { n: "30+", l: "API Entegrasyonu" },
        { n: "3", l: "Full-Stack Platform" },
      ],
    },
    about: {
      section: "HAKKIMDA",
      titleA: "Kim ",
      titleB: "Oldugum",
      bio: "Endustri Muhendisligi altyapimdan gelen sistematik dusunce ve optimizasyon becerileriyle, yazilim muhendisliginde uretim seviyesinde sistemler kuruyorum. Full-stack web gelistirmeden otonom AI ajan orkestrasyonuna, gercek zamanli veri pipeline'larindan akilli otomasyon botlarina kadar genis bir yelpazede projeler gelistirdim. Her projede olceklenebilirlik, guvenilirlik ve performansi on planda tutuyorum.",
      name: "Sedat Irtas",
      role: "Endustri Muhendisi & Yazilim Gelistirici",
      statusAvailable: "Musait",
      location: "Antalya, Turkiye",
      locationDesc: "Remote pozisyonlara oncelikli olarak basvuruyorum. Dogru firsat icin tasanmaya acigim.",
      prefLabel: "Tercih",
      prefs: ["Remote", "Tasinabilir", "Freelance"],
      eduTitle: "EGITIM",
      edu: [
        { title: "Endustri Muhendisligi", sub: "Lisans Derecesi", desc: "Analitik dusunce, optimizasyon, surec modelleme, istatistiksel analiz" },
        { title: "Full-Stack Web Development", sub: "Workintech Bootcamp", desc: "React, Node.js, Java/Spring Boot, SQL, REST API" },
      ],
      numbersTitle: "RAKAMLAR",
      numbers: [
        { n: "12+", l: "Uretim\nProjesi" },
        { n: "30+", l: "API\nEntegrasyonu" },
        { n: "10K+", l: "Veri Noktasi\n/ Dakika" },
        { n: "60+", l: "AI Ajan\nOrkestrasyonu" },
      ],
      focusTitle: "GUNCEL ODAK",
      focus: [
        { title: "Otonom AI Ajan Sistemleri", desc: "MCP protokolu, swarm intelligence, coklu ajan koordinasyonu" },
        { title: "Gercek Zamanli Veri Isleme", desc: "Event-driven mimariler, WebSocket, streaming pipeline" },
        { title: "Dagitik Sistemler", desc: "Docker orkestrasyon, mikroservis, fault-tolerant tasarim" },
      ],
    },
    projects: {
      section: "PROJELER",
      titleA: "Gelistirdigim ",
      titleB: "Sistemler",
      subtitle: "Veri isleme motorlarindan AI ajan sistemlerine, full-stack platformlardan otomasyon botlarina kadar uretim ortaminda calisan projeler.",
      categories: [
        { key: "all", label: "Tum Projeler" },
        { key: "platform", label: "Full-Stack" },
        { key: "data", label: "Veri & Analiz" },
        { key: "bot", label: "Bot & Otomasyon" },
        { key: "ai", label: "AI Sistemler" },
      ],
      items: [
        {
          title: "AI Ajan Orkestrasyon Sistemi",
          desc: "60+ uzman ajanin koordineli calismasini saglayan enterprise orkestrasyon platformu. Self-learning, fault-tolerant consensus ve vector memory ile donatilmis.",
          longDesc: "Enterprise AI ajan orkestrasyon sistemi. Self-learning yetenegi, fault-tolerant consensus mekanizmasi, vector memory ve MCP (Model Context Protocol) entegrasyonu. Swarm intelligence ile coklu ajan koordinasyonu saglar. TypeScript tabanli CLI araci, plugin mimarisi, dagitik gorev yonetimi. Her ajan kendi uzmanlik alaninda otonom calisirken, koordinasyon katmani tum sistemin tutarli kalmasini garantiler.",
          metrics: "60+ Ajan",
        },
        {
          title: "Gercek Zamanli Veri Isleme Platformu",
          desc: "20+ kaynaktan yuksek hacimli veri toplama, normalizasyon ve anlik anomali tespit sistemi. Dakikada 10K+ veri noktasi analiz kapasitesi.",
          longDesc: "20+ farkli kaynaktan gelen yuksek hacimli verileri toplar, normalize eder ve gercek zamanli olarak isler. WebSocket tabanli canli veri akisi, Redis cache katmani ve PostgreSQL persistent storage ile calisan distributed pipeline. Anomali tespit algoritmalari sayesinde normal disi davranislar milisaniyeler icinde belirlenir.",
          metrics: "10K+ veri/dk",
        },
        {
          title: "Pattern Recognition & Risk Motoru",
          desc: "Davranis kaliplarini cok parametreli analiz eden, otomatik risk skoru ureten hibrit motor. %95 tespit orani.",
          longDesc: "Kullanici davranislarini cok parametreli olarak analiz eder, anomali tespit eder ve otomatik risk skoru uretir. Kural tabanli motor + ML tabanli pattern matching hibrit yaklasim kullanir. Esik degerleri dinamik olarak ayarlanir, sistem kendi kendine ogrenme kapasitesine sahiptir.",
          metrics: "%95 Tespit",
        },
        {
          title: "Cok Kaynakli API Agregasyon Platformu",
          desc: "30+ API kaynagindan paralel veri toplama, normalizasyon ve karsilastirmali analiz pipeline'i.",
          longDesc: "Farkli formatlardaki 30+ API kaynagindan verileri paralel olarak ceker, normalize eder ve birlesik bir veritabaninda depolar. Rate limiting, exponential backoff retry mekanizmasi, circuit breaker pattern ve veri tutarlilik kontrolu icerir.",
          metrics: "30+ Kaynak",
        },
        {
          title: "Tahmin Analitik Platformu",
          desc: "React frontend, Node.js backend, Supabase DB ve Telegram bot entegrasyonlu full-stack analiz ve puan sistemi.",
          longDesc: "Gercek zamanli veri analizi ve tahmin platformu. React/Vite ile responsive frontend, Express.js ile RESTful backend, Supabase ile veritabani yonetimi. Telegram bot entegrasyonu ile mobil erisim. Docker Compose ile production deployment, Nginx reverse proxy.",
          metrics: "Full-Stack + Bot",
        },
        {
          title: "Otonom Izleme & Alert Sistemi",
          desc: "7/24 otonom calisan, coklu kaynak tarayan ve kosullu bildirim gonderen akilli bot altyapisi.",
          longDesc: "Telegram tabanli otonom izleme sistemi. Belirlenen kaynaklari periyodik olarak tarar, veri degisikliklerini tespit eder, kosullara gore anlik veya zamanlanmis bildirimler gonderir. Cron job yonetimi, hata toleransi ve otomatik yeniden baslama mekanizmasi.",
          metrics: "7/24 Aktif",
        },
        {
          title: "Topluluk Yonetim Bot Ekosistemi",
          desc: "Uye yonetimi, otomatik icerik paylasimi, yonetim komutlari ve analitik dashboard iceren multi-bot sistemi.",
          longDesc: "Birden fazla Telegram botundan olusan ekosistem: uye kayit/dogrulama botu, otomatik icerik paylasim botu, yonetim komutlari, analitik dashboard. Docker Compose ile orkestrasyon, veri katmani. Export/import modulleri ile veri tasima.",
          metrics: "Multi-bot",
        },
        {
          title: "SEO Otomasyon & Rank Takip",
          desc: "Programatik icerik uretimi, anahtar kelime izleme, rakip analizi ve teknik SEO otomasyon araci.",
          longDesc: "Hedef anahtar kelimelerde siralama takibi, rakip analizi, programatik icerik sablonlari ile toplu sayfa olusturma, teknik SEO denetim araci. Rekabetci Turkce anahtar kelimelerde #1 siralama basarisi. Otomatik raporlama ve trend analizi.",
          metrics: "#1 Siralama",
        },
        {
          title: "QR Menu Yonetim Sistemi",
          desc: "Restoran ve kafeler icin end-to-end dijital menu, siparis yonetimi ve admin paneli.",
          longDesc: "End-to-end restoran yonetim sistemi. React tabanli responsive frontend, Node.js/Express backend, PostgreSQL veritabani. QR kod ile menu erisimi, kategori filtreleme, urun yonetimi, kullanici yetkilendirme, siparis takibi ve admin paneli.",
          metrics: "Full-Stack",
        },
        {
          title: "E-Ticaret Platformu",
          desc: "React frontend + Spring Boot backend ile tam kapsamli e-ticaret uygulamasi.",
          longDesc: "Urun katalog, arama/filtreleme, sepet yonetimi, odeme entegrasyonu, kullanici kayit/giris, siparis takibi. Backend: JPA/Hibernate, Spring Security, RESTful API. Frontend: Redux state management, responsive tasarim.",
          metrics: "React + Spring",
        },
      ],
      expandHint: "Detaylar ve kaynak kodu",
      collapseHint: "Daralt",
      sourceCode: "Kaynak Kodu",
      note: "Bazi projeler ozel gelistirme surecinde oldugundan kaynak kodu paylasilamamaktadir.",
    },
    tech: {
      section: "TEKNOLOJILER",
      titleA: "Teknik ",
      titleB: "Yetkinlikler",
      categories: [
        { title: "Frontend Gelistirme", skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux / Zustand", "Responsive Design"] },
        { title: "Backend & API", skills: ["Node.js / Express", "Python / FastAPI", "Java / Spring Boot", "REST API Design", "WebSocket", "Microservices"] },
        { title: "Veri & Altyapi", skills: ["PostgreSQL", "MongoDB", "Redis", "Docker / Compose", "Supabase", "Nginx / Deployment"] },
        { title: "AI & Otomasyon", skills: ["Claude AI / MCP", "Telegram Bot API", "Puppeteer / Playwright", "Pattern Matching", "Swarm Intelligence", "Cron & Scheduling"] },
      ],
      awarenessTitle: "Surekli Ogrenme & Endustri Takibi",
      awarenessSub: "Guncel kalarak en yeni teknolojileri projelerime entegre ediyorum",
      areas: [
        { label: "AI & LLM Ekosistemi", items: "Claude AI, MCP Protokolu, Ajan Orkestrasyonu, RAG, Vector DB, Prompt Engineering" },
        { label: "Modern Web & Cloud", items: "Next.js App Router, Server Components, Edge Runtime, Serverless, Vercel, Docker Swarm" },
        { label: "Veri & Otomasyon", items: "Event-Driven Mimari, CQRS, Real-time Streaming, CI/CD Pipeline, Monitoring & Alerting" },
      ],
    },
    contact: {
      section: "ILETISIM",
      titleA: "Birlikte ",
      titleB: "Calisalim",
      subtitle: "Yeni projeler, teknik gorusmeler veya is birligi firsatlari icin bana ulasabilirsiniz.",
      github: "Acik kaynak projelerim",
      linkedin: "Profesyonel agim",
      email: "Dogrudan iletisim",
      availableTitle: "Yeni firsatlara acigim",
      availableSub: "Remote, freelance veya danismanlik",
    },
    footer: { built: "Next.js + Tailwind CSS + Framer Motion ile tasarlandi" },
  },

  en: {
    nav: { about: "About", projects: "Projects", tech: "Technologies", contact: "Contact" },
    hero: {
      roles: ["Full-Stack Developer", "AI Systems Engineer", "Data Pipeline Architect", "Automation Specialist"],
      desc: "I build production-grade software — from real-time data processing to autonomous AI agents, from scalable full-stack platforms to intelligent automation systems.",
      cta: { projects: "View Projects", github: "GitHub", linkedin: "LinkedIn" },
      stats: [
        { n: "12+", l: "Production Projects" },
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
        { n: "12+", l: "Production\nProjects" },
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
      availableTitle: "Open to new opportunities",
      availableSub: "Remote, freelance, or consulting",
    },
    footer: { built: "Designed with Next.js + Tailwind CSS + Framer Motion" },
  },

  it: {
    nav: { about: "Chi Sono", projects: "Progetti", tech: "Tecnologie", contact: "Contatti" },
    hero: {
      roles: ["Sviluppatore Full-Stack", "Ingegnere Sistemi AI", "Architetto Data Pipeline", "Specialista Automazione"],
      desc: "Sviluppo software di livello produttivo — dall'elaborazione dati in tempo reale agli agenti AI autonomi, dalle piattaforme full-stack scalabili ai sistemi di automazione intelligente.",
      cta: { projects: "Vedi Progetti", github: "GitHub", linkedin: "LinkedIn" },
      stats: [
        { n: "12+", l: "Progetti Produzione" },
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
        { n: "12+", l: "Progetti\nProduzione" },
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
          title: "Sistema Orchestrazione Agenti AI",
          desc: "Piattaforma enterprise di orchestrazione che coordina 60+ agenti specializzati. Self-learning, consenso fault-tolerant e memoria vettoriale.",
          longDesc: "Sistema di orchestrazione AI enterprise. Capacita di self-learning, meccanismo di consenso fault-tolerant, memoria vettoriale e integrazione MCP. Coordinamento multi-agente tramite swarm intelligence. CLI TypeScript, architettura plugin, gestione distribuita dei task.",
          metrics: "60+ Agenti",
        },
        {
          title: "Piattaforma Elaborazione Dati Real-Time",
          desc: "Raccolta dati ad alto volume da 20+ fonti con normalizzazione e rilevamento anomalie in tempo reale. 10K+ punti dati al minuto.",
          longDesc: "Raccoglie, normalizza ed elabora dati ad alto volume da 20+ fonti diverse in tempo reale. Streaming live basato su WebSocket, layer cache Redis e storage persistente PostgreSQL in una pipeline distribuita.",
          metrics: "10K+ dati/min",
        },
        {
          title: "Motore Pattern Recognition & Rischio",
          desc: "Motore ibrido che analizza pattern comportamentali con analisi multi-parametro e scoring automatico del rischio. Tasso di rilevamento 95%.",
          longDesc: "Analizza i comportamenti utente con analisi multi-parametro, rileva anomalie e genera punteggi di rischio automatici. Approccio ibrido: motore basato su regole + pattern matching basato su ML.",
          metrics: "95% Rilevamento",
        },
        {
          title: "Piattaforma Aggregazione API Multi-Sorgente",
          desc: "Raccolta dati parallela, normalizzazione e pipeline di analisi comparativa da 30+ fonti API.",
          longDesc: "Estrae dati in parallelo da 30+ fonti API in formati diversi, normalizza e archivia in un database unificato. Include rate limiting, retry con backoff esponenziale, pattern circuit breaker e controlli di coerenza dati.",
          metrics: "30+ Fonti",
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
      availableTitle: "Aperto a nuove opportunita",
      availableSub: "Remoto, freelance o consulenza",
    },
    footer: { built: "Progettato con Next.js + Tailwind CSS + Framer Motion" },
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
