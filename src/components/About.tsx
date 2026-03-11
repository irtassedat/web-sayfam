"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="py-28 px-4 relative">
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-mono text-primary tracking-wider">HAKKIMDA</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 tracking-tight">
            Kim <span className="text-gradient">Oldugum</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* Bio - spans 2 cols */}
          <motion.div variants={item} className="md:col-span-2 spotlight-card rounded-2xl p-6 sm:p-8">
            <div className="spotlight" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                  SI
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Sedat Irtas</h3>
                  <p className="text-[11px] text-muted">Endustri Muhendisi & Yazilim Gelistirici</p>
                </div>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Endustri Muhendisligi altyapimdan gelen sistematik dusunce ve optimizasyon
                becerileriyle, yazilim muhendisliginde uretim seviyesinde sistemler kuruyorum.
                Full-stack web gelistirmeden otonom AI ajan orkestrasyonuna, gercek zamanli
                veri pipeline&apos;larindan akilli otomasyon botlarina kadar genis bir yelpazede
                projeler gelistirdim. Her projede olceklenebilirlik, guvenilirlik ve
                performansi on planda tutuyorum.
              </p>
            </div>
          </motion.div>

          {/* Status & Location */}
          <motion.div variants={item} className="spotlight-card rounded-2xl p-6 flex flex-col justify-between">
            <div className="spotlight" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative rounded-full h-2.5 w-2.5 bg-green-400" />
                </span>
                <span className="text-xs text-green-400 font-medium">Musait</span>
              </div>
              <h3 className="font-semibold text-sm mb-1">Istanbul, Turkiye</h3>
              <p className="text-[11px] text-muted leading-relaxed">
                Tam zamanli pozisyonlara, freelance projelere ve teknik danismanlik firsatlarina acigim.
              </p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-[10px] text-muted/60 uppercase tracking-wider mb-1.5">Tercih</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Uzaktan", "Hibrit", "Istanbul"].map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-surface-light text-muted/70 border border-border/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={item} className="spotlight-card rounded-2xl p-6">
            <div className="spotlight" />
            <div className="relative z-10">
              <div className="text-xs text-primary font-mono mb-3 tracking-wider">EGITIM</div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold">Endustri Muhendisligi</h4>
                  <p className="text-[11px] text-muted">Lisans Derecesi</p>
                  <p className="text-[10px] text-muted/50 mt-1">Analitik dusunce, optimizasyon, surecmodelleme, istatistiksel analiz</p>
                </div>
                <div className="pt-3 border-t border-border/50">
                  <h4 className="text-sm font-semibold">Full-Stack Web Development</h4>
                  <p className="text-[11px] text-muted">Workintech Bootcamp</p>
                  <p className="text-[10px] text-muted/50 mt-1">React, Node.js, Java/Spring Boot, SQL, REST API</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Numbers */}
          <motion.div variants={item} className="spotlight-card rounded-2xl p-6">
            <div className="spotlight" />
            <div className="relative z-10">
              <div className="text-xs text-primary font-mono mb-4 tracking-wider">RAKAMLAR</div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: "12+", l: "Uretim\nProjesi" },
                  { n: "30+", l: "API\nEntegrasyonu" },
                  { n: "10K+", l: "Veri Noktasi\n/ Dakika" },
                  { n: "60+", l: "AI Ajan\nOrkestrasyonu" },
                ].map((s) => (
                  <div key={s.l} className="text-center p-2 rounded-xl bg-surface-light/50">
                    <div className="text-lg font-bold text-gradient">{s.n}</div>
                    <div className="text-[9px] text-muted uppercase tracking-wider whitespace-pre-line leading-tight mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Current Focus */}
          <motion.div variants={item} className="spotlight-card rounded-2xl p-6">
            <div className="spotlight" />
            <div className="relative z-10">
              <div className="text-xs text-primary font-mono mb-3 tracking-wider">GUNCEL ODAK</div>
              <div className="space-y-3">
                {[
                  {
                    title: "Otonom AI Ajan Sistemleri",
                    desc: "MCP protokolu, swarm intelligence, coklu ajan koordinasyonu",
                  },
                  {
                    title: "Gercek Zamanli Veri Iseme",
                    desc: "Event-driven mimariler, WebSocket, streaming pipeline",
                  },
                  {
                    title: "Dagitik Sistemler",
                    desc: "Docker orkestrasyon, mikroservis, fault-tolerant tasarim",
                  },
                ].map((f) => (
                  <div key={f.title} className="p-2.5 rounded-xl bg-surface-light/50 border border-border/30">
                    <h4 className="text-xs font-semibold mb-0.5">{f.title}</h4>
                    <p className="text-[10px] text-muted/60 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
