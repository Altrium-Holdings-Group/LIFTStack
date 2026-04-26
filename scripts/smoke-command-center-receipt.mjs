const commandCenterApiUrl = (process.env.COMMAND_CENTER_API_URL || 'https://genesis-command-center-production.up.railway.app').replace(/\/$/, '')
const commandCenterApiKey = process.env.COMMAND_CENTER_API_KEY?.trim()

if (!commandCenterApiKey) {
  console.error('Missing COMMAND_CENTER_API_KEY. Set it to the same shared secret configured in Command Center.')
  process.exit(1)
}

const receipt = {
  id: `lift_smoke_${Date.now()}`,
  brandSlug: 'liftstack',
  source: 'manual',
  discoveryUrl: 'https://www.lift-technology.net/discovery-wizard/',
  intent: 'workflow-engineering',
  priority: 'medium',
  lead: {
    name: 'LIFTStack Smoke Test',
    email: 'smoke-test@lift-technology.net',
    organization: 'LIFTStack',
  },
  summary: 'Synthetic smoke test receipt generated from the LIFTStack operating repo to validate Command Center durable receipt sync.',
  desiredOutcome: 'Confirm Command Center receives and persists technical discovery receipts from GitHub-controlled brand operating repos.',
  routedAt: new Date().toISOString(),
  recommendedAction: 'Verify the receipt appears in Command Center brand discovery receipt health and Supabase table editor.',
  commandCenterStatus: 'queued',
  schemaVersion: 'brand_discovery_receipt.v1',
}

const endpoint = `${commandCenterApiUrl}/api/brand-discovery/receipts`

const response = await fetch(endpoint, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    authorization: `Bearer ${commandCenterApiKey}`,
  },
  body: JSON.stringify({ receipt }),
})

const body = await response.json().catch(() => ({}))

if (!response.ok || body?.ok === false) {
  console.error('Command Center receipt smoke test failed')
  console.error(JSON.stringify({ status: response.status, body }, null, 2))
  process.exit(1)
}

console.log('Command Center receipt smoke test passed')
console.log(JSON.stringify({ endpoint, response: body }, null, 2))
