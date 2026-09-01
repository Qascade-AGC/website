"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  className?: string;
  /** По умолчанию слова плавно проявляются (CSS). `false` — посимвольный набор. */
  byWord?: boolean;
  charMs?: number;
  /** @deprecated в режиме по словам не используется; см. wordStaggerMs / wordRevealMs */
  wordMs?: number;
  /** Пауза перед стартом (после появления заголовка) */
  startDelayMs?: number;
  /** Задержка старта анимации следующего слова, мс */
  wordStaggerMs?: number;
  /** Длительность проявления одного слова, мс */
  wordRevealMs?: number;
} & Omit<React.HTMLAttributes<HTMLParagraphElement>, "children">;

const easeReveal = "cubic-bezier(0.16, 1, 0.3, 1)";

/**
 * Подтекст: по словам — плавное opacity + лёгкий сдвиг (CSS, без дискретного набора).
 * По буквам — более редкие шаги, чем раньше. Курсор до конца.
 */
export function TypewriterReveal({
  text,
  className = "",
  byWord: byWordProp,
  charMs = 22,
  wordMs: _wordMs = 52,
  startDelayMs = 240,
  wordStaggerMs = 36,
  wordRevealMs = 560,
  ...rest
}: Props) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const revealedOnce = useRef(false);
  const [shown, setShown] = useState("");
  const [active, setActive] = useState(false);
  /** После startDelayMs — запускаем CSS-анимацию слов */
  const [run, setRun] = useState(false);
  const [done, setDone] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const byWord = byWordProp ?? true;
  const words = text.trim().split(/\s+/).filter(Boolean);

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
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e) return;
        if (e.isIntersecting) {
          revealedOnce.current = true;
          setActive(true);
        } else if (!revealedOnce.current) {
          setActive(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px 10% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion || !byWord) return;
    if (!active) {
      if (!revealedOnce.current) {
        setRun(false);
        setDone(false);
      }
      return;
    }
    setRun(false);
    setDone(false);
    const t = window.setTimeout(() => setRun(true), startDelayMs);
    return () => clearTimeout(t);
  }, [active, text, byWord, reducedMotion, startDelayMs]);

  useEffect(() => {
    if (reducedMotion || !byWord || !run) return;
    const n = words.length;
    if (n === 0) {
      setDone(true);
      return;
    }
    const ms = (n - 1) * wordStaggerMs + wordRevealMs + 80;
    const t = window.setTimeout(() => setDone(true), ms);
    return () => clearTimeout(t);
  }, [run, byWord, reducedMotion, words.length, wordStaggerMs, wordRevealMs]);

  useEffect(() => {
    if (reducedMotion) {
      setShown(text);
      setDone(true);
      return;
    }
    if (byWord) return;

    if (!active) {
      if (!revealedOnce.current) {
        setShown("");
        setDone(false);
      }
      return;
    }

    let cancelled = false;

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

    runChars();

    return () => {
      cancelled = true;
    };
  }, [active, text, byWord, charMs, startDelayMs, reducedMotion]);

  if (reducedMotion) {
    return (
      <p ref={ref} className={className} {...rest}>
        {text}
      </p>
    );
  }

  if (byWord) {
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
        <span className="col-start-1 row-start-1 m-0 flex min-w-0 flex-wrap self-start [overflow-wrap:anywhere]">
          {words.map((word, i) => (
            <span key={`${word}-${i}`} className="mr-[0.28em] inline-block last:mr-0">
              <span
                className="inline-block transform-gpu"
                style={{
                  opacity: run ? 1 : 0,
                  transform: run ? "translateY(0)" : "translateY(0.28em)",
                  transitionProperty: "opacity, transform",
                  transitionDuration: `${wordRevealMs}ms`,
                  transitionTimingFunction: easeReveal,
                  transitionDelay: run ? `${i * wordStaggerMs}ms` : "0ms",
                }}
              >
                {word}
              </span>
            </span>
          ))}
          {run && !done ? (
            <span
              className="ml-0.5 inline-block h-[0.95em] w-px translate-y-px self-center bg-zinc-400 align-middle opacity-40"
              aria-hidden
            />
          ) : null}
        </span>
      </p>
    );
  }

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
            className="ml-px inline-block h-[0.95em] w-px translate-y-px bg-zinc-400 align-middle opacity-40"
            aria-hidden
          />
        ) : null}
      </span>
    </p>
  );
}
