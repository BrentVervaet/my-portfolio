import { cn } from '@/lib/utils';
import React, { ElementType } from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'compact';
  noMaxWidth?: boolean; // allow full-bleed if needed
}

/**
 * Section: consistent horizontal & vertical spacing wrapper.
 * - default: larger vertical rhythm for major content
 * - compact: slightly reduced for subordinate sections
 */
export const Section: React.FC<SectionProps> = ({ id, children, className, size = 'default', noMaxWidth = false }) => {
  // Enhanced vertical rhythm for better visual hierarchy
  const vertical = size === 'compact' ? 'py-12 md:py-16' : 'py-16 md:py-24';
  return (
    <section id={id} className={cn('w-full', vertical, className)}>
      <div className={cn('mx-auto w-full', !noMaxWidth && 'max-w-5xl')}>{children}</div>
    </section>
  );
};

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingTag;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ children, className, as = 'h2', ...rest }) => {
  const Tag: ElementType = as;
  return (
    <Tag className={cn('section-heading', className)} {...rest}>
      {children}
    </Tag>
  );
};

export default Section;
