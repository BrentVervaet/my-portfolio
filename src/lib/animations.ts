import { Transition, Variants } from 'framer-motion';

/**
 * ANIMATION SYSTEM CONSTANTS
 */

// Duration standards
export const DURATION = {
  FAST: 0.2, // Micro-interactions (hover, tap)
  NORMAL: 0.4, // Scroll reveals, cards
  SLOW: 0.6, // Page transitions, complex animations
} as const;

// Easing standard
export const EASE = 'easeOut' as const;

// Viewport standard config
export const VIEWPORT_CONFIG = {
  once: true,
  amount: 0.1,
  margin: '0px 0px -200px 0px',
} as const;

/**
 * STANDARD TRANSITIONS
 */

export const transitionFast: Transition = {
  duration: DURATION.FAST,
  ease: EASE,
};

export const transitionNormal: Transition = {
  duration: DURATION.NORMAL,
  ease: EASE,
};

export const transitionSlow: Transition = {
  duration: DURATION.SLOW,
  ease: EASE,
};

/**
 * FADE ANIMATIONS
 */

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export const fadeInUpScroll = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT_CONFIG,
  transition: transitionNormal,
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: transitionSlow,
};

/**
 * VIEWPORT ANIMATIONS
 */

export const viewportTransition = {
  viewport: VIEWPORT_CONFIG,
  transition: transitionNormal,
};

/**
 * STAGGER ANIMATIONS
 */

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/**
 * INTERACTION ANIMATIONS
 */

export const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: transitionFast,
};

export const scaleOnHoverLarge = {
  whileHover: { scale: 1.1, y: -5 },
  whileTap: { scale: 0.95 },
  transition: transitionFast,
};

export const scaleOnHoverSubtle = {
  whileHover: { scale: 1.02 },
  transition: transitionFast,
};

export const tapScale = {
  whileTap: { scale: 0.95 },
  transition: transitionFast,
};
