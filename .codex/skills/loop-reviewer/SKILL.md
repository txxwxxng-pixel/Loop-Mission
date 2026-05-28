---
name: loop-reviewer
description: Review one Loop Mission output for scope, validation, evidence, and learning updates.
---

# Loop Reviewer

## Use When

Use this skill after a loop output, build spec, prompt pack, or implementation candidate has been produced.

## Required Review Areas

- scope stayed inside target loop
- required files exist
- validation evidence exists
- generated outputs are not overstated
- learning update is concrete
- next seed is specific

## Output

- accepted, needs retry, or blocked
- review notes
- missing evidence
- recommended fix
- learning update recommendation

## Rules

- Do not approve release or merge without validation evidence.
- Do not treat visual references as final implementation.
- Keep review plain markdown.
