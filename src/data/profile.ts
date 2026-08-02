import type { Localized } from './types';

/** Marca exibida é kenai.dev. kenai.site fica só como domínio de hospedagem. */
export const profile = {
  brand: 'kenai.dev',
  brandName: 'kenai',
  brandTld: '.dev',
  /** "kenai" em katakana. */
  katakana: 'ケナイ',

  name: 'Caio Oliveira Pacifico',
  firstName: 'Caio',
  handle: 'caio-kenai',

  role: {
    pt: 'Técnico de Suporte Júnior',
    en: 'Junior Support Technician',
  } satisfies Localized,

  company: 'Playlist Software Solutions',

  location: {
    pt: 'Ipatinga, Minas Gerais, Brasil',
    en: 'Ipatinga, Minas Gerais, Brazil',
  } satisfies Localized,

  email: 'caiokenai@tutamail.com',

  links: {
    github: 'https://github.com/caio-kenai',
    linkedin: 'https://www.linkedin.com/in/caio-oliveira-pacifico-a6042b246',
    mastodon: 'https://mastodon.social/@caiokenai',
    bluesky: 'https://bsky.app/profile/caiokenai.bsky.social',
    repo: 'https://github.com/caio-kenai/kenai.site',
  },

  /** Mesmo identificador nas duas redes. */
  social: '@caiokenai',
} as const;
