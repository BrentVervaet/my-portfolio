import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Brent Vervaet, a full-stack development student passionate about modern web technologies, clean code, and creating engaging user experiences.',
  keywords: ['Brent Vervaet', 'About', 'Full-Stack Developer', 'Biography', 'Career'],
  openGraph: {
    title: 'About Brent Vervaet',
    description:
      'Learn more about Brent Vervaet, a full-stack development student passionate about modern web technologies.',
    type: 'profile',
    url: 'https://brentvervaet.dev/about',
  },
  twitter: {
    card: 'summary',
    title: 'About Brent Vervaet',
    description: 'Learn more about Brent Vervaet, a full-stack development student.',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
