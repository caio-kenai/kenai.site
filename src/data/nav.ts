import type { StringKey } from './i18n';

export interface NavLink {
  href: string;
  key: StringKey;
}

/** Ancoras da navegacao, reaproveitadas pela paleta de comandos. */
export const navLinks: NavLink[] = [
  { href: '#sobre', key: 'nav.about' },
  { href: '#stack', key: 'nav.stack' },
  { href: '#homelab', key: 'nav.homelab' },
  { href: '#projetos', key: 'nav.projects' },
  { href: '#jornada', key: 'nav.journey' },
  { href: '#contato', key: 'nav.contact' },
];
