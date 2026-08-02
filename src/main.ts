import './styles/tokens.css';
import './styles/base.css';
import './styles/nav.css';
import './styles/hero.css';
import './styles/about.css';
import './styles/stack.css';
import './styles/homelab.css';
import './styles/projects.css';
import './styles/journey.css';
import './styles/contact.css';
import './styles/footer.css';
import './styles/sprite.css';
import './styles/palette.css';

import { initTranslations, qs } from './lib/dom';
import { initReveal, initScrollProgress } from './lib/reveal';
import { initPalette, renderPalette } from './lib/palette';

import { initNav, renderNav } from './sections/nav';
import { initHero, renderHero } from './sections/hero';
import { initAbout, renderAbout } from './sections/about';
import { renderStack } from './sections/stack';
import { renderHomelab } from './sections/homelab';
import { initProjects, renderProjects } from './sections/projects';
import { renderJourney } from './sections/journey';
import { initContact, renderContact } from './sections/contact';
import { renderFooter } from './sections/footer';

/**
 * As secoes so existem depois que o script monta a pagina, entao o navegador
 * nao encontra o alvo de um link com ancora durante o carregamento, e a
 * restauracao automatica de scroll pode parar numa posicao vazia. O ajuste
 * fica por conta desta funcao, ja com a arvore montada.
 */
function restorePosition(): void {
  const hash = window.location.hash;
  const target = hash.length > 1 ? document.querySelector(hash) : null;

  const jump = () => {
    if (target) {
      // 'instant' ignora o scroll-behavior: smooth do CSS. Com 'auto' a
      // chegada vira um deslize longo desde o topo, que se perde no caminho.
      target.scrollIntoView({ behavior: 'instant', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  jump();
  // As fontes terminam de carregar depois da primeira pintura e mudam a
  // altura das secoes; a segunda passada corrige o destino.
  requestAnimationFrame(() => requestAnimationFrame(jump));
}

function mount(): void {
  const app = qs('#app');
  if (!app) return;

  app.innerHTML = [
    renderNav(),
    '<main id="main">',
    renderHero(),
    renderAbout(),
    renderStack(),
    renderHomelab(),
    renderProjects(),
    renderJourney(),
    renderContact(),
    '</main>',
    renderFooter(),
    renderPalette(),
  ].join('');

  initTranslations();
  initNav();
  initHero();
  initAbout();
  initProjects();
  initContact();
  initPalette();
  initReveal();
  initScrollProgress();
  restorePosition();
}

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

mount();
