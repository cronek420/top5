# 9Design Repository Map

## Purpose

9Design is the umbrella brand. Each active product gets one clear canonical repository and, when appropriate, one matching subdomain under `9design.online`.

## Naming rule

- `9design-*` = 9Design-owned public/commercial products and websites
- `atlas-*` = Thomas's internal/in-use autonomous systems
- `universal-*` = sellable/onboarding-ready versions for customers
- `archive-*` = legacy copies kept only for history after verification

Do not delete or archive a repository until its code, deployment, secrets history, and unique files have been compared with the selected canonical repository.

## Canonical product map

| 9Design product | Target subdomain | Current canonical repo | Recommended future repo name | Status |
|---|---|---|---|---|
| 9Design Agents / automation storefront | `agent.9design.online` | `cronek420/top5` | `9design-agents` | KEEP / REBRAND |
| Dream / dream journal | `dream.9design.online` | `cronek420/DreamWeaver` | `9design-dream` | KEEP / CONSOLIDATE |
| Shirts / mural apparel | `shirts.9design.online` | `cronek420/fractal-odyssey` (web experience candidate) | `9design-shirts` | KEEP / VERIFY STORE SOURCE |
| Hike / Trail Mate | `hike.9design.online` | `cronek420/Trail--Mate` | `9design-hike` | KEEP |
| Photo / selfie scoring | `photo.9design.online` | `cronek420/Photo-Score` | `9design-photo` | KEEP / VERIFY AGAINST SELFIE REPOS |
| Rough Draft Builders Club | `build.9design.online` (optional) | `cronek420/Rough-Draft-Builders-Club` | `9design-builders-club` | KEEP |
| Asheville Vibe | `vibe.9design.online` | `cronek420/AVG_APP` | `9design-asheville-vibe` | KEEP / VERIFY WEB+MOBILE SPLIT |
| Experiments | `lab.9design.online` | none selected | `9design-lab` | FUTURE |

## Internal Atlas systems — keep separate from customer-facing 9Design product repos

| Function | Canonical repo | Rule |
|---|---|---|
| Surplus Recovery engine | `cronek420/Atlas-Engine-Surplus-Recovery` | KEEP — internal/in-use Atlas system |
| Resume Agent | `cronek420/ATLAS-RESUME-AGENT` | KEEP — internal/in-use Atlas system |
| Growth Department | `cronek420/agent-atlas-growth-department-reviewed` | CANONICAL CANDIDATE — compare with unreviewed repo before retiring either |
| Treasure Hunter | `cronek420/treasure-hunter-v1` | KEEP — active system |
| Atlas core | `cronek420/atlas_engine` | KEEP pending dependency audit |

## Sellable / universal systems

| Function | Canonical repo | Rule |
|---|---|---|
| Universal Resume Agent | `cronek420/universal-resume-agent` | KEEP — sellable/onboarding version |
| Agentic workflow framework | `cronek420/agentic-workflows` | KEEP — reusable framework/skills |
| Agentic workforce website | `cronek420/agentic-workforce-site` | REVIEW — may merge into `9design-agents` after content comparison |

## Duplicate / legacy clusters requiring comparison before cleanup

### Dream cluster

Canonical candidate: `DreamWeaver`.

Compare before archive/delete:
- `dream-catcher-v1`
- `Dream_v1` (0-size candidate)
- `DreamWeaverv3`
- `dreamz`
- `AntiDream`
- `manusDW` (0-size candidate)
- `dreamcatcher-website`
- `dreamcatcher-mobile`
- `dreamcatcher-config` (0-size candidate)
- `Vercel-Dreanweaver` (0-size candidate)
- `GPT-DREAMWEAVER`
- `CGPT-DREAMWEAVER`
- `DC-luminous-subconscious`

### Asheville Vibe cluster

Canonical candidate: `AVG_APP` plus a verified production web repository if separate.

Compare:
- `AVG_WEB` (0-size candidate)
- `AVG_APP`
- `avg-tmp`
- `avg_mobile_app`
- `Asheville-Vibe`

### Selfie / Photo cluster

Compare:
- `Photo-Score`
- `SELFIE_SCORE` (0-size candidate)
- `SELFIE_SCORE-AI`
- `SELFIE-SCORE-2026` (0-size candidate)
- `Sswebsite` (0-size candidate)

### Surplus Recovery cluster

Canonical internal system: `Atlas-Engine-Surplus-Recovery`.

Compare before archive/delete:
- `Surplus-Agent-007-`
- `surplusrecoveryai`
- `fund_recovery_console` (0-size candidate)
- `surplus-recovery-ai` (0-size candidate)
- `Atlas-Agentic-fund-recovery-system`
- `atlas-ui`

### Growth / lead-generation cluster

Canonical candidate: `agent-atlas-growth-department-reviewed`.

Compare:
- `agent-atlas-growth-department`
- `Lead-Gen` (0-size candidate)
- `My_ai_marketer`
- `ASHEVILLE_AI_AGENTIC_SELF_AUTOMATED_BUSINESS`

### World Monitor cluster

Compare:
- `World-Moniter`
- `worldmonitor`

## Generic/ambiguous repositories requiring identification

Do not rename or remove until their purpose and dependencies are confirmed:
- `backend`
- `studio`
- `ais`
- `agent-nick`
- `splash`

## Cleanup order

1. Freeze new duplicate repo creation while cleanup is underway.
2. Verify production/deployment source for each product.
3. Compare each duplicate cluster for unique files and newer commits.
4. Confirm no secrets or deployment dependencies point to old repo names.
5. Select one canonical repository per product.
6. Rename canonical 9Design product repos to the `9design-*` convention.
7. Update deployment integrations, Git remotes, README links, badges, workflows, and DNS/domain documentation.
8. Archive verified legacy repos instead of deleting them initially.
9. Leave archived repos for a safety period; delete only when clearly useless and explicitly approved.
10. Maintain this file as the master repo/subdomain registry.

## Desired 9Design structure

```text
9design.online                 company / portfolio
agent.9design.online           AI agents & automation
shirts.9design.online          apparel / mural collections
dream.9design.online           dream product
photo.9design.online           photo / selfie product
hike.9design.online            Trail Mate
vibe.9design.online            Asheville Vibe
build.9design.online           Rough Draft Builders Club (optional)
lab.9design.online             experiments / prototypes
```

## Safety rule

**Inspect before modify. Compare before archive. Archive before delete.** Active Atlas systems and Universal sellable systems remain separate even when both are marketed through 9Design.
