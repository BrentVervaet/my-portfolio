import { FaJava } from 'react-icons/fa';
import {
  SiCss,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNeo4J,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSpring,
  SiSwift,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si';

export interface Skill {
  name: string;
  icon: React.ReactNode;
  url: string;
}

export const skills: Skill[] = [
  // Frontend Web Technologies
  { name: 'HTML', icon: <SiHtml5 />, url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS', icon: <SiCss />, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'JavaScript', icon: <SiJavascript />, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'TypeScript', icon: <SiTypescript />, url: 'https://www.typescriptlang.org/' },
  { name: 'React', icon: <SiReact />, url: 'https://reactjs.org/' },
  { name: 'Next.js', icon: <SiNextdotjs />, url: 'https://nextjs.org/' },
  { name: 'Vue', icon: <SiVuedotjs />, url: 'https://vuejs.org/' },

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
];
