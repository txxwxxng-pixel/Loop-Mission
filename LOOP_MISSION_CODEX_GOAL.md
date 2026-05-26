# Loop Mission Codex Goal

## Project Identity

Project name: Loop Mission

Project location concept:

```text
C:\Users\User\Desktop\Work\Loop Mission
```

Loop Mission is a Codex-centered one-person AI studio production system.

This repository is not a normal app repository.
It should become a practical production system that helps one person continuously create, validate, archive, and improve real outputs across multiple creative and technical production loops.

The project should not depend on a Streamlit central control tower at the beginning.
The user will manually manage direction and review results.
Codex should act as the execution worker inside each production loop.

---

## North Star

The repo’s north star is to become a one-person AI studio operating system where every idea can be converted into a production mission, every mission produces a real usable output, and every output is validated, archived, and ready for the next production step.

---

## Five Production Loops

### 1. Interactive Web Design / Homepage Production

Goal:

- Interactive websites
- Landing pages
- Brand homepages
- Animated web experiences
- Deployable web prototypes

Expected outputs:

- Website brief
- Web project structure
- Interactive prototype
- Responsive layout
- README run guide
- QA report
- Export or deployment notes

---

### 2. Premium Advertising / SNS Creative Production

Goal:

- Premium ad campaign planning
- Image generation prompts
- Instagram-ready images
- SNS captions
- Product and brand promotion materials

Expected outputs:

- Campaign brief
- Brand concept
- Image prompt pack
- Instagram caption pack
- Hashtag set
- Upload-ready asset plan
- QA report

---

### 3. Unreal Engine 3D Space Production

Goal:

- Escape rooms
- Audio studios
- Concert halls
- Immersive 3D environments
- Scene planning, blockout, automation scripts, rendering plans

Expected outputs:

- Space brief
- Reference plan
- Blockout plan
- Unreal project notes
- Asset manifest
- Script plan
- Render plan
- QA report

---

### 4. Photorealistic Image Prompt Production

Goal:

- Realistic image generation prompts
- Full prompts
- Compact prompts
- Negative prompts
- Variation prompts
- QC and failure analysis

Expected outputs:

- Full prompt
- Compact prompt
- Negative prompt
- Variation prompts
- QC checklist
- Failure analysis
- Retry prompt

---

### 5. Unity 2D Game / Commerce Production

Goal:

- Mobile 2D game concepts
- High-revenue app/game reference analysis
- Playable MVP planning
- Monetization design
- Product sales connection

Expected outputs:

- Market reference analysis
- Game concept brief
- Core loop design
- Unity project plan
- Monetization plan
- Store asset plan
- QA report

---

## Important Operating Direction

- Do not create a Streamlit dashboard unless explicitly requested.
- Do not treat this as a single app.
- Treat it as five repeatable production lines.
- Each production loop should be able to run independently.
- Each loop should eventually use its own branch/worktree-style workflow to avoid conflicts.
- The main branch should contain studio rules, shared structure, templates, and operating documents.
- Branch-specific production work should happen later under separate production branches.

---

## First Pass Task

Create the base project operating structure for Loop Mission.

This first pass is for creating the operating foundation only.
Do not create unnecessary code yet.
Do not create a Streamlit app.
Do not over-engineer.

---

## Required Output 1: README.md

Create or update `README.md`.

It must explain:

- What Loop Mission is
- The five production loops
- How the repo should be used
- How Codex should work in this repo
- What counts as a real output
- How production missions should be archived

---

## Required Output 2: AGENTS.md

Create `AGENTS.md` at the repository root.

This is the most important file.

It must give Codex clear repo-wide working rules.

Include these rules:

- Always inspect before editing.
- Do not mix production lines in one task.
- Work inside the target production line folder unless explicitly told otherwise.
- Do not create a Streamlit dashboard unless explicitly requested.
- Do not modify unrelated folders.
- Do not delete user outputs.
- Do not overwrite local outputs without versioning.
- Do not commit secrets, API keys, `.env` files, large binaries, raw Unreal/Unity generated folders, or vendor assets.
- Prefer practical deliverables over vague theory.
- Every task must produce real usable output.
- At the end of every task, report changed files, validation performed, remaining blockers, and recommended next task.

Also include blocker classification:

- Fatal blocker: missing files, invalid paths, overwrite risk, destructive operation risk, secrets exposure, or impossible validation.
- Warning: incomplete context, optional missing references, minor lint issues, partial validation.
- Optional: improvements that are useful but not required for the current mission.

---

## Required Output 3: Main Folder Structure

Create this main folder structure:

```text
00_studio_rules/
01_interactive_web/
02_premium_ads/
03_unreal_spaces/
04_photoreal_prompts/
05_unity_2d_games/
90_shared_assets/
98_archive/
99_local_outputs/
```

Inside each production loop folder, create practical subfolders where appropriate:

```text
briefs/
references/
prompts/
projects/
exports/
qa_reports/
templates/
```

Adjust subfolder names slightly only if a loop needs more suitable naming, but keep the structure simple and clear.

---

## Required Output 4: Studio Rule Documents

Create these documents:

```text
00_studio_rules/operating_rules.md
00_studio_rules/definition_of_done.md
00_studio_rules/file_naming_rules.md
00_studio_rules/qa_rules.md
00_studio_rules/codex_workflow_rules.md
00_studio_rules/branch_worktree_strategy.md
```

These documents must be practical and execution-focused.

They should include:

- Mission workflow
- Output rules
- File naming rules
- QA requirements
- Branch/worktree strategy
- What should be modified in main
- What should be modified only in production branches
- What should never be committed

---

## Required Output 5: Production Loop Master Documents

Create these documents:

```text
01_interactive_web/INTERACTIVE_WEB_LOOP.md
02_premium_ads/PREMIUM_ADS_LOOP.md
03_unreal_spaces/UNREAL_SPACES_LOOP.md
04_photoreal_prompts/PHOTOREAL_PROMPTS_LOOP.md
05_unity_2d_games/UNITY_2D_GAMES_LOOP.md
```

Each loop document must include:

- Purpose
- Input requirements
- Output requirements
- Folder usage
- Definition of done
- QA checklist
- Example mission types
- Example Codex task format

---

## Required Output 6: Shared Templates

Create these templates:

```text
90_shared_assets/templates/mission_brief_template.md
90_shared_assets/templates/qa_report_template.md
90_shared_assets/templates/codex_task_template.md
90_shared_assets/templates/production_output_manifest_template.md
```

These templates should be copy-ready and reusable.

Each template should be practical enough to use immediately.

---

## Required Output 7: ROADMAP.md

Create `ROADMAP.md`.

Include:

- Phase 1: Base studio operating system
- Phase 2: Five production branches/worktrees
- Phase 3: First output loop tests
- Phase 4: Repeatable production archive
- Phase 5: Monetization-ready product/output pipelines

---

## Required Output 8: SPRINT_BOARD.md

Create `SPRINT_BOARD.md`.

Include:

- Current objective
- Next 5 practical missions, one for each production loop
- Blocked items
- Ready-to-run Codex tasks
- Validation checklist

---

## Required Output 9: REPO_MAP.md

Create `REPO_MAP.md`.

Explain:

- Folder purpose
- What belongs where
- What should not be committed
- How outputs should be archived
- How Codex should navigate the repo

---

## Required Output 10: .gitignore

Create or update `.gitignore`.

Make sure it excludes:

```text
.env
.env.*
*.env
secrets/
*.key
*.pem
node_modules/
__pycache__/
*.pyc
.pytest_cache/
.venv/
venv/
dist/
build/
.cache/
.DS_Store
Thumbs.db

# Unreal Engine
Binaries/
Intermediate/
Saved/
DerivedDataCache/
.vs/
*.sln
*.opensdf
*.sdf
*.suo
*.xcodeproj
*.xcworkspace

# Unity
Library/
Temp/
Obj/
Logs/
Build/
Builds/
UserSettings/
*.csproj
*.sln

# Local generated outputs
99_local_outputs/logs/
99_local_outputs/cache/
*.log
```

Do not remove useful existing ignore rules if the file already exists.

---

## Style Rules

- Keep everything practical.
- Avoid abstract business theory.
- Use clear markdown.
- Prefer checklists, exact folder rules, and output definitions.
- Do not write vague motivational text.
- Do not create unnecessary code.
- Do not create a Streamlit app.
- Do not over-engineer.
- This first pass should make future execution faster.

---

## Validation Requirements

After implementation:

- Show final file/folder summary.
- Show files created or modified.
- Check that markdown files reference correct folder names.
- Check that all five loops have clear output requirements.
- Check that `AGENTS.md` clearly prevents cross-loop conflicts.
- Do not run destructive commands.
- Do not modify secrets, env files, vendor assets, or large binaries.

---

## Final Response Format

Use this final response format:

```text
1. Summary
2. Files created/modified
3. Key operating rules added
4. Validation performed
5. Remaining blockers or risks
6. Recommended next Codex task
```
