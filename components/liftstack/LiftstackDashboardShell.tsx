import { brandConfig } from '@/lib/brand-config'
import {
  liftstackClientJourney,
  liftstackDashboardStats,
  liftstackPortalActions,
  liftstackPortalModules,
} from '@/lib/liftstack-dashboard'

export default function LiftstackDashboardShell({ mode = 'dashboard' }: { mode?: 'dashboard' | 'portal' }) {
  const isPortal = mode === 'portal'

  return (
    <main className="body-main dashboard-main">
      <nav className="body-nav" aria-label="LIFTStack dashboard navigation">
        <a className="body-wordmark" href="/">
          {brandConfig.name}
        </a>
        <div className="body-nav-links">
          <a className="body-nav-link" href="/dashboard">Dashboard</a>
          <a className="body-nav-link" href="/portal">Portal</a>
          <a className="body-nav-link" href="/solutions">Solutions</a>
          <a className="body-nav-link" href="/automation">Automation</a>
          <a className="body-nav-link" href="/deployment-ledger">Delivery Ledger</a>
          <a className="body-nav-link" href="/discovery-wizard">Discovery</a>
          <a className="body-nav-link" href={brandConfig.commandCenterBrandPath}>Command Center</a>
        </div>
      </nav>

      <section className="panel dashboard-hero">
        <span className="badge">{isPortal ? 'Technical portal shell' : 'Technical dashboard shell'}</span>
        <h1>{isPortal ? 'LIFTStack client portal, condensed from Genesis App.' : 'LIFTStack technical dashboard for implementation proof.'}</h1>
        <p className="muted dashboard-hero-summary">
          {isPortal
            ? 'This shell prepares a technical client experience modeled after Genesis App: implementation state, delivery records, issue posture, automation status, next action, and Command Center handoff.'
            : 'This dashboard turns LIFTStack into an app-like technical operating body: pipeline, delivery proof, automation posture, issue triage, Genesis AI support, and receipts.'}
        </p>
        <div className="body-actions">
          {liftstackPortalActions.map((action) => (
            <a className="button" href={action.href} key={action.href}>
              {action.label}
            </a>
          ))}
        </div>
      </section>

      <section className="grid grid-3 dashboard-stat-grid" aria-label="LIFTStack dashboard status">
        {liftstackDashboardStats.map((stat) => (
          <article className="card dashboard-stat-card" key={stat.label}>
            <div className="body-card-kicker">{stat.label}</div>
            <strong>{stat.value}</strong>
            <p className="muted">{stat.detail}</p>
          </article>
        ))}
      </section>

      <section className="panel body-section-panel">
        <div className="body-section-heading">
          <span className="badge">Client journey</span>
          <h2>Assessment to referral, prepared for technical delivery proof</h2>
          <p className="muted">
            The Daily Strategy Planner defines the client process as Assessment, Discovery Call, Proposal, Contract Agreement, Closeout or Termination, and Referral Program. This shell turns that into a technical portal experience before schema or auth is introduced.
          </p>
        </div>
        <div className="journey-list">
          {liftstackClientJourney.map((item) => (
            <article className="card journey-card" key={item.step}>
              <div className="journey-step">{item.step}</div>
              <div>
                <h3>{item.title}</h3>
                <p className="muted">{item.purpose}</p>
                <div className="journey-proof">Proof target: {item.proof}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="panel body-section-panel">
        <div className="body-section-heading">
          <span className="badge">Condensed Genesis App modules</span>
          <h2>Portal modules to build next</h2>
        </div>
        <div className="grid grid-3">
          {liftstackPortalModules.map((module) => (
            <article className="card" key={module.title}>
              <h3>{module.title}</h3>
              <p className="muted">{module.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
