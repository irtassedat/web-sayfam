"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "Hakkimda" },
  { href: "#projects", label: "Projeler" },
  { href: "#tech", label: "Teknolojiler" },
  { href: "#contact", label: "Iletisim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop: Floating pill navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: scrolled ? 0 : -100, opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      >
        <div className="glass-strong rounded-2xl px-2 py-1.5 flex items-center gap-1 shadow-2xl shadow-black/40">
          <a href="#hero" className="flex items-center gap-2 px-3 py-1.5">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-[9px]">SI</span>
            </div>
          </a>

          <div className="w-px h-5 bg-border mx-1" />

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs text-foreground/60 hover:text-foreground transition-colors rounded-xl hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}

          <div className="w-px h-5 bg-border mx-1" />

          <a
            href="https://github.com/irtassedat"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-xs text-muted hover:text-primary transition-colors rounded-xl hover:bg-primary/5"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>
      </motion.nav>

      {/* Mobile: Top bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ${
          scrolled ? "glass-strong" : "bg-transparent"
        }`}
      >
        <div className="px-4 flex items-center justify-between h-14">
          <a href="#hero" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-xs">SI</span>
            </div>
            <span className="font-semibold text-sm">Sedat Irtas</span>
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-xl hover:bg-surface-light transition-colors"
          >
            <div className="w-5 h-5 flex flex-col justify-center gap-1">
              <span className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="glass-strong border-t border-border"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-primary rounded-xl hover:bg-primary/5 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="https://github.com/irtassedat"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-primary rounded-xl hover:bg-primary/5 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
