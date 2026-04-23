'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('Global error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-4 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="max-w-md rounded-3xl border border-white/20 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-black/20">
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

            <h2 className="mb-3 font-mono text-2xl font-bold">Critical Error</h2>

            <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
              A critical error occurred. Please refresh the page or contact me if the problem persists.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => reset()}
                className="flex-1 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium shadow-lg backdrop-blur-xl transition-all hover:bg-white/20 dark:border-white/10 dark:bg-black/20 dark:hover:bg-black/30"
              >
                Try again
              </button>
              <a
                href="/"
                className="flex-1 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium shadow-lg backdrop-blur-xl transition-all hover:bg-white/20 dark:border-white/10 dark:bg-black/20 dark:hover:bg-black/30"
              >
                Go home
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
