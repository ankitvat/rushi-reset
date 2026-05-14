"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface ParallaxTextProps {
  children: string;
  className?: string;
  baseVelocity?: number;
}

export function ParallaxText({
  children,
  className,
  baseVelocity = 1,
}: ParallaxTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [`${-20 * baseVelocity}%`, `${20 * baseVelocity}%`],
  );

  return (
    <div
      ref={ref}
      className={`pointer-events-none select-none overflow-hidden ${className ?? ""}`}
    >
      <motion.p
        style={{ x }}
        className="whitespace-nowrap font-[family-name:var(--font-display)] text-[8vw] leading-[0.9] tracking-tight"
      >
        {children}
      </motion.p>
    </div>
  );
}
