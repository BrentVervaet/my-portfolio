'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <div className="glass-subtle max-w-md rounded-3xl border border-white/20 p-8 text-center shadow-2xl dark:border-white/10">
        <div className="mb-6">
          <svg
            className="mx-auto h-16 w-16 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h2 className="mb-3 font-mono text-2xl font-bold text-zinc-900 dark:text-white">Something went wrong</h2>

        <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
          An unexpected error occurred. Don&apos;t worry, it&apos;s been logged and I&apos;ll look into it.
        </p>

        {error.message && (
          <details className="mb-6 rounded-lg border border-white/20 bg-white/5 p-4 text-left dark:border-white/10">
            <summary className="cursor-pointer text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Error details
            </summary>
            <pre className="mt-2 overflow-auto text-xs text-zinc-600 dark:text-zinc-400">{error.message}</pre>
          </details>
        )}

        <div className="flex gap-3">
          <button
            onClick={() => reset()}
            className="flex-1 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium shadow-lg backdrop-blur-xl transition-all hover:scale-105 hover:bg-white/20 active:scale-95 dark:border-white/10 dark:bg-black/20 dark:hover:bg-black/30"
          >
            Try again
          </button>
          <a
            href="/"
            className="flex-1 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium shadow-lg backdrop-blur-xl transition-all hover:scale-105 hover:bg-white/20 active:scale-95 dark:border-white/10 dark:bg-black/20 dark:hover:bg-black/30"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}
