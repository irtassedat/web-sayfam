"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="relative py-10 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-[8px]">SI</span>
            </div>
            <span className="text-xs text-muted">{t.footer.copyright}</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="mailto:sedatirtas.1@gmail.com" className="text-xs text-muted/50 hover:text-primary transition-colors">sedatirtas.1@gmail.com</a>
            <a href="https://github.com/irtassedat" target="_blank" rel="noopener noreferrer" className="text-xs text-muted/50 hover:text-primary transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/sedat-irta%C5%9F-04a441137/" target="_blank" rel="noopener noreferrer" className="text-xs text-muted/50 hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-6 text-center">
          <p className="text-[10px] text-muted/25 font-mono">{t.footer.built}</p>
        </motion.div>
      </div>
    </footer>
  );
}
