"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export function BeforeAfterGallery() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative px-6 py-12 md:px-10 md:py-20">
      <div className="mx-auto w-full max-w-[110rem]">
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.75, ease }}
          className="mx-auto mb-8 max-w-lg md:mb-10 md:max-w-xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/70">
            (Transformation)
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl leading-[1.05] tracking-tight md:text-4xl">
            Same person.
            <span className="italic text-accent"> Different chapter.</span>
          </h2>
        </motion.div>

        <div className="mx-auto grid w-full max-w-sm gap-5 sm:max-w-md md:max-w-2xl md:grid-cols-2 md:gap-6 lg:max-w-3xl">
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, x: -32, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.85, ease, delay: 0.05 }}
            className="group relative"
          >
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-foreground/55">
              Before
            </p>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-border/60 shadow-[0_20px_50px_-36px_rgba(35,48,26,0.35)] transition-transform duration-500 ease-out group-hover:scale-[1.02] md:rounded-2xl">
              <Image
                src="/arushi-before.jpeg"
                alt="Aarushi before her health transformation"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                sizes="(min-width: 768px) 320px, 100vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={prefersReduced ? false : { opacity: 0, x: 32, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.85, ease, delay: 0.12 }}
            className="group relative"
          >
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-foreground/55">
              After
            </p>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-border/60 shadow-[0_20px_50px_-36px_rgba(35,48,26,0.35)] transition-transform duration-500 ease-out group-hover:scale-[1.02] md:rounded-2xl">
              <Image
                src="/arushi--after.jpg"
                alt="Aarushi after sustainable nutrition and training"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                sizes="(min-width: 768px) 320px, 100vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
