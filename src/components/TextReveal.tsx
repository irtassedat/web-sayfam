"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ── Character-by-character stagger for headings ── */
export function StaggerText({
  text,
  className,
  delay = 0,
  charDelay = 0.03,
}: {
  text: string;
  className?: string;
  delay?: number;
  charDelay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => { setIsMounted(true); }, []);

  if (!isMounted) {
    return <span ref={ref} className={className}>{text}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ delay: delay + i * charDelay, duration: 0.4, ease: "easeOut" }}
          style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

/* ── Word-by-word reveal with blur for paragraphs ── */
export function WordReveal({
  text,
  className,
  delay = 0,
  wordDelay = 0.03,
}: {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => { setIsMounted(true); }, []);

  const words = text.split(" ");

  if (!isMounted) {
    return <span ref={ref} className={className}>{text}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(6px)" }}
          animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ delay: delay + i * wordDelay, duration: 0.4, ease: "easeOut" }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* ── Typewriter effect with cursor for expanded details ── */
export function TypewriterText({
  text,
  className,
  speed = 12,
  active = true,
}: {
  text: string;
  className?: string;
  speed?: number;
  active?: boolean;
}) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!active) {
      setDisplayed("");
      setDone(false);
      return;
    }
    setDisplayed("");
    setDone(false);
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        setDone(true);
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [active, text, speed]);

  if (!active) return null;

  return (
    <span className={className}>
      {displayed}
      {!done && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-[2px] h-[1em] bg-primary ml-0.5 align-middle"
        />
      )}
    </span>
  );
}

/* ── Counter animation for stats ── */
export function CountUp({
  target,
  suffix = "",
  className,
  duration = 2,
}: {
  target: number;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(target);

  useEffect(() => {
    setCount(0);
  }, []);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
}
