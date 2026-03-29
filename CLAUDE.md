# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server
npm run build     # Production build
npm run preview   # Preview production build locally
```

No test suite is configured.

## Architecture

This is an **Astro 5 + MDX + Tailwind CSS** mechanical engineering portfolio, deployed to GitHub Pages at `https://RyanHailey21.github.io/ME_Portfolio`.

**Important config:** `astro.config.mjs` sets `base: '/ME_Portfolio'` — all internal links and image paths must account for this base path.

### Content System

Project pages live as MDX files in [src/content/projects/](src/content/projects/). The schema (defined in [src/content/config.ts](src/content/config.ts)) is validated by Zod:

```typescript
{
  title: string,
  description: string,   // keep under 200 characters
  image: image(),        // Astro image() type for optimization
  tags: string[],
  technologies: string[],
  githubUrl?: string,
  videoUrl?: string,
}
```

- `projects.astro` fetches all entries via `getCollection('projects')` and renders `ProjectCard` components with tag-based filtering
- `projects/[slug].astro` handles dynamic routing for individual project pages via `ProjectLayout`

### Adding a New Project

1. Add images to `src/assets/images/projects/<folder>/`
2. Create `src/content/projects/<kebab-case-name>.mdx` using this structure:

```mdx
---
title: 'Project Name'
description: 'Under 200 chars'
image: '../../assets/images/projects/folder/main.jpg'
tags: ['Code', 'Research']
technologies: ['MATLAB', 'Python']
githubUrl: 'https://github.com/...'   # optional
---

import {Image} from 'astro:assets';
import ProjectImage from '../../assets/images/projects/folder/image.jpg';

## Overview
...

<Image src={ProjectImage} alt="..." style="max-width: 600px; width: 100%; margin: 2rem 0; border-radius: 12px; box-shadow: 0 4px 24px #0002;" />

## Approach
- **Step:** ...

## [Technical Sections]
...
```

**Common tags:** `Code`, `Research`, `Design`, `Hardware`, `Matlab`, `CAD`, `FEA`, `Python`, `C`, `C++`, `JavaScript`, `Miscellaneous`

### Styling

Custom Tailwind theme in `tailwind.config.mjs`:
- Colors: `portfolio-blue` (#60A5FA), `portfolio-teal` (#1cd8d8), `dark` (#0A0A0A), `dark-lighter`, `dark-card`
- Custom fonts: Geist (body), Boldonse (display), Patrick Hand, Atkinson Hyperlegible Mono
- Animations: `gradient-x`, `float`

### Deployment

Push to `main` → GitHub Actions (`astro.yml`) builds and deploys to GitHub Pages automatically.

## Architecture Diagram

A developer-facing architecture reference lives at [ARCHITECTURE.md](ARCHITECTURE.md).

**Keep it in sync.** Update `ARCHITECTURE.md` whenever you:
- Add, remove, or rename a page, layout, or component
- Add a new content collection or change the schema
- Add a new project (update the directory map and file list)
- Change routing structure or the base path
- Add or rename a design token (color, font, animation)
- Add a new build step or change the deploy pipeline
