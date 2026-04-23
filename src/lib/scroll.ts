/**
 * Smooth scroll to element with proper offset handling
 * Better than hash navigation, especially on mobile
 */
export function smoothScrollTo(elementId: string, offset: number = 80) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}

/**
 * Handle anchor link click with smooth scroll
 */
export function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  // Only handle hash links on same page
  if (!href.startsWith('#')) return;

  e.preventDefault();
  const id = href.replace('#', '');
  smoothScrollTo(id);

  // Update URL without triggering scroll
  if (window.history.pushState) {
    window.history.pushState(null, '', href);
  }
}
