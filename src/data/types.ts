/** Idiomas suportados. */
export type Lang = 'pt' | 'en';

/** Texto nos dois idiomas. */
export interface Localized {
  pt: string;
  en: string;
}

export type Theme = 'dark' | 'light';

/** Pasta do logo em public/icons/. */
export type IconSet = 'tech' | 'lab';

/** Alguns projetos só publicam PNG. */
export type IconExt = 'svg' | 'png';

export interface Tech {
  name: string;
  /** Arquivo do logo, sem extensão. Ausente cai no monograma. */
  slug?: string;
  set?: IconSet;
  ext?: IconExt;
  /** Logos escuros precisam inverter no tema escuro. */
  invertOnDark?: boolean;
}

export interface TechGroup {
  id: string;
  label: Localized;
  items: Tech[];
}

/** Serviço do homelab ou software de uso diário. */
export interface HomelabEntry {
  name: string;
  role: Localized;
  /** Etiqueta do card. */
  domain: Localized;
  /** Site do projeto. */
  url: string;
  /** Arquivo em public/icons/lab/. Ausente cai no monograma. */
  slug?: string;
  ext?: IconExt;
  invertOnDark?: boolean;
}

export type JourneyKind = 'work' | 'education';

export interface JourneyEntry {
  id: string;
  kind: JourneyKind;
  org: string;
  title: Localized;
  period: Localized;
  location?: Localized;
  description: Localized;
  tags?: string[];
  current?: boolean;
}

export interface Project {
  id: string;
  name: string;
  /** Usada pelos filtros. */
  category: string;
  summary: Localized;
  /** Problema que resolve. */
  goal?: Localized;
  /** Minha responsabilidade. */
  role?: Localized;
  tech: string[];
  repo?: string;
  demo?: string;
  featured?: boolean;
}
