'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { usePathname } from 'next/navigation';
import { fadeIn } from '@/lib/animations';

export default function PageTransition({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} {...fadeIn}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
