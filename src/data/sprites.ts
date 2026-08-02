export interface Sprite {
  /** Arquivo em public/sprites/ */
  file: string;
  name: string;
  /** Exibido no title. */
  from: string;
  /** Reservam o espaço antes de carregar. */
  width: number;
  height: number;
  /** Ajuste para artes desenhadas em escalas diferentes. */
  optical?: number;
}

/** Personagens usados nas seções. */
export const sprites = {
  link: {
    file: 'link.gif',
    name: 'Link',
    from: 'Ocarina of Time',
    width: 92,
    height: 150,
  },
  zelda: {
    file: 'zelda.gif',
    name: 'Zelda',
    from: 'The Legend of Zelda',
    width: 108,
    height: 150,
    optical: 0.85,
  },
  zero: {
    file: 'zero.gif',
    name: 'Zero',
    from: 'Mega Man X',
    width: 129,
    height: 150,
  },
  gengar: {
    file: 'gengar.gif',
    name: 'Gengar',
    from: 'Pokémon',
    width: 152,
    height: 150,
  },
  absol: {
    file: 'absol.gif',
    name: 'Absol',
    from: 'Pokémon',
    width: 152,
    height: 150,
  },
} as const satisfies Record<string, Sprite>;
