# Unity 2D Games Loop

## Purpose

Produce Unity 2D game and commerce plans, including mobile game concepts, market reference analysis, playable MVP planning, monetization design, and product sales connections.

## Independent Loop Rule

This loop can run independently as `UNITY-M001`, `UNITY-M002`, and so on. One Unity 2D games loop run means:

```text
planning -> reference gathering -> production -> QA -> export/archive -> next seed
```

It does not require web, ads, Unreal, or photoreal prompt work unless a cross-loop handoff is explicitly requested.

## Project Seed Usage

This loop may read a project seed from `90_shared_assets/project_seeds/` as optional game/product direction. A seed can guide genre, target player, product category, monetization, visual tone, and production priorities, but it does not require other loops to run.

## Input Contract

Use:

```text
05_unity_2d_games/templates/unity_input_contract_template.md
```

Use the contract before `/plan` or `/goal` when game genre, references, core loop, session length, monetization, Unity version, project path, or output target need to be clarified.

## References

References can include project seeds, app/game categories, monetization examples, store screenshots, or reviewed outputs from other loops. Other loop files are read-only unless a handoff manifest explicitly allows edits.

## Codex Can Produce

- Game concept docs.
- Core loop design.
- Monetization plans.
- C# scripts.
- Simple Unity MVP structure when project path/version are known.
- Editor script plans.
- Build guidance.
- QA reports.
- Export/handoff manifests.

## User Must Verify

- Actual play feel.
- Balance.
- Unity Editor state.
- Build quality.
- Store/commercial readiness.

## Export/Archive Expectations

Concept docs, MVP plans, scripts, QA reports, and handoff manifests should be stored inside `05_unity_2d_games/`. Do not commit Unity generated folders or binaries.

## Input Requirements

- Game concept or product category.
- Target player.
- Platform target.
- Reference games or apps.
- Monetization goal.
- MVP constraints.

## Output Requirements

- Market reference analysis.
- Game concept brief.
- Core loop design.
- Unity project plan.
- Monetization plan.
- Store asset plan.
- QA report.

## Folder Usage

- `briefs/` - game concept briefs and MVP scope.
- `references/` - market references and app examples.
- `prompts/` - asset prompts and Codex task prompts.
- `projects/` - Unity planning files or approved lightweight project files.
- `exports/` - store plans, pitch notes, and export packages.
- `qa_reports/` - gameplay, scope, and monetization QA.
- `templates/` - reusable Unity planning templates.

## Definition Of Done

- Target player and platform are clear.
- Core loop is simple enough for MVP.
- Monetization plan is compatible with gameplay.
- Store asset plan lists required creative.
- QA report names implementation risks.

## QA Checklist

- [ ] Market references are summarized.
- [ ] Core loop has player action, reward, and progression.
- [ ] MVP scope avoids unnecessary systems.
- [ ] Unity generated folders are not committed.
- [ ] Store asset needs are listed.

## Example Mission Types

- Idle commerce game concept.
- Puzzle MVP plan.
- Casual mobile game loop analysis.
- Store listing asset plan.

## Example Codex Task Format

```text
Read AGENTS.md and 05_unity_2d_games/UNITY_2D_GAMES_LOOP.md. Create a market reference analysis, game concept brief, core loop, monetization plan, store asset plan, and QA report for [game]. Work only in 05_unity_2d_games/.
```
