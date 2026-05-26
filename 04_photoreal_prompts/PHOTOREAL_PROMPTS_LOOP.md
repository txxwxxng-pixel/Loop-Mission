# Photoreal Prompts Loop

## Purpose

Produce realistic image generation prompts with full prompts, compact prompts, negative prompts, variation prompts, QC notes, failure analysis, and retry prompts.

## Independent Loop Rule

This loop can run independently as `PROMPT-M001`, `PROMPT-M002`, and so on. One photoreal prompts loop run means:

```text
planning -> reference gathering -> production -> QA -> export/archive -> next seed
```

It does not require web, ads, Unreal, or Unity work unless a cross-loop handoff is explicitly requested.

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
