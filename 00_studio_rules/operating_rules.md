# Operating Rules

## Mission Workflow

1. Read `AGENTS.md`.
2. Identify exactly one target production loop.
3. Read the loop master document.
4. Inspect existing briefs, prompts, projects, exports, and QA reports.
5. Create or update only the files needed for the mission.
6. Validate folder references, deliverables, and QA requirements.
7. Report changed files, validation, blockers, and next task.

## Output Rules

- Every mission must produce a usable file, brief, prompt pack, plan, prototype, QA report, or archive entry.
- Do not leave the user with only abstract advice.
- Keep output names versioned when replacing or extending local work.
- Put incomplete local experiments in `99_local_outputs/`.
- Put completed mission records in `98_archive/`.

## Scope Rules

- Do not mix production loops in one task.
- Do not modify unrelated folders.
- Do not delete user outputs.
- Do not overwrite exports without a new versioned filename.
- Do not create dashboards, control towers, or Streamlit apps unless explicitly requested.

## Main Branch Rules

Modify in `main`:

- `AGENTS.md`.
- `README.md`.
- `ROADMAP.md`.
- `SPRINT_BOARD.md`.
- `REPO_MAP.md`.
- `00_studio_rules/`.
- `90_shared_assets/templates/`.
- Loop master documents.

Avoid in `main`:

- Large production outputs.
- Active Unreal or Unity projects.
- Vendor asset packs.
- Generated local outputs.
- Secrets or environment files.

