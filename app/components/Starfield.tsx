import type { CSSProperties } from "react";

/**
 * Редкое мерцание: длинный цикл, короткий всплеск яркости (см. .site-star в globals.css).
 */
const STAR_COUNT = 28;

function starStyle(i: number): CSSProperties {
  const left = ((i * 7919 + 17) % 940) / 10;
  const top = ((i * 6151 + 23) % 900) / 10;
  const delay = ((i * 2.618) % 24) + (i % 7) * 0.37;
  const duration = 17 + (i % 13) + (i % 5) * 0.8;
  const size = 1 + (i % 3);
  return {
    left: `${left}%`,
    top: `${top}%`,
    width: size,
    height: size,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  };
}

export function Starfield() {
  return (
    <div
      className="site-starfield pointer-events-none fixed inset-0 z-[2]"
      aria-hidden
    >
      {Array.from({ length: STAR_COUNT }, (_, i) => (
        <span key={i} className="site-star" style={starStyle(i)} />
      ))}
    </div>
  );
}
