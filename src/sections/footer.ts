import { profile } from '../data/profile';
import { icons } from '../lib/icons';
import { t, tx } from '../lib/dom';

export function renderFooter(): string {
  const year = new Date().getFullYear();

  return `
    <footer class="footer">
      <div class="shell footer__inner">
        <div class="footer__brand">
          <a class="footer__logo" href="#topo">
            ${profile.brandName}<span class="footer__tld">${profile.brandTld}</span>
          </a>
          <p class="footer__built" ${tx('footer.built')}>${t('footer.built')}</p>
        </div>

        <ul class="footer__links">
          <li>
            <a href="${profile.links.github}" target="_blank" rel="noopener noreferrer">
              <span aria-hidden="true">${icons.github}</span> GitHub
            </a>
          </li>
          <li>
            <a href="${profile.links.linkedin}" target="_blank" rel="noopener noreferrer">
              <span aria-hidden="true">${icons.linkedin}</span> LinkedIn
            </a>
          </li>
          <li>
            <a href="${profile.links.repo}" target="_blank" rel="noopener noreferrer">
              <span aria-hidden="true">${icons.terminal}</span>
              <span ${tx('footer.source')}>${t('footer.source')}</span>
            </a>
          </li>
        </ul>

        <div class="footer__meta">
          <p class="footer__privacy" ${tx('footer.privacy')}>${t('footer.privacy')}</p>
          <p class="footer__legal">
            <span>© ${year} ${profile.name}</span>
            <span class="footer__sep" aria-hidden="true">·</span>
            <!-- A AGPL pede que a interface diga sob qual licenca o programa
                 esta e como ler uma copia dela. -->
            <a
              class="footer__license"
              href="${profile.links.repo}/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer license"
              ${tx('footer.license')}
              >${t('footer.license')}</a
            >
          </p>
        </div>
      </div>
    </footer>
  `;
}
