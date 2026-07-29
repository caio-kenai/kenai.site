import { navLinks } from '../data/nav';
import { profile } from '../data/profile';
import type { StringKey } from '../data/i18n';
import { copyEmail } from './clipboard';
import { esc, qs, t } from './dom';
import { icons } from './icons';
import { toggleLang, toggleTheme } from './state';

type Group = 'sections' | 'links' | 'prefs';

interface Command {
  id: string;
  group: Group;
  labelKey: StringKey;
  icon: string;
  run: () => void;
}

const groupLabel: Record<Group, StringKey> = {
  sections: 'palette.group.sections',
  links: 'palette.group.links',
  prefs: 'palette.group.prefs',
};

function goTo(hash: string): void {
  const target = document.querySelector(hash);
  if (!target) return;
  // O scroll sai numa tarefa separada: disparado no mesmo passo em que o
  // dialogo e desmontado, o navegador cancela a rolagem suave no meio.
  window.setTimeout(() => {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 0);
  history.replaceState(null, '', hash);
}

function openExternal(url: string): void {
  window.open(url, '_blank', 'noopener,noreferrer');
}

const commands: Command[] = [
  ...navLinks.map(
    (link): Command => ({
      id: `go${link.href}`,
      group: 'sections',
      labelKey: link.key,
      icon: icons.arrow,
      run: () => goTo(link.href),
    }),
  ),
  {
    id: 'github',
    group: 'links',
    labelKey: 'palette.action.github',
    icon: icons.github,
    run: () => openExternal(profile.links.github),
  },
  {
    id: 'linkedin',
    group: 'links',
    labelKey: 'palette.action.linkedin',
    icon: icons.linkedin,
    run: () => openExternal(profile.links.linkedin),
  },
  {
    id: 'source',
    group: 'links',
    labelKey: 'palette.action.source',
    icon: icons.terminal,
    run: () => openExternal(profile.links.repo),
  },
  {
    id: 'copy-email',
    group: 'links',
    labelKey: 'palette.action.copyEmail',
    icon: icons.copy,
    run: () => void copyEmail(),
  },
  {
    id: 'theme',
    group: 'prefs',
    labelKey: 'palette.action.theme',
    icon: icons.moon,
    run: () => toggleTheme(),
  },
  {
    id: 'lang',
    group: 'prefs',
    labelKey: 'palette.action.lang',
    icon: icons.globe,
    run: () => toggleLang(),
  },
];

/** Normaliza para busca tolerante a acento e caixa. */
function fold(value: string): string {
  return value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase();
}

let root: HTMLElement | null = null;
let input: HTMLInputElement | null = null;
let results: HTMLElement | null = null;
let matches: Command[] = [];
let cursor = 0;
let lastFocused: HTMLElement | null = null;

export function renderPalette(): string {
  return `
    <div class="palette" id="palette" hidden>
      <div class="palette__backdrop" data-palette-close></div>

      <div class="palette__box" role="dialog" aria-modal="true" aria-labelledby="paletteTitle">
        <h2 class="visually-hidden" id="paletteTitle" data-i18n="palette.title">${t('palette.title')}</h2>

        <div class="palette__field">
          <span class="palette__prompt" aria-hidden="true">&gt;</span>
          <input
            class="palette__input"
            id="paletteInput"
            type="text"
            autocomplete="off"
            autocapitalize="off"
            spellcheck="false"
            role="combobox"
            aria-expanded="true"
            aria-controls="paletteResults"
            aria-autocomplete="list"
            placeholder="${t('palette.placeholder')}"
            data-i18n-attr="placeholder:palette.placeholder"
          />
          <kbd class="palette__kbd">ESC</kbd>
        </div>

        <div class="palette__results" id="paletteResults" role="listbox" aria-label="${t('palette.title')}"></div>

        <div class="palette__hints">
          <span><kbd>↑</kbd><kbd>↓</kbd> <span data-i18n="palette.hint.nav">${t('palette.hint.nav')}</span></span>
          <span><kbd>↵</kbd> <span data-i18n="palette.hint.select">${t('palette.hint.select')}</span></span>
          <span><kbd>esc</kbd> <span data-i18n="palette.hint.close">${t('palette.hint.close')}</span></span>
        </div>
      </div>
    </div>
  `;
}

function paint(query: string): void {
  if (!results) return;

  const needle = fold(query.trim());
  matches = needle
    ? commands.filter((command) => fold(t(command.labelKey)).includes(needle))
    : commands;

  if (matches.length === 0) {
    results.innerHTML = `<p class="palette__empty">${esc(t('palette.empty'))}</p>`;
    return;
  }

  cursor = Math.min(cursor, matches.length - 1);

  let html = '';
  let currentGroup: Group | null = null;

  matches.forEach((command, index) => {
    if (command.group !== currentGroup) {
      currentGroup = command.group;
      html += `<p class="palette__group">${esc(t(groupLabel[currentGroup]))}</p>`;
    }

    html += `
      <button
        class="palette__item${index === cursor ? ' is-active' : ''}"
        type="button"
        role="option"
        id="paletteItem${index}"
        aria-selected="${index === cursor}"
        data-index="${index}"
      >
        <span class="palette__item-icon" aria-hidden="true">${command.icon}</span>
        <span class="palette__item-label">${esc(t(command.labelKey))}</span>
      </button>
    `;
  });

  results.innerHTML = html;
  syncActive();
}

function syncActive(): void {
  if (!results || !input) return;

  const items = Array.from(results.querySelectorAll<HTMLElement>('.palette__item'));
  items.forEach((item, index) => {
    const active = index === cursor;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-selected', String(active));
    if (active) {
      input?.setAttribute('aria-activedescendant', item.id);
      item.scrollIntoView({ block: 'nearest' });
    }
  });
}

function move(delta: number): void {
  if (matches.length === 0) return;
  cursor = (cursor + delta + matches.length) % matches.length;
  syncActive();
}

function runCurrent(): void {
  const command = matches[cursor];
  if (!command) return;
  closePalette();
  command.run();
}

export function openPalette(): void {
  if (!root || !input) return;

  lastFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  root.hidden = false;
  document.body.style.overflow = 'hidden';
  input.value = '';
  cursor = 0;
  paint('');
  input.focus();
}

export function closePalette(): void {
  if (!root || root.hidden) return;
  root.hidden = true;
  document.body.style.overflow = '';
  // Sem preventScroll o navegador rola ate o elemento que recebe o foco de
  // volta, o que cancelaria a navegacao disparada pelo comando escolhido.
  lastFocused?.focus({ preventScroll: true });
}

export function initPalette(): void {
  root = qs('#palette');
  input = qs<HTMLInputElement>('#paletteInput');
  results = qs('#paletteResults');
  if (!root || !input || !results) return;

  input.addEventListener('input', () => {
    cursor = 0;
    paint(input?.value ?? '');
  });

  root.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;

    if (target.closest('[data-palette-close]')) {
      closePalette();
      return;
    }

    const item = target.closest<HTMLElement>('.palette__item');
    // O indice do primeiro item e "0": comparar com undefined evita que ele
    // seja descartado por ser uma string falsy.
    if (item?.dataset.index !== undefined) {
      cursor = Number(item.dataset.index);
      runCurrent();
    }
  });

  root.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        closePalette();
        break;
      case 'ArrowDown':
        event.preventDefault();
        move(1);
        break;
      case 'ArrowUp':
        event.preventDefault();
        move(-1);
        break;
      case 'Enter':
        event.preventDefault();
        runCurrent();
        break;
      case 'Tab':
        // O dialogo tem um unico ponto de entrada: o foco fica no campo.
        event.preventDefault();
        break;
      default:
        break;
    }
  });

  document.addEventListener('keydown', (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      if (root?.hidden) openPalette();
      else closePalette();
    }
  });
}
