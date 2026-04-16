import { ServicesBrowser } from "./ServicesBrowser";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative z-10 mx-auto max-w-[1680px] scroll-mt-24 px-4 py-20 sm:px-6 lg:py-24"
    >
      <ServicesBrowser />
    </section>
  );
}
