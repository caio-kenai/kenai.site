import { journey } from '../data/journey';
import type { JourneyEntry } from '../data/types';
import { icons } from '../lib/icons';
import { esc, loc, lt, t, tx } from '../lib/dom';

function renderEntry(entry: JourneyEntry, index: number): string {
  const kindKey = entry.kind === 'work' ? ('journey.work' as const) : ('journey.education' as const);
  const icon = entry.kind === 'work' ? icons.briefcase : icons.cap;

  const tags = entry.tags?.length
    ? `<ul class="jrn__tags">${entry.tags.map((tag) => `<li>${esc(tag)}</li>`).join('')}</ul>`
    : '';

  const location = entry.location
    ? `<p class="jrn__location" ${loc(entry.location)}>${lt(entry.location)}</p>`
    : '';

  // Em algo em curso a etiqueta ja comunica o periodo; exibir os dois lado a
  // lado repetiria a mesma palavra. Um curso esta "em andamento", um cargo
  // esta "atual" — a etiqueta muda conforme o tipo de entrada.
  const ongoingKey = entry.kind === 'education' ? ('journey.ongoing' as const) : ('journey.current' as const);
  const timing = entry.current
    ? `<span class="jrn__badge">
         <span class="dot dot--pulse" aria-hidden="true"></span>
         <span ${tx(ongoingKey)}>${t(ongoingKey)}</span>
       </span>`
    : `<span class="jrn__period" ${loc(entry.period)}>${lt(entry.period)}</span>`;

  return `
    <li class="jrn__entry reveal" style="--reveal-delay: ${index * 70}ms">
      <div class="jrn__marker" aria-hidden="true">
        <span class="jrn__icon">${icon}</span>
      </div>

      <article class="jrn__body">
        <header class="jrn__head">
          <span class="jrn__kind" ${tx(kindKey)}>${t(kindKey)}</span>
          ${timing}
        </header>

        <h3 class="jrn__title" ${loc(entry.title)}>${lt(entry.title)}</h3>
        <p class="jrn__org">${esc(entry.org)}</p>
        ${location}
        <p class="jrn__desc" ${loc(entry.description)}>${lt(entry.description)}</p>
        ${tags}
      </article>
    </li>
  `;
}

export function renderJourney(): string {
  return `
    <section class="section section--alt jrn" id="jornada">
      <div class="shell">
        <p class="section-label reveal">
          <span><span class="section-label__index">05</span> / <span ${tx('journey.label')}>${t('journey.label')}</span></span>
        </p>

        <h2 class="section-title reveal" ${tx('journey.title')}>${t('journey.title')}</h2>
        <p class="section-desc reveal" ${tx('journey.desc')}>${t('journey.desc')}</p>

        <ol class="jrn__list">${journey.map(renderEntry).join('')}</ol>
      </div>
    </section>
  `;
}
