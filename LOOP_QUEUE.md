# LOOP_QUEUE.md

Loop Mission queue for independent production loop missions.

## Queue Rules

- Each queue item belongs to one target loop by default.
- Cross-loop handoffs are optional and must be labeled.
- A loop can be planned and executed with `/plan` and `/goal` independently.
- Do not assume all five loops must run in sequence.
- Completed reviewed outputs can be merged to `main`.

## Ready Queue

| Mission ID | Target Loop | Status | Task |
| --- | --- | --- | --- |
| WEB-M001 | `01_interactive_web/` | Review ready | Review landing page MVP and decide whether to merge to main. |
| ADS-M001 | `02_premium_ads/` | Merged | Premium ads campaign package. |
| PROMPT-M001 | `04_photoreal_prompts/` | Merged | Photoreal prompt package. |
| UNREAL-M001 | `03_unreal_spaces/` | Review ready | Review Unreal space concept pack and decide whether to merge to main. |
| UNITY-M001 | `05_unity_2d_games/` | Ready | Create independent Unity game/commerce concept plan. |

## Optional Shared Work

| Shared ID | Scope | Status | Notes |
| --- | --- | --- | --- |
| CAMPAIGN-M001 | Loop Mission launch campaign | Optional | Existing work can be used as shared source, but future loops do not have to follow it. |

