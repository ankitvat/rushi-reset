"use client";

import { motion } from "motion/react";
import { useState, type FormEvent } from "react";

const goals = [
  "Feel more energised",
  "Rebuild my relationship with food",
  "Movement I actually enjoy",
  "Postpartum reset",
  "Stress & burnout",
  "Something else",
];

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(value: string) {
    setSelected((current) =>
      current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl border border-border/70 bg-card p-10 text-card-foreground"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-accent">
          (Received)
        </p>
        <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl leading-tight md:text-4xl">
          Thanks for reaching out. I&apos;ll be in touch within 24 hours.
        </h3>
        <p className="mt-4 text-foreground/75">
          Lorem ipsum dolor sit amet. In the meantime, keep an eye on your
          inbox for a short welcome note and a link to choose a time.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Your name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>

      <div>
        <p className="text-sm text-foreground/80">
          What&apos;s pulling you toward coaching right now? (tap any that fit)
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {goals.map((goal) => {
            const active = selected.includes(goal);
            return (
              <button
                key={goal}
                type="button"
                onClick={() => toggle(goal)}
                aria-pressed={active}
                className={`rounded-full border px-4 py-2 text-sm transition-all ${
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border/70 bg-transparent hover:border-foreground/60"
                }`}
              >
                {goal}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className="block text-sm text-foreground/80" htmlFor="note">
          Anything else you&apos;d like to share?
        </label>
        <textarea
          id="note"
          name="note"
          rows={5}
          placeholder="Lorem ipsum dolor sit amet…"
          className="mt-2 w-full resize-none rounded-2xl border border-border/70 bg-transparent px-5 py-4 text-base outline-none transition-colors placeholder:text-foreground/40 focus:border-foreground/70"
        />
      </div>

      <div className="flex flex-col-reverse items-start justify-between gap-6 pt-4 md:flex-row md:items-center">
        <p className="text-xs text-foreground/60">
          By submitting you agree to our friendly, human privacy policy. No
          spam, ever.
        </p>
        <button
          type="submit"
          className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Send &amp; choose a time
          <span
            aria-hidden
            className="inline-block transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </button>
      </div>
    </form>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}

function Field({ label, name, type = "text", required }: FieldProps) {
  return (
    <label className="block" htmlFor={name}>
      <span className="block text-sm text-foreground/80">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </span>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-2xl border border-border/70 bg-transparent px-5 py-4 text-base outline-none transition-colors placeholder:text-foreground/40 focus:border-foreground/70"
      />
    </label>
  );
}
