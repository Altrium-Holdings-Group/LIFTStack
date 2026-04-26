import { NextResponse } from 'next/server'
import { brandConfig } from '@/lib/brand-config'

export const dynamic = 'force-dynamic'

export async function GET() {
  return NextResponse.json({
    ok: true,
    brand: brandConfig.slug,
    contract: 'brand_discovery_receipt.v1',
    storage: 'pending_supabase_receipt_ledger',
    currentBehavior: 'receipts_are_generated_by_post_api_discovery_and_optionally_synced_to_command_center',
    requiredFields: [
      'id',
      'brandSlug',
      'source',
      'discoveryUrl',
      'intent',
      'priority',
      'lead',
      'summary',
      'desiredOutcome',
      'routedAt',
      'recommendedAction',
      'commandCenterStatus',
      'schemaVersion',
    ],
    checkedAt: new Date().toISOString(),
  })
}
