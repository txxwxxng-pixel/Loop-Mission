# Branch And Worktree Strategy

## Main Branch Purpose

`main` should contain:

- Studio operating rules.
- Shared templates.
- Roadmap and sprint board.
- Repo map.
- Loop master documents.
- Small documentation updates that improve future missions.

## Production Branch Purpose

Use these production branches for substantial loop-specific output:

- `lm/01-interactive-web`
- `lm/02-premium-ads`
- `lm/03-unreal-spaces`
- `lm/04-photoreal-prompts`
- `lm/05-unity-2d-games`

Mission-specific branches can be created later from these loop branches when needed:

- `lm/01-interactive-web/<mission-slug>`
- `lm/02-premium-ads/<mission-slug>`
- `lm/03-unreal-spaces/<mission-slug>`
- `lm/04-photoreal-prompts/<mission-slug>`
- `lm/05-unity-2d-games/<mission-slug>`

## Worktree Rules

- One worktree should focus on one production loop.
- Do not use one worktree to edit multiple loop outputs unless explicitly requested.
- Keep local worktrees outside the main repo by default.
- Current local worktree root: `C:\Users\User\Desktop\Work\Loop Mission Worktrees`.
- Use `loop-web`, `loop-ads`, `loop-unreal`, `loop-prompts`, and `loop-unity` as the local worktree folder names.
- Keep generated local outputs out of commits.
- Bring only reviewed, useful artifacts back to `main`.

## Never Commit

- Secrets, tokens, keys, `.env` files.
- Raw Unreal generated folders.
- Raw Unity generated folders.
- Vendor asset packs without explicit approval.
- Large binaries unless explicitly approved.
- Temporary logs, caches, or local experiments.
