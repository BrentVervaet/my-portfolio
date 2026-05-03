'use client';
import { Section, SectionHeading } from '@/components/Section';
import { Badge } from '@/components/ui/badge';
import { education, workExperience } from '@/data/experience';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Briefcase, Calendar, GraduationCap, MapPin } from 'lucide-react';
import { memo, useMemo } from 'react';

const Experience = memo(function Experience() {
  // Memoize the combined and sorted experiences to avoid re-computation
  const allExperiences = useMemo(() => {
    return [...workExperience, ...education].sort((a, b) => {
      // Extract year from period string (assumes format "YYYY - Present" or "YYYY - YYYY")
      const getStartYear = (period: string) => {
        const match = new RegExp(/(\d{4})/).exec(period);
        return match ? Number.parseInt(match[1]) : 0;
      };
      return getStartYear(b.period) - getStartYear(a.period);
    });
  }, []);

  return (
    <Section id="experience" size="default">
      <SectionHeading>Journey</SectionHeading>
      <p className="mb-6 text-center text-sm text-zinc-600 md:mb-8 md:text-base dark:text-zinc-300">
        My professional experience and educational background
      </p>

      {/* Timeline */}
      <div className="relative px-2 sm:px-4">
        {/* Vertical line */}
        <div className="absolute top-0 bottom-0 left-5 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent sm:left-6 md:left-1/2 dark:from-blue-400/30 dark:via-purple-400/30" />

        {/* Timeline items */}
        <div className="space-y-6 md:space-y-8">
          {allExperiences.map((item, index) => {
            const isWork = item.type === 'work';
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={`${item.type}-${item.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-5 z-10 sm:left-6 md:left-1/2 md:-translate-x-1/2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-3 border-white bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg sm:h-12 sm:w-12 md:h-14 md:w-14 dark:border-slate-950">
                    {isWork ? (
                      <Briefcase className="h-4 w-4 text-white sm:h-5 sm:w-5 md:h-6 md:w-6" />
                    ) : (
                      <GraduationCap className="h-4 w-4 text-white sm:h-5 sm:w-5 md:h-6 md:w-6" />
                    )}
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`ml-16 w-full sm:ml-20 md:ml-0 md:w-[calc(50%-3.5rem)] ${isLeft ? 'md:pr-10 lg:pr-12' : 'md:pl-10 lg:pl-12'}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="glass group overflow-hidden rounded-xl shadow-xl md:rounded-2xl"
                  >
                    {/* Header */}
                    <div className="border-b border-white/10 p-3 sm:p-4 md:p-5 dark:border-white/5">
                      <div className="mb-2 flex items-start gap-2.5 sm:mb-3 sm:gap-3">
                        {/* Logo */}
                        <motion.div
                          whileHover={{ scale: 1.05, rotate: 3 }}
                          transition={{ duration: 0.2 }}
                          className="shrink-0"
                        >
                          <div className="relative h-10 w-10 overflow-hidden rounded-lg border-2 border-white/30 bg-white shadow-md transition-all group-hover:shadow-lg sm:h-12 sm:w-12 md:h-14 md:w-14 md:rounded-xl dark:border-white/20 dark:bg-white/10">
                            <Image
                              src={item.logo ?? '/placeholder-logo.png'}
                              alt={`${item.organization} logo`}
                              fill
                              className="object-contain p-1 sm:p-1.5"
                              sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 56px"
                            />
                          </div>
                        </motion.div>

                        {/* Title & org */}
                        <div className="min-w-0 flex-1">
                          <h3 className="text-sm font-bold text-zinc-900 transition-colors group-hover:text-blue-600 sm:text-base md:text-lg dark:text-white dark:group-hover:text-blue-400">
                            {item.organization}
                          </h3>
                          <p className="mt-0.5 text-xs font-medium text-zinc-600 sm:text-sm dark:text-zinc-300">
                            {item.title}
                          </p>
                        </div>
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-wrap gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          <span className="font-medium">{item.period}</span>
                        </div>
                        {item.location && (
                          <div className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4" />
                            <span>{item.location}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Description & details */}
                    <div className="p-3 sm:p-4 md:p-5">
                      <p className="mb-2 text-xs leading-snug text-zinc-600 sm:mb-3 sm:text-sm sm:leading-relaxed dark:text-zinc-300">
                        {item.description}
                      </p>

                      {/* Responsibilities */}
                      {item.responsibilities && item.responsibilities.length > 0 && (
                        <div className="mb-2 sm:mb-3">
                          <ul className="space-y-1">
                            {item.responsibilities.map((responsibility, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-1.5 text-xs text-zinc-600 sm:text-sm dark:text-zinc-300"
                              >
                                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-blue-500 sm:mt-1.5 sm:h-1.5 sm:w-1.5" />
                                <span>{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Skills */}
                      {item.skills && item.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1 sm:gap-1.5">
                          {item.skills.map(skill => (
                            <Badge
                              key={skill}
                              className="interactive rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-xs font-medium text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      )}

                      {/* Website link */}
                      {item.website && (
                        <div className="surface-divider mt-2 pt-2 sm:mt-3 sm:pt-3">
                          <a
                            href={item.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="interactive inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-700 sm:gap-1.5 dark:text-blue-400 dark:hover:text-blue-300"
                          >
                            Visit Website
                            <svg
                              className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

export default Experience;
