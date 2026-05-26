# Unreal Spaces Loop

## Purpose

Plan Unreal Engine 3D spaces such as escape rooms, audio studios, concert halls, immersive environments, blockouts, automation scripts, and render plans.

## Input Requirements

- Space concept.
- Intended mood and function.
- Scale assumptions.
- Reference environments.
- Target Unreal version, if known.
- Required assets or constraints.

## Output Requirements

- Space brief.
- Reference plan.
- Blockout plan.
- Unreal project notes.
- Asset manifest.
- Script plan.
- Render plan.
- QA report.

## Folder Usage

- `briefs/` - space briefs and production scope.
- `references/` - environment references and notes.
- `prompts/` - visual prompt packs and Codex task prompts.
- `projects/` - Unreal planning files or approved lightweight project notes.
- `exports/` - render plans, shot lists, and export notes.
- `qa_reports/` - scene planning and asset QA.
- `templates/` - reusable Unreal mission templates.

## Definition Of Done

- Space purpose and layout are clear.
- Blockout plan includes major zones.
- Asset manifest separates required, optional, and missing assets.
- Script plan avoids destructive operations.
- Render plan names views, mood, and output targets.
- QA report lists risks.

## QA Checklist

- [ ] Scale and layout assumptions are stated.
- [ ] Asset paths are marked planned, missing, or confirmed.
- [ ] Generated Unreal folders are not committed.
- [ ] Script steps are preview-first when risky.
- [ ] Render plan has camera and lighting notes.

## Example Mission Types

- Escape room blockout plan.
- Recording studio environment plan.
- Concert hall scene package.
- Immersive brand showroom.

## Example Codex Task Format

```text
Read AGENTS.md and 03_unreal_spaces/UNREAL_SPACES_LOOP.md. Create a space brief, blockout plan, asset manifest, render plan, and QA report for [space]. Work only in 03_unreal_spaces/.
```

