'use client'

import { useState } from 'react'

const documents = [
  {
    id: 'invoice_00398_resubmit',
    name: 'invoice_00398_resubmit.pdf',
    vendor: 'Acme Supply LLC',
    amount: '$142,500',
    status: 'REJECTED',
    statusClass: 'badge-critical',
    riskScore: 97,
    flags: ['EXACT_DUPLICATE'],
    uploadedAt: '2026-10-18 14:07',
    size: '218 KB',
    pages: 2,
    caseId: 'CASE-2026-001',
    trsId: 'TRS-FD-2026-001',
    reason: 'Exact duplicate of invoice_00398.pdf — SHA-256 hash collision confirmed',
  },
  {
    id: 'invoice_00441_tampered',
    name: 'invoice_00441_tampered.pdf',
    vendor: 'Acme Supply LLC',
    amount: '$189,750',
    status: 'FLAGGED',
    statusClass: 'badge-high',
    riskScore: 85,
    flags: ['MODIFIED_AFTER_CREATION', 'FONT_INCONSISTENCY', 'PRODUCER_MISMATCH'],
    uploadedAt: '2026-10-15 16:33',
    size: '341 KB',
    pages: 3,
    caseId: 'CASE-2026-002',
    trsId: 'TRS-FD-2026-002',
    reason: 'PDF modified 14 days post-creation via ilovepdf.com — amount field edited',
  },
  {
    id: 'invoice_00502_clean',
    name: 'invoice_00502_clean.pdf',
    vendor: 'Acme Supply LLC',
    amount: '$67,200',
    status: 'PASSED',
    statusClass: 'badge-open',
    riskScore: 4,
    flags: [],
    uploadedAt: '2026-10-22 10:14',
    size: '187 KB',
    pages: 2,
    caseId: null,
    trsId: null,
    reason: 'No anomalies detected — approved for payment processing',
  },
  {
    id: 'vendor_buildcorp_2026',
    name: 'vendor_registration_buildcorp.pdf',
    vendor: 'BuildCorp Texas LLC',
    amount: '$215,000',
    status: 'FLAGGED',
    statusClass: 'badge-high',
    riskScore: 78,
    flags: ['DUPLICATE_VENDOR', 'OFAC_NEAR_MATCH'],
    uploadedAt: '2026-09-28 10:11',
    size: '122 KB',
    pages: 4,
    caseId: 'CASE-2026-004',
    trsId: 'TRS-FD-2026-004',
    reason: 'TAX ID conflict with existing vendor + OFAC near-match',
  },
  {
    id: 'invoice_phantom_payroll',
    name: 'invoice_phantom_payroll.pdf',
    vendor: 'Phantom Payroll LLC',
    amount: '$67,500',
    status: 'FLAGGED',
    statusClass: 'badge-medium',
    riskScore: 62,
    flags: ['NO_SOS_REGISTRATION', 'PHANTOM_COMPANY'],
    uploadedAt: '2026-11-01 09:44',
    size: '89 KB',
    pages: 1,
    caseId: 'CASE-2026-006',
    trsId: 'TRS-FD-2026-006',
    reason: 'No TX SOS registration — TAX ID registered 48h before first invoice',
  },
]

const statusConfig: Record<string, { bg: string; color: string; border: string; icon: string }> = {
  REJECTED: { bg: 'rgba(239,68,68,0.1)', color: '#f87171', border: 'rgba(239,68,68,0.3)', icon: '🚫' },
  FLAGGED: { bg: 'rgba(245,158,11,0.1)', color: '#fbbf24', border: 'rgba(245,158,11,0.3)', icon: '⚠️' },
  PASSED: { bg: 'rgba(34,197,94,0.1)', color: '#4ade80', border: 'rgba(34,197,94,0.3)', icon: '✅' },
  ANALYZING: { bg: 'rgba(59,130,246,0.1)', color: '#60a5fa', border: 'rgba(59,130,246,0.3)', icon: '🔄' },
}

export default function InboxPage() {
  const [dragOver, setDragOver] = useState(false)

  return (
    <main id="main-content" style={{ padding: '24px 32px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-primary)', margin: 0, letterSpacing: '-0.3px' }}>Document Inbox</h1>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: '4px 0 0' }}>AI-powered document intake and triage · Texas Retirement System</p>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            <span style={{ color: '#f87171', fontWeight: 700 }}>1 REJECTED</span> · <span style={{ color: '#fbbf24', fontWeight: 700 }}>3 FLAGGED</span> · <span style={{ color: '#4ade80', fontWeight: 700 }}>1 PASSED</span>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
        {[
          { emoji: '📥', value: '5', label: 'Documents Processed', color: '#60a5fa' },
          { emoji: '🚫', value: '1', label: 'Auto-Rejected', color: '#f87171' },
          { emoji: '⚠️', value: '3', label: 'Flagged for Review', color: '#fbbf24' },
          { emoji: '✅', value: '1', label: 'Cleared / Passed', color: '#4ade80' },
        ].map((stat) => (
          <div key={stat.label} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }} aria-hidden="true">{stat.emoji}</div>
            <div>
              <div style={{ fontSize: '22px', fontWeight: 700, color: stat.color, lineHeight: 1 }}>{stat.value}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '3px' }}>{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Upload zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => { e.preventDefault(); setDragOver(false) }}
        style={{
          border: `2px dashed ${dragOver ? '#60a5fa' : 'rgba(255,255,255,0.12)'}`,
          borderRadius: '10px',
          padding: '32px',
          textAlign: 'center',
          marginBottom: '24px',
          background: dragOver ? 'rgba(59,130,246,0.04)' : 'transparent',
          transition: 'all 0.2s',
          cursor: 'pointer',
        }}
      >
        <div style={{ fontSize: '28px', marginBottom: '8px' }}>📂</div>
        <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>Drop documents here to analyze</div>
        <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>PDF invoices, ID documents, vendor registrations — up to 50 MB · AI analysis begins immediately</div>
      </div>

      {/* Document queue */}
      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden' }}>
        <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>📋</span>
          <span style={{ fontWeight: 600, fontSize: '14px', color: 'var(--text-primary)' }}>Document Queue</span>
          <span style={{ background: 'rgba(59,130,246,0.1)', color: '#60a5fa', border: '1px solid rgba(59,130,246,0.2)', borderRadius: '10px', padding: '1px 8px', fontSize: '11px', fontWeight: 700 }}>5 documents</span>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }} aria-label="Document queue">
          <thead>
            <tr style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}>
              {['Document', 'Vendor / Amount', 'Status', 'Risk Score', 'Flags', 'Received', ''].map((h) => (
                <th key={h} scope="col" style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', padding: '10px 20px', textAlign: 'left' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {documents.map((doc, i) => {
              const sc = statusConfig[doc.status] || statusConfig.ANALYZING
              return (
                <tr key={doc.id} className="table-row-hover" style={{ borderBottom: i < documents.length - 1 ? '1px solid var(--border)' : 'none', cursor: 'pointer' }}>
                  <td style={{ padding: '14px 20px', verticalAlign: 'middle' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: 'var(--bg-secondary)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>📄</div>
                      <div>
                        <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-primary)', fontFamily: 'monospace' }}>{doc.name}</div>
                        <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>{doc.pages} pages · {doc.size}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '14px 20px', verticalAlign: 'middle' }}>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>{doc.vendor}</div>
                    <div style={{ fontSize: '12px', color: '#60a5fa', fontWeight: 700, marginTop: '2px' }}>{doc.amount}</div>
                  </td>
                  <td style={{ padding: '14px 20px', verticalAlign: 'middle' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: sc.bg, color: sc.color, border: `1px solid ${sc.border}`, padding: '3px 10px', borderRadius: '5px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.5px' }}>
                      <span>{sc.icon}</span>{doc.status}
                    </span>
                  </td>
                  <td style={{ padding: '14px 20px', verticalAlign: 'middle' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '48px', height: '5px', borderRadius: '3px', background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${doc.riskScore}%`, background: doc.riskScore >= 60 ? '#ef4444' : doc.riskScore >= 30 ? '#f59e0b' : '#22c55e', borderRadius: '3px' }} />
                      </div>
                      <span style={{ fontSize: '12px', fontWeight: 700, fontFamily: 'monospace', color: doc.riskScore >= 60 ? '#f87171' : doc.riskScore >= 30 ? '#fbbf24' : '#4ade80' }}>{doc.riskScore}</span>
                    </div>
                  </td>
                  <td style={{ padding: '14px 20px', verticalAlign: 'middle' }}>
                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                      {doc.flags.length === 0 ? (
                        <span style={{ fontSize: '11px', color: '#4ade80' }}>None</span>
                      ) : (
                        doc.flags.slice(0, 2).map((f) => (
                          <span key={f} style={{ fontSize: '10px', padding: '1px 5px', borderRadius: '3px', background: 'rgba(239,68,68,0.1)', color: '#f87171', border: '1px solid rgba(239,68,68,0.2)', fontFamily: 'monospace' }}>{f}</span>
                        ))
                      )}
                      {doc.flags.length > 2 && <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>+{doc.flags.length - 2}</span>}
                    </div>
                  </td>
                  <td style={{ padding: '14px 20px', verticalAlign: 'middle' }}>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'monospace' }}>{doc.uploadedAt}</span>
                  </td>
                  <td style={{ padding: '14px 20px', verticalAlign: 'middle' }}>
                    {doc.caseId ? (
                      <a href={`/cases/${doc.caseId}`} style={{ fontSize: '11px', color: '#60a5fa', textDecoration: 'none', fontWeight: 600 }}>View case →</a>
                    ) : (
                      <a href={`/forensics/${doc.id}`} style={{ fontSize: '11px', color: 'var(--text-muted)', textDecoration: 'none' }}>Forensics →</a>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div style={{ padding: '12px 20px', borderTop: '1px solid var(--border)', fontSize: '11px', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between' }}>
          <span>5 documents · Analyzed by FraudLens Document Intelligence</span>
          <span>3 scenarios from demo_output.json: invoice_00398_resubmit (REJECTED), invoice_00441_tampered (FLAGGED), invoice_00502_clean (PASSED)</span>
        </div>
      </div>
    </main>
  )
}
