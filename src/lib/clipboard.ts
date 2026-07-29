import { profile } from '../data/profile';

/**
 * Copia um texto para a area de transferencia. Usa a Clipboard API quando
 * disponivel e recorre a um campo temporario nos contextos em que ela nao
 * existe (http sem TLS, navegadores mais antigos).
 */
export async function copyText(value: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(value);
      return true;
    }
  } catch {
    // Permissao negada: cai para o metodo alternativo abaixo.
  }

  try {
    const field = document.createElement('textarea');
    field.value = value;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.appendChild(field);
    field.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(field);
    return ok;
  } catch {
    return false;
  }
}

export function copyEmail(): Promise<boolean> {
  return copyText(profile.email);
}
