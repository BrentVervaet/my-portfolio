'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function WaveEmoji() {
  const [wave, setWave] = useState(false);

  return (
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
  );
}
