# kenai.dev

Portfolio pessoal de **Caio Oliveira Pacifico**, publicado em [kenai.site](https://kenai.site).

Uma pagina unica, bilingue (PT-BR / EN), com tema claro e escuro, construida sem framework de
interface e sem nenhuma requisicao a terceiros: as fontes sao servidas pelo proprio dominio, os
icones sao SVG embutidos no bundle e nao ha CDN, analytics nem cookies.

## Stack

| Camada | Escolha |
| --- | --- |
| Build | [Vite](https://vite.dev) |
| Linguagem | TypeScript em modo estrito |
| Interface | DOM nativo, sem framework |
| Estilo | CSS puro com custom properties |
| Dependencias de runtime | nenhuma |

## Como rodar

```bash
npm install
npm run dev        # servidor de desenvolvimento em http://localhost:5173
npm run build      # checagem de tipos + build de producao em dist/
npm run preview    # serve o resultado do build
npm run typecheck  # apenas a checagem de tipos
```

O build gera arquivos estaticos em `dist/`, sem dependencia de servidor de aplicacao.

## Estrutura

```
src/
  data/        conteudo do site (perfil, stack, homelab, jornada, projetos, traducoes)
  lib/         estado, traducoes, paleta de comandos, revelacao ao rolar, icones
  sections/    uma funcao de renderizacao por secao da pagina
  styles/      tokens de design e estilo por secao
public/
  fonts/       fontes self-hosted em woff2
```

Todo o conteudo vive em `src/data`. As secoes apenas leem esses arquivos, entao editar o site nao
exige mexer em marcacao.

### Adicionar um projeto

Basta acrescentar um objeto a `src/data/projects.ts`. A grade, os filtros por categoria e o estado
vazio se ajustam sozinhos:

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

As chaves de texto ficam em `src/data/i18n.ts`. O tipo `StringKey` garante em tempo de compilacao
que nenhum idioma fique com chave faltando.

## Traducao sem reconstruir a pagina

Trocar o idioma nao remonta a arvore do DOM. Os elementos carregam `data-i18n` (chave de traducao)
ou `data-t-pt` / `data-t-en` (texto vindo dos dados), e apenas o conteudo de texto e substituido.
Assim a posicao da rolagem, o foco e as animacoes ja disparadas sao preservados.

## Acessibilidade

- Navegacao completa por teclado, incluindo a paleta de comandos (`Ctrl` + `K`)
- Link para pular direto ao conteudo principal
- Estados de foco visiveis em todos os controles
- `prefers-reduced-motion` desliga as animacoes
- Paleta de cores com contraste verificado nos dois temas

## Publicacao

O resultado do build e estatico, entao serve em qualquer hospedagem de arquivos. O dominio
`kenai.site` responde pelo site, e os projetos futuros ficam em subdominios.

## Licenca

O codigo esta sob a [GNU Affero General Public License v3](LICENSE). Leia, estude, adapte e use
como base do seu proprio portfolio. A unica exigencia e que, se voce modificar e hospedar o
resultado publicamente, o codigo-fonte da sua versao fique disponivel para quem usa aquele
servidor. E a mesma licenca do Nextcloud e do Immich, dois dos servicos que rodam no meu homelab.

A ilustracao, o texto biografico e a marca **nao** estao cobertos pela licenca. O [NOTICE](NOTICE)
detalha o que e codigo livre e o que e conteudo pessoal reservado, alem dos creditos de fontes e
icones de terceiros.
