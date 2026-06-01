# Mission 001 — Loop Mission Landing Page MVP

Self-contained interactive landing page for Loop Mission, presented as a premium
one-person AI studio operating system with five production loops.

## Project Type

Static HTML/CSS/JS. No build step, no package install, no framework, no external assets.

## Run

Open directly in a browser:

```text
01_interactive_web/projects/mission_001_loop_mission_landing_page/index.html
```

Or serve locally from this folder (recommended so relative paths resolve cleanly):

```bash
cd 01_interactive_web/projects/mission_001_loop_mission_landing_page
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

## Files

- `index.html` — page markup and content (six sections).
- `styles.css` — design system, responsive layout, and motion.
- `script.js` — loop selector, workflow stepper, scroll reveal, nav state.

## Sections

1. **Hero** — first-viewport Loop Mission signal, tagline, stats, scroll cue.
2. **Five loops** — interactive loop selector (tablist) with a detail panel per lane.
3. **Workflow** — six-step mission stepper that reveals the output at each phase.
4. **Studio positioning** — four premium positioning pillars.
5. **Archive** — completed-mission artifact cards with QA status.
6. **CTA** — closing call to action.

## Interactions

- Loop selector with mouse, keyboard (arrow keys), and `aria-selected` state.
- Workflow stepper that swaps phase detail with a subtle transition.
- Hover/focus states on loop tabs, pillars, artifacts, CTA, and image placeholders.
- Scroll-reveal animations and a condensing nav bar on scroll.
- `prefers-reduced-motion` is respected — all motion collapses to instant.

## Notes

- Image areas are intentional placeholders for future generated visuals from the
  photoreal prompt pack. No generated images are bundled.
- Visual direction: dark graphite / matte black foundation, white text and card
  surfaces, deep red accent, cinematic editorial feel.
- No Streamlit, no web framework dependency, no Unreal or Unity files.

## QA

See `../../qa_reports/mission_001_landing_page_qa_report.md`.
Handoff manifest: `../../exports/mission_001_landing_page_handoff_manifest.md`.
