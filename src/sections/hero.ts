import { profile } from '../data/profile';
import { selfHosted } from '../data/homelab';
import { icons } from '../lib/icons';
import { loc, lt, qs, qsa, t, tx } from '../lib/dom';

/** Nome de unidade systemd derivado do nome do servico. */
function unitName(name: string): string {
  return `${name.toLowerCase().replace(/[^a-z0-9]/g, '')}.service`;
}

/** Quantos servicos cabem no painel sem esticar o hero. */
const LINHAS_VISIVEIS = 8;

function renderTerminal(): string {
  const visiveis = selfHosted.slice(0, LINHAS_VISIVEIS);
  const restantes = selfHosted.length - visiveis.length;

  const rows = visiveis
    .map(
      (service, index) => `
        <li class="term__row" style="--row-index: ${index}">
          <span class="term__dot" aria-hidden="true"></span>
          <span class="term__unit">${unitName(service.name)}</span>
          <span class="term__state" ${tx('hero.terminal.state')}>${t('hero.terminal.state')}</span>
        </li>`,
    )
    .join('');

  return `
    <div class="term" role="img" aria-label="${t('hero.terminal.note')}">
      <div class="term__chrome">
        <span class="term__light term__light--red"></span>
        <span class="term__light term__light--amber"></span>
        <span class="term__light term__light--green"></span>
        <span class="term__chrome-title">${profile.firstName.toLowerCase()}@kenai:~</span>
      </div>

      <div class="term__body">
        <p class="term__command">
          <span class="term__prompt" aria-hidden="true">$</span>
          <span ${tx('hero.terminal.command')}>${t('hero.terminal.command')}</span>
          <span class="term__caret" aria-hidden="true"></span>
        </p>

        <ul class="term__rows">${rows}</ul>

        ${
          restantes > 0
            ? `<p class="term__more" style="--row-index: ${visiveis.length}">
                 <a href="#homelab">+ ${restantes} <span ${tx('hero.terminal.more')}>${t('hero.terminal.more')}</span></a>
               </p>`
            : ''
        }

        <p class="term__note" ${tx('hero.terminal.note')}>${t('hero.terminal.note')}</p>
      </div>
    </div>
  `;
}

export function renderHero(): string {
  return `
    <section class="hero" id="topo">
      <span class="hero__kana" aria-hidden="true">${profile.katakana}</span>

      <div class="shell hero__inner">
        <div class="hero__copy">
          <p class="hero__eyebrow" ${tx('hero.eyebrow')}>${t('hero.eyebrow')}</p>

          <h1 class="hero__title">
            <span class="hero__title-line" ${tx('hero.title.a')}>${t('hero.title.a')}</span>
            <span class="hero__title-line hl" ${tx('hero.title.b')}>${t('hero.title.b')}</span>
          </h1>

          <p class="hero__lead" ${tx('hero.lead')}>${t('hero.lead')}</p>

          <div class="hero__cta">
            <a class="btn btn--primary" href="#homelab">
              <span ${tx('hero.cta.primary')}>${t('hero.cta.primary')}</span>
              <span class="btn__arrow" aria-hidden="true">${icons.arrow}</span>
            </a>
            <a class="btn" href="#contato" ${tx('hero.cta.secondary')}>${t('hero.cta.secondary')}</a>
          </div>

          <dl class="hero__meta">
            <div class="hero__meta-item">
              <dt class="visually-hidden">Local</dt>
              <dd>
                <span class="dot dot--pulse" aria-hidden="true"></span>
                <span ${loc(profile.location)}>${lt(profile.location)}</span>
              </dd>
            </div>
            <div class="hero__meta-item">
              <dt class="visually-hidden">Idiomas</dt>
              <dd>
                <span>Português</span>
                <span class="hero__meta-sep" aria-hidden="true">·</span>
                <span>English</span>
              </dd>
            </div>
          </dl>
        </div>

        <div class="hero__panel">${renderTerminal()}</div>
      </div>

      <a class="hero__scroll" href="#sobre">
        <span ${tx('hero.scroll')}>${t('hero.scroll')}</span>
        <span class="hero__scroll-icon" aria-hidden="true">${icons.chevronDown}</span>
      </a>
    </section>
  `;
}

/** Revela as linhas do terminal em sequencia, como uma saida real de comando. */
export function initHero(): void {
  const term = qs('.term');
  if (!term) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    term.classList.add('is-ready');
    return;
  }

  const observer = new IntersectionObserver(
    (entries, self) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        term.classList.add('is-ready');
        self.disconnect();
      });
    },
    { threshold: 0.25 },
  );

  observer.observe(term);

  // Inclina levemente o painel conforme o ponteiro, so em telas com mouse.
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    attachTilt(term as HTMLElement);
  }

  qsa('.term__row').forEach((row, index) => {
    row.style.setProperty('--row-index', String(index));
  });
}

function attachTilt(element: HTMLElement): void {
  const maxTilt = 4;
  let frame = 0;

  element.addEventListener('pointermove', (event) => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      element.style.setProperty('--tilt-x', `${(-y * maxTilt).toFixed(2)}deg`);
      element.style.setProperty('--tilt-y', `${(x * maxTilt).toFixed(2)}deg`);
    });
  });

  element.addEventListener('pointerleave', () => {
    element.style.setProperty('--tilt-x', '0deg');
    element.style.setProperty('--tilt-y', '0deg');
  });
}
