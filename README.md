# Ne, drogam

Astro 6 static website for Zavod za preventivo uporabe drog – Ne, drogam.

## Local development

Requires Node.js 22.12 or newer.

```sh
npm install
npm run dev
npm run build
npm run preview
```

## GitHub Pages

The Actions workflow in `.github/workflows/deploy.yml` builds the site on pushes to `main` and deploys `dist` to GitHub Pages. In the repository settings, select **Pages → Build and deployment → GitHub Actions**. Configure the custom domain `nedrogam.org` in Pages and ensure DNS points to GitHub Pages; enable HTTPS once the DNS checks pass. Keep `public/CNAME` in sync if the custom domain is configured there.

Before public launch, verify the organization's legal details against a current official extract, confirm that `kontakt@nedrogam.org` is active and monitored, and review NIJZ's current service directory.

Content sources and distinctions are documented in [`docs/content-sources.md`](docs/content-sources.md).
