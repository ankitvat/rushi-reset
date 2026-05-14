import Image from "next/image";

type Item =
  | {
      kind: "testimonial";
      id: string;
      quote: string;
      name: string;
      detail: string;
    }
  | {
      kind: "transformation";
      id: string;
      src: string;
      alt: string;
      caption: string;
    };

const items: Item[] = [
  {
    kind: "transformation",
    id: "t-karan",
    src: "/carousel/trans-karan.png",
    alt: "Client transformation — before and after",
    caption: "Body recomposition",
  },
  {
    kind: "testimonial",
    id: "q-shubhangi",
    quote:
      "I had a great experience with Aarushi. She helped me learn more about my body and how to manage PCOD in a sustainable way. The two biggest lessons I learned were the importance of staying active by walking more, and following a balanced diet with a higher focus on fibre and protein.",
    name: "Shubhangi",
    detail: "PCOD reset",
  },
  {
    kind: "transformation",
    id: "t-sana",
    src: "/carousel/trans-sana.png",
    alt: "Client transformation — before and after",
    caption: "Lifestyle transformation",
  },
  {
    kind: "testimonial",
    id: "q-nimish",
    quote:
      "Out of all the nutritionists I've worked with, Aarushi has been by far the most knowledgeable, helpful, and supportive. She taught me everything I know about nutrition. I started working with her at my peak of 120 kg, and within months, her guidance helped me drop to 95 kg. Even now, when I'm not on a formal plan, she is always there to answer my questions. She has been a key part of my journey — I highly recommend her to anyone looking to transform their body or lifestyle.",
    name: "Nimish",
    detail: "120 kg → 95 kg",
  },
  {
    kind: "transformation",
    id: "t-3",
    src: "/carousel/trans-3.png",
    alt: "Client transformation — before and after",
    caption: "Sustainable fat loss",
  },
  {
    kind: "testimonial",
    id: "q-garima",
    quote:
      "I'm so grateful to have worked with Aarushi. She was incredibly flexible, always adapting to my needs as a client. She took the time to curate a diet plan that fit what I actually enjoy eating, rather than just pushing foods I wouldn't like. Her kindness and constant support made the journey so much easier. She always ensured I felt comfortable and never overwhelmed, checking in regularly and making sure the process was gentle on my mental well-being. I couldn't have asked for a better guide.",
    name: "Garima",
    detail: "Flexible coaching",
  },
];

export function TestimonialsMarquee() {
  const doubled = [...items, ...items];

  return (
    <div
      aria-label="Client testimonials and transformations"
      className="testimonials-marquee group relative w-full max-w-[100vw] overflow-x-hidden py-4 [touch-action:pan-y]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-[linear-gradient(to_right,var(--background),transparent)] md:w-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-[linear-gradient(to_left,var(--background),transparent)] md:w-40"
      />

      <div className="testimonials-track flex w-max flex-nowrap items-stretch gap-4 md:gap-8">
        {doubled.map((item, i) =>
          item.kind === "transformation" ? (
            <TransformationCard
              key={`${item.id}-${i}`}
              src={item.src}
              alt={item.alt}
              caption={item.caption}
              priority={i === 0}
            />
          ) : (
            <TestimonialCard
              key={`${item.id}-${i}`}
              quote={item.quote}
              name={item.name}
              detail={item.detail}
            />
          )
        )}
      </div>
    </div>
  );
}

interface TransformationCardProps {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
}

function TransformationCard({
  src,
  alt,
  caption,
  priority,
}: TransformationCardProps) {
  return (
    <figure className="group/card relative h-[24rem] w-[min(17.5rem,calc(100vw-2.5rem))] shrink-0 overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_24px_70px_-50px_rgba(35,48,26,0.55)] sm:h-[26rem] sm:w-[18rem] md:h-[32rem] md:w-[22rem]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 768px) 22rem, 18rem"
        className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-[1.04]"
        priority={priority}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(35,48,26,0.55)_0%,transparent_45%)]"
      />
      <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-primary-foreground md:p-6">
        <span className="font-[family-name:var(--font-display)] text-lg leading-tight tracking-tight md:text-xl">
          {caption}
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.25em] backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Before / After
        </span>
      </figcaption>
    </figure>
  );
}

interface TestimonialCardProps {
  quote: string;
  name: string;
  detail: string;
}

function TestimonialCard({ quote, name, detail }: TestimonialCardProps) {
  return (
    <figure className="relative flex h-[24rem] w-[min(19.5rem,calc(100vw-2.5rem))] shrink-0 flex-col justify-between overflow-hidden rounded-[2rem] border border-border/70 bg-card p-6 shadow-[0_24px_70px_-50px_rgba(35,48,26,0.45)] sm:h-[26rem] sm:w-[22rem] sm:p-7 md:h-[32rem] md:w-[30rem] md:p-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--meadow)_28%,transparent)_0%,transparent_55%)]"
      />
      <span
        aria-hidden
        className="font-[family-name:var(--font-display)] -mb-6 text-[7rem] leading-none text-accent/70"
      >
        &ldquo;
      </span>
      <blockquote className="relative text-pretty text-sm leading-[1.55] text-foreground/85 md:text-base">
        {quote}
      </blockquote>
      <figcaption className="relative mt-6 flex items-center justify-between gap-4 border-t border-border/70 pt-4">
        <div>
          <p className="font-[family-name:var(--font-display)] text-lg tracking-tight md:text-xl">
            {name}
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/55">
            {detail}
          </p>
        </div>
        <span className="text-xs uppercase tracking-[0.25em] text-accent">
          Client
        </span>
      </figcaption>
    </figure>
  );
}
