"use client";

import Lenis from "lenis";
import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

const LenisContext = createContext<Lenis | null>(null);

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * На iOS и coarse touch Lenis отключаем — нативный скролл.
 * На десктопе smoothWheel + низкий lerp дают «тяжёлую» инерцию; при дёрганье смены направления трекпада можно поднять lerp (~0.08) или снова smoothWheel: false.
 */
/** iOS / тач без hover — нативный скролл; те же условия для отключения тяжёлых scroll-эффектов. */
export function shouldAvoidLenis(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  const ios = /iPad|iPhone|iPod/i.test(ua);
  const coarse =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(hover: none) and (pointer: coarse)").matches;
  return ios || coarse;
}

export function useLenis() {
  return useContext(LenisContext);
}

export function LenisRoot({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useIsoLayoutEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setLenis(null);
      return;
    }

    if (shouldAvoidLenis()) {
      setLenis(null);
      return;
    }

    /** Мягче замедление к концу жеста — без «резкого» отпускания скролла. */
    const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

    const instance = new Lenis({
      /** Ниже lerp — более «шёлковый» инерционный скролл (дольше догоняет, плавнее). */
      lerp: 0.056,
      wheelMultiplier: 0.86,
      touchMultiplier: 0.75,
      smoothWheel: true,
      easing: easeOutCubic,
      /** Тач — только на устройствах без Lenis (см. shouldAvoidLenis). */
      syncTouch: false,
      syncTouchLerp: 0.055,
      touchInertiaExponent: 1.32,
      autoRaf: true,
      allowNestedScroll: true,
      /** Иначе Safari: резиновый overscroll + фиксированный фон дают визуальную «тряску». */
      overscroll: false,
      anchors: {
        lerp: 0.048,
        duration: 2.95,
        easing: easeOutCubic,
      },
      /**
       * Горизонтальный жест над каруселью не смешиваем с вертикальным Lenis —
       * иначе WebKit ловит preventDefault + нативный scrollLeft в одном кадре.
       */
      virtualScroll: (data) => {
        const path = data.event.composedPath();
        const scrollEl = path.find(
          (n): n is HTMLElement =>
            n instanceof HTMLElement &&
            n.hasAttribute("data-case-carousel-scroll"),
        );
        const { deltaX, deltaY } = data;

        if (scrollEl) {
          const maxScroll = scrollEl.scrollWidth - scrollEl.clientWidth;
          if (maxScroll > 1) {
            if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX !== 0) {
              return false;
            }
            if (Math.abs(deltaY) >= Math.abs(deltaX)) {
              const atStart = scrollEl.scrollLeft <= 0.5;
              const atEnd = scrollEl.scrollLeft >= maxScroll - 1.5;
              if (deltaY < 0 && atStart) return true;
              if (deltaY > 0 && atEnd) return true;
              return false;
            }
          }
        }

        const overCarousel = path.some(
          (n) =>
            n instanceof HTMLElement && n.closest("[data-case-carousel]") != null,
        );
        if (!overCarousel) return true;
        if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX !== 0) return false;
        return true;
      },
    });

    setLenis(instance);

    return () => {
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}
