import Image from "next/image";
import { CALENDLY_URL } from "@/lib/utils";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { ParallaxText } from "@/components/parallax-text";
import { HeroMouse, MouseLayer } from "@/components/hero-mouse";
import { PlanCard, type Plan } from "@/components/plan-card";

export const metadata = {
  title: "Plans — Rushi Reset",
  description:
    "1, 3, and 6-month personalized coaching plans with Aarushi Chawla. Customized nutrition, training, lifestyle coaching, weekly calls, and 24/7 WhatsApp support.",
};

const plans: Plan[] = [
  {
    id: "1m",
    duration: "1 Month",
    weeks: "4 Weeks",
    title: "Transformation",
    tagline: "Get started.",
    description:
      "Build initial habits, understand your body, and experience the coaching style before committing long-term.",
    bullets: [
      "4 weeks of structured coaching",
      "2 customized plan updates (every 2 weeks)",
      "4 weekly 1:1 check-in calls",
      "24/7 WhatsApp support",
    ],
    bestFor:
      "Beginners, short-term goals, or those who want a taste before going deeper.",
  },
  {
    id: "3m",
    duration: "3 Month",
    weeks: "12 Weeks",
    title: "Transformation",
    tagline: "Visible change.",
    description:
      "The most effective duration to see real fat loss, strength gain, and habit formation that actually sticks.",
    bullets: [
      "12 weeks of coaching",
      "6 customized plan updates (every 2 weeks)",
      "12 weekly 1:1 check-in calls",
      "24/7 WhatsApp support",
    ],
    bestFor:
      "Sustainable fat loss, muscle building, lifestyle habits, and visible body transformation.",
    popular: true,
  },
  {
    id: "6m",
    duration: "6 Month",
    weeks: "24 Weeks",
    title: "Complete Transformation",
    tagline: "Lifestyle overhaul.",
    description:
      "A complete lifestyle reset with deep, lasting results. The plan for people ready to fully rebuild.",
    bullets: [
      "24 weeks of coaching",
      "12 customized plan updates (every 2 weeks)",
      "24 weekly 1:1 check-in calls",
      "24/7 WhatsApp support",
    ],
    bestFor:
      "Major transformations, reversing lifestyle disorders, long-term habit building, and maintaining results.",
  },
];

const included = [
  {
    t: "Nutrition Plan",
    d: "Customized to your body, preferences, culture, and goals — never generic.",
  },
  {
    t: "Workout / Movement",
    d: "Strength training + daily activity guidance (home or gym, your choice).",
  },
  {
    t: "Supplement Guidance",
    d: "Only what your body actually needs — no over-prescribing.",
  },
  {
    t: "Grocery Lists",
    d: "Practical, easy-to-follow shopping guidance so meal prep stays simple.",
  },
  {
    t: "Lifestyle Coaching",
    d: "Sleep, stress, digestion, routines, and the habits that hold it all together.",
  },
  {
    t: "Recipe Support",
    d: "Simple, sustainable meal ideas you can actually cook on a weekday.",
  },
];

const howItWorks = [
  {
    n: "01",
    t: "Plans update every 2 weeks",
    d: "Your nutrition and training are refreshed every fortnight based on real progress, not guesswork.",
  },
  {
    n: "02",
    t: "Weekly 1:1 call with me",
    d: "We review, adjust, and optimize together. You stay accountable; I stay close to your data.",
  },
  {
    n: "03",
    t: "24/7 WhatsApp access",
    d: "Doubts, slip-ups, restaurant menus, weekend dinners — message me. I&apos;m on it.",
  },
];

export default function PlansPage() {
  return (
    <div className="relative">
      {/* HERO */}
      <HeroMouse>
        <section className="relative overflow-hidden px-6 pt-16 pb-12 md:px-10 md:pt-28">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(ellipse_55%_70%_at_50%_0%,color-mix(in_oklab,var(--cream)_50%,transparent)_0%,transparent_70%)]"
          />
          <div className="mx-auto w-full max-w-[110rem]">
            <MouseLayer depth={14}>
              <Reveal>
                <p className="text-xs uppercase tracking-[0.3em] text-foreground/70">
                  (Coaching plans)
                </p>
              </Reveal>
            </MouseLayer>
            <MouseLayer depth={10} invert>
              <Reveal delay={0.08}>
                <h1 className="mt-6 font-[family-name:var(--font-display)] text-[13vw] leading-[0.9] tracking-tighter md:text-[9vw]">
                  Built around
                  <br />
                  <span className="italic text-accent">your body.</span>
                </h1>
              </Reveal>
            </MouseLayer>
            <MouseLayer depth={22}>
              <Reveal delay={0.2} className="mt-24 max-w-2xl">
                <p className="text-pretty text-lg text-foreground/80">
                  Three durations. One promise: a fully personalized plan, a
                  weekly call, and direct access to me and my team. Pick the
                  timeline that matches the depth of change you&apos;re ready
                  for.
                </p>
              </Reveal>
            </MouseLayer>
          </div>
        </section>
      </HeroMouse>

      {/* PLAN CARDS */}
      <section className="relative px-6 pb-24 md:px-10 md:pb-32">
        <Stagger
          gap={0.12}
          className="mx-auto grid w-full max-w-[110rem] gap-6 md:grid-cols-3 md:gap-8"
        >
          {plans.map((p, i) => (
            <StaggerItem key={p.id}>
              <PlanCard plan={p} index={i} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <ParallaxText baseVelocity={-0.6}>
        personalized · accountable · sustainable ·
      </ParallaxText>

      {/* WHAT'S INCLUDED */}
      <section className="relative px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto w-full max-w-[110rem]">
          <div className="grid gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <p className="text-xs uppercase tracking-[0.3em] text-foreground/70">
                (Every plan includes)
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl leading-[1] tracking-tight md:text-7xl">
                Fully
                <span className="italic text-accent"> personalized.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2} className="md:col-span-6 md:col-start-7">
              <p className="max-w-md text-foreground/80">
                Every coaching program is built from scratch around you. No
                templates, no copy-paste plans — your body, preferences, and
                routine shape every detail.
              </p>
            </Reveal>
          </div>

          <Stagger
            gap={0.08}
            className="mt-16 grid gap-px bg-border/70 sm:grid-cols-2 md:grid-cols-3"
          >
            {included.map((item, i) => (
              <StaggerItem
                key={item.t}
                className="group flex flex-col gap-4 bg-background p-8 transition-colors duration-500 hover:bg-card md:p-10"
              >
                <span className="text-xs uppercase tracking-[0.3em] text-foreground/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-tight md:text-3xl">
                  {item.t}
                </h3>
                <p className="text-foreground/75">{item.d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* HOW COACHING WORKS */}
      <section
        data-header-theme="dark"
        className="relative bg-primary text-primary-foreground"
      >
        <div className="mx-auto grid w-full max-w-[110rem] gap-10 px-6 py-28 md:grid-cols-12 md:gap-16 md:px-10 md:py-40">
          <div className="md:col-span-5">
            <div className="md:sticky md:top-28">
              <Reveal>
                <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60">
                  (How coaching works)
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl leading-[1] tracking-tight md:text-6xl">
                  Close support,
                  <br />
                  <span className="italic text-accent">every step.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="relative mx-auto mt-8 aspect-[4/3] w-full max-w-[16rem] overflow-hidden rounded-2xl ring-1 ring-primary-foreground/15 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.35)] sm:max-w-[18rem] md:mx-0 md:mt-10 md:max-w-[20rem] lg:max-w-[22rem]">
                  <Image
                    src="/image-5.jpg"
                    alt="Personal coaching — support, accountability, and real-life guidance"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 320px, 256px"
                  />
                </div>
              </Reveal>
            </div>
          </div>
          <Stagger gap={0.12} className="md:col-span-7 space-y-6">
            {howItWorks.map((step) => (
              <StaggerItem
                key={step.n}
                className="flex gap-6 border-t border-primary-foreground/20 pt-6"
              >
                <span className="font-[family-name:var(--font-display)] text-3xl text-accent">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-3xl tracking-tight md:text-4xl">
                    {step.t}
                  </h3>
                  <p
                    className="mt-3 text-primary-foreground/80"
                    dangerouslySetInnerHTML={{ __html: step.d }}
                  />
                </div>
              </StaggerItem>
            ))}
            <Reveal delay={0.5}>
              <p className="mt-12 font-[family-name:var(--font-display)] text-2xl leading-[1.3] tracking-tight md:text-3xl">
                You get direct access to me and my trained team —
                <span className="italic text-accent">
                  {" "}
                  like a coach and a buddy.
                </span>
              </p>
            </Reveal>
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
              (Not sure which plan?)
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-[family-name:var(--font-display)] text-5xl leading-[1] tracking-tight md:text-7xl">
              Let&apos;s talk it through.
            </h2>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mx-auto mt-8 max-w-xl text-foreground/80">
              Book a free 30-minute call. I&apos;ll listen to your goals, your
              history, and your real life — and recommend the plan that fits.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Book a free chat
              <span
                aria-hidden
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
