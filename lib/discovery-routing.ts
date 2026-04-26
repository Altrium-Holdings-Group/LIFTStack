import { brandConfig } from './brand-config'

export type DiscoveryRouteCheck = {
  ok: boolean
  expectedUrl: string
  receivedUrl: string
  reason?: string
}

export function assertBrandDiscoveryRoute(url: string): DiscoveryRouteCheck {
  const receivedUrl = url.trim()
  const expectedUrl = brandConfig.discoveryUrl

  if (receivedUrl !== expectedUrl) {
    return {
      ok: false,
      expectedUrl,
      receivedUrl,
      reason: `Cross-route blocked for ${brandConfig.slug}`,
    }
  }

  return {
    ok: true,
    expectedUrl,
    receivedUrl,
  }
}

export function getDiscoveryRouteReceipt() {
  return {
    brandSlug: brandConfig.slug,
    discoveryUrl: brandConfig.discoveryUrl,
    rule: 'never_cross_route_discovery_ctas',
    checkedAt: new Date().toISOString(),
  }
}
