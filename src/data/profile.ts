import type { Localized } from './types';

/**
 * Identidade do site. A marca exibida e kenai.dev; kenai.site permanece
 * apenas como dominio tecnico de hospedagem.
 */
export const profile = {
  brand: 'kenai.dev',
  brandName: 'kenai',
  brandTld: '.dev',
  /** Leitura de "kenai" em katakana, usada como marca d'agua discreta. */
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
    pt: 'Ipatinga, Minas Gerais — Brasil',
    en: 'Ipatinga, Minas Gerais — Brazil',
  } satisfies Localized,

  email: 'caiokenai10@gmail.com',

  links: {
    github: 'https://github.com/caio-kenai',
    linkedin: 'https://www.linkedin.com/in/caio-oliveira-pacifico-a6042b246',
    repo: 'https://github.com/caio-kenai/kenai.site',
  },
} as const;
