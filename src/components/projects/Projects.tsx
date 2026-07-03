'use client';
import ProjectImageCarousel from '@/components/projects/ProjectImageCarousel';
import { Section, SectionHeading } from '@/components/Section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { defaultProjects, Project } from '@/data/projects/projects';
import { scaleOnHover, scaleOnHoverSubtle } from '@/lib/animations';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import { ArrowDown, ArrowUp, ExternalLink } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

interface ProjectsProps {
  projects?: Project[];
}

const Projects: React.FC<ProjectsProps> = React.memo(({ projects = defaultProjects }) => {
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  // Memoize sorted projects to avoid re-sorting on every render
  const sortedProjects = React.useMemo(() => {
    return [...projects].sort((a, b) => {
      if (sortOrder === 'newest') {
        return b.date.getTime() - a.date.getTime();
      } else {
        return a.date.getTime() - b.date.getTime();
      }
    });
  }, [projects, sortOrder]);

  const toggleSortOrder = React.useCallback(() => {
    setSortOrder(prev => (prev === 'newest' ? 'oldest' : 'newest'));
  }, []);

  return (
    <Section id="projects">
      <div className="mb-8 flex items-center justify-between">
        <SectionHeading id="projects-section">Projects</SectionHeading>
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleSortOrder}
          className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm shadow-lg backdrop-blur-md transition-all hover:scale-105 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none active:scale-95 dark:border-white/10 dark:bg-black/20 dark:focus:ring-blue-500"
          title={sortOrder === 'newest' ? 'Sort by oldest first' : 'Sort by latest first'}
          aria-label={`Currently sorting by ${sortOrder} projects. Click to sort by ${sortOrder === 'newest' ? 'oldest' : 'newest'} projects`}
        >
          {sortOrder === 'newest' ? (
            <>
              Latest
              <ArrowDown size={16} />
            </>
          ) : (
            <>
              Oldest
              <ArrowUp size={16} />
            </>
          )}
        </Button>
      </div>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" aria-labelledby="projects-section">
        {sortedProjects.map(project => (
          <motion.div
            key={project.title}
            {...scaleOnHoverSubtle}
            className="group glass-subtle flex flex-col overflow-hidden rounded-3xl shadow-2xl"
          >
            {/*Images*/}
            <div className="p-4">
              <ProjectImageCarousel images={project.images} projectTitle={project.title} />
            </div>

            {/*Content*/}
            <div className="card-spacing pt-2">
              <div className="flex items-start justify-between">
                <Link
                  href={`/projects/${project.title.toLowerCase().replaceAll(/\s+/g, '-')}`}
                  className="group-hover:text-primary rounded-lg focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-transparent focus:outline-none dark:focus:ring-blue-500"
                  aria-label={`View details for ${project.title} project`}
                >
                  <h3 className="font-mono text-xl font-bold transition-colors group-hover:text-orange-600 dark:group-hover:text-blue-400">
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
            <div className="surface-divider flex flex-wrap gap-3 px-6 pt-4 pb-6">
              {project.link && (
                <motion.div {...scaleOnHover}>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border border-white/20 bg-white/10 px-6 py-2 shadow-lg backdrop-blur-xl transition-all hover:bg-white/20 dark:border-white/10 dark:bg-black/20 dark:hover:bg-black/30"
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Visit
                    </a>
                  </Button>
                </motion.div>
              )}

              {project.sourceCodeLink && (
                <motion.div {...scaleOnHover}>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border border-white/20 bg-white/10 px-6 py-2 shadow-lg backdrop-blur-xl transition-all hover:bg-white/20 dark:border-white/10 dark:bg-black/20 dark:hover:bg-black/30"
                  >
                    <a href={project.sourceCodeLink} target="_blank" rel="noopener noreferrer">
                      <SiGithub size={16} className="mr-2" />
                      Source Code
                    </a>
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </section>
    </Section>
  );
});

Projects.displayName = 'Projects';

export default Projects;
