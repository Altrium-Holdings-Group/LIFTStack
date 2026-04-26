# Command Center Receipt Smoke Test

This smoke test validates the full LIFTStack operating-repo to Genesis Command Center brand-discovery receipt lane.

## What it proves

- The LIFTStack repo can generate a valid `brand_discovery_receipt.v1` payload.
- The configured Command Center API key is accepted.
- Command Center can persist the receipt into `public.command_center_brand_discovery_receipts`.
- The Command Center brand discovery receipt health panel should show a recent LIFTStack receipt.

## Preconditions

In Genesis Command Center:

```text
BRAND_DISCOVERY_RECEIPTS_API_KEY=<shared-secret>
```

or:

```text
COMMAND_CENTER_API_KEY=<shared-secret>
```

In this LIFTStack repo runtime/local shell:

```text
COMMAND_CENTER_API_URL=https://genesis-command-center-production.up.railway.app
COMMAND_CENTER_API_KEY=<same-shared-secret>
```

The Supabase migration must be applied in Command Center:

```text
public.command_center_brand_discovery_receipts
```

## Run

```bash
npm run smoke:command-center-receipt
```

## Expected result

The script should print:

```text
Command Center receipt smoke test passed
```

Then verify:

```text
https://genesis-command-center-production.up.railway.app/api/brand-discovery/health
```

Expected health posture after success:

- `persistence: db`
- `migrationStatus: applied`
- `apiAuthStatus: configured`
- `recentCount` greater than `0`

## Guardrails

- This does not touch WordPress.
- This does not change live routing.
- This sends a synthetic receipt using `source: manual` and a smoke-test lead identity.
- This is a proof tool, not production technical lead ingestion.
