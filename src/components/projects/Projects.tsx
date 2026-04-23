'use client';
import ProjectImageGallery from '@/components/projects/ProjectImageGallery';
import { Section, SectionHeading } from '@/components/Section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { defaultProjects, Project } from '@/data/projects/projects';
import Link from 'next/link';
import React, { useState } from 'react';

interface ProjectsProps {
  projects?: Project[];
}

const Projects: React.FC<ProjectsProps> = React.memo(({ projects = defaultProjects }) => {
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  const sortedProjects = [...projects].sort((a, b) => {
    if (sortOrder === 'newest') {
      return b.date.getTime() - a.date.getTime();
    } else {
      return a.date.getTime() - b.date.getTime();
    }
  });

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest');
  };

  return (
    <Section id="projects">
      <div className="mb-8 flex items-center justify-between">
        <SectionHeading id="projects-section">Featured Projects</SectionHeading>
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleSortOrder}
          className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm shadow-lg backdrop-blur-md transition-all hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none active:scale-95 dark:border-white/10 dark:bg-black/20"
          title={sortOrder === 'newest' ? 'Sort by oldest first' : 'Sort by latest first'}
          aria-label={`Currently sorting by ${sortOrder} projects. Click to sort by ${sortOrder === 'newest' ? 'oldest' : 'newest'} projects`}
        >
          {sortOrder === 'newest' ? (
            <>
              Latest
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-down"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </>
          ) : (
            <>
              Oldest
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-up"
              >
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
            </>
          )}
        </Button>
      </div>
      <div
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        role="region"
        aria-labelledby="projects-section"
      >
        {sortedProjects.map(project => (
          <div
            key={project.title}
            className="group glass-subtle flex flex-col overflow-hidden rounded-3xl shadow-2xl transition-all interactive interactive-hover"
          >
            {/*Images*/}
            <div className="p-4">
              <ProjectImageGallery images={project.images} projectTitle={project.title} />
            </div>

            {/*Content*/}
            <div className="card-spacing pt-2">
              <div className="flex items-start justify-between">
                <Link
                  href={`/projects/${project.title.toLowerCase().replaceAll(/\s+/g, '-')}`}
                  className="group-hover:text-primary rounded-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent focus:outline-none"
                  aria-label={`View details for ${project.title} project`}
                >
                  <h3 className="font-mono text-xl font-bold transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {project.title}
                  </h3>
                </Link>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {project.date.toLocaleDateString('en-UK', {
                    year: 'numeric',
                    month: 'short',
                  })}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{project.description}</p>
            </div>

            {/*Tags*/}
            <div className="grow px-6 pb-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <Badge
                    key={tech}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur-sm transition-all hover:bg-white/20 dark:border-white/10 dark:bg-black/10 dark:text-zinc-300 dark:hover:bg-black/20"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/*Links*/}
            <div className="surface-divider flex flex-wrap gap-3 px-6 pb-6 pt-4">
              {project.link && (
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border border-white/20 bg-white/10 px-6 py-2 shadow-lg backdrop-blur-xl transition-all hover:scale-105 hover:bg-white/20 active:scale-95 dark:border-white/10 dark:bg-black/20 dark:hover:bg-black/30"
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Visit
                  </a>
                </Button>
              )}

              {project.sourceCodeLink && (
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border border-white/20 bg-white/10 px-6 py-2 shadow-lg backdrop-blur-xl transition-all hover:scale-105 hover:bg-white/20 active:scale-95 dark:border-white/10 dark:bg-black/20 dark:hover:bg-black/30"
                >
                  <a href={project.sourceCodeLink} target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    Source Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
});

Projects.displayName = 'Projects';

export default Projects;
