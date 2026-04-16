"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  className?: string;
  /** По словам (по умолчанию). Передайте `false` для посимвольного режима. */
  byWord?: boolean;
  charMs?: number;
  wordMs?: number;
  /** Пауза перед стартом (после появления заголовка) */
  startDelayMs?: number;
} & Omit<React.HTMLAttributes<HTMLParagraphElement>, "children">;

/**
 * Подзаголовок: по умолчанию по словам (плавнее); опционально по буквам; курсор до конца.
 * Сбрасывается при уходе из вьюпорта — при повторном скролле снова набирается.
 */
export function TypewriterReveal({
  text,
  className = "",
  byWord: byWordProp,
  charMs = 17,
  wordMs = 52,
  startDelayMs = 400,
  ...rest
}: Props) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [shown, setShown] = useState("");
  const [active, setActive] = useState(false);
  const [done, setDone] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const byWord = byWordProp ?? true;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;
    let hideTimer: ReturnType<typeof setTimeout> | null = null;
    const obs = new IntersectionObserver(
      ([e]) => {
        const on = !!e?.isIntersecting;
        if (on) {
          if (hideTimer) {
            clearTimeout(hideTimer);
            hideTimer = null;
          }
          setActive(true);
        } else {
          if (hideTimer) clearTimeout(hideTimer);
          hideTimer = setTimeout(() => {
            setActive(false);
            hideTimer = null;
          }, 140);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" },
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) {
      setShown(text);
      setDone(true);
      return;
    }
    if (!active) {
      setShown("");
      setDone(false);
      return;
    }

    let cancelled = false;
    const words = text.split(/(\s+)/).filter((w) => w.length > 0);

    const afterDelay = (fn: () => void) =>
      window.setTimeout(() => {
        if (!cancelled) fn();
      }, startDelayMs);

    const runChars = () => {
      let i = 0;
      const step = () => {
        if (cancelled) return;
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) {
          setDone(true);
          return;
        }
        window.setTimeout(step, charMs);
      };
      afterDelay(step);
    };

    const runWords = () => {
      let i = 0;
      const step = () => {
        if (cancelled) return;
        i += 1;
        setShown(words.slice(0, i).join(""));
        if (i >= words.length) {
          setDone(true);
          return;
        }
        window.setTimeout(step, wordMs);
      };
      afterDelay(step);
    };

    if (byWord) runWords();
    else runChars();

    return () => {
      cancelled = true;
    };
  }, [active, text, byWord, charMs, wordMs, startDelayMs, reducedMotion]);

  if (reducedMotion) {
    return (
      <p ref={ref} className={className} {...rest}>
        {text}
      </p>
    );
  }

  /** Невидимый полный текст резервирует высоту/переносы, чтобы макет не прыгал при наборе. */
  return (
    <p
      ref={ref}
      className={`isolate grid grid-cols-1 grid-rows-1 place-content-start pb-[0.2em] [contain:layout] ${className}`}
      {...rest}
    >
      <span
        className="invisible col-start-1 row-start-1 m-0 min-w-0 select-none break-words [overflow-wrap:anywhere]"
        aria-hidden
      >
        {text}
      </span>
      <span className="col-start-1 row-start-1 m-0 min-w-0 self-start break-words [overflow-wrap:anywhere]">
        {shown}
        {!done && active ? (
          <span
            className="ml-px inline-block h-[0.95em] w-px translate-y-px animate-pulse bg-zinc-400 align-middle opacity-80"
            aria-hidden
          />
        ) : null}
      </span>
    </p>
  );
}
