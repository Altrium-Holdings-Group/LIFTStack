import OperatingBodyPage from '@/components/liftstack/OperatingBodyPage'
import { liftstackPages } from '@/lib/liftstack-pages'

export const metadata = {
  title: 'Automation — LIFTStack',
  description: 'LIFTStack automation surface for workflows, triggers, approvals, monitoring, and operational proof.',
}

export default function AutomationPage() {
  return <OperatingBodyPage page={liftstackPages.automation} />
}
