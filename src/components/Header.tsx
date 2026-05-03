'use client';
import SocialLinks from '@/components/SocialsLinks';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { handleAnchorClick } from '@/lib/scroll';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative z-50 flex items-center justify-between px-4 pt-8">
      <motion.div whileTap={{ scale: 0.9 }}>
        <Link
          href="/"
          className="font-mono text-2xl font-bold transition-colors hover:text-blue-600 dark:hover:text-blue-400"
        >
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="hidden sm:inline">Brent Vervaet</span>
            <span className="inline sm:hidden">BV</span>
          </motion.div>
        </Link>
      </motion.div>

      {/* Mobile menu with Sheet component */}
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        {!isMenuOpen && (
          <SheetTrigger asChild>
            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} aria-label="Open menu">
              <Button variant={'ghost'} size="icon" className="h-8 w-8 md:hidden" asChild>
                <Menu className="size-5 h-5 w-5" />
              </Button>
            </motion.button>
          </SheetTrigger>
        )}

        <SheetContent
          side="right"
          className="border-l border-white/20 bg-white/10 shadow-2xl backdrop-blur-md dark:border-white/10 dark:bg-black/20"
        >
          <SheetTitle />

          <div className="mt-16 flex flex-col items-center space-y-10 font-mono text-lg">
            <motion.div whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }}>
              <Link
                href="/#projects"
                onClick={e => {
                  handleAnchorClick(e, '#projects');
                  handleLinkClick();
                }}
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 shadow-lg backdrop-blur-md transition-all hover:bg-white/20 dark:border-white/10 dark:bg-black/20 dark:hover:bg-black/30"
              >
                Projects
              </Link>
            </motion.div>
            <motion.div whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }}>
              <Link
                href="/blog"
                onClick={handleLinkClick}
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 shadow-lg backdrop-blur-md transition-all hover:bg-white/20 dark:border-white/10 dark:bg-black/20 dark:hover:bg-black/30"
              >
                Blog
              </Link>
            </motion.div>
            <motion.div whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }}>
              <Link
                href="/about"
                onClick={handleLinkClick}
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 shadow-lg backdrop-blur-md transition-all hover:bg-white/20 dark:border-white/10 dark:bg-black/20 dark:hover:bg-black/30"
              >
                About
              </Link>
            </motion.div>

            {/* Social links */}
            <SocialLinks showResumeButton={false} />
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop navigation */}
      <div className="hidden items-center space-x-6 font-mono text-base md:flex">
        <motion.div initial={{ opacity: 0, x: 300 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              href="/#projects"
              onClick={e => handleAnchorClick(e, '#projects')}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 shadow-lg backdrop-blur-md transition-all hover:bg-white/20 hover:text-blue-600 dark:border-white/10 dark:bg-black/20 dark:hover:bg-black/30 dark:hover:text-blue-400"
            >
              Projects
            </Link>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 240 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              href="/blog"
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 shadow-lg backdrop-blur-md transition-all hover:bg-white/20 hover:text-blue-600 dark:border-white/10 dark:bg-black/20 dark:hover:bg-black/30 dark:hover:text-blue-400"
            >
              Blog
            </Link>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 180 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              href="/about"
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 shadow-lg backdrop-blur-md transition-all hover:bg-white/20 hover:text-blue-600 dark:border-white/10 dark:bg-black/20 dark:hover:bg-black/30 dark:hover:text-blue-400"
            >
              About
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </nav>
  );
}
