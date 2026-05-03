# Brent Vervaet - Portfolio

My personal portfolio website built with Next.js 16, showcasing my projects, technical blog, and experience as a
Full-Stack Developer.

🌐 **Live Site**: [brentvervaet.dev](https://brentvervaet.dev)

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router with React Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (strict mode)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Blog**: [MDX](https://mdxjs.com/) with syntax highlighting
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics) + Speed Insights
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com)

## Features

- ✅ Server-first architecture (minimal client JavaScript)
- ✅ MDX-powered blog with syntax highlighting
- ✅ Responsive design (mobile-first)
- ✅ Dark mode (auto-detects system preference)
- ✅ SEO optimized (metadata, OpenGraph, JSON-LD)
- ✅ Performance optimized (Lighthouse 98/100)
- ✅ Accessibility focused (ARIA labels, semantic HTML)
- ✅ Error boundaries for graceful failures
- ✅ Static generation (SSG) for fast page loads

## Development

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Setup

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
pnpm dev          # Start dev server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint issues
pnpm type-check   # Run TypeScript compiler check
pnpm clean        # Remove .next build directory
pnpm build:analyze # Analyze bundle size
```

## Project Structure

```
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── blog/            # Blog listing and post pages
│   │   ├── about/           # About page
│   │   ├── projects/[slug]/ # Dynamic project pages
│   │   └── layout.tsx       # Root layout with metadata
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   └── ...             # Custom components
│   ├── content/            # Content files
│   │   └── blog/           # MDX blog posts
│   ├── data/               # Data files
│   │   ├── projects/       # Project data
│   │   ├── skills.tsx      # Skills with icons
│   │   └── experience.ts   # Work & education
│   └── lib/                # Utility functions
│       ├── blog.ts         # Blog utilities
│       └── animations.ts   # Animation constants
├── public/                 # Static assets
└── ...                     # Config files
```

## Content Management

### Adding a New Blog Post

1. Create a new `.mdx` file in `src/content/blog/`:
   ```bash
   src/content/blog/my-new-post.mdx
   ```

2. Add frontmatter:
   ```yaml
   ---
   title: "Your Post Title"
   date: "2026-04-23"
   description: "Brief description for SEO"
   tags: ["typescript", "react", "nextjs"]
   ---
   ```

3. Write your content in Markdown/MDX
4. Build and deploy - it's automatically statically generated!

### Adding a New Project

Edit `src/data/projects/projects.ts` and add a new project object:

```typescript
{
  title: 'Project Name',
  description: 'Short description',
  longDescription: 'Detailed description for project page',
  features: ['Feature 1', 'Feature 2'],
  challenges: ['Challenge 1', 'Challenge 2'],
  technologies: ['React', 'TypeScript', 'Node.js'],
  images: ['/images/Projects/YourProject/screenshot.webp'],
  link: 'https://project-url.com',
  sourceCodeLink: 'https://github.com/...',
  date: new Date('2026-04-23'),
}
```

### Updating Skills or Experience

- **Skills**: Edit `src/data/skills.tsx`
- **Experience**: Edit `src/data/experience.ts`

## Deployment

The site auto-deploys to Vercel on every push to `main`:

1. Push changes to GitHub
2. Vercel automatically builds and deploys
3. Check deployment status at [vercel.com](https://vercel.com)

### Manual Deploy

```bash
pnpm build
vercel --prod
```

## Performance

**Lighthouse Scores:**

- Performance: 98/100
- Accessibility: 100/100
- Best Practices: 100/100
- SEO: 100/100

**Bundle Size:**

- Static: 1.4MB
- Server: 15MB
- Client JS: ~45KB (initial)

## Analytics

Analytics are automatically configured via Vercel:

- **Vercel Analytics**: Page views, custom events
- **Speed Insights**: Core Web Vitals, RUM

No environment variables needed - works out of the box on Vercel.

## License

© 2026 Brent Vervaet. All rights reserved.

This is my personal portfolio - feel free to get inspiration, but please don't copy it directly.

## Contact

- **Website**: [brentvervaet.dev](https://brentvervaet.dev)
- **GitHub**: [@brentvervaet](https://github.com/brentvervaet)
- **LinkedIn**: [brentvervaet](https://linkedin.com/in/brentvervaet)
- **Email**: [Contact form on website]
