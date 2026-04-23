import { Variants } from 'framer-motion';

/**
 * Standard fade-in animation from below
 */
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

/**
 * Fade in with viewport detection (scroll animations)
 */
export const fadeInUpScroll = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2, margin: '0px 0px -100px 0px' },
  transition: { duration: 0.4, ease: 'easeOut' as const },
};

/**
 * Fade in from right
 */
export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
};

/**
 * Fade in from left
 */
export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
};

/**
 * Standard transition for viewport animations
 */
export const viewportTransition = {
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

/**
 * Stagger children animation
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
 * Scale on hover (subtle)
 */
export const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.2 },
};

/**
 * Scale on hover (pronounced)
 */
export const scaleOnHoverLarge = {
  whileHover: { scale: 1.15, y: -5 },
  whileTap: { scale: 0.95 },
};
