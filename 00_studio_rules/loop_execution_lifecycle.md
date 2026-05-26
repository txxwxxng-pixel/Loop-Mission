# Loop Execution Lifecycle

## Lifecycle

Each independent loop run follows this lifecycle:

```text
planning -> reference gathering -> production -> QA -> export/archive -> next seed
```

## Stage 1: Planning

Define:

- Target loop.
- Mission ID.
- Output requirements.
- Scope boundaries.
- Files allowed to change.
- Known blockers.

## Stage 2: Reference Gathering

Use references that belong to the target loop. If another loop is used as a source, treat it as read-only unless the user explicitly asks for cross-loop edits.

Reference output should include:

- Source files or links.
- Useful direction.
- Rejected direction.
- Open questions.

## Stage 3: Production

Create the loop-specific output:

- Web: brief, prototype, run guide, QA.
- Ads: campaign brief, captions, prompts, upload plan, QA.
- Unreal: space brief, blockout, asset/script/render plan, QA.
- Photoreal prompts: full prompt, compact prompt, negative prompt, variations, QC.
- Unity: market analysis, game concept, core loop, MVP, monetization, QA.

## Stage 4: QA

QA must confirm:

- Target loop stayed isolated.
- Required outputs exist.
- File paths are correct.
- No forbidden files were created.
- Remaining blockers are named.

## Stage 5: Export Or Archive

Export or archive should include:

- Final output or export notes.
- QA report.
- Manifest.
- Source references.
- Next seed.

## Stage 6: Next Seed

The next seed should be one concrete future task for the same loop by default. Cross-loop seeds are optional and must be labeled as handoffs.

