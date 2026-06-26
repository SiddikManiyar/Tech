import type { Variants, Transition } from "framer-motion";

export const EASE_SPRING: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const defaultTransition: Transition = {
  duration: 0.6,
  ease: EASE_SPRING,
};

export const springTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 25,
};

export const cardHoverTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};

export const viewportConfig = {
  once: true,
  margin: "-80px" as const,
};

/** Scroll-reveal variants — no opacity:0 so content stays visible before JS hydrates */
export const fadeUp: Variants = {
  hidden: { y: 32 },
  visible: {
    y: 0,
    transition: defaultTransition,
  },
};

export const fadeIn: Variants = {
  hidden: { scale: 0.98 },
  visible: {
    scale: 1,
    transition: defaultTransition,
  },
};

export const fadeDown: Variants = {
  hidden: { y: -20 },
  visible: {
    y: 0,
    transition: defaultTransition,
  },
};

export const fadeLeft: Variants = {
  hidden: { x: -32 },
  visible: {
    x: 0,
    transition: defaultTransition,
  },
};

export const fadeRight: Variants = {
  hidden: { x: 32 },
  visible: {
    x: 0,
    transition: defaultTransition,
  },
};

export const scaleIn: Variants = {
  hidden: { scale: 0.92 },
  visible: {
    scale: 1,
    transition: defaultTransition,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const cardHover = {
  y: -6,
  scale: 1.01,
};

export const cardHoverLarge = {
  y: -8,
  scale: 1.01,
};

export const navLinkUnderline: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.3, ease: EASE_SPRING },
  },
};

export const mobileMenuContainer: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "100vh",
    transition: {
      duration: 0.4,
      ease: EASE_SPRING,
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: EASE_SPRING },
  },
};

export const mobileMenuItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE_SPRING },
  },
};

export const faqContent: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: EASE_SPRING },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: EASE_SPRING },
  },
};

export const logoScaleIn: Variants = {
  hidden: { scale: 0.85 },
  visible: {
    scale: 1,
    transition: { duration: 0.5, ease: EASE_SPRING },
  },
};

export const testimonialSlide: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: { duration: 0.3 },
  },
};

export function getReducedMotionVariants(
  variants: Variants,
  prefersReducedMotion: boolean | null
): Variants {
  if (!prefersReducedMotion) return variants;

  const reduced: Variants = {};
  for (const key of Object.keys(variants)) {
    const variant = variants[key];
    if (typeof variant === "object" && variant !== null) {
      reduced[key] = {
        ...variant,
        transition: { duration: 0 },
      };
      if ("y" in variant) reduced[key] = { ...reduced[key], y: 0 };
      if ("x" in variant) reduced[key] = { ...reduced[key], x: 0 };
      if ("scale" in variant) reduced[key] = { ...reduced[key], scale: 1 };
      if ("opacity" in variant) reduced[key] = { ...reduced[key], opacity: 1 };
    } else {
      reduced[key] = variant;
    }
  }
  return reduced;
}

export function getReducedMotionHover(
  hover: Record<string, number>,
  prefersReducedMotion: boolean | null
): Record<string, number> | undefined {
  if (prefersReducedMotion) return undefined;
  return hover;
}
