import React from 'react';
import SocialLinks from '@/components/SocialsLinks';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-transparent dark:border-white/5">
      <div className="mx-auto max-w-6xl p-8">
        <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
          {/* Navigation Links */}
          <div className="flex space-x-6 font-mono text-sm text-zinc-600 dark:text-zinc-400">
            <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
              © {new Date().getFullYear()} Brent Vervaet. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <SocialLinks showResumeButton={false} />
        </div>
      </div>
    </footer>
  );
}
