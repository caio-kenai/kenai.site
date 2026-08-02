import type { Sprite } from '../data/sprites';
import { esc } from './dom';

interface SpriteOptions {
  /** Classe de posicionamento na seção. */
  className?: string;
  /** Altura renderizada, em unidade CSS. */
  height?: string;
  /** Espelha na horizontal. */
  flip?: boolean;
}

/** Personagem sobre o pedestal. Decorativo, fica fora da árvore de acessibilidade. */
export function sprite(character: Sprite, options: SpriteOptions = {}): string {
  const { className = '', height, flip } = options;
  const classes = ['sprite', className, flip ? 'sprite--flip' : ''].filter(Boolean).join(' ');

  // o ajuste óptico entra na altura pedida pela seção
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
