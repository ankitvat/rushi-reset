"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";

interface MouseContextValue {
  mx: MotionValue<number>;
  my: MotionValue<number>;
  enabled: boolean;
}

const MouseCtx = createContext<MouseContextValue | null>(null);

interface HeroMouseProps {
  children: ReactNode;
  className?: string;
}

export function HeroMouse({ children, className }: HeroMouseProps) {
  const prefersReduced = useReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const mx = useSpring(rawX, { stiffness: 50, damping: 22, mass: 0.6 });
  const my = useSpring(rawY, { stiffness: 50, damping: 22, mass: 0.6 });

  const enabled = !prefersReduced;

  useEffect(() => {
    if (!enabled) return;

    const mqHover = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mqHover.matches) return;

    const SENSITIVITY = 0.35;

    const handleMove = (event: MouseEvent) => {
      const nx = (event.clientX / window.innerWidth - 0.5) * 2 * SENSITIVITY;
      const ny = (event.clientY / window.innerHeight - 0.5) * 2 * SENSITIVITY;
      rawX.set(nx);
      rawY.set(ny);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, [enabled, rawX, rawY]);

  const value = useMemo<MouseContextValue>(
    () => ({ mx, my, enabled }),
    [mx, my, enabled]
  );

  return (
    <MouseCtx.Provider value={value}>
      <div className={className}>{children}</div>
    </MouseCtx.Provider>
  );
}

interface MouseLayerProps {
  children: ReactNode;
  depth?: number;
  invert?: boolean;
  className?: string;
}

export function MouseLayer({
  children,
  depth = 24,
  invert = false,
  className,
}: MouseLayerProps) {
  const ctx = useContext(MouseCtx);
  const sign = invert ? -1 : 1;

  const fallback = useMotionValue(0);
  const mx = ctx?.mx ?? fallback;
  const my = ctx?.my ?? fallback;

  const x = useTransform(mx, (v) => (ctx?.enabled ? v * depth * sign : 0));
  const y = useTransform(my, (v) => (ctx?.enabled ? v * depth * sign : 0));

  return (
    <motion.div style={{ x, y }} className={className}>
      {children}
    </motion.div>
  );
}
