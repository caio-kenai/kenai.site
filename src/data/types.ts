/** Idiomas suportados pela interface. */
export type Lang = 'pt' | 'en';

/** Texto disponivel nos dois idiomas. */
export interface Localized {
  pt: string;
  en: string;
}

export type Theme = 'dark' | 'light';

/** Situacao atual de uma tecnologia na minha stack. */
export type StackStatus = 'using' | 'learning';

export interface StackItem {
  name: string;
  status: StackStatus;
}

export interface StackGroup {
  id: string;
  label: Localized;
  items: StackItem[];
}

/** Servico do homelab ou software livre de uso diario. */
export interface HomelabEntry {
  name: string;
  role: Localized;
  /** Dominio do problema que o servico resolve, usado como etiqueta. */
  domain: Localized;
  /** Endereco do projeto upstream. */
  url: string;
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
