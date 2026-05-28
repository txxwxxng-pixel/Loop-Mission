# Prompt Learnings

This file stores concrete reusable lessons from image prompt execution and review.

## Proven Patterns

- Empty initially.

## Repeated Failure Patterns

- Empty initially.

## Prompt Construction Rules

- Start with intent and subject before visual detail.
- Keep camera, lighting, background, material, and constraints separate.
- Use compact prompts when the full prompt is too dense.
- Use negative prompts to reduce common artifacts, not to overload the generation.

## Retry Rules

- If structure fails, simplify composition first.
- If style drifts, strengthen style language.
- If face or anatomy fails, reduce pose complexity.
- If the image feels generic, add one symbolic prop or scene-specific detail.
- If results repeat without improvement, change composition or camera, not only adjectives.

## Backend Notes

Manual mode is useful for quality exploration, but it is not a true 24/7 loop.

API or local backend mode is required for unattended generation.

## Archived Learnings Format

### YYYY-MM-DD - run_slug

Input:
- prompt file:
- backend:
- reference:

Result:
- quality score:
- accepted:
- failure classes:

Learning:
- concrete reusable lesson

Next retry:
- specific change
