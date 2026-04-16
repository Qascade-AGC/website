"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useLenis } from "./LenisRoot";

export function SplashContent({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const apply = (rawScrollY: number) => {
      if (reduceMotion.matches) {
        el.style.opacity = "1";
        el.style.transform = "";
        return;
      }
      const scrollY = Math.max(0, Math.round(rawScrollY));
      const vh = window.innerHeight || 1;
      const t = Math.min(1, (scrollY / (vh * 0.9)) * 1.05);
      const opacityRaw = Math.max(0.1, 1 - t * 0.85);
      const opacity = Math.round(opacityRaw * 100) / 100;
      const liftPx = Math.round(t * -18);
      el.style.opacity = String(opacity);
      el.style.transform = `translate3d(0, ${liftPx}px, 0)`;
    };

    if (reduceMotion.matches) {
      apply(0);
      const ro = reduceMotion;
      const onRm = () => apply(0);
      ro.addEventListener("change", onRm);
      return () => ro.removeEventListener("change", onRm);
    }

    /**
     * При Lenis скролл уже сглажен и интерполируется отдельно. Второй слой
     * (translate + opacity от animatedScroll) на каждом кадре даёт «тряску»
     * в Safari поверх fixed фона. Тяжесть остаётся только у Lenis.
     */
    if (lenis) {
      el.style.opacity = "1";
      el.style.transform = "";
      return () => {
        el.style.opacity = "";
        el.style.transform = "";
      };
    }

    let raf = 0;
    const schedule = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        apply(window.scrollY);
      });
    };

    apply(window.scrollY);
    window.addEventListener("scroll", schedule, { passive: true });
    const ro = reduceMotion;
    const onRm = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      apply(window.scrollY);
    };
    ro.addEventListener("change", onRm);

    return () => {
      window.removeEventListener("scroll", schedule);
      ro.removeEventListener("change", onRm);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [lenis]);

  return (
    <div ref={ref} className="relative flex min-h-0 flex-1 flex-col">
      {children}
    </div>
  );
}
