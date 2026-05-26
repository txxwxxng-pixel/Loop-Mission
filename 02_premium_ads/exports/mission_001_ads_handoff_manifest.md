# Mission 001 Ads Handoff Manifest

## Mission

Mission 001 - Premium AI Studio Launch Campaign

## Source Files Used

- `02_premium_ads/briefs/mission_001_premium_ai_studio_launch_campaign_brief.md`
- `02_premium_ads/campaign_briefs/mission_001_campaign_concept.md`
- `02_premium_ads/instagram_ready/mission_001_instagram_upload_plan.md`
- `02_premium_ads/prompts/mission_001_photoreal_prompt_handoff.md`

## Output Files Created

- `02_premium_ads/captions/mission_001_instagram_caption_pack.md`
- `02_premium_ads/hashtags/mission_001_hashtag_set.md`
- `02_premium_ads/prompts/mission_001_ad_image_prompt_pack.md`
- `02_premium_ads/exports/mission_001_ads_handoff_manifest.md`

## Recommended Next Branch

Next branch for image prompt refinement:

```text
lm/04-photoreal-prompts
```

Use this branch only after the Premium Ads branch is reviewed or the relevant handoff files are merged into `main`.

## What Should Be Merged To Main Before Cross-Loop Work

Before starting cross-loop work, merge or copy the reviewed Mission 001 source artifacts into `main` through the normal review path:

- Campaign brief.
- Campaign concept.
- Instagram upload plan.
- Photoreal prompt handoff.
- Caption pack.
- Hashtag set.
- Ad image prompt pack.
- This handoff manifest.

Do not merge draft production content blindly. Main should receive reviewed handoff-ready documents only.

## Next Photoreal Prompt Loop Task

```text
Read AGENTS.md, 04_photoreal_prompts/PHOTOREAL_PROMPTS_LOOP.md, and the reviewed Mission 001 Premium Ads handoff files. In the photoreal prompt worktree only, create the Mission 001 photoreal prompt pack with full prompt, compact prompt, negative prompt, variation prompts, QC checklist, failure analysis, and retry prompts. Do not generate images yet.
```

## Next Interactive Web Loop Task

```text
Read AGENTS.md, 01_interactive_web/INTERACTIVE_WEB_LOOP.md, and the reviewed Mission 001 campaign brief. In the interactive web worktree only, create a landing page mission brief and section plan for Loop Mission. Do not build the site yet.
```

## Production Notes

- The caption pack is ready for SNS copy selection.
- The hashtag set is ready for platform testing.
- The ad image prompt pack is ready for image-generation prep, but final prompt QA should happen in the photoreal prompt loop.
- No images, web code, Unreal files, Unity files, or Streamlit app were created in this mission.

## QA Checklist

- [x] Source files are listed.
- [x] Output files are listed.
- [x] Next branch is identified.
- [x] Cross-loop merge guidance is included.
- [x] Next photoreal prompt task is written.
- [x] Next interactive web task is written.
- [x] Scope remains inside `02_premium_ads/`.

