interface ShimmerProps {
  className?: string;
  rounded?: "full" | "none" | "inherit";
}

export function Shimmer({ className, rounded = "inherit" }: ShimmerProps) {
  const radius =
    rounded === "full"
      ? "rounded-full"
      : rounded === "none"
        ? ""
        : "rounded-[inherit]";

  return (
    <div
      aria-hidden
      className={`relative overflow-hidden bg-[color-mix(in_oklab,var(--leaf)_12%,transparent)] ${radius} ${className ?? ""}`}
    >
      <div className="absolute inset-0 shimmer-sheen" />
    </div>
  );
}
