# Mission 001 Unreal Python Generation Plan

## Purpose

Plan a future preview-first Unreal Python automation script for the Mission 001 AI Studio Operations Room blockout. This is a script plan only. No Unreal project, binaries, generated folders, or editor execution are created in this mission.

## Future Script Goal

Generate a simple blockout scene with:

- Room shell.
- Central Mission Control table.
- Five production loop zone panels.
- QA/archive wall.
- Mission 001 card prop.
- Basic lighting.
- Camera markers.

## Preview-First Policy

The future script should support:

```text
--dry-run
```

Dry run should output:

- Object names.
- Intended transforms.
- Approximate dimensions.
- Material placeholders.
- Camera list.
- Warnings for missing target level or duplicate objects.

The script should not spawn or modify actors unless dry run passes and the user explicitly runs the execute mode.

## Planned Script Inputs

- Target level name.
- Output collection/folder name.
- Scale preset.
- Material preset names.
- Whether to create cameras.
- Whether to create trigger placeholders.

## Planned Generated Actors

- `LM_M001_RoomShell`
- `LM_M001_MissionControlTable`
- `LM_M001_Zone_Web`
- `LM_M001_Zone_Ads`
- `LM_M001_Zone_Unreal`
- `LM_M001_Zone_Prompts`
- `LM_M001_Zone_Unity`
- `LM_M001_QAArchiveWall`
- `LM_M001_MissionCard`
- `LM_M001_Cam_HeroWide`
- `LM_M001_Cam_TableClose`
- `LM_M001_Cam_ArchiveWall`
- `LM_M001_Cam_OperatorPOV`

## Material Placeholder Plan

- `MI_LM_MatteGraphite`
- `MI_LM_BrushedMetal`
- `MI_LM_WarmWhitePanel`
- `MI_LM_DeepRedAccent`
- `MI_LM_GlassDim`

These can be placeholder materials until final art direction is approved.

## Safety Requirements

- Never delete existing actors automatically.
- Detect duplicate `LM_M001_` actors and report before modifying.
- Keep generated actors grouped under a named parent or folder.
- Avoid importing external assets in the first automation pass.
- Do not write to `Binaries/`, `Intermediate/`, `Saved/`, or `DerivedDataCache/`.
- Log all planned changes.

## Future Validation

- Dry-run output matches blockout plan.
- Actor count matches expected list.
- Camera transforms exist.
- Generated scene can be reverted by deleting only `LM_M001_` actors after user approval.
- No vendor assets or large binaries are introduced.

