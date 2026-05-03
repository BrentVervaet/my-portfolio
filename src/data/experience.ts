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
    period: '2022 - 2026',
    description:
      'Comprehensive program focusing on web and mobile enterprise development, software engineering principles, and modern development practices.',
    location: 'Ghent, Belgium',
    logo: '/images/home/experience/hogent.webp',
    website: 'https://www.hogent.be/opleidingen/bachelors/toegepaste-informatica/',
    type: 'education',
  },
];

export const workExperience: ExperienceItem[] = [
  {
    id: 1,
    title: 'Software Development Intern',
    organization: 'Endoo',
    period: '2026 - Present',
    description: 'Developing a custom module for the Odoo platform.',
    responsibilities: [
      'Building custom Odoo modules for business process automation',
      'Learning enterprise software development best practices',
    ],
    skills: ['Python', 'Odoo'],
    location: 'Ghent, Belgium',
    logo: '/images/home/experience/endoo.webp',
    website: 'https://www.endoo.be',
    type: 'work',
  },
];
