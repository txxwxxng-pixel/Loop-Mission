# Cross-Loop Handoff Rules

## Default

Cross-loop handoff is optional. Codex should not assume that all five production loops must run in sequence.

## When To Create A Handoff

Create a handoff only when:

- The user asks for cross-loop continuation.
- A completed reviewed output is useful to another loop.
- A shared campaign or shared world has been explicitly named.
- The next loop needs source context to avoid guessing.

## Handoff Format

Use a manifest. Do not rely on implicit context.

The manifest should include:

- Source loop.
- Target loop.
- Source files.
- Output files.
- What is approved for reuse.
- What must remain read-only.
- Recommended next `/plan`.
- Recommended next `/goal`.
- Risks and blockers.

## Read-Only Rule

When working in one loop, files from other loops are read-only unless the user explicitly asks to modify them.

## Merge Rule

Before another loop depends on a completed output, prefer merging reviewed source files into `main`. Draft branch-only outputs should not become hidden dependencies.

## Shared IDs

Use `SHARED-M001` or `CAMPAIGN-M001` only when coordination across loops is intentional. Otherwise use the target loop's mission ID.

