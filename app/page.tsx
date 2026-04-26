import { brandConfig } from '@/lib/brand-config'
import { getDiscoveryRouteReceipt } from '@/lib/discovery-routing'

const operatingLanes = [
  'AI automation intake',
  'Workflow engineering',
  'App build qualification',
  'Systems integration mapping',
  'Platform migration posture',
  'Technical rescue triage',
]

const buildSteps = [
  'Foundation: brand config, routing guard, health API, and receipt contract.',
  'Intake: LIFTStack-specific technical discovery schema and receipt generation.',
  'Sync: Command Center receipt handoff once API key and deployment are configured.',
  'Implementation: delivery workflows, engineering estimates, and deployment receipts.',
  'Automation: deeper Genesis AI Brain integration for classification and technical prioritization.',
]

export default function HomePage() {
  const routeReceipt = getDiscoveryRouteReceipt()

  return (
    <main>
      <section className="panel">
        <span className="badge">{brandConfig.role}</span>
        <h1>{brandConfig.name} operating repo</h1>
        <p className="muted" style={{ maxWidth: 760 }}>
          WordPress remains the public landing, trust, SEO, and discovery-entry layer. This GitHub repo becomes the controlled operating system for technical intake, implementation receipts, automation posture, and Command Center sync.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 24 }}>
          <a className="button" href={brandConfig.discoveryUrl}>
            Open LIFTStack discovery wizard
          </a>
          <a className="button" href={brandConfig.commandCenterBrandPath}>
            Open Command Center brand surface
          </a>
        </div>
      </section>

      <section className="grid grid-3" style={{ marginTop: 18 }}>
        {operatingLanes.map((lane) => (
          <article className="card" key={lane}>
            <h2>{lane}</h2>
            <p className="muted">Controlled from GitHub, routed through LIFTStack discovery, and governed by technical delivery receipts.</p>
          </article>
        ))}
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2>Discovery routing guard</h2>
        <p className="muted">
          LIFTStack prospects must not cross-route into Altrium, Schiele, Genesis, Circle of Growth, or BearSchiele by default. Current approved route: <code>{routeReceipt.discoveryUrl}</code>
        </p>
        <div className="grid grid-3" style={{ marginTop: 16 }}>
          {brandConfig.allowedIntents.map((intent) => (
            <div className="card" key={intent}>
              <strong>{intent}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="panel" style={{ marginTop: 18 }}>
        <h2>Build sequence</h2>
        <div className="grid">
          {buildSteps.map((step, index) => (
            <div className="card" key={step}>
              <strong>Phase {index + 1}</strong>
              <p className="muted">{step}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
