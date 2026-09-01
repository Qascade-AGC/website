"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { shouldAvoidLenis, useLenis } from "./LenisRoot";

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const WORD = "Qascade";
const LETTERS = WORD.split("");

/** ease-out cubic — быстрый старт, мягкое завершение */
function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

/**
 * Направления разлёта по индексу буквы (усиливаются прогрессом скролла 0…1).
 * Веер вверх/в стороны + лёгкий поворот.
 */
const SPREAD = LETTERS.map((_, i) => {
  const n = LETTERS.length;
  const u = n > 1 ? i / (n - 1) : 0.5;
  const angle = (u - 0.5) * Math.PI * 0.75;
  const mag = 0.78 + Math.abs(u - 0.5) * 0.55;
  return {
    x: Math.sin(angle) * 88 * mag,
    y: -Math.cos(angle) * 52 * mag - 24,
    r: (u - 0.5) * 16,
  };
});

export function HeroScatterTitle() {
  const lenis = useLenis();
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);

  useIsoLayoutEffect(() => {
    const spans = spansRef.current;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const reset = () => {
      spans.forEach((el) => {
        if (!el) return;
        el.style.transform = "";
        el.style.opacity = "";
      });
    };

    const apply = (tRaw: number) => {
      const t = Math.min(1, Math.max(0, tRaw));
      const eased = easeOutCubic(t);
      const w =
        typeof window !== "undefined" ? window.innerWidth : 1024;
      const spreadScale = w < 480 ? 0.5 : w < 640 ? 0.65 : 1;
      spans.forEach((el, i) => {
        if (!el) return;
        const s = SPREAD[i] ?? { x: 0, y: 0, r: 0 };
        const dx = s.x * eased * spreadScale;
        const dy = s.y * eased * spreadScale;
        const r = s.r * eased * spreadScale;
        const sc = 1 - 0.1 * eased;
        const op = Math.max(0.18, 1 - Math.pow(eased, 1.4) * 0.82);
        el.style.transform = `translate3d(${dx}px, ${dy}px, 0) rotate(${r}deg) scale(${sc})`;
        el.style.opacity = String(op);
      });
    };

    const measure = () => {
      if (mq.matches) {
        reset();
        return;
      }
      const y = lenis?.scroll ?? window.scrollY;
      const vh = window.innerHeight || 1;
      apply(y / (vh * 0.62));
    };

    if (mq.matches) {
      reset();
      const onMq = () => (mq.matches ? reset() : measure());
      mq.addEventListener("change", onMq);
      return () => mq.removeEventListener("change", onMq);
    }

    if (shouldAvoidLenis()) {
      apply(0);
      return () => {};
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
      className="qascade-hero-word pointer-events-none mx-auto flex max-w-[min(95vw,100%)] select-none justify-center gap-[0.02em] text-center font-sans text-[clamp(2.65rem,12.5vw,9.5rem)] font-bold leading-[0.88] tracking-tight sm:text-[clamp(3.5rem,16vw,9.5rem)]"
    >
      {LETTERS.map((ch, i) => (
        <span
          key={`${ch}-${i}`}
          ref={(el) => {
            spansRef.current[i] = el;
          }}
          aria-hidden
          className="inline-block origin-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          {ch}
        </span>
      ))}
    </div>
  );
}
