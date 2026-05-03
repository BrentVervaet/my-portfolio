'use client';
import SocialLinks from '@/components/SocialsLinks';
import ThemeToggle from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { handleAnchorClick } from '@/lib/scroll';
import { DURATION, EASE, scaleOnHover } from '@/lib/animations';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // Always show header at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlHeader);

    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);

  return (
    <motion.header
      className="sticky top-0 left-0 right-0 z-50 w-screen bg-gradient-to-b from-white/90 via-white/70 to-transparent backdrop-blur-md transition-all dark:from-slate-950/90 dark:via-slate-950/70 dark:to-transparent"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: DURATION.NORMAL, ease: EASE }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 pt-8 pb-4 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="font-mono text-2xl font-bold transition-colors hover:text-orange-600 dark:hover:text-blue-400"
      >
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: DURATION.SLOW, ease: EASE }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="hidden sm:inline">Brent Vervaet</span>
          <span className="inline sm:hidden">BV</span>
        </motion.div>
      </Link>

      {/* Mobile menu */}
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        {!isMenuOpen && (
          <SheetTrigger asChild>
            <motion.button {...scaleOnHover} aria-label="Open menu">
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
            <motion.div {...scaleOnHover}>
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
            <motion.div {...scaleOnHover}>
              <Link
                href="/blog"
                onClick={handleLinkClick}
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 shadow-lg backdrop-blur-md transition-all hover:bg-white/20 dark:border-white/10 dark:bg-black/20 dark:hover:bg-black/30"
              >
                Blog
              </Link>
            </motion.div>
            <motion.div {...scaleOnHover}>
              <Link
                href="/about"
                onClick={handleLinkClick}
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 shadow-lg backdrop-blur-md transition-all hover:bg-white/20 dark:border-white/10 dark:bg-black/20 dark:hover:bg-black/30"
              >
                About
              </Link>
            </motion.div>

            {/* Theme toggle */}
            <ThemeToggle />

            {/* Social links */}
            <SocialLinks showResumeButton={false} />
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop navigation */}
      <div className="hidden items-center space-x-6 font-mono text-base md:flex">
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: DURATION.SLOW, ease: EASE }}
        >
          <motion.div {...scaleOnHover}>
            <Link
              href="/#projects"
              onClick={e => handleAnchorClick(e, '#projects')}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 shadow-lg backdrop-blur-md transition-all hover:bg-white/20 hover:text-orange-600 dark:border-white/10 dark:bg-black/20 dark:hover:bg-black/30 dark:hover:text-blue-400"
            >
              Projects
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 240 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: DURATION.SLOW, ease: EASE }}
        >
          <motion.div {...scaleOnHover}>
            <Link
              href="/blog"
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 shadow-lg backdrop-blur-md transition-all hover:bg-white/20 hover:text-orange-600 dark:border-white/10 dark:bg-black/20 dark:hover:bg-black/30 dark:hover:text-blue-400"
            >
              Blog
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 180 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: DURATION.SLOW, ease: EASE }}
        >
          <motion.div {...scaleOnHover}>
            <Link
              href="/about"
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 shadow-lg backdrop-blur-md transition-all hover:bg-white/20 hover:text-orange-600 dark:border-white/10 dark:bg-black/20 dark:hover:bg-black/30 dark:hover:text-blue-400"
            >
              About
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: DURATION.SLOW, ease: EASE }}
        >
          <ThemeToggle />
        </motion.div>
      </div>
      </nav>
    </motion.header>
  );
}
