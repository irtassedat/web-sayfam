"use client";
import { motion } from "framer-motion";

const roles = [
  "Full-Stack Developer",
  "AI Systems Engineer",
  "Data Pipeline Architect",
  "Automation Specialist",
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Ambient */}
      <div className="absolute top-32 -left-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[180px]" />
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[160px]" />

      <div className="relative z-10 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface/50 mb-8">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative rounded-full h-1.5 w-1.5 bg-green-400" />
            </span>
            <span className="text-xs text-muted">Acik pozisyonlara basvurmaya hazirim</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-4"
        >
          Sedat Irtas
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-6"
        >
          {roles.map((r) => (
            <span key={r} className="px-3 py-1 text-xs rounded-full border border-border bg-surface/50 text-muted">
              {r}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm text-muted leading-relaxed max-w-xl mx-auto mb-8"
        >
          Gercek zamanli veri isleme, otonom AI ajan sistemleri, cok kaynakli veri
          toplama ve analiz platformlari gelistiriyorum. React/Next.js, Node.js,
          Python, Java/Spring Boot ve Claude AI entegrasyonlarinda deneyimliyim.
          Olceklenebilir, uretim seviyesinde sistemler kuruyorum.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <a href="#projects" className="px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-light transition-colors">
            Projelerimi Gor
          </a>
          <a href="https://github.com/irtassedat" target="_blank" rel="noopener noreferrer"
            className="px-5 py-2.5 border border-border text-sm font-medium rounded-lg hover:border-primary/30 transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/sedat-irta%C5%9F-04a441137/" target="_blank" rel="noopener noreferrer"
            className="px-5 py-2.5 border border-border text-sm font-medium rounded-lg hover:border-primary/30 transition-colors">
            LinkedIn
          </a>
        </motion.div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          {[
            { n: "12+", l: "Uretim Projesi" },
            { n: "6+", l: "Bot & Otomasyon" },
            { n: "30+", l: "API Entegrasyonu" },
            { n: "3", l: "Full-Stack Platform" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-lg font-bold text-gradient">{s.n}</div>
              <div className="text-[10px] text-muted uppercase tracking-wider">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-7 rounded-full border border-muted/20 flex justify-center pt-1.5">
          <div className="w-0.5 h-1.5 bg-primary/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
