'use client';
import { Section, SectionHeading } from '@/components/Section';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Briefcase, Building, Calendar, GraduationCap, MapPin } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  responsibilities?: string[];
  skills?: string[];
  logo?: string;
  website?: string;
  location?: string;
  type: 'education' | 'work';
}

//EDUCATION
const education: ExperienceItem[] = [
  {
    id: 1,
    title: 'Bachelor of Science in Applied Informatics',
    organization: 'HOGENT',
    period: '2022 - Present',
    description:
      'Comprehensive program focusing on web and mobile enterprise development, software engineering principles, and modern development practices.',
    location: 'Ghent, Belgium',
    logo: '/images/home/experience/hogent.webp',
    website: 'https://www.hogent.be/opleidingen/bachelors/toegepaste-informatica/',
    type: 'education',
  },
  {
    id: 2,
    title: 'ASO Modern Languages and Sciences',
    organization: 'Sint-Lodewijkscollege',
    period: '2012 - 2018',
    description:
      'Secondary education with a focus on modern languages, mathematics, and sciences, providing a strong foundation for higher education.',
    location: 'Bruges, Belgium',
    logo: '/images/home/experience/stlod.webp',
    website: 'https://www.sintlodewijkscollege.be/',
    type: 'education',
  },
];

//WORK
const workExperience: ExperienceItem[] = [
  {
    id: 1,
    title: 'Software Development Intern',
    organization: 'Endoo',
    period: '2026 - Present',
    description:
      'Developing custom modules for the Odoo platform, working with Python backend development and business process automation.',
    responsibilities: [
      'Building custom Odoo modules for business process automation',
      'Implementing Python-based backend solutions',
      'Collaborating with cross-functional teams on software development projects',
      'Learning enterprise software development best practices',
    ],
    skills: ['Python', 'Odoo', 'PostgreSQL', 'Git'],
    location: 'Ghent, Belgium',
    logo: '/images/home/experience/endoo.webp',
    website: 'https://www.endoo.com',
    type: 'work',
  },
];

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
        <TabsList className="mb-12 grid h-14 w-full grid-cols-2 items-center justify-center rounded-3xl border border-white/20 bg-white/10 p-1.5 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-black/10">
          <TabsTrigger
            value="education"
            className="ring-offset-background data-[state=active]:text-foreground inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-medium whitespace-nowrap transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white/20 data-[state=active]:shadow-lg data-[state=active]:backdrop-blur-lg dark:data-[state=active]:bg-white/10"
          >
            <GraduationCap className="h-4 w-4" />
            <span className={activeTab === 'education' ? 'font-bold' : ''}>Education</span>
          </TabsTrigger>
          <TabsTrigger
            value="work"
            className="ring-offset-background data-[state=active]:text-foreground inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-medium whitespace-nowrap transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white/20 data-[state=active]:shadow-lg data-[state=active]:backdrop-blur-lg dark:data-[state=active]:bg-white/10"
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
                <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
                  {currentData.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="group glass-subtle hover:shadow-3xl overflow-hidden border border-white/20 shadow-2xl transition-all duration-300 hover:scale-[1.02] dark:border-white/10">
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
                        <CardContent className="pt-0">
                          <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                            {item.description}
                          </p>

                          {item.responsibilities && item.responsibilities.length > 0 && (
                            <div className="mb-4">
                              <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                                <Building className="h-4 w-4" />
                                Key Responsibilities
                              </h4>
                              <ul className="space-y-1">
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
                                    className="rounded-full border border-zinc-200/50 bg-zinc-100/80 px-3 py-1 text-xs font-medium text-zinc-800 transition-all duration-200 hover:bg-zinc-200/90 dark:border-zinc-700/50 dark:bg-zinc-800/80 dark:text-zinc-200 dark:hover:bg-zinc-700/90"
                                  >
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}

                          {item.website && (
                            <div className="mt-4 border-t border-white/10 pt-4">
                              <a
                                href={item.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
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
