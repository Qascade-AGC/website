"use client";

import { useLayoutEffect, useState } from "react";
import { shouldAvoidLenis } from "./LenisRoot";

/**
 * После layout известно, телефон/тач ли (как у отключённого Lenis).
 * null только до первого layout на клиенте — для начальных inline-стилей панелей.
 */
export function useTouchLikeDevice(): boolean | null {
  const [v, setV] = useState<boolean | null>(null);
  useLayoutEffect(() => {
    setV(shouldAvoidLenis());
  }, []);
  return v;
}
