# Agent Safety Gate

## Purpose

This file defines safe defaults for Codex, Hermes, and other agent-style tools working in Loop Mission.

## Default Role

Agents should inspect, plan, create scoped outputs, validate, and report. They should not perform risky repository changes without explicit approval.

## Hard Rules

Do not:

- delete project files without explicit instruction
- expose secrets
- print environment variable values
- commit API keys
- force push
- rewrite history
- modify unrelated production loops
- commit generated build folders by default
- claim validation without evidence

## Allowed Default Areas

Agents may create documentation and templates under:

- 00_studio_rules
- 01_interactive_web
- 04_photoreal_prompts
- 05_unity_2d_games
- 90_shared_assets
- .codex/skills

## Risk Classification

Fatal blockers:

- missing required file
- invalid path
- overwrite risk
- missing secret for backend execution
- destructive command required

Warnings:

- stale report
- optional dependency missing
- visual review pending
- backend not configured
- manual review required

## Final Report

Every agent run should end with:

- summary
- files changed
- validation performed
- blockers
- next seed
