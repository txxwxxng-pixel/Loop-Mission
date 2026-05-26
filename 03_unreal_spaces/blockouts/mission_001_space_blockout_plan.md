# Mission 001 Space Blockout Plan

## Blockout Purpose

Plan a simple, readable Unreal blockout for the Loop Mission AI Studio Operations Room. This document is for layout and scale only. It does not create Unreal project files or assets.

## Approximate Scale

Use Unreal centimeters.

- Room footprint: 1400 cm wide x 1000 cm deep.
- Ceiling height: 420 cm.
- Central table: 420 cm wide x 180 cm deep x 90 cm high.
- Production zone panels: 220 cm wide x 280 cm high x 20 cm deep.
- Archive wall: 900 cm wide x 300 cm high.
- Walkable clearance around table: minimum 140 cm.

## Coordinate Layout

Assume room center at `X=0, Y=0, Z=0`.

| Element | Approx Location | Size |
| --- | --- | --- |
| Floor | `0, 0, 0` | `1400 x 1000 x 10` |
| Back wall | `0, 500, 210` | `1400 x 20 x 420` |
| Left wall | `-700, 0, 210` | `20 x 1000 x 420` |
| Right wall | `700, 0, 210` | `20 x 1000 x 420` |
| Mission Control table | `0, 0, 45` | `420 x 180 x 90` |
| Web zone | `-520, 320, 160` | `220 x 20 x 280` |
| Ads zone | `-260, 360, 160` | `220 x 20 x 280` |
| Unreal zone | `0, 380, 160` | `220 x 20 x 280` |
| Prompt zone | `260, 360, 160` | `220 x 20 x 280` |
| Unity zone | `520, 320, 160` | `220 x 20 x 280` |
| Archive wall | `0, -470, 170` | `900 x 20 x 300` |
| Operator desk/chair zone | `0, -260, 60` | `220 x 160 x 120` |

## Room/Program Layout

- Entry camera begins near the front-left corner.
- Central table sits slightly forward of center.
- Five production zones arc across the back wall.
- Archive wall sits opposite the production zones, making the room a loop.
- Operator desk faces the Mission Control table and production zones.

## Blockout Object List

- `BP_Blockout_RoomShell`
- `BP_Blockout_MissionControlTable`
- `BP_Blockout_ProductionZone_Web`
- `BP_Blockout_ProductionZone_Ads`
- `BP_Blockout_ProductionZone_Unreal`
- `BP_Blockout_ProductionZone_Prompts`
- `BP_Blockout_ProductionZone_Unity`
- `BP_Blockout_QAArchiveWall`
- `BP_Blockout_MissionCard`
- `BP_Blockout_CameraMarkers`

## Lighting Blockout

- Key light above central table.
- Five narrow area lights above production zones.
- Low red accent strips at table edge and archive wall.
- Soft wall wash on archive wall.
- Avoid extreme saturation.

## Camera Blockout Positions

| Camera | Position | Aim |
| --- | --- | --- |
| `CAM_HeroWide` | `-520, -520, 220` | Center table and five zones |
| `CAM_TableClose` | `-160, -180, 130` | Mission 001 card |
| `CAM_ArchiveWall` | `260, 120, 170` | QA/archive wall |
| `CAM_ZoneOrbit` | `460, -120, 200` | five production panels |
| `CAM_OperatorPOV` | `0, -310, 150` | table toward zones |

## Future Interaction Blockout

- Each production panel can have a simple trigger volume.
- Trigger changes accent light from dim red to active red.
- Mission card can have five stage states: brief, output, QA, archive, handoff.
- Archive wall can reveal completed mission cards.

## Blockout Validation

- Five production zones are visible from hero wide.
- Central table does not block movement.
- Archive wall is readable from table and camera.
- Scale feels like a focused solo studio, not a giant command center.
- No production asset dependency is required for blockout.

