# Portfolio — Valmir

Landing page de portfólio pessoal. Next.js 16, Tailwind v4, TypeScript. Deploy na Vercel.

## Rodar localmente

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) no navegador.

## Validar SSG (conteúdo server-rendered)

```bash
npm run build && npm run start
# Em outro terminal:
curl http://localhost:3000 | grep "Landing pages"
```

Deve retornar o texto do H1 — confirmando que o HTML é gerado no servidor.

## Assets que você precisa adicionar

| Arquivo | Tamanho recomendado | Descrição |
|---|---|---|
| `public/droxly-screenshot.png` | 1200×675 px | Print da landing da Droxly |
| `public/og-image.png` | 1200×630 px | Imagem de preview para WhatsApp/Telegram/Instagram |

Coloque os dois arquivos na pasta `public/` antes do deploy.

## Customizar antes de deployar

- **Email no footer** → `lib/constants.ts`, variável `EMAIL`
- **URL final do site** → `app/layout.tsx`, campo `openGraph.url`
- **Número WhatsApp** → já está configurado em `lib/constants.ts` (`WA_URL`)

## Deploy na Vercel

### Opção 1 — Via CLI (recomendado)

```bash
npm i -g vercel
vercel
```

Siga o wizard. Na primeira vez vai pedir login e vincular ao projeto.
Para deploys futuros, só rodar `vercel --prod`.

### Opção 2 — Via GitHub

1. Faça push do repositório para o GitHub
2. Acesse [vercel.com/new](https://vercel.com/new)
3. Importe o repositório
4. Clique em **Deploy** — sem precisar configurar nada, a Vercel detecta Next.js automaticamente

### Após o deploy

1. Pegue a URL gerada pela Vercel (ex: `https://portfolio-xyz.vercel.app`)
2. Atualize `openGraph.url` em `app/layout.tsx` com essa URL
3. Faça um novo deploy

## Estrutura

```
├── app/
│   ├── layout.tsx      # Meta tags SEO + Open Graph
│   ├── page.tsx        # Página principal (importa seções)
│   └── globals.css     # Tailwind + animações
├── components/
│   ├── Hero.tsx        # Seção 1 — hero com CTA WhatsApp
│   ├── Cases.tsx       # Seção 2 — case Droxly
│   ├── Services.tsx    # Seção 3 — o que está incluso
│   ├── HowItWorks.tsx  # Seção 4 — como funciona
│   ├── CtaFinal.tsx    # Seção 5 — CTA final
│   └── Footer.tsx      # Footer
├── lib/
│   └── constants.ts    # WhatsApp URL e email
└── public/             # Imagens (adicionar antes do deploy)
```
