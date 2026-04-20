"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { shouldAvoidLenis, useLenis } from "./LenisRoot";

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

const navLinks = [
  { href: "/#work-preview", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#about", label: "About" },
] as const;

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="size-6"
      aria-hidden
    >
      {open ? (
        <>
          <path d="M6 6l12 12M18 6L6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </>
      )}
    </svg>
  );
}

export function SiteNav() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const raf = useRef(0);
  const lenis = useLenis();

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  useEffect(() => {
    /** Телефоны: не вешаем обработчик скролла и не двигаем шапку — меньше работы на каждый тик. */
    if (shouldAvoidLenis()) {
      setHidden(false);
      return;
    }

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

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`nav-border-shimmer fixed top-0 right-0 left-0 z-50 flex items-center justify-between gap-3 border-b border-white/[0.06] bg-black/[0.45] px-4 pt-[max(0.75rem,env(safe-area-inset-top,0px))] pb-3 site-blur transition-[transform,border-color] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] sm:will-change-transform sm:gap-4 sm:px-8 sm:pb-4 sm:pt-4 ${
          hidden && !menuOpen ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <Link
          href="/#splash"
          className="min-h-11 min-w-0 shrink truncate text-sm font-medium tracking-tight text-white uppercase"
          onClick={closeMenu}
        >
          Qascade
        </Link>
        <nav
          className="hidden items-center gap-7 text-[11px] font-medium tracking-[0.12em] text-white/80 uppercase md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="transition-colors hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="flex min-h-11 min-w-11 items-center justify-center rounded-md border border-white/15 text-white/90 transition-colors hover:border-white/25 hover:bg-white/5 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <MenuIcon open={menuOpen} />
          </button>
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-sm bg-brand px-3 py-2 text-[10px] font-semibold tracking-wide text-zinc-950 uppercase shadow-[0_0_20px_-4px_rgba(196,78,255,0.45)] transition-[background-color,box-shadow] hover:bg-brand-hover hover:shadow-[0_0_26px_-4px_rgba(196,78,255,0.55)] sm:px-4 sm:py-2.5 sm:text-[11px]"
            onClick={closeMenu}
          >
            Contact us →
          </Link>
        </div>
      </header>

      <div
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`fixed inset-0 z-40 md:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-black/75 site-blur transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close menu"
          tabIndex={menuOpen ? 0 : -1}
          onClick={closeMenu}
        />
        <nav
          className={`absolute top-0 right-0 bottom-0 flex w-[min(100%,20rem)] flex-col border-l border-white/[0.08] bg-[#050505]/98 pt-[calc(4.25rem+env(safe-area-inset-top,0px))] pb-[env(safe-area-inset-bottom,0px)] shadow-[-24px_0_48px_-12px_rgba(0,0,0,0.85)] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1 px-4 py-2">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block rounded-lg px-4 py-3.5 text-[13px] font-medium tracking-[0.08em] text-white/90 uppercase transition-colors hover:bg-white/[0.06] hover:text-white"
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="mt-4 border-t border-white/[0.08] pt-4">
              <Link
                href="/portfolio"
                className="block rounded-lg px-4 py-3.5 text-[13px] font-medium tracking-[0.08em] text-white/90 uppercase transition-colors hover:bg-white/[0.06] hover:text-white"
                onClick={closeMenu}
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
