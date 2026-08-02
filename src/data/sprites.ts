import type { Localized } from './types';

export interface Sprite {
  id: string;
  /** Arquivo em public/sprites/ */
  file: string;
  name: string;
  /** De onde o personagem veio. */
  from: string;
  /** Classe, no espirito de uma ficha de RPG. */
  role: Localized;
  /** Altura do sprite em pixels, para reservar o espaco antes de carregar. */
  width: number;
  height: number;
}

/**
 * Os personagens que aparecem na secao "sobre". Nao sao ilustracao
 * decorativa: sao as referencias que o Caio cita no proprio texto.
 */
export const party: Sprite[] = [
  {
    id: 'link',
    file: 'link.gif',
    name: 'Link',
    from: 'Ocarina of Time',
    role: { pt: 'Herói', en: 'Hero' },
    width: 92,
    height: 150,
  },
  {
    id: 'zero',
    file: 'zero.gif',
    name: 'Zero',
    from: 'Mega Man X',
    role: { pt: 'Espadachim', en: 'Swordsman' },
    width: 129,
    height: 150,
  },
  {
    id: 'gengar',
    file: 'gengar.gif',
    name: 'Gengar',
    from: 'Pokémon',
    role: { pt: 'Fantasma', en: 'Ghost' },
    width: 152,
    height: 150,
  },
  {
    id: 'absol',
    file: 'absol.gif',
    name: 'Absol',
    from: 'Pokémon',
    role: { pt: 'Sombrio', en: 'Dark' },
    width: 152,
    height: 150,
  },
];
