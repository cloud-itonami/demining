# demining — Humanitarian Mine Action (HMA) design corpus

`cloud-itonami/demining` holds the **design record and edge facade for a Humanitarian
Mine Action platform**: non-technical survey, technical survey, clearance, Land Release,
Explosive Ordnance Risk Education (EORE), and victim assistance.

The repo name is a bare subject name, so it names itself here: **demining = 地雷除去**,
the *counter* side of explosive ordnance. This repository exists to help find and remove
mines and to teach people to avoid them.

## Scope boundary — read this before anything else

| In scope | Prohibited, and not implemented here |
|---|---|
| Non-Technical Survey (IMAS 08.10) / Technical Survey (08.20) | Manufacture, stockpile, transfer, or deployment of anti-personnel mines |
| Manual / mine-detection-dog / mechanical clearance (09.10) | Offensive EOD, counter-mobility |
| Land Release decisions (07.11) | Real-time targeting, weaponization |
| EORE (12.10) | |
| Victim assistance referral | |
| Detector / PPE / MDD / flail inventory | |

The prohibition is legal, not stylistic: the Anti-Personnel Mine Ban Convention
(Ottawa, 1997), the Convention on Cluster Munitions, CCW Protocol V, and
対人地雷の製造の禁止及び所持の規制等に関する法律 (平成10年法律第115号). `PROJECT.jsonld`
and `wrangler.jsonc` both carry the exclusion, and `app.ts` restates it in its `/health`
payload so the boundary travels with the deployed artifact.

**Sensitivity tiering is a safety control, not a privacy preference.** An AT Protocol repo
is public and federable. Publishing the coordinates of an *uncleared* hazardous area
endangers civilians (IMAS 05.10). Uncleared SHA/CHA polygons, exact detector hit
coordinates, victim PII, and operator PII are Tier 3 and never enter the public record;
a polygon is demoted to Tier 1 only on a Land Release decision. See `CLAUDE.md`.

## What is actually in this repository

| Path | What it is | Measured content |
|---|---|---|
| `PROJECT.jsonld` | Project definition, scope, standards, planned actors | 13 IMAS/treaty/statute standards referenced |
| `classifications.jsonld` | IMAS ↔ UNSPSC / CPC v2.1 / ISIC / HS2022 crosswalk, EO item taxonomy | 15 IMAS series entries |
| `legalInstruments.jsonld` | The legal layer | 7 multilateral instruments, 5 regional, 41 national statutes across 31 jurisdictions |
| `crawlSeeds.jsonld` | Ingest seed contract | 5 groups, 39 seeds |
| `appview/demining-ui-dm1nactz/` | Thin edge facade (Cloudflare Worker + SvelteKit shell) | `src/app.ts`, 81 lines |
| `CLAUDE.md` | Agent-facing design record: tiering, planned actors, planned lexicons, graph schema | — |
| `migration.edn` / `README.edn` | Extraction provenance from `etzhayyim/root` | — |

Two cautions on `legalInstruments.jsonld`. Its `multilateralTreaties` array is 7 entries
but they are not all treaties — it also carries the ICRC Customary IHL Study and UN Security
Council resolutions on mine action, so read it as "multilateral instruments". And its own
`verificationNote` is explicit that dates, law numbers, and chapter references come from
secondary sources (ICRC IHL database, UN Treaty Collection, Landmine Monitor); only 2 of the
41 national statutes carry `verified: true`. **This corpus is a research index, not a
citable legal authority.** For binding use, cite the primary sources it names.

## Stage: design. Nothing is deployed.

Verified 2026-08-13: `demining.etzhayyim.com` and `dm1nactz.etzhayyim.com` are both
**NXDOMAIN**. No Worker is serving, and the SvelteKit shell has never been built
(`svelte/.svelte-kit/` is absent). The `routes` block in `wrangler.jsonc` is intent, not
current state.

**Domain logic does not live in this repo, and is not expected to.** `app.ts` is a proxy:
it answers `/health`, and forwards `com.etzhayyim.apps.demining.*` XRPC calls to a
dispatcher. The rules it fronts live elsewhere — the Kotodama Python ingest module, BPMN
contracts, and lexicon definitions under `etzhayyim/root`, as recorded in the `/health`
payload and in `CLAUDE.md`. Reading only this repo will not show you the clearance logic,
because the clearance logic was never here.

The lexicons, actor DIDs, and graph schema in `CLAUDE.md` are **planned**, not built. The
nanoid is the one open contradiction: `CLAUDE.md` still says `TBD`, while `wrangler.jsonc`
and `app.ts` already carry `dm1nactz`.

## Getting started

Everything that can be verified locally today — and the reason each of the two
non-runnable paths is non-runnable — is in
**[`docs/operator-quickstart.md`](docs/operator-quickstart.md)**. It is short and every
step in it has been run.

## Provenance and naming

Extracted from `etzhayyim/root` at `60-apps/etzhayyim-project-demining` (18 files, 59,896
bytes); see `migration.edn`. The repository now lives under `cloud-itonami`, so the
`:name "com-etzhayyim-app-demining"` in `README.edn` and the `etzhayyim/...` destination in
`migration.edn` describe the extraction as performed, not the repository's present address.

Licensed Apache-2.0 with the etzhayyim Charter Compliance Rider v3.1; see `NOTICE`.
