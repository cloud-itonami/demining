# Operator quickstart

Two things can be verified locally in this repository, and they take under a minute
together. Everything else you might expect to run here cannot be run here, for reasons
given at the bottom — that section is part of the quickstart, not an appendix.

Every command below was executed against commit `e1010bd` on 2026-08-13. Both checks were
confirmed to *fail* when the thing they check is broken, so a green result means something.

**Prerequisite**: Node.js with `npx` (verified on Node v26.3.0 / npm 11.16.0).

## 1. Verify the design corpus

The four JSON-LD documents are the substance of this repo. This parses each one and prints
the counts the `README.md` table claims, so it checks the documentation at the same time.

```sh
node -e '
const fs = require("fs");
const want = {
  "PROJECT.jsonld":          j => j.standards.length + " standards referenced",
  "classifications.jsonld":  j => j.imas.length + " IMAS series",
  "crawlSeeds.jsonld":       j => j.groups.length + " seed groups",
  "legalInstruments.jsonld": j => j.multilateralTreaties.length + " treaties, "
                                + j.nationalImplementationStatutes.length + " national statutes"
};
let bad = 0;
for (const [f, describe] of Object.entries(want)) {
  try { console.log("ok  ", f, "-", describe(JSON.parse(fs.readFileSync(f, "utf8")))); }
  catch (e) { console.error("FAIL", f, "-", e.message); bad++; }
}
process.exit(bad ? 1 : 0);
'
```

Expected — exit 0:

```
ok   PROJECT.jsonld - 13 standards referenced
ok   classifications.jsonld - 15 IMAS series
ok   crawlSeeds.jsonld - 5 seed groups
ok   legalInstruments.jsonld - 7 treaties, 41 national statutes
```

Truncating any one of the four makes it print `FAIL <file>` and exit 1.

## 2. Typecheck the edge facade

```sh
cd appview/demining-ui-dm1nactz
npm install          # installs TypeScript only; 1 package
npm run typecheck    # exit 0
```

No-install equivalent, if you would rather not create `node_modules/`:

```sh
npx --yes -p typescript@6 tsc --noEmit -p tsconfig.json
```

This is a real gate, not decoration. Changing `json()`'s return type from `Response` to
`number` produces 4 errors and exit 2; a single typo in an `env` key produces 1 error and
exit 2.

> If `npm run typecheck` fails with `error TS5112: tsconfig.json is present but will not be
> loaded if files are specified on commandline`, you are on a commit before the script was
> fixed. The script used to duplicate every compiler flag on the command line *and* pass
> `src/app.ts`, which TypeScript 6 rejects while a `tsconfig.json` exists. `tsconfig.json`
> already sets every one of those flags, so the script now just points at it.

## What you cannot do here, and why

**You cannot run or deploy the appview.** `wrangler.jsonc` points `main` at
`svelte/.svelte-kit/cloudflare/_worker.js`, a SvelteKit build output that is not committed
and has never been built in this tree — `svelte/.svelte-kit/` does not exist. The `routes`
block naming `demining.etzhayyim.com` and `dm1nactz.etzhayyim.com` states intent; as of
2026-08-13 both hostnames are **NXDOMAIN**, so there is no live Worker to compare against
either.

**You cannot exercise the domain logic, because it is not in this repository.** `src/app.ts`
is an 81-line proxy. It answers `/health` and `/_app/meta` locally, and forwards
anything matching `com.etzhayyim.apps.demining.*` to a dispatcher
(`DISPATCHER_URL`, default `https://dispatcher.etzhayyim.com`) with an `x-internal-trust`
header. Survey, clearance, Land Release, EORE and victim-assistance rules live behind that
dispatcher — the Kotodama Python ingest module and the BPMN contracts under
`etzhayyim/root`, both named in the `/health` payload. A test here could only prove the
proxy forwards; it could not prove any mine-action rule is correct.

**The lexicons, actor DIDs, and graph schema in `CLAUDE.md` are planned, not built.** Treat
that file as a design record. One contradiction is known and unresolved: `CLAUDE.md` lists
the nanoid as `TBD`, while `wrangler.jsonc` and `app.ts` already use `dm1nactz`.

## Before you add anything

`PROJECT.jsonld` excludes manufacture, stockpile, transfer, and deployment of
anti-personnel mines, along with offensive EOD and real-time targeting. That exclusion is
treaty and statute law, not a style preference — see `README.md` for the instruments.

The sensitivity tiering in `CLAUDE.md` is a safety control. Uncleared SHA/CHA polygons,
exact detector hit coordinates, and victim or operator PII are Tier 3 and must not reach a
public AT Protocol record; a polygon may be demoted to Tier 1 only by a Land Release
decision under IMAS 07.11. Adding a field that carries a coordinate into a Tier 1 record is
the specific mistake this repository is arranged to prevent.
