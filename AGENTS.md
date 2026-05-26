# AGENTS.md

This file is the repo-wide operating contract for Codex in Loop Mission.

## Core Working Rules

- Always inspect before editing.
- Read this file before making changes.
- Do not mix production lines in one task.
- Work inside the target production line folder unless explicitly told otherwise.
- Do not create a Streamlit dashboard unless explicitly requested.
- Do not modify unrelated folders.
- Do not delete user outputs.
- Do not overwrite local outputs without versioning.
- Do not commit secrets, API keys, `.env` files, large binaries, raw Unreal or Unity generated folders, or vendor assets.
- Prefer practical deliverables over vague theory.
- Every task must produce a real usable output.
- Keep `main` for studio rules, shared templates, roadmap, sprint board, repo map, and reusable operating docs.
- Use production branches or worktrees for substantial loop-specific outputs.
- At the end of every task, report changed files, validation performed, remaining blockers, and recommended next task.

## Production Line Boundaries

- `01_interactive_web/` is only for interactive web and homepage production.
- `02_premium_ads/` is only for advertising, SNS, campaign, caption, and creative prompt production.
- `03_unreal_spaces/` is only for Unreal Engine space planning, scene notes, asset manifests, scripts, and render plans.
- `04_photoreal_prompts/` is only for photorealistic image prompt systems and QC.
- `05_unity_2d_games/` is only for Unity 2D game, commerce, monetization, and store asset planning.
- `90_shared_assets/` is only for reusable templates and shared non-secret assets.
- `98_archive/` is only for completed mission archives.
- `99_local_outputs/` is only for local generated outputs, logs, caches, and temporary exports.

## Blocker Classification

### Fatal Blocker

Stop and report before editing when any of these appear:

- Missing required files.
- Invalid or ambiguous paths.
- Overwrite risk.
- Destructive operation risk.
- Secrets exposure.
- Impossible validation.

### Warning

Continue only if the task can still produce a useful result, and report the warning:

- Incomplete context.
- Optional missing references.
- Minor lint or formatting issues.
- Partial validation.

### Optional

Mention separately from the current mission scope:

- Useful improvements not required for the current mission.
- Future automation opportunities.
- Better archive structure.
- Extra QA checks.

## Required End Report

Every Codex task should finish with:

1. Summary.
2. Files created or modified.
3. Key rules or decisions.
4. Validation performed.
5. Remaining blockers or risks.
6. Recommended next Codex task.

