import { defaultProjects } from '@/data/projects/projects';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://brentvervaet.dev';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Dynamic project pages
  const projectPages: MetadataRoute.Sitemap = defaultProjects.map(project => ({
    url: `${baseUrl}/projects/${project.title.toLowerCase().replaceAll(/\s+/g, '-')}`,
    lastModified: project.date,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}
