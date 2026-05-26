# Independent Loop Goal Template

## Goal Mode Prompt

```text
/goal

Read AGENTS.md, 00_studio_rules/independent_loop_protocol.md, 00_studio_rules/loop_execution_lifecycle.md, and [target loop master document].

Execute one independent loop mission.

Target loop:
[one folder only]

Mission ID:
[WEB-M001 / ADS-M001 / UNREAL-M001 / PROMPT-M001 / UNITY-M001]

Mission:
[specific production task]

Allowed files:
[target loop folder paths only]

Reference files:
[optional read-only source files]

Required outputs:
- [output 1]
- [output 2]
- QA report
- Export or handoff manifest

Rules:
- Do not assume all five loops must run.
- Do not modify other production loops unless explicitly requested.
- Do not create Streamlit unless explicitly requested.
- Do not create secrets, large binaries, vendor assets, Unreal generated folders, or Unity generated folders.

Final response:
1. Summary
2. Files created/modified
3. Loop lifecycle completed
4. Validation performed
5. Commit hash, if committed
6. Push result, if pushed
7. Next seed
```

