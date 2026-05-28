---
name: loop-learning-updater
description: Update Loop Mission learning files from reviewed run reports and repeated failure patterns.
---

# Loop Learning Updater

## Use When

Use this skill after a loop run has a run report, review notes, or validation result.

## Required Reading

- 00_studio_rules/harness_learning_policy.md
- target loop learning file
- target loop run report
- target loop review notes

## Output

- concrete lessons
- repeated failure patterns
- learning file patch proposal
- skill patch proposal when needed
- next experiment suggestions

## Rules

- Only record concrete lessons.
- Do not add vague improvement notes.
- Do not silently change safety rules.
- If the same failure appears twice, propose a template or skill update.
