'use client';
import { AnimatedSection } from '@/components/AnimatedSection';
import Experience from '@/components/Experience';
import HeroSection from '@/components/HeroSection';
import Skills from '@/components/Skills';
import { fadeInUp, fadeInUpScroll } from '@/lib/animations';
import dynamic from 'next/dynamic';

// Lazy load the Projects component since it contains many images
const Projects = dynamic(() => import('@/components/projects/Projects'), {
  loading: () => (
    <div className="flex items-center justify-center py-12">
      <div className="text-center">
        <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600"></div>
        <p className="text-gray-600">Loading projects...</p>
      </div>
    </div>
  ),
  ssr: false,
});

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <AnimatedSection {...fadeInUp} transition={{ duration: 0.5, ease: 'easeOut' }}>
        <HeroSection />
      </AnimatedSection>

      <AnimatedSection {...fadeInUpScroll}>
        <Experience />
      </AnimatedSection>

      <AnimatedSection {...fadeInUpScroll}>
        <Skills />
      </AnimatedSection>

      <AnimatedSection {...fadeInUpScroll} viewport={{ once: true, amount: 0, margin: '0px 0px -100px 0px' }}>
        <Projects />
      </AnimatedSection>
    </main>
  );
}
