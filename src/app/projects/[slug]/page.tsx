import ProjectDetail from '@/components/projects/ProjectDetail';
import { defaultProjects } from '@/data/projects/projects';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Metadata genereren (async)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const project = defaultProjects.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === slug);

  if (!project) {
    return {
      title: 'Project Not Found | Brent Vervaet',
      description: 'The requested project was not found.',
    };
  }

  const projectImage = project.images[0] || '/images/home/brent-vervaet.webp';

  return {
    title: `${project.title} | Brent Vervaet`,
    description: project.longDescription || project.description,
    keywords: ['Brent Vervaet', 'Project', project.title, ...project.technologies],
    authors: [{ name: 'Brent Vervaet' }],
    openGraph: {
      title: `${project.title} | Brent Vervaet Portfolio`,
      description: project.longDescription || project.description,
      images: [
        {
          url: projectImage,
          width: 1200,
          height: 630,
          alt: `${project.title} project screenshot`,
        },
      ],
      type: 'article',
      publishedTime: project.date.toISOString(),
      authors: ['Brent Vervaet'],
      tags: project.technologies,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Brent Vervaet`,
      description: project.description,
      images: [projectImage],
      creator: '@brentvervaet',
    },
    alternates: {
      canonical: `/projects/${slug}`,
    },
  };
}

// Static params genereren (async)
export async function generateStaticParams() {
  return defaultProjects.map(project => ({
    slug: project.title.toLowerCase().replace(/\s+/g, '-'),
  }));
}

// Page component async, params awaited
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const project = defaultProjects.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === slug);

  if (!project) {
    notFound();
  }

  const enrichedProject = {
    ...project,
    longDescription:
      project.longDescription ||
      'This project showcases my skills in web development and design. I focused on creating a user-friendly interface while implementing robust functionality.',
    features: project.features || [
      'Responsive design that works on all devices',
      'Intuitive user interface with smooth animations',
      'Optimized performance for fast loading times',
    ],
    challenges: project.challenges || [
      'Implementing complex animations while maintaining performance',
      'Ensuring cross-browser compatibility',
      'Optimizing for both desktop and mobile experiences',
    ],
    technologies: project.technologies,
  };

  return <ProjectDetail project={enrichedProject} />;
}
