import OperatingBodyPage from '@/components/liftstack/OperatingBodyPage'
import { liftstackPages } from '@/lib/liftstack-pages'

export const metadata = {
  title: 'Solutions — LIFTStack',
  description: 'LIFTStack solutions map for automation, app builds, workflow engineering, integrations, migration, and rescue.',
}

export default function SolutionsPage() {
  return <OperatingBodyPage page={liftstackPages.solutions} />
}
