# Minka site

Open-source code for the Minka Works public website: **open work, useful systems**.

Minka is an open-source lab that turns technical curiosity into developer tools, auditable AI workflows, and reusable technical documentation for builders.

- Website: <https://minkaworks.com>
- LLM context: <https://minkaworks.com/llms.txt>
- Primary repository: <https://codeberg.org/minkaworks/site>
- GitHub mirror: <https://github.com/minkaworks/site>

## What is in this repo

This repository contains the Next.js app for the bilingual Minka Works website.

It includes:

- Spanish and English landing pages.
- Legal pages for privacy and terms.
- A contact form endpoint that can forward leads to Google Apps Script.
- Generated `robots.txt`, `sitemap.xml`, and `llms.txt` routes.
- Brand-aligned CSS, favicon assets, and public metadata.

## Tech stack

- [Next.js](https://nextjs.org/) App Router
- React
- TypeScript
- CSS Modules/global CSS via `app/globals.css`
- Google Apps Script integration for contact form submissions

## Requirements

- Node.js `>=20.9.0`
- npm `>=10`

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open <http://localhost:3000>.

The site can run locally without environment variables, but contact form submissions require `APPS_SCRIPT_WEB_APP_URL`.

## Scripts

```bash
npm run dev     # Start the local development server
npm run build   # Create a production build
npm run start   # Start the production server after build
```

## Environment variables

| Name | Required | Description |
| --- | --- | --- |
| `APPS_SCRIPT_WEB_APP_URL` | Production contact form only | Google Apps Script web app URL used by `app/api/contact/route.ts`. |

Never commit real secrets. Use `.env.local` for local development and your deployment provider or secret manager for production.

## Project structure

```text
app/
  [lang]/              Localized website pages and content dictionaries
  api/contact/         Contact form API route
  llms.txt/            LLM-readable site context
  robots.ts            Generated robots.txt
  sitemap.ts           Generated sitemap.xml
  globals.css          Global brand system and layout styles
google-apps-script/    Optional Apps Script receiver for contact submissions
public/                Public static assets and favicons
docs/                  Project documentation
```

## Content and localization

Localized marketing content lives in `app/[lang]/content.ts`.

Supported locales:

- `es` — Spanish
- `en` — English

When changing visible copy, update both locales unless the change is intentionally language-specific.

## Contact form integration

The contact form posts to `/api/contact`. The API route validates required fields and forwards JSON to the URL configured in `APPS_SCRIPT_WEB_APP_URL`.

A matching Google Apps Script implementation is provided in:

- `google-apps-script/Code.gs`
- `google-apps-script/appsscript.json`

Deployment checklist:

1. Create or choose a Google Sheet.
2. Deploy the Apps Script as a web app.
3. Set the script URL as `APPS_SCRIPT_WEB_APP_URL` in production.
4. Submit a test message and confirm a row is written.

## Deployment

This app is designed to be deployed from the repository root.

For Vercel:

- Root Directory: repository root or unset.
- Build command: `npm run build`.
- Output: handled by Next.js.
- Required secret for contact form: `APPS_SCRIPT_WEB_APP_URL`.

## Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [Brand implementation notes](docs/BRAND.md)
- [Contributing](CONTRIBUTING.md)
- [Security policy](SECURITY.md)
- [Code of conduct](CODE_OF_CONDUCT.md)
- [Changelog](CHANGELOG.md)

## Contributing

Contributions are welcome when they improve correctness, accessibility, documentation, localization, or maintainability.

Before opening a pull request, read [CONTRIBUTING.md](CONTRIBUTING.md) and run:

```bash
npm run build
```

## License

Source code is released under the [MIT License](LICENSE).

The Minka Works name, `minka` wordmark, logos, visual identity, and written brand content are brand assets. They are not licensed for reuse in a way that suggests affiliation, endorsement, or ownership by others.
