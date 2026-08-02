import type { Localized, TechGroup } from './types';

/** Stack agrupada por camada. */
export const techGroups: TechGroup[] = [
  {
    id: 'languages',
    label: { pt: 'Linguagens', en: 'Languages' },
    items: [
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'JavaScript', slug: 'javascript' },
      { name: 'C#', slug: 'csharp' },
      { name: 'Python', slug: 'python' },
      { name: 'Go', slug: 'go' },
    ],
  },
  {
    id: 'frontend',
    label: { pt: 'Front-end', en: 'Front-end' },
    items: [
      { name: 'React', slug: 'react' },
      { name: 'Next.js', slug: 'nextjs', invertOnDark: true },
      { name: 'Vue.js', slug: 'vuejs' },
      { name: 'Angular', slug: 'angular' },
      { name: 'Vite', slug: 'vite' },
      { name: 'Tailwind CSS', slug: 'tailwindcss' },
    ],
  },
  {
    id: 'backend',
    label: { pt: 'Back-end', en: 'Back-end' },
    items: [
      { name: '.NET', slug: 'dotnetcore' },
      { name: 'Node.js', slug: 'nodejs' },
      { name: 'NestJS', slug: 'nestjs', set: 'lab' },
      { name: 'Express', slug: 'express', invertOnDark: true },
      { name: 'Flask', slug: 'flask', invertOnDark: true },
    ],
  },
  {
    id: 'data',
    label: { pt: 'Bancos de dados', en: 'Databases' },
    items: [
      { name: 'PostgreSQL', slug: 'postgresql' },
      { name: 'MySQL', slug: 'mysql' },
      { name: 'MariaDB', slug: 'mariadb' },
      { name: 'MongoDB', slug: 'mongodb' },
      { name: 'Redis', slug: 'redis' },
    ],
  },
  {
    id: 'ai',
    label: { pt: 'IA & Agentes', en: 'AI & Agents' },
    items: [
      { name: 'LangChain', slug: 'langchain', set: 'lab' },
      { name: 'LangGraph', slug: 'langgraph', set: 'lab' },
      { name: 'CrewAI', slug: 'crewai', set: 'lab' },
    ],
  },
  {
    id: 'infra',
    label: { pt: 'Infra & Cloud', en: 'Infra & Cloud' },
    items: [
      { name: 'Linux', slug: 'linux', set: 'lab' },
      { name: 'Docker', slug: 'docker' },
      { name: 'Git', slug: 'git' },
      { name: 'AWS', slug: 'amazonwebservices', invertOnDark: true },
      { name: 'Cloudflare', slug: 'cloudflare' },
      { name: 'Vercel', slug: 'vercel', set: 'lab', invertOnDark: true },
    ],
  },
];

/** Bibliotecas e práticas sem logo próprio. */
export const alongside: Localized[] = [
  { pt: 'REST APIs', en: 'REST APIs' },
  { pt: 'Domain-Driven Design', en: 'Domain-Driven Design' },
  { pt: 'TanStack Query', en: 'TanStack Query' },
  { pt: 'Zod', en: 'Zod' },
  { pt: 'Axios', en: 'Axios' },
  { pt: 'TCP/IP', en: 'TCP/IP' },
  { pt: 'DNS', en: 'DNS' },
  { pt: 'VPN & WireGuard', en: 'VPN & WireGuard' },
];

/** Base teórica. */
export const foundations: Localized[] = [
  { pt: 'Sistemas distribuídos', en: 'Distributed systems' },
  { pt: 'Estruturas de dados', en: 'Data structures' },
  { pt: 'Engenharia de software', en: 'Software engineering' },
  { pt: 'Análise de sistemas', en: 'Systems analysis' },
  { pt: 'Administração de banco de dados', en: 'Database administration' },
  { pt: 'Projeto e administração de redes', en: 'Network design and administration' },
];

/** Total exibido nas métricas do "sobre". */
export const stackCount = techGroups.reduce((total, group) => total + group.items.length, 0);
