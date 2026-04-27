import LiftstackDashboardShell from '@/components/liftstack/LiftstackDashboardShell'

export const metadata = {
  title: 'Dashboard — LIFTStack',
  description: 'LIFTStack dashboard shell for technical delivery posture, implementation state, delivery records, automation status, and Genesis AI connection.',
}

export default function DashboardPage() {
  return <LiftstackDashboardShell mode="dashboard" />
}
