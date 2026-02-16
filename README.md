# meharpalbasi.com

Personal website and blog for Meharpal Basi — Data Analyst based in London.

**Live:** [meharpalbasi.com](https://www.meharpalbasi.com)

## Features

- **Blog/Notes** — Powered by Notion as a CMS
- **Resume** — Interactive work history and skills
- **Projects** — Portfolio of data and web projects
- **Photos** — Travel photography gallery
- **SEO** — Structured data, OpenGraph images, sitemap

## Tech Stack

- **Framework:** Next.js 14 (Pages Router)
- **Styling:** Tailwind CSS + Headless UI
- **CMS:** Notion API for blog content
- **Animations:** Framer Motion
- **Analytics:** Vercel Analytics
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
yarn install

# Set up environment variables
cp .env.example .env.local
# Add your Notion API key and database IDs

# Run development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NOTION_TOKEN` | Notion integration token |
| `NOTION_DATABASE_ID` | Database ID for blog posts |
| `NEXT_PUBLIC_URL` | Site URL (for OG images) |

## Scripts

```bash
yarn dev        # Start dev server
yarn build      # Production build
yarn start      # Start production server
yarn lint       # Run ESLint
yarn typecheck  # Run TypeScript checks
yarn format     # Format with Prettier
```

## Structure

```
src/
├── components/     # React components
│   ├── notes/      # Blog-related components
│   ├── notion/     # Notion block renderer
│   └── tools/      # Tools/uses page components
├── data/           # Static data (social links, resume)
├── images/         # Image imports
├── lib/            # Utilities (notesApi, etc.)
├── pages/          # Next.js pages
│   ├── api/        # API routes (OG image generation)
│   ├── notes/      # Blog pages
│   └── tags/       # Tag pages
└── styles/         # Global CSS
```

## License

MIT
