import LiftstackDashboardShell from '@/components/liftstack/LiftstackDashboardShell'

export const metadata = {
  title: 'Portal — LIFTStack',
  description: 'LIFTStack client portal shell modeled as a condensed Genesis App experience for technical delivery state, records, and next actions.',
}

export default function PortalPage() {
  return <LiftstackDashboardShell mode="portal" />
}
