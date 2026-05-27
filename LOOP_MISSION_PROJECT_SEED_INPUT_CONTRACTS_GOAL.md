# Loop Mission Codex Goal: Project Seeds, Input Contracts, and Image Generation Workflow

## Purpose

This file is a long-form Codex goal document.

Use this when the Codex app `/goal` character limit is too short.

Recommended usage in Codex app:

```text
/goal

Read LOOP_MISSION_PROJECT_SEED_INPUT_CONTRACTS_GOAL.md and implement the documentation/template updates described there.

Do not create production content.
Do not create a Streamlit app.
Do not create actual images.
Commit and push the documentation/template changes on main.
```

---

## Required Starting Files to Read

Before editing, read:

```text
AGENTS.md
REPO_MAP.md
SPRINT_BOARD.md
LOOP_QUEUE.md
CURRENT_LOOP_TASKS.md
00_studio_rules/independent_loop_protocol.md
01_interactive_web/INTERACTIVE_WEB_LOOP.md
02_premium_ads/PREMIUM_ADS_LOOP.md
03_unreal_spaces/UNREAL_SPACES_LOOP.md
04_photoreal_prompts/PHOTOREAL_PROMPTS_LOOP.md
05_unity_2d_games/UNITY_2D_GAMES_LOOP.md
```

---

## Goal

Enhance the Loop Mission operating system with practical input contracts, project seed handling, image generation job workflow, and realistic production capability rules for Codex-centered work.

Loop Mission has five independent production loops.

A loop run means one production line completes its own cycle:

```text
planning -> reference gathering -> production -> QA -> export/archive -> next seed
```

The five loops are:

```text
01_interactive_web
02_premium_ads
03_unreal_spaces
04_photoreal_prompts
05_unity_2d_games
```

A shared project seed or large category planning document can be used by any loop as an upper-level reference, but it does not mean all five loops must run in sequence.

---

## Scope

Allowed:

```text
- Documentation
- Templates
- Folder placeholders
- Rule updates
- Queue/status doc updates
```

Not allowed:

```text
- Do not create production content.
- Do not create actual images.
- Do not create a Streamlit app.
- Do not create Unreal binaries.
- Do not create Unity binaries.
- Do not create generated engine folders.
- Do not modify secrets.
- Do not modify env files.
- Do not modify vendor assets.
- Do not commit large generated assets.
- Do not change unrelated production content unless needed for documentation consistency.
```

---

# 1. Project Seed System

## Create

```text
90_shared_assets/project_seeds/.gitkeep
90_shared_assets/templates/project_seed_template.md
00_studio_rules/project_seed_usage_rules.md
```

## Update if needed

```text
REPO_MAP.md
SPRINT_BOARD.md
LOOP_QUEUE.md
CURRENT_LOOP_TASKS.md
```

## Project Seed Rules

The project seed rules must explain:

```text
- A project seed is a top-level planning document.
- A project seed can include brand direction, world concept, product category, target market, monetization goal, visual tone, reference direction, and execution priorities.
- Each independent loop may read the project seed and produce its own output.
- A project seed is not a mandatory cross-loop workflow.
- Codex should only execute the target loop unless explicitly asked.
- Cross-loop references should be written as handoff manifests.
```

Example project seed path:

```text
90_shared_assets/project_seeds/seed_001_premium_ai_studio_brand_pack.md
```

## Project Seed Template Requirements

`90_shared_assets/templates/project_seed_template.md` should include:

```text
- Seed ID
- Project title
- Project category
- High-level concept
- Brand/product direction
- Target audience
- Market/use case
- Monetization direction
- Visual tone
- Reference direction
- Production priorities
- Loops that may use this seed
- Optional cross-loop handoff notes
- What must not be assumed
- Approval/QA notes
```

---

# 2. Input Contract Templates

Create these templates:

```text
01_interactive_web/templates/web_input_contract_template.md
02_premium_ads/templates/ads_input_contract_template.md
03_unreal_spaces/templates/unreal_input_contract_template.md
04_photoreal_prompts/templates/image_prompt_input_contract_template.md
05_unity_2d_games/templates/unity_input_contract_template.md
```

Each input contract should define what the user should provide before a loop run.

---

## 2.1 Web Input Contract

Create:

```text
01_interactive_web/templates/web_input_contract_template.md
```

Include:

```text
- Mission ID
- Project seed path
- Brand/service goal
- Target user
- Reference websites
- Page sections
- Required interactions
- Visual style
- Copy tone
- Assets needed
- Responsive targets
- Output type
- Tech preference
- Run command expectation
- QA criteria
- Archive/export target
```

The web contract should make clear that Codex can create:

```text
- HTML/CSS/JS MVPs
- React/Vite projects when appropriate
- Interaction scripts
- Responsive layout
- README/run guide
- QA reports
- Export/handoff manifests
```

The user must verify:

```text
- Visual taste
- Brand fit
- Final copy quality
- Deployment readiness
```

---

## 2.2 Ads Input Contract

Create:

```text
02_premium_ads/templates/ads_input_contract_template.md
```

Include:

```text
- Mission ID
- Project seed path
- Campaign goal
- Product/service offer
- Target audience
- Platform
- Visual direction
- Copy tone
- Required post formats
- Carousel/Reel/feed requirements
- CTA
- Hashtag strategy
- Image generation needs
- Output target
- QA criteria
- Archive/export target
```

The ads contract should make clear that Codex can create:

```text
- Campaign briefs
- SNS captions
- Hashtag sets
- Image prompt handoff docs
- Upload plans
- QA reports
- Handoff manifests
```

The user must verify:

```text
- Brand suitability
- Platform fit
- Final post selection
- Actual upload timing
```

---

## 2.3 Unreal Input Contract

Create:

```text
03_unreal_spaces/templates/unreal_input_contract_template.md
```

Include:

```text
- Mission ID
- Project seed path
- CAD/DXF/PDF/image drawing path
- Known dimensions
- Unit scale
- Total area
- Room list
- Door/window positions
- Ceiling height
- Material direction
- Lighting direction
- Required assets
- Interaction requirements
- Output target
- QA criteria
- Unreal version/project path if available
- Whether the task is planning-only, script-generation, or engine execution
```

The Unreal contract should make clear that Codex can create:

```text
- CAD/drawing interpretation plans
- Scale plans
- Blockout plans
- Material/light/camera plans
- Unreal Python script plans
- Editor automation scripts when project path and version are known
- QA reports
- Export/handoff manifests
```

The user must verify:

```text
- Actual Unreal Editor result
- Space scale by eye
- Asset/material quality
- Lighting quality
- Collision/navigation/interactions
- Final packaged/demo quality
```

Also document:

```text
- Unreal Python is editor automation, not runtime gameplay scripting.
- Avoid committing Binaries, Intermediate, Saved, DerivedDataCache, large assets, or generated folders.
```

---

## 2.4 Photoreal Image Prompt Input Contract

Create:

```text
04_photoreal_prompts/templates/image_prompt_input_contract_template.md
```

Include:

```text
- Mission ID
- Project seed path
- Subject
- Reference handling
- Style/rendering direction
- Scene/background
- Camera/composition
- Lighting
- Mood
- Material/detail quality
- Aspect ratios
- Negative constraints
- Output use case
- Target image generation tool
- Number of variations
- QC criteria
- Archive/export target
```

The prompt contract should make clear that Codex can create:

```text
- Full prompts
- Compact prompts
- Negative prompts
- Variation prompts
- Aspect-ratio-specific prompts
- QC checklists
- Retry/failure correction prompts
- Image generation job specs
- Manifest files
```

The user must verify:

```text
- Final image taste
- Face/body/anatomy quality
- Brand fit
- Upload readiness
```

---

## 2.5 Unity Input Contract

Create:

```text
05_unity_2d_games/templates/unity_input_contract_template.md
```

Include:

```text
- Mission ID
- Project seed path
- Game genre
- High-revenue app/game reference categories
- Core loop
- Player goal
- Session length
- Control style
- Monetization model
- Product sales connection
- MVP scope
- Unity version/project path if available
- Output target
- QA criteria
- Archive/export target
```

The Unity contract should make clear that Codex can create:

```text
- Game concept docs
- Core loop design
- Monetization plans
- C# scripts
- Simple Unity MVP structure when project path/version are known
- Editor script plans
- Build guidance
- QA reports
- Export/handoff manifests
```

The user must verify:

```text
- Actual play feel
- Balance
- Unity Editor state
- Build quality
- Store/commercial readiness
```

Also document:

```text
- Avoid committing Library, Temp, Obj, Logs, Build, Builds, UserSettings, or generated binaries.
```

---

# 3. Image Generation Workflow

## Create

```text
00_studio_rules/image_generation_workflow.md
04_photoreal_prompts/templates/image_generation_job_template.md
04_photoreal_prompts/templates/image_generation_qa_template.md
04_photoreal_prompts/templates/image_generation_manifest_template.md
```

## Update if needed

```text
04_photoreal_prompts/PHOTOREAL_PROMPTS_LOOP.md
.gitignore
```

## Add folders/placeholders if useful

```text
04_photoreal_prompts/generated_jobs/.gitkeep
04_photoreal_prompts/generated_outputs/.gitkeep
```

If `.gitignore` needs a rule for heavy local image outputs, add a safe rule such as:

```text
04_photoreal_prompts/generated_outputs/
```

But keep `.gitkeep` possible only if the ignore pattern supports it, or use a clear note instead.

---

## Image Generation Workflow Rules

`00_studio_rules/image_generation_workflow.md` must explain:

```text
- Prompt Loop creates the design instructions.
- Image Generation Step uses ChatGPT image generation, Midjourney, Stable Diffusion, ComfyUI, API, or another image tool.
- Codex itself is not the image model unless an external image generation API or local generation workflow is connected.
- Codex can prepare prompt files, generation job files, QA checklists, manifest files, and retry prompts.
- The user or connected image system generates the actual images.
- Generated image files should usually not be committed if large.
- Store image job specs and manifests in Git.
- Keep heavy outputs local or external unless explicitly approved.
```

Recommended organization:

```text
04_photoreal_prompts/generated_jobs/
04_photoreal_prompts/generated_outputs/
04_photoreal_prompts/qc_reports/
04_photoreal_prompts/exports/
```

---

## Image Generation Job Template Requirements

`04_photoreal_prompts/templates/image_generation_job_template.md` must include:

```text
- Job ID
- Mission ID
- Source prompt file
- Target tool
- Aspect ratio
- Number of variations
- Output naming rule
- Output folder
- Quality criteria
- Negative prompt
- Retry/failure correction plan
- Archive target
```

---

## Image Generation QA Template Requirements

`04_photoreal_prompts/templates/image_generation_qa_template.md` must include:

```text
- Job ID
- Generated output paths
- Prompt used
- Aspect ratio
- Visual accuracy check
- Composition check
- Lighting check
- Anatomy/object check
- Brand/style fit
- Negative prompt compliance
- Failure causes
- Retry instruction
- Approved outputs
- Rejected outputs
```

---

## Image Generation Manifest Template Requirements

`04_photoreal_prompts/templates/image_generation_manifest_template.md` must include:

```text
- Job ID
- Mission ID
- Source seed
- Source prompt files
- Generated output list
- Approved output list
- Rejected output list
- QA report path
- Usage rights notes
- SNS/web/ad usage notes
- Archive target
- Next seed/task
```

---

# 4. Realistic Production Capability Rules

Create:

```text
00_studio_rules/codex_realistic_production_capabilities.md
```

This document must explain what Codex can realistically do for each production area.

---

## 4.1 Interactive Web

Document:

```text
- Codex can usually create full MVPs with HTML/CSS/JS, React, Vite, or similar tools.
- Codex can create layout, interactions, responsive behavior, README, QA reports, commit/push.
- Codex can run local validation if the environment supports it.
- User should still review visual taste, brand fit, copy quality, and final deployment.
```

---

## 4.2 Unity 2D

Document:

```text
- Codex can create concept docs, C# scripts, simple MVP structure, editor scripts, build guidance, and QA docs.
- With Unity installed and path/version known, Codex can assist with command-line/editor-script workflows.
- User must review gameplay feel, balance, Unity Editor state, and final build quality.
- Avoid committing Library, Temp, Obj, Logs, Build, Builds, UserSettings, or generated binaries.
```

---

## 4.3 Unreal Engine

Document:

```text
- Codex is useful for CAD/drawing interpretation, scale plans, blockout plans, Unreal Python scripts, material/light/camera plans, and QA reports.
- Codex can create scripts and command plans for Unreal Editor automation.
- Unreal final quality requires engine execution, visual review, asset/material polish, and user art direction.
- Unreal Python is editor automation, not runtime gameplay scripting.
- Avoid committing Binaries, Intermediate, Saved, DerivedDataCache, large assets, or generated folders.
```

---

## 4.4 Photoreal Image Generation

Document:

```text
- Codex can generate high-quality prompts, negative prompts, variations, QC checklists, image job specs, retry prompts, and manifests.
- Actual image generation requires a connected image tool or manual image generation step.
- User remains visual director for final selection.
- Heavy image outputs should not be committed unless explicitly approved.
```

---

## 4.5 Premium Ads

Document:

```text
- Codex can create campaign briefs, captions, hashtag sets, image prompt handoffs, upload plans, and QA docs.
- Actual ad performance must be judged by platform metrics and user review.
- Platform upload and account operation may require human approval.
```

---

# 5. Update Existing Loop Docs

Update these docs so they reference project seeds and input contracts:

```text
01_interactive_web/INTERACTIVE_WEB_LOOP.md
02_premium_ads/PREMIUM_ADS_LOOP.md
03_unreal_spaces/UNREAL_SPACES_LOOP.md
04_photoreal_prompts/PHOTOREAL_PROMPTS_LOOP.md
05_unity_2d_games/UNITY_2D_GAMES_LOOP.md
```

Each loop doc should include:

```text
- Project seed usage
- Input contract path
- Independent loop lifecycle
- When to use references
- What Codex can produce
- What the user must verify
- Export/archive expectations
```

Make sure the docs do not imply that all five loops must run in sequence.

Cross-loop handoff remains optional.

---

# 6. Update Queue and Status Docs

Update:

```text
LOOP_QUEUE.md
CURRENT_LOOP_TASKS.md
SPRINT_BOARD.md
```

These should reflect that future work can begin from:

```text
- A project seed
- A loop-specific input contract
- A /plan
- A /goal
```

Add a clear next recommended workflow:

```text
1. User creates or provides a project seed.
2. Codex runs /plan for one target loop.
3. Codex creates or validates the loop input contract.
4. Codex runs /goal for that target loop.
5. Codex commits/pushes the branch.
6. User reviews.
7. Approved output is merged to main.
8. Output is archived and next seed/task is created.
```

---

# 7. Validation

After editing:

```text
- Confirm all new files exist.
- Confirm project seed usage is documented.
- Confirm web/unreal/unity/ads/image input contract templates exist.
- Confirm image generation workflow exists.
- Confirm Codex realistic capability rules exist.
- Confirm docs do not say that all five loops must run in sequence.
- Confirm cross-loop handoff remains optional.
- Confirm .gitignore still protects large/generated outputs.
- Confirm no production content was created.
- Confirm no Streamlit app was created.
- Confirm no Unreal/Unity generated folders were created.
```

---

# 8. Git Tasks

Commit changes on `main` with:

```text
Add project seed input contracts and image generation workflow
```

Push `main` to origin.

Do not modify production branches in this task.

Do not merge production branches.

---

# Final Response Format

Use this final response format:

```text
1. Summary
2. Files created/modified
3. Project seed rules added
4. Input contracts added
5. Image generation workflow added
6. Realistic Codex production capability rules added
7. Validation performed
8. Commit hash
9. Push result
10. Recommended next action
```
