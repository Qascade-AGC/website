"use client";

import { ServicesBrowser } from "./ServicesBrowser";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative z-10 mx-auto max-w-[1680px] scroll-mt-28 px-4 py-16 pb-28 sm:scroll-mt-24 sm:px-6 sm:py-20 sm:pb-32 lg:py-24 lg:pb-24"
    >
      <ServicesBrowser />
    </section>
  );
}
