export const brandConfig = {
  slug: 'liftstack',
  name: 'LIFTStack',
  role: 'Engineering and tooling',
  discoveryUrl: 'https://www.lift-technology.net/discovery-wizard/',
  commandCenterBrandPath:
    'https://genesis-command-center-production.up.railway.app/admin/brands/liftstack',
  commandCenterApiUrl:
    process.env.COMMAND_CENTER_API_URL ?? 'https://genesis-command-center-production.up.railway.app',
  allowedIntents: [
    'ai-automation',
    'workflow-engineering',
    'app-build',
    'systems-integration',
    'internal-tooling',
    'platform-migration',
    'technical-rescue',
    'other',
  ] as const,
} as const

export type LiftstackDiscoveryIntent = (typeof brandConfig.allowedIntents)[number]

export function isLiftstackDiscoveryIntent(value: string): value is LiftstackDiscoveryIntent {
  return brandConfig.allowedIntents.includes(value as LiftstackDiscoveryIntent)
}
