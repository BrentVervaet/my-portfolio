import Link from 'next/link';

export default function ProjectNotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <div className="glass-subtle max-w-md rounded-3xl border border-white/20 p-8 text-center shadow-2xl dark:border-white/10">
        <div className="mb-6">
          <svg
            className="mx-auto h-16 w-16 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>

        <h2 className="mb-3 font-mono text-2xl font-bold text-zinc-900 dark:text-white">Project not found</h2>

        <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
          The project you&apos;re looking for doesn&apos;t exist. Check out my other work below.
        </p>

        <div className="flex gap-3">
          <Link
            href="/#projects"
            className="flex-1 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium shadow-lg backdrop-blur-xl transition-all hover:scale-105 hover:bg-white/20 active:scale-95 dark:border-white/10 dark:bg-black/20 dark:hover:bg-black/30"
          >
            All projects
          </Link>
          <Link
            href="/"
            className="flex-1 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium shadow-lg backdrop-blur-xl transition-all hover:scale-105 hover:bg-white/20 active:scale-95 dark:border-white/10 dark:bg-black/20 dark:hover:bg-black/30"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
