# Contributing

Thanks for your interest in improving the Minka Works site.

This repository is open-source, but it is also the public website for Minka Works. Contributions should be small, clear, and easy to review.

## Good first contributions

- Fix typos or broken links.
- Improve accessibility, semantic HTML, keyboard states, or contrast.
- Improve documentation.
- Fix localization issues between Spanish and English.
- Fix bugs in routing, metadata, forms, or generated files.

## Before you start

For larger changes, open an issue first and describe:

1. The problem.
2. The proposed change.
3. How you will verify it.

Avoid speculative refactors or broad rewrites without prior discussion.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

The app works without secrets unless you are testing the contact form integration.

## Development guidelines

- Keep changes focused and minimal.
- Match the existing style and naming conventions.
- Update both `es` and `en` content when changing localized copy.
- Do not commit generated build output, secrets, or local environment files.
- Do not add dependencies unless the benefit is clear and documented.
- Preserve the brand direction described in `docs/BRAND.md`.

## Verification

Run this before opening a pull request:

```bash
npm run build
```

If your change affects the contact form, test the failure state locally and, when possible, a configured Apps Script endpoint in a safe environment.

## Pull request checklist

- [ ] The change is focused and documented.
- [ ] `npm run build` passes.
- [ ] User-facing copy is updated in Spanish and English when applicable.
- [ ] No secrets or local files are committed.
- [ ] Screenshots are included for visual changes.

## Brand and content note

The code is MIT licensed. The Minka Works name, `minka` wordmark, logos, visual identity, and written brand content are brand assets and should not be reused to imply affiliation or endorsement.
