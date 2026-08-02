# Career and portfolio instructions

## Authoritative sources

- Personal, education, employment, and job-target facts: `career.yaml`
- Project facts, individual contributions, and supporting evidence: `src/content/projects/*.mdx`
- Current editable resume selection: `resume/Ryan_Hailey_CV.yaml`
- Approved rendered resume snapshot: `resume/Ryan_Hailey_CV.pdf`
- Project images and supporting media: `src/assets/images/projects/` and `public/videos/`

## Source precedence

1. Use the project MDX body and its evidence for detailed project claims.
2. Use `career.yaml` for identity, education, employment, confidentiality, and target-role facts.
3. Treat `resume/Ryan_Hailey_CV.yaml` as a compressed, approved selection rather than a complete record.
4. Treat the PDF as a rendered snapshot. Update the YAML first when revising resume content.
5. If sources conflict, do not guess. Flag the conflict for Ryan.

## How the sources connect

These files are connected by conventions, not automatic synchronization:

```text
career.yaml                     Personal and career facts
        +
src/content/projects/*.mdx      Full project records and evidence
        ↓
resume/Ryan_Hailey_CV.yaml      Selected, compressed presentation
        ↓
resume/Ryan_Hailey_CV.pdf       Approved rendered snapshot
```

The resume must remain independently usable, so it intentionally repeats a small selection of facts from the authoritative sources. This is controlled duplication, not a second source of truth.

## Where new information belongs

| Information | Canonical location |
| --- | --- |
| Contact details, education, employment, certifications, and target roles | `career.yaml` |
| Project role, dates, ownership, tools, decisions, results, and evidence | Relevant project MDX file |
| Images, videos, test results, and other supporting media | Project asset folder or `public/videos/`, referenced from MDX |
| Candidate bullets that may be useful later | Project `resumeHighlights` frontmatter |
| Bullets selected for the current resume | `resume/Ryan_Hailey_CV.yaml` |
| Resume formatting and page layout | `resume/Ryan_Hailey_CV.yaml` |
| Approved rendered resume | `resume/Ryan_Hailey_CV.pdf` |

Store a fact where it originates. Repeat it only in an output, such as a resume or cover letter, that must stand alone.

### Adding project information

1. Put short, structured facts in the relevant MDX frontmatter.
2. Put technical explanation, decisions, testing, results, and evidence in the MDX body.
3. Add a concise `resumeHighlights` item if the work could support a future resume bullet.
4. Do not copy the full project narrative into `career.yaml`.

### Adding career information

Add non-project information such as a new position, certification, education update, or target role to `career.yaml`. Add it to the RenderCV YAML only when it should appear on the current resume.

### Updating the resume

1. Read `career.yaml` and the relevant project MDX files.
2. Verify every proposed claim against those sources.
3. Select and compress the most relevant information in `resume/Ryan_Hailey_CV.yaml`.
4. Preserve the existing design unless Ryan requests a redesign.
5. Render the YAML, confirm the PDF remains one page, and visually inspect it.
6. Replace `resume/Ryan_Hailey_CV.pdf` only after the rendered version is approved.

Do not automatically copy every `resumeHighlights` item into the resume. They are a candidate pool; the RenderCV file is the approved selection.

## Rules

- Never invent or embellish dates, metrics, ownership, tools, outcomes, or scope.
- Distinguish Ryan's individual contribution from the team's outcome.
- Do not infer confidential details from public summaries or expose restricted Lockheed Martin information.
- Do not add employer-specific technical detail beyond content Ryan has explicitly approved for public use.
- Read the relevant project MDX files before tailoring a resume, cover letter, or interview material.
- Preserve a one-page resume unless Ryan asks otherwise.
- Keep dates in structured files in `YYYY-MM` format where the month is known; use `present` for ongoing work.
- Keep career-only facts out of project MDX files and avoid duplicating full project narratives in `career.yaml`.

## Project metadata

Project frontmatter may include these optional agent-facing fields without displaying them on the site:

- `role`
- `startDate`
- `endDate`
- `ownership`
- `resumeHighlights`

Every metadata claim must also be supported by the MDX body or other repository evidence.

Example:

```yaml
role: 'Drivetrain Lead'
startDate: '2024-08'
endDate: '2026-08'
ownership:
  - Drivetrain subsystem design intent
resumeHighlights:
  - Led drivetrain design and cross-team integration.
```

Only structured frontmatter is machine-readable. The project MDX body remains the detailed source used to validate and contextualize these fields.
