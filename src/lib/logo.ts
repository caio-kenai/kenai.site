import type { IconExt, IconSet } from '../data/types';
import { esc } from './dom';

interface LogoOptions {
  name: string;
  slug?: string | undefined;
  set?: IconSet | undefined;
  ext?: IconExt | undefined;
  invertOnDark?: boolean | undefined;
  size?: number;
}

/** Logo de tecnologia ou serviço. Sem slug, cai no monograma. */
export function logo({
  name,
  slug,
  set = 'tech',
  ext = 'svg',
  invertOnDark,
  size = 40,
}: LogoOptions): string {
  if (!slug) {
    const initials = name.replace(/[^A-Za-z0-9]/g, '').slice(0, 2).toUpperCase();
    return `<span class="logo logo--monogram" aria-hidden="true">${esc(initials)}</span>`;
  }

  const classes = `logo${invertOnDark ? ' logo--invert-dark' : ''}`;
  return `<img
    class="${classes}"
    src="/icons/${set}/${esc(slug)}.${ext}"
    alt=""
    width="${size}"
    height="${size}"
    loading="lazy"
    decoding="async"
  />`;
}
