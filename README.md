# kenai.dev

Portfólio pessoal de **Caio Oliveira Pacífico**, publicado em [kenai.site](https://kenai.site).

Página única, bilíngue (PT-BR / EN), com tema claro e escuro. Sem framework de interface e sem
nenhuma requisição a terceiros: as fontes são servidas pelo próprio domínio, os ícones são SVG
embutidos no bundle e não há CDN, analytics nem cookies.

## Stack

| Camada | Escolha |
| --- | --- |
| Build | [Vite](https://vite.dev) |
| Linguagem | TypeScript em modo estrito |
| Interface | DOM nativo, sem framework |
| Estilo | CSS puro com custom properties |
| Dependências de runtime | nenhuma |

## Como rodar

```bash
npm install
npm run dev        # servidor de desenvolvimento em http://localhost:5173
npm run build      # checagem de tipos e build de produção em dist/
npm run preview    # serve o resultado do build
npm run typecheck  # apenas a checagem de tipos
```

O build gera arquivos estáticos em `dist/`.

## Estrutura

```
src/
  data/        conteúdo do site (perfil, stack, homelab, jornada, projetos, traduções)
  lib/         estado, traduções, paleta de comandos, revelação ao rolar, ícones, sprites
  sections/    uma função de renderização por seção
  styles/      tokens de design e estilo por seção
public/
  fonts/       fontes em woff2
  icons/       logos de tecnologias e serviços
  sprites/     personagens em pixel art
```

Todo o conteúdo fica em `src/data`. As seções apenas leem esses arquivos, então editar o site não
exige mexer em marcação.

### Adicionar um projeto

Acrescente um objeto a `src/data/projects.ts`. A grade, os filtros por categoria e o estado vazio
se ajustam sozinhos:

```ts
{
  id: 'meu-projeto',
  name: 'Meu Projeto',
  category: 'web',
  summary: { pt: 'O que o projeto faz.', en: 'What the project does.' },
  tech: ['TypeScript', 'Node.js'],
  repo: 'https://github.com/caio-kenai/meu-projeto',
}
```

### Adicionar um idioma

As chaves de texto ficam em `src/data/i18n.ts`. O tipo `StringKey` garante em tempo de compilação
que nenhum idioma fique com chave faltando.

## Troca de idioma sem remontar o DOM

Os elementos carregam `data-i18n` para chaves de tradução ou `data-t-pt` e `data-t-en` para texto
vindo dos dados. Na troca, só o conteúdo de texto é substituído, então a posição da rolagem, o foco
e as animações já disparadas continuam de pé.

## Acessibilidade

- Navegação completa por teclado, incluindo a paleta de comandos (`Ctrl` + `K`)
- Link para pular direto ao conteúdo principal
- Estados de foco visíveis em todos os controles
- `prefers-reduced-motion` desliga as animações
- Contraste das cores verificado nos dois temas

## Publicação

O build é estático e serve em qualquer hospedagem de arquivos. O domínio `kenai.site` responde pelo
site, e os projetos futuros ficam em subdomínios.

## Licença

O código está sob a [GNU Affero General Public License v3](LICENSE). Leia, estude, adapte e use como
base do seu próprio portfólio. A única exigência é que, se você modificar e hospedar o resultado
publicamente, o código-fonte da sua versão fique disponível para quem usa aquele servidor. É a mesma
licença do Nextcloud e do Immich, dois dos serviços que rodam no meu homelab.

A ilustração, o texto biográfico, os sprites e a marca **não** estão cobertos pela licença. O
[NOTICE](NOTICE) detalha o que é código livre e o que é conteúdo reservado, além dos créditos de
fontes, ícones e personagens de terceiros.
