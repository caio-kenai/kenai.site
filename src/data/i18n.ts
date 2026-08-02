import type { Lang } from './types';

const pt = {
  /* navegação */
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

  /* hero */
  'hero.eyebrow': 'Desenvolvimento, software livre e self-hosting',
  'hero.title.a': 'Código, rede e dados',
  'hero.title.b': 'sob meu controle',
  'hero.lead':
    'Sou o Caio. Escrevo software e mantenho meu próprio servidor rodando o que antes eu deixava na mão dos outros. Gosto de construir coisas que funcionam bem e ainda por cima têm personalidade.',
  'hero.cta.primary': 'Ver o homelab',
  'hero.cta.secondary': 'Falar comigo',
  'hero.terminal.command': 'systemctl status --user',
  'hero.terminal.state': 'active (running)',
  'hero.terminal.more': 'outros serviços no homelab',
  'hero.terminal.note': 'Serviços rodando na minha própria infraestrutura.',
  'hero.scroll': 'Role para continuar',

  /* sobre */
  'about.label': 'Sobre',
  'about.title': 'Quem está do outro lado do terminal',
  'about.p1':
    'Minha relação com a tecnologia começou cedo, ainda na época dos computadores Pentium, da internet discada e das intermináveis horas esperando um jogo, anime ou filme terminar de baixar. O que começou como curiosidade acabou se transformando em vontade de entender como as coisas funcionavam e, mais tarde, em paixão pelo desenvolvimento de software.',
  'about.p2':
    'Gosto de criar soluções úteis, explorar novas tecnologias e desenvolver projetos que tenham personalidade. Tenho um interesse especial por software livre, projetos open source, self-hosting, segurança e privacidade. Para mim, programar não é apenas fazer algo funcionar. Também envolve organização, boas práticas, clean code e o cuidado de transformar ideias em experiências simples, bonitas e eficientes.',
  'about.p3':
    'Fora do código, grande parte da minha personalidade vem das coisas que sempre fizeram parte da minha vida. Sou apaixonado por videogames desde o Nintendo 64, com jogos como The Legend of Zelda: Ocarina of Time, Majora’s Mask e Star Fox 64, além de franquias como Pokémon e Mega Man. Também gosto muito de animes, mangás, metalcore e dificilmente começo algum projeto sem café ou uma lata de Monster por perto.',
  'about.p4':
    'No fim, meu trabalho acaba sendo uma mistura de tudo isso: tecnologia, criatividade, curiosidade e um pouco das referências que me acompanharam ao longo da vida. Estou sempre procurando aprender algo novo, experimentar ideias diferentes e desenvolver projetos que não apenas funcionem bem, mas que também transmitam um pouco de quem eu sou.',
  'about.stats.since': 'Primeiro estágio em T.I',
  'about.stats.services': 'Serviços self-hosted',
  'about.stats.stack': 'Tecnologias na stack',
  'about.stats.langs': 'Idiomas fluentes',
  'about.interests': 'Fora do código',

  /* stack */
  'stack.label': 'Stack',
  'stack.title': 'As ferramentas que eu realmente uso',
  'stack.desc':
    'Sem barra de porcentagem e sem nota de autoavaliação, porque esse número não significa nada. Aqui está o que eu uso para construir e sustentar software.',
  'stack.alongside': 'Também no dia a dia',
  'stack.foundations': 'Base teórica',

  /* homelab */
  'homelab.label': 'Homelab',
  'homelab.title': 'O servidor é meu. Os dados também.',
  'homelab.desc':
    'Software livre deixou de ser hobby e virou infraestrutura. Cada serviço aqui substitui um produto de terceiro que eu prefiro não alimentar com os meus dados, e cada um me ensinou alguma coisa sobre rede, container ou backup no caminho.',
  'homelab.hosted': 'Serviços que eu hospedo',
  'homelab.daily': 'Software livre no dia a dia',
  'homelab.note':
    'Este site segue a mesma regra: fontes self-hosted, sem CDN, sem analytics e sem uma única requisição a terceiros.',

  /* projetos */
  'projects.label': 'Projetos',
  'projects.title': 'O que eu construo',
  'projects.desc':
    'Prefiro publicar poucos projetos que realmente representem meu trabalho a encher esta página. Estou reformulando o que vale a pena mostrar aqui.',
  'projects.filter.all': 'Todos',
  'projects.empty.title': 'Em construção',
  'projects.empty.text':
    'Nada publicado por enquanto, e isso é por escolha. Enquanto isso, o código que eu escrevo fica aberto no GitHub, inclusive o deste site.',
  'projects.empty.cta': 'Ver o GitHub',
  'projects.repo': 'Repositório',
  'projects.demo': 'Demonstração',
  'projects.goal': 'Objetivo',
  'projects.role': 'Meu papel',

  /* jornada */
  'journey.label': 'Jornada',
  'journey.title': 'Como eu cheguei até aqui',
  'journey.desc': 'Experiência profissional e formação, do mais recente ao mais antigo.',
  'journey.work': 'Experiência',
  'journey.education': 'Formação',
  'journey.current': 'Atual',
  'journey.ongoing': 'Próximo passo',

  /* contato */
  'contact.label': 'Contato',
  'contact.title': 'Abra um canal',
  'contact.desc':
    'Aberto a oportunidades, a dúvidas sobre self-hosting ou só para trocar ideia sobre código. Respondo em português ou inglês.',
  'contact.email': 'E-mail',
  'contact.github': 'GitHub',
  'contact.linkedin': 'LinkedIn',
  'contact.copy': 'Copiar e-mail',
  'contact.copied': 'Copiado',

  /* rodapé */
  'footer.built': 'Escrito, versionado e hospedado por mim.',
  'footer.source': 'Código-fonte',
  'footer.license': 'Código sob AGPL-3.0',
  'footer.privacy': 'Sem cookies, sem rastreadores, sem requisições a terceiros.',

  /* paleta de comandos */
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
  /* navigation */
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

  /* hero */
  'hero.eyebrow': 'Development, open source and self-hosting',
  'hero.title.a': 'Code, network and data',
  'hero.title.b': 'under my control',
  'hero.lead':
    "I'm Caio. I write software and keep my own server running the things I used to leave in other people's hands. I like building stuff that works well and still has some personality to it.",
  'hero.cta.primary': 'See the homelab',
  'hero.cta.secondary': 'Get in touch',
  'hero.terminal.command': 'systemctl status --user',
  'hero.terminal.state': 'active (running)',
  'hero.terminal.more': 'more services in the homelab',
  'hero.terminal.note': 'Services running on my own infrastructure.',
  'hero.scroll': 'Scroll to continue',

  /* about */
  'about.label': 'About',
  'about.title': "Who's on the other side of the terminal",
  'about.p1':
    'My relationship with technology started early, back in the days of Pentium computers, dial-up internet and endless hours waiting for a game, an anime or a movie to finish downloading. What began as curiosity turned into wanting to understand how things worked and, later on, into a passion for building software.',
  'about.p2':
    'I like creating useful solutions, exploring new technologies and building projects that have a personality of their own. I have a particular interest in free software, open source, self-hosting, security and privacy. To me, programming is not just about making something work. It also involves organisation, good practices, clean code and the care of turning ideas into experiences that are simple, good looking and efficient.',
  'about.p3':
    "Outside of code, a lot of who I am comes from the things that have always been part of my life. I have loved video games since the Nintendo 64, with titles like The Legend of Zelda: Ocarina of Time, Majora's Mask and Star Fox 64, plus franchises like Pokémon and Mega Man. I am also deep into anime, manga and metalcore, and I rarely start a project without coffee or a can of Monster nearby.",
  'about.p4':
    'In the end, my work turns out to be a mix of all that: technology, creativity, curiosity and a bit of the references that have followed me through life. I am always looking to learn something new, try out different ideas and build projects that not only work well, but also say something about who I am.',
  'about.stats.since': 'First IT internship',
  'about.stats.services': 'Self-hosted services',
  'about.stats.stack': 'Technologies in the stack',
  'about.stats.langs': 'Fluent languages',
  'about.interests': 'Outside the code',

  /* stack */
  'stack.label': 'Stack',
  'stack.title': 'The tools I actually use',
  'stack.desc':
    'No percentage bars and no self-assessed scores, because that number means nothing. Here is what I use to build and run software.',
  'stack.alongside': 'Also part of the day',
  'stack.foundations': 'Foundations',

  /* homelab */
  'homelab.label': 'Homelab',
  'homelab.title': 'The server is mine. So is the data.',
  'homelab.desc':
    'Open source stopped being a hobby and became infrastructure. Every service here replaces a third-party product I would rather not feed with my own data, and each one taught me something about networking, containers or backups along the way.',
  'homelab.hosted': 'Services I host',
  'homelab.daily': 'Open source I use daily',
  'homelab.note':
    'This site follows the same rule: self-hosted fonts, no CDN, no analytics and not a single third-party request.',

  /* projects */
  'projects.label': 'Projects',
  'projects.title': 'What I build',
  'projects.desc':
    'I would rather publish a few projects that genuinely represent my work than fill this page. I am rethinking what is worth showing here.',
  'projects.filter.all': 'All',
  'projects.empty.title': 'Under construction',
  'projects.empty.text':
    'Nothing published yet, and that is on purpose. In the meantime, the code I write stays open on GitHub, including this site.',
  'projects.empty.cta': 'Visit my GitHub',
  'projects.repo': 'Repository',
  'projects.demo': 'Live demo',
  'projects.goal': 'Goal',
  'projects.role': 'My role',

  /* journey */
  'journey.label': 'Journey',
  'journey.title': 'How I got here',
  'journey.desc': 'Professional experience and education, most recent first.',
  'journey.work': 'Experience',
  'journey.education': 'Education',
  'journey.current': 'Current',
  'journey.ongoing': 'Next step',

  /* contact */
  'contact.label': 'Contact',
  'contact.title': 'Open a channel',
  'contact.desc':
    'Open to opportunities, to self-hosting questions or just to talk about code. I reply in Portuguese or English.',
  'contact.email': 'Email',
  'contact.github': 'GitHub',
  'contact.linkedin': 'LinkedIn',
  'contact.copy': 'Copy email',
  'contact.copied': 'Copied',

  /* footer */
  'footer.built': 'Written, versioned and hosted by me.',
  'footer.source': 'Source code',
  'footer.license': 'Code under AGPL-3.0',
  'footer.privacy': 'No cookies, no trackers, no third-party requests.',

  /* command palette */
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

/** Traduz uma chave no idioma informado. */
export function translate(lang: Lang, key: StringKey): string {
  return dictionaries[lang][key];
}

/** Interesses exibidos na seção "sobre". */
export const interests: Record<Lang, string[]> = {
  pt: [
    'Videogames',
    'Pixel art',
    'RPG',
    'Anime e mangá',
    'Metalcore',
    'Software livre',
    'Privacidade',
    'Self-hosting',
  ],
  en: [
    'Video games',
    'Pixel art',
    'RPG',
    'Anime and manga',
    'Metalcore',
    'Open source',
    'Privacy',
    'Self-hosting',
  ],
};
