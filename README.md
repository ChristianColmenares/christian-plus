# christian.plus

Personal portfolio for Christian Colmenares, built with Astro and Tailwind CSS.

## Stack

- Astro static site
- Tailwind CSS
- TypeScript in Astro frontmatter
- Modular Astro components
- Bilingual routes for Spanish and English

## Routes

- `/` renders Spanish by default.
- `/es/` renders Spanish.
- `/en/` renders English.

## Local Development

```bash
pnpm install
pnpm run dev
```

## Validation

```bash
pnpm run type-check
pnpm run build
```

## Cloudflare Pages

Use these settings when creating the Cloudflare Pages project:

- Framework preset: Astro
- Build command: `pnpm run build`
- Output directory: `dist`
- Root directory: `/`

After connecting the GitHub repository, add `christian.plus` as a custom domain in Cloudflare Pages.

## Public Assets

- Portrait: `public/images/retrato.png`
- CV: `public/cv/christian-colmenares-cv.pdf`

The CV button points to `/cv/christian-colmenares-cv.pdf`. To update it, replace the file with the same name and redeploy.

## Main Content

Editable bilingual content lives in:

```text
src/content/site.ts
```

Shared layout and sections live in:

```text
src/components/
src/layouts/
src/pages/
```
