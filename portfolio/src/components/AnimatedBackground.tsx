'use client';

export default function AnimatedBackground() {
  return (
    <div
      className="animate-gradient fixed inset-0 -z-10 bg-linear-to-br from-blue-300 via-cyan-300 to-green-300 opacity-60"
      style={{ backgroundSize: '200% 200%' }}
    ></div>
  );
}
