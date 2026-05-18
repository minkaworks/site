# Security Policy

## Supported versions

The `main` branch is the supported version of this website.

## Reporting a vulnerability

Please do not open a public issue for security reports.

Use the contact form at <https://minkaworks.com/en#contact> and include `Security report` in the message. Provide enough detail to reproduce the issue safely.

Helpful information includes:

- Affected URL or route.
- Steps to reproduce.
- Expected and actual behavior.
- Potential impact.
- Any suggested remediation.

## Scope

Security reports may cover:

- The public website.
- The contact form API route.
- Generated metadata routes such as `robots.txt`, `sitemap.xml`, and `llms.txt`.
- Deployment or configuration mistakes documented in this repository.

Out of scope:

- Social engineering.
- Denial-of-service testing.
- Attacks against third-party services not controlled by Minka Works.
- Automated scanner output without a reproducible impact.

## Secrets

Never commit secrets. Use `.env.local` for local development and a deployment secret manager for production.
