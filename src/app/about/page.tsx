import { Section, SectionHeading } from '@/components/Section';
import type { Metadata } from 'next';
import { AboutContent } from './page-content';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Brent Vervaet - full-stack developer with a passion for modern web technologies, specializing in React, Next.js, Vue, Swift, and more.',
  keywords: [
    'Brent Vervaet',
    'About',
    'Full-Stack Developer',
    'Web Developer',
    'React',
    'Next.js',
    'Vue',
    'Swift',
    'TypeScript',
    'Belgium',
  ],
  openGraph: {
    title: 'About | Brent Vervaet',
    description:
      'Learn more about Brent Vervaet - full-stack developer with a passion for modern web technologies, specializing in React, Next.js, Vue, Swift, and more.',
    type: 'profile',
    url: 'https://brentvervaet.dev/about',
    siteName: 'Brent Vervaet - Portfolio',
    images: [
      {
        url: '/images/home/brent-vervaet.webp',
        width: 1200,
        height: 630,
        alt: 'Brent Vervaet - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Brent Vervaet',
    description: 'Learn more about Brent Vervaet - full-stack developer with a passion for modern web technologies.',
    images: ['/images/home/brent-vervaet.webp'],
    creator: '@brentieV',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <Section>
        <SectionHeading>About Me</SectionHeading>
        <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-300">
          Full-stack developer passionate about creating exceptional digital experiences
        </p>

        <div className="glass-subtle card-spacing overflow-hidden rounded-3xl shadow-2xl">
          <AboutContent />
        </div>
      </Section>
    </main>
  );
}
