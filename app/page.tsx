import { brandConfig } from '@/lib/brand-config'
import { getDiscoveryRouteReceipt } from '@/lib/discovery-routing'

const operatingLanes = [
  'Technical operating body',
  'AI automation and workflow engineering',
  'App builds and integrations',
  'Platform migration and rescue',
  'Deployment receipts',
  'Genesis AI technical support',
]

const bodyRoutes = [
  {
    label: 'About',
    href: '/about',
    proof: 'Defines LIFTStack as the engineering and implementation arm for systems that make strategy executable.',
  },
  {
    label: 'Services',
    href: '/services',
    proof: 'Clarifies implementation, integration, automation, architecture, and managed execution lanes.',
  },
  {
    label: 'Solutions',
    href: '/solutions',
    proof: 'Maps repeatable technical lanes for automation, app builds, workflow engineering, migration, and rescue.',
  },
  {
    label: 'Automation',
    href: '/automation',
    proof: 'Focuses workflows, triggers, approvals, monitoring, owners, and rollback posture.',
  },
  {
    label: 'Technical Rescue',
    href: '/technical-rescue',
    proof: 'Creates a controlled triage, stabilization, fix, and prevention path for broken systems.',
  },
  {
    label: 'Deployment Ledger',
    href: '/deployment-ledger',
    proof: 'Prepares build gates, deployment proof, smoke checks, and follow-up actions.',
  },
  {
    label: 'Discovery',
    href: '/discovery-wizard',
    proof: 'Prepares app-owned technical intake while preserving the approved WordPress discovery entry.',
  },
]

const buildSteps = [
  'Foundation: brand config, routing guard, health API, and receipt contract.',
  'Body: public technical operating pages for the non-home business app experience.',
  'Intake: LIFTStack-specific technical discovery schema and API receipt generation.',
  'Sync: Command Center receipt handoff and Genesis AI technical classification.',
  'Ledgers: deployment, implementation, automation, rescue, and managed-service proof surfaces.',
]

export default function HomePage() {
  const routeReceipt = getDiscoveryRouteReceipt()

  return (
    <main>
      <section className="panel">
        <span className="badge">{brandConfig.role}</span>
        <h1>{brandConfig.name} operating body</h1>
        <p className="muted" style={{ maxWidth: 820 }}>
          WordPress remains the public home, trust, SEO, and discovery-entry layer. This GitHub/Railway app now becomes the controlled body for technical pages, implementation posture, deployment proof, automation receipts, and Genesis AI connection.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 24 }}>
          <a className="button" href="/about">
            Open technical body
          </a>
          <a className="button button-secondary" href="/discovery-wizard">
            Open technical discovery shell
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
        <span className="badge">Priority One</span>
        <h2 style={{ marginTop: 16 }}>LIFTStack technical body routes</h2>
        <p className="muted" style={{ maxWidth: 780 }}>
          These are the first non-home technical body routes moved into the app. They are intentionally public, no-schema, and no-cutover so the delivery body can mature safely before WordPress canonical changes.
        </p>
        <div className="grid grid-3" style={{ marginTop: 16 }}>
          {bodyRoutes.map((route) => (
            <a className="card body-route-card" href={route.href} key={route.href}>
              <strong>{route.label}</strong>
              <p className="muted">{route.proof}</p>
            </a>
          ))}
        </div>
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
