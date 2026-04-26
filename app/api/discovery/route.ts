import { NextResponse } from 'next/server'
import { brandConfig } from '@/lib/brand-config'
import { assertBrandDiscoveryRoute } from '@/lib/discovery-routing'
import { liftstackDiscoveryIntakeSchema } from '@/lib/intake-schema'
import { createDiscoveryReceipt, withCommandCenterStatus } from '@/lib/receipt-writer'
import { syncReceiptToCommandCenter } from '@/lib/command-center-client'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const parsed = liftstackDiscoveryIntakeSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: 'Invalid discovery intake payload' }, { status: 400 })
  }

  const routeCheck = assertBrandDiscoveryRoute(parsed.data.discoveryUrl)
  if (!routeCheck.ok) {
    return NextResponse.json({ ok: false, error: 'Discovery cross-route blocked', routing: routeCheck }, { status: 409 })
  }

  const queuedReceipt = createDiscoveryReceipt(parsed.data)
  const syncResult = await syncReceiptToCommandCenter(queuedReceipt)
  const receipt = withCommandCenterStatus(queuedReceipt, syncResult.status)

  return NextResponse.json({ ok: true, receipt, commandCenterSync: syncResult })
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    brand: brandConfig.slug,
    discoveryUrl: brandConfig.discoveryUrl,
    allowedIntents: brandConfig.allowedIntents,
    rule: 'post_intake_receipts_only_no_cross_route_cta',
    checkedAt: new Date().toISOString(),
  })
}
