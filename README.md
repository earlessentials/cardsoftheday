# Cards of the Day by Pearling

A polished pearl-themed daily reflection card experience built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

Visitors receive 8 softly shuffled cards from an 88-card local database and choose 1 card for the day. Each revealed card includes a warm message, a grounded lesson with an in-text citation, a reflective question, and sweet closing words.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- html-to-image for image export
- lucide-react for interface icons

## Install

```bash
pnpm install
```

You can also use npm:

```bash
npm install
```

## Run Locally

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
pnpm build
```

Run a production build locally:

```bash
pnpm start
```

## Deploy to GitHub

Create a GitHub repository named `cardsoftheday`, then run:

```bash
git init
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/cardsoftheday.git
git add .
git commit -m "Initial Cards of the Day app"
git push -u origin main
```

The repository includes a GitHub Pages workflow at:

```text
.github/workflows/deploy-pages.yml
```

After the workflow runs on `main`, the static site is published at:

```text
https://YOUR-USERNAME.github.io/cardsoftheday/
```

For this project, the expected GitHub Pages URL is:

```text
https://earlessentials.github.io/cardsoftheday/
```

If Pages is not active yet, open the repository settings, choose Pages, and set the source to GitHub Actions.

## Deploy Through Vercel

1. Go to [Vercel](https://vercel.com).
2. Import the GitHub repository named `cardsoftheday`.
3. Use the Next.js framework preset.
4. Keep the default build command, or set it to `pnpm build`.
5. Deploy.

## Update the Card Database

Edit:

```text
data/cards.ts
```

Each card follows this shape:

```ts
{
  id: 1,
  title: "The Quiet Return",
  message: "Empowering message text",
  lesson: "Insightful lesson with citation (Bandura, 1997).",
  question: "Reflective question?",
  sweetWords: "Sweet closing line."
}
```

Keep titles unique and keep every lesson connected to a real, verifiable source.

The current citation set is documented in:

```text
CITATION_SOURCES.md
```

## Replace the Pearling Image

Replace this file:

```text
public/pearling-image.jpg
```

The landing page already uses that path. If the image is missing, the app shows a soft placeholder.

## Customize Colors and Typography

Pearl colors live in:

```text
tailwind.config.ts
app/globals.css
```

Typography stacks live in:

```text
tailwind.config.ts
```

The visual system uses soft cream, champagne, warm white, blush beige, moonlit silver, and subtle ocean shimmer.

## Main Files

- `app/page.tsx` renders the page
- `components/Header.tsx` renders the title and Pearling image
- `components/CardGrid.tsx` selects 8 random cards
- `components/CardItem.tsx` renders each face-down card
- `components/RevealedCard.tsx` renders the selected reflection
- `data/cards.ts` contains all 88 cards
- `types/card.ts` defines the TypeScript interface