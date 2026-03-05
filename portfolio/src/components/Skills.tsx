'use client';
import { Section, SectionHeading } from '@/components/Section';
import { motion } from 'framer-motion';
import React from 'react';
import { FaJava } from 'react-icons/fa';
import {
  SiCss,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiMongodb,
  SiMysql,
  SiNeo4J,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSpring,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ReactNode;
  url: string;
}

interface SkillsProps {
  skills?: Skill[];
}

// test ssh key acc

const defaultSkills: Skill[] = [
  // Frontend Web Technologies
  { name: 'HTML', icon: <SiHtml5 />, url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS', icon: <SiCss />, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'JavaScript', icon: <SiJavascript />, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'TypeScript', icon: <SiTypescript />, url: 'https://www.typescriptlang.org/' },
  { name: 'React', icon: <SiReact />, url: 'https://reactjs.org/' },
  { name: 'Next.js', icon: <SiNextdotjs />, url: 'https://nextjs.org/' },
  { name: 'Vue', icon: <SiVuedotjs />, url: 'https://vuejs.org/' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, url: 'https://tailwindcss.com/' },

  // Backend/Server Technologies
  { name: 'Node.js', icon: <SiNodedotjs />, url: 'https://nodejs.org/' },
  { name: 'Java', icon: <FaJava />, url: 'https://www.java.com/' },
  { name: 'Spring', icon: <SiSpring />, url: 'https://spring.io/' },
  { name: 'Python', icon: <SiPython />, url: 'https://www.python.org/' },

  // Databases
  { name: 'MySQL', icon: <SiMysql />, url: 'https://www.mysql.com/' },
  { name: 'MongoDB', icon: <SiMongodb />, url: 'https://www.mongodb.com/' },
  { name: 'Neo4j', icon: <SiNeo4J />, url: 'https://neo4j.com/' },

  // Mobile Development
  { name: 'Swift', icon: <SiSwift />, url: 'https://developer.apple.com/swift/' },

  // Development Tools
  { name: 'Git', icon: <SiGit />, url: 'https://git-scm.com/' },
  { name: 'Jira', icon: <SiJira />, url: 'https://www.atlassian.com/software/jira' },
];

const Skills: React.FC<SkillsProps> = ({ skills = defaultSkills }) => {
  return (
    <Section id="skills" size="default">
      <SectionHeading id="skills-section">Skills</SectionHeading>
      <div aria-label={'region'} aria-labelledby="skills-section" className="glass overflow-hidden rounded-2xl">
        <div className="grid grid-cols-3 gap-8 p-6 sm:grid-cols-4 md:grid-cols-6">
          {skills.map(skill => (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              key={skill.name}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent focus:outline-none"
              title={`Learn more about ${skill.name}`}
              aria-label={`Learn more about ${skill.name} - opens in new tab`}
            >
              <div className="rounded-full border border-white/10 bg-white/5 p-3 text-3xl shadow-sm backdrop-blur-sm transition-all hover:bg-white/10 hover:shadow-md md:text-4xl">
                <span aria-hidden="true">{skill.icon}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
