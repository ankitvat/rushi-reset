import Image from "next/image";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/utils";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { Marquee } from "@/components/marquee";
import { HeroMouse, MouseLayer } from "@/components/hero-mouse";
import { SketchArrow } from "@/components/sketch-arrow";
import { TestimonialsMarquee } from "@/components/testimonials-marquee";
import { BeforeAfterGallery } from "@/components/before-after-gallery";

const usp = [
  {
    tag: "01",
    title: "I've lived it",
    body: "Lost 35 kgs and kept it off long-term. I don't just guide — I follow everything I teach.",
  },
  {
    tag: "02",
    title: "Practical, not theoretical",
    body: "No crash diets, no extreme cardio. A real-life system you can sustain at home, at work, with family.",
  },
  {
    tag: "03",
    title: "One complete system",
    body: "Fitness, nutrition, sleep, gut, hormones, mindset — woven together. Not a diet plan, a lifestyle.",
  },
];

const promises = [
  "Sustainable fat loss",
  "Strength & muscle",
  "Hormonal balance",
  "Gut reset",
  "Better sleep & energy",
];

const approach = [
  "Nutrition & food habits",
  "Strength training & movement",
  "Sleep & recovery",
  "Gut health & digestion",
  "Hormonal balance",
  "Your relationship with food",
];

const whoIHelp = [
  "Sustainable fat loss",
  "Muscle building & body recomposition",
  "Reversing lifestyle disorders",
  "Gut reset",
  "PCOS, thyroid & hormonal balance",
  "Better energy, digestion, skin & hair",
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
                    IIN Certified Health Coach
                  </p>
                </Reveal>
              </MouseLayer>
              <MouseLayer depth={8} invert>
                <Stagger gap={0.08}>
                  <h1 className="font-[family-name:var(--font-display)] text-[13vw] leading-[0.9] tracking-tighter md:text-[8.5vw]">
                    <StaggerItem>
                      <span className="block">Transform your body.</span>
                    </StaggerItem>
                    <StaggerItem>
                      <span className="block italic text-accent">
                        Reset your lifestyle.
                      </span>
                    </StaggerItem>
                  </h1>
                </Stagger>
              </MouseLayer>
              <MouseLayer depth={20}>
                <Reveal delay={0.4} className="mt-10 max-w-xl">
                  <p className="text-pretty text-lg text-foreground/80 mt-20">
                    I&apos;m Aarushi Chawla, an IIN-certified health coach who
                    doesn&apos;t just teach health — I&apos;ve lived it. After
                    losing 35 kgs and rebuilding my body and lifestyle from the
                    ground up, I now help you do the same — sustainably.
                  </p>
                </Reveal>
                <Reveal delay={0.55} className="mt-10 flex flex-wrap gap-4">
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm text-primary-foreground transition-all hover:bg-accent hover:text-accent-foreground"
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
                    See plans
                  </Link>
                </Reveal>
              </MouseLayer>
            </div>

            <div className="relative md:col-span-5">
              <MouseLayer depth={42}>
                <Reveal y={60}>
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1rem] shadow-[0_24px_70px_-40px_rgba(35,48,26,0.45)]">
                    <video
                      className="absolute inset-0 size-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster="/workout-image.jpg"
                      aria-label="Strength training and movement — part of a sustainable coaching approach"
                    >
                      <source src="/workout-video.MOV" type="video/quicktime" />
                    </video>
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(35,48,26,0.25)_0%,transparent_40%)]"
                    />
                  </div>
                </Reveal>
              </MouseLayer>
              <MouseLayer depth={60} invert>
                <Reveal delay={0.25} y={40}>
                  <div className="absolute -bottom-8 -left-6 hidden w-60 rounded-3xl bg-card p-5 shadow-[0_20px_60px_-30px_rgba(35,48,26,0.45)] md:block">
                    <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">
                      Down 35 kgs · Kept off
                    </p>
                    <p className="mt-2 font-[family-name:var(--font-display)] text-2xl leading-tight">
                      Lived it. Now I coach it.
                    </p>
                  </div>
                </Reveal>
              </MouseLayer>
            </div>
          </div>
        </section>
      </HeroMouse>

      {/* ABOUT ME (intro) */}
      <section className="relative px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto grid w-full max-w-[110rem] gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/70">
              (About me)
            </p>
          </Reveal>
          <div className="md:col-span-8">
            <Reveal>
              <h2 className="font-[family-name:var(--font-display)] text-4xl leading-[1.05] tracking-tight md:text-6xl">
                At 18, I weighed 84 kgs.
                <span className="italic text-accent">
                  {" "}
                  Today, I embody the results{" "}
                </span>
                — not just teach them.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <Reveal delay={0.15}>
                <p className="text-foreground/80">
                  I struggled with binge eating, stress eating, and a sedentary
                  lifestyle. Conventional diets only brought hair fall, acne,
                  and hormonal imbalances. So I took control — studied nutrition
                  deeply, experimented on myself, and learned what actually
                  works.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-foreground/80">
                  Over the years, I lost 35 kgs, built muscle, and transformed
                  not just my body — but my skin, hair, sleep, and lifestyle.
                  Now I help others walk the same road, without the guesswork.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.4} className="mt-10">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-sm tracking-wide text-accent"
              >
                Read the full story
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

      <BeforeAfterGallery />

      {/* FOOD — real meals */}
      <section className="relative px-6 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto w-full max-w-[110rem]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/70">
              (Nutrition in practice)
            </p>
            <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-3xl leading-[1.1] tracking-tight md:text-4xl">
              Food that fits
              <span className="italic text-accent"> real life.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="mt-8">
            <div className="relative aspect-video w-full overflow-hidden rounded-[1.25rem] border border-border/50 shadow-[0_24px_70px_-40px_rgba(35,48,26,0.35)] md:rounded-[2rem]">
              <video
                className="absolute inset-0 size-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Meal prep and sustainable nutrition habits"
              >
                <source src="/food-1.MOV" type="video/quicktime" />
              </video>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROMISES MARQUEE */}
      <Marquee items={promises} />

      {/* MY STORY — sticky image + steps */}
      <section className="relative px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto grid w-full max-w-[110rem] gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <div className="md:sticky md:top-28">
              <Reveal>
                <p className="text-xs uppercase tracking-[0.3em] text-foreground/70">
                  (My story)
                </p>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl leading-[1] tracking-tight md:text-6xl">
                  A decade-long
                  <span className="italic text-accent"> unlearning.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-md text-foreground/80">
                  For years, I felt stuck in a body I wasn&apos;t confident in.
                  What started as a personal mission turned into a decade of
                  learning, unlearning, and rebuilding.
                </p>
              </Reveal>
            </div>
          </div>
          <Stagger gap={0.1} className="md:col-span-7 space-y-6">
            {[
              { from: "Crash diets", to: "Sustainable nutrition" },
              { from: "Only cardio", to: "Strength training" },
              { from: "Restriction", to: "Balance" },
              { from: "Confusion", to: "Clarity" },
            ].map((row) => (
              <StaggerItem
                key={row.from}
                className="grid grid-cols-[1fr_auto_1fr] items-center gap-6 border-t border-border/70 pt-6"
              >
                <span className="text-lg text-foreground/60 line-through decoration-foreground/30">
                  {row.from}
                </span>
                <span
                  aria-hidden
                  className="font-[family-name:var(--font-display)] text-2xl text-accent"
                >
                  →
                </span>
                <span className="font-[family-name:var(--font-display)] text-2xl tracking-tight md:text-3xl">
                  {row.to}
                </span>
              </StaggerItem>
            ))}
            <Reveal delay={0.4}>
              <p className="mt-10 font-[family-name:var(--font-display)] text-2xl leading-[1.3] tracking-tight md:text-3xl">
                Health is not just about food — it&apos;s about your
                <span className="italic text-accent"> entire lifestyle.</span>
              </p>
            </Reveal>
          </Stagger>
        </div>
      </section>

      {/* CLIENT TESTIMONIALS + TRANSFORMATIONS — full-bleed marquee */}
      <section className="relative w-full max-w-[100vw] overflow-x-hidden pb-24 pt-10 md:pb-32 md:pt-14">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-1/2 bg-[radial-gradient(ellipse_60%_70%_at_50%_0%,color-mix(in_oklab,var(--cream)_60%,transparent)_0%,transparent_70%)]"
        />
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
              (Real clients · Real change)
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl leading-[1] tracking-tight md:text-7xl">
              Testimonials &amp;
              <br />
              <span className="italic text-accent">transformations.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mx-auto mt-6 max-w-xl text-foreground/75">
              Bodies rebuilt. Hormones reset. Habits rewired. A glimpse at the
              kind of change my clients have walked into.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.35} className="mt-8 min-w-0 w-full max-w-full md:mt-12">
          <TestimonialsMarquee />
        </Reveal>
      </section>

      {/* WHY WORK WITH ME (USP) */}
      <section className="relative px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto w-full max-w-[110rem]">
          <div className="grid gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.3em] text-foreground/70">
                (Why work with me)
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl leading-[1] tracking-tight md:text-7xl">
                Lived it.
                <br />
                <span className="italic text-accent">Not read it.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2} className="md:col-span-6 md:col-start-7">
              <p className="max-w-md text-foreground/80">
                You&apos;re not learning from someone who read it in a book —
                you&apos;re learning from someone who has lived it. My approach
                combines fitness, nutrition, and lifestyle into one system, and
                I work closely with my clients like a coach and a buddy.
              </p>
            </Reveal>
          </div>

          <Stagger
            gap={0.12}
            className="mt-20 grid gap-px bg-border/70 md:grid-cols-3"
          >
            {usp.map((s) => (
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
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* APPROACH */}
      <section
        data-header-theme="dark"
        className="relative bg-primary text-primary-foreground"
      >
        <div className="mx-auto grid w-full max-w-[110rem] gap-10 px-6 py-28 md:grid-cols-12 md:gap-16 md:px-10 md:py-40">
          <div className="md:col-span-6">
            <Reveal>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] ring-1 ring-primary-foreground/15 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.35)]">
                <Image
                  src="/workout-2.jpg"
                  alt="Strength training and recovery — movement, hydration, and sustainable fitness habits"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 45vw, 100vw"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(35,48,26,0.45)_0%,transparent_45%)]"
                />
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-6">
            <div className="md:sticky md:top-28">
              <Reveal>
                <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60">
                  (My approach)
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl leading-[1.02] tracking-tight md:text-7xl">
                  No quick fixes. A
                  <span className="italic text-accent"> lifestyle </span>
                  transformation.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-8 max-w-md text-primary-foreground/80">
                  Instead of just handing you a plan, I teach you how your body
                  works — so you can take control of your health for life.
                </p>
              </Reveal>
              <Stagger gap={0.07} className="mt-10 grid gap-3 sm:grid-cols-2">
                {approach.map((item, i) => (
                  <StaggerItem
                    key={item}
                    className="flex items-center gap-4 border-t border-primary-foreground/20 py-4"
                  >
                    <span className="font-[family-name:var(--font-display)] text-sm text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-primary-foreground/90">{item}</span>
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal delay={0.5} className="mt-10">
                <p className="font-[family-name:var(--font-display)] text-2xl leading-[1.3] tracking-tight md:text-3xl">
                  My goal: this should be the
                  <span className="italic text-accent">
                    {" "}
                    last nutrition plan{" "}
                  </span>
                  you ever need.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* WHO I HELP */}
      <section className="relative px-6 pb-14 pt-28 md:px-10 md:pb-20 md:pt-40">
        <div className="mx-auto w-full max-w-[110rem]">
          <div className="grid gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <p className="text-xs uppercase tracking-[0.3em] text-foreground/70">
                (Who I help)
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl leading-[1] tracking-tight md:text-7xl">
                For people ready to
                <span className="italic text-accent"> rebuild.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2} className="md:col-span-6 md:col-start-7">
              <p className="max-w-md text-foreground/80">
                I work with individuals who want to build a healthy lifestyle —
                not just follow another diet. If any of these feel like you,
                you&apos;re in the right place.
              </p>
            </Reveal>
          </div>

          <Stagger
            gap={0.08}
            className="mt-16 grid gap-px bg-border/70 sm:grid-cols-2 md:grid-cols-3"
          >
            {whoIHelp.map((item, i) => (
              <StaggerItem
                key={item}
                className="flex items-start gap-5 bg-background p-8 md:p-10"
              >
                <span className="font-[family-name:var(--font-display)] text-3xl text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-[family-name:var(--font-display)] text-2xl leading-tight tracking-tight md:text-3xl">
                  {item}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* EMBODIMENT */}
      <section className="relative px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto w-full max-w-5xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
              (Embodiment over theory)
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="mt-10 font-[family-name:var(--font-display)] text-3xl leading-[1.2] tracking-tight md:text-5xl">
              &ldquo;Your body is{" "}
              <span className="italic text-accent">
                not &lsquo;fixed&rsquo; by genetics
              </span>{" "}
              — you can completely transform it with the right approach.
              I&apos;m living proof.&rdquo;
            </blockquote>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 inline-flex items-center gap-4">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-muted ring-1 ring-foreground/10">
                <Image
                  src="/thumb-image.jpg"
                  alt="Aarushi Chawla"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div className="text-left text-sm">
                <p className="font-medium">Aarushi Chawla</p>
                <p className="text-foreground/60">
                  IIN Certified · Down 35 kgs
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* IMPORTANT NOTE */}
      <section className="relative px-6 pb-12 md:px-10 md:pb-20">
        <Reveal>
          <div className="mx-auto w-full max-w-[80rem] rounded-3xl border border-border/70 bg-card/60 p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
              (Important note)
            </p>
            <p className="mt-4 text-pretty text-lg text-foreground/85 md:text-xl">
              I work on reversing lifestyle-related issues such as PCOS, thyroid
              imbalances, and metabolic concerns through nutrition and lifestyle
              changes. For medical conditions requiring clinical treatment, I
              always recommend working alongside a doctor.
            </p>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-6 pb-28 md:px-10 md:pb-40">
        <div className="relative mx-auto w-full max-w-[110rem] overflow-hidden rounded-[2.5rem] border border-white/50 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--cream)_78%,transparent),color-mix(in_oklab,var(--meadow)_62%,transparent))] p-10 text-primary shadow-[0_28px_90px_-45px_rgba(35,48,26,0.55),inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-2xl md:p-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(255,255,255,0.62),transparent_34%),radial-gradient(circle_at_18%_78%,color-mix(in_oklab,var(--meadow)_38%,transparent),transparent_38%)]" />
          <div className="pointer-events-none absolute -top-24 -right-20 size-112 rounded-full bg-white/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 left-1/3 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />
          <SketchArrow />
          <div className="relative grid gap-10 md:grid-cols-12 md:items-end">
            <Reveal className="md:col-span-8">
              <p className="text-xs uppercase tracking-[0.3em]">
                (Ready to begin)
              </p>
              <h2 className="mt-6 font-[family-name:var(--font-display)] text-5xl leading-[1] tracking-tight md:text-8xl">
                Stop dieting.
                <br />
                <span className="italic">Start transforming.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2} className="relative md:col-span-4">
              <p className="relative z-10 mb-8 text-primary/80">
                Let&apos;s build a body and lifestyle you can sustain for life.
                A free 30-minute call to see if we&apos;re a fit.
              </p>
              <div className="relative z-10 flex flex-wrap gap-4">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm text-primary-foreground transition-colors hover:bg-foreground"
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
                  className="inline-flex items-center gap-3 rounded-full border border-primary/40 px-7 py-4 text-sm transition-colors hover:border-primary"
                >
                  See plans
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
