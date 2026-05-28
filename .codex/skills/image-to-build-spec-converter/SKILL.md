---
name: image-to-build-spec-converter
description: Convert selected visual concepts into buildable web or Unity 2D implementation specs.
---

# Image to Build Spec Converter

## Use When

Use after a visual concept image has been selected.

## Inputs

- image path or description
- selected reason
- target loop
- current repo structure
- reference documents

## Outputs For Web

- layout map
- component list
- motion spec
- responsive rules
- asset list
- Codex build prompt

## Outputs For Unity 2D

- scene list
- asset list
- script list
- gameplay rules
- UI or HUD spec
- Codex build prompt

## Rule

Do not attempt pixel-perfect replication.

Preserve visual hierarchy, style direction, composition logic, and user experience intent.

Simplify details that are not buildable in one iteration.
