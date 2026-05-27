# Interactive Web Loop

## Purpose

Produce interactive websites, landing pages, brand homepages, animated web experiences, and deployable web prototypes.

## Independent Loop Rule

This loop can run independently as `WEB-M001`, `WEB-M002`, and so on. One web loop run means:

```text
planning -> reference gathering -> production -> QA -> export/archive -> next seed
```

It does not require ads, Unreal, photoreal prompts, or Unity work unless a cross-loop handoff is explicitly requested.

## Project Seed Usage

This loop may read a project seed from `90_shared_assets/project_seeds/` as optional top-level direction. A seed can guide brand, audience, visual tone, and priority, but it does not require other loops to run.

## Input Contract

Use:

```text
01_interactive_web/templates/web_input_contract_template.md
```

Use the contract before `/plan` or `/goal` when the page goal, target user, sections, interactions, assets, tech preference, or QA criteria need to be clarified.

## References

References can include project seeds, brand notes, screenshots, websites, or reviewed outputs from other loops. Other loop files are read-only unless a handoff manifest explicitly allows edits.

## Codex Can Produce

- HTML/CSS/JS MVPs.
- React/Vite projects when appropriate.
- Interaction scripts.
- Responsive layouts.
- README/run guides.
- QA reports.
- Export/handoff manifests.

## User Must Verify

- Visual taste.
- Brand fit.
- Final copy quality.
- Deployment readiness.

## Export/Archive Expectations

Export notes, QA reports, and handoff manifests should be stored inside `01_interactive_web/`. Reviewed completed outputs can be merged to `main` and archived later.

## Input Requirements

- Brand, product, or page goal.
- Target audience.
- Required sections or interactions.
- Visual references.
- Preferred stack or deployment target, if any.

## Output Requirements

- Website brief.
- Web project structure or implementation plan.
- Interactive prototype when requested.
- Responsive layout notes.
- README run guide when code exists.
- QA report.
- Export or deployment notes.

## Folder Usage

- `briefs/` - page briefs and scope.
- `references/` - visual and competitor references.
- `prompts/` - Codex tasks and image prompts.
- `projects/` - prototype or site files.
- `exports/` - deployment notes, screenshots, or packaged exports.
- `qa_reports/` - responsive and browser QA.
- `templates/` - reusable web mission templates.

## Definition Of Done

- Scope is clear.
- Prototype or plan matches the brief.
- Responsive behavior is checked or explicitly deferred.
- Run or deployment instructions exist when code exists.
- QA report names remaining issues.

## QA Checklist

- [ ] Layout fits desktop and mobile targets.
- [ ] Navigation and interactions are described or implemented.
- [ ] Assets are referenced from valid paths.
- [ ] Text does not overlap or overflow.
- [ ] Export or deployment notes are present.

## Example Mission Types

- Luxury product landing page.
- Restaurant homepage.
- Animated portfolio prototype.
- Campaign microsite.

## Example Codex Task Format

```text
Read AGENTS.md and 01_interactive_web/INTERACTIVE_WEB_LOOP.md. Create a mission brief and prototype plan for [site]. Work only in 01_interactive_web/.
```
