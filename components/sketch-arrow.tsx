"use client";

import { motion, useReducedMotion } from "motion/react";

export function SketchArrow() {
  const prefersReduced = useReducedMotion();
  const initial = prefersReduced ? false : { pathLength: 0, opacity: 0 };
  const animate = { pathLength: 1, opacity: 1 };
  const transition = {
    duration: 1.15,
    ease: [0.22, 1, 0.36, 1],
  } as const;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-[48%] top-20 z-0 hidden h-32 w-88 text-primary/55 lg:block"
    >
      <motion.svg
        viewBox="0 0 460 180"
        fill="none"
        className="h-full w-full overflow-visible"
        viewport={{ once: true, margin: "-18% 0px -18% 0px" }}
      >
        <motion.path
          d="M8 24C78 -18 162 -2 202 38C242 78 270 155 420 158"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={initial}
          whileInView={animate}
          viewport={{ once: true, margin: "-18% 0px -18% 0px" }}
          transition={transition}
        />
        <motion.path
          d="M9 31C80 -4 158 5 195 42C235 84 266 147 412 166"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={initial}
          whileInView={animate}
          viewport={{ once: true, margin: "-18% 0px -18% 0px" }}
          transition={{ ...transition, delay: 0.08 }}
        />
        <motion.path
          d="M420 158L393 144M420 158L399 177"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={initial}
          whileInView={animate}
          viewport={{ once: true, margin: "-18% 0px -18% 0px" }}
          transition={{ duration: 0.36, delay: 0.96, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.svg>
    </div>
  );
}
