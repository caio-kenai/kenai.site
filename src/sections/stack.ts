import { foundations, stackGroups } from '../data/stack';
import { esc, loc, lt, t, tx } from '../lib/dom';

function renderGroup(group: (typeof stackGroups)[number], index: number): string {
  const items = group.items
    .map(
      (item) =>
        `<li class="stack__item stack__item--${item.status}">
          <span class="stack__marker" aria-hidden="true"></span>
          <span class="stack__name">${esc(item.name)}</span>
        </li>`,
    )
    .join('');

  return `
    <article class="stack__group reveal" style="--reveal-delay: ${index * 50}ms">
      <h3 class="stack__group-title">
        <span class="stack__group-index" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>
        <span ${loc(group.label)}>${lt(group.label)}</span>
      </h3>
      <ul class="stack__items">${items}</ul>
    </article>
  `;
}

export function renderStack(): string {
  return `
    <section class="section" id="stack">
      <div class="shell">
        <p class="section-label reveal">
          <span><span class="section-label__index">02</span> / <span ${tx('stack.label')}>${t('stack.label')}</span></span>
          <span class="stack__legend">
            <span class="stack__legend-item stack__legend-item--using">
              <span class="stack__marker" aria-hidden="true"></span>
              <span ${tx('stack.legend.using')}>${t('stack.legend.using')}</span>
            </span>
            <span class="stack__legend-item stack__legend-item--learning">
              <span class="stack__marker" aria-hidden="true"></span>
              <span ${tx('stack.legend.learning')}>${t('stack.legend.learning')}</span>
            </span>
          </span>
        </p>

        <h2 class="section-title reveal" ${tx('stack.title')}>${t('stack.title')}</h2>
        <p class="section-desc reveal" ${tx('stack.desc')}>${t('stack.desc')}</p>

        <div class="stack__grid">
          ${stackGroups.map(renderGroup).join('')}
        </div>

        <div class="stack__foundations reveal">
          <h3 class="stack__foundations-title" ${tx('stack.foundations')}>${t('stack.foundations')}</h3>
          <ul class="stack__foundations-list">
            ${foundations
              .map((item) => `<li class="chip" ${loc(item)}>${lt(item)}</li>`)
              .join('')}
          </ul>
        </div>
      </div>
    </section>
  `;
}
