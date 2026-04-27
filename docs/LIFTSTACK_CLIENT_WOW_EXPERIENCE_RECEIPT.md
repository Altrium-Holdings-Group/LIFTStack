# LIFTStack Client Experience Receipt

## Purpose

This receipt documents the first client-facing experience redesign for the LIFTStack Railway app.

The prior entry page was structurally correct but still felt like an internal build page. The new standard is a premium product-style experience after a visitor enters from WordPress.

## Scope shipped

Updated files:

- `app/page.tsx`
- `app/layout.tsx`
- `app/experience.css`

The new entry experience includes:

- premium technical navigation;
- product-grade technical hero section;
- client-facing language;
- dashboard and portal calls to action;
- delivery journey preview from assessment to proof;
- delivery cards for automation, implementation, technical rescue, delivery ledger, Genesis AI, and Command Center;
- intentional paths into solutions, dashboard, and discovery.

## Guardrails preserved

- No schema execution.
- No access-model expansion.
- No live submit API.
- No WordPress or DNS cutover.
- No secrets copied from source documents.
- No cross-brand discovery routing.

## Next rollout

After this redesign passes gates and deploys, replicate the same client-first product experience across:

1. Circle of Growth
2. BearSchiele

## Quality gates

Required before merge:

```bash
npm install
npm run type-check
npm run lint
npm run build
```
