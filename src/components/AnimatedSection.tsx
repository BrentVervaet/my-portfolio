'use client';
import { motion } from 'framer-motion';
import { type ComponentProps } from 'react';

interface AnimatedSectionProps extends ComponentProps<typeof motion.div> {
  children: React.ReactNode;
}

/**
 * Client component wrapper for animations
 * Use this to wrap server components that need animations
 */
export function AnimatedSection({ children, ...props }: AnimatedSectionProps) {
  return <motion.div {...props}>{children}</motion.div>;
}
