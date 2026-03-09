'use client';
import Experience from '@/components/Experience';
import HeroSection from '@/components/HeroSection';
import Skills from '@/components/Skills';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useState } from 'react';

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
  const [wave, setWave] = useState(false);
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <HeroSection wave={wave} setWave={setWave} />
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2, margin: '0px 0px -100px 0px' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <Experience />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2, margin: '0px 0px -100px 0px' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <Skills />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0, margin: '0px 0px -100px 0px' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <Projects />
      </motion.section>
    </main>
  );
}
