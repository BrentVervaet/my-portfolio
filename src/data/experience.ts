export interface ExperienceItem {
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

export const education: ExperienceItem[] = [
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

export const workExperience: ExperienceItem[] = [
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
