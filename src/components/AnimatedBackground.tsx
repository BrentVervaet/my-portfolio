'use client';

import { memo, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

/**
 * Animated mesh gradient background using canvas
 * Creates a modern, subtle animated background with moving gradient orbs
 * Adapts color palette based on light/dark theme
 * Memoized to prevent unnecessary re-renders
 */
const AnimatedBackground = memo(function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Gradient mesh configuration
    const points: Array<{ x: number; y: number; vx: number; vy: number; radius: number }> = [];
    const numPoints = 5;

    // Initialize points
    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 300 + 250,
      });
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw points
      points.forEach(point => {
        // Update position
        point.x += point.vx;
        point.y += point.vy;

        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

        // Keep points in bounds
        point.x = Math.max(0, Math.min(canvas.width, point.x));
        point.y = Math.max(0, Math.min(canvas.height, point.y));
      });

      // Draw gradients
      points.forEach((point, i) => {
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, point.radius);

        // Dark mode: cool blues, purples, and indigos
        const darkColors = [
          ['rgba(99, 102, 241, 0.12)', 'rgba(99, 102, 241, 0)'], // Indigo
          ['rgba(139, 92, 246, 0.12)', 'rgba(139, 92, 246, 0)'], // Purple
          ['rgba(59, 130, 246, 0.12)', 'rgba(59, 130, 246, 0)'], // Blue
          ['rgba(168, 85, 247, 0.10)', 'rgba(168, 85, 247, 0)'], // Purple-pink
          ['rgba(79, 70, 229, 0.12)', 'rgba(79, 70, 229, 0)'], // Deep indigo
        ];

        // Light mode: warm peach, coral, and amber tones
        const lightColors = [
          ['rgba(251, 146, 60, 0.08)', 'rgba(251, 146, 60, 0)'], // Peach (orange-400)
          ['rgba(251, 113, 133, 0.08)', 'rgba(251, 113, 133, 0)'], // Coral (rose-400)
          ['rgba(244, 114, 182, 0.08)', 'rgba(244, 114, 182, 0)'], // Soft pink (pink-400)
          ['rgba(251, 191, 36, 0.08)', 'rgba(251, 191, 36, 0)'], // Amber (amber-400)
          ['rgba(253, 186, 116, 0.08)', 'rgba(253, 186, 116, 0)'], // Light orange (orange-300)
        ];

        const colors = resolvedTheme === 'dark' ? darkColors : lightColors;
        const [color1, color2] = colors[i % colors.length];
        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        opacity: resolvedTheme === 'dark' ? 0.7 : 0.6,
      }}
    />
  );
});

export default AnimatedBackground;
