import { NextResponse } from 'next/server'
import { brandConfig } from '@/lib/brand-config'

export const dynamic = 'force-dynamic'

export async function GET() {
  return NextResponse.json({
    ok: true,
    brand: brandConfig.slug,
    commandCenterApiUrl: brandConfig.commandCenterApiUrl,
    commandCenterBrandPath: brandConfig.commandCenterBrandPath,
    syncMode: process.env.COMMAND_CENTER_API_KEY ? 'enabled' : 'skipped_until_api_key_configured',
    contract: 'brand_discovery_receipt.v1',
    checkedAt: new Date().toISOString(),
  })
}
