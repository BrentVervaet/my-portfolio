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
        className="glass-subtle overflow-hidden rounded-3xl border border-white/20 shadow-2xl dark:border-white/10"
      >
        <div className="grid grid-cols-3 gap-8 p-8 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {skills.map(skill => (
            <motion.a
              {...scaleOnHoverLarge}
              key={skill.name}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center rounded-2xl p-4 transition-all duration-200 hover:bg-white/10 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent focus:outline-none dark:hover:bg-white/5"
              title={`Learn more about ${skill.name}`}
              aria-label={`Learn more about ${skill.name} - opens in new tab`}
            >
              <div className="mb-3 rounded-xl border border-white/20 bg-white/10 p-4 text-4xl shadow-lg backdrop-blur-sm transition-all duration-200 group-hover:border-white/30 group-hover:bg-white/20 group-hover:shadow-xl md:text-5xl dark:border-white/10 dark:bg-black/10 dark:group-hover:bg-black/20">
                <span aria-hidden="true">{skill.icon}</span>
              </div>
              <span className="text-center text-sm font-medium text-zinc-700 group-hover:text-zinc-900 dark:text-zinc-300 dark:group-hover:text-zinc-100">
                {skill.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
