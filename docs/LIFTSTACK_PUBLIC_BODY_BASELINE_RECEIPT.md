# LIFTStack Public Body Baseline Receipt

## Purpose

This receipt documents the first implementation slice of the Phase 2 app-body migration for LIFTStack.

The objective is to move the non-home technical operating body into the GitHub/Railway app while keeping WordPress responsible for the public home, landing, trust, SEO, and discovery-entry posture.

## Scope shipped in this slice

Public app-body routes:

- `/about`
- `/services`
- `/solutions`
- `/automation`
- `/technical-rescue`
- `/deployment-ledger`
- `/discovery-wizard`

Shared app-body assets:

- `lib/liftstack-pages.ts`
- `components/liftstack/OperatingBodyPage.tsx`
- homepage links into the technical body
- technical-body CSS additions
- `app/robots.ts` disallow posture for pre-cutover app body

## Guardrails preserved

- No WordPress cutover.
- No DNS or canonical changes.
- No Supabase schema execution.
- No authenticated portal expansion.
- No app-owned discovery submit API yet.
- No cross-brand discovery routing.
- Client-facing content stays sanitized.
- The discovery shell links to the approved LIFTStack WordPress discovery entry until app-owned receipt sync is proven.

## Next implementation slice

After this baseline deploys and gates pass, the next LIFTStack slice should add app-owned technical discovery intake:

- form component
- validation
- sanitized client response
- server-side detail logging
- Command Center receipt payload
- `/api/brand-discovery/receipts` sync
- protected smoke trigger proof
- Command Center status display update

## Quality gates

Required before merge:

```bash
npm install
npm run type-check
npm run lint
npm run build
```

If a CodeQL/code-scanning settings lane fails independently of app gates, classify it separately.
