import { brandConfig } from '@/lib/brand-config'
import { liftstackNav, type LiftstackPage } from '@/lib/liftstack-pages'

export default function OperatingBodyPage({ page }: { page: LiftstackPage }) {
  return (
    <main className="body-main">
      <nav className="body-nav" aria-label="LIFTStack operating body navigation">
        <a className="body-wordmark" href="/">
          {brandConfig.name}
        </a>
        <div className="body-nav-links">
          {liftstackNav.map((item) => (
            <a key={item.href} href={item.href} className="body-nav-link">
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section className="panel body-hero">
        <span className="badge">{page.eyebrow}</span>
        <h1>{page.title}</h1>
        <p className="muted body-hero-summary">{page.summary}</p>
        <div className="body-actions">
          <a className="button" href={page.primaryCta.href}>
            {page.primaryCta.label}
          </a>
          <a className="button button-secondary" href={brandConfig.commandCenterBrandPath}>
            Command Center brand surface
          </a>
        </div>
      </section>

      <section className="grid grid-3 body-proof-grid" aria-label="Technical proof model">
        <article className="card body-proof-card">
          <div className="body-card-kicker">Technical proof</div>
          <p>{page.proof}</p>
        </article>
        <article className="card body-proof-card">
          <div className="body-card-kicker">WordPress role</div>
          <p>Home, landing, trust, SEO, and public discovery entry remain on WordPress until an approved cutover.</p>
        </article>
        <article className="card body-proof-card">
          <div className="body-card-kicker">GitHub app role</div>
          <p>This app owns the body: technical routing, implementation posture, deployment proof, receipts, and Command Center sync.</p>
        </article>
      </section>

      <section className="panel body-section-panel">
        <div className="body-section-heading">
          <span className="badge">Technical body</span>
          <h2>What this surface now controls</h2>
        </div>
        <div className="grid body-section-grid">
          {page.sections.map((section) => (
            <article className="card" key={section.title}>
              <h3>{section.title}</h3>
              <p className="muted">{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid grid-3 body-ledger-grid">
        <article className="card">
          <div className="body-card-kicker">Receipt targets</div>
          <ul className="body-list">
            {page.receipts.map((receipt) => (
              <li key={receipt}>{receipt}</li>
            ))}
          </ul>
        </article>
        <article className="card">
          <div className="body-card-kicker">Genesis AI rails</div>
          <ul className="body-list">
            {page.genesisRails.map((rail) => (
              <li key={rail}>{rail}</li>
            ))}
          </ul>
        </article>
        <article className="card">
          <div className="body-card-kicker">Next build gate</div>
          <p className="muted">
            Move from public technical body to app-owned intake: validation, sanitized client response, server logs, receipt payload, and durable Command Center proof.
          </p>
        </article>
      </section>
    </main>
  )
}
