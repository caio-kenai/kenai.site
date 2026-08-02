import type { Sprite } from '../data/sprites';
import { esc } from './dom';

interface SpriteOptions {
  /** Classe do posicionamento na secao que recebe o personagem. */
  className?: string;
  /** Altura renderizada, em qualquer unidade CSS. */
  height?: string;
  /** Espelha o sprite na horizontal, para ele "olhar" para o conteudo. */
  flip?: boolean;
}

/**
 * Personagem apoiado num pedestal luminoso. E decorativo, entao fica fora da
 * arvore de acessibilidade, mas guarda o nome no title para quem passar o
 * ponteiro por cima.
 */
export function sprite(character: Sprite, options: SpriteOptions = {}): string {
  const { className = '', height, flip } = options;
  const classes = ['sprite', className, flip ? 'sprite--flip' : ''].filter(Boolean).join(' ');

  // A correcao optica entra na altura pedida pela secao, para duas artes de
  // escalas diferentes ficarem parecidas lado a lado.
  const optical = character.optical ?? 1;
  const alturaFinal = height && optical !== 1 ? `calc(${height} * ${optical})` : height;
  const style = alturaFinal ? ` style="--sprite-h: ${alturaFinal}"` : '';

  return `
    <div class="${classes}"${style} aria-hidden="true">
      <img
        class="sprite__img"
        src="/sprites/${esc(character.file)}"
        width="${character.width}"
        height="${character.height}"
        alt=""
        title="${esc(character.name)} · ${esc(character.from)}"
        loading="lazy"
        decoding="async"
      />
    </div>
  `;
}
