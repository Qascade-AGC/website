"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  as?: "h1" | "h2" | "h3" | "h4";
  /** Смещение появления: крупные hero — display, обычные секции — section, мелкие подзаголовки — subsection */
  level?: "display" | "section" | "subsection";
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

/** Без blur: при скролле filter размазывает глифы на соседние строки и моргает в WebKit. */
const floatInHidden = {
  display:
    "translate-y-[clamp(2.5rem,6vw,4.5rem)] scale-[0.9] opacity-0",
  section: "translate-y-10 scale-[0.93] opacity-0",
  subsection: "translate-y-8 scale-[0.94] opacity-0",
} as const;

const floatInVisible = "translate-y-0 scale-100 opacity-100";

/**
 * Выплывание снизу при первом входе в вьюпорт; после показа не откатывается — нет артефактов у края экрана.
 */
export function ScrollRevealHeading({
  as: Tag = "h2",
  level = "section",
  className = "",
  children,
  ...props
}: Props) {
  const ref = useRef<HTMLHeadingElement>(null);
  const revealedOnce = useRef(false);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

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
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reducedMotion]);

  const motion =
    "transform-gpu transition-[transform,opacity] duration-[1050ms] ease-[cubic-bezier(0.2,0.82,0.28,1)]";

  return (
    <Tag
      ref={ref}
      className={`${motion} ${
        reducedMotion || visible ? floatInVisible : floatInHidden[level]
      } ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
