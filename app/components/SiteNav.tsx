"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLenis } from "./LenisRoot";

const DELTA = 10;
/** У самого верха шапка всегда видна */
const TOP_ALWAYS_VISIBLE = 40;

function readNativeScrollY() {
  return (
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}

export function SiteNav() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const raf = useRef(0);
  const lenis = useLenis();

  useEffect(() => {
    const applyY = (y: number) => {
      if (raf.current) return;
      raf.current = requestAnimationFrame(() => {
        raf.current = 0;
        const dy = y - lastY.current;
        lastY.current = y;

        if (y <= TOP_ALWAYS_VISIBLE) {
          setHidden(false);
          return;
        }
        if (dy > DELTA) setHidden(true);
        else if (dy < -DELTA) setHidden(false);
      });
    };

    if (lenis) {
      lastY.current = lenis.scroll;
      const onLenisScroll = () => applyY(lenis.scroll);
      const unsub = lenis.on("scroll", onLenisScroll);
      return () => {
        unsub();
        if (raf.current) cancelAnimationFrame(raf.current);
      };
    }

    lastY.current = readNativeScrollY();

    const onScroll = () => applyY(readNativeScrollY());

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [lenis]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 flex items-center justify-between gap-4 border-b border-white/[0.06] bg-black/[0.45] px-5 py-4 backdrop-blur-md transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] will-change-transform sm:px-8 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <Link
        href="/#splash"
        className="text-sm font-medium tracking-tight text-white uppercase"
      >
        Qascade
      </Link>
      <nav
        className="hidden items-center gap-7 text-[11px] font-medium tracking-[0.12em] text-white/80 uppercase md:flex"
        aria-label="Main navigation"
      >
        <Link href="/#work-preview" className="transition-colors hover:text-white">
          Work
        </Link>
        <Link href="/#services" className="transition-colors hover:text-white">
          Services
        </Link>
        <Link href="/#process" className="transition-colors hover:text-white">
          Process
        </Link>
        <Link href="/#about" className="transition-colors hover:text-white">
          About
        </Link>
      </nav>
      <div className="flex items-center gap-2">
        <Link
          href="/contact"
          className="shrink-0 rounded-sm bg-brand px-3 py-2 text-[10px] font-semibold tracking-wide text-black uppercase transition-colors hover:bg-brand-hover sm:px-4 sm:py-2.5 sm:text-[11px]"
        >
          Contact us →
        </Link>
      </div>
    </header>
  );
}
