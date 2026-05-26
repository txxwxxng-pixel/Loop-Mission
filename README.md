# Loop Mission

Loop Mission is a Codex-centered one-person AI studio production system. It is not a single app and it does not start with a dashboard. The repository holds the operating rules, templates, folder structure, and production records needed to turn ideas into finished outputs.

## Production Loops

Loop Mission has five independent production lines:

1. `01_interactive_web/` - interactive websites, landing pages, brand homepages, animated web prototypes, and deployment-ready web experiments.
2. `02_premium_ads/` - premium campaign concepts, image prompt packs, social captions, hashtag sets, and upload-ready creative plans.
3. `03_unreal_spaces/` - escape rooms, audio studios, concert halls, immersive environments, blockout plans, Unreal notes, and render plans.
4. `04_photoreal_prompts/` - photoreal image prompts, compact prompts, negative prompts, variation sets, QC notes, and retry prompts.
5. `05_unity_2d_games/` - mobile 2D game concepts, market references, core loops, Unity MVP plans, monetization plans, and store asset plans.

## How To Use This Repo

- Keep `main` focused on studio rules, shared templates, roadmaps, sprint planning, repo maps, and reusable operating documents.
- Run production work inside one target loop folder at a time.
- Use separate branches or worktrees for substantial production missions.
- Archive completed missions in `98_archive/` with a manifest and QA report.
- Keep local generated files, experiments, logs, and caches in `99_local_outputs/`.

## How Codex Should Work Here

Codex should inspect the repo before editing, read `AGENTS.md`, identify the target production loop, and keep edits scoped to that loop unless the user explicitly asks for shared documentation changes. Codex should not create a Streamlit dashboard unless explicitly requested.

Each task should end with:

- Changed files.
- Validation performed.
- Remaining blockers or risks.
- Recommended next task.

## What Counts As A Real Output

A real output is usable by the user without needing hidden context. Depending on the loop, this may be a responsive prototype, a campaign prompt pack, an Unreal blockout plan, a validated image prompt set, or a Unity MVP plan. Every real output should include enough brief, source notes, deliverable files, QA notes, and archive metadata to continue the next production step.

## Archiving Missions

Completed missions should be archived under `98_archive/` using a dated mission folder:

```text
98_archive/YYYY-MM-DD_loop-name_mission-slug/
```

Each archive should include:

- Mission brief.
- Final output or export notes.
- QA report.
- Production output manifest.
- Any references needed to reproduce or continue the work.

