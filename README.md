# WhatNow

> **You have options. We help you find the right one.**

WhatNow is a free, bilingual (English / हिन्दी) career and exam guidance platform for
Indian students. It offers unbiased guides, real stories, and clear roadmaps —
without coaching agendas, sponsorships, or hidden incentives.

## What's inside

- **Careers** — deep-dive guides on non-traditional paths (Law, Design, Fashion
  Design, Urban Planning, Merchant Navy, and more), each with entry routes,
  colleges, salaries, and "is it for you?" reality checks.
- **Exams** — structured guides for CLAT, UCEED, NIFT, IMU-CET, and JEE Paper 3,
  covering what the exam is, prep resources, scholarships, and how to convince
  your parents.
- **Reads** — a long-form articles/blog section (`/reads`, dynamic `[slug]` routes).
- **Scholarships** — institute-wise fee waivers, MCM schemes, and state scholarships.
- **Tools & utilities** — site-wide search modal, notice board, context menu, and a
  one-toggle English ⇄ Hindi switch persisted in `localStorage`.
- **Legal pages** — Privacy, Terms, Cookie Policy, Content Policy, and Editorial
  Guidelines.

## Tech stack

| Layer       | Choice                                             |
|-------------|----------------------------------------------------|
| Framework   | [Next.js 16](https://nextjs.org) (App Router)      |
| Language    | TypeScript 5                                       |
| UI          | React 19                                           |
| Styling     | Tailwind CSS v4 (via `@tailwindcss/postcss`)       |
| Animation   | Framer Motion                                      |
| Icons       | lucide-react, `@iconify/react`                     |
| Fonts       | Geist (Latin) + Mukta (Devanagari) via `next/font` |
| Scraping    | cheerio (build-time data utilities)                |

## Getting started

```bash
# install dependencies
npm install

# run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available scripts

| Command         | Description                          |
|-----------------|--------------------------------------|
| `npm run dev`   | Start the local development server   |
| `npm run build` | Build the production bundle          |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Run ESLint                           |

## Project structure

```
src/
├── app/                  # Next.js App Router — one folder per route
│   ├── about/            # About, mission, values
│   ├── careers/          # Career guides (law, design, merchant-navy, …)
│   ├── exams/            # Exam guides (clat, uceed, nift, imu-cet, jee-paper3)
│   ├── reads/            # Articles list + [slug] detail pages
│   ├── scholarships/     # Scholarships database
│   ├── privacy/ terms/ … # Legal pages
│   ├── layout.tsx        # Root layout (Navbar, Footer, providers)
│   └── page.tsx          # Home page
├── components/
│   ├── home/             # Hero, FeaturedGuides, WhyWhatnow, Testimonials, Marquee
│   ├── ui/               # Reusable primitives (Button, ScrollVelocity, …)
│   ├── Navbar.tsx Footer.tsx SearchModal.tsx NoticeBoard.tsx …
│   └── LegalPage.tsx     # Shared layout for legal content
├── context/
│   └── LanguageContext.tsx   # English ⇄ Hindi toggle + persistence
└── data/
    ├── searchIndex.ts    # Search index powering the site-wide search modal
    └── admin-notices.json
```

## Internationalization

The site ships in **English** and **Hindi**. Language state lives in
`LanguageContext`, persists to `localStorage`, and toggles a `lang-en` / `lang-hi`
class on the document root for font and styling adjustments. Page copy is provided
as inline `translations` objects keyed by language.

## Routing notes

A few legacy IMU-CET URLs are permanently redirected in `next.config.ts`
(e.g. `/exams/imu-cet/scholarships` → `/exams/imu-cet/entry-paths`). Update that
file when renaming exam sub-pages.

## Deployment

Standard Next.js build (`npm run build` → `npm run start`), deployable to any
Node host or a platform like Vercel.

**Live:** [whatnowindia.vercel.app](https://whatnowindia.vercel.app/)
