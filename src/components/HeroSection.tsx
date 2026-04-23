import { AnimatedAvatar } from '@/components/AnimatedAvatar';
import { Section, SectionHeading } from '@/components/Section';
import SocialLinks from '@/components/SocialsLinks';
import { WaveEmoji } from '@/components/WaveEmoji';
import { Globe } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => (
  <Section id="home" className="relative py-12 sm:py-16 md:py-24 lg:py-32">
    <div className="relative z-10 flex flex-col items-center gap-8 sm:gap-10 md:flex-row md:items-start md:gap-12 lg:gap-16">
      <AnimatedAvatar />
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <SectionHeading as="h1" className="mb-4 text-3xl font-bold leading-tight sm:mb-5 sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl xl:text-7xl">
          Hi, I&apos;m Brent <WaveEmoji />
        </SectionHeading>
        <p className="mb-6 max-w-2xl text-base leading-relaxed text-zinc-600 sm:mb-7 sm:text-lg md:mb-8 md:text-xl dark:text-zinc-300">
          A passionate full-stack developer crafting beautiful and functional web and mobile experiences with modern
          technologies.
        </p>
        <div className="mb-6 flex items-center gap-2 text-zinc-600 sm:mb-7 md:mb-8 dark:text-zinc-400">
          <Link
            href="https://www.google.com/maps/place/Gent"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Ghent location in Google Maps"
            className="flex items-center gap-1.5 text-zinc-600 transition-colors hover:text-zinc-900 sm:gap-2 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            <Globe className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            <span className="text-sm font-medium sm:text-base">Ghent, Belgium</span>
          </Link>
        </div>
        <SocialLinks className="mt-2 sm:mt-3 md:mt-4" showResumeButton={true} />
      </div>
    </div>
  </Section>
);

export default HeroSection;
