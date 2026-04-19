import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { ParallaxText } from "@/components/parallax-text";
import { Marquee } from "@/components/marquee";
import { Shimmer } from "@/components/shimmer";
import { ParallaxShimmer } from "@/components/parallax-shimmer";
import { HeroMouse, MouseLayer } from "@/components/hero-mouse";

const services = [
  {
    tag: "01",
    title: "1:1 Coaching",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A twelve-week private container built around your rhythm, your goals, and your season of life.",
  },
  {
    tag: "02",
    title: "Group Workshops",
    body: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Small-group reset circles for friends, teams, or community gatherings.",
  },
  {
    tag: "03",
    title: "Corporate",
    body: "Vestibulum ac diam sit amet quam vehicula elementum. Speaking, workshops, and ongoing wellness programming for purpose-led companies.",
  },
];

const promises = [
  "Joy over restriction",
  "Small, sustainable shifts",
  "Science-backed habit design",
  "Whole-person wellness",
];

export default function Home() {
  return (
    <div className="relative">
      {/* HERO */}
      <HeroMouse>
        <section className="relative overflow-hidden px-6 pt-12 md:px-10 md:pt-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[90%] bg-[radial-gradient(ellipse_60%_70%_at_50%_0%,color-mix(in_oklab,var(--cream)_55%,transparent)_0%,transparent_70%)]"
          />
          <div className="mx-auto grid w-full max-w-[110rem] gap-10 md:grid-cols-12 md:gap-16">
            <div className="relative z-10 md:col-span-7 md:pt-24">
              <MouseLayer depth={14}>
                <Reveal>
                  <p className="mb-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground/70">
                    <span className="h-px w-10 bg-accent" />
                    Holistic Health &amp; Wellness Coach
                  </p>
                </Reveal>
              </MouseLayer>
              <MouseLayer depth={8} invert>
                <Stagger gap={0.08}>
                  <h1 className="font-[family-name:var(--font-display)] text-[13vw] leading-[0.9] tracking-tighter md:text-[9vw]">
                    <StaggerItem>
                      <span className="block">Fall in love</span>
                    </StaggerItem>
                    <StaggerItem>
                      <span className="block italic text-accent">
                        with your
                      </span>
                    </StaggerItem>
                    <StaggerItem>
                      <span className="block">lifestyle.</span>
                    </StaggerItem>
                  </h1>
                </Stagger>
              </MouseLayer>
              <MouseLayer depth={20}>
                <Reveal delay={0.4} className="mt-10 max-w-md">
                  <p className="text-pretty text-lg text-foreground/80">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Personalised coaching that leads with joy — never
                    restriction — to help you design a way of living you
                    actually love.
                  </p>
                </Reveal>
                <Reveal delay={0.55} className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/book"
                    className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm text-primary-foreground transition-all hover:bg-accent hover:text-accent-foreground"
                  >
                    Book a free chat
                    <span
                      aria-hidden
                      className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-3 rounded-full border border-foreground/30 px-7 py-4 text-sm transition-colors hover:border-foreground"
                  >
                    Meet Rushi
                  </Link>
                </Reveal>
              </MouseLayer>
            </div>

            <div className="relative md:col-span-5">
              <MouseLayer depth={42}>
                <Reveal y={60}>
                  <ParallaxShimmer
                    strength={70}
                    className="aspect-[4/5] w-full rounded-[2rem]"
                  />
                </Reveal>
              </MouseLayer>
              <MouseLayer depth={60} invert>
                <Reveal delay={0.25} y={40}>
                  <div className="absolute -bottom-8 -left-6 hidden w-56 rounded-3xl bg-card p-5 shadow-[0_20px_60px_-30px_rgba(35,48,26,0.45)] md:block">
                    <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">
                      NBC-HWC certified
                    </p>
                    <p className="mt-2 font-[family-name:var(--font-display)] text-2xl leading-tight">
                      Trusted by 200+ clients worldwide
                    </p>
                  </div>
                </Reveal>
              </MouseLayer>
            </div>
          </div>

          <div className="mt-24 md:mt-40">
            <ParallaxText baseVelocity={-0.6}>
              lead with joy — not restriction —
            </ParallaxText>
          </div>
        </section>
      </HeroMouse>

      {/* INTRO / INTENTION */}
      <section className="relative px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto grid w-full max-w-[110rem] gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/70">
              (Intention)
            </p>
          </Reveal>
          <div className="md:col-span-8">
            <Reveal>
              <h2 className="font-[family-name:var(--font-display)] text-4xl leading-[1.05] tracking-tight md:text-6xl">
                A warm, relaxed space where
                <span className="italic text-accent"> you truly belong </span>
                — and leave feeling uplifted, confident, and genuinely you.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <Reveal delay={0.15}>
                <p className="text-foreground/80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  aliquam, nisl at aliquet interdum, risus libero tempor nisl,
                  non pretium mauris arcu vitae justo.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-foreground/80">
                  Praesent euismod, nisl eget aliquet luctus, sapien lectus
                  pharetra lorem, ut volutpat sapien mauris non justo. A whole-
                  person approach rooted in behaviour change science.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* PROMISES MARQUEE */}
      <Marquee items={promises} />

      {/* SERVICES */}
      <section className="relative px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto w-full max-w-[110rem]">
          <div className="grid gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.3em] text-foreground/70">
                (Work with me)
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl leading-[1] tracking-tight md:text-7xl">
                Ways in.
              </h2>
            </Reveal>
            <Reveal delay={0.2} className="md:col-span-6 md:col-start-7">
              <p className="max-w-md text-foreground/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Whether
                you&apos;re just beginning or ready to go deep, there is a room
                for you here.
              </p>
            </Reveal>
          </div>

          <Stagger gap={0.12} className="mt-20 grid gap-px bg-border/70 md:grid-cols-3">
            {services.map((s) => (
              <StaggerItem
                key={s.tag}
                className="group relative flex flex-col gap-6 bg-background p-8 transition-colors duration-500 hover:bg-card md:p-12"
              >
                <div className="flex items-baseline justify-between">
                  <span className="text-xs uppercase tracking-[0.3em] text-foreground/60">
                    {s.tag}
                  </span>
                  <span
                    aria-hidden
                    className="inline-block translate-x-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    ↗
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-3xl tracking-tight md:text-4xl">
                  {s.title}
                </h3>
                <p className="text-foreground/75">{s.body}</p>
                <Link
                  href="/book"
                  className="mt-auto inline-flex items-center gap-2 text-sm text-accent"
                >
                  Learn more
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* APPROACH — image + sticky copy */}
      <section
        data-header-theme="dark"
        className="relative bg-primary text-primary-foreground"
      >
        <div className="mx-auto grid w-full max-w-[110rem] gap-10 px-6 py-28 md:grid-cols-12 md:gap-16 md:px-10 md:py-40">
          <div className="md:col-span-6">
            <Reveal>
              <ParallaxShimmer
                strength={60}
                className="aspect-[4/5] w-full rounded-[2rem]"
              />
            </Reveal>
          </div>
          <div className="md:col-span-6">
            <div className="md:sticky md:top-28">
              <Reveal>
                <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60">
                  (The approach)
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl leading-[1.02] tracking-tight md:text-7xl">
                  Small, joyful shifts — held gently over time.
                </h2>
              </Reveal>
              <Stagger gap={0.12} className="mt-10 space-y-6">
                {[
                  {
                    n: "01",
                    t: "Discovery",
                    d: "Lorem ipsum. We map where you are, where you want to go, and what&apos;s quietly been in the way.",
                  },
                  {
                    n: "02",
                    t: "Design",
                    d: "Curabitur non nulla. Together we design a rhythm that works with your real life — not against it.",
                  },
                  {
                    n: "03",
                    t: "Devotion",
                    d: "Vestibulum ac diam. Weekly support, gentle accountability, and steady recalibration.",
                  },
                ].map((step) => (
                  <StaggerItem
                    key={step.n}
                    className="flex gap-6 border-t border-primary-foreground/20 pt-6"
                  >
                    <span className="font-[family-name:var(--font-display)] text-2xl text-accent">
                      {step.n}
                    </span>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-2xl">
                        {step.t}
                      </h3>
                      <p
                        className="mt-2 text-primary-foreground/75"
                        dangerouslySetInnerHTML={{ __html: step.d }}
                      />
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="relative px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto w-full max-w-5xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
              (What clients say)
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="mt-10 font-[family-name:var(--font-display)] text-3xl leading-[1.2] tracking-tight md:text-5xl">
              &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              For the first time in years I feel{" "}
              <span className="italic text-accent">in rhythm</span> with myself
              — gentle, energised, and genuinely enjoying the process.&rdquo;
            </blockquote>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 inline-flex items-center gap-4">
              <Shimmer className="h-12 w-12" rounded="full" />
              <div className="text-left text-sm">
                <p className="font-medium">Rowan M.</p>
                <p className="text-foreground/60">1:1 client, 12 weeks</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-6 pb-28 md:px-10 md:pb-40">
        <div className="relative mx-auto w-full max-w-[110rem] overflow-hidden rounded-[2.5rem] bg-accent p-10 text-accent-foreground md:p-20">
          <div className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary/40 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-12 md:items-end">
            <Reveal className="md:col-span-8">
              <p className="text-xs uppercase tracking-[0.3em]">
                (Ready to begin)
              </p>
              <h2 className="mt-6 font-[family-name:var(--font-display)] text-5xl leading-[1] tracking-tight md:text-8xl">
                Start putting yourself first.
              </h2>
            </Reveal>
            <Reveal delay={0.2} className="md:col-span-4">
              <p className="mb-8 text-accent-foreground/90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A free
                30-minute chat to see if we&apos;re a fit.
              </p>
              <Link
                href="/book"
                className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm text-primary-foreground transition-colors hover:bg-foreground"
              >
                Book a free chat
                <span
                  aria-hidden
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
