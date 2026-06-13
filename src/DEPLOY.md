# Deploying the new site (read this first)

The deploy fails if the OLD site's files are still in the repo — the old
components (CallToAction.tsx, MediaPartnersCarousel.tsx, ui/button.tsx, ...)
reference packages the new site does not use, so `tsc` errors out.
This must be a full replacement, not a merge.

## Steps

1. Clone or open your `landingpage` repo locally.

2. Copy `cleanup-old-site.sh` from this folder into the repo root and run it:
   ```bash
   bash cleanup-old-site.sh
   ```
   (Or manually delete: `src/`, `public/`, `dist/`, `index.html`,
   `package.json`, `package-lock.json`, `components.json`, `eslint.config.js`,
   `postcss.config.js`, `vite.config.ts`, all `tsconfig*.json`, `vercel.json`.)

3. Copy EVERYTHING inside the `asn-site/` folder into the repo root
   (including the hidden `.gitignore`).

4. Sanity check — the repo's `src/components/` should now contain ONLY:
   `Header.tsx`, `Footer.tsx`, `ui.tsx`. If you still see `Hero.tsx`,
   `Navbar.tsx`, `Gallery.tsx` or a `ui/` folder, step 2 didn't complete.

5. Install and verify locally:
   ```bash
   npm install
   npm run build   # must finish with "✓ built"
   ```

6. Commit and push:
   ```bash
   git add -A
   git commit -m "New ASN website"
   git push
   ```

Vercel settings stay the same: framework Vite, build `npm run build`,
output `dist`. No environment variables needed.
