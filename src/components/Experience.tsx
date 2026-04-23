'use client';
import { Section, SectionHeading } from '@/components/Section';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { education, workExperience, type ExperienceItem } from '@/data/experience';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Briefcase, Building, Calendar, GraduationCap, MapPin } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'work'>('education');
  const [prevTab, setPrevTab] = useState<'education' | 'work'>('education');

  const handleTabChange = (value: string) => {
    if (value === 'education' || value === 'work') {
      setPrevTab(activeTab);
      setActiveTab(value);
    }
  };

  const direction = activeTab === 'education' && prevTab === 'work' ? -1 : 1;
  const currentData = activeTab === 'education' ? education : workExperience;

  return (
    <Section id="experience" size="default">
      <SectionHeading>Experience & Education</SectionHeading>
      <Tabs defaultValue="education" className="w-full" onValueChange={handleTabChange}>
        <TabsList className="glass-subtle mb-12 grid h-14 w-full grid-cols-2 items-center justify-center rounded-3xl p-1.5 shadow-2xl">
          <TabsTrigger
            value="education"
            className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-medium whitespace-nowrap interactive focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:glass data-[state=active]:shadow-lg"
          >
            <GraduationCap className="h-4 w-4" />
            <span className={activeTab === 'education' ? 'font-bold' : ''}>Education</span>
          </TabsTrigger>
          <TabsTrigger
            value="work"
            className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-medium whitespace-nowrap interactive focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:glass data-[state=active]:shadow-lg"
          >
            <Briefcase className="h-4 w-4" />
            <span className={activeTab === 'work' ? 'font-bold' : ''}>Work</span>
          </TabsTrigger>
        </TabsList>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ x: 50 * direction, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50 * direction, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <TabsContent value={activeTab} forceMount>
                <div className="content-spacing">
                  {currentData.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="group glass-subtle overflow-hidden shadow-2xl interactive interactive-hover">
                        <CardHeader className="pb-4">
                          <div className="flex items-start gap-4">
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.2 }}
                              className="shrink-0"
                            >
                              <div className="relative h-16 w-16 overflow-hidden rounded-2xl border-2 border-white/30 shadow-lg transition-all group-hover:shadow-xl dark:border-white/20">
                                <Image
                                  src={item.logo ?? '/placeholder-logo.png'}
                                  alt={`${item.organization} logo`}
                                  fill
                                  className="bg-white/5 object-contain dark:bg-black/5"
                                  sizes="64px"
                                />
                              </div>
                            </motion.div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                  <h3 className="text-xl font-bold text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                                    {item.organization}
                                  </h3>
                                  <p className="mt-1 text-base font-medium text-zinc-600 dark:text-zinc-300">
                                    {item.title}
                                  </p>
                                </div>
                                <div className="flex flex-col items-end gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                                  <div className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    <span className="font-medium">{item.period}</span>
                                  </div>
                                  {item.location && (
                                    <div className="flex items-center gap-1">
                                      <MapPin className="h-4 w-4" />
                                      <span>{item.location}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="card-spacing pt-0">
                          <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                            {item.description}
                          </p>

                          {item.responsibilities && item.responsibilities.length > 0 && (
                            <div className="mb-4">
                              <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                                <Building className="h-4 w-4" />
                                Key Responsibilities
                              </h4>
                              <ul className="space-y-2">
                                {item.responsibilities.map((responsibility, idx) => (
                                  <li
                                    key={`${item.id}-resp-${idx}`}
                                    className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-300"
                                  >
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                                    <span>{responsibility}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {item.skills && item.skills.length > 0 && (
                            <div>
                              <h4 className="mb-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                                Technologies & Skills
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {item.skills.map(skill => (
                                  <Badge
                                    key={skill}
                                    className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-800 interactive dark:border-white/10 dark:bg-transparent dark:text-zinc-200"
                                  >
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}

                          {item.website && (
                            <div className="surface-divider mt-4 pt-4">
                              <a
                                href={item.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 interactive hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                              >
                                Visit Website
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </div>
      </Tabs>
    </Section>
  );
};

export default Experience;
