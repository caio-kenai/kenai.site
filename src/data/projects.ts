import type { Project } from './types';

/** Grade, filtros e contagem saem daqui. */
export const projects: Project[] = [];

/** Categorias na ordem em que aparecem. */
export const projectCategories = [...new Set(projects.map((project) => project.category))];
