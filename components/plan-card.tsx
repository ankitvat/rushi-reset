"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { CALENDLY_URL } from "@/lib/utils";

export interface Plan {
  id: string;
  duration: string;
  weeks: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  bestFor: string;
  popular?: boolean;
}

interface PlanCardProps {
  plan: Plan;
  index: number;
}

export function PlanCard({ plan, index }: PlanCardProps) {
  const prefersReduced = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  const isPopular = plan.popular === true;

  return (
    <motion.article
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={prefersReduced ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-8 transition-colors duration-500 md:p-10 ${
        isPopular
          ? "border-primary/50 bg-primary text-primary-foreground"
          : "border-border/70 bg-card text-card-foreground hover:border-foreground/40"
      }`}
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-700 ${
          hovered ? "opacity-100" : ""
        } ${
          isPopular
            ? "bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--ember)_22%,transparent)_0%,transparent_60%)]"
            : "bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--meadow)_45%,transparent)_0%,transparent_60%)]"
        }`}
      />

      {isPopular && (
        <motion.span
          initial={prefersReduced ? false : { y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 + index * 0.08 }}
          className="absolute right-6 top-6 inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-accent-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-foreground" />
          Most popular
        </motion.span>
      )}

      <div className="flex items-baseline gap-3">
        <span
          className={`text-xs uppercase tracking-[0.3em] ${
            isPopular ? "text-primary-foreground/60" : "text-foreground/60"
          }`}
        >
          {plan.weeks}
        </span>
      </div>

      <h3 className="mt-6 font-[family-name:var(--font-display)] text-5xl leading-[0.95] tracking-tight md:text-6xl">
        {plan.duration}
      </h3>
      <p className="mt-1 font-[family-name:var(--font-display)] text-2xl italic tracking-tight text-accent md:text-3xl">
        {plan.tagline}
      </p>

      <p
        className={`mt-6 text-pretty ${
          isPopular ? "text-primary-foreground/85" : "text-foreground/80"
        }`}
      >
        {plan.description}
      </p>

      <ul
        className={`mt-8 space-y-3 border-t pt-6 ${
          isPopular ? "border-primary-foreground/20" : "border-border/70"
        }`}
      >
        {plan.bullets.map((b, i) => (
          <motion.li
            key={b}
            initial={prefersReduced ? false : { opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{
              duration: 0.6,
              delay: 0.1 + i * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-start gap-3 text-sm md:text-base"
          >
            <span
              className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              aria-hidden
            />
            <span
              className={isPopular ? "text-primary-foreground/90" : "text-foreground/85"}
            >
              {b}
            </span>
          </motion.li>
        ))}
      </ul>

      <div
        className={`mt-8 rounded-2xl border p-4 text-sm ${
          isPopular
            ? "border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground/80"
            : "border-border/70 bg-background/60 text-foreground/75"
        }`}
      >
        <p className="text-[10px] uppercase tracking-[0.25em] opacity-70">
          Best suited for
        </p>
        <p className="mt-2 leading-snug">{plan.bestFor}</p>
      </div>

      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`group/cta mt-8 inline-flex items-center justify-between gap-3 rounded-full px-6 py-4 text-sm transition-colors ${
          isPopular
            ? "bg-accent text-accent-foreground hover:bg-primary-foreground hover:text-primary"
            : "bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground"
        }`}
      >
        <span>Start this plan</span>
        <motion.span
          aria-hidden
          animate={hovered && !prefersReduced ? { x: 4 } : { x: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          →
        </motion.span>
      </a>
    </motion.article>
  );
}
