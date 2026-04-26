import { NextResponse } from 'next/server'
import { brandConfig } from '@/lib/brand-config'

export const dynamic = 'force-dynamic'

export async function GET() {
  return NextResponse.json({
    ok: true,
    brand: {
      slug: brandConfig.slug,
      name: brandConfig.name,
      role: brandConfig.role,
      discoveryUrl: brandConfig.discoveryUrl,
      allowedIntents: brandConfig.allowedIntents,
    },
    operatingRules: [
      'WordPress is the landing, trust, SEO, and discovery-entry layer.',
      'GitHub owns technical intake logic, implementation receipts, automation posture, deployment history, and Command Center sync.',
      'Never cross-route LIFTStack discovery CTAs into another brand wizard by default.',
      'Genesis may classify, prioritize, summarize, and recommend action when it creates operational value.',
      'Technical rescue and platform migration requests require fast operator review and clear proof receipts.',
    ],
    checkedAt: new Date().toISOString(),
  })
}
