# Architecture

This document describes the structure of the Minka Works site.

## Overview

The site is a Next.js App Router application with localized public pages and a small server-side contact API.

Primary goals:

- Present Minka Works clearly in Spanish and English.
- Keep the frontend simple, fast, and accessible.
- Provide machine-readable context through `/llms.txt`.
- Keep operational integrations isolated and easy to replace.

## Routing

| Route | Purpose |
| --- | --- |
| `/` | Redirects users based on browser language. |
| `/es` | Spanish landing page. |
| `/en` | English landing page. |
| `/es/privacy`, `/en/privacy` | Privacy policy pages. |
| `/es/terms`, `/en/terms` | Terms and conditions pages. |
| `/api/contact` | Server route for contact form submissions. |
| `/llms.txt` | LLM-readable context route. |
| `/robots.txt` | Generated robots route. |
| `/sitemap.xml` | Generated sitemap route. |

## Content model

Localized marketing content lives in `app/[lang]/content.ts`.

The route at `app/[lang]/page.tsx` renders the same structure for each supported locale and reads copy from the dictionary.

When adding a locale:

1. Add the locale code to `locales` in `app/[lang]/content.ts`.
2. Add localized dictionary content.
3. Add generated static params and metadata as needed.
4. Update sitemap entries.
5. Update README documentation.

## Styling

Global styling lives in `app/globals.css`.

The design system uses CSS custom properties for:

- Dark surfaces.
- Moss and clay accent colors.
- Editorial typography.
- Technical grid and border treatments.
- Responsive spacing.

## Contact form data flow

```text
Browser form
  -> POST /api/contact
  -> validate required fields
  -> POST APPS_SCRIPT_WEB_APP_URL
  -> Google Apps Script
  -> Google Sheet
```

The public client never receives the Apps Script URL. It is read only on the server from `process.env.APPS_SCRIPT_WEB_APP_URL`.

## Generated files and metadata

- `app/robots.ts` generates `robots.txt`.
- `app/sitemap.ts` generates `sitemap.xml`.
- `app/llms.txt/route.ts` returns a text response for AI agents and crawlers.
- `app/layout.tsx` defines global metadata, favicon links, viewport theme color, and font preconnects.

## Deployment assumptions

The app is deployed from the repository root. Production must define `APPS_SCRIPT_WEB_APP_URL` for the contact form to work.

The project should build with:

```bash
npm run build
```
