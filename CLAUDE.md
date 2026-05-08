# CLAUDE.md

## Commands

```bash
npm run dev       # Start development server
npm run build     # Production build
npm run preview   # Preview production build locally
```

No test suite is configured.

## Architecture

**Astro 5 + MDX + Tailwind CSS** static site deployed to GitHub Pages at `https://RyanHailey21.github.io/ME_Portfolio`.

`astro.config.mjs` sets `base: '/ME_Portfolio'` — all internal links must use `import.meta.env.BASE_URL`. Never hardcode `/projects`.

Images are optimized at build time by Astro's Sharp pipeline. All pages are SSG — no server required.

## Directory Map

```
ME_Portfolio/
├── public/
│   ├── favicon.png
│   ├── .nojekyll                    Disables Jekyll on GitHub Pages
│   └── videos/
│       └── TouchScreenVideo.MP4
│
├── src/
│   ├── assets/images/
│   │   ├── Profile Photo.webp       Hero avatar
│   │   └── projects/                One kebab-case subfolder per project
│   │       ├── air-cushion-suspension-analysis/
│   │       ├── autonomous-ugv/
│   │       ├── bottle-service/
│   │       ├── suspension-system-estimation/
│   │       ├── thermal-conduction-modeling/
│   │       ├── this-website/
│   │       ├── touchscreen-platform/
│   │       └── wheel-cover/
│   │
│   ├── content/
│   │   ├── config.ts                Zod schema for projects collection
│   │   └── projects/                One .mdx file per project
│   │       ├── air-cushion-suspension-analysis.mdx
│   │       ├── autobalancing-platform.mdx
│   │       ├── autonomous-ugv.mdx
│   │       ├── bottle-service.mdx
│   │       ├── robot-wheel-cover.mdx
│   │       ├── suspension-system-estimation.mdx
│   │       ├── thermal-conduction-modeling.mdx
│   │       └── this-website.mdx
│   │
│   ├── layouts/
│   │   ├── Layout.astro             Root HTML shell (Navigation + slot)
│   │   └── ProjectLayout.astro      Project detail wrapper (image, video, MDX, tech tags, GitHub link)
│   │
│   ├── components/
│   │   ├── Navigation.astro         Fixed header, nav links, social icons, mobile drawer
│   │   ├── Hero.astro               Landing section (name, bio, CTA, profile photo)
│   │   ├── FeaturedCarousel.astro   Auto-rotating project showcase (3.5s, fade transitions)
│   │   ├── About.astro              Bio, skill tags, interests, education cards
│   │   └── ProjectCard.astro        Grid card (image, title, description, tags)
│   │
│   └── pages/
│       ├── index.astro              / → Hero, FeaturedCarousel, About
│       ├── projects.astro           /projects → sorted grid + client-side tag filter
│       └── projects/
│           └── [slug].astro         /projects/:slug → SSG detail pages
│
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── CLAUDE.md
```

## Content System

### Schema (`src/content/config.ts`)

```typescript
{
  title:        string       // required
  description:  string       // required, keep under 200 characters
  image:        image()      // required, Astro image type
  tags:         string[]     // required, used for filtering
  technologies: string[]     // required, shown on detail page
  sortOrder?:   number       // optional, controls display order (lower = first)
  githubUrl?:   string
  videoUrl?:    string       // local path or YouTube embed URL
}
```

**Common tags:** `Code`, `Research`, `Design`, `Hardware`, `Matlab`, `CAD`, `FEA`, `Python`, `C`, `C++`, `JavaScript`, `Miscellaneous`

Projects are sorted by `sortOrder` ascending in both `projects.astro` and `index.astro`. Projects without `sortOrder` fall to the end.

### Adding a New Project

1. Add images to `src/assets/images/projects/<kebab-case-name>/` using descriptive kebab-case filenames
2. Create `src/content/projects/<kebab-case-name>.mdx`:

```mdx
---
title: 'Project Name'
description: 'Under 200 chars'
image: '../../assets/images/projects/folder/main.jpg'
tags: ['Code', 'Research']
technologies: ['MATLAB', 'Python']
sortOrder: 9
---

import {Image} from 'astro:assets';
import ProjectImage from '../../assets/images/projects/folder/image.jpg';

## Overview
...

<Image src={ProjectImage} alt="..." style="max-width: 600px; width: 100%; margin: 2rem 0; border-radius: 12px; box-shadow: 0 4px 24px #0002;" />

## Approach
- **Step:** ...
```

## Pages & Routing

| URL | File |
|-----|------|
| `/ME_Portfolio/` | `src/pages/index.astro` |
| `/ME_Portfolio/projects` | `src/pages/projects.astro` |
| `/ME_Portfolio/projects/:slug` | `src/pages/projects/[slug].astro` |

- `index.astro` passes the sorted projects array to `FeaturedCarousel`
- `projects.astro` maps entries to `ProjectCard` with client-side tag filtering
- `[slug].astro` calls `getStaticPaths()` and `entry.render()`, passes frontmatter to `ProjectLayout`

## Design Tokens (`tailwind.config.mjs`)

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `ink` | `#0A0A0B` | Page background |
| `ink-raised` | `#111113` | Slightly elevated surfaces |
| `ink-card` | `#16161A` | Card / panel backgrounds |
| `ink-line` | `#262629` | Borders |
| `ink-subtle` | `#1D1D21` | Subtle dividers |
| `chalk` | `#EAEAEC` | Primary text |
| `chalk-secondary` | `#9A9AA8` | Body text |
| `chalk-muted` | `#5A5A6A` | Labels, captions |
| `brass` | `#D4A843` | Accent (use sparingly) |
| `brass-light` | `#E8C06A` | Hover states |
| `brass-dim` | `#1E1810` | Tinted backgrounds |

### Fonts

| Token | Family | Usage |
|-------|--------|-------|
| `font-display` | Cormorant Garamond | Headings |
| `font-sans` | DM Sans | Body |
| `font-mono` | JetBrains Mono | Labels, tags, code |

### Animation

| Name | Description |
|------|-------------|
| `fade-up` | `opacity: 0, translateY(20px)` to visible over 0.7s |

## Deployment

Push to `main` → GitHub Actions (`.github/workflows/astro.yml`) runs `npm run build` → deploys `dist/` to GitHub Pages.
