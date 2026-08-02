import { alongside, foundations, techGroups } from '../data/stack';
import type { Tech, TechGroup } from '../data/types';
import { esc, loc, lt, t, tx } from '../lib/dom';
import { logo } from '../lib/logo';

function renderTile(tech: Tech): string {
  return `
    <li class="tech">
      ${logo({
        name: tech.name,
        slug: tech.slug,
        set: tech.set,
        ext: tech.ext,
        invertOnDark: tech.invertOnDark,
      })}
      <span class="tech__name">${esc(tech.name)}</span>
    </li>
  `;
}

function renderGroup(group: TechGroup, index: number): string {
  return `
    <section class="tech-group reveal" style="--reveal-delay: ${index * 50}ms">
      <h3 class="tech-group__title">
        <span class="tech-group__index" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>
        <span ${loc(group.label)}>${lt(group.label)}</span>
      </h3>
      <ul class="tech-grid">${group.items.map(renderTile).join('')}</ul>
    </section>
  `;
}

function renderChips(items: typeof alongside): string {
  return items.map((item) => `<li class="chip" ${loc(item)}>${lt(item)}</li>`).join('');
}

export function renderStack(): string {
  return `
    <section class="section" id="stack">
      <div class="shell">
        <p class="section-label reveal">
          <span><span class="section-label__index">02</span> / <span ${tx('stack.label')}>${t('stack.label')}</span></span>
        </p>

        <h2 class="section-title reveal" ${tx('stack.title')}>${t('stack.title')}</h2>
        <p class="section-desc reveal" ${tx('stack.desc')}>${t('stack.desc')}</p>

        <div class="tech-groups">${techGroups.map(renderGroup).join('')}</div>

        <div class="stack__extras">
          <div class="stack__extra reveal">
            <h3 class="stack__extra-title" ${tx('stack.alongside')}>${t('stack.alongside')}</h3>
            <ul class="stack__extra-list">${renderChips(alongside)}</ul>
          </div>

          <div class="stack__extra reveal">
            <h3 class="stack__extra-title" ${tx('stack.foundations')}>${t('stack.foundations')}</h3>
            <ul class="stack__extra-list">${renderChips(foundations)}</ul>
          </div>
        </div>
      </div>
    </section>
  `;
}
