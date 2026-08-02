import { projectCategories, projects } from '../data/projects';
import type { Project } from '../data/types';
import { profile } from '../data/profile';
import { icons } from '../lib/icons';
import { esc, loc, lt, qs, qsa, t, tx } from '../lib/dom';

function renderDetail(labelKey: 'projects.goal' | 'projects.role', value: Project['goal']): string {
  if (!value) return '';
  return `
    <div class="proj__detail">
      <dt ${tx(labelKey)}>${t(labelKey)}</dt>
      <dd ${loc(value)}>${lt(value)}</dd>
    </div>
  `;
}

function renderCard(project: Project, index: number): string {
  const links = [
    project.repo
      ? `<a class="proj__link" href="${esc(project.repo)}" target="_blank" rel="noopener noreferrer">
           <span ${tx('projects.repo')}>${t('projects.repo')}</span>
           <span aria-hidden="true">${icons.arrow}</span>
         </a>`
      : '',
    project.demo
      ? `<a class="proj__link" href="${esc(project.demo)}" target="_blank" rel="noopener noreferrer">
           <span ${tx('projects.demo')}>${t('projects.demo')}</span>
           <span aria-hidden="true">${icons.external}</span>
         </a>`
      : '',
  ].join('');

  const details = `${renderDetail('projects.goal', project.goal)}${renderDetail('projects.role', project.role)}`;

  return `
    <li class="proj__card reveal" data-category="${esc(project.category)}" style="--reveal-delay: ${index * 50}ms">
      <div class="proj__top">
        <h3 class="proj__name">${esc(project.name)}</h3>
        <span class="proj__category">${esc(project.category)}</span>
      </div>

      <p class="proj__summary" ${loc(project.summary)}>${lt(project.summary)}</p>

      ${details ? `<dl class="proj__details">${details}</dl>` : ''}

      <ul class="proj__tech">
        ${project.tech.map((tech) => `<li>${esc(tech)}</li>`).join('')}
      </ul>

      ${links ? `<div class="proj__links">${links}</div>` : ''}
    </li>
  `;
}

function renderFilters(): string {
  if (projectCategories.length < 2) return '';

  const chips = [
    `<button class="proj__filter is-active" type="button" data-filter="all" ${tx('projects.filter.all')}>${t('projects.filter.all')}</button>`,
    ...projectCategories.map(
      (category) =>
        `<button class="proj__filter" type="button" data-filter="${esc(category)}">${esc(category)}</button>`,
    ),
  ].join('');

  return `<div class="proj__filters reveal">${chips}</div>`;
}

function renderEmptyState(): string {
  return `
    <div class="proj__empty reveal">
      <div class="proj__empty-stage" aria-hidden="true">
        <img
          class="proj__empty-sprite"
          src="/sprites/zero.gif"
          width="129"
          height="150"
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>
      <h3 class="proj__empty-title" ${tx('projects.empty.title')}>${t('projects.empty.title')}</h3>
      <p class="proj__empty-text" ${tx('projects.empty.text')}>${t('projects.empty.text')}</p>
      <a class="btn" href="${profile.links.github}" target="_blank" rel="noopener noreferrer">
        <span aria-hidden="true">${icons.github}</span>
        <span ${tx('projects.empty.cta')}>${t('projects.empty.cta')}</span>
      </a>
    </div>
  `;
}

export function renderProjects(): string {
  const body =
    projects.length === 0
      ? renderEmptyState()
      : `${renderFilters()}<ul class="proj__grid">${projects.map(renderCard).join('')}</ul>`;

  return `
    <section class="section proj" id="projetos">
      <div class="shell">
        <p class="section-label reveal">
          <span><span class="section-label__index">04</span> / <span ${tx('projects.label')}>${t('projects.label')}</span></span>
        </p>

        <h2 class="section-title reveal" ${tx('projects.title')}>${t('projects.title')}</h2>
        <p class="section-desc reveal" ${tx('projects.desc')}>${t('projects.desc')}</p>

        ${body}
      </div>
    </section>
  `;
}

export function initProjects(): void {
  const filters = qsa<HTMLButtonElement>('.proj__filter');
  if (filters.length === 0) return;

  const cards = qsa('.proj__card');
  const grid = qs('.proj__grid');

  filters.forEach((filter) => {
    filter.addEventListener('click', () => {
      const value = filter.dataset.filter ?? 'all';

      filters.forEach((other) => other.classList.toggle('is-active', other === filter));

      let visible = 0;
      cards.forEach((card) => {
        const match = value === 'all' || card.dataset.category === value;
        card.hidden = !match;
        if (match) visible += 1;
      });

      grid?.setAttribute('data-visible', String(visible));
    });
  });
}
