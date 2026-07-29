import type { Lang } from './types';

const pt = {
  /* -- navegacao -- */
  'nav.aria': 'Navegação principal',
  'nav.about': 'Sobre',
  'nav.stack': 'Stack',
  'nav.homelab': 'Homelab',
  'nav.projects': 'Projetos',
  'nav.journey': 'Jornada',
  'nav.contact': 'Contato',
  'nav.menu.open': 'Abrir menu',
  'nav.menu.close': 'Fechar menu',
  'nav.theme.toDark': 'Mudar para tema escuro',
  'nav.theme.toLight': 'Mudar para tema claro',
  'nav.lang': 'Switch to English',
  'nav.search': 'Buscar',

  /* -- hero -- */
  'hero.eyebrow': 'Suporte técnico → desenvolvimento full stack',
  'hero.title.a': 'Código, rede e dados',
  'hero.title.b': 'sob meu controle',
  'hero.lead':
    'Sou o Caio. Na Playlist Software Solutions eu lidero a frente de front-end de uma aplicação de IA para radiodifusão e também atuo no back-end dela. Fora do expediente eu mantenho meu próprio homelab — porque software aberto e dados sob meu controle não são detalhe, são o ponto de partida.',
  'hero.cta.primary': 'Ver o homelab',
  'hero.cta.secondary': 'Falar comigo',
  'hero.terminal.command': 'systemctl status --user',
  'hero.terminal.state': 'active (running)',
  'hero.terminal.note': 'Serviços rodando na minha própria infraestrutura.',
  'hero.scroll': 'Role para continuar',

  /* -- sobre -- */
  'about.label': 'Sobre',
  'about.title': 'Quem está do outro lado do terminal',
  'about.p1':
    'Comecei em 2021, num estágio de T.I onde aprendi a construir REST API com Node e montar interface com Angular. De lá pra cá o caminho passou por suporte técnico, banco de dados, redes e, mais recentemente, agentes de IA.',
  'about.p2':
    'Hoje, na Playlist Software Solutions, lidero a frente de front-end de uma aplicação de IA para radiodifusão e atuo também no back-end dela. Na prática é o que eu queria: entender a aplicação de ponta a ponta — a query, o endpoint, o componente, o container e o DNS que aponta para ele.',
  'about.p3':
    'O resto do meu tempo se divide entre jogos, música, anime e um servidor que eu insisto em quebrar e consertar de novo. Aprendi mais administrando meu homelab do que em qualquer playlist de tutorial.',
  'about.stats.since': 'Primeiro estágio em T.I',
  'about.stats.services': 'Serviços self-hosted',
  'about.stats.stack': 'Tecnologias na stack',
  'about.stats.langs': 'Idiomas fluentes',
  'about.interests': 'Fora do código',

  /* -- stack -- */
  'stack.label': 'Stack',
  'stack.title': 'As ferramentas que eu realmente uso',
  'stack.desc':
    'Sem barra de porcentagem e sem nota de autoavaliação — esse número não significa nada. Aqui está o que já apliquei em projeto e o que estou estudando neste momento.',
  'stack.legend.using': 'Em uso',
  'stack.legend.learning': 'Estudando',
  'stack.foundations': 'Base teórica',

  /* -- homelab -- */
  'homelab.label': 'Homelab',
  'homelab.title': 'O servidor é meu. Os dados também.',
  'homelab.desc':
    'Software livre deixou de ser hobby e virou infraestrutura. Cada serviço aqui substitui um produto de terceiro que eu prefiro não alimentar com os meus dados — e cada um me ensinou alguma coisa sobre rede, container ou backup no caminho.',
  'homelab.hosted': 'Serviços que eu hospedo',
  'homelab.daily': 'Software livre no dia a dia',
  'homelab.note':
    'Este site segue a mesma regra: fontes self-hosted, sem CDN, sem analytics e sem uma única requisição a terceiros.',

  /* -- projetos -- */
  'projects.label': 'Projetos',
  'projects.title': 'O que eu construo',
  'projects.desc':
    'Prefiro publicar poucos projetos que realmente representem meu trabalho a encher esta página. Estou reformulando o que vale a pena mostrar aqui.',
  'projects.filter.all': 'Todos',
  'projects.empty.title': 'Em construção',
  'projects.empty.text':
    'Nada publicado por enquanto — por escolha. Enquanto isso, o código que eu escrevo fica aberto no GitHub, inclusive o deste site.',
  'projects.empty.cta': 'Ver o GitHub',
  'projects.repo': 'Repositório',
  'projects.demo': 'Demonstração',
  'projects.goal': 'Objetivo',
  'projects.role': 'Meu papel',

  /* -- jornada -- */
  'journey.label': 'Jornada',
  'journey.title': 'Como eu cheguei até aqui',
  'journey.desc': 'Experiência profissional e formação, do mais recente ao mais antigo.',
  'journey.work': 'Experiência',
  'journey.education': 'Formação',
  'journey.current': 'Atual',
  'journey.ongoing': 'Em andamento',

  /* -- contato -- */
  'contact.label': 'Contato',
  'contact.title': 'Abra um canal',
  'contact.desc':
    'Aberto a oportunidades, a dúvidas sobre self-hosting ou só para trocar ideia sobre código. Respondo em português ou inglês.',
  'contact.email': 'E-mail',
  'contact.github': 'GitHub',
  'contact.linkedin': 'LinkedIn',
  'contact.copy': 'Copiar e-mail',
  'contact.copied': 'Copiado',

  /* -- rodape -- */
  'footer.built': 'Escrito, versionado e hospedado por mim.',
  'footer.source': 'Código-fonte',
  'footer.license': 'Aberto sob licença MIT',
  'footer.privacy': 'Sem cookies, sem rastreadores, sem requisições a terceiros.',

  /* -- paleta de comandos -- */
  'palette.title': 'Paleta de comandos',
  'palette.placeholder': 'Buscar seção ou comando…',
  'palette.empty': 'Nenhum resultado',
  'palette.group.sections': 'Seções',
  'palette.group.links': 'Links',
  'palette.group.prefs': 'Preferências',
  'palette.hint.nav': 'navegar',
  'palette.hint.select': 'selecionar',
  'palette.hint.close': 'fechar',
  'palette.action.theme': 'Alternar tema claro/escuro',
  'palette.action.lang': 'Switch to English',
  'palette.action.copyEmail': 'Copiar meu e-mail',
  'palette.action.github': 'Abrir meu GitHub',
  'palette.action.linkedin': 'Abrir meu LinkedIn',
  'palette.action.source': 'Ver o código deste site',
};

const en: Record<keyof typeof pt, string> = {
  /* -- navigation -- */
  'nav.aria': 'Main navigation',
  'nav.about': 'About',
  'nav.stack': 'Stack',
  'nav.homelab': 'Homelab',
  'nav.projects': 'Projects',
  'nav.journey': 'Journey',
  'nav.contact': 'Contact',
  'nav.menu.open': 'Open menu',
  'nav.menu.close': 'Close menu',
  'nav.theme.toDark': 'Switch to dark theme',
  'nav.theme.toLight': 'Switch to light theme',
  'nav.lang': 'Mudar para português',
  'nav.search': 'Search',

  /* -- hero -- */
  'hero.eyebrow': 'Technical support → full stack development',
  'hero.title.a': 'Code, network and data',
  'hero.title.b': 'under my control',
  'hero.lead':
    "I'm Caio. At Playlist Software Solutions I lead the front-end of an AI application for broadcasting and work on its back-end too. Off the clock I run my own homelab — because open software and data under my own control aren't a detail, they're the starting point.",
  'hero.cta.primary': 'See the homelab',
  'hero.cta.secondary': 'Get in touch',
  'hero.terminal.command': 'systemctl status --user',
  'hero.terminal.state': 'active (running)',
  'hero.terminal.note': 'Services running on my own infrastructure.',
  'hero.scroll': 'Scroll to continue',

  /* -- about -- */
  'about.label': 'About',
  'about.title': "Who's on the other side of the terminal",
  'about.p1':
    'I started in 2021, in an IT internship where I learned to build REST APIs with Node and interfaces with Angular. Since then the road has gone through technical support, databases, networking and, more recently, AI agents.',
  'about.p2':
    'Today, at Playlist Software Solutions, I lead the front-end of an AI application for broadcasting and work on its back-end too. In practice it is what I wanted: understanding the application end to end — the query, the endpoint, the component, the container and the DNS record pointing at it.',
  'about.p3':
    'The rest of my time is split between games, music, anime and a server I keep breaking and fixing again. I have learned more running my homelab than in any tutorial playlist.',
  'about.stats.since': 'First IT internship',
  'about.stats.services': 'Self-hosted services',
  'about.stats.stack': 'Technologies in the stack',
  'about.stats.langs': 'Fluent languages',
  'about.interests': 'Outside the code',

  /* -- stack -- */
  'stack.label': 'Stack',
  'stack.title': 'The tools I actually use',
  'stack.desc':
    'No percentage bars and no self-assessed scores — that number means nothing. Here is what I have already used in a project and what I am studying right now.',
  'stack.legend.using': 'In use',
  'stack.legend.learning': 'Learning',
  'stack.foundations': 'Foundations',

  /* -- homelab -- */
  'homelab.label': 'Homelab',
  'homelab.title': 'The server is mine. So is the data.',
  'homelab.desc':
    'Open source stopped being a hobby and became infrastructure. Every service here replaces a third-party product I would rather not feed with my own data — and each one taught me something about networking, containers or backups along the way.',
  'homelab.hosted': 'Services I host',
  'homelab.daily': 'Open source I use daily',
  'homelab.note':
    'This site follows the same rule: self-hosted fonts, no CDN, no analytics and not a single third-party request.',

  /* -- projects -- */
  'projects.label': 'Projects',
  'projects.title': 'What I build',
  'projects.desc':
    'I would rather publish a few projects that genuinely represent my work than fill this page. I am rethinking what is worth showing here.',
  'projects.filter.all': 'All',
  'projects.empty.title': 'Under construction',
  'projects.empty.text':
    'Nothing published yet — on purpose. In the meantime, the code I write stays open on GitHub, including this site.',
  'projects.empty.cta': 'Visit my GitHub',
  'projects.repo': 'Repository',
  'projects.demo': 'Live demo',
  'projects.goal': 'Goal',
  'projects.role': 'My role',

  /* -- journey -- */
  'journey.label': 'Journey',
  'journey.title': 'How I got here',
  'journey.desc': 'Professional experience and education, most recent first.',
  'journey.work': 'Experience',
  'journey.education': 'Education',
  'journey.current': 'Current',
  'journey.ongoing': 'In progress',

  /* -- contact -- */
  'contact.label': 'Contact',
  'contact.title': 'Open a channel',
  'contact.desc':
    'Open to opportunities, to self-hosting questions or just to talk about code. I reply in Portuguese or English.',
  'contact.email': 'Email',
  'contact.github': 'GitHub',
  'contact.linkedin': 'LinkedIn',
  'contact.copy': 'Copy email',
  'contact.copied': 'Copied',

  /* -- footer -- */
  'footer.built': 'Written, versioned and hosted by me.',
  'footer.source': 'Source code',
  'footer.license': 'Open under the MIT license',
  'footer.privacy': 'No cookies, no trackers, no third-party requests.',

  /* -- command palette -- */
  'palette.title': 'Command palette',
  'palette.placeholder': 'Search a section or command…',
  'palette.empty': 'No results',
  'palette.group.sections': 'Sections',
  'palette.group.links': 'Links',
  'palette.group.prefs': 'Preferences',
  'palette.hint.nav': 'navigate',
  'palette.hint.select': 'select',
  'palette.hint.close': 'close',
  'palette.action.theme': 'Toggle light/dark theme',
  'palette.action.lang': 'Mudar para português',
  'palette.action.copyEmail': 'Copy my email',
  'palette.action.github': 'Open my GitHub',
  'palette.action.linkedin': 'Open my LinkedIn',
  'palette.action.source': "See this site's code",
};

export type StringKey = keyof typeof pt;

const dictionaries: Record<Lang, Record<StringKey, string>> = { pt, en };

/** Traduz uma chave para o idioma informado. */
export function translate(lang: Lang, key: StringKey): string {
  return dictionaries[lang][key];
}

/** Interesses exibidos na secao "sobre". */
export const interests: Record<Lang, string[]> = {
  pt: [
    'Programação',
    'Software livre',
    'Privacidade',
    'Redes',
    'Jogos',
    'Música',
    'Anime',
    'Cultura japonesa',
  ],
  en: [
    'Programming',
    'Open source',
    'Privacy',
    'Networking',
    'Games',
    'Music',
    'Anime',
    'Japanese culture',
  ],
};
