import OperatingBodyPage from '@/components/liftstack/OperatingBodyPage'
import { liftstackPages } from '@/lib/liftstack-pages'

export const metadata = {
  title: 'About — LIFTStack',
  description: 'LIFTStack technical operating body for implementation, automation, integrations, deployment proof, and technical rescue.',
}

export default function AboutPage() {
  return <OperatingBodyPage page={liftstackPages.about} />
}
