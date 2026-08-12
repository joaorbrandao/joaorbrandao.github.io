# Agent instructions

Personal static site built with VitePress.

## Toolchain

- **Node:** `24.19.0` (managed via `.nvmrc`; CI uses `node-version: "24"`).
- **Package manager:** npm (`package-lock.json` present).
- **Framework:** VitePress `^1.6.4`.

## Daily commands

```bash
npm install
npm run docs:dev      # local dev server with hot reload
npm run docs:build    # static build -> .vitepress/dist
npm run docs:preview  # preview the production build locally
```

## Adding content

- Site config and navigation live in `.vitepress/config.mjs`.
- `cleanUrls: true` is enabled, so page links omit `.html`.
- `README.md` is excluded from the build (`srcExclude`).
- The navbar and sidebars are **manual**; adding a new top-level page or section requires updating `nav` / `sidebar` in `.vitepress/config.mjs`.
- Post images and other static assets belong under `posts/assets/` (or a sibling assets directory) and are referenced with relative paths.

## Theme and styling

- Uses the default VitePress theme extended with Catppuccin:
  - Theme import: `.vitepress/theme/index.js`
  - Code highlight themes: `catppuccin-latte` (light) / `catppuccin-mocha` (dark).

## Deployment

- GitHub Pages deploys automatically on every push to `master` via `.github/workflows/deploy.yml`.
- Build artifact path: `.vitepress/dist`.
- Gitignore already excludes `.vitepress/cache` and `.vitepress/dist`.
