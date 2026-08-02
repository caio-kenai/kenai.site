import { dailyDrivers, selfHosted } from '../data/homelab';
import type { HomelabEntry } from '../data/types';
import { icons } from '../lib/icons';
import { esc, loc, lt, t, tx } from '../lib/dom';
import { logo } from '../lib/logo';

function renderEntry(entry: HomelabEntry, index: number): string {
  return `
    <li class="lab__card reveal" style="--reveal-delay: ${index * 45}ms">
      <a class="lab__link" href="${esc(entry.url)}" target="_blank" rel="noopener noreferrer">
        <span class="lab__logo">${logo({
          name: entry.name,
          slug: entry.slug,
          set: 'lab',
          ext: entry.ext,
          invertOnDark: entry.invertOnDark,
          size: 32,
        })}</span>
        <span class="lab__domain" ${loc(entry.domain)}>${lt(entry.domain)}</span>
        <h4 class="lab__name">${esc(entry.name)}</h4>
        <p class="lab__role" ${loc(entry.role)}>${lt(entry.role)}</p>
        <span class="lab__external" aria-hidden="true">${icons.external}</span>
      </a>
    </li>
  `;
}

export function renderHomelab(): string {
  return `
    <section class="section section--alt lab" id="homelab">
      <div class="shell">
        <p class="section-label reveal">
          <span><span class="section-label__index">03</span> / <span ${tx('homelab.label')}>${t('homelab.label')}</span></span>
        </p>

        <h2 class="section-title reveal" ${tx('homelab.title')}>${t('homelab.title')}</h2>
        <p class="section-desc reveal" ${tx('homelab.desc')}>${t('homelab.desc')}</p>

        <div class="lab__block">
          <h3 class="lab__block-title reveal">
            <span class="lab__block-icon" aria-hidden="true">${icons.server}</span>
            <span ${tx('homelab.hosted')}>${t('homelab.hosted')}</span>
          </h3>
          <ul class="lab__grid">${selfHosted.map(renderEntry).join('')}</ul>
        </div>

        <div class="lab__block">
          <h3 class="lab__block-title reveal">
            <span class="lab__block-icon" aria-hidden="true">${icons.terminal}</span>
            <span ${tx('homelab.daily')}>${t('homelab.daily')}</span>
          </h3>
          <ul class="lab__grid lab__grid--compact">${dailyDrivers.map(renderEntry).join('')}</ul>
        </div>

        <p class="lab__note reveal">
          <span class="lab__note-mark" aria-hidden="true">//</span>
          <span ${tx('homelab.note')}>${t('homelab.note')}</span>
        </p>
      </div>
    </section>
  `;
}
