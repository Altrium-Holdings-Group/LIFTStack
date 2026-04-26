import { brandConfig } from '@/lib/brand-config'

export default function DiscoveryPage() {
  return (
    <main>
      <section className="panel">
        <span className="badge">Discovery routing</span>
        <h1>LIFTStack discovery starts here.</h1>
        <p className="muted" style={{ maxWidth: 760 }}>
          This GitHub route documents and validates the LIFTStack discovery contract. The active public wizard remains on WordPress until a governed cutover is approved.
        </p>
        <p className="muted">
          Approved discovery URL: <code>{brandConfig.discoveryUrl}</code>
        </p>
        <a className="button" href={brandConfig.discoveryUrl}>
          Continue to LIFTStack discovery wizard
        </a>
      </section>
    </main>
  )
}
