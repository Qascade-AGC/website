import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.08] bg-black px-5 py-16 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <p className="text-sm font-semibold tracking-tight text-white uppercase">
            Qascade
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-zinc-500">
            We build digital products that drive revenue.
          </p>
        </div>
        <div>
          <p className="mb-4 text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">
            Services
          </p>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>
              <Link href="/#services" className="hover:text-white">
                Web Applications
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-white">
                MVP Development
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-white">
                E-Commerce
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-white">
                SaaS Platforms
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-white">
                AI Integration
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-white">
                DevSecOps
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-4 text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">
            Company
          </p>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>
              <Link href="/#about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-white">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/#process" className="hover:text-white">
                Process
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-4 text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">
            Get in Touch
          </p>
          <p className="text-sm text-zinc-400">
            <a
              href="mailto:hello@qascade.com"
              className="text-white hover:underline"
            >
              hello@qascade.com
            </a>
          </p>
          <p className="mt-2 text-sm text-zinc-500">Warsaw, Poland</p>
          <div className="mt-4 flex flex-wrap gap-3 text-[11px] text-zinc-500">
            <span>LinkedIn</span>
            <span>·</span>
            <span>X</span>
            <span>·</span>
            <span>Dribbble</span>
            <span>·</span>
            <span>GitHub</span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-center text-[11px] text-zinc-600 sm:flex-row sm:text-left">
        <p>© 2026 Qascade. All rights reserved.</p>
        <p>
          <a href="#" className="hover:text-zinc-400">
            Privacy Policy
          </a>
          <span className="mx-2">·</span>
          <a href="#" className="hover:text-zinc-400">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
}
