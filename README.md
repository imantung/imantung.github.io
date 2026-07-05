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

This repo is a GitHub *user* page (`imantung/imantung.github.io`), but it
serves from the custom domain **imantung.com** instead of the default
`imantung.github.io`. That requires two pieces, both already in place:

- [`public/CNAME`](public/CNAME) containing `imantung.com` — Astro copies
  this into `dist/` on every build, which is what tells GitHub Pages which
  custom domain to serve.
- DNS at the domain registrar pointing `imantung.com` at GitHub Pages (an
  `ALIAS`/`ANAME`/flattened `A` record set to GitHub's Pages IPs, or an
  `A` record set pointing at GitHub's Pages IPs, per
  [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).

One-time repo setup (already done, but needed again if the repo/domain is
ever recreated): in **GitHub → Settings → Pages**, set **Custom domain**
to `imantung.com` and save — this is what makes GitHub keep re-verifying
and enforcing HTTPS for the domain. It should already reflect the
`public/CNAME` file after the first successful deploy, but if the DNS
changes, verify it here again.

