# Alina Kolomenska — Portfolio

[![CI](https://github.com/alina-kolomenska/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/alina-kolomenska/portfolio/actions/workflows/ci.yml)

Personal portfolio of a full-stack engineer with a strong frontend focus.

**Live:** [alina-kolomenska.vercel.app](https://alina-kolomenska.vercel.app/)

![Portfolio preview](public/og.png)

## Stack

- React 19 and TypeScript
- Vite
- Tailwind CSS v4
- shadcn/ui on Radix primitives, with Lucide icons
- Vitest and React Testing Library
- GitHub Actions CI and Vercel deployment

## Features

- Light and dark themes that follow the system preference, remember the visitor's choice, and apply before first paint
- Responsive sidebar navigation that highlights the section in view
- Collapsible project cards and job highlights
- Certificate and diploma previews that open full size in a dialog
- Downloadable PDF CV from the sidebar
- Cookieless PostHog analytics, loaded after the page and proxied through the site's own domain
- Accessible by default: skip link, landmarks, screen-reader labels, and smooth scrolling only when reduced motion isn't requested
- Open Graph and Twitter card metadata for link previews
- Prerendered HTML, JSON-LD structured data, a sitemap, and `llms.txt`, so search engines and AI crawlers can read the full content without running JavaScript

## Editing content

All copy lives in data files, so updating the site never means touching components:

| File                        | Content                                     |
| --------------------------- | ------------------------------------------- |
| `src/content/profile.ts`    | Name, role, contact links, stats, languages |
| `src/content/about.ts`      | About section                               |
| `src/content/experience.ts` | Job positions                               |
| `src/content/education.ts`  | Education                                   |
| `src/data/projects.json`    | Projects                                    |
| `src/data/skills.json`      | Skill groups                                |

The shapes are defined in `src/types/content.ts`. `profile.ts` also accepts three optional fields: `resumeUrl` adds a "Download CV" button to the sidebar, `introVideo` adds a video intro to the About section, and `sourceUrl` adds a "Source on GitHub" link to the footer. The CV itself is `public/Alina_Kolomenska_CV.pdf`; replace that file whenever the CV changes.

Project descriptions are lists of paragraphs, and each project can name the `company` it was built at. Education entries can add a `location` and attach a `document` (title, full image, thumbnail, alt text, and pixel size), with the images in `public/education/`.

Page metadata and the share image live in `index.html` and `public/og.png`. The JSON-LD structured data, `llms.txt`, `robots.txt`, and `sitemap.xml` are generated from the content files at build time (`src/lib/seo.ts`). If the domain changes, update `siteUrl` in `profile.ts` and the absolute URLs in `index.html`.

## Development

Requires Node.js 24.

Analytics only runs in production builds when `VITE_POSTHOG_KEY` is set. Copy `.env.example` to `.env.local` for local builds, and set the variable in Vercel for the Production environment only, so preview deployments don't send events. Requests go through the `/kr7` rewrite in `vercel.json`, so ad blockers don't drop them.

```bash
npm install
npm run dev            # start the dev server
npm run build          # type-check, build, and prerender the page for production
npm run lint           # run ESLint
npm run format         # format with Prettier (also sorts Tailwind classes)
npm run format:check   # check formatting without writing
npm test               # run the test suite once
npm run test:watch     # run tests on every change
npm run preview        # preview the production build locally
```

CI runs lint, the format check, the tests, and the build on every push to `main` and on pull requests.
