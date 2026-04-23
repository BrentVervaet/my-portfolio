/**
 * Design System Constants
 * Consistent spacing, colors, and styling across the portfolio
 */

export const spacing = {
  // Section spacing
  section: {
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-24',
    lg: 'py-24 md:py-32',
  },
  // Card/Container spacing
  card: {
    sm: 'p-4 md:p-6',
    md: 'p-6 md:p-8',
    lg: 'p-8 md:p-12',
  },
  // Gap spacing
  gap: {
    xs: 'gap-2',
    sm: 'gap-3 md:gap-4',
    md: 'gap-4 md:gap-6',
    lg: 'gap-6 md:gap-8',
    xl: 'gap-8 md:gap-12',
  },
  // Content spacing (space-y)
  content: {
    sm: 'space-y-4',
    md: 'space-y-6',
    lg: 'space-y-8',
  },
} as const;

export const glassmorphism = {
  subtle: 'glass-subtle',
  default: 'glass',
  strong: 'glass-strong',
} as const;

export const interactivity = {
  base: 'transition-all duration-200 active:scale-95',
  hover: 'hover:scale-[1.02] hover:shadow-lg',
  full: 'interactive interactive-hover',
} as const;

export const images = {
  base: 'project-image',
  rounded: {
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    xl: 'rounded-3xl',
  },
} as const;
