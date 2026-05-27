# SPRINT_BOARD.md

## Current Objective

Run Loop Mission as five independent production loops. A loop means one production line completes its own cycle:

```text
planning -> reference gathering -> production -> QA -> export/archive -> next seed
```

The five loops do not have to run in sequence. Cross-loop handoff is optional.

## Independent Loop Missions

1. `WEB-M001`: interactive web landing page mission.
2. `ADS-M001`: premium ads campaign mission.
3. `UNREAL-M001`: Unreal space concept mission.
4. `PROMPT-M001`: photoreal prompt mission.
5. `UNITY-M001`: Unity 2D game/commerce mission.

## Worktree Setup

- `loop-web` -> `lm/01-interactive-web`
- `loop-ads` -> `lm/02-premium-ads`
- `loop-unreal` -> `lm/03-unreal-spaces`
- `loop-prompts` -> `lm/04-photoreal-prompts`
- `loop-unity` -> `lm/05-unity-2d-games`

Root:

```text
C:\Users\User\Desktop\Work\Loop Mission Worktrees
```

## Blocked Items

- No output archive examples exist yet.
- `UNITY-M001` has not started yet.
- Cross-loop handoffs must be explicit manifests, not assumed.

## Ready-To-Run Codex Tasks

```text
/plan
Read AGENTS.md, 00_studio_rules/independent_loop_protocol.md, 00_studio_rules/project_seed_usage_rules.md, and 05_unity_2d_games/UNITY_2D_GAMES_LOOP.md. Plan UNITY-M001 as an independent Unity 2D game/commerce mission. Use a project seed only if provided.
```

```text
/goal
Read AGENTS.md, 00_studio_rules/independent_loop_protocol.md, 00_studio_rules/project_seed_usage_rules.md, and 05_unity_2d_games/UNITY_2D_GAMES_LOOP.md. Validate or create the UNITY-M001 input contract, then execute inside 05_unity_2d_games/ only. Do not create Unity project files yet.
```

```text
/goal
Read AGENTS.md and [target loop master document]. Execute one independent loop mission in the target folder only. Use cross-loop sources only if explicitly listed as read-only references.
```

## Recommended Workflow

1. User creates or provides a project seed.
2. Codex runs `/plan` for one target loop.
3. Codex creates or validates the loop input contract.
4. Codex runs `/goal` for that target loop.
5. Codex commits/pushes the branch.
6. User reviews.
7. Approved output is merged to main.
8. Output is archived and next seed/task is created.

## Validation Checklist

- [ ] Target loop is identified.
- [ ] Mission ID uses the target loop prefix.
- [ ] Project seed is used only as optional reference.
- [ ] Loop input contract exists or is explicitly deferred.
- [ ] Only one production loop is modified.
- [ ] Output requirements are clear.
- [ ] QA checklist is completed.
- [ ] Archive destination is proposed.
- [ ] Next seed is written for the same loop by default.
- [ ] Cross-loop handoff is optional and written as a manifest if needed.
- [ ] No secrets, generated engine folders, large binaries, or vendor assets are committed.
