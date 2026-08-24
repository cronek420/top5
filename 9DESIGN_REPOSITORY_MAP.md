# 9Design Repository Map

## Purpose

9Design is the umbrella brand. Each active product gets one clear canonical repository and, when appropriate, one matching subdomain under `9design.online`.

## Naming rule

- `9design-*` = 9Design-owned public/commercial products and websites
- `atlas-*` = Thomas's internal/in-use autonomous systems
- `universal-*` = sellable/onboarding-ready versions for customers
- `archive-*` = legacy copies kept only for history after verification

## Canonical product map

| 9Design product | Target subdomain | Canonical repo | Future repo name | Status |
|---|---|---|---|---|
| Agents / automation storefront | `agent.9design.online` | `cronek420/top5` | `9design-agents` | ACTIVE |
| Dream / dream journal | `dream.9design.online` | `cronek420/DreamWeaver` | `9design-dream` | ACTIVE / CONSOLIDATION TARGET |
| Shirts / mural apparel | `shirts.9design.online` | `cronek420/fractal-odyssey` | `9design-shirts` | KEEP / VERIFY STORE SOURCE |
| Hike / Trail Mate | `hike.9design.online` | `cronek420/Trail--Mate` | `9design-hike` | KEEP |
| Photo / selfie scoring | `photo.9design.online` | `cronek420/Photo-Score` | `9design-photo` | KEEP / CONSOLIDATION TARGET |
| Rough Draft Builders Club | `build.9design.online` | `cronek420/Rough-Draft-Builders-Club` | `9design-builders-club` | KEEP |
| Asheville Vibe | `vibe.9design.online` | `cronek420/AVG_APP` | `9design-asheville-vibe` | KEEP / VERIFY WEB+MOBILE SPLIT |
| Experiments | `lab.9design.online` | none selected | `9design-lab` | FUTURE |

## Internal Atlas systems — protected

These are not duplicate 9Design storefront repos and must remain separate.

- `cronek420/Atlas-Engine-Surplus-Recovery`
- `cronek420/ATLAS-RESUME-AGENT`
- `cronek420/agent-atlas-growth-department-reviewed`
- `cronek420/treasure-hunter-v1`
- `cronek420/atlas_engine`

## Sellable / universal systems — protected

- `cronek420/universal-resume-agent`
- `cronek420/agentic-workflows`
- `cronek420/agentic-workforce-site` — review for eventual merge into 9Design Agents

## VERIFIED SAFE-DELETE REPOSITORIES

The repositories below were inspected and contain only placeholder/stub content, while a selected canonical repository exists for the same product family.

### Dream

- `cronek420/Dream_v1` — only `.gitattributes` and a 25-byte README; canonical Dream workspace is `DreamWeaver`.

### Selfie / Photo

- `cronek420/SELFIE_SCORE` — only `.gitattributes` and a 31-byte README; canonical target is `Photo-Score`.
- `cronek420/SELFIE_SCORE-AI` — only `.gitattributes`, a 21-byte README, and a one-byte `web` placeholder; canonical target is `Photo-Score`.

### Surplus Recovery

- `cronek420/surplus-recovery-ai` — only `.gitattributes`; canonical internal system is `Atlas-Engine-Surplus-Recovery`.

These are approved for repository-level deletion. The connected GitHub tool available in this session does not expose a repository-delete action, so deletion must be executed through GitHub repository settings or a GitHub token/CLI with repository-delete permission.

## HIGH-CONFIDENCE DELETE CANDIDATES — inspect once before repository deletion

Metadata shows these as empty or nearly empty, but their root contents have not yet been fully verified in this cleanup pass:

### Dream
- `manusDW`
- `dreamcatcher-config`
- `Vercel-Dreanweaver`
- `GPT-DREAMWEAVER`

### Selfie / Photo
- `SELFIE-SCORE-2026`
- `Sswebsite`

### Surplus Recovery
- `fund_recovery_console`
- `Atlas-Agentic-fund-recovery-system`

### Growth / lead generation
- `Lead-Gen`

### Asheville Vibe
- `AVG_WEB`

## DO NOT DELETE YET — unique/large code or unclear deployment relationship

### Dream cluster

Canonical target: `DreamWeaver`.

Preserve pending code/deployment comparison:
- `dream-catcher-v1`
- `DreamWeaverv3`
- `dreamz`
- `AntiDream`
- `dreamcatcher-website`
- `dreamcatcher-mobile`
- `CGPT-DREAMWEAVER`
- `DC-luminous-subconscious`

### Asheville Vibe cluster

Preserve pending production-source verification:
- `AVG_APP`
- `avg-tmp`
- `avg_mobile_app`
- `Asheville-Vibe`

### Surplus Recovery cluster

Canonical internal system: `Atlas-Engine-Surplus-Recovery`.

Preserve pending unique-code comparison:
- `Surplus-Agent-007-`
- `surplusrecoveryai`
- `atlas-ui`

### Growth / lead-generation cluster

Canonical target: `agent-atlas-growth-department-reviewed`.

Preserve pending comparison:
- `agent-atlas-growth-department`
- `My_ai_marketer`
- `ASHEVILLE_AI_AGENTIC_SELF_AUTOMATED_BUSINESS`

### World Monitor cluster

Preserve both until compared:
- `World-Moniter`
- `worldmonitor`

## Generic/ambiguous repositories — preserve until identified

- `backend`
- `studio`
- `ais`
- `agent-nick`
- `splash`

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

## Cleanup rule

**One product = one canonical repository unless web/mobile/backend genuinely require separate deployable repositories.**

Atlas internal systems and Universal sellable systems stay separate from customer-facing 9Design products.
