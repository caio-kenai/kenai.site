import { translate, type StringKey } from '../data/i18n';
import type { Localized } from '../data/types';
import { getLang, onLangChange } from './state';

/** Escapa texto para uso seguro em conteudo e atributos HTML. */
export function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Traduz uma chave usando o idioma ativo. */
export function t(key: StringKey): string {
  return translate(getLang(), key);
}

/**
 * Marca um elemento como traduzivel por chave. O texto e trocado no lugar
 * quando o idioma muda, sem reconstruir a arvore nem perder o scroll.
 */
export function tx(key: StringKey): string {
  return `data-i18n="${key}"`;
}

/** Marca um atributo traduzivel, ex.: `ta('aria-label', 'nav.aria')`. */
export function ta(attr: string, key: StringKey): string {
  return `data-i18n-attr="${attr}:${key}"`;
}

/** Marca um texto vindo dos dados, ja disponivel nos dois idiomas. */
export function loc(value: Localized): string {
  return `data-t-pt="${esc(value.pt)}" data-t-en="${esc(value.en)}"`;
}

/** Texto localizado no idioma ativo, ja escapado. */
export function lt(value: Localized): string {
  return esc(value[getLang()]);
}

export function qs<T extends Element = HTMLElement>(selector: string, root: ParentNode = document) {
  return root.querySelector<T>(selector);
}

export function qsa<T extends Element = HTMLElement>(
  selector: string,
  root: ParentNode = document,
): T[] {
  return Array.from(root.querySelectorAll<T>(selector));
}

/** Reaplica todas as traducoes da arvore para o idioma ativo. */
export function applyTranslations(root: ParentNode = document): void {
  const lang = getLang();

  qsa('[data-i18n]', root).forEach((node) => {
    const key = node.dataset.i18n as StringKey | undefined;
    if (key) node.textContent = translate(lang, key);
  });

  qsa('[data-i18n-attr]', root).forEach((node) => {
    const spec = node.dataset.i18nAttr;
    if (!spec) return;
    const separator = spec.indexOf(':');
    if (separator < 0) return;
    const attr = spec.slice(0, separator);
    const key = spec.slice(separator + 1) as StringKey;
    node.setAttribute(attr, translate(lang, key));
  });

  qsa('[data-t-pt]', root).forEach((node) => {
    const value = lang === 'pt' ? node.dataset.tPt : node.dataset.tEn;
    if (value !== undefined) node.textContent = value;
  });
}

/** Mantem a arvore sincronizada com o idioma escolhido. */
export function initTranslations(): void {
  onLangChange(() => applyTranslations());
}
