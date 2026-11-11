'use client'

import { useState, useEffect } from 'react'

const cases = [
  {
    id: 'CASE-2026-001',
    trsId: 'TRS-FD-2026-001',
    amount: '$142,500',
    title: 'Duplicate Invoice — Acme Supply LLC',
    description: 'Invoice INV-2026-00398 resubmitted as exact duplicate. SHA-256 hash collision confirmed. Vendor blocked pending review.',
    flags: ['EXACT_DUPLICATE'],
    type: 'PROCUREMENT',
    typeBg: 'rgba(59,130,246,0.1)',
    typeColor: '#60a5fa',
    typeBorder: 'rgba(59,130,246,0.25)',
    severity: 'HIGH',
    severityClass: 'badge-high',
    severityDot: '#f59e0b',
    assigneeInitials: 'SC',
    assignee: 'Det. Sarah Chen',
    status: 'OPEN',
    statusClass: 'badge-open',
  },
  {
    id: 'CASE-2026-002',
    trsId: 'TRS-FD-2026-002',
    amount: '$189,750',
    title: 'Tampered Invoice — Amount Inflated $142,500 → $189,750',
    description: 'PDF forensics show modification 14 days post-creation via ilovepdf.com. Font inconsistencies confirm field-level editing. Amount inflated by $47,250.',
    flags: ['MODIFIED_AFTER_CREATION', 'FONT_INCONSISTENCY', 'PRODUCER_MISMATCH'],
    extraFlags: 3,
    type: 'PROCUREMENT',
    typeBg: 'rgba(59,130,246,0.1)',
    typeColor: '#60a5fa',
    typeBorder: 'rgba(59,130,246,0.25)',
    severity: 'CRITICAL',
    severityClass: 'badge-critical',
    severityDot: '#ef4444',
    assigneeInitials: 'WE',
    assignee: 'Det. Marcus Webb',
    status: 'REVIEW',
    statusClass: 'badge-review',
  },
  {
    id: 'CASE-2026-003',
    trsId: 'TRS-FD-2026-003',
    amount: '$38,880',
    title: 'Deceased Beneficiary — James R. Williams — Payments Continuing',
    description: 'SSA Death Master File match confirmed: DOD Nov 3, 2025. Pension payments of $3,240/mo continued for 12 months post-death. Total exposure: $38,880.',
    flags: ['DECEASED_BENEFICIARY', 'SSA_DMF_MATCH', 'CONTINUED_PAYMENTS'],
    type: 'PENSION',
    typeBg: 'rgba(168,85,247,0.1)',
    typeColor: '#c084fc',
    typeBorder: 'rgba(168,85,247,0.25)',
    severity: 'CRITICAL',
    severityClass: 'badge-critical',
    severityDot: '#ef4444',
    assigneeInitials: 'CH',
    assignee: 'Det. Sarah Chen',
    status: 'OPEN',
    statusClass: 'badge-open',
  },
  {
    id: 'CASE-2026-004',
    trsId: 'TRS-FD-2026-004',
    amount: '$215,000',
    title: 'Duplicate Vendor Entity — BuildCorp TX / BuildCorp Texas LLC',
    description: 'Same TAX ID 582916734 registered under two vendor names. OFAC near-match flagged. Potential shell company for duplicate billing.',
    flags: ['DUPLICATE_VENDOR', 'TAX_ID_CONFLICT', 'OFAC_NEAR_MATCH'],
    type: 'PROCUREMENT',
    typeBg: 'rgba(59,130,246,0.1)',
    typeColor: '#60a5fa',
    typeBorder: 'rgba(59,130,246,0.25)',
    severity: 'HIGH',
    severityClass: 'badge-high',
    severityDot: '#f59e0b',
    assigneeInitials: 'OR',
    assignee: 'Det. James Ortiz',
    status: 'OPEN',
    statusClass: 'badge-open',
  },
  {
    id: 'CASE-2026-005',
    trsId: 'TRS-FD-2026-005',
    amount: '$24,100',
    title: 'Account Takeover — Maria Gonzalez — Address + Disbursement',
    description: 'Beneficiary address changed Nov 6 2026, followed by immediate lump-sum disbursement request of $24,100. Pattern consistent with account takeover fraud.',
    flags: ['ACCOUNT_TAKEOVER_PATTERN', 'ADDRESS_CHANGE', 'IMMEDIATE_DISBURSEMENT'],
    type: 'PENSION',
    typeBg: 'rgba(168,85,247,0.1)',
    typeColor: '#c084fc',
    typeBorder: 'rgba(168,85,247,0.25)',
    severity: 'HIGH',
    severityClass: 'badge-high',
    severityDot: '#f59e0b',
    assigneeInitials: 'WE',
    assignee: 'Det. Marcus Webb',
    status: 'REVIEW',
    statusClass: 'badge-review',
  },
  {
    id: 'CASE-2026-006',
    trsId: 'TRS-FD-2026-006',
    amount: '$67,500',
    title: 'Shell Company Detection — Phantom Payroll LLC',
    description: 'No TX SOS registration found. No physical address. TAX ID registered 48 hours before first invoice submission. Classic paper company pattern.',
    flags: ['NO_SOS_REGISTRATION', 'PHANTOM_COMPANY', 'RAPID_TAX_ID_CREATION'],
    type: 'PAPER',
    typeBg: 'rgba(100,116,139,0.1)',
    typeColor: '#94a3b8',
    typeBorder: 'rgba(100,116,139,0.25)',
    severity: 'MEDIUM',
    severityClass: 'badge-medium',
    severityDot: '#a855f7',
    assigneeInitials: 'OR',
    assignee: 'Det. James Ortiz',
    status: 'OPEN',
    statusClass: 'badge-open',
  },
]

export default function CasesPage() {
  const [refreshed, setRefreshed] = useState('')

  useEffect(() => {
    setRefreshed(new Date().toLocaleTimeString())
  }, [])

  return (
    <main
      id="main-content"
      style={{ padding: '24px 32px', maxWidth: '1400px', margin: '0 auto' }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginBottom: '24px',
        }}
      >
        <div>
          <h1
            style={{
              fontSize: '22px',
              fontWeight: 700,
              color: 'var(--text-primary)',
              margin: 0,
              letterSpacing: '-0.3px',
            }}
          >
            Case Dashboard
          </h1>
          <p
            style={{
              fontSize: '13px',
              color: 'var(--text-muted)',
              margin: '4px 0 0',
            }}
          >
            Active fraud investigations · Texas Retirement System
          </p>
        </div>
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 16px',
            borderRadius: '6px',
            background: 'rgba(239,68,68,0.1)',
            border: '1px solid rgba(239,68,68,0.3)',
            color: '#f87171',
            fontSize: '13px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          <span aria-hidden="true">🚨</span> New Case
        </button>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          marginBottom: '24px',
        }}
        role="region"
        aria-label="Case statistics"
      >
        {[
          { emoji: '⚖️', value: '4', label: 'Open Cases', color: '#60a5fa' },
          { emoji: '🔴', value: '2', label: 'Critical', color: '#f87171' },
          { emoji: '🔍', value: '2', label: 'Under Review', color: '#fbbf24' },
          { emoji: '💰', value: '$678K', label: 'Total Exposure', color: '#c084fc' },
        ].map((stat) => (
          <div
            key={stat.label}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: 'var(--bg-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                flexShrink: 0,
              }}
              aria-hidden="true"
            >
              {stat.emoji}
            </div>
            <div>
              <div
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: stat.color,
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: 'var(--text-muted)',
                  marginTop: '3px',
                }}
              >
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <table
          aria-label="Fraud investigation cases"
          style={{ width: '100%', borderCollapse: 'collapse' }}
        >
          <thead>
            <tr
              style={{
                background: 'var(--bg-secondary)',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {[
                { label: 'Case ID', width: '140px' },
                { label: 'Title / Description' },
                { label: 'Type', width: '100px' },
                { label: 'Severity', width: '110px' },
                { label: 'Assigned To', width: '140px' },
                { label: 'Status', width: '100px' },
                { label: '', width: '36px', srOnly: 'Actions' },
              ].map((col) => (
                <th
                  key={col.label || 'actions'}
                  scope="col"
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    padding: '10px 20px',
                    textAlign: 'left',
                    width: col.width,
                  }}
                >
                  {col.srOnly ? (
                    <span className="sr-only">{col.srOnly}</span>
                  ) : (
                    col.label
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cases.map((c, i) => (
              <tr
                key={c.id}
                className="table-row-hover"
                style={{
                  borderBottom: i < cases.length - 1 ? '1px solid var(--border)' : 'none',
                  cursor: 'pointer',
                  transition: 'background 0.15s',
                }}
              >
                <td style={{ padding: '14px 20px', verticalAlign: 'middle' }}>
                  <a
                    href={`/cases/${c.id}`}
                    style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                  >
                    <div
                      style={{
                        fontSize: '12px',
                        fontWeight: 700,
                        color: '#60a5fa',
                        fontFamily: 'monospace',
                      }}
                    >
                      {c.trsId}
                    </div>
                    <div
                      style={{
                        fontSize: '11px',
                        color: 'var(--text-muted)',
                        marginTop: '2px',
                      }}
                    >
                      {c.amount}
                    </div>
                  </a>
                </td>
                <td
                  style={{
                    padding: '14px 20px',
                    paddingRight: '16px',
                    verticalAlign: 'middle',
                  }}
                >
                  <a
                    href={`/cases/${c.id}`}
                    style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                  >
                    <div
                      style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        lineHeight: 1.3,
                      }}
                    >
                      {c.title}
                    </div>
                    <div
                      style={{
                        fontSize: '12px',
                        color: 'var(--text-muted)',
                        marginTop: '3px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        maxWidth: '420px',
                      }}
                    >
                      {c.description}
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        gap: '4px',
                        marginTop: '5px',
                        flexWrap: 'wrap',
                      }}
                    >
                      {c.flags.map((f) => (
                        <span
                          key={f}
                          style={{
                            fontSize: '10px',
                            padding: '1px 6px',
                            borderRadius: '3px',
                            background: 'rgba(59,130,246,0.1)',
                            color: '#93c5fd',
                            border: '1px solid rgba(59,130,246,0.2)',
                            fontFamily: 'monospace',
                          }}
                        >
                          {f}
                        </span>
                      ))}
                      {c.extraFlags && (
                        <span
                          style={{
                            fontSize: '10px',
                            color: 'var(--text-muted)',
                          }}
                        >
                          +{c.extraFlags}
                        </span>
                      )}
                    </div>
                  </a>
                </td>
                <td style={{ padding: '14px 20px', verticalAlign: 'middle' }}>
                  <span
                    style={{
                      background: c.typeBg,
                      color: c.typeColor,
                      border: `1px solid ${c.typeBorder}`,
                      display: 'inline-flex',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontWeight: 600,
                    }}
                  >
                    {c.type}
                  </span>
                </td>
                <td style={{ padding: '14px 20px', verticalAlign: 'middle' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: c.severityDot,
                        boxShadow: `0 0 6px ${c.severityDot}80`,
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    />
                    <span
                      className={c.severityClass}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {c.severity}
                    </span>
                  </div>
                </td>
                <td style={{ padding: '14px 20px', verticalAlign: 'middle' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div
                      style={{
                        width: '26px',
                        height: '26px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '9px',
                        fontWeight: 700,
                        color: 'white',
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    >
                      {c.assigneeInitials}
                    </div>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                      {c.assignee}
                    </span>
                  </div>
                </td>
                <td style={{ padding: '14px 20px', verticalAlign: 'middle' }}>
                  <span
                    className={c.statusClass}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {c.status}
                  </span>
                </td>
                <td style={{ padding: '14px 20px', verticalAlign: 'middle' }}>
                  <a
                    href={`/cases/${c.id}`}
                    aria-label={`View case ${c.trsId}`}
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: '14px',
                      textDecoration: 'none',
                    }}
                  >
                    →
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        style={{
          marginTop: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
          Showing 6 cases · Last refreshed: {refreshed}
        </span>
        <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
          Powered by FraudLens Document Intelligence + Senzing Entity Resolution
        </span>
      </div>
    </main>
  )
}
