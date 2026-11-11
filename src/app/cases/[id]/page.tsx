'use client'

const caseData: Record<string, {
  id: string; trsId: string; title: string; type: string; typeBg: string; typeColor: string; typeBorder: string
  severity: string; severityClass: string; severityDot: string; amount: string; assignee: string
  assigneeInitials: string; status: string; statusClass: string; description: string; flags: string[]
  riskScore: number; docId: string; docName: string
  entity: { name: string; taxId: string; bank: string; watchlist: string; address: string }
  forensics: { created: string; modified: string; producer: string; modifiedBy: string }
  timeline: { ts: string; actor: string; action: string; detail: string; type: string }[]
}> = {
  'CASE-2026-001': {
    id: 'CASE-2026-001', trsId: 'TRS-FD-2026-001', title: 'Duplicate Invoice — Acme Supply LLC',
    type: 'PROCUREMENT', typeBg: 'rgba(59,130,246,0.1)', typeColor: '#60a5fa', typeBorder: 'rgba(59,130,246,0.25)',
    severity: 'HIGH', severityClass: 'badge-high', severityDot: '#f59e0b', amount: '$142,500',
    assignee: 'Det. Sarah Chen', assigneeInitials: 'SC', status: 'OPEN', statusClass: 'badge-open',
    description: 'Invoice INV-2026-00398 resubmitted as an exact duplicate. SHA-256 hash collision confirmed.',
    flags: ['EXACT_DUPLICATE', 'HASH_COLLISION', 'VENDOR_BLOCKED'], riskScore: 97,
    docId: 'invoice_00398_resubmit', docName: 'invoice_00398_resubmit.pdf',
    entity: { name: 'Acme Supply LLC', taxId: '74-2918365', bank: 'Wells Fargo ****4821', watchlist: 'CLEAR', address: '1420 W. 5th St, Austin TX 78703' },
    forensics: { created: '2026-09-14 09:22:14', modified: '2026-10-18 14:07:33', producer: 'Adobe Acrobat 23.1', modifiedBy: 'Acrobat Distiller' },
    timeline: [
      { ts: '2026-10-18 14:07', actor: 'FraudLens AI', action: 'Document received', detail: 'invoice_00398_resubmit.pdf ingested via AP portal', type: 'system' },
      { ts: '2026-10-18 14:07', actor: 'Document Intelligence', action: 'Hash computed', detail: 'SHA-256: a3f8c291...b7e4 — exact match to invoice_00398.pdf (2026-09-14)', type: 'alert' },
      { ts: '2026-10-18 14:08', actor: 'FraudLens AI', action: 'Dedup flag raised', detail: 'EXACT_DUPLICATE — Invoice 00398 already processed and paid $142,500 on 2026-09-20', type: 'alert' },
      { ts: '2026-10-18 14:08', actor: 'Senzing ER', action: 'Entity resolution', detail: 'Vendor resolved: Acme Supply LLC (ID: ENT-7291) — 1 prior invoice, 0 watchlist hits', type: 'system' },
      { ts: '2026-10-18 14:09', actor: 'FraudLens AI', action: 'Case auto-created', detail: 'TRS-FD-2026-001 created · REJECTED · Vendor payment hold placed', type: 'case' },
      { ts: '2026-10-18 14:12', actor: 'Det. Sarah Chen', action: 'Case assigned', detail: 'Assigned to Lead Investigator Sarah Chen for review', type: 'investigator' },
    ],
  },
  'CASE-2026-002': {
    id: 'CASE-2026-002', trsId: 'TRS-FD-2026-002', title: 'Tampered Invoice — Amount Inflated $142,500 → $189,750',
    type: 'PROCUREMENT', typeBg: 'rgba(59,130,246,0.1)', typeColor: '#60a5fa', typeBorder: 'rgba(59,130,246,0.25)',
    severity: 'CRITICAL', severityClass: 'badge-critical', severityDot: '#ef4444', amount: '$189,750',
    assignee: 'Det. Marcus Webb', assigneeInitials: 'WE', status: 'REVIEW', statusClass: 'badge-review',
    description: 'PDF forensics confirmed the invoice was modified 14 days after creation using ilovepdf.com. Font inconsistencies confirm field-level editing. Amount inflated by $47,250.',
    flags: ['MODIFIED_AFTER_CREATION', 'FONT_INCONSISTENCY', 'PRODUCER_MISMATCH', 'AMOUNT_INCONSISTENCY', 'TOOL_ANOMALY', 'METADATA_TAMPERING'],
    riskScore: 85, docId: 'invoice_00441_tampered', docName: 'invoice_00441_tampered.pdf',
    entity: { name: 'Acme Supply LLC', taxId: '74-2918365', bank: 'Wells Fargo ****4821', watchlist: 'CLEAR', address: '1420 W. 5th St, Austin TX 78703' },
    forensics: { created: '2026-10-01 11:14:22', modified: '2026-10-15 16:33:07', producer: 'Adobe Acrobat 23.1', modifiedBy: 'ilovepdf.com (web)' },
    timeline: [
      { ts: '2026-10-15 16:33', actor: 'FraudLens AI', action: 'Document received', detail: 'invoice_00441_tampered.pdf ingested via AP portal', type: 'system' },
      { ts: '2026-10-15 16:34', actor: 'Document Intelligence', action: 'Metadata analysis', detail: 'Created: 2026-10-01 · Modified: 2026-10-15 · Delta: 14 days — ANOMALY', type: 'alert' },
      { ts: '2026-10-15 16:34', actor: 'Document Intelligence', action: 'Producer mismatch', detail: 'Original: Adobe Acrobat 23.1 · Modifier: ilovepdf.com (web tool) — SUSPICIOUS', type: 'alert' },
      { ts: '2026-10-15 16:35', actor: 'Document Intelligence', action: 'Font analysis', detail: 'Amount field uses different font metrics than surrounding text — FIELD-LEVEL EDIT CONFIRMED', type: 'alert' },
      { ts: '2026-10-15 16:35', actor: 'FraudLens AI', action: 'Risk score computed', detail: 'Risk: 85/100 · Flags: MODIFIED_AFTER_CREATION, FONT_INCONSISTENCY, PRODUCER_MISMATCH', type: 'system' },
      { ts: '2026-10-15 16:36', actor: 'Senzing ER', action: 'Entity resolution', detail: 'Vendor: Acme Supply LLC (ID: ENT-7291) · No watchlist hits · 2 prior invoices on file', type: 'system' },
      { ts: '2026-10-15 16:37', actor: 'FraudLens AI', action: 'Case auto-created', detail: 'TRS-FD-2026-002 created · FLAGGED · Payment held pending investigation', type: 'case' },
      { ts: '2026-10-16 09:00', actor: 'Det. Marcus Webb', action: 'Case assigned', detail: 'Escalated to Senior Investigator Marcus Webb — CRITICAL priority', type: 'investigator' },
      { ts: '2026-10-17 11:22', actor: 'Det. Marcus Webb', action: 'Vendor contacted', detail: 'Contacted Acme Supply LLC accounts payable dept — awaiting response', type: 'investigator' },
    ],
  },
  'CASE-2026-003': {
    id: 'CASE-2026-003', trsId: 'TRS-FD-2026-003', title: 'Deceased Beneficiary — James R. Williams — Payments Continuing',
    type: 'PENSION', typeBg: 'rgba(168,85,247,0.1)', typeColor: '#c084fc', typeBorder: 'rgba(168,85,247,0.25)',
    severity: 'CRITICAL', severityClass: 'badge-critical', severityDot: '#ef4444', amount: '$38,880',
    assignee: 'Det. Sarah Chen', assigneeInitials: 'SC', status: 'OPEN', statusClass: 'badge-open',
    description: 'SSA Death Master File match: DOD Nov 3, 2025. Pension payments of $3,240/mo continued for 12 months post-death. Total exposure: $38,880.',
    flags: ['DECEASED_BENEFICIARY', 'SSA_DMF_MATCH', 'CONTINUED_PAYMENTS', 'OVERPAYMENT_12MO'],
    riskScore: 99, docId: 'pension_williams_2026', docName: 'pension_payment_williams.pdf',
    entity: { name: 'James R. Williams', taxId: '***-**-7742', bank: 'Chase ****2819', watchlist: 'SSA DMF MATCH', address: '4521 Oak Creek Dr, Houston TX 77084' },
    forensics: { created: '2025-11-03 00:00:00', modified: '2026-10-30 08:00:01', producer: 'TRS Benefits System v4.2', modifiedBy: 'Automated payment batch' },
    timeline: [
      { ts: '2025-11-03 00:00', actor: 'SSA DMF', action: 'Death recorded', detail: 'James R. Williams — SSN ***-**-7742 — DOD: Nov 3, 2025', type: 'alert' },
      { ts: '2025-11-30 00:00', actor: 'TRS Benefits System', action: 'Payment issued', detail: 'Pension payment $3,240 — Month 1 post-death — Account ****2819', type: 'system' },
      { ts: '2026-10-30 08:14', actor: 'FraudLens AI', action: 'SSA DMF cross-check', detail: 'Beneficiary matched to SSA Death Master File — DOD: Nov 3, 2025', type: 'alert' },
      { ts: '2026-10-30 08:14', actor: 'FraudLens AI', action: 'Overpayment computed', detail: '12 payments × $3,240 = $38,880 total overpayment since date of death', type: 'alert' },
      { ts: '2026-10-30 08:15', actor: 'FraudLens AI', action: 'Case auto-created', detail: 'TRS-FD-2026-003 created · CRITICAL · Payment stream halted', type: 'case' },
      { ts: '2026-10-30 09:00', actor: 'Det. Sarah Chen', action: 'Case assigned', detail: 'Assigned to Lead Investigator Sarah Chen — CRITICAL priority', type: 'investigator' },
    ],
  },
  'CASE-2026-004': {
    id: 'CASE-2026-004', trsId: 'TRS-FD-2026-004', title: 'Duplicate Vendor Entity — BuildCorp TX / BuildCorp Texas LLC',
    type: 'PROCUREMENT', typeBg: 'rgba(59,130,246,0.1)', typeColor: '#60a5fa', typeBorder: 'rgba(59,130,246,0.25)',
    severity: 'HIGH', severityClass: 'badge-high', severityDot: '#f59e0b', amount: '$215,000',
    assignee: 'Det. James Ortiz', assigneeInitials: 'OR', status: 'OPEN', statusClass: 'badge-open',
    description: 'Same TAX ID 582916734 registered under two vendor names. TX SOS shows BuildCorp TX Inc (formed 2019); BuildCorp Texas LLC registered 48 hours before first invoice. OFAC near-match flagged.',
    flags: ['DUPLICATE_VENDOR', 'TAX_ID_CONFLICT', 'OFAC_NEAR_MATCH', 'SOS_ANOMALY', 'RAPID_REGISTRATION'],
    riskScore: 78, docId: 'vendor_buildcorp_2026', docName: 'vendor_registration_buildcorp.pdf',
    entity: { name: 'BuildCorp Texas LLC', taxId: '58-2916734', bank: 'Bank of America ****7733', watchlist: 'OFAC NEAR-MATCH', address: '890 Industrial Blvd, Dallas TX 75201' },
    forensics: { created: '2026-09-28 10:11:00', modified: '2026-09-28 10:11:00', producer: 'TX SOS Filing System', modifiedBy: '' },
    timeline: [
      { ts: '2026-09-28 10:11', actor: 'AP System', action: 'New vendor registered', detail: 'BuildCorp Texas LLC — TAX ID 58-2916734 — submitted via vendor portal', type: 'system' },
      { ts: '2026-09-28 10:15', actor: 'FraudLens AI', action: 'TAX ID conflict', detail: 'TAX ID 58-2916734 already registered to BuildCorp TX Inc (ENT-3341) — CONFLICT', type: 'alert' },
      { ts: '2026-09-28 10:16', actor: 'TX SOS Plugin', action: 'SOS lookup', detail: 'BuildCorp TX Inc: formed 2019, active · BuildCorp Texas LLC: formed Sep 26, 2026', type: 'alert' },
      { ts: '2026-09-28 10:17', actor: 'OFAC+SAM Plugin', action: 'Watchlist check', detail: 'Near-match (87% similarity) to OFAC SDN: BuildCorp International LLC', type: 'alert' },
      { ts: '2026-09-28 10:18', actor: 'FraudLens AI', action: 'Case auto-created', detail: 'TRS-FD-2026-004 created · HIGH · Vendor onboarding blocked', type: 'case' },
      { ts: '2026-09-29 08:30', actor: 'Det. James Ortiz', action: 'Case assigned', detail: 'Assigned to Investigator James Ortiz for entity resolution review', type: 'investigator' },
    ],
  },
  'CASE-2026-005': {
    id: 'CASE-2026-005', trsId: 'TRS-FD-2026-005', title: 'Account Takeover — Maria Gonzalez — Address + Disbursement',
    type: 'PENSION', typeBg: 'rgba(168,85,247,0.1)', typeColor: '#c084fc', typeBorder: 'rgba(168,85,247,0.25)',
    severity: 'HIGH', severityClass: 'badge-high', severityDot: '#f59e0b', amount: '$24,100',
    assignee: 'Det. Marcus Webb', assigneeInitials: 'WE', status: 'REVIEW', statusClass: 'badge-review',
    description: 'Beneficiary address changed on Nov 6, 2026, followed by an immediate lump-sum disbursement request of $24,100. Pattern consistent with account takeover fraud.',
    flags: ['ACCOUNT_TAKEOVER_PATTERN', 'ADDRESS_CHANGE', 'IMMEDIATE_DISBURSEMENT', 'HIGH_VELOCITY'],
    riskScore: 71, docId: 'pension_gonzalez_2026', docName: 'disbursement_gonzalez.pdf',
    entity: { name: 'Maria Gonzalez', taxId: '***-**-4419', bank: 'Citibank ****0092', watchlist: 'CLEAR', address: '7823 Maple Ave, San Antonio TX 78220 (NEW)' },
    forensics: { created: '2026-11-06 14:22:00', modified: '2026-11-06 14:22:00', producer: 'TRS Benefits Portal v3.1', modifiedBy: 'User session 8822-XQ' },
    timeline: [
      { ts: '2026-11-06 14:22', actor: 'TRS Benefits Portal', action: 'Address change submitted', detail: 'Beneficiary address updated: Houston TX → San Antonio TX 78220', type: 'system' },
      { ts: '2026-11-06 14:23', actor: 'FraudLens AI', action: 'Pattern detected', detail: 'ADDRESS_CHANGE followed by disbursement request within 1 hour — HIGH VELOCITY', type: 'alert' },
      { ts: '2026-11-06 14:24', actor: 'FraudLens AI', action: 'Disbursement request received', detail: 'Lump-sum $24,100 — same session as address change — ANOMALY', type: 'alert' },
      { ts: '2026-11-06 14:25', actor: 'FraudLens AI', action: 'Case auto-created', detail: 'TRS-FD-2026-005 created · HIGH · Disbursement held pending identity verification', type: 'case' },
      { ts: '2026-11-06 14:30', actor: 'Det. Marcus Webb', action: 'Case assigned', detail: 'Assigned to Investigator Marcus Webb — beneficiary identity verification required', type: 'investigator' },
      { ts: '2026-11-07 10:00', actor: 'Det. Marcus Webb', action: 'Identity check initiated', detail: 'Identity verification letter mailed to address on file prior to change', type: 'investigator' },
    ],
  },
  'CASE-2026-006': {
    id: 'CASE-2026-006', trsId: 'TRS-FD-2026-006', title: 'Shell Company Detection — Phantom Payroll LLC',
    type: 'PAPER', typeBg: 'rgba(100,116,139,0.1)', typeColor: '#94a3b8', typeBorder: 'rgba(100,116,139,0.25)',
    severity: 'MEDIUM', severityClass: 'badge-medium', severityDot: '#a855f7', amount: '$67,500',
    assignee: 'Det. James Ortiz', assigneeInitials: 'OR', status: 'OPEN', statusClass: 'badge-open',
    description: 'No TX SOS registration found. No verifiable physical address. TAX ID registered 48 hours before first invoice submission. Classic paper company / ghost vendor pattern.',
    flags: ['NO_SOS_REGISTRATION', 'PHANTOM_COMPANY', 'RAPID_TAX_ID_CREATION', 'NO_PHYSICAL_ADDRESS'],
    riskScore: 62, docId: 'vendor_phantom_2026', docName: 'invoice_phantom_payroll.pdf',
    entity: { name: 'Phantom Payroll LLC', taxId: '94-7231098', bank: 'Unknown', watchlist: 'CLEAR', address: 'P.O. Box 44199, Austin TX 78744 (unverified)' },
    forensics: { created: '2026-11-01 09:44:00', modified: '2026-11-01 09:44:00', producer: 'Microsoft Word 365', modifiedBy: '' },
    timeline: [
      { ts: '2026-11-01 09:44', actor: 'AP System', action: 'Invoice received', detail: 'Invoice from Phantom Payroll LLC — $67,500 — service: "Administrative Services"', type: 'system' },
      { ts: '2026-11-01 09:48', actor: 'TX SOS Plugin', action: 'SOS lookup', detail: 'No registration found for "Phantom Payroll LLC" in Texas SOS database — UNREGISTERED', type: 'alert' },
      { ts: '2026-11-01 09:49', actor: 'FraudLens AI', action: 'TAX ID check', detail: 'TAX ID 94-7231098 registered 2026-10-30 — 48 hours before invoice — ANOMALY', type: 'alert' },
      { ts: '2026-11-01 09:50', actor: 'FraudLens AI', action: 'Address verification', detail: 'P.O. Box only — no physical business address — PHANTOM pattern confirmed', type: 'alert' },
      { ts: '2026-11-01 09:51', actor: 'FraudLens AI', action: 'Case auto-created', detail: 'TRS-FD-2026-006 created · MEDIUM · Invoice payment blocked', type: 'case' },
      { ts: '2026-11-02 08:00', actor: 'Det. James Ortiz', action: 'Case assigned', detail: 'Assigned to Investigator James Ortiz for vendor verification', type: 'investigator' },
    ],
  },
}

function RiskRing({ score }: { score: number }) {
  const r = 36
  const circ = 2 * Math.PI * r
  const color = score >= 60 ? '#ef4444' : score >= 30 ? '#f59e0b' : '#22c55e'
  const pct = score / 100
  return (
    <svg width="96" height="96" viewBox="0 0 96 96" role="img" aria-label={`Risk score ${score} out of 100`}>
      <circle cx="48" cy="48" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
      <circle cx="48" cy="48" r={r} fill="none" stroke={color} strokeWidth="8"
        strokeDasharray={`${circ * pct} ${circ * (1 - pct)}`} strokeLinecap="round"
        transform="rotate(-90 48 48)" style={{ filter: `drop-shadow(0 0 6px ${color}80)` }} />
      <text x="48" y="45" textAnchor="middle" fill={color} fontSize="18" fontWeight="700" fontFamily="monospace">{score}</text>
      <text x="48" y="60" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="sans-serif">RISK</text>
    </svg>
  )
}

export default function CaseDetailPage({ params }: { params: { id: string } }) {
  const c = caseData[params.id]
  if (!c) {
    return (
      <main id="main-content" style={{ padding: '24px 32px', maxWidth: '1400px', margin: '0 auto' }}>
        <a href="/cases" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '13px' }}>← Back to Case Dashboard</a>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', padding: '32px', marginTop: '20px', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)' }}>Case not found</p>
        </div>
      </main>
    )
  }
  const tcol: Record<string,string> = { system: '#60a5fa', alert: '#f87171', case: '#c084fc', investigator: '#fbbf24' }
  const tbg: Record<string,string> = { system: 'rgba(59,130,246,0.1)', alert: 'rgba(239,68,68,0.1)', case: 'rgba(168,85,247,0.1)', investigator: 'rgba(245,158,11,0.1)' }
  const tico: Record<string,string> = { system: '⚙️', alert: '🚨', case: '📋', investigator: '🔍' }

  return (
    <main id="main-content" style={{ padding: '24px 32px', maxWidth: '1400px', margin: '0 auto' }}>
      <a href="/cases" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '20px' }}>
        ← Back to Case Dashboard
      </a>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
            <span style={{ fontFamily: 'monospace', fontSize: '13px', color: '#60a5fa', fontWeight: 700 }}>{c.trsId}</span>
            <span className={c.severityClass} style={{ display: 'inline-flex', alignItems: 'center', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.5px' }}>{c.severity}</span>
            <span style={{ background: c.typeBg, color: c.typeColor, border: `1px solid ${c.typeBorder}`, display: 'inline-flex', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 600 }}>{c.type}</span>
            <span className={c.statusClass} style={{ display: 'inline-flex', alignItems: 'center', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.5px' }}>{c.status}</span>
          </div>
          <h1 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', margin: 0, letterSpacing: '-0.3px' }}>{c.title}</h1>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: '6px 0 0' }}>{c.description}</p>
        </div>
        <button disabled style={{ padding: '8px 18px', borderRadius: '6px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: 'rgba(248,113,113,0.5)', fontSize: '13px', fontWeight: 600, cursor: 'not-allowed', flexShrink: 0, marginLeft: '24px' }} title="Requires supervisor authorization">
          🛑 Authorize Adverse Action
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr 1fr', gap: '16px', marginBottom: '20px' }}>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <RiskRing score={c.riskScore} />
          <div style={{ marginTop: '12px', fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center' }}>Risk Score</div>
          <div style={{ marginTop: '4px', fontSize: '11px', fontWeight: 700, color: c.riskScore >= 60 ? '#f87171' : c.riskScore >= 30 ? '#fbbf24' : '#4ade80', textAlign: 'center' }}>
            {c.riskScore >= 60 ? 'HIGH RISK' : c.riskScore >= 30 ? 'MODERATE' : 'LOW RISK'}
          </div>
        </div>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', padding: '20px' }}>
          <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '14px' }}>Senzing Entity Resolution</div>
          <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>{c.entity.name}</div>
          {([['TAX ID', c.entity.taxId], ['Bank Account', c.entity.bank], ['Address', c.entity.address], ['Watchlist', c.entity.watchlist]] as [string, string][]).map(([label, value]) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)', flexShrink: 0, marginRight: '8px' }}>{label}</span>
              <span style={{ fontSize: '12px', fontWeight: 600, fontFamily: label === 'TAX ID' ? 'monospace' : 'inherit', color: label === 'Watchlist' && value !== 'CLEAR' ? '#f87171' : label === 'Watchlist' ? '#4ade80' : 'var(--text-primary)', textAlign: 'right' }}>{value}</span>
            </div>
          ))}
        </div>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Document Forensics</div>
            <a href={`/forensics/${c.docId}`} style={{ fontSize: '11px', color: '#60a5fa', textDecoration: 'none' }}>View full report →</a>
          </div>
          <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>{c.docName}</div>
          {([['Created', c.forensics.created], ['Modified', c.forensics.modified], ['Producer', c.forensics.producer], ['Modified By', c.forensics.modifiedBy || '—']] as [string, string][]).map(([label, value]) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{label}</span>
              <span style={{ fontSize: '12px', fontFamily: 'monospace', fontWeight: 600, color: label === 'Modified By' && value.includes('ilovepdf') ? '#f87171' : 'var(--text-primary)' }}>{value}</span>
            </div>
          ))}
          <div style={{ display: 'flex', gap: '6px', marginTop: '12px', flexWrap: 'wrap' }}>
            {c.flags.slice(0, 4).map((f) => (
              <span key={f} style={{ fontSize: '10px', padding: '2px 6px', borderRadius: '3px', background: 'rgba(239,68,68,0.1)', color: '#f87171', border: '1px solid rgba(239,68,68,0.2)', fontFamily: 'monospace' }}>{f}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', marginBottom: '16px', overflow: 'hidden' }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>🔗</span><span style={{ fontWeight: 600, fontSize: '14px', color: 'var(--text-primary)' }}>Evidence Chain</span>
        </div>
        <div style={{ padding: '20px', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          {[
            { label: 'Document', icon: '📄', color: '#60a5fa' },
            { label: 'Forensics', icon: '🔬', color: c.riskScore >= 60 ? '#ef4444' : '#f59e0b' },
            { label: 'Entity Resolution', icon: '🏢', color: '#c084fc' },
            { label: 'Watchlist Check', icon: '🛡️', color: c.entity.watchlist !== 'CLEAR' ? '#ef4444' : '#22c55e' },
            { label: 'Investigation', icon: '🔍', color: '#fbbf24' },
          ].map((step, i, arr) => (
            <div key={step.label} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: `${step.color}20`, border: `2px solid ${step.color}60`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>{step.icon}</div>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{step.label}</span>
              </div>
              {i < arr.length - 1 && <div style={{ width: '48px', height: '2px', background: `linear-gradient(90deg, ${step.color}60, ${arr[i+1].color}60)`, margin: '0 4px', marginBottom: '20px' }} />}
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden' }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>📋</span>
            <span style={{ fontWeight: 600, fontSize: '14px', color: 'var(--text-primary)' }}>Audit Trail</span>
            <span style={{ background: 'rgba(59,130,246,0.1)', color: '#60a5fa', border: '1px solid rgba(59,130,246,0.2)', borderRadius: '10px', padding: '1px 8px', fontSize: '11px', fontWeight: 700 }}>{c.timeline.length} events</span>
          </div>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Append-only · Tamper-evident</span>
        </div>
        <div>
          {c.timeline.map((event, i) => (
            <div key={i} style={{ display: 'flex', gap: '16px', padding: '14px 20px', borderBottom: i < c.timeline.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none', position: 'relative' }}>
              {i < c.timeline.length - 1 && <div style={{ position: 'absolute', left: '34px', top: '44px', bottom: '-14px', width: '1px', background: 'rgba(255,255,255,0.06)', zIndex: 0 }} />}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '50%', background: tbg[event.type] || 'var(--bg-secondary)', border: `1px solid ${tcol[event.type] || 'var(--border)'}40`, fontSize: '14px', flexShrink: 0, zIndex: 1 }}>
                {tico[event.type] || '•'}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-muted)' }}>{event.ts}</span>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: tcol[event.type] || 'var(--text-primary)' }}>{event.actor}</span>
                </div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '2px' }}>{event.action}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{event.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
