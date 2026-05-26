# Loop Mission Naming Rules

## Independent Loop Mission IDs

Each loop owns its own mission numbering:

- Interactive web: `WEB-M001`, `WEB-M002`, `WEB-M003`
- Premium ads: `ADS-M001`, `ADS-M002`, `ADS-M003`
- Unreal spaces: `UNREAL-M001`, `UNREAL-M002`, `UNREAL-M003`
- Photoreal prompts: `PROMPT-M001`, `PROMPT-M002`, `PROMPT-M003`
- Unity 2D games: `UNITY-M001`, `UNITY-M002`, `UNITY-M003`

Do not treat `M001` in one loop as requiring `M001` in every other loop.

## Shared Mission IDs

Use shared IDs only when the user intentionally creates a multi-loop campaign or shared world:

- `SHARED-M001`
- `CAMPAIGN-M001`

Shared IDs do not replace loop-specific IDs. They are labels for coordination.

## File Naming

Recommended pattern:

```text
<loop-id>_<mission-slug>_<artifact-type>.md
```

Examples:

```text
WEB-M001_landing-page_brief.md
ADS-M001_launch-campaign_caption-pack.md
UNREAL-M001_studio-room_blockout-plan.md
PROMPT-M001_studio-hero_prompt-pack.md
UNITY-M001_core-loop_mvp-plan.md
```

Existing descriptive filenames may remain valid if they are clear and scoped.

## Archive Naming

Use:

```text
98_archive/YYYY-MM-DD_<loop-id>_<mission-slug>/
```

Examples:

```text
98_archive/2026-05-27_WEB-M001_landing-page/
98_archive/2026-05-27_ADS-M001_launch-campaign/
```

