# Image Generation Workflow

## Role Separation

The photoreal prompt loop creates design instructions. The image generation step uses ChatGPT image generation, Midjourney, Stable Diffusion, ComfyUI, an API, or another image tool.

Codex itself is not the image model unless an external image generation API or local generation workflow is connected.

## What Codex Can Prepare

- Prompt files.
- Generation job files.
- Negative prompts.
- Variation plans.
- QA checklists.
- Manifest files.
- Retry and failure correction prompts.

## What Generates Images

The user or a connected image system generates the actual images.

## Recommended Folders

```text
04_photoreal_prompts/generated_jobs/
04_photoreal_prompts/generated_outputs/
04_photoreal_prompts/qc_reports/
04_photoreal_prompts/exports/
```

## Git Rules

- Store image job specs and manifests in Git.
- Heavy generated image outputs should usually stay local or external.
- Commit generated images only with explicit approval.
- Keep `04_photoreal_prompts/generated_outputs/` ignored except for `.gitkeep`.

## Workflow

1. Create or read a project seed.
2. Create a loop-specific image prompt input contract.
3. Produce full, compact, negative, and variation prompts.
4. Create an image generation job file.
5. Generate images with a selected image tool.
6. QA outputs with the image generation QA template.
7. Record approved and rejected outputs in a manifest.
8. Archive or hand off approved outputs.

