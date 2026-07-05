# imantung.github.io

Personal profile site, built with Astro + Tailwind CSS, deployed to GitHub Pages.

## Prerequisites

- Node.js 18+ and npm. There is no global Astro CLI to install — every
  command runs through the local `node_modules/.bin/astro` via the `npm
  run` scripts below (or `npx astro <command>` directly).

## Local development

```sh
npm install
npm run dev
```

This starts a dev server at http://localhost:4321 and watches files for
changes.

### Stopping the dev server

- If it's running in your terminal in the foreground, `Ctrl+C` stops it.
- If it was started in the background (e.g. with `&` or from another
  process), stop it with:

  ```sh
  npx astro dev stop
  ```

  or, as a fallback, kill whatever is listening on the port:

  ```sh
  lsof -ti:4321 | xargs kill
  ```

## Build

```sh
npm run build    # type-checks with astro check, then builds to dist/
npm run preview  # serve the production build locally
```

## Editing content

All page content (profile, about, experience, education, writing, LinkedIn
posts, socials) lives in one file: `src/data/content.ts`. Edit the values
there and push to `master` — the GitHub Actions workflow rebuilds and
redeploys automatically.

## Deployment

Deployment is fully automated via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): every push
to `master` builds the site with `withastro/action` and publishes it to
GitHub Pages. There is nothing to run locally to deploy — just commit and
push.

One-time repo setup (already done for this repo, but needed again if the
repo is ever recreated): in **GitHub → Settings → Pages**, set **Source**
to **GitHub Actions**. Without this, the workflow's deploy step has
nothing to publish to.

This repo is a GitHub *user* page (`imantung/imantung.github.io`), so it
serves directly from `https://imantung.github.io` — no custom domain or
`CNAME` file is needed unless you want to point a different domain at it.

