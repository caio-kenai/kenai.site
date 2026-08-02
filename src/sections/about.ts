import { interests } from '../data/i18n';
import { selfHostedCount } from '../data/homelab';
import { sprites } from '../data/sprites';
import { stackCount } from '../data/stack';
import { esc, t, tx } from '../lib/dom';
import { sprite } from '../lib/sprite';
import { getLang, onLangChange } from '../lib/state';
import type { StringKey } from '../data/i18n';

/** Métricas derivadas dos dados do site. */
const stats: { value: string; key: StringKey }[] = [
  { value: '2021', key: 'about.stats.since' },
  { value: String(selfHostedCount), key: 'about.stats.services' },
  { value: String(stackCount), key: 'about.stats.stack' },
  { value: 'PT / EN', key: 'about.stats.langs' },
];

function renderInterests(): string {
  return interests[getLang()].map((item) => `<li class="chip">${esc(item)}</li>`).join('');
}

export function renderAbout(): string {
  return `
    <section class="section section--alt" id="sobre">
      <div class="shell">
        <p class="section-label reveal">
          <span><span class="section-label__index">01</span> / <span ${tx('about.label')}>${t('about.label')}</span></span>
        </p>

        <h2 class="section-title reveal" ${tx('about.title')}>${t('about.title')}</h2>

        <div class="about">
          <div class="about__text reveal">
            <p ${tx('about.p1')}>${t('about.p1')}</p>
            <p ${tx('about.p2')}>${t('about.p2')}</p>
            <p ${tx('about.p3')}>${t('about.p3')}</p>
            <p ${tx('about.p4')}>${t('about.p4')}</p>

            <div class="about__interests">
              <p class="about__interests-label" ${tx('about.interests')}>${t('about.interests')}</p>
              <ul class="about__interests-list js-interests">${renderInterests()}</ul>
            </div>
          </div>

          <div class="about__aside">
            <div class="about__companion reveal">
              ${sprite(sprites.absol, { height: '9rem' })}
            </div>

            <dl class="about__stats reveal">
              ${stats
                .map(
                  (stat, index) => `
                <div class="about__stat" style="--reveal-delay: ${index * 60}ms">
                  <dt class="about__stat-label" ${tx(stat.key)}>${t(stat.key)}</dt>
                  <dd class="about__stat-value">${esc(stat.value)}</dd>
                </div>`,
                )
                .join('')}
            </dl>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initAbout(): void {
  onLangChange(() => {
    const list = document.querySelector('.js-interests');
    if (list) list.innerHTML = renderInterests();
  });
}
