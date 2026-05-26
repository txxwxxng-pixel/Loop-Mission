# File Naming Rules

## Standard Pattern

Use lowercase or readable kebab-case for new production files:

```text
YYYY-MM-DD_loop-name_mission-slug_artifact-type_v01.md
```

Examples:

```text
2026-05-26_interactive-web_luxury-studio-homepage_brief_v01.md
2026-05-26_premium-ads_launch-campaign_prompt-pack_v01.md
```

## Folder Names

- Keep root loop folder names unchanged.
- Use `briefs/`, `references/`, `prompts/`, `projects/`, `exports/`, `qa_reports/`, and `templates/` inside loops.
- Use `98_archive/YYYY-MM-DD_loop-name_mission-slug/` for completed missions.

## Versioning

- Use `_v01`, `_v02`, `_v03` for substantial revisions.
- Do not overwrite exports unless the user explicitly asks.
- Keep old versions when they contain user-reviewed decisions.

## Avoid

- Spaces in new production filenames.
- Ambiguous names like `final.md`, `new.md`, or `test.md`.
- Secret-bearing filenames.
- Raw generated engine folders in committed paths.

