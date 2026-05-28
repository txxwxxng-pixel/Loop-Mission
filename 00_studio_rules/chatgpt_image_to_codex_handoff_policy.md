# ChatGPT Image to Codex Handoff Policy

## Purpose

This policy defines how visual concepts generated in ChatGPT should be converted into buildable Codex tasks.

## Roles

ChatGPT image generation is used for visual exploration, mood, composition, concept frames, and UI or game style direction.

Codex is used for planning documents, implementation specs, code, build validation, and learning updates.

## Handoff Inputs

A good handoff should include:

- image path or description
- selected concept reason
- what to preserve
- what to simplify
- what to ignore
- target implementation path
- responsive or platform requirements
- priority features

## Handoff Output

Codex should convert the design into:

- layout map
- component list
- asset list
- motion spec
- color and material direction
- implementation tasks
- validation checklist

## Important Rule

The image is a design reference, not a literal pixel-perfect requirement.

Codex should preserve visual hierarchy, mood, composition logic, interaction intent, and style language.

Codex may simplify unbuildable detail, excessive decoration, inconsistent elements, nonfunctional UI, or impossible animation.

## Review

Every image-to-build conversion should identify must-preserve elements, simplifications, needed assets, code requirements, and manual art decisions.
