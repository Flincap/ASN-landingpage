# Africa Stablecoin Network — Website

Vite + React + TypeScript. No Tailwind required — all styling lives in `src/index.css`.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
Output goes to `dist/`. Deploys on Vercel out of the box (`vercel.json` handles SPA rewrites).

## Where things live
- `src/pages/Home.tsx` — homepage (hero, ticker, mission, stats, pillars, gallery, events, get involved)
- `src/pages/WhatWeDo.tsx` — the four pillars in depth
- `src/pages/Privacy.tsx`, `src/pages/Terms.tsx` — legal
- `src/components/` — Header, Footer, shared UI (reveal-on-scroll, count-ups)
- `src/assets/gallery/` — event photos (640px webp), bundled by Vite so they never 404 on deploy. To add photos, drop files in following the `kind-NN-640.webp` naming (speaking / exhibiting / attending) and extend the `alts` arrays in `Home.tsx`.

## Editing quick hits
- Summit video ID: `VIDEO_ID` constant in `src/pages/Home.tsx`
- Stats: `STATS` array in `src/pages/Home.tsx`
- Upcoming events: `EVENTS` array in `src/pages/Home.tsx`
- Gallery row speed: the `70s` / `84s` durations in `src/index.css` (`.g-track` rules)
- Hero rotating word: `SWAP_WORDS` array in `src/pages/Home.tsx`
