import OperatingBodyPage from '@/components/liftstack/OperatingBodyPage'
import { liftstackPages } from '@/lib/liftstack-pages'

export const metadata = {
  title: 'Deployment Ledger — LIFTStack',
  description: 'LIFTStack deployment ledger shell for build gates, deployment proof, smoke checks, and follow-up actions.',
}

export default function DeploymentLedgerPage() {
  return <OperatingBodyPage page={liftstackPages['deployment-ledger']} />
}
