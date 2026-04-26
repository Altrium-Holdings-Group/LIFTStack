export type LiftstackPageKey = 'about' | 'services' | 'solutions' | 'automation' | 'technical-rescue' | 'deployment-ledger' | 'discovery-wizard'

export type LiftstackPage = {
  eyebrow: string
  title: string
  summary: string
  proof: string
  primaryCta: { label: string; href: string }
  sections: { title: string; body: string }[]
  receipts: string[]
  genesisRails: string[]
}

export const liftstackNav = [
  { label: 'WordPress home', href: 'https://www.lift-technology.net/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Automation', href: '/automation' },
  { label: 'Technical Rescue', href: '/technical-rescue' },
  { label: 'Deployment Ledger', href: '/deployment-ledger' },
  { label: 'Discovery', href: '/discovery-wizard' },
] as const

export const liftstackPages: Record<LiftstackPageKey, LiftstackPage> = {
  about: {
    eyebrow: 'Engineering operating body',
    title: 'LIFTStack turns technical chaos into clean systems, shipped work, and proof.',
    summary: 'LIFTStack is the engineering, implementation, automation, and tooling arm for the Altrium ecosystem. It builds the systems that make strategy executable.',
    proof: 'The app body exists to route technical work, clarify implementation scope, document deployments, and connect delivery proof into Command Center and Genesis AI.',
    primaryCta: { label: 'Start technical discovery', href: '/discovery-wizard' },
    sections: [
      { title: 'What LIFTStack owns', body: 'Cloud architecture, workflow engineering, app builds, AI automation, systems integration, migration support, and technical rescue.' },
      { title: 'Why this app exists', body: 'WordPress remains the front door. The app body becomes the delivery surface where technical work is scoped, tracked, and proven.' },
      { title: 'Execution doctrine', body: 'No feature without a gate. No deployment without a receipt. No automation without an owner and rollback path.' },
    ],
    receipts: ['technical discovery', 'implementation receipt', 'deployment proof', 'automation shipped'],
    genesisRails: ['Genesis App technical status', 'Command Center deployment proof', 'AI Brain technical classification', 'Voice rescue intake'],
  },
  services: {
    eyebrow: 'Technical services',
    title: 'Implementation, integration, automation, architecture, and managed technical execution.',
    summary: 'LIFTStack services convert business needs into reliable technical systems with quality gates, delivery receipts, and operational visibility.',
    proof: 'Services are measured by scope clarity, implementation milestones, deployment history, issue resolution, and recurring health signals.',
    primaryCta: { label: 'Start services discovery', href: '/discovery-wizard' },
    sections: [
      { title: 'Cloud systems architecture', body: 'Design scalable infrastructure, environment separation, deployment posture, and operational controls.' },
      { title: 'Data integration and automation', body: 'Connect systems, automate workflows, reduce manual friction, and create reliable handoff paths.' },
      { title: 'Analytics and dashboards', body: 'Translate KPIs and operating signals into dashboards leaders can actually use.' },
      { title: 'Managed services', body: 'Support monitoring, improvements, updates, and ongoing optimization after delivery.' },
    ],
    receipts: ['service fit review', 'implementation route', 'deployment note', 'managed service update'],
    genesisRails: ['AI Brain route recommendation', 'Command Center implementation tracking', 'Genesis App technical dashboard'],
  },
  solutions: {
    eyebrow: 'Solutions map',
    title: 'Reusable technical lanes for automation, apps, integrations, migration, and rescue.',
    summary: 'The solutions surface organizes LIFTStack work by repeatable operating lanes instead of one-off technical requests.',
    proof: 'A solution lane is valid when it has a repeatable intake, scope pattern, delivery workflow, quality gate, and receipt model.',
    primaryCta: { label: 'Find the right technical lane', href: '/discovery-wizard' },
    sections: [
      { title: 'AI automation', body: 'Automations that reduce repeated human effort and create auditable action trails.' },
      { title: 'Workflow engineering', body: 'Process redesign, approvals, handoffs, notifications, and execution flow.' },
      { title: 'App builds', body: 'Focused product and internal-tool builds with clean deployment and operational proof.' },
      { title: 'Platform migration', body: 'Move brittle or scattered systems into governed, maintainable environments.' },
    ],
    receipts: ['solution fit', 'scope map', 'quality gate', 'delivery receipt'],
    genesisRails: ['AI Brain solution classification', 'Command Center status lane', 'Genesis SaaS Enterprise reference patterns'],
  },
  automation: {
    eyebrow: 'Automation lane',
    title: 'Automation that creates leverage, not hidden fragility.',
    summary: 'LIFTStack automation is built around measurable time savings, clean triggers, auditability, owner visibility, and rollback planning.',
    proof: 'Automation is not complete until the workflow, trigger, exception path, owner, and receipt are documented.',
    primaryCta: { label: 'Scope automation fit', href: '/discovery-wizard' },
    sections: [
      { title: 'Workflow triggers', body: 'Define what starts the automation, who owns it, and where the receipt lands.' },
      { title: 'Approval paths', body: 'Keep critical workflows governed with explicit approvals and exception handling.' },
      { title: 'Monitoring posture', body: 'Track failures, stale states, and missing follow-through before automation becomes risk.' },
    ],
    receipts: ['automation intake', 'workflow shipped', 'exception logged', 'owner review'],
    genesisRails: ['AI Brain workflow summary', 'Command Center automation status', 'Genesis App operating cards'],
  },
  'technical-rescue': {
    eyebrow: 'Technical rescue',
    title: 'Stabilize broken systems before scaling them.',
    summary: 'The rescue lane is for urgent technical problems, stalled builds, broken deployments, brittle integrations, and systems that need disciplined recovery.',
    proof: 'A rescue engagement is proven by triage notes, risk containment, fix history, deployment receipt, and prevention plan.',
    primaryCta: { label: 'Start rescue discovery', href: '/discovery-wizard' },
    sections: [
      { title: 'Triage', body: 'Identify the failure mode, impact, owner, risk, and immediate containment path.' },
      { title: 'Stabilize', body: 'Repair the highest-risk system path without introducing uncontrolled new scope.' },
      { title: 'Prevent', body: 'Convert the incident into documentation, monitoring, rollback, and quality-gate improvements.' },
    ],
    receipts: ['rescue intake', 'triage note', 'fix receipt', 'prevention plan'],
    genesisRails: ['Voice urgent intake', 'AI Brain triage summary', 'Command Center rescue status'],
  },
  'deployment-ledger': {
    eyebrow: 'Deployment proof',
    title: 'Every technical delivery needs a deployment ledger.',
    summary: 'The deployment ledger shell prepares the path for recording what shipped, where it shipped, which gate passed, and what should be watched next.',
    proof: 'Deployments are not just code changes. They are operating events with owner, commit, environment, result, risk, and follow-up.',
    primaryCta: { label: 'Start implementation discovery', href: '/discovery-wizard' },
    sections: [
      { title: 'Build proof', body: 'Install, type-check, lint, build, and security posture define whether work is ready to move.' },
      { title: 'Deployment proof', body: 'Record service, environment, URL, commit, result, and rollback posture.' },
      { title: 'Follow-up proof', body: 'Track smoke tests, health checks, known issues, and the next improvement loop.' },
    ],
    receipts: ['build gate', 'deployment receipt', 'smoke proof', 'follow-up action'],
    genesisRails: ['Command Center build log', 'Genesis App technical status', 'AI Brain risk summary'],
  },
  'discovery-wizard': {
    eyebrow: 'Discovery shell',
    title: 'LIFTStack discovery stays technical and receipt-ready.',
    summary: 'This shell prepares the move from WordPress entry into app-owned technical intake. Until submit logic is proven, the approved WordPress discovery entry remains available.',
    proof: 'The next step is app-owned validation, sanitized responses, server detail logging, and durable Command Center receipt sync.',
    primaryCta: { label: 'Open approved WordPress discovery', href: 'https://www.lift-technology.net/discovery-wizard/' },
    sections: [
      { title: 'Current posture', body: 'This is a controlled shell, not the final app-owned submission flow.' },
      { title: 'Next build', body: 'Add technical intake form, validation, receipt payload, Command Center sync, smoke proof, and health status.' },
      { title: 'Routing guard', body: 'LIFTStack discovery must not cross-route into another brand unless a governed handoff receipt is created.' },
    ],
    receipts: ['discovery started', 'technical intake submitted', 'Command Center sync'],
    genesisRails: ['Command Center technical receipt lane', 'AI Brain technical classification', 'Voice and App intake lane'],
  },
}
