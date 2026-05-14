"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useState } from "react";
import { MobileNav } from "@/components/mobile-nav";
import { CALENDLY_URL } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/plans", label: "Plans" },
];

type HeaderTheme = "light" | "dark";

function useHeaderTheme(): HeaderTheme {
  const [theme, setTheme] = useState<HeaderTheme>("light");

  useEffect(() => {
    const probeY = 80;

    const update = () => {
      const sections = document.querySelectorAll<HTMLElement>(
        "[data-header-theme]"
      );
      let next: HeaderTheme = "light";
      for (const el of Array.from(sections)) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom >= probeY) {
          next = (el.dataset.headerTheme as HeaderTheme) ?? "light";
          break;
        }
      }
      setTheme((current) => (current === next ? current : next));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return theme;
}

export function SiteHeader() {
  const pathname = usePathname();
  const theme = useHeaderTheme();
  const isDark = theme === "dark";
  const { scrollY } = useScroll();

  const logoScale = useTransform(scrollY, [0, 220], [1, 0.9]);
  const fadeOpacity = useTransform(scrollY, [0, 120], [0.6, 1]);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-40 w-full transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isDark ? "text-primary-foreground" : "text-foreground"
      }`}
    >
      <motion.div
        aria-hidden
        style={{ opacity: fadeOpacity }}
        className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-[140%] transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isDark
            ? "bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--leaf)_92%,transparent)_0%,color-mix(in_oklab,var(--leaf)_70%,transparent)_55%,transparent_100%)]"
            : "bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--meadow)_96%,transparent)_0%,color-mix(in_oklab,var(--meadow)_70%,transparent)_55%,transparent_100%)]"
        }`}
      />
      <div className="relative mx-auto flex w-full max-w-[92rem] items-center justify-between gap-4 px-6 py-5 md:px-10 md:py-6">
        <Link
          href="/"
          aria-label="Rushi Reset — home"
          className="group relative flex items-center"
        >
          <motion.span
            style={{ scale: logoScale }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="relative inline-flex items-baseline gap-2 font-[family-name:var(--font-display)] text-2xl leading-none tracking-tight md:text-[1.75rem]"
          >
            <span>Rushi</span>
            <span className="italic text-accent">Reset</span>
          </motion.span>
          <span
            aria-hidden
            className="pointer-events-none absolute -inset-3 -z-10 rounded-full bg-accent/0 blur-2xl transition-colors duration-500 group-hover:bg-accent/30"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item, i) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <motion.div
                key={item.href}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <NavLink
                  href={item.href}
                  label={item.label}
                  active={active}
                />
              </motion.div>
            );
          })}
        </nav>

        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:block"
        >
          <CtaButton isDark={isDark} />
        </motion.div>

        <MobileNav items={navItems} />
      </div>
    </motion.header>
  );
}

interface NavLinkProps {
  href: string;
  label: string;
  active: boolean;
}

function NavLink({ href, label, active }: NavLinkProps) {
  const sharedClass =
    "group relative isolate rounded-full px-4 py-2 text-sm tracking-wide opacity-80 transition-opacity duration-300 hover:opacity-100";
  const inner = (
    <>
      {active && (
        <motion.span
          layoutId="nav-pill"
          aria-hidden
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          className="absolute inset-0 -z-10 rounded-full bg-current/10"
        />
      )}
      <span className="relative inline-flex items-center gap-2">
        <AnimatePresence>
          {active && (
            <motion.span
              key="dot"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 380, damping: 24 }}
              className="h-1.5 w-1.5 rounded-full bg-accent"
            />
          )}
        </AnimatePresence>
        <span className="relative overflow-hidden leading-[1.2]">
          <span className="relative block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
            {label}
          </span>
          <span
            aria-hidden
            className="absolute inset-0 block translate-y-full text-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
          >
            {label}
          </span>
        </span>
      </span>
    </>
  );

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={sharedClass}
    >
      {inner}
    </Link>
  );
}

function ArrowGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden
      className={`h-4 w-4 ${className ?? ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8h10" />
      <path d="M9 4l4 4-4 4" />
    </svg>
  );
}

interface CtaButtonProps {
  isDark: boolean;
}

function CtaButton({ isDark }: CtaButtonProps) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book a free chat"
      className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide"
    >
      <span className="relative overflow-hidden leading-[1.2]">
        <span className="relative block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
          Book a free chat
        </span>
        <span
          aria-hidden
          className="absolute inset-0 block translate-y-full text-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
        >
          Book a free chat
        </span>
      </span>
      <span aria-hidden className="relative inline-grid place-items-center">
        <span className="absolute inset-0 -m-1 rounded-full bg-accent/25 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
        <span
          className={`relative grid h-9 w-9 place-items-center overflow-hidden rounded-full transition-[background-color,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-accent group-hover:text-accent-foreground ${
            isDark
              ? "bg-primary-foreground text-primary"
              : "bg-primary text-primary-foreground"
          }`}
        >
          <span className="relative block h-4 w-4 overflow-hidden">
            <ArrowGlyph className="absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-5" />
            <ArrowGlyph className="absolute inset-0 -translate-x-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
          </span>
        </span>
      </span>
    </a>
  );
}
