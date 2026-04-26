import OperatingBodyPage from '@/components/liftstack/OperatingBodyPage'
import { liftstackPages } from '@/lib/liftstack-pages'

export const metadata = {
  title: 'Discovery — LIFTStack',
  description: 'LIFTStack discovery shell for technical intake and future Command Center receipt sync.',
}

export default function DiscoveryWizardPage() {
  return <OperatingBodyPage page={liftstackPages['discovery-wizard']} />
}
