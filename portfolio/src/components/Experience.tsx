'use client';
import { Section, SectionHeading } from '@/components/Section';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

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
  projectLink?: {
    url: string;
    name: string;
  };
}

//EDUCATION
const education: ExperienceItem[] = [
  // Your existing education data
  {
    id: 1,
    title: 'Bachelor of Science in Applied Informatics',
    organization: 'HOGENT',
    period: '2022 - Present',
    description: 'Focus on web and mobile enterprise development.',
    logo: '/images/home/experience/hogent.webp',
    website: 'https://www.hogent.be/opleidingen/bachelors/toegepaste-informatica/',
  },
  {
    id: 4,
    title: 'ASO modern languages and sciences',
    organization: 'Sint-Lodewijkscollege',
    period: '2012 - 2018',
    description: '',
    logo: '/images/home/experience/stlod.webp',
    website: 'https://www.sintlodewijkscollege.be/',
  },
];

//WORK
const workExperience: ExperienceItem[] = [
  // Your existing work experience data
  {
    id: 1,
    title: 'Software Development Intern',
    organization: 'Endoo',
    period: 'Now',
    description: 'Software Development Internship',
    responsibilities: ['Making a custom module for the Odoo platform'],
    skills: ['Python', 'Odoo'],
    logo: '/images/home/experience/endoo.webp',
    website: 'https://www.endoo.com',
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

  return (
    <Section id="experience" size="default">
      <SectionHeading>Experience</SectionHeading>
      <Tabs defaultValue="education" className="w-full" onValueChange={handleTabChange}>
        {/* Glass-style TabsList */}
        <TabsList className="mb-8 grid h-12 w-full grid-cols-2 items-center justify-center rounded-3xl border border-white/20 bg-white/10 p-1 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-black/10">
          {/*education*/}
          <TabsTrigger
            value="education"
            className="ring-offset-background data-[state=active]:text-foreground inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium whitespace-nowrap transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white/20 data-[state=active]:shadow-lg data-[state=active]:backdrop-blur-lg dark:data-[state=active]:bg-white/10"
          >
            <span className={activeTab === 'education' ? 'font-bold' : ''}>Education</span>
          </TabsTrigger>

          {/*work*/}
          <TabsTrigger
            value="work"
            className="ring-offset-background data-[state=active]:text-foreground inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium whitespace-nowrap transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white/20 data-[state=active]:shadow-lg data-[state=active]:backdrop-blur-lg dark:data-[state=active]:bg-white/10"
          >
            <span className={activeTab === 'work' ? 'font-bold' : ''}>Work</span>
          </TabsTrigger>
        </TabsList>

        <div className="relative min-h-96">
          {' '}
          {/* Set min-height to avoid jump on switch */}
          <AnimatePresence mode="wait">
            {activeTab === 'education' && (
              <motion.div
                key="education"
                initial={{ x: 100 * direction, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100 * direction, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <TabsContent value="education" forceMount>
                  <div key="education" className="mt-2">
                    <div className="glass-subtle overflow-hidden rounded-3xl border border-white/20 shadow-2xl dark:border-white/10">
                      <div className="p-8">
                        <ul className="ml-10 border-l-2 border-white/20 dark:border-white/10">
                          {education.map(item => (
                            <li key={item.id} className="relative ml-10 py-6 transition-all">
                              <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                target="_blank"
                                className="absolute top-6 -left-20 flex items-center justify-center rounded-full"
                                href={item.website}
                              >
                                <span className="relative flex size-16 shrink-0 overflow-hidden rounded-full border-2 border-white/30 shadow-lg transition-all hover:shadow-xl">
                                  <Image
                                    className="bg-background aspect-square h-full w-full object-contain"
                                    alt={`${item.organization} logo`}
                                    src={item.logo ?? '/placeholder-logo.png'}
                                    width={64}
                                    height={64}
                                    sizes="64px"
                                  />
                                </span>
                              </motion.a>
                              <div className="flex flex-1 flex-col justify-start gap-2 pr-8">
                                <time className="text-muted-foreground text-sm font-medium">
                                  <span>{item.period.split(' - ')[0]}</span>
                                  <span> - </span>
                                  <span>{item.period.split(' - ')[1]}</span>
                                </time>
                                <h2 className="text-xl leading-none font-bold">{item.organization}</h2>
                                <p className="text-muted-foreground text-base font-medium">{item.title}</p>
                                <p className="prose dark:prose-invert text-sm leading-relaxed">{item.description}</p>
                              </div>

                              {item.skills && item.skills.length > 0 && (
                                <div className="mt-4 flex flex-row flex-wrap items-start gap-2">
                                  {item.skills.map(skill => (
                                    <Badge
                                      key={skill}
                                      className="bg-primary/80 text-primary-foreground hover:bg-primary/70 items-center rounded-full border border-white/20 px-4 py-1 text-sm font-semibold shadow-sm backdrop-blur-md transition-colors"
                                    >
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </motion.div>
            )}

            {/* Work Experience */}
            {activeTab === 'work' && (
              <motion.div
                key="work"
                initial={{ x: 100 * direction, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100 * direction, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                {/*Content*/}
                <TabsContent value="work" forceMount>
                  <div className="glass-subtle overflow-hidden rounded-3xl border border-white/20 shadow-2xl dark:border-white/10">
                    <div className="p-8">
                      <ul className="ml-10 border-l-2 border-white/20 dark:border-white/10">
                        {workExperience.map(item => (
                          <li key={item.id} className="relative ml-10 py-6 transition-all">
                            <motion.a
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              target="_blank"
                              className="absolute top-6 -left-20 flex items-center justify-center rounded-full"
                              href={item.website}
                            >
                              <span className="relative flex size-16 shrink-0 overflow-hidden rounded-full border-2 border-white/30 shadow-lg transition-all hover:shadow-xl">
                                <Image
                                  className="bg-background aspect-square h-full w-full object-contain"
                                  alt={`${item.organization} logo`}
                                  src={item.logo ?? '/placeholder-logo.png'}
                                  width={64}
                                  height={64}
                                  sizes="64px"
                                />
                              </span>
                            </motion.a>
                            <div className="flex flex-1 flex-col justify-start gap-2 pr-8">
                              <time className="text-muted-foreground text-sm font-medium">
                                <span>{item.period.split(' - ')[0]}</span>
                                <span> - </span>
                                <span>{item.period.split(' - ')[1]}</span>
                              </time>
                              <h2 className="text-xl leading-none font-bold">{item.organization}</h2>
                              <p className="text-muted-foreground text-base font-medium">{item.title}</p>
                              <ul className="ml-4 list-outside list-disc text-sm leading-relaxed">
                                {item.responsibilities?.map((responsibility, idx) => (
                                  <li key={`${item.id}-resp-${idx}`} className="prose dark:prose-invert pr-8 text-sm">
                                    {responsibility}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            {item.skills && item.skills.length > 0 && (
                              <div className="mt-4 mr-8 flex flex-row flex-wrap items-start gap-2">
                                {item.skills.map(skill => (
                                  <Badge
                                    key={skill}
                                    className="bg-primary/80 text-primary-foreground hover:bg-primary/70 items-center rounded-full border border-white/20 px-4 py-1 text-sm font-semibold shadow-sm backdrop-blur-md transition-colors"
                                  >
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Tabs>
    </Section>
  );
};

export default Experience;
