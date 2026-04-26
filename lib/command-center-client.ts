import { brandConfig } from './brand-config'
import type { BrandDiscoveryReceipt } from './receipt-writer'

export type CommandCenterSyncResult = {
  ok: boolean
  status: 'synced' | 'skipped' | 'failed'
  checkedAt: string
  reason?: string
}

function getCommandCenterSyncUrl() {
  const baseUrl = process.env.COMMAND_CENTER_API_URL?.trim() || brandConfig.commandCenterApiUrl
  return `${baseUrl.replace(/\/$/, '')}/api/brand-discovery/receipts`
}

export async function syncReceiptToCommandCenter(
  receipt: BrandDiscoveryReceipt,
): Promise<CommandCenterSyncResult> {
  const apiKey = process.env.COMMAND_CENTER_API_KEY?.trim()

  if (!apiKey) {
    return {
      ok: true,
      status: 'skipped',
      checkedAt: new Date().toISOString(),
      reason: 'command_center_api_key_missing',
    }
  }

  try {
    const response = await fetch(getCommandCenterSyncUrl(), {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ receipt }),
      cache: 'no-store',
    })

    if (!response.ok) {
      return {
        ok: false,
        status: 'failed',
        checkedAt: new Date().toISOString(),
        reason: 'command_center_sync_failed',
      }
    }

    return {
      ok: true,
      status: 'synced',
      checkedAt: new Date().toISOString(),
    }
  } catch {
    return {
      ok: false,
      status: 'failed',
      checkedAt: new Date().toISOString(),
      reason: 'command_center_sync_request_failed',
    }
  }
}
