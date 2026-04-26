# Deployment

## Target runtime

This repo is designed for Railway deployment using the included `railway.json`.

## Health check

Railway should check:

```text
/api/health
```

Expected response includes:

- `ok: true`
- brand slug
- service name
- discovery routing posture
- Command Center brand path

## Required environment variables

```text
NEXT_PUBLIC_BRAND_SLUG=liftstack
NEXT_PUBLIC_DISCOVERY_URL=https://www.lift-technology.net/discovery-wizard/
COMMAND_CENTER_API_URL=https://genesis-command-center-production.up.railway.app
COMMAND_CENTER_API_KEY=
```

Future integrations:

```text
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
GENESIS_BRAIN_API_URL=
GENESIS_BRAIN_API_KEY=
```

## Current build command

```bash
npm install && npm run build
```

## Current start command

```bash
npm run start
```

## Railway networking

Use Railway's injected `PORT` for runtime. The app start script falls back to port 3000 locally.

## Cutover rule

Do not move the WordPress landing page into this repo until a deliberate cutover plan is approved.

For now:

- WordPress owns public landing, trust, SEO, and discovery CTA.
- GitHub owns technical intake logic, discovery schema, receipts, health, deployment history, and Command Center sync.
