import { AnimatedSection } from '@/components/AnimatedSection';
import { fadeInLeft, fadeInRight, viewportTransition } from '@/lib/animations';
import { AboutContent } from './page-content';

export default function AboutPage() {
  return (
    <main className="relative mx-auto max-w-3xl p-10">
      <div className="container mx-auto">
        <div className="mx-auto w-full max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-8 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-black/20">
            <AnimatedSection {...fadeInRight} {...viewportTransition}>
              <AboutContent />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </main>
  );
}
