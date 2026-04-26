import { z } from 'zod'
import { brandConfig, isLiftstackDiscoveryIntent } from './brand-config'

export const liftstackDiscoveryIntakeSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(180),
  phone: z.string().trim().max(40).optional(),
  organization: z.string().trim().max(180).optional(),
  intent: z.string().trim().refine(isLiftstackDiscoveryIntent, {
    message: `Intent must be one of: ${brandConfig.allowedIntents.join(', ')}`,
  }),
  summary: z.string().trim().min(10).max(2000),
  desiredOutcome: z.string().trim().min(5).max(1000),
  discoveryUrl: z.string().trim().url(),
  source: z.enum(['wordpress', 'github-app', 'voice', 'manual']).default('github-app'),
})

export type LiftstackDiscoveryIntake = z.infer<typeof liftstackDiscoveryIntakeSchema>

export function priorityForIntent(intent: string): 'low' | 'medium' | 'high' | 'critical' {
  if (intent === 'technical-rescue') return 'critical'
  if (intent === 'platform-migration' || intent === 'systems-integration') return 'high'
  if (intent === 'ai-automation' || intent === 'workflow-engineering' || intent === 'app-build') return 'medium'
  return 'low'
}

export function recommendedActionForIntent(intent: string) {
  if (intent === 'technical-rescue') return 'Review technical rescue scope immediately and assign an engineering operator.'
  if (intent === 'platform-migration') return 'Assess migration scope, current stack, risk, and required deployment path.'
  if (intent === 'systems-integration') return 'Map source systems, target workflows, API constraints, and implementation risk.'
  if (intent === 'ai-automation') return 'Qualify automation opportunity and determine whether Genesis AI Brain should support discovery.'
  if (intent === 'workflow-engineering') return 'Assess operational workflow, bottlenecks, and measurable automation outcomes.'
  if (intent === 'app-build') return 'Qualify app build scope, users, data model, deployment, and maintenance expectations.'
  if (intent === 'internal-tooling') return 'Review internal tooling need and map operator, admin, and audit requirements.'
  return 'Review technical inquiry and assign the correct LIFTStack operator.'
}
