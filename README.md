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
- `public/gallery/` — event photos (640px webp). Add more and reference them in `Home.tsx`.

## Editing quick hits
- Summit video ID: `VIDEO_ID` constant in `src/pages/Home.tsx`
- Stats: `STATS` array in `src/pages/Home.tsx`
- Upcoming events: `EVENTS` array in `src/pages/Home.tsx`
- Gallery row speed: `--g-dur` values in `src/index.css` (`.g-track` rules)
