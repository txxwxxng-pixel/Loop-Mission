# Premium Ads Loop

## Purpose

Produce premium advertising and SNS creative systems, including campaign briefs, image prompt packs, captions, hashtags, and upload-ready asset plans.

## Independent Loop Rule

This loop can run independently as `ADS-M001`, `ADS-M002`, and so on. One ads loop run means:

```text
planning -> reference gathering -> production -> QA -> export/archive -> next seed
```

It does not require web, Unreal, photoreal prompts, or Unity work unless a cross-loop handoff is explicitly requested.

## Project Seed Usage

This loop may read a project seed from `90_shared_assets/project_seeds/` as optional campaign direction. A seed can guide offer, market, visual tone, audience, and monetization, but it does not require other loops to run.

## Input Contract

Use:

```text
02_premium_ads/templates/ads_input_contract_template.md
```

Use the contract before `/plan` or `/goal` when campaign goal, platform, post formats, CTA, hashtag strategy, image needs, or QA criteria need to be clarified.

## References

References can include project seeds, product notes, platform examples, or reviewed outputs from other loops. Other loop files are read-only unless a handoff manifest explicitly allows edits.

## Codex Can Produce

- Campaign briefs.
- SNS captions.
- Hashtag sets.
- Image prompt handoff docs.
- Upload plans.
- QA reports.
- Handoff manifests.

## User Must Verify

- Brand suitability.
- Platform fit.
- Final post selection.
- Actual upload timing.

## Export/Archive Expectations

Upload plans, caption packs, QA reports, and handoff manifests should be stored inside `02_premium_ads/`. Reviewed completed outputs can be merged to `main` and archived later.

## Input Requirements

- Product, service, or brand.
- Target platform.
- Target audience.
- Campaign goal.
- Visual style references.
- Offer, CTA, or key message.

## Output Requirements

- Campaign brief.
- Brand concept.
- Image prompt pack.
- Instagram or SNS caption pack.
- Hashtag set.
- Upload-ready asset plan.
- QA report.

## Folder Usage

- `briefs/` - campaign briefs and positioning notes.
- `references/` - visual references, competitor notes, platform specs.
- `prompts/` - image prompts and caption prompts.
- `projects/` - active campaign packages.
- `exports/` - upload-ready copy, asset plans, and final packs.
- `qa_reports/` - platform and brand QA.
- `templates/` - reusable campaign templates.

## Definition Of Done

- Campaign target and audience are clear.
- Prompt pack is specific enough to generate assets.
- Captions and hashtags match the platform.
- Upload plan lists required asset sizes or formats.
- QA report flags risks.

## QA Checklist

- [ ] Brand voice is consistent.
- [ ] Prompts include subject, scene, style, composition, and constraints.
- [ ] Captions have CTA variants.
- [ ] Hashtags are grouped by purpose.
- [ ] Platform format assumptions are stated.

## Example Mission Types

- Instagram launch campaign.
- Premium product image prompt set.
- Seasonal promotion pack.
- Brand awareness creative package.

## Example Codex Task Format

```text
Read AGENTS.md and 02_premium_ads/PREMIUM_ADS_LOOP.md. Create a campaign brief, prompt pack, captions, hashtags, and QA report for [product]. Work only in 02_premium_ads/.
```
