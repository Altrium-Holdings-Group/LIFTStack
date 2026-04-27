import { brandConfig } from '@/lib/brand-config'

const experienceHighlights = [
  {
    title: 'Make the technical path feel calm',
    body: 'Clients should immediately see that the system has a method: diagnose, scope, build, ship, prove, and improve.',
  },
  {
    title: 'Turn messy work into visible progress',
    body: 'Automation, app builds, integrations, migration, and rescue work are framed as a guided journey with owners and proof.',
  },
  {
    title: 'Show receipts before the work gets complicated',
    body: 'Build gates, delivery notes, technical status, and next actions are presented as part of the experience, not hidden in a backend.',
  },
]

const clientActions = [
  {
    label: 'Explore solutions',
    href: '/solutions',
    kicker: 'Technical lanes',
    title: 'Find the right build path.',
    body: 'Review automation, workflow engineering, app builds, integration, migration, and technical rescue lanes.',
  },
  {
    label: 'Enter the dashboard',
    href: '/dashboard',
    kicker: 'Technical command',
    title: 'Preview delivery visibility.',
    body: 'See how technical work can be organized around status, receipts, blockers, implementation state, and next action.',
  },
  {
    label: 'Start discovery',
    href: '/discovery-wizard',
    kicker: 'Guided next step',
    title: 'Start with the right system context.',
    body: 'Use LIFTStack discovery when the need is technical implementation, automation, rescue, integration, or migration.',
  },
]

const journeyPreview = [
  'Assess',
  'Discover',
  'Scope',
  'Build',
  'Ship',
  'Prove',
]

const deliveryCards = [
  { name: 'Automation', role: 'Reduce drag', detail: 'Workflow triggers, approvals, handoffs, exceptions, and monitoring that save time without creating hidden risk.' },
  { name: 'Implementation', role: 'Ship systems', detail: 'Apps, internal tools, integrations, and cloud services delivered with visible build gates and status.' },
  { name: 'Technical Rescue', role: 'Stabilize fast', detail: 'Triage the issue, contain risk, repair the workflow, and leave behind a prevention plan.' },
  { name: 'Delivery Ledger', role: 'Prove the work', detail: 'Track what shipped, where it lives, what changed, which gate passed, and what needs attention next.' },
  { name: 'Genesis AI', role: 'Prioritize action', detail: 'Prepare technical summaries, classification, risk notes, architecture hints, and next-action recommendations.' },
  { name: 'Command Center', role: 'Surface proof', detail: 'Keep technical status, receipts, risks, and blockers visible to the operator layer.' },
]

export default function HomePage() {
  return (
    <main className="experience-main">
      <section className="experience-hero">
        <nav className="experience-nav" aria-label="LIFTStack experience navigation">
          <a className="experience-brand" href="/">
            LIFTStack
          </a>
          <div className="experience-nav-links">
            <a href="/solutions">Solutions</a>
            <a href="/automation">Automation</a>
            <a href="/technical-rescue">Rescue</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/portal">Portal</a>
            <a href="/discovery-wizard">Discovery</a>
          </div>
        </nav>

        <div className="experience-hero-grid">
          <div className="experience-hero-copy">
            <span className="experience-pill">{brandConfig.role}</span>
            <h1>Technical systems that feel clear before they feel complex.</h1>
            <p>
              LIFTStack helps leaders turn scattered tools, stalled builds, automation ideas, and technical problems into clean systems with visible progress and proof.
            </p>
            <div className="experience-actions">
              <a className="button experience-primary" href="/dashboard">
                Enter technical dashboard
              </a>
              <a className="button button-secondary" href="/solutions">
                Explore solutions
              </a>
              <a className="button experience-ghost" href="/discovery-wizard">
                Start discovery
              </a>
            </div>
          </div>

          <aside className="experience-command-card" aria-label="LIFTStack technical preview">
            <div className="command-card-topline">Technical delivery preview</div>
            <div className="command-orbit">
              <span>Scope</span>
              <span>Ship</span>
              <span>Proof</span>
            </div>
            <div className="command-card-metric">
              <strong>6</strong>
              <span>technical checkpoints from assessment to delivery proof</span>
            </div>
            <div className="command-card-metric">
              <strong>1</strong>
              <span>clear delivery lane for automation, build, migration, integration, or rescue</span>
            </div>
            <a className="command-card-link" href="/portal">
              Preview client portal →
            </a>
          </aside>
        </div>
      </section>

      <section className="experience-section">
        <div className="experience-section-heading">
          <span className="experience-pill">What clients should feel</span>
          <h2>Technical confidence before the first scope call.</h2>
        </div>
        <div className="experience-grid-3">
          {experienceHighlights.map((item) => (
            <article className="experience-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section split-section">
        <div>
          <span className="experience-pill">Delivery journey</span>
          <h2>From messy system to visible progress.</h2>
          <p className="experience-muted">
            The experience turns technical work into a path clients can understand: assess the problem, discover context, scope the work, build, ship, and prove what changed.
          </p>
        </div>
        <div className="journey-rail">
          {journeyPreview.map((step, index) => (
            <div className="journey-node" key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="experience-section">
        <div className="experience-section-heading">
          <span className="experience-pill">Choose your path</span>
          <h2>The right technical door should be obvious.</h2>
        </div>
        <div className="experience-grid-3">
          {clientActions.map((action) => (
            <a className="experience-card action-card" href={action.href} key={action.href}>
              <span>{action.kicker}</span>
              <h3>{action.title}</h3>
              <p>{action.body}</p>
              <strong>{action.label} →</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="experience-section">
        <div className="experience-section-heading">
          <span className="experience-pill">How delivery feels</span>
          <h2>Clients should see the system forming around their problem.</h2>
        </div>
        <div className="ecosystem-grid">
          {deliveryCards.map((card) => (
            <article className="ecosystem-card" key={card.name}>
              <span>{card.role}</span>
              <h3>{card.name}</h3>
              <p>{card.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-final panel">
        <span className="experience-pill">Ready to clean up the system</span>
        <h2>Start with context. Build with discipline. Ship with proof.</h2>
        <p>
          LIFTStack is built for leaders who need technology to become leverage, not another source of confusion.
        </p>
        <div className="experience-actions">
          <a className="button experience-primary" href="/discovery-wizard">
            Start LIFTStack discovery
          </a>
          <a className="button button-secondary" href="/dashboard">
            View technical dashboard
          </a>
        </div>
      </section>
    </main>
  )
}
