import { profile } from '../data/profile';
import { icons } from '../lib/icons';
import { qs, t, tx } from '../lib/dom';
import { copyEmail } from '../lib/clipboard';

export function renderContact(): string {
  return `
    <section class="section contact" id="contato">
      <div class="shell">
        <p class="section-label reveal">
          <span><span class="section-label__index">06</span> / <span ${tx('contact.label')}>${t('contact.label')}</span></span>
        </p>

        <h2 class="section-title reveal" ${tx('contact.title')}>${t('contact.title')}</h2>
        <p class="section-desc reveal" ${tx('contact.desc')}>${t('contact.desc')}</p>

        <ul class="contact__list">
          <li class="contact__item reveal">
            <a class="contact__card" href="mailto:${profile.email}">
              <span class="contact__icon" aria-hidden="true">${icons.mail}</span>
              <span class="contact__label" ${tx('contact.email')}>${t('contact.email')}</span>
              <span class="contact__value">${profile.email}</span>
            </a>
            <button class="contact__copy js-copy-email" type="button" aria-label="${t('contact.copy')}">
              <span class="js-copy-icon" aria-hidden="true">${icons.copy}</span>
              <span class="js-copy-label" ${tx('contact.copy')}>${t('contact.copy')}</span>
            </button>
          </li>

          <li class="contact__item reveal" style="--reveal-delay: 60ms">
            <a class="contact__card" href="${profile.links.github}" target="_blank" rel="noopener noreferrer">
              <span class="contact__icon" aria-hidden="true">${icons.github}</span>
              <span class="contact__label" ${tx('contact.github')}>${t('contact.github')}</span>
              <span class="contact__value">${profile.handle}</span>
            </a>
          </li>

          <li class="contact__item reveal" style="--reveal-delay: 120ms">
            <a class="contact__card" href="${profile.links.linkedin}" target="_blank" rel="noopener noreferrer">
              <span class="contact__icon" aria-hidden="true">${icons.linkedin}</span>
              <span class="contact__label" ${tx('contact.linkedin')}>${t('contact.linkedin')}</span>
              <span class="contact__value">${profile.name}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  `;
}

export function initContact(): void {
  const button = qs<HTMLButtonElement>('.js-copy-email');
  if (!button) return;

  const icon = qs('.js-copy-icon', button);
  const label = qs('.js-copy-label', button);
  let resetTimer: number | undefined;

  button.addEventListener('click', async () => {
    const copied = await copyEmail();
    if (!copied) return;

    button.classList.add('is-copied');
    if (icon) icon.innerHTML = icons.check;
    if (label) {
      label.removeAttribute('data-i18n');
      label.textContent = t('contact.copied');
    }

    window.clearTimeout(resetTimer);
    resetTimer = window.setTimeout(() => {
      button.classList.remove('is-copied');
      if (icon) icon.innerHTML = icons.copy;
      if (label) {
        label.setAttribute('data-i18n', 'contact.copy');
        label.textContent = t('contact.copy');
      }
    }, 2000);
  });
}
