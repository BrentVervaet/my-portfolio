import { Section, SectionHeading } from '@/components/Section';
import { getBlogPosts } from '@/lib/blog';
import { Calendar, Clock } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles about web development, programming, and technology by Brent Vervaet.',
  keywords: ['Brent Vervaet', 'Blog', 'Web Development', 'Programming', 'Technology', 'Software Engineering'],
  openGraph: {
    title: 'Blog | Brent Vervaet',
    description: 'Articles about web development, programming, and technology by Brent Vervaet.',
    type: 'website',
    url: 'https://brentvervaet.dev/blog',
    siteName: 'Brent Vervaet - Portfolio',
    images: [
      {
        url: '/images/home/brent-vervaet.webp',
        width: 1200,
        height: 630,
        alt: 'Brent Vervaet - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Brent Vervaet',
    description: 'Articles about web development, programming, and technology.',
    images: ['/images/home/brent-vervaet.webp'],
    creator: '@brentieV',
  },
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  const posts = getBlogPosts();

  if (posts.length === 0) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-8">
        <Section>
          <SectionHeading>Blog</SectionHeading>
          <div className="glass-subtle card-spacing rounded-3xl text-center shadow-2xl">
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              No blog posts yet. Check back soon for articles on web development, programming, and more!
            </p>
          </div>
        </Section>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <Section>
        <SectionHeading>Blog</SectionHeading>
        <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-300">
          Thoughts on web development, programming, and technology.
        </p>

        <div className="content-spacing">
          {posts.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="glass-subtle card-spacing group interactive interactive-hover block overflow-hidden rounded-3xl shadow-2xl"
            >
              <article>
                <h2 className="mb-2 font-mono text-2xl font-bold transition-colors group-hover:text-orange-600 dark:group-hover:text-blue-400">
                  {post.title}
                </h2>

                <div className="mb-3 flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                  <time dateTime={post.date} className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readingTime}
                  </span>
                </div>

                <p className="mb-4 text-zinc-600 dark:text-zinc-300">{post.description}</p>

                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="glass-subtle rounded-full px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
