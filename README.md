# Ryan Hailey Mechanical Engineering Portfolio

Astro-based portfolio and lightweight career context system. The repository keeps detailed project evidence, career facts, and the current resume together without maintaining a separate career database.

## Career context structure

```text
career.yaml                     Personal, education, and employment facts
src/content/projects/*.mdx      Project details, contributions, and evidence
resume/Ryan_Hailey_CV.yaml      Canonical editable RenderCV resume
resume/Ryan_Hailey_CV.pdf       Approved rendered resume
AGENTS.md                       Instructions for coding and career agents
```

The files are connected by source-of-truth rules rather than automatic synchronization. Project information originates in MDX, career-only facts originate in `career.yaml`, and the resume contains a deliberately compressed selection from both.

## Adding information without redundancy

- Add project ownership, tools, decisions, results, and evidence to the relevant MDX file.
- Add contact, education, employment, certification, and target-role changes to `career.yaml`.
- Add potential resume bullets to the project's optional `resumeHighlights` frontmatter.
- Update the RenderCV YAML only when selecting information for the current resume.
- Update the PDF only after rendering and approving the YAML.

For complete source precedence, confidentiality rules, supported project metadata, and the resume-tailoring workflow, see [AGENTS.md](./AGENTS.md).

## Development

```bash
npm run dev
npm run build
npm run preview
```

The site is built with Astro 7, MDX, and Tailwind CSS 4 and deployed to GitHub Pages. Local development and deployment require Node.js 22.12 or newer.
