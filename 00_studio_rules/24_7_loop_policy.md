# 24/7 Loop Policy

## Purpose

This policy defines when a Loop Mission workflow is ready to run repeatedly through Codex automation, Hermes scheduling, or another approved scheduler.

## Loop Lifecycle

```text
select task
read references
produce output
validate output
write run report
update learnings
write next seed
```

## Required Conditions

A loop is automation-ready when it has:

- clear allowed paths
- a small task scope
- a validation command or review checklist
- a run report template
- a learning file
- a next seed rule
- branch or worktree isolation

## Worktree Rule

Automated implementation work should run in a branch or worktree. The main branch should receive only reviewed documentation, templates, source files, and safe configuration.

## Review Rule

Automated work can produce candidate outputs. Human review is required before merge, public release, store upload, or production deployment.

## Generated Output Rule

Large generated images, Unity build folders, Unreal generated folders, vendor files, caches, and temporary outputs should stay out of main unless explicitly selected for archive.

## Failure Rule

If validation fails, the loop should classify the failure and create one retry plan. It should not keep retrying endlessly without a new reason.

## Daily Summary

Long-running loops should produce a daily summary with:

- completed tasks
- failed tasks
- validation status
- learning updates
- next recommended task
