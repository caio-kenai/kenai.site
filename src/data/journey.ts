import type { JourneyEntry } from './types';

/** Trajetoria em ordem cronologica inversa. */
export const journey: JourneyEntry[] = [
  {
    id: 'playlist-tecnico',
    kind: 'work',
    org: 'Playlist Software Solutions',
    title: { pt: 'Técnico de Suporte Júnior', en: 'Junior Support Technician' },
    period: { pt: 'dez 2025 — o momento · tempo integral', en: 'Dec 2025 — present · full-time' },
    location: {
      pt: 'Ipatinga, Minas Gerais, Brasil · Presencial',
      en: 'Ipatinga, Minas Gerais, Brazil · On-site',
    },
    current: true,
    description: {
      pt: 'Atuo predominantemente no setor de Desenvolvimento de Software — o suporte ficou restrito a demandas de alta complexidade, como conversões de bancos de dados e solicitações diretas da gestão. Meu foco atual é uma aplicação de inteligência artificial para radiodifusão: automação de locuções, gestão de feeds RSS e clonagem de vozes para programação. Nela lidero a frente de front-end com TypeScript, React e Vite, com validação em Zod, estado e tabelas em TanStack Query/Table e comunicação via Axios. Em paralelo atuo no back-end com C#, .NET e SQL, construindo CRUDs e integrando a aplicação ao ecossistema AWS da empresa.',
      en: 'I work mainly in the Software Development area — support is now limited to high-complexity demands such as database conversions and requests coming straight from management. My current focus is an AI application for broadcasting: voice-over automation, RSS feed management and voice cloning for programming. On it I lead the front-end with TypeScript, React and Vite, with Zod validation, state and tables through TanStack Query/Table and data communication via Axios. In parallel I work on the back-end with C#, .NET and SQL, building CRUDs and integrating the application into the company AWS ecosystem.',
    },
    tags: [
      'TypeScript',
      'React',
      'Vite',
      'Tailwind CSS',
      'Zod',
      'TanStack Query',
      'Axios',
      'C#',
      '.NET',
      'SQL',
      'AWS',
    ],
  },
  {
    id: 'playlist-estagio',
    kind: 'work',
    org: 'Playlist Software Solutions',
    title: { pt: 'Estagiário de T.I', en: 'IT Intern' },
    period: { pt: 'mar 2025 — dez 2025 · 10 meses', en: 'Mar 2025 — Dec 2025 · 10 months' },
    location: {
      pt: 'Ipatinga, Minas Gerais, Brasil · Presencial',
      en: 'Ipatinga, Minas Gerais, Brazil · On-site',
    },
    description: {
      pt: 'Atendi demandas do suporte técnico e do desenvolvimento, além de tarefas de vendas para entender o licenciamento dos produtos. No suporte, aprofundei análise técnica e diagnóstico em todas as aplicações da empresa — locais, hospedadas e em nuvem —, com correções diretas em estrutura e dados, e em infraestrutura de redes, firewall, workgroups, segurança e compartilhamento. Evoluí em tecnologia de áudio, atendendo Playlist Digital e Aires Studio, e nos sistemas financeiros Smart Manager, Commercial e Planner. No desenvolvimento, corrigi bugs e implementei funcionalidades no Tocou 2.0 — front-end em Vue.js e TypeScript, back-end em C# e .NET sob arquitetura DDD — e construí toda a estrutura base do front-end de uma solução de IA com React e TypeScript. Também realizei conversões de bancos vindos de sistemas externos, com a documentação completa, e criei sistemas de IA com LangChain, LangGraph e CrewAI.',
      en: 'I handled demands from both technical support and development, plus sales tasks to understand product licensing. In support I deepened technical analysis and diagnostics across every company application — local, hosted and cloud — with direct fixes to structure and data, and in network infrastructure, firewall, workgroups, security and file sharing. I grew in audio technology, supporting Playlist Digital and Aires Studio, and in the financial systems Smart Manager, Commercial and Planner. In development I fixed bugs and shipped features on Tocou 2.0 — Vue.js and TypeScript on the front-end, C# and .NET under a DDD architecture on the back-end — and built the entire front-end foundation of an AI solution with React and TypeScript. I also carried out database conversions from external systems, with full documentation, and built AI systems with LangChain, LangGraph and CrewAI.',
    },
    tags: [
      'Vue.js',
      'TypeScript',
      'React',
      'C#',
      '.NET',
      'DDD',
      'SQL',
      'LangChain',
      'LangGraph',
      'CrewAI',
      'Redes',
    ],
  },
  {
    id: 'pso',
    kind: 'work',
    org: 'PSO Engenharia Elétrica',
    title: { pt: 'Estagiário de T.I', en: 'IT Intern' },
    period: { pt: 'mar 2021 — ago 2021 · 6 meses', en: 'Mar 2021 — Aug 2021 · 6 months' },
    location: {
      pt: 'Ipatinga, Minas Gerais, Brasil · Presencial',
      en: 'Ipatinga, Minas Gerais, Brazil · On-site',
    },
    description: {
      pt: 'Participei de treinamentos e cursos voltados ao desenvolvimento full stack, com foco na construção de REST APIs e em operações CRUD. Aprimorei minha lógica de programação e construí uma base sólida em JavaScript, aplicando o ecossistema na prática com Node.js e Express na criação de APIs e Angular no front-end. Também tive contato com versionamento com Git, consumo de APIs, organização de código e os padrões fundamentais do desenvolvimento web moderno.',
      en: 'I took part in training and courses focused on full stack development, centred on building REST APIs and CRUD operations. I sharpened my programming logic and built a solid JavaScript foundation, applying the ecosystem in practice with Node.js and Express for APIs and Angular on the front-end. I also worked with Git version control, API consumption, code organisation and the core patterns of modern web development.',
    },
    tags: ['JavaScript', 'Node.js', 'Express', 'Angular', 'REST APIs', 'Git'],
  },
  {
    id: 'puc-minas',
    kind: 'education',
    org: 'PUC Minas',
    title: {
      pt: 'Pós-graduação em Engenharia de Software',
      en: 'Postgraduate degree in Software Engineering',
    },
    period: { pt: 'Em andamento', en: 'In progress' },
    current: true,
    description: {
      pt: 'Especialização em engenharia de software, para transformar em método o que hoje eu resolvo na prática: arquitetura, qualidade e as decisões que sustentam um sistema depois que ele entra em produção.',
      en: 'A specialisation in software engineering, to turn into method what I currently solve in practice: architecture, quality and the decisions that hold a system together once it is in production.',
    },
  },
  {
    id: 'doctum',
    kind: 'education',
    org: 'Rede de Ensino Doctum',
    title: { pt: 'Sistemas de Informação', en: 'Information Systems' },
    period: { pt: 'jan 2020 — mar 2025 · formado', en: 'Jan 2020 — Mar 2025 · graduated' },
    description: {
      pt: 'Graduação em Sistemas de Informação. É de onde vem a base que sustenta o resto: estruturas de dados, engenharia de software, análise de sistemas, banco de dados e projeto de redes de computadores — a teoria que eu passei os anos seguintes aplicando em sistemas de verdade.',
      en: 'Information Systems degree. This is where the foundation under everything else comes from: data structures, software engineering, systems analysis, databases and computer network design — the theory I spent the following years applying to real systems.',
    },
  },
  {
    id: 'fisk',
    kind: 'education',
    org: 'Fisk — Centro de Ensino',
    title: {
      pt: 'Inglês Fluente/Nativo — English Language and Literature',
      en: 'Fluent/Native English — English Language and Literature',
    },
    period: { pt: 'jan 2010 — abr 2017 · formado', en: 'Jan 2010 — Apr 2017 · graduated' },
    description: {
      pt: 'Sete anos de formação em língua inglesa, concluída com certificação. É o que me permite ler documentação, issue e código-fonte na origem, sem intermediário — e é por isso que este site existe em dois idiomas.',
      en: 'Seven years of English language education, completed with certification. It is what lets me read documentation, issues and source code at the source, with no middleman — and it is why this site exists in two languages.',
    },
  },
];
