# Git Setup Guide

## Purpose

This guide defines the local Git, GitHub remote, branch, and future worktree workflow for Loop Mission.

## Safe Setup Sequence

Use this sequence for a new local checkout:

```text
git rev-parse --is-inside-work-tree
git init -b main
git status --short --branch
git add .
git commit -m "Initialize Loop Mission studio operating foundation"
git remote -v
```

If `origin` does not exist, stop and add a GitHub remote only after the user provides the repository URL:

```text
git remote add origin <github-repository-url>
git push -u origin main
```

Do not force push, rewrite history, delete files, or run destructive commands.

## Main Branch

`main` is for the studio operating foundation:

- `README.md`
- `AGENTS.md`
- `ROADMAP.md`
- `SPRINT_BOARD.md`
- `REPO_MAP.md`
- `.gitignore`
- `00_studio_rules/`
- `90_shared_assets/templates/`
- Loop master documents

## Production Branches

Create these branches from a clean `main`:

```text
lm/01-interactive-web
lm/02-premium-ads
lm/03-unreal-spaces
lm/04-photoreal-prompts
lm/05-unity-2d-games
```

Each branch should focus on one production loop only.

## Push Workflow

After `origin` exists and permissions are available:

```text
git push -u origin main
git push -u origin lm/01-interactive-web
git push -u origin lm/02-premium-ads
git push -u origin lm/03-unreal-spaces
git push -u origin lm/04-photoreal-prompts
git push -u origin lm/05-unity-2d-games
```

If authentication or permissions fail, stop and report the exact error.

## Future Worktree Workflow

Do not create local worktrees until the repository is clean and the user explicitly asks for production worktree setup.

Recommended local worktree paths:

```text
worktrees/lm-01-interactive-web
worktrees/lm-02-premium-ads
worktrees/lm-03-unreal-spaces
worktrees/lm-04-photoreal-prompts
worktrees/lm-05-unity-2d-games
```

`worktrees/` must remain ignored because these are local checkout folders, not studio deliverables.

## Never Commit

- Secrets, API keys, tokens, `.env`, `.env.*`, or `*.env`.
- Vendor assets without explicit approval.
- Large binaries without explicit approval.
- Unreal generated folders such as `Binaries/`, `Intermediate/`, `Saved/`, and `DerivedDataCache/`.
- Unity generated folders such as `Library/`, `Temp/`, `Obj/`, `Logs/`, and `UserSettings/`.
- Local logs, caches, and generated outputs.

