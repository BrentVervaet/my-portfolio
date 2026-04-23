'use client';
import { Section, SectionHeading } from '@/components/Section';
import { scaleOnHoverLarge } from '@/lib/animations';
import { skills as defaultSkills, type Skill } from '@/data/skills';
import { motion } from 'framer-motion';
import React from 'react';

interface SkillsProps {
  skills?: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills = defaultSkills }) => {
  return (
    <Section id="skills" size="default">
      <SectionHeading id="skills-section">Skills & Technologies</SectionHeading>
      <div
        aria-label={'region'}
        aria-labelledby="skills-section"
        className="glass-subtle overflow-hidden rounded-3xl shadow-2xl"
      >
        <div className="card-spacing grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6 md:gap-8 lg:grid-cols-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.a
                {...scaleOnHoverLarge}
                key={`${skill.name}-${index}`}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center rounded-2xl p-4 interactive focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent focus:outline-none hover:bg-white/10 dark:hover:bg-white/5"
                title={`Learn more about ${skill.name}`}
                aria-label={`Learn more about ${skill.name} - opens in new tab`}
              >
                <div key={`icon-${skill.name}`} className="mb-3 glass-subtle rounded-xl p-4 text-4xl shadow-lg interactive md:text-5xl group-hover:shadow-xl">
                  <Icon key={skill.name} aria-hidden="true" />
                </div>
                <span className="text-center text-sm font-medium text-zinc-700 group-hover:text-zinc-900 dark:text-zinc-300 dark:group-hover:text-zinc-100">
                  {skill.name}
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
