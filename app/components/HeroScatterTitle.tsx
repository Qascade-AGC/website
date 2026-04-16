"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "./LenisRoot";

const WORD = "Qascade";
const LETTERS = WORD.split("");

/**
 * Направления разлёта по индексу буквы (усиливаются прогрессом скролла 0…1).
 * Веер вверх/в стороны + лёгкий поворот.
 */
const SPREAD = LETTERS.map((_, i) => {
  const n = LETTERS.length;
  const u = n > 1 ? i / (n - 1) : 0.5;
  const angle = (u - 0.5) * Math.PI * 0.92;
  const mag = 0.92 + Math.abs(u - 0.5) * 0.75;
  return {
    x: Math.sin(angle) * 118 * mag,
    y: -Math.cos(angle) * 72 * mag - 36,
    r: (u - 0.5) * 22,
  };
});

export function HeroScatterTitle() {
  const lenis = useLenis();
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const spans = spansRef.current;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const reset = () => {
      spans.forEach((el) => {
        if (!el) return;
        el.style.transform = "";
        el.style.opacity = "";
        el.style.filter = "";
      });
    };

    const apply = (tRaw: number) => {
      const t = Math.min(1, Math.max(0, tRaw));
      const eased = t * t * (3 - 2 * t);
      spans.forEach((el, i) => {
        if (!el) return;
        const s = SPREAD[i] ?? { x: 0, y: 0, r: 0 };
        const dx = s.x * eased;
        const dy = s.y * eased;
        const r = s.r * eased;
        const sc = 1 - 0.2 * eased;
        const op = Math.max(0, 1 - Math.pow(eased, 0.85) * 0.97);
        el.style.transform = `translate3d(${dx}px, ${dy}px, 0) rotate(${r}deg) scale(${sc})`;
        el.style.opacity = String(op);
        el.style.filter = eased > 0.04 ? `blur(${eased * 2}px)` : "";
      });
    };

    const measure = () => {
      if (mq.matches) {
        reset();
        return;
      }
      const y = lenis?.scroll ?? window.scrollY;
      const vh = window.innerHeight || 1;
      apply(y / (vh * 0.56));
    };

    if (mq.matches) {
      reset();
      const onMq = () => (mq.matches ? reset() : measure());
      mq.addEventListener("change", onMq);
      return () => mq.removeEventListener("change", onMq);
    }

    let raf = 0;
    const schedule = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        measure();
      });
    };

    if (lenis) {
      const unsub = lenis.on("scroll", schedule);
      measure();
      return () => {
        unsub();
        if (raf) cancelAnimationFrame(raf);
      };
    }

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    measure();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [lenis]);

  return (
    <div
      role="img"
      aria-label={WORD}
      className="qascade-hero-word pointer-events-none mx-auto flex max-w-[95vw] select-none justify-center gap-[0.02em] text-center font-sans text-[clamp(3.5rem,16vw,9.5rem)] font-bold leading-[0.88] tracking-tight"
    >
      {LETTERS.map((ch, i) => (
        <span
          key={`${ch}-${i}`}
          ref={(el) => {
            spansRef.current[i] = el;
          }}
          aria-hidden
          className="inline-block origin-center will-change-transform"
          style={{ backfaceVisibility: "hidden" }}
        >
          {ch}
        </span>
      ))}
    </div>
  );
}
