# Brasil English Coach — Site institucional

Landing page da **Brasil English Coach**, escola de inglês online com aulas particulares para adolescentes a partir de 13 anos e adultos. O objetivo do site é apresentar a metodologia, os planos e os professores, e levar o visitante a **agendar uma aula experimental grátis**.

![Lighthouse](https://img.shields.io/badge/Lighthouse-Performance%2096%2B%20%C2%B7%20A11y%20100%20%C2%B7%20SEO%20100-16a34a)
![React](https://img.shields.io/badge/React-19-1a5cd6)
![Vite](https://img.shields.io/badge/Vite-8-0b1f4d)

---

## Sumário

- [Visão geral](#visão-geral)
- [Stack](#stack)
- [Como rodar](#como-rodar)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Design system](#design-system)
  - [Cores](#cores)
  - [Tipografia](#tipografia)
  - [Espaçamento e layout](#espaçamento-e-layout)
  - [Bordas e sombras](#bordas-e-sombras)
  - [Componentes](#componentes)
  - [Movimento](#movimento)
  - [Acessibilidade](#acessibilidade)
- [Performance](#performance)
- [Conteúdo e imagens](#conteúdo-e-imagens)

---

## Visão geral

| Página | Rota | Descrição |
|---|---|---|
| Home | `/` | Hero, diferenciais, como funciona, planos, comparativo, valores, professores, teste de nível, depoimentos, FAQ e CTA final |
| Agendamento | `/agendamento` | Formulário em etapas que monta a mensagem e envia pelo WhatsApp |
| Créditos | `/creditos` | Créditos e licenças das imagens utilizadas |

A navegação da home usa âncoras (`/#como-funciona`, `/#professores`, `/#valores`…), e no celular há uma **barra fixa de CTA** e um botão de **voltar ao topo**.

## Stack

- **[React 19](https://react.dev)** + **[React Router 7](https://reactrouter.com)**
- **[Vite 8](https://vite.dev)** (build e dev server)
- **[Bootstrap 6](https://getbootstrap.com)** — grid, reboot e formulários (CSS não utilizado é removido na build via PurgeCSS)
- **[Motion](https://motion.dev)** — animações de entrada, menu, FAQ e carrossel
- **[React Icons](https://react-icons.github.io/react-icons/)** — ícones Lucide (`lu`) e Font Awesome (`fa`)
- **[Sharp](https://sharp.pixelplumbing.com)** — script de otimização de imagens para WebP

## Como rodar

Pré-requisito: Node.js 20+.

```bash
npm install
npm run dev               # servidor de desenvolvimento (http://localhost:5173)
npm run build             # build de produção em dist/
npm run preview           # serve a build (http://localhost:4173)
npm run lint              # ESLint
npm run otimizar-imagens  # converte src/assets/* para WebP otimizado
```

> **Medindo performance:** rode o Lighthouse sempre sobre `npm run build` + `npm run preview` (ou o site publicado). O servidor de desenvolvimento não é otimizado e gera notas artificialmente baixas.

## Estrutura do projeto

```
src/
├── assets/              # imagens originais
│   └── otimizadas/      # versões WebP geradas pelo script (usadas no site)
├── components/          # um diretório por componente: Componente.jsx + Componente.css
├── data/homeContent.js  # todo o texto e dados do site (planos, preços, FAQ, professores…)
├── pages/               # Home, Agendamento, Creditos
├── utils/phone.js       # máscara de telefone
├── index.css            # tokens do design system e estilos globais
└── main.jsx
public/img/              # imagem do hero (servida direto, com preload no index.html)
scripts/otimizar-imagens.mjs
```

Para **editar textos, preços, professores ou FAQ**, basta alterar `src/data/homeContent.js` — os componentes apenas leem esses dados.

---

## Design system

Todos os tokens ficam em `:root`, no arquivo [`src/index.css`](src/index.css), com o prefixo `--ec-` (English Coach). Os componentes devem sempre consumir os tokens em vez de valores fixos.

### Cores

| Token | Valor | Uso |
|---|---|---|
| `--ec-primary` | ![#1a5cd6](https://img.shields.io/badge/-%231a5cd6-1a5cd6) | Cor de marca: botões, links, destaques |
| `--ec-primary-dark` | ![#144bb0](https://img.shields.io/badge/-%23144bb0-144bb0) | Hover dos botões primários |
| `--ec-primary-soft` | ![#eaf1fd](https://img.shields.io/badge/-%23eaf1fd-eaf1fd) | Fundos de ícones, bordas suaves de avatar |
| `--ec-navy` | ![#0b1f4d](https://img.shields.io/badge/-%230b1f4d-0b1f4d) | Títulos e textos de destaque |
| `--ec-red` | ![#d62839](https://img.shields.io/badge/-%23d62839-d62839) | Acento ("você" no hero), preço antigo, erros |
| `--ec-green` | ![#16a34a](https://img.shields.io/badge/-%2316a34a-16a34a) | Selo "Mais vendido", marcações positivas |
| `--ec-green-soft` | ![#eaf7ee](https://img.shields.io/badge/-%23eaf7ee-eaf7ee) | Fundo de itens positivos |
| `--ec-text` | ![#1e293b](https://img.shields.io/badge/-%231e293b-1e293b) | Texto corrido |
| `--ec-muted` | ![#526175](https://img.shields.io/badge/-%23526175-526175) | Textos de apoio (contraste AA sobre branco) |
| `--ec-surface` | ![#f5f8fd](https://img.shields.io/badge/-%23f5f8fd-f5f8fd) | Fundo de seções alternadas (`.section--tinted`) |
| `--ec-border` | ![#e3e9f3](https://img.shields.io/badge/-%23e3e9f3-e3e9f3) | Divisores e bordas de cards |
| `--ec-border-strong` | ![#c9d3e3](https://img.shields.io/badge/-%23c9d3e3-c9d3e3) | Bordas de botões outline e inputs |

A paleta é inspirada na bandeira do Reino Unido (azul, vermelho e branco), com o azul-marinho como cor de texto principal. As estrelas de avaliação usam o amarelo do Google (`#fbbc04`).

### Tipografia

- **Família:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (400, 500, 600, 700, 800), carregada de forma assíncrona com fallback para `system-ui`.
- **Token:** `--bs-body-font-family`

| Elemento | Tamanho | Peso | Detalhes |
|---|---|---|---|
| Título do hero (`.hero__title`) | `clamp(2.1rem, 3.6vw + 0.8rem, 3.5rem)` | 800 | `line-height: 1.07`, `letter-spacing: -0.04em` |
| Título de seção (`.section-title`) | `clamp(1.5rem, 2.2vw + 0.8rem, 2.05rem)` | 800 | `line-height: 1.15`, `letter-spacing: -0.03em` |
| Eyebrow (`.eyebrow`) | `0.68rem` | 700 | Caixa alta, `letter-spacing: 0.06em`, cor primária |
| Texto corrido | `1rem` | 400 | `line-height: 1.6` |
| Botões | `0.8125rem` (sm) / `0.9375rem` (md) | 700 | |

Os títulos usam `clamp()` para escalar de forma fluida entre celular e desktop, sem saltos por breakpoint.

### Espaçamento e layout

- **Grid:** Bootstrap (`.container`, `.row`, `.col-*`, gutters `g-4`/`g-6`/`g-8`).
- **Seções:** `.section` → `3.5rem` de padding vertical no celular e `5rem` a partir de `992px`. Use `.section--tinted` para alternar o fundo.
- **Breakpoints** (sintaxe de media query por intervalo):

| Nome | Regra | Uso |
|---|---|---|
| Mobile pequeno | `width < 576px` | Empilha itens de confiança e ações |
| Tablet | `width >= 768px` | Ajustes de grid |
| Desktop | `width >= 992px` | Menu completo, hero em duas colunas |

- **Utilitários responsivos próprios:** `.lg:d-none`, `.lg:d-block`, `.lg:d-flex`, `.lg:d-inline`.

### Bordas e sombras

| Token / valor | Uso |
|---|---|
| `--ec-radius` (`14px`) | Cards, painéis e imagens |
| `18px` | Painéis grandes (faixa de diferenciais, formulários) |
| `10px` | Inputs, itens do FAQ e elementos menores |
| `999px` | Botões, chips e selos (formato pílula) |
| `50%` | Avatares |

As sombras são sempre tingidas com o azul-marinho (`rgb(11 31 77 / …)`) e têm *spread* negativo, para ficarem suaves e difusas:

```css
/* cards em repouso */
box-shadow: 0 4px 16px -8px rgb(11 31 77 / 0.08);
/* elementos em destaque */
box-shadow: 0 22px 40px -24px rgb(11 31 77 / 0.35);
/* anel de foco em inputs */
box-shadow: 0 0 0 3px rgb(26 92 214 / 0.15);
```

### Componentes

| Componente | Descrição |
|---|---|
| `Button` | Botão pílula primário. Props: `to` (vira `Link` do router), `size` (`sm` \| `md`). Customizável pelas variáveis `--button-bg`, `--button-bg-hover`, `--button-color`. |
| `.btn-outline` | Botão secundário com borda (`--ec-border-strong`) que fica azul no hover. |
| `Logo` | Logo com link para a home. Prop `size`. |
| `FadeIn` | Wrapper que anima a entrada do conteúdo ao rolar (`direction`: `up` \| `left`, `delay`, `offset`, `as`). |
| `Header` | Cabeçalho fixo com menu desktop e menu mobile animado. |
| `PlanCarousel` | Carrossel dos objetivos (provas, viagens, profissional) com setas, bolinhas e chips com efeito vidro (`.chip-glass`). |
| `Pricing` | Cards de preço; o plano em destaque usa `.price-card--featured` e selo verde. |
| `Comparison` | Tabela comparativa com marcadores `✓` / `✗` / parcial. |
| `Faq` | Acordeão animado. |
| `LeadForm` | Formulário de captura com máscara de telefone. |
| `MobileCtaBar` / `BackToTop` | Barra de CTA fixa no celular e botão de voltar ao topo. |

Convenção de CSS: **BEM** (`bloco__elemento--modificador`) e estados com prefixo `is-` (`is-active`, `is-open`, `is-scrolled`). Cada componente tem seu próprio arquivo `.css` ao lado do `.jsx`.

### Movimento

- Entradas suaves: `0.4s`, `easeOut`, deslocamento de `12px`.
- Interações (menu, FAQ, botões): `0.2s` a `0.3s`.
- Barra de CTA mobile: mola (`stiffness: 260`, `damping: 28`).
- Todo o movimento respeita `prefers-reduced-motion` (via `<MotionConfig reducedMotion="user">` e media query no CSS).

### Acessibilidade

- Contraste mínimo AA em todos os textos (Lighthouse Accessibility 100).
- Link "Pular para o conteúdo" (`.skip-link`).
- Foco visível padronizado: `outline: 3px solid rgb(26 92 214 / 0.55)`.
- Imagens decorativas com `alt=""` e `aria-hidden`; ícones com `aria-hidden="true"`.
- Avaliação por estrelas com `role="img"` e `aria-label`.

---

## Performance

- Imagens convertidas para **WebP** e redimensionadas (`npm run otimizar-imagens`).
- Imagem do hero com `srcset`, `fetchpriority="high"` e `preload` no `index.html`.
- Fonte do Google carregada sem bloquear a renderização.
- CSS do Bootstrap reduzido de ~420 KB para ~100 KB com PurgeCSS na build (`vite.config.js`).
- Páginas `/agendamento` e `/creditos` carregadas sob demanda (`React.lazy`).

## Conteúdo e imagens

Os créditos das imagens de terceiros estão listados na página [`/creditos`](src/pages/Creditos/Creditos.jsx) e em `imageCredits`, dentro de `src/data/homeContent.js`.

---

**Contato:** [WhatsApp (85) 99640-1985](https://wa.me/5585996401985) · contato@englishcoachidiomas.com
