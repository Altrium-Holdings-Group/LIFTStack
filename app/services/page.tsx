import OperatingBodyPage from '@/components/liftstack/OperatingBodyPage'
import { liftstackPages } from '@/lib/liftstack-pages'

export const metadata = {
  title: 'Services — LIFTStack',
  description: 'LIFTStack technical services for implementation, integration, automation, architecture, and managed execution.',
}

export default function ServicesPage() {
  return <OperatingBodyPage page={liftstackPages.services} />
}
