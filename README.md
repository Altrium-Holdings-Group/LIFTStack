# LIFTStack — Operating Repo

This repo is the GitHub-controlled operating layer for LIFTStack.

WordPress remains the public landing, trust, SEO, and discovery-entry surface. This repo owns technical intake logic, discovery workflow contracts, implementation receipts, automation posture, deployment history, and Genesis Command Center integration.

## Discovery routing

Primary discovery path:

```text
https://www.lift-technology.net/discovery-wizard/
```

Do not cross-route this brand to another brand discovery wizard without an explicit governed handoff.

## Current foundation

This first operating-repo slice includes:

- Next.js app shell
- LIFTStack brand config
- no-cross-route discovery guard
- LIFTStack technical intake schema
- discovery receipt writer
- optional Command Center sync client
- health API
- discovery API
- receipts contract API
- Genesis context API
- Railway deploy scaffold
- Command Center smoke-test script
- GitHub quality gates
- operating-model, discovery-routing, brand-governance, deployment, and smoke-test docs

## Local development

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

Health endpoint:

```text
/api/health
```

Discovery contract endpoint:

```text
/api/discovery
```

## Environment

Copy `.env.example` to `.env.local` and fill only what is needed for the current lane.

Command Center sync is optional in this foundation slice. If `COMMAND_CENTER_API_KEY` is missing, sync is safely skipped and the discovery receipt reports that status.

## Next lanes

1. Deploy LIFTStack repo service on Railway.
2. Validate LIFTStack receipt smoke sync into Command Center.
3. Add implementation/deployment proof receipts.
4. Add technical rescue and platform migration workflows.
5. Move to Circle of Growth repo foundation next.
