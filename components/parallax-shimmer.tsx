"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface ParallaxShimmerProps {
  className?: string;
  strength?: number;
  rounded?: "full" | "none" | "inherit";
}

export function ParallaxShimmer({
  className,
  strength = 80,
  rounded = "inherit",
}: ParallaxShimmerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? [0, 0] : [-strength, strength]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    prefersReduced ? [1, 1, 1] : [1.15, 1.04, 1.15]
  );

  const radius =
    rounded === "full"
      ? "rounded-full"
      : rounded === "none"
        ? ""
        : "rounded-[inherit]";

  return (
    <div
      ref={ref}
      aria-hidden
      className={`relative overflow-hidden ${radius} ${className ?? ""}`}
    >
      <motion.div
        style={{ y, scale }}
        className="absolute -inset-y-12 inset-x-0 bg-[color-mix(in_oklab,var(--leaf)_14%,transparent)]"
      >
        <div className="absolute inset-0 shimmer-sheen" />
      </motion.div>
    </div>
  );
}
