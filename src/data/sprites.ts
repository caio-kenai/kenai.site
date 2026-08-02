export interface Sprite {
  /** Arquivo em public/sprites/ */
  file: string;
  name: string;
  /** De onde o personagem veio, exibido ao passar o ponteiro. */
  from: string;
  /** Dimensoes reais, para reservar o espaco antes de carregar. */
  width: number;
  height: number;
  /**
   * Correcao optica. Cada arte foi desenhada numa escala diferente: um busto
   * em close e um corpo inteiro ocupam a mesma altura de moldura mas parecem
   * de tamanhos bem distintos. O fator aproxima o que o olho compara.
   */
  optical?: number;
}

/**
 * Os personagens que o Caio cita no proprio texto. Cada um aparece na secao
 * com que tem alguma relacao, em vez de ficarem enfileirados num bloco so.
 */
export const sprites = {
  /** Jornada: a secao e uma trilha, e ele fecha o caminho de um lado. */
  link: {
    file: 'link.gif',
    name: 'Link',
    from: 'Ocarina of Time',
    width: 92,
    height: 150,
  },
  /** Jornada: fecha o outro lado. Desenhada em close, entao entra reduzida. */
  zelda: {
    file: 'zelda.gif',
    name: 'Zelda',
    from: 'The Legend of Zelda',
    width: 108,
    height: 150,
    optical: 0.85,
  },
  /** Projetos: ainda em construcao. */
  zero: {
    file: 'zero.gif',
    name: 'Zero',
    from: 'Mega Man X',
    width: 129,
    height: 150,
  },
  /** Homelab: um fantasma combina com a parte de nao deixar rastro. */
  gengar: {
    file: 'gengar.gif',
    name: 'Gengar',
    from: 'Pokémon',
    width: 152,
    height: 150,
  },
  /** Sobre: companhia na secao mais pessoal do site. */
  absol: {
    file: 'absol.gif',
    name: 'Absol',
    from: 'Pokémon',
    width: 152,
    height: 150,
  },
} as const satisfies Record<string, Sprite>;
