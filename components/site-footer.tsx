import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer
      data-header-theme="dark"
      className="relative overflow-hidden border-t border-border/60 bg-primary text-primary-foreground"
    >
      <div className="pointer-events-none absolute -top-24 right-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative mx-auto grid w-full max-w-[110rem] gap-12 px-6 py-20 md:grid-cols-[1.4fr_1fr_1fr] md:px-10">
        <div>
          <Image
            src="/logo-mark.png"
            alt="Rushi Reset"
            width={410}
            height={384}
            className="h-24 w-auto object-contain mix-blend-lighten md:h-28"
          />
          <span className="sr-only">Rushi Reset</span>
          <p className="mt-6 max-w-sm text-pretty text-primary-foreground/75">
            Rushi Reset — lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Designing a lifestyle you love, one small joyful shift at a
            time.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
            Explore
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/" className="hover:text-accent">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent">
                About
              </Link>
            </li>
            <li>
              <Link href="/book" className="hover:text-accent">
                Book a call
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
            Stay in touch
          </p>
          <form className="mt-4 flex max-w-xs items-center gap-2 border-b border-primary-foreground/30 pb-2">
            <input
              type="email"
              placeholder="you@example.com"
              aria-label="Email address"
              className="w-full bg-transparent text-sm outline-none placeholder:text-primary-foreground/50"
            />
            <button
              type="button"
              className="text-xs uppercase tracking-[0.2em] text-accent"
            >
              Join
            </button>
          </form>
          <p className="mt-4 text-xs text-primary-foreground/60">
            Monthly letter. No spam, ever.
          </p>
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-[110rem] items-center justify-between px-6 py-6 text-xs text-primary-foreground/60 md:px-10">
        <p>© {new Date().getFullYear()} Rushi Reset. All rights reserved.</p>
        <p>Lorem ipsum — placeholder site.</p>
      </div>

      <div className="pointer-events-none select-none overflow-hidden">
        <p className="font-[family-name:var(--font-display)] text-[22vw] leading-[0.9] tracking-tight text-primary-foreground/10">
rushireset
        </p>
      </div>
    </footer>
  );
}
