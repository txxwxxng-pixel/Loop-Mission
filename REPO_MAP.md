# REPO_MAP.md

## Folder Purpose

- `00_studio_rules/` - repo-wide operating rules, QA standards, naming rules, Codex workflow rules, and branch/worktree strategy.
- `01_interactive_web/` - interactive web and homepage production missions.
- `02_premium_ads/` - ad campaign, SNS creative, caption, hashtag, and image prompt missions.
- `03_unreal_spaces/` - Unreal space planning, blockouts, asset manifests, script plans, and render plans.
- `04_photoreal_prompts/` - photorealistic image prompt packs, QC notes, and retry systems.
- `05_unity_2d_games/` - Unity 2D game, commerce, monetization, and store asset planning.
- `90_shared_assets/` - reusable templates and shared non-secret assets.
- `98_archive/` - completed mission archives.
- `99_local_outputs/` - local generated outputs, logs, cache files, temporary exports, and non-committed work products.
- `worktrees/` - optional local Git worktrees when explicitly created later; this folder is ignored and should not be committed.

## Standard Loop Subfolders

- `briefs/` - mission briefs and scope notes.
- `references/` - source links, inspiration notes, screenshots, and reference summaries.
- `prompts/` - generation prompts, Codex task prompts, and prompt packs.
- `projects/` - active mission project files that belong to the loop.
- `exports/` - export notes and final deliverables safe to track.
- `qa_reports/` - validation reports and review notes.
- `templates/` - loop-specific reusable templates.

## What Belongs In Main

- Studio rules.
- Shared templates.
- Roadmap and sprint board.
- Repo map.
- Loop master documents.
- Small documentation updates that improve repeatable production.

## What Should Not Be Committed

- `.env`, `.env.*`, `*.env`.
- Secrets, keys, credentials, and tokens.
- Raw Unreal generated folders such as `Binaries/`, `Intermediate/`, `Saved/`, and `DerivedDataCache/`.
- Unity generated folders such as `Library/`, `Temp/`, `Obj/`, and `UserSettings/`.
- Large binaries, vendor asset packs, caches, logs, and local experiments.
- Generated files under `99_local_outputs/logs/` or `99_local_outputs/cache/`.
- Local checkout folders under `worktrees/`.

## How Outputs Should Be Archived

Use a dated archive folder:

```text
98_archive/YYYY-MM-DD_loop-name_mission-slug/
```

Each archive should contain:

- Mission brief.
- Final output or export notes.
- QA report.
- Production output manifest.
- Required references or reproduction notes.

## How Codex Should Navigate

1. Read `AGENTS.md`.
2. Read the target loop master document.
3. Inspect existing files in the target folder.
4. Confirm the task affects only one production loop unless instructed otherwise.
5. Use shared templates from `90_shared_assets/templates/`.
6. Save completed outputs with versioned names.
7. Report validation and next task.
