# Independent Loop Protocol

## Correct Loop Definition

A Loop Mission "loop" is one independent production line completing its own repeatable cycle:

```text
planning -> reference gathering -> production -> QA -> export/archive -> next seed
```

A loop does not mean running all five production lines in sequence.

## Five Independent Production Loops

- `01_interactive_web/`
- `02_premium_ads/`
- `03_unreal_spaces/`
- `04_photoreal_prompts/`
- `05_unity_2d_games/`

Each loop can run separately in its own branch or worktree. A loop mission can start, finish, QA, export, archive, and seed the next task without requiring any other loop.

## Default Rule

Codex should assume the target loop is independent unless the user explicitly asks for a shared campaign, cross-loop handoff, or multi-loop coordination.

## One Loop Run

One loop run means:

1. Plan the mission.
2. Gather or summarize references.
3. Produce the loop-specific output.
4. Run QA for that loop.
5. Export or archive the output.
6. Write the next seed for a future mission in the same loop.

## Cross-Loop Work

Cross-loop handoff is optional. It should be written as a manifest, not assumed.

Use cross-loop coordination only when:

- The user asks for it.
- A completed output is explicitly useful to another loop.
- A shared campaign or shared world has been clearly named.

Use labels such as `SHARED-M001` or `CAMPAIGN-M001` when a mission is intentionally shared across loops.

## Merge Rule

Completed loop outputs should be merged to `main` only after review. Drafts, generated assets, local outputs, and risky engine files should stay out of `main`.

