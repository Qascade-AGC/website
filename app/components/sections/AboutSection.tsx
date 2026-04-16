import { ScrollRevealHeading } from "../ScrollRevealHeading";
import { TypewriterReveal } from "../TypewriterReveal";

const TEAM = [
  {
    name: "Name Surname",
    role: "Founder & Product Strategist",
    bio: "12 years in digital product development. Former Head of Product at [Company]. Obsessed with scope control, user outcomes, and shipping on time. Leads every project from discovery to launch.",
  },
  {
    name: "Name Surname",
    role: "Lead Designer · UI/UX",
    bio: "8 years designing interfaces for SaaS, fintech, and e-commerce. Believes great design is invisible — users should reach their goal without thinking about the interface. Figma addict.",
  },
  {
    name: "Name Surname",
    role: "Senior Full-Stack Developer",
    bio: "10 years building web applications at scale. React, Node.js, PostgreSQL, AWS — this is his natural habitat. Writes clean, documented, maintainable code. Every single time.",
  },
  {
    name: "Name Surname",
    role: "Backend & AI Engineer",
    bio: "7 years in backend architecture and 3 years integrating AI into production systems. Handles databases, APIs, DevOps, and everything that runs behind the scenes.",
  },
];

const TRUST = [
  "40+ projects delivered since 2021",
  "93% of projects launched on time and within budget",
  "4.9/5 average client satisfaction score",
  "70% of clients return with a second project",
  "Direct access to the people doing the actual work",
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 mx-auto max-w-4xl scroll-mt-24 px-4 py-20 sm:px-6 lg:max-w-6xl"
    >
      <div className="text-center">
        <ScrollRevealHeading
          as="h2"
          className="font-sans text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          The Team Behind the Code
        </ScrollRevealHeading>
        <TypewriterReveal
          text="We're a focused team of four. No account managers. No middlemen. When you work with us, you work directly with the people who design, build, and ship your product."
          className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base"
        />
      </div>

      <div className="mx-auto mt-10 max-w-3xl space-y-6 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
        <p>
          We started this agency because we saw the same pattern everywhere:
          bloated teams, endless meetings, and products that launch months late
          and thousands over budget.
        </p>
        <p>
          We do things differently. Four senior specialists. Direct
          communication. Weekly deliverables. Full transparency on timeline,
          budget, and progress — every single week.
        </p>
        <p>
          Since 2021, we&apos;ve shipped 40+ products across 12 industries.
          Our clients range from pre-seed startups to mid-market companies
          doing $50M+ in annual revenue. We treat every project like it&apos;s
          our own.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {TEAM.map((m) => (
          <div
            key={m.role}
            className="rounded-2xl border border-white/[0.08] bg-black/[0.26] p-6 backdrop-blur-md"
          >
            <p className="text-sm font-semibold text-white">{m.name}</p>
            <p className="mt-1 text-[11px] font-medium tracking-wide text-brand uppercase">
              {m.role}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">{m.bio}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-white/[0.08] bg-black/[0.26] p-8 backdrop-blur-md">
        <ScrollRevealHeading
          as="h3"
          level="subsection"
          className="text-lg font-semibold text-white"
        >
          Why Teams Trust Us
        </ScrollRevealHeading>
        <ul className="mt-6 space-y-3 text-sm text-zinc-300">
          {TRUST.map((t) => (
            <li key={t} className="flex gap-3">
              <span className="shrink-0 text-brand" aria-hidden>
                {"\u2713"}
              </span>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
