import type { StackGroup } from './types';

/**
 * Stack real, agrupada por camada. O status distingue o que ja uso do que
 * estou estudando no momento — nao ha escala de "dominio" inventada.
 */
export const stackGroups: StackGroup[] = [
  {
    id: 'languages',
    label: { pt: 'Linguagens', en: 'Languages' },
    items: [
      { name: 'JavaScript', status: 'using' },
      { name: 'TypeScript', status: 'using' },
      { name: 'Python', status: 'using' },
      { name: 'C#', status: 'using' },
      { name: 'Go', status: 'learning' },
      { name: 'SQL', status: 'using' },
    ],
  },
  {
    id: 'frontend',
    label: { pt: 'Front-end', en: 'Front-end' },
    items: [
      { name: 'React', status: 'using' },
      { name: 'Next.js', status: 'using' },
      { name: 'Vue.js', status: 'using' },
      { name: 'Angular', status: 'using' },
      { name: 'Vite', status: 'using' },
      { name: 'TanStack Query', status: 'using' },
      { name: 'Zod', status: 'using' },
      { name: 'Tailwind CSS', status: 'using' },
      { name: 'HTML', status: 'using' },
      { name: 'CSS', status: 'using' },
    ],
  },
  {
    id: 'backend',
    label: { pt: 'Back-end', en: 'Back-end' },
    items: [
      { name: 'Node.js', status: 'using' },
      { name: 'Express', status: 'using' },
      { name: 'Flask', status: 'using' },
      { name: 'Django', status: 'using' },
      { name: '.NET', status: 'using' },
      { name: 'ASP.NET', status: 'using' },
      { name: 'REST APIs', status: 'using' },
      { name: 'Axios', status: 'using' },
    ],
  },
  {
    id: 'data',
    label: { pt: 'Dados', en: 'Data' },
    items: [
      { name: 'PostgreSQL', status: 'using' },
      { name: 'MySQL', status: 'using' },
      { name: 'MariaDB', status: 'using' },
      { name: 'SQLite', status: 'using' },
      { name: 'ChromaDB', status: 'using' },
    ],
  },
  {
    id: 'ai',
    label: { pt: 'IA & Agentes', en: 'AI & Agents' },
    items: [
      { name: 'RAG', status: 'using' },
      { name: 'LangChain', status: 'using' },
      { name: 'LangGraph', status: 'using' },
      { name: 'CrewAI', status: 'using' },
      { name: 'ADK', status: 'learning' },
    ],
  },
  {
    id: 'infra',
    label: { pt: 'Infra & Redes', en: 'Infra & Networking' },
    items: [
      { name: 'Linux', status: 'using' },
      { name: 'Docker', status: 'using' },
      { name: 'Git', status: 'using' },
      { name: 'AWS', status: 'using' },
      { name: 'TCP/IP', status: 'using' },
      { name: 'DNS', status: 'using' },
      { name: 'Firewall', status: 'using' },
      { name: 'VPN', status: 'using' },
      { name: 'WireGuard', status: 'using' },
    ],
  },
];

/**
 * Conceitos que sustentam a stack — estudados na formacao e aplicados na
 * pratica, mas que nao sao "ferramentas" e por isso ficam fora da grade.
 */
export const foundations: { pt: string; en: string }[] = [
  { pt: 'Sistemas distribuídos', en: 'Distributed systems' },
  { pt: 'Estruturas de dados', en: 'Data structures' },
  { pt: 'Engenharia de software', en: 'Software engineering' },
  { pt: 'Domain-Driven Design', en: 'Domain-Driven Design' },
  { pt: 'Análise de sistemas', en: 'Systems analysis' },
  { pt: 'Administração de banco de dados', en: 'Database administration' },
  { pt: 'Projeto de redes de computadores', en: 'Computer network design' },
  { pt: 'Administração de redes', en: 'Network administration' },
];

/** Total de tecnologias listadas — usado nas metricas da secao "sobre". */
export const stackCount = stackGroups.reduce((total, group) => total + group.items.length, 0);
