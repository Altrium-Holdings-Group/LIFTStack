import OperatingBodyPage from '@/components/liftstack/OperatingBodyPage'
import { liftstackPages } from '@/lib/liftstack-pages'

export const metadata = {
  title: 'Technical Rescue — LIFTStack',
  description: 'LIFTStack technical rescue surface for triage, stabilization, fixes, deployment proof, and prevention planning.',
}

export default function TechnicalRescuePage() {
  return <OperatingBodyPage page={liftstackPages['technical-rescue']} />
}
