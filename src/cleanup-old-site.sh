#!/usr/bin/env bash
# Run this INSIDE your landingpage repo folder BEFORE copying in the new site.
# It removes the old site's files (keeps .git so your history is safe).
set -e

echo "Cleaning old site files..."
rm -rf src public dist
rm -f index.html package.json package-lock.json components.json \
      eslint.config.js postcss.config.js vite.config.ts \
      tsconfig.json tsconfig.app.json tsconfig.node.json \
      vercel.json README.md .gitignore

echo "Done. Now copy the contents of the asn-site folder into this directory,"
echo "then run: npm install && git add -A && git commit -m 'New ASN website' && git push"
