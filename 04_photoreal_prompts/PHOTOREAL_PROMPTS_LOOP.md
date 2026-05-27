# Photoreal Prompts Loop

## Purpose

Produce realistic image generation prompts with full prompts, compact prompts, negative prompts, variation prompts, QC notes, failure analysis, and retry prompts.

## Independent Loop Rule

This loop can run independently as `PROMPT-M001`, `PROMPT-M002`, and so on. One photoreal prompts loop run means:

```text
planning -> reference gathering -> production -> QA -> export/archive -> next seed
```

It does not require web, ads, Unreal, or Unity work unless a cross-loop handoff is explicitly requested.

## Project Seed Usage

This loop may read a project seed from `90_shared_assets/project_seeds/` as optional visual direction. A seed can guide subject, style, mood, market use, aspect ratios, and production priorities, but it does not require other loops to run.

## Input Contract

Use:

```text
04_photoreal_prompts/templates/image_prompt_input_contract_template.md
```

Use the contract before `/plan` or `/goal` when subject, reference handling, style, camera, lighting, aspect ratio, target generation tool, or QC criteria need to be clarified.

## Image Generation Workflow

Prompt files, generation jobs, QA reports, and manifests can be tracked. Heavy generated outputs should stay in `04_photoreal_prompts/generated_outputs/` and should not be committed unless explicitly approved.

## References

References can include project seeds, visual direction, prompt packs, or reviewed outputs from other loops. Other loop files are read-only unless a handoff manifest explicitly allows edits.

## Codex Can Produce

- Full prompts.
- Compact prompts.
- Negative prompts.
- Variation prompts.
- Aspect-ratio-specific prompts.
- QC checklists.
- Retry/failure correction prompts.
- Image generation job specs.
- Manifest files.

## User Must Verify

- Final image taste.
- Face/body/anatomy quality.
- Brand fit.
- Upload readiness.

## Export/Archive Expectations

Prompt packs, image generation jobs, QA reports, and manifests should be stored inside `04_photoreal_prompts/`. Actual generated image files should usually remain local or external.

## Input Requirements

- Subject.
- Intended use.
- Style and realism target.
- Composition requirements.
- Lighting, lens, material, or environment references.
- Known failure modes to avoid.

## Output Requirements

- Full prompt.
- Compact prompt.
- Negative prompt.
- Variation prompts.
- QC checklist.
- Failure analysis.
- Retry prompt.

## Folder Usage

- `briefs/` - prompt mission briefs.
- `references/` - visual references and style notes.
- `prompts/` - final prompt packs and variations.
- `projects/` - active prompt systems.
- `exports/` - publishable prompt packs.
- `qa_reports/` - QC and failure analysis.
- `templates/` - reusable prompt templates.

## Definition Of Done

- Prompt target is specific.
- Full and compact prompts exist.
- Negative prompt handles common defects.
- Variations are meaningfully different.
- QC checklist can be applied to generated images.
- Retry prompt responds to likely failures.

## QA Checklist

- [ ] Subject, environment, composition, lighting, and camera are clear.
- [ ] Negative prompt avoids common artifacts.
- [ ] Variations preserve the mission goal.
- [ ] QC checklist has pass/fail criteria.
- [ ] Retry prompt addresses failure analysis.

## Example Mission Types

- Product hero image prompt pack.
- Editorial portrait prompt pack.
- Interior architecture prompt pack.
- Food photography prompt pack.

## Example Codex Task Format

```text
Read AGENTS.md and 04_photoreal_prompts/PHOTOREAL_PROMPTS_LOOP.md. Create a complete photoreal prompt pack with QC and retry prompts for [subject]. Work only in 04_photoreal_prompts/.
```
