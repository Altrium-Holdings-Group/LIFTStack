import { brandConfig } from './brand-config'
import type { LiftstackDiscoveryIntake } from './intake-schema'
import { priorityForIntent, recommendedActionForIntent } from './intake-schema'

export type BrandDiscoveryReceipt = {
  id: string
  brandSlug: string
  source: 'wordpress' | 'github-app' | 'voice' | 'manual'
  discoveryUrl: string
  intent: string
  priority: 'low' | 'medium' | 'high' | 'critical'
  lead: {
    name: string
    email: string
    phone?: string
    organization?: string
  }
  summary: string
  desiredOutcome: string
  routedAt: string
  recommendedAction: string
  commandCenterStatus: 'queued' | 'synced' | 'failed' | 'skipped'
  schemaVersion: 'brand_discovery_receipt.v1'
}

function createReceiptId() {
  return `lift_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`
}

export function createDiscoveryReceipt(input: LiftstackDiscoveryIntake): BrandDiscoveryReceipt {
  return {
    id: createReceiptId(),
    brandSlug: brandConfig.slug,
    source: input.source,
    discoveryUrl: brandConfig.discoveryUrl,
    intent: input.intent,
    priority: priorityForIntent(input.intent),
    lead: {
      name: input.name,
      email: input.email,
      phone: input.phone,
      organization: input.organization,
    },
    summary: input.summary,
    desiredOutcome: input.desiredOutcome,
    routedAt: new Date().toISOString(),
    recommendedAction: recommendedActionForIntent(input.intent),
    commandCenterStatus: 'queued',
    schemaVersion: 'brand_discovery_receipt.v1',
  }
}

export function withCommandCenterStatus(
  receipt: BrandDiscoveryReceipt,
  commandCenterStatus: BrandDiscoveryReceipt['commandCenterStatus'],
): BrandDiscoveryReceipt {
  return {
    ...receipt,
    commandCenterStatus,
  }
}
