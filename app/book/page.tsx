import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { BookingForm } from "@/components/booking-form";
import { ParallaxShimmer } from "@/components/parallax-shimmer";
import { HeroMouse, MouseLayer } from "@/components/hero-mouse";

export const metadata = {
  title: "Book a chat — Rushi Reset",
  description:
    "Start the conversation. Book a free 30-minute discovery chat with Rushi.",
};

const expect = [
  {
    n: "01",
    t: "A gentle welcome",
    d: "Lorem ipsum dolor sit amet. No sales pressure. Just space to talk, be heard, and feel what&apos;s possible.",
  },
  {
    n: "02",
    t: "Clarity on fit",
    d: "Consectetur adipiscing elit. We&apos;ll explore what you&apos;re navigating and whether 1:1, group, or something else is the right next step.",
  },
  {
    n: "03",
    t: "A calm next step",
    d: "Curabitur non nulla. If we feel like a fit, you&apos;ll leave with a clear invitation. If not, you&apos;ll leave with perspective. Either is a win.",
  },
];

export default function BookPage() {
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
                  (Book a call)
                </p>
              </Reveal>
            </MouseLayer>
            <MouseLayer depth={10} invert>
              <Reveal delay={0.08}>
                <h1 className="mt-6 font-[family-name:var(--font-display)] text-[13vw] leading-[0.9] tracking-tighter md:text-[10vw]">
                  Start the{" "}
                  <span className="italic text-accent">conversation.</span>
                </h1>
              </Reveal>
            </MouseLayer>
            <MouseLayer depth={22}>
              <Reveal delay={0.2} className="mt-8 max-w-2xl">
                <p className="text-pretty text-lg text-foreground/80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tell
                  me a little about you and what you&apos;re hoping for — then
                  pick a time that feels good. I can&apos;t wait to meet you.
                </p>
              </Reveal>
            </MouseLayer>
          </div>
        </section>
      </HeroMouse>

      {/* FORM + IMAGE */}
      <section className="relative px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid w-full max-w-[110rem] gap-10 md:grid-cols-12 md:gap-16">
          <Reveal y={60} className="md:col-span-5">
            <div className="md:sticky md:top-28">
              <ParallaxShimmer
                strength={60}
                className="aspect-[4/5] w-full rounded-[2rem]"
              />
              <div className="mt-8 rounded-2xl border border-border/70 bg-card p-6 text-card-foreground">
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">
                  Reach out directly
                </p>
                <p className="mt-3 font-[family-name:var(--font-display)] text-2xl leading-tight">
                  hello@rushireset.com
                </p>
                <p className="mt-3 text-sm text-foreground/70">
                  Mon – Fri · replies within 24 hours
                </p>
              </div>
            </div>
          </Reveal>

          <div className="md:col-span-7">
            <Reveal>
              <h2 className="font-[family-name:var(--font-display)] text-3xl leading-tight tracking-tight md:text-4xl">
                Tell me a little about you
              </h2>
              <p className="mt-2 text-foreground/70">
                Takes about two minutes. All fields optional except name and
                email.
              </p>
            </Reveal>
            <div className="mt-8">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section
        data-header-theme="dark"
        className="relative bg-primary px-6 py-28 text-primary-foreground md:px-10 md:py-40"
      >
        <div className="mx-auto w-full max-w-[110rem]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60">
              (What to expect)
            </p>
            <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-[1] tracking-tight md:text-7xl">
              30 calm, unhurried minutes.
            </h2>
          </Reveal>
          <Stagger gap={0.12} className="mt-16 grid gap-10 md:grid-cols-3">
            {expect.map((step) => (
              <StaggerItem
                key={step.n}
                className="border-t border-primary-foreground/20 pt-6"
              >
                <p className="font-[family-name:var(--font-display)] text-4xl text-accent">
                  {step.n}
                </p>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl">
                  {step.t}
                </h3>
                <p
                  className="mt-3 text-primary-foreground/75"
                  dangerouslySetInnerHTML={{ __html: step.d }}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto grid w-full max-w-[110rem] gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/70">
              (FAQ)
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl leading-[1] tracking-tight md:text-6xl">
              Small questions, answered.
            </h2>
          </Reveal>
          <Stagger
            gap={0.1}
            className="md:col-span-7 md:col-start-6 space-y-2"
          >
            {[
              {
                q: "Is the discovery call really free?",
                a: "Lorem ipsum dolor sit amet. Yes — a full 30 minutes, no strings attached.",
              },
              {
                q: "How long do programmes usually run?",
                a: "Consectetur adipiscing elit. 1:1 containers typically run 12 weeks, with options to extend.",
              },
              {
                q: "Do you work with clients outside the UK?",
                a: "Curabitur non nulla. Absolutely — sessions happen online and I work across most time zones.",
              },
              {
                q: "What if I&apos;m not sure what I need yet?",
                a: "Vestibulum ac diam. That&apos;s exactly what the discovery call is for. Come as you are.",
              },
            ].map((item) => (
              <StaggerItem key={item.q}>
                <details className="group border-b border-border/70 py-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    className="flex cursor-pointer list-none items-center justify-between gap-6"
                    dangerouslySetInnerHTML={{
                      __html: `<span class='font-[family-name:var(--font-display)] text-2xl leading-tight tracking-tight md:text-3xl'>${item.q}</span><span aria-hidden class='text-2xl transition-transform duration-300 group-open:rotate-45'>+</span>`,
                    }}
                  />
                  <p
                    className="mt-4 max-w-2xl text-foreground/80"
                    dangerouslySetInnerHTML={{ __html: item.a }}
                  />
                </details>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </div>
  );
}
