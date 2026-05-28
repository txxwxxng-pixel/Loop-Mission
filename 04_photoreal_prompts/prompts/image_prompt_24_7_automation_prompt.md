# Image Prompt 24/7 Automation Prompt

Purpose: run one automated image prompt production cycle.

## Target

04_photoreal_prompts

## Required Reading

- AGENTS.md
- README.md
- 04_photoreal_prompts/PHOTOREAL_PROMPTS_LOOP.md
- 04_photoreal_prompts/PROMPT_LEARNINGS.md
- 00_studio_rules/24_7_loop_policy.md
- 00_studio_rules/harness_learning_policy.md

## Backend

Use a configured backend only.

Allowed backend labels:

- openai_images_api
- comfyui_local

Manual generation is useful for review, but it is not a true 24/7 loop.

## Output Checklist

1. Select or create one prompt test.
2. Create a unique run folder.
3. Write prompt files and manifest.
4. Execute the configured backend when available.
5. Record output paths.
6. Write evaluation notes.
7. Classify failures.
8. Create retry prompt if needed.
9. Update PROMPT_LEARNINGS.md only with concrete evidence.

## Rules

- Do not store API keys.
- Do not overwrite previous runs.
- Do not modify unrelated production loops.
- Do not claim generation success without output files.
