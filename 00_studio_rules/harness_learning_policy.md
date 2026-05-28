# Harness Learning Policy

## Purpose

This policy defines how Loop Mission improves repeated work without changing model weights.

## Learning Sources

- run reports
- validation logs
- review scorecards
- user feedback
- accepted outputs
- rejected outputs
- repeated failure patterns

## Learning Files

Each loop should keep a learning file:

- 01_interactive_web/WEB_LEARNINGS.md
- 04_photoreal_prompts/PROMPT_LEARNINGS.md
- 05_unity_2d_games/UNITY_LEARNINGS.md

## What To Record

Record concrete lessons only.

Good:
- A layout rule that improved mobile readability.
- A prompt change that reduced visual drift.
- A Unity folder rule that prevented missing references.

Bad:
- Make it better.
- Improve quality.
- Try harder next time.

## Repeated Failure Rule

If the same failure appears twice, propose one of these updates:

- update the loop AGENTS.md
- update a Codex skill
- update a template
- update a validation script
- create a new reference note

## Skill Patch Rule

Do not silently change safety rules. Skill patches that affect file access, deletion, pushing, secrets, or production release require review.
