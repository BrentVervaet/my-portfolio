import { Section, SectionHeading } from '@/components/Section';
import type { Metadata } from 'next';
import { AboutContent } from './page-content';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Brent Vervaet - full-stack developer with a passion for modern web technologies.',
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
