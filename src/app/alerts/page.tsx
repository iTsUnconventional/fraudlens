'use client'

import { useState, useEffect } from 'react'

const alerts = [
  {
    id: 'ALT-2026-001',
    title: 'Duplicate invoice detected',
    detail: 'Acme Supply LLC — $142,500 — SHA-256 hash collision with invoice_00398.pdf',
    severity: 'CRITICAL',
    source: 'Document Intelligence',
    sourceIcon: '🔬',
    caseId: 'CASE-2026-001',
    trsId: 'TRS-FD-2026-001',
    ts: '2026-10-18 14:08',
    isNew: false,
    type: 'DOCUMENT',
  },
  {
    id: 'ALT-2026-002',
    title: 'PDF tampered after creation',
    detail: 'invoice_00441_tampered.pdf — modified via ilovepdf.com 14 days post-creation — amount field edited $142,500 → $189,750',
    severity: 'CRITICAL',
    source: 'Document Intelligence',
    sourceIcon: '🔬',
    caseId: 'CASE-2026-002',
    trsId: 'TRS-FD-2026-002',
    ts: '2026-10-15 16:34',
    isNew: false,
    type: 'DOCUMENT',
  },
  {
    id: 'ALT-2026-003',
    title: 'Deceased beneficiary payment detected',
    detail: 'James R. Williams — SSA DMF match confirmed — DOD Nov 3, 2025 — 12 months of pension payments continuing — $38,880 total exposure',
    severity: 'CRITICAL',
    source: 'SSA DMF Plugin',
    sourceIcon: '🏛️',
    caseId: 'CASE-2026-003',
    trsId: 'TRS-FD-2026-003',
    ts: '2026-10-30 08:14',
    isNew: true,
    type: 'PENSION',
  },
  {
    id: 'ALT-2026-004',
    title: 'Watchlist hit — OFAC near-match',
    detail: 'BuildCorp Texas LLC — 87% similarity to OFAC SDN: BuildCorp International LLC — vendor onboarding blocked',
    severity: 'HIGH',
    source: 'OFAC+SAM Plugin',
    sourceIcon: '🛡️',
    caseId: 'CASE-2026-004',
    trsId: 'TRS-FD-2026-004',
    ts: '2026-09-28 10:17',
    isNew: false,
    type: 'WATCHLIST',
  },
  {
    id: 'ALT-2026-005',
    title: 'Duplicate vendor TAX ID conflict',
    detail: 'BuildCorp Texas LLC — same TAX ID 58-2916734 as BuildCorp TX Inc — possible shell company for duplicate billing',
    severity: 'HIGH',
    source: 'Senzing Entity Resolution',
    sourceIcon: '🏢',
    caseId: 'CASE-2026-004',
    trsId: 'TRS-FD-2026-004',
    ts: '2026-09-28 10:15',
    isNew: false,
    type: 'ENTITY',
  },
  {
    id: 'ALT-2026-006',
    title: 'Account takeover pattern — address change + disbursement',
    detail: 'Maria Gonzalez — beneficiary address changed Nov 6, 2026 followed immediately by $24,100 lump-sum disbursement request',
    severity: 'HIGH',
    source: 'FraudLens AI',
    sourceIcon: '🤖',
    caseId: 'CASE-2026-005',
    trsId: 'TRS-FD-2026-005',
    ts: '2026-11-06 14:23',
    isNew: true,
    type: 'ACCOUNT',
  },
  {
    id: 'ALT-2026-007',
    title: 'Phantom company — no SOS registration',
    detail: 'Phantom Payroll LLC — not registered in Texas SOS — TAX ID created 48h before first invoice submission — $67,500 blocked',
    severity: 'MEDIUM',
    source: 'TX SOS Plugin',
    sourceIcon: '🏛️',
    caseId: 'CASE-2026-006',
    trsId: 'TRS-FD-2026-006',
    ts: '2026-11-01 09:48',
    isNew: false,
    type: 'DOCUMENT',
  },
]

const sevConfig: Record<string, { bg: string; color: string; border: string }> = {
  CRITICAL: { bg: 'rgba(239,68,68,0.1)', color: '#f87171', border: 'rgba(239,68,68,0.3)' },
  HIGH: { bg: 'rgba(245,158,11,0.1)', color: '#fbbf24', border: 'rgba(245,158,11,0.3)' },
  MEDIUM: { bg: 'rgba(168,85,247,0.1)', color: '#c084fc', border: 'rgba(168,85,247,0.3)' },
  LOW: { bg: 'rgba(100,116,139,0.1)', color: '#94a3b8', border: 'rgba(100,116,139,0.2)' },
}

const typeConfig: Record<string, { bg: string; color: string }> = {
  DOCUMENT: { bg: 'rgba(59,130,246,0.1)', color: '#60a5fa' },
  PENSION: { bg: 'rgba(168,85,247,0.1)', color: '#c084fc' },
  WATCHLIST: { bg: 'rgba(239,68,68,0.1)', color: '#f87171' },
  ENTITY: { bg: 'rgba(100,116,139,0.1)', color: '#94a3b8' },
  ACCOUNT: { bg: 'rgba(245,158,11,0.1)', color: '#fbbf24' },
}

export default function AlertsPage() {
  const [now, setNow] = useState('')
  useEffect(() => { setNow(new Date().toLocaleTimeString()) }, [])

  const newCount = alerts.filter(a => a.isNew).length
  const critical = alerts.filter(a => a.severity === 'CRITICAL').length

  return (
    <main id="main-content" style={{ padding: '24px 32px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-primary)', margin: 0, letterSpacing: '-0.3px' }}>Alert Center</h1>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: '4px 0 0' }}>Real-time fraud signals · Texas Retirement System · Last updated: {now}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div className="pulse-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444', boxShadow: '0 0 8px rgba(239,68,68,0.6)' }} />
          <span style={{ fontSize: '12px', color: '#f87171', fontWeight: 600 }}>Live feed</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
        {[
          { emoji: '🚨', value: String(alerts.length), label: 'Total Alerts', color: '#60a5fa' },
          { emoji: '🔴', value: String(newCount), label: 'New (Unread)', color: '#f87171' },
          { emoji: '⚠️', value: String(critical), label: 'Critical', color: '#f87171' },
          { emoji: '🛡️', value: '3', label: 'Sources Active', color: '#c084fc' },
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

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {alerts.map((alert) => {
          const sc = sevConfig[alert.severity] || sevConfig.LOW
          const tc = typeConfig[alert.type] || { bg: 'rgba(59,130,246,0.1)', color: '#60a5fa' }
          return (
            <div
              key={alert.id}
              style={{
                background: 'var(--bg-card)',
                border: `1px solid ${alert.isNew ? 'rgba(239,68,68,0.3)' : 'var(--border)'}`,
                borderLeft: `3px solid ${sc.color}`,
                borderRadius: '8px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
              }}
            >
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: sc.bg, border: `1px solid ${sc.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }} aria-hidden="true">
                {alert.severity === 'CRITICAL' ? '🚨' : alert.severity === 'HIGH' ? '⚠️' : '🔔'}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '5px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>{alert.title}</span>
                  {alert.isNew && (
                    <span style={{ fontSize: '10px', background: 'rgba(239,68,68,0.2)', color: '#f87171', border: '1px solid rgba(239,68,68,0.4)', padding: '1px 6px', borderRadius: '8px', fontWeight: 700 }}>NEW</span>
                  )}
                  <span style={{ display: 'inline-flex', padding: '1px 7px', borderRadius: '3px', fontSize: '10px', fontWeight: 700, background: sc.bg, color: sc.color, border: `1px solid ${sc.border}` }}>{alert.severity}</span>
                  <span style={{ display: 'inline-flex', padding: '1px 7px', borderRadius: '3px', fontSize: '10px', fontWeight: 600, background: tc.bg, color: tc.color }}>{alert.type}</span>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px', lineHeight: 1.5 }}>{alert.detail}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '11px', color: 'var(--text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span>{alert.sourceIcon}</span><span>{alert.source}</span>
                  </span>
                  <span style={{ fontFamily: 'monospace' }}>{alert.ts}</span>
                  {alert.trsId && <span style={{ color: '#60a5fa', fontFamily: 'monospace', fontWeight: 600 }}>{alert.trsId}</span>}
                </div>
              </div>
              <div style={{ flexShrink: 0 }}>
                {alert.caseId && (
                  <a href={`/cases/${alert.caseId}`} style={{ fontSize: '12px', color: '#60a5fa', textDecoration: 'none', fontWeight: 600, whiteSpace: 'nowrap' }}>View case →</a>
                )}
              </div>
            </div>
          )
        })}
      </div>
      <div style={{ marginTop: '12px', fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center' }}>
        Powered by FraudLens AI · Document Intelligence · SSA DMF · TX SOS · OFAC+SAM · Senzing ER
      </div>
    </main>
  )
}
