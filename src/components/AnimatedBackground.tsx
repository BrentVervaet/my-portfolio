'use client';

import { useEffect, useRef, memo } from 'react';

/**
 * Animated mesh gradient background using canvas
 * Creates a modern, subtle animated background with moving gradient orbs
 * Memoized to prevent unnecessary re-renders
 */
const AnimatedBackground = memo(function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

        // Different colors for each point (subtle blues, purples, and indigos)
        const colors = [
          ['rgba(99, 102, 241, 0.12)', 'rgba(99, 102, 241, 0)'], // Indigo
          ['rgba(139, 92, 246, 0.12)', 'rgba(139, 92, 246, 0)'], // Purple
          ['rgba(59, 130, 246, 0.12)', 'rgba(59, 130, 246, 0)'], // Blue
          ['rgba(168, 85, 247, 0.10)', 'rgba(168, 85, 247, 0)'], // Purple-pink
          ['rgba(79, 70, 229, 0.12)', 'rgba(79, 70, 229, 0)'], // Deep indigo
        ];

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
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        opacity: 0.7,
      }}
      aria-hidden="true"
    />
  );
});

export default AnimatedBackground;
