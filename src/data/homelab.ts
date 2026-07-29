import type { HomelabEntry } from './types';

/**
 * Servicos que eu mesmo hospedo. Cada um substitui um servico de terceiros
 * por uma alternativa aberta rodando na minha propria infraestrutura.
 */
export const selfHosted: HomelabEntry[] = [
  {
    name: 'Nextcloud',
    role: { pt: 'Arquivos, agenda e contatos', en: 'Files, calendar and contacts' },
    domain: { pt: 'Nuvem pessoal', en: 'Personal cloud' },
    url: 'https://nextcloud.com',
  },
  {
    name: 'Immich',
    role: { pt: 'Backup e galeria de fotos e vídeos', en: 'Photo and video backup and gallery' },
    domain: { pt: 'Mídia', en: 'Media' },
    url: 'https://immich.app',
  },
  {
    name: 'Bitwarden',
    role: { pt: 'Cofre de senhas e segredos', en: 'Password and secrets vault' },
    domain: { pt: 'Segurança', en: 'Security' },
    url: 'https://bitwarden.com',
  },
  {
    name: 'Syncthing',
    role: {
      pt: 'Sincronização contínua de arquivos entre dispositivos',
      en: 'Continuous file sync across devices',
    },
    domain: { pt: 'Sincronização', en: 'Sync' },
    url: 'https://syncthing.net',
  },
  {
    name: 'NetBird',
    role: {
      pt: 'Rede mesh privada sobre WireGuard',
      en: 'Private mesh network over WireGuard',
    },
    domain: { pt: 'Rede', en: 'Network' },
    url: 'https://netbird.io',
  },
  {
    name: 'Unbound',
    role: {
      pt: 'Resolvedor DNS recursivo próprio',
      en: 'Own recursive DNS resolver',
    },
    domain: { pt: 'DNS', en: 'DNS' },
    url: 'https://nlnetlabs.nl/projects/unbound',
  },
  {
    name: 'RustDesk',
    role: { pt: 'Acesso remoto com servidor próprio', en: 'Remote access with self-run server' },
    domain: { pt: 'Acesso remoto', en: 'Remote access' },
    url: 'https://rustdesk.com',
  },
  {
    name: 'OnlyOffice',
    role: { pt: 'Suíte de documentos colaborativa', en: 'Collaborative document suite' },
    domain: { pt: 'Produtividade', en: 'Productivity' },
    url: 'https://www.onlyoffice.com',
  },
];

/**
 * Software livre que uso no dia a dia. Roda localmente, nao e servico
 * hospedado — por isso fica separado da lista acima.
 */
export const dailyDrivers: HomelabEntry[] = [
  {
    name: 'Firefox',
    role: { pt: 'Navegador principal', en: 'Main browser' },
    domain: { pt: 'Navegador', en: 'Browser' },
    url: 'https://www.mozilla.org/firefox',
  },
  {
    name: 'Thunderbird',
    role: { pt: 'Cliente de e-mail e calendário', en: 'Email and calendar client' },
    domain: { pt: 'E-mail', en: 'Email' },
    url: 'https://www.thunderbird.net',
  },
  {
    name: 'Handy',
    role: {
      pt: 'Transcrição de voz totalmente offline',
      en: 'Fully offline speech-to-text',
    },
    domain: { pt: 'Offline', en: 'Offline' },
    url: 'https://handy.computer',
  },
];

export const selfHostedCount = selfHosted.length;
