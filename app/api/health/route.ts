import { NextResponse } from 'next/server'
import { brandConfig } from '@/lib/brand-config'
import { assertBrandDiscoveryRoute } from '@/lib/discovery-routing'

export const dynamic = 'force-dynamic'

export async function GET() {
  const routeCheck = assertBrandDiscoveryRoute(brandConfig.discoveryUrl)

  return NextResponse.json({
    ok: true,
    brand: brandConfig.slug,
    service: 'liftstack-operating-repo',
    posture: 'foundation',
    wordpressRole: 'landing_trust_seo_discovery_entry',
    githubRole: 'technical_intake_implementation_receipts_automation_posture_command_center_sync',
    discoveryRouting: routeCheck,
    commandCenterBrandPath: brandConfig.commandCenterBrandPath,
    checkedAt: new Date().toISOString(),
  })
}
