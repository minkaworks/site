# Brand implementation notes

This repository implements the public website for Minka Works using the `minka` brand direction.

## Positioning

- Tagline: `Open work. Useful systems.`
- Minka is an open-source lab for technical builders.
- The site should emphasize usefulness, openness, modularity, clarity, evidence, and human control.

Avoid positioning Minka as a generic AI consultancy.

## Visual system

The frontend uses a dark, technical, editorial visual language:

- Dark surfaces: `#121416`, `#0c0e10`.
- Moss accents: `#bacbb8`, `#d7ead5`.
- Clay accent: `#ffb599`.
- Technical borders and grid lines: `#434842`.
- Monospace labels and small technical annotations.
- Hard 1px borders and small offset shadows.

Core implementation lives in `app/globals.css`.

## Typography

The layout loads:

- Inter
- Public Sans
- JetBrains Mono

Use Public Sans for strong editorial headings, Inter for body text, and JetBrains Mono for labels, actions, metadata, and technical annotations.

## Assets

Public favicon assets live in `public/`:

- `favicon.svg`
- `favicon.png`
- `favicon-512.png`

The ignored `brand_assets/` directory may contain source brand references used during design work. It should not be committed by default.

## Usage restrictions

The website source code is MIT licensed. The Minka Works name, `minka` wordmark, logos, visual identity, and written brand content are brand assets and should not be reused to imply affiliation, endorsement, or ownership.
