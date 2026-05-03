'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { transitionFast } from '@/lib/animations';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function AnimatedAvatar() {
  return (
    <motion.div
      whileHover={{ rotate: -10, scale: 1.1 }}
      transition={transitionFast}
      className="glass-subtle rounded-full p-2 shadow-2xl will-change-transform"
    >
      <Link
        href={'https://www.instagram.com/brentiedebentley/'}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Brent Vervaet's Instagram profile"
      >
        <Avatar className="h-32 w-32 border-4 border-white/40 shadow-xl md:h-40 md:w-40 dark:border-white/30">
          <AvatarImage src="/images/home/brent-vervaet.webp" alt="Brent Vervaet - Full-stack developer portrait" />
          <AvatarFallback className="bg-gradient-to-br from-blue-400/30 to-purple-400/30 backdrop-blur-xl">
            BV
          </AvatarFallback>
        </Avatar>
      </Link>
    </motion.div>
  );
}
