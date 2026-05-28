# 24/7 Automation Harness for Loop Mission

## Purpose

This document defines the 24/7 loop, harness, skills, review, and learning structure for Loop Mission.

## Core Structure

```text
Codex Automation or Hermes Scheduler
  -> task selection
  -> worktree execution
  -> build or prompt run
  -> validation
  -> run report
  -> learning update
  -> next seed
```

## Target Loops

- 01_interactive_web
- 04_photoreal_prompts
- 05_unity_2d_games

## Roles

- Planner: creates the next scoped task.
- Builder: produces one loop-specific output.
- Evaluator: checks output quality and validation evidence.
- Learning updater: writes reusable lessons.
- Human reviewer: approves visual direction, merge, and release decisions.

## Harness Files

The harness should include:

- loop policy documents
- run report templates
- learning files
- Codex skills
- validation scripts
- review scorecards
- next seed documents

## Safety Rules

- Use worktrees or branches for repeated work.
- Do not push generated binaries by default.
- Do not store secrets in the repo.
- Do not merge automatically without review.
- Keep each automated loop small and measurable.

## 24/7 Definition

A loop is 24/7-ready only when it can run from a scheduler without manual UI steps, record output paths, validate the result, and write a run report.

Manual image generation is useful for quality exploration, but it is not a true 24/7 generation loop.
