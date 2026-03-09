'use client';
import { Section, SectionHeading } from '@/components/Section';
import SocialLinks from '@/components/SocialsLinks';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

interface HeroSectionProps {
  wave: boolean;
  setWave: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ wave, setWave }) => (
  <Section id="home" className="relative">
    <div className="relative z-10 flex flex-col items-center gap-10 md:flex-row md:items-start">
      <motion.div
        whileHover={{ rotate: -10, scale: 1.1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="glass rounded-full p-1 will-change-transform"
      >
        <Link
          href={'https://www.instagram.com/brentiedebentley/'}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Brent Vervaet's Instagram profile"
        >
          <Avatar className="h-24 w-24 border-2 border-white/30 shadow-inner dark:border-white/20">
            <AvatarImage src="/images/home/brent-vervaet.webp" alt="Brent Vervaet - Full-stack developer portrait" />
            <AvatarFallback className="bg-gradient-to-br from-blue-400/30 to-purple-400/30 backdrop-blur-xl">
              BV
            </AvatarFallback>
          </Avatar>
        </Link>
      </motion.div>
      <div className="flex flex-col items-center md:items-start">
        <SectionHeading as="h1" className="mb-4 text-3xl md:text-4xl">
          Hi, I&apos;m Brent{' '}
          <motion.span
            style={{ display: 'inline-block', originX: 0.7, originY: 0.7 }}
            animate={wave ? { rotate: [0, 20, -10, 20, 0] } : { rotate: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            onHoverStart={() => setWave(true)}
            onAnimationComplete={() => setWave(false)}
            aria-label="Animated waving hand emoji"
            className="will-change-transform"
          >
            👋
          </motion.span>
        </SectionHeading>
        <p className="mb-4 max-w-xl text-center text-base md:text-left dark:text-zinc-400">
          A full-stack developer focused on creating beautiful and functional web and mobile experiences.
        </p>
        <div className="mb-4 flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
          <Link
            href="https://www.google.com/maps/place/Gent"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Ghent location in Google Maps"
            className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
              />
            </svg>
            <span>Ghent 9000, Belgium</span>
          </Link>
        </div>
        {/*TODO: edit resume*/}
        <SocialLinks className="mt-2" showResumeButton={false} />
      </div>
    </div>
  </Section>
);

export default HeroSection;
