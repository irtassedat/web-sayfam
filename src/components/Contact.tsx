"use client";

import { motion } from "framer-motion";
import { useRef, MouseEvent } from "react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/irtassedat",
    desc: "Acik kaynak projelerim",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    color: "#e8e8e8",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sedat-irta%C5%9F-04a441137/",
    desc: "Profesyonel agim",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "#0a66c2",
  },
  {
    label: "E-posta",
    href: "mailto:irtassedat@gmail.com",
    desc: "Dogrudan iletisim",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    color: "#6366f1",
  },
];

function ContactCard({ link, index }: { link: typeof socialLinks[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.a
      href={link.href}
      target={link.href.startsWith("mailto") ? undefined : "_blank"}
      rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="spotlight-card rounded-2xl p-8 text-center group glow-card h-full"
      >
        <div className="spotlight" />
        <div className="relative z-10">
          <div
            className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{
              backgroundColor: link.color + "10",
              color: link.color,
            }}
          >
            {link.icon}
          </div>
          <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{link.label}</h3>
          <p className="text-[11px] text-muted">{link.desc}</p>
        </div>
      </div>
    </motion.a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-4 relative">
      {/* Ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[200px]" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-mono text-primary tracking-wider">ILETISIM</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 tracking-tight">
            Birlikte <span className="text-gradient">Calisalim</span>
          </h2>
          <p className="text-sm text-muted mt-3 max-w-md mx-auto">
            Yeni projeler, teknik gorusmeler veya is birligi firsatlari icin bana ulasabilirsiniz.
          </p>
        </motion.div>

        {/* Social Cards */}
        <div className="grid sm:grid-cols-3 gap-4">
          {socialLinks.map((link, i) => (
            <ContactCard key={link.label} link={link} index={i} />
          ))}
        </div>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl glass">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative rounded-full h-2.5 w-2.5 bg-green-400" />
            </span>
            <div className="text-left">
              <span className="text-xs font-medium text-foreground/80 block">Yeni firsatlara acigim</span>
              <span className="text-[10px] text-muted/60">Tam zamanli, freelance veya danismanlik</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
