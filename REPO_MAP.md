# REPO_MAP.md

## Folder Purpose

- `00_studio_rules/` - repo-wide operating rules, QA standards, naming rules, Codex workflow rules, and branch/worktree strategy.
- `01_interactive_web/` - interactive web and homepage production missions.
- `02_premium_ads/` - ad campaign, SNS creative, caption, hashtag, and image prompt missions.
- `03_unreal_spaces/` - Unreal space planning, blockouts, asset manifests, script plans, and render plans.
- `04_photoreal_prompts/` - photorealistic image prompt packs, QC notes, and retry systems.
- `05_unity_2d_games/` - Unity 2D game, commerce, monetization, and store asset planning.
- `90_shared_assets/` - reusable templates and shared non-secret assets.
- `90_shared_assets/project_seeds/` - top-level planning seeds that any loop may read as optional reference.
- `98_archive/` - completed mission archives.
- `99_local_outputs/` - local generated outputs, logs, cache files, temporary exports, and non-committed work products.
- `LOOP_QUEUE.md` - queue of independent loop missions.
- `CURRENT_LOOP_TASKS.md` - current status and next action for each independent loop.
- `C:\Users\User\Desktop\Work\Loop Mission Worktrees\` - external local Git worktrees for production branches; these are outside the main repo and should not be committed.
- `worktrees/` - optional fallback local checkout folder inside the repo if explicitly requested; this folder is ignored and should not be committed.

## Standard Loop Subfolders

- `briefs/` - mission briefs and scope notes.
- `references/` - source links, inspiration notes, screenshots, and reference summaries.
- `prompts/` - generation prompts, Codex task prompts, and prompt packs.
- `projects/` - active mission project files that belong to the loop.
- `exports/` - export notes and final deliverables safe to track.
- `qa_reports/` - validation reports and review notes.
- `templates/` - loop-specific reusable templates.

## Project Seeds And Input Contracts

- Project seeds live in `90_shared_assets/project_seeds/`.
- Seed template: `90_shared_assets/templates/project_seed_template.md`.
- Project seeds are optional top-level references, not mandatory cross-loop workflows.
- Each loop can use its own input contract from its `templates/` folder before `/plan` or `/goal`.
- Cross-loop source use should be explicit and read-only unless a handoff manifest says otherwise.

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
- Heavy image outputs under `04_photoreal_prompts/generated_outputs/`.
- Local checkout folders under `worktrees/`.
- External worktree folders copied back into the main repo.

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

## Independent Loop Model

One loop run means one production line completes:

```text
planning -> reference gathering -> production -> QA -> export/archive -> next seed
```

The five production loops are independent. They do not have to run in sequence. Cross-loop handoff is optional and should be written as a manifest.

Mission IDs:

- `WEB-M001`
- `ADS-M001`
- `UNREAL-M001`
- `PROMPT-M001`
- `UNITY-M001`
- Optional shared labels: `SHARED-M001`, `CAMPAIGN-M001`

## How Codex Should Navigate

1. Read `AGENTS.md`.
2. Read `00_studio_rules/independent_loop_protocol.md`.
3. Read the target loop master document.
4. Inspect existing files in the target folder.
5. Confirm the task affects only one production loop unless instructed otherwise.
6. Use shared templates from `90_shared_assets/templates/`.
7. Save completed outputs with versioned names.
8. Report validation and next task.
