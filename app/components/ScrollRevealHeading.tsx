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
    "translate-y-[clamp(1.75rem,4.5vw,3.25rem)] scale-[0.96] opacity-0",
  section: "translate-y-7 scale-[0.96] opacity-0",
  subsection: "translate-y-6 scale-[0.97] opacity-0",
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
      { threshold: 0.1, rootMargin: "0px 0px 8% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reducedMotion]);

  const motion =
    "transform-gpu transition-[transform,opacity] duration-[1180ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:duration-0";

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
