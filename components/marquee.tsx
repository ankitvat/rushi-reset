interface MarqueeProps {
  items: string[];
  className?: string;
}

export function Marquee({ items, className }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div
      className={`relative flex w-full overflow-hidden py-10 ${className ?? ""}`}
      aria-hidden
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_120%_at_50%_50%,color-mix(in_oklab,var(--cream)_55%,transparent)_0%,transparent_75%)]"
      />
      <div className="marquee-track flex shrink-0 items-center gap-12 pr-12">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-12 font-[family-name:var(--font-display)] text-3xl tracking-tight md:text-5xl"
          >
            {item}
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
