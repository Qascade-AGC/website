import { CasesCarousel } from "../CasesCarousel";
import { ScrollRevealHeading } from "../ScrollRevealHeading";
import { TypewriterReveal } from "../TypewriterReveal";

export function ReferencesCarouselSection() {
  return (
    <section
      id="work-preview"
      className="relative z-10 scroll-mt-24 overflow-x-clip pt-2 pb-12 sm:pb-16 lg:pt-4 lg:pb-20"
      aria-labelledby="work-preview-heading"
    >
      <div className="mx-auto mb-5 max-w-[1680px] px-4 text-center sm:mb-6 sm:px-8 md:px-12 lg:px-14 xl:px-16">
        <div className="mx-auto max-w-2xl">
          <ScrollRevealHeading
            as="h2"
            id="work-preview-heading"
            className="font-sans text-2xl font-semibold tracking-tight text-white sm:text-3xl"
          >
            Selected work
          </ScrollRevealHeading>
          <TypewriterReveal
            text="Scroll sideways (trackpad or shift+wheel) · Case opens the full story."
            className="mt-2 text-xs leading-relaxed text-zinc-500 sm:text-sm"
          />
        </div>
      </div>
      {/* Без w-screen / calc(50%−50vw): иначе на границе зоны 50% и 50vw расходятся из‑за скроллбара → дёрганье. */}
      <div className="relative min-w-0 w-full overflow-x-clip">
        <CasesCarousel />
      </div>
    </section>
  );
}
