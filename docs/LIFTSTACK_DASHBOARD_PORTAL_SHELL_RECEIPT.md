# LIFTStack Dashboard and Portal Shell Receipt

## Purpose

This receipt documents the first dashboard and client portal shell implementation for LIFTStack after the public technical app-body baseline.

The objective is to move beyond static technical pages into an app-like operating experience: WordPress remains the landing/trust/SEO entry, while the Railway app becomes the deeper client dashboard-style business body connected to Genesis App, Genesis Command Center, Genesis AI Brain, and Genesis Voice.

## Source of truth used

This implementation uses the Altrium Holdings Group Daily Strategy Planner as an operating reference for:

- ecosystem roles
- brand-specific routing boundaries
- the six-step client coaching and consulting process
- Genesis App / Command Center / AI Brain / Voice platform responsibilities
- no-cross-route discovery posture

Sensitive values in that planner are intentionally excluded from code, docs, commit messages, and runtime behavior. Secrets belong in Railway, Supabase, password managers, or a proper secrets vault only.

## Scope shipped in this slice

Routes added:

- `/dashboard`
- `/portal`

Shared dashboard assets:

- `lib/liftstack-dashboard.ts`
- `components/liftstack/LiftstackDashboardShell.tsx`
- dashboard and portal styling in `app/globals.css`

## Experience model

The dashboard/portal shell includes:

- technical command summary posture
- status cards
- six-step client journey
- implementation pipeline modules
- delivery ledger modules
- technical issue triage modules
- automation status modules
- Command Center handoff links
- Genesis AI support placeholders
- Voice intake handoff placeholders

## Client journey modeled

The Daily Strategy Planner defines the operating process as:

1. Assessment
2. Discovery Call
3. Proposal
4. Contract Agreement
5. Closeout or Termination
6. Referral Program

This PR converts that process into a technical portal shell without adding schema, auth, or live submit behavior yet.

## Guardrails preserved

- No WordPress cutover.
- No DNS or canonical changes.
- No Supabase schema execution.
- No authenticated portal expansion.
- No app-owned discovery submit API yet.
- No secrets copied from the uploaded strategy planner.
- No cross-brand discovery routing.
- Client-facing content remains sanitized.

## Next implementation slice

After this dashboard shell deploys and gates pass, the next LIFTStack slice should add proof-backed workflow wiring:

- portal state model
- authenticated access design
- implementation records
- delivery and build receipts
- Command Center proof panel connection
- Genesis AI Brain technical classification endpoint
- Genesis Voice technical intake handoff receipt
- app-owned discovery submit API

## Quality gates

Required before merge:

```bash
npm install
npm run type-check
npm run lint
npm run build
```

If a CodeQL/code-scanning settings lane fails independently of app gates, classify it separately.
