import type { Project } from './types';

/**
 * Projetos publicados no portfolio.
 *
 * Para adicionar um projeto, basta acrescentar um objeto a esta lista: a
 * secao, os filtros por categoria e a contagem se ajustam sozinhos.
 *
 *   {
 *     id: 'meu-projeto',
 *     name: 'Meu Projeto',
 *     category: 'web',
 *     summary: { pt: 'O que o projeto faz.', en: 'What the project does.' },
 *     goal: { pt: 'Problema que ele resolve.', en: 'Problem it solves.' },
 *     role: { pt: 'Minha responsabilidade.', en: 'My responsibility.' },
 *     tech: ['TypeScript', 'Node.js'],
 *     repo: 'https://github.com/caio-kenai/meu-projeto',
 *     demo: 'https://meu-projeto.kenai.dev',
 *     featured: true,
 *   }
 */
export const projects: Project[] = [];

/** Categorias derivadas dos projetos, na ordem em que aparecem. */
export const projectCategories = [...new Set(projects.map((project) => project.category))];
