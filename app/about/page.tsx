import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { ParallaxText } from "@/components/parallax-text";
import { ParallaxShimmer } from "@/components/parallax-shimmer";
import { HeroMouse, MouseLayer } from "@/components/hero-mouse";

export const metadata = {
  title: "About — Rushi Reset",
  description:
    "National Board Certified Health & Wellness Coach. Lorem ipsum about story and philosophy.",
};

const values = [
  {
    n: "I.",
    t: "Lead with joy",
    d: "Lorem ipsum dolor sit amet. The things that light you up are not frivolous — they are the map.",
  },
  {
    n: "II.",
    t: "Small, steady shifts",
    d: "Consectetur adipiscing elit. Tiny, compound choices outpace any diet or quick fix, every single time.",
  },
  {
    n: "III.",
    t: "Whole-person care",
    d: "Curabitur non nulla. Nutrition, movement, sleep, relationships, work — your life is an ecosystem, not a checklist.",
  },
  {
    n: "IV.",
    t: "Evidence, gently held",
    d: "Vestibulum ac diam. Behaviour change science meets real lives, warm tone, and plenty of space to be human.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative">
      {/* HERO */}
      <HeroMouse>
        <section className="relative overflow-hidden px-6 pt-16 pb-20 md:px-10 md:pt-28 md:pb-32">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[80%] bg-[radial-gradient(ellipse_55%_65%_at_50%_0%,color-mix(in_oklab,var(--cream)_50%,transparent)_0%,transparent_70%)]"
          />
          <div className="mx-auto w-full max-w-[110rem]">
            <MouseLayer depth={14}>
              <Reveal>
                <p className="text-xs uppercase tracking-[0.3em] text-foreground/70">
                  (About)
                </p>
              </Reveal>
            </MouseLayer>
            <div className="mt-6 grid gap-10 md:grid-cols-12 md:items-end">
              <MouseLayer depth={10} invert className="md:col-span-8">
                <Reveal>
                  <h1 className="font-[family-name:var(--font-display)] text-[12vw] leading-[0.92] tracking-tighter md:text-[10vw]">
                    Hi, I&apos;m{" "}
                    <span className="italic text-accent">Rushi.</span>
                  </h1>
                </Reveal>
              </MouseLayer>
              <MouseLayer depth={22} className="md:col-span-4 md:pb-4">
                <Reveal delay={0.2}>
                  <p className="text-pretty text-lg text-foreground/80">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    National Board Certified Health &amp; Wellness Coach,
                    behaviour change nerd, and first-time mum.
                  </p>
                </Reveal>
              </MouseLayer>
            </div>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-12 md:gap-10">
            <MouseLayer depth={50} className="md:col-span-7">
              <Reveal y={60}>
                <ParallaxShimmer
                  strength={80}
                  className="aspect-[4/5] w-full rounded-[2rem]"
                />
              </Reveal>
            </MouseLayer>
            <MouseLayer
              depth={38}
              invert
              className="md:col-span-5 md:pt-24"
            >
              <Reveal y={60} delay={0.15}>
                <ParallaxShimmer
                  strength={60}
                  className="aspect-[4/5] w-full rounded-[2rem]"
                />
              </Reveal>
            </MouseLayer>
          </div>
        </section>
      </HeroMouse>

      {/* STORY */}
      <section className="relative px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto grid w-full max-w-[110rem] gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/70">
              (My story)
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl leading-[1] tracking-tight md:text-6xl">
              From yo-yo to <span className="italic text-accent">rhythm.</span>
            </h2>
          </Reveal>
          <div className="md:col-span-7 md:col-start-6">
            <Stagger gap={0.1} className="space-y-8 text-lg text-foreground/85">
              <StaggerItem>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. For
                  years I lived in all-or-nothing — either late nights and
                  convenience food, or restrictive plans and punishing workouts.
                  There was no middle.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p>
                  Curabitur non nulla sit amet nisl tempus convallis quis ac
                  lectus. I believed I had to earn health through suffering, and
                  that belief left me constantly chasing a finish line that
                  never actually arrived.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p>
                  Vestibulum ac diam sit amet quam vehicula elementum sed sit
                  amet dui. Slowly — through research, training, and a lot of
                  honest inner work — I found another way: a lifestyle built
                  around what brings me alive.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p className="font-[family-name:var(--font-display)] text-2xl leading-[1.3] tracking-tight text-foreground md:text-3xl">
                  Now I help others do the same — designing a life they actually
                  love, <span className="italic text-accent">joy first.</span>
                </p>
              </StaggerItem>
            </Stagger>
          </div>
        </div>
      </section>

      <ParallaxText baseVelocity={0.6}>
        joy first · lifestyle you love · joy first ·
      </ParallaxText>

      {/* VALUES */}
      <section className="relative px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto w-full max-w-[110rem]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/70">
              (What I believe)
            </p>
            <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-[1] tracking-tight md:text-7xl">
              Four quiet principles guide every session.
            </h2>
          </Reveal>
          <Stagger
            gap={0.12}
            className="mt-16 grid gap-px bg-border/70 md:grid-cols-2"
          >
            {values.map((v) => (
              <StaggerItem
                key={v.n}
                className="flex flex-col gap-5 bg-background p-8 md:p-12"
              >
                <span className="font-[family-name:var(--font-display)] text-3xl text-accent">
                  {v.n}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-3xl tracking-tight md:text-4xl">
                  {v.t}
                </h3>
                <p className="text-foreground/75">{v.d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section
        data-header-theme="dark"
        className="relative bg-primary px-6 py-28 text-primary-foreground md:px-10 md:py-40"
      >
        <div className="mx-auto grid w-full max-w-[110rem] gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60">
              (Credentials)
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl leading-[1] tracking-tight md:text-6xl">
              Trained, tested, and still learning.
            </h2>
          </Reveal>
          <Stagger
            gap={0.1}
            className="md:col-span-6 md:col-start-7 space-y-4"
          >
            {[
              "National Board Certified Health & Wellness Coach (NBC-HWC)",
              "Institute for Integrative Nutrition — Lorem graduate",
              "Precision Nutrition Level 1 — Ipsum certified",
              "Perinatal Wellness Specialist — dolor sit amet",
              "Ongoing CPD in behaviour change & motivational interviewing",
            ].map((line) => (
              <StaggerItem
                key={line}
                className="flex items-start gap-4 border-t border-primary-foreground/20 pt-4 text-lg"
              >
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{line}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-5xl leading-[1] tracking-tight md:text-7xl">
              I&apos;m already excited to{" "}
              <span className="italic text-accent">
                start this journey with you.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-xl text-foreground/80">
              Lorem ipsum dolor sit amet. A free, no-pressure chat to see if
              we&apos;re a fit. Bring your questions, your context, and the
              version of you you&apos;re ready to meet.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <Link
              href="/book"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
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
      </section>
    </div>
  );
}
