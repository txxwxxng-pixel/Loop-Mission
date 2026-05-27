# Unreal Spaces Loop

## Purpose

Plan Unreal Engine 3D spaces such as escape rooms, audio studios, concert halls, immersive environments, blockouts, automation scripts, and render plans.

## Independent Loop Rule

This loop can run independently as `UNREAL-M001`, `UNREAL-M002`, and so on. One Unreal spaces loop run means:

```text
planning -> reference gathering -> production -> QA -> export/archive -> next seed
```

It does not require web, ads, photoreal prompts, or Unity work unless a cross-loop handoff is explicitly requested.

## Project Seed Usage

This loop may read a project seed from `90_shared_assets/project_seeds/` as optional spatial/world direction. A seed can guide room purpose, mood, materials, target use, and production priorities, but it does not require other loops to run.

## Input Contract

Use:

```text
03_unreal_spaces/templates/unreal_input_contract_template.md
```

Use the contract before `/plan` or `/goal` when scale, drawings, room list, material direction, lighting, assets, project path, or execution mode need to be clarified.

## References

References can include CAD/DXF/PDF/image drawings, project seeds, visual boards, dimensions, or reviewed outputs from other loops. Other loop files are read-only unless a handoff manifest explicitly allows edits.

## Codex Can Produce

- CAD/drawing interpretation plans.
- Scale plans.
- Blockout plans.
- Material/light/camera plans.
- Unreal Python script plans.
- Editor automation scripts when project path and version are known.
- QA reports.
- Export/handoff manifests.

## User Must Verify

- Actual Unreal Editor result.
- Space scale by eye.
- Asset/material quality.
- Lighting quality.
- Collision/navigation/interactions.
- Final packaged/demo quality.

## Export/Archive Expectations

Blockout plans, script plans, QA reports, render notes, and handoff manifests should be stored inside `03_unreal_spaces/`. Do not commit generated Unreal folders or large assets.

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
