import { getBlogPost, getBlogPosts } from '@/lib/blog';
import { Calendar, Clock } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: ['Brent Vervaet', 'Blog', 'Web Development', ...post.tags],
    authors: [{ name: 'Brent Vervaet' }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Brent Vervaet'],
      tags: post.tags,
      url: `https://brentvervaet.dev/blog/${slug}`,
      siteName: 'Brent Vervaet - Portfolio',
      images: [
        {
          url: '/images/home/brent-vervaet.webp',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: ['/images/home/brent-vervaet.webp'],
      creator: '@brentieV',
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Brent Vervaet',
      url: 'https://brentvervaet.dev',
    },
    keywords: post.tags.join(', '),
    articleSection: 'Technology',
    publisher: {
      '@type': 'Person',
      name: 'Brent Vervaet',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://brentvervaet.dev/blog/${slug}`,
    },
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article>
        <Link
          href="/blog"
          className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to blog
        </Link>

        <header className="mb-8">
          <h1 className="mb-4 font-mono text-4xl font-bold md:text-5xl">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
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

          {post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
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
        </header>

        <div className="prose prose-zinc prose-lg dark:prose-invert prose-headings:font-mono prose-a:text-blue-600 prose-code:rounded prose-code:bg-zinc-100 prose-code:px-1 prose-code:py-0.5 prose-code:text-sm prose-code:before:content-[''] prose-code:after:content-[''] dark:prose-a:text-blue-400 dark:prose-code:bg-zinc-800 max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </main>
  );
}
