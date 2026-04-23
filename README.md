# Brent Vervaet - Portfolio

Modern portfolio website showcasing my projects, skills, and experience as a Full-Stack Developer.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) + [React Icons](https://react-icons.github.io/react-icons/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## Features

- ✅ Responsive design (mobile-first)
- ✅ Dark mode with system preference detection
- ✅ SEO optimized (metadata, OpenGraph, JSON-LD)
- ✅ Performance optimized (image optimization, code splitting)
- ✅ Accessibility focused (ARIA labels, semantic HTML)
- ✅ Smooth animations and transitions
- ✅ Project showcase with detailed pages
- ✅ Skills and experience sections

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/brentvervaet/my-portfolio.git
cd my-portfolio/portfolio

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Available Scripts

```bash
pnpm dev          # Start development server (with Turbopack)
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint issues
pnpm type-check   # Run TypeScript compiler check
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── projects/[slug]/   # Dynamic project detail pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── robots.ts          # Robots.txt config
│   └── sitemap.ts         # Sitemap config
├── components/            # React components
│   ├── projects/         # Project-related components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Other components
├── data/                 # Data files
│   └── projects/         # Project data
└── lib/                  # Utility functions
```

## Configuration

- **Next.js**: `next.config.ts`
- **TypeScript**: `tsconfig.json`
- **Tailwind CSS**: `tailwind.config.js`
- **ESLint**: `eslint.config.mjs`
- **Prettier**: `.prettierrc`

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

```bash
# Build and test locally
pnpm build
pnpm start
```

For other platforms, follow standard Next.js deployment guides.

## License

© 2025 Brent Vervaet. All rights reserved.

## Contact

- **Website**: [brentvervaet.dev](https://brentvervaet.dev)
- **GitHub**: [@brentvervaet](https://github.com/brentvervaet)
- **LinkedIn**: [brentvervaet](https://linkedin.com/in/brentvervaet)
