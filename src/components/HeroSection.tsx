import { AnimatedAvatar } from '@/components/AnimatedAvatar';
import { Section, SectionHeading } from '@/components/Section';
import SocialLinks from '@/components/SocialsLinks';
import { WaveEmoji } from '@/components/WaveEmoji';
import { Globe } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => (
  <Section id="home" className="relative py-20 md:py-32">
    <div className="relative z-10 flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-16">
      <AnimatedAvatar />
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <SectionHeading as="h1" className="mb-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
          Hi, I&apos;m Brent <WaveEmoji />
        </SectionHeading>
        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-zinc-600 md:text-xl dark:text-zinc-300">
          A passionate full-stack developer crafting beautiful and functional web and mobile experiences with modern
          technologies.
        </p>
        <div className="mb-8 flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
          <Link
            href="https://www.google.com/maps/place/Gent"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Ghent location in Google Maps"
            className="flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            <Globe className="h-6 w-6" aria-hidden="true" />
            <span className="text-base font-medium">Ghent, Belgium</span>
          </Link>
        </div>
        <SocialLinks className="mt-4" showResumeButton={true} />
      </div>
    </div>
  </Section>
);

export default HeroSection;
