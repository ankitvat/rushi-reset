import Image from "next/image";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/utils";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { ParallaxText } from "@/components/parallax-text";
import { HeroMouse, MouseLayer } from "@/components/hero-mouse";

export const metadata = {
  title: "About — Rushi Reset",
  description:
    "IIN-certified health coach. From 84 kgs and binge eating to 35 kgs down and embodying health — Aarushi Chawla's story, philosophy, and credentials.",
};

const values = [
  {
    n: "I.",
    t: "Lead with lifestyle",
    d: "Health is not just food. Sleep, stress, movement, mindset — your body is an ecosystem, not a meal plan.",
  },
  {
    n: "II.",
    t: "Sustainable over extreme",
    d: "Crash diets and punishing workouts collapse. Small, consistent shifts compound into a body you keep.",
  },
  {
    n: "III.",
    t: "Educate, don't dictate",
    d: "I teach you how your body actually works — so you become self-sufficient, not dependent on plans.",
  },
  {
    n: "IV.",
    t: "Embody the work",
    d: "I follow everything I teach. You learn from someone who has lived it, not someone reading from a book.",
  },
];

const certifications = [
  {
    name: "IIN Certified Health Coach",
    org: "Institute for Integrative Nutrition",
  },
  {
    name: "Precision Nutrition — Level 1",
    org: "PN nutrition certification",
  },
  {
    name: "Nutrition Certificate",
    org: "Bodhi Nutrition Academy",
  },
  {
    name: "MSc Management",
    org: "University of Warwick, United Kingdom",
  },
  {
    name: "BCom (Hons)",
    org: "Jesus and Mary College, Delhi University",
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
                  <h1 className="font-[family-name:var(--font-display)] text-[12vw] leading-[0.92] tracking-tighter md:text-[9.5vw]">
                    Hi, I&apos;m{" "}
                    <span className="italic text-accent">Aarushi.</span>
                  </h1>
                </Reveal>
              </MouseLayer>
              <MouseLayer depth={22} className="md:col-span-4 md:pb-4">
                <Reveal delay={0.2}>
                  <p className="text-pretty text-lg text-foreground/80">
                    Certified health coach from the Institute for Integrative
                    Nutrition. Someone who has completely transformed her own
                    body — and now helps you do the same.
                  </p>
                </Reveal>
              </MouseLayer>
            </div>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-12 md:gap-10">
            <MouseLayer depth={50} className="md:col-span-7">
              <Reveal y={60}>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-[0_24px_70px_-40px_rgba(35,48,26,0.35)]">
                  <Image
                    src="/image-2.jpg"
                    alt="Aarushi Chawla — health and lifestyle coaching"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 58vw, 100vw"
                    priority
                  />
                </div>
              </Reveal>
            </MouseLayer>
            <MouseLayer depth={38} invert className="md:col-span-5 md:pt-24">
              <Reveal y={60} delay={0.15}>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-[0_24px_70px_-40px_rgba(35,48,26,0.35)]">
                  <Image
                    src="/image-3.jpg"
                    alt="Aarushi Chawla — transformation and sustainable habits"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 42vw, 100vw"
                  />
                </div>
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
              From 84 kgs
              <br />
              <span className="italic text-accent">to embodied.</span>
            </h2>
          </Reveal>
          <div className="md:col-span-7 md:col-start-6">
            <Stagger gap={0.1} className="space-y-8 text-lg text-foreground/85">
              <StaggerItem>
                <p>
                  At 18, I weighed 84 kgs and struggled with binge eating,
                  stress eating, and a sedentary lifestyle. Like many, I
                  followed conventional diet plans — but instead of improving my
                  health, I faced hair fall, acne, and hormonal imbalances.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p>
                  That&apos;s when I took control. I began studying nutrition
                  deeply, experimenting on myself, and understanding what truly
                  works — not just for weight loss, but for overall health.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p>
                  Over the years, I lost 35 kgs, built muscle, and transformed
                  not just my body, but my skin, hair, sleep, and lifestyle.
                  What started as a personal mission turned into a decade-long
                  journey of learning, unlearning, and rebuilding.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p className="font-[family-name:var(--font-display)] text-2xl leading-[1.3] tracking-tight text-foreground md:text-3xl">
                  Today, I stand as proof that your body is not
                  &lsquo;fixed&rsquo; by genetics —
                  <span className="italic text-accent">
                    {" "}
                    you can completely transform it with the right approach.
                  </span>
                </p>
              </StaggerItem>
            </Stagger>
          </div>
        </div>
      </section>

      {/* GALLERY — lifestyle & nutrition */}
      <section className="relative px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid w-full max-w-[110rem] gap-6 md:grid-cols-2 md:gap-8">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border/60 shadow-[0_20px_60px_-40px_rgba(35,48,26,0.3)]">
              <Image
                src="/image-4.jpg"
                alt="Lifestyle and coaching in practice"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 45vw, 100vw"
              />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border/60 shadow-[0_20px_60px_-40px_rgba(35,48,26,0.3)]">
              <Image
                src="/food-image.jpg"
                alt="Healthy meal preparation and sustainable nutrition"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 45vw, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <ParallaxText baseVelocity={0.6}>
        lived it · embody it · teach it ·
      </ParallaxText>

      {/* VALUES */}
      <section className="relative px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto w-full max-w-[110rem]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/70">
              (What I believe)
            </p>
            <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-[1] tracking-tight md:text-7xl">
              Four principles that shape
              <span className="italic text-accent"> every plan.</span>
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

      {/* HOW IT WORKS — the 5-step process */}
      <section className="relative px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto grid w-full max-w-[110rem] gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/70">
              (How it works)
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl leading-[1] tracking-tight md:text-6xl">
              Every plan is
              <span className="italic text-accent"> personalized.</span>
            </h2>
            <p className="mt-6 max-w-md text-foreground/80">
              No two bodies are the same — so no two plans are either.
              Here&apos;s how we work together.
            </p>
            <div className="mt-10 max-w-sm md:mt-12 md:max-w-none">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border/50 shadow-[0_20px_60px_-40px_rgba(35,48,26,0.3)]">
                <video
                  className="absolute inset-0 size-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/food-image.jpg"
                  aria-label="Nutrition and meals as part of personalized coaching"
                >
                  <source src="/food-2.webm" type="video/webm" />
                  <source src="/food-2.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </Reveal>
          <Stagger gap={0.1} className="md:col-span-7 md:col-start-6 space-y-6">
            {[
              {
                n: "01",
                t: "Understand",
                d: "Your body, lifestyle, history, and goals — mapped honestly.",
              },
              {
                n: "02",
                t: "Build",
                d: "A customized nutrition + fitness plan designed around your real life.",
              },
              {
                n: "03",
                t: "Implement",
                d: "Guided execution with steady accountability and weekly check-ins.",
              },
              {
                n: "04",
                t: "Optimize",
                d: "Track progress, adjust every 2 weeks, refine as your body changes.",
              },
              {
                n: "05",
                t: "Educate",
                d: "Hand you the knowledge so you become self-sufficient for life.",
              },
            ].map((step) => (
              <StaggerItem
                key={step.n}
                className="flex gap-6 border-t border-border/70 pt-6"
              >
                <span className="font-[family-name:var(--font-display)] text-2xl text-accent">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-tight">
                    {step.t}
                  </h3>
                  <p className="mt-2 text-foreground/75">{step.d}</p>
                </div>
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
              Trained, certified,
              <br />
              <span className="italic text-accent">still learning.</span>
            </h2>
          </Reveal>
          <Stagger gap={0.1} className="md:col-span-6 md:col-start-7 space-y-2">
            {certifications.map((c) => (
              <StaggerItem
                key={c.name}
                className="border-t border-primary-foreground/20 pt-5 pb-1"
              >
                <p className="font-[family-name:var(--font-display)] text-2xl leading-tight tracking-tight md:text-3xl">
                  {c.name}
                </p>
                <p className="mt-1 text-sm text-primary-foreground/65">
                  {c.org}
                </p>
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
              Ready to build a body and
              <br />
              <span className="italic text-accent">
                lifestyle you sustain for life?
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-xl text-foreground/80">
              A free, no-pressure call to understand your goals and see if
              we&apos;re a fit. Bring your questions and the version of you
              you&apos;re ready to meet.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Book a free chat
                <span
                  aria-hidden
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
              <Link
                href="/plans"
                className="inline-flex items-center gap-3 rounded-full border border-foreground/30 px-7 py-4 text-sm transition-colors hover:border-foreground"
              >
                Explore plans
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
