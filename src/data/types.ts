/** Idiomas suportados pela interface. */
export type Lang = 'pt' | 'en';

/** Texto disponivel nos dois idiomas. */
export interface Localized {
  pt: string;
  en: string;
}

export type Theme = 'dark' | 'light';

/** Conjunto de icones em que o logo esta guardado (public/icons/<set>/). */
export type IconSet = 'tech' | 'lab';

/** Formato do arquivo do logo. Alguns projetos so publicam PNG. */
export type IconExt = 'svg' | 'png';

export interface Tech {
  name: string;
  /** Arquivo do logo, sem extensao. Ausente = tecnologia sem logo publico. */
  slug?: string;
  set?: IconSet;
  ext?: IconExt;
  /** Logos monocromaticos escuros precisam ser invertidos no tema escuro. */
  invertOnDark?: boolean;
}

export interface TechGroup {
  id: string;
  label: Localized;
  items: Tech[];
}

/** Servico do homelab ou software livre de uso diario. */
export interface HomelabEntry {
  name: string;
  role: Localized;
  /** Dominio do problema que o servico resolve, usado como etiqueta. */
  domain: Localized;
  /** Endereco do projeto upstream. */
  url: string;
  /** Arquivo do logo em public/icons/lab/. Ausente = usa monograma. */
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
  /** Categoria usada pelos filtros da secao de projetos. */
  category: string;
  summary: Localized;
  /** O que o projeto se propoe a resolver. */
  goal?: Localized;
  /** Minha responsabilidade dentro do projeto. */
  role?: Localized;
  tech: string[];
  repo?: string;
  demo?: string;
  featured?: boolean;
}
