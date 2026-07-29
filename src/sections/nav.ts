import { profile } from '../data/profile';
import { icons } from '../lib/icons';
import { qs, qsa, t, ta, tx } from '../lib/dom';
import { getLang, getTheme, onLangChange, onThemeChange, toggleLang, toggleTheme } from '../lib/state';
import { openPalette } from '../lib/palette';
import { navLinks } from '../data/nav';

function renderLinks(className: string): string {
  return navLinks
    .map(
      (link) =>
        `<li><a class="${className}" href="${link.href}" ${tx(link.key)}>${t(link.key)}</a></li>`,
    )
    .join('');
}

function themeLabelKey() {
  return getTheme() === 'dark' ? ('nav.theme.toLight' as const) : ('nav.theme.toDark' as const);
}

function renderControls(context: 'bar' | 'panel'): string {
  return `
    <div class="nav__controls nav__controls--${context}">
      <button
        class="nav__icon-btn js-palette"
        type="button"
        aria-label="${t('nav.search')}"
        ${ta('aria-label', 'nav.search')}
      >
        ${icons.search}
        <kbd class="nav__kbd">Ctrl K</kbd>
      </button>

      <button
        class="nav__icon-btn js-lang"
        type="button"
        aria-label="${t('nav.lang')}"
        ${ta('aria-label', 'nav.lang')}
      >
        ${icons.globe}
        <span class="nav__lang-label js-lang-label">${getLang().toUpperCase()}</span>
      </button>

      <button
        class="nav__icon-btn js-theme"
        type="button"
        aria-label="${t(themeLabelKey())}"
      >
        <span class="js-theme-icon">${getTheme() === 'dark' ? icons.sun : icons.moon}</span>
      </button>
    </div>
  `;
}

export function renderNav(): string {
  return `
    <header class="nav" id="siteNav">
      <div class="nav__inner">
        <a class="nav__brand" href="#topo" aria-label="${profile.brand}">
          <span class="nav__brand-glyph" aria-hidden="true">${icons.terminal}</span>
          <span class="nav__brand-text">
            ${profile.brandName}<span class="nav__brand-tld">${profile.brandTld}</span>
          </span>
        </a>

        <nav class="nav__links" ${ta('aria-label', 'nav.aria')} aria-label="${t('nav.aria')}">
          <ul>${renderLinks('nav__link')}</ul>
        </nav>

        ${renderControls('bar')}

        <button
          class="nav__icon-btn nav__burger js-menu"
          type="button"
          aria-expanded="false"
          aria-controls="navPanel"
          aria-label="${t('nav.menu.open')}"
        >
          <span class="js-burger-icon">${icons.menu}</span>
        </button>
      </div>

      <div class="nav__panel" id="navPanel" hidden>
        <nav ${ta('aria-label', 'nav.aria')} aria-label="${t('nav.aria')}">
          <ul>${renderLinks('nav__panel-link')}</ul>
        </nav>
        ${renderControls('panel')}
      </div>
    </header>
  `;
}

export function initNav(): void {
  const nav = qs('#siteNav');
  const panel = qs('#navPanel');
  const burger = qs<HTMLButtonElement>('.js-menu');
  if (!nav || !panel || !burger) return;

  /* -- estado condensado ao rolar -- */
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* -- menu mobile -- */
  const setMenu = (open: boolean) => {
    panel.hidden = !open;
    nav.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', t(open ? 'nav.menu.close' : 'nav.menu.open'));
    const icon = qs('.js-burger-icon', burger);
    if (icon) icon.innerHTML = open ? icons.close : icons.menu;
    document.body.style.overflow = open ? 'hidden' : '';
  };

  burger.addEventListener('click', () => setMenu(panel.hidden));
  qsa('.nav__panel-link').forEach((link) => link.addEventListener('click', () => setMenu(false)));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !panel.hidden) {
      setMenu(false);
      burger.focus();
    }
  });

  // O painel so existe no layout estreito: ao voltar para desktop, e fechado.
  const wide = window.matchMedia('(min-width: 880px)');
  wide.addEventListener('change', (event) => {
    if (event.matches && !panel.hidden) setMenu(false);
  });

  /* -- controles (existem duas vezes: barra e painel) -- */
  qsa('.js-palette').forEach((button) => button.addEventListener('click', () => openPalette()));
  qsa('.js-lang').forEach((button) => button.addEventListener('click', () => toggleLang()));
  qsa('.js-theme').forEach((button) => button.addEventListener('click', () => toggleTheme()));

  onLangChange((lang) => {
    qsa('.js-lang-label').forEach((label) => (label.textContent = lang.toUpperCase()));
    burger.setAttribute('aria-label', t(panel.hidden ? 'nav.menu.open' : 'nav.menu.close'));
  });

  onThemeChange((theme) => {
    qsa('.js-theme-icon').forEach((icon) => (icon.innerHTML = theme === 'dark' ? icons.sun : icons.moon));
    qsa('.js-theme').forEach((button) => button.setAttribute('aria-label', t(themeLabelKey())));
  });

  initScrollSpy();
}

/** Destaca na navegacao a secao visivel no momento. */
function initScrollSpy(): void {
  const links = qsa<HTMLAnchorElement>('.nav__link');
  const byId = new Map(links.map((link) => [link.getAttribute('href')?.slice(1) ?? '', link]));
  const sections = [...byId.keys()]
    .map((id) => document.getElementById(id))
    .filter((section): section is HTMLElement => section !== null);

  if (sections.length === 0) return;

  let active: HTMLAnchorElement | null = null;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;

      const link = byId.get(visible.target.id);
      if (!link || link === active) return;

      active?.removeAttribute('aria-current');
      link.setAttribute('aria-current', 'true');
      active = link;
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5] },
  );

  sections.forEach((section) => observer.observe(section));
}
