import type { Lang, Theme } from '../data/types';

const LANG_KEY = 'kenai:lang';
const THEME_KEY = 'kenai:theme';

type Listener<T> = (value: T) => void;

function readStored<T extends string>(key: string, allowed: readonly T[]): T | null {
  try {
    const raw = localStorage.getItem(key);
    return allowed.includes(raw as T) ? (raw as T) : null;
  } catch {
    // armazenamento bloqueado, segue sem persistir
    return null;
  }
}

function write(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    // sem persistência, vale só para esta sessão
  }
}

function detectLang(): Lang {
  const stored = readStored<Lang>(LANG_KEY, ['pt', 'en']);
  if (stored) return stored;
  return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

function detectTheme(): Theme {
  const stored = readStored<Theme>(THEME_KEY, ['dark', 'light']);
  if (stored) return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

let lang: Lang = detectLang();
let theme: Theme = detectTheme();

const langListeners = new Set<Listener<Lang>>();
const themeListeners = new Set<Listener<Theme>>();

export function getLang(): Lang {
  return lang;
}

export function setLang(next: Lang): void {
  if (next === lang) return;
  lang = next;
  write(LANG_KEY, next);
  document.documentElement.setAttribute('lang', next === 'pt' ? 'pt-BR' : 'en');
  langListeners.forEach((listener) => listener(next));
}

export function toggleLang(): void {
  setLang(lang === 'pt' ? 'en' : 'pt');
}

export function onLangChange(listener: Listener<Lang>): void {
  langListeners.add(listener);
}

export function getTheme(): Theme {
  return theme;
}

export function setTheme(next: Theme): void {
  if (next === theme) return;
  theme = next;
  write(THEME_KEY, next);
  document.documentElement.setAttribute('data-theme', next);
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', next === 'dark' ? '#0b0d0e' : '#f3f5f4');
  themeListeners.forEach((listener) => listener(next));
}

export function toggleTheme(): void {
  setTheme(theme === 'dark' ? 'light' : 'dark');
}

export function onThemeChange(listener: Listener<Theme>): void {
  themeListeners.add(listener);
}
