import { qs, qsa } from './dom';

/** Revela elementos `.reveal` quando entram na viewport. */
export function initReveal(): void {
  const targets = qsa('.reveal');
  if (targets.length === 0) return;

  if (
    !('IntersectionObserver' in window) ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    targets.forEach((target) => target.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
  );

  targets.forEach((target) => observer.observe(target));
}

/** Sincroniza a barra de progresso do topo com a rolagem da pagina. */
export function initScrollProgress(): void {
  const bar = qs('#scrollProgress');
  if (!bar) return;

  let frame = 0;

  const update = () => {
    frame = 0;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
    bar.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
  };

  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(update);
  };

  update();
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
}
