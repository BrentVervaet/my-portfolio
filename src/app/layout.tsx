import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from 'next-themes';
import { Fira_Code, Roboto } from 'next/font/google';
import React from 'react';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
});

export const metadata: Metadata = {
  title: {
    default: 'Brent Vervaet | Full-Stack Developer',
    template: '%s | Brent Vervaet',
  },
  description:
    'Full-stack developer specializing in frontend & backend technologies. Explore my portfolio featuring web applications, mobile apps, and innovative projects.',
  keywords: ['Brent Vervaet', 'Full-Stack Developer', 'Portfolio', 'Web Development', 'Mobile Development'],
  authors: [{ name: 'Brent Vervaet' }],
  creator: 'Brent Vervaet',
  metadataBase: new URL('https://brentvervaet.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brentvervaet.dev',
    title: 'Brent Vervaet | Full-Stack Developer',
    description:
      'Full-stack developer specializing in frontend & backend technologies. Explore my portfolio featuring web applications, mobile apps, and innovative projects.',
    siteName: 'Brent Vervaet - Portfolio',
    images: [
      {
        url: '/images/home/brent-vervaet.webp',
        width: 1378,
        height: 1378,
        alt: 'Brent Vervaet - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brent Vervaet | Full-Stack Developer',
    description:
      'Full-stack developer specializing in frontend & backend technologies. Explore my portfolio featuring web applications, mobile apps, and innovative projects.',
    images: ['/images/home/brent-vervaet.webp'],
    creator: '@brentieV',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`scroll-smooth ${roboto.variable} ${firaCode.variable}`} suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Brent Vervaet',
              url: 'https://brentvervaet.dev',
              image: 'https://brentvervaet.dev/images/home/brent-vervaet.webp',
              jobTitle: 'Full-Stack Developer',
              description:
                'Full-stack developer specializing in frontend & backend technologies. Explore my portfolio featuring web applications, mobile apps, and innovative projects.',
              knowsAbout: ['React', 'Next.js', 'Swift', 'Java', 'C#', 'Vue', 'TypeScript', 'Tailwind CSS', 'Node.js'],
              sameAs: [
                'https://github.com/brentvervaet',
                'https://linkedin.com/in/brentvervaet',
                'https://twitter.com/_brentie_',
                'https://brentvervaet.dev',
                'https://www.instagram.com/brentiedebentley/',
              ],
            }),
          }}
        />
      </head>

      <body
        className={`flex min-h-screen flex-col bg-slate-50 font-sans text-zinc-900 antialiased dark:bg-slate-950 dark:text-white`}
      >
        <AnimatedBackground />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <div className="relative z-10 mx-auto max-w-7xl grow px-4 sm:px-6 lg:px-8">
            <PageTransition>{children}</PageTransition>
          </div>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
