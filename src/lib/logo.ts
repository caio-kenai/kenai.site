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

/**
 * Logo de uma tecnologia ou servico. Os arquivos ficam em public/icons e sao
 * servidos pelo proprio dominio, sem nenhum icone vindo de CDN.
 *
 * Tecnologias sem logo publico caem num monograma, para a grade nao ficar
 * com buracos.
 */
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
