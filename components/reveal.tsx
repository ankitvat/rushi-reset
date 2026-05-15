"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  as?: "div" | "span" | "p" | "li";
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  y = 28,
  as = "div",
  className,
}: RevealProps) {
  const prefersReduced = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      initial={prefersReduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  gap?: number;
}

export function Stagger({
  children,
  className,
  delay = 0,
  gap = 0.1,
}: StaggerProps) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      initial={prefersReduced ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: gap, delayChildren: delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  y?: number;
}

export function StaggerItem({
  children,
  className,
  y = 24,
}: StaggerItemProps) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      variants={{
        hidden: prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
