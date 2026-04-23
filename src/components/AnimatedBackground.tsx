'use client';

export default function AnimatedBackground() {
  return (
    <div
      className="animate-gradient fixed inset-0 -z-10 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-80 dark:from-blue-600/30 dark:via-purple-600/30 dark:to-pink-600/30"
      style={{ backgroundSize: '400% 400%' }}
    ></div>
  );
}
