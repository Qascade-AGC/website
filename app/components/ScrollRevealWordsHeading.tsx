"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  as?: "h1" | "h2" | "h3";
  /** Фраза целиком; режется по пробелам на слова */
  text: string;
  /** Задержка между словами, мс */
  staggerMs?: number;
  className?: string;
} & Omit<React.HTMLAttributes<HTMLHeadingElement>, "children">;

/**
 * Заголовок: слова по очереди «выплывают» слева (маска + сдвиг).
 * После первого показа состояние не откатывается (стабильнее при скролле).
 */
export function ScrollRevealWordsHeading({
  as: Tag = "h2",
  text,
  className = "",
  staggerMs = 54,
  ...props
}: Props) {
  const ref = useRef<HTMLHeadingElement>(null);
  const revealedOnce = useRef(false);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const words = text.trim().split(/\s+/).filter(Boolean);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e) return;
        if (e.isIntersecting) {
          revealedOnce.current = true;
          setVisible(true);
        } else if (!revealedOnce.current) {
          setVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px 8% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <Tag ref={ref} className={className} {...props}>
        {text}
      </Tag>
    );
  }

  return (
    <Tag ref={ref} className={className} {...props}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={`inline-block overflow-hidden align-baseline ${
            i < words.length - 1 ? "mr-[0.3em]" : ""
          }`}
        >
          <span
            className={`inline-block transform-gpu transition-[transform,opacity] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-[0.85rem] opacity-0"
            }`}
            style={{
              transitionDelay: visible ? `${i * staggerMs}ms` : "0ms",
              transitionDuration: visible ? "1420ms" : "280ms",
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}
