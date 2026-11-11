const docData: Record<string, {
  id: string; name: string; vendor: string; amount: string; status: string
  riskScore: number; flags: string[]
  created: string; modified: string; producer: string; modifiedBy: string; pages: number; size: string
  sha256: string; sha256Match: string | null
  metadata: { key: string; value: string; anomaly?: boolean }[]
  fontAnalysis: { field: string; original: string; detected: string; match: boolean }[]
  dedup: { type: string; matchDoc: string | null; matchFields: string[]; confidence: number } | null
  entity: { name: string; taxId: string; bank: string; watchlist: string; address: string; resolution: string }
  caseId: string | null
}> = {
  'invoice_00398_resubmit': {
    id: 'invoice_00398_resubmit', name: 'invoice_00398_resubmit.pdf', vendor: 'Acme Supply LLC', amount: '$142,500',
    status: 'REJECTED', riskScore: 97,
    flags: ['EXACT_DUPLICATE', 'HASH_COLLISION', 'VENDOR_BLOCKED'],
    created: '2026-09-14 09:22:14', modified: '2026-10-18 14:07:33', producer: 'Adobe Acrobat 23.1',
    modifiedBy: 'Acrobat Distiller', pages: 2, size: '218 KB',
    sha256: 'a3f8c291d9e14bb7f220c4a7e8b9f031c2d14a8e77c3f9b2d6e4a1c8f5b7e4a1',
    sha256Match: 'invoice_00398.pdf (uploaded 2026-09-14, paid 2026-09-20)',
    metadata: [
      { key: 'Created', value: '2026-09-14 09:22:14' },
      { key: 'Modified', value: '2026-10-18 14:07:33', anomaly: true },
      { key: 'Producer', value: 'Adobe Acrobat 23.1' },
      { key: 'Author', value: 'AP-Processor-AcmeSupply' },
      { key: 'Pages', value: '2' },
      { key: 'File Size', value: '218,432 bytes' },
      { key: 'PDF Version', value: '1.7' },
    ],
    fontAnalysis: [
      { field: 'Invoice Number', original: 'Arial 10pt', detected: 'Arial 10pt', match: true },
      { field: 'Amount', original: 'Arial 10pt', detected: 'Arial 10pt', match: true },
      { field: 'Date', original: 'Arial 10pt', detected: 'Arial 10pt', match: true },
    ],
    dedup: { type: 'EXACT', matchDoc: 'invoice_00398.pdf', matchFields: ['SHA-256', 'Amount', 'Invoice Number', 'Vendor TAX ID', 'Bank Account'], confidence: 100 },
    entity: { name: 'Acme Supply LLC', taxId: '74-2918365', bank: 'Wells Fargo ****4821', watchlist: 'CLEAR', address: '1420 W. 5th St, Austin TX 78703', resolution: 'Resolved to ENT-7291 — 2 prior invoices on file' },
    caseId: 'CASE-2026-001',
  },
  'invoice_00441_tampered': {
    id: 'invoice_00441_tampered', name: 'invoice_00441_tampered.pdf', vendor: 'Acme Supply LLC', amount: '$189,750',
    status: 'FLAGGED', riskScore: 85,
    flags: ['MODIFIED_AFTER_CREATION', 'FONT_INCONSISTENCY', 'PRODUCER_MISMATCH', 'AMOUNT_INCONSISTENCY', 'TOOL_ANOMALY'],
    created: '2026-10-01 11:14:22', modified: '2026-10-15 16:33:07', producer: 'Adobe Acrobat 23.1',
    modifiedBy: 'ilovepdf.com (web)', pages: 3, size: '341 KB',
    sha256: 'f9b2c741e8d3a019c4f7b2e6d9a1c3e8b7f4d2a9e1c6b8f3d7a4e2c9b1f6d3e8',
    sha256Match: null,
    metadata: [
      { key: 'Created', value: '2026-10-01 11:14:22' },
      { key: 'Modified', value: '2026-10-15 16:33:07', anomaly: true },
      { key: 'Producer', value: 'Adobe Acrobat 23.1', anomaly: false },
      { key: 'Modified By', value: 'ilovepdf.com', anomaly: true },
      { key: 'Author', value: 'AP-Processor-AcmeSupply' },
      { key: 'Pages', value: '3' },
      { key: 'File Size', value: '349,312 bytes' },
      { key: 'Time Delta (Created→Modified)', value: '14 days 5h 18m', anomaly: true },
    ],
    fontAnalysis: [
      { field: 'Invoice Number', original: 'Arial 10pt', detected: 'Arial 10pt', match: true },
      { field: 'Amount', original: 'Arial 10pt', detected: 'Helvetica Neue 10.1pt', match: false },
      { field: 'Date', original: 'Arial 10pt', detected: 'Arial 10pt', match: true },
      { field: 'Line Items', original: 'Arial 10pt', detected: 'Arial 10pt', match: true },
    ],
    dedup: { type: 'NEAR', matchDoc: null, matchFields: ['Vendor TAX ID', 'Invoice Period', 'Service Category'], confidence: 42 },
    entity: { name: 'Acme Supply LLC', taxId: '74-2918365', bank: 'Wells Fargo ****4821', watchlist: 'CLEAR', address: '1420 W. 5th St, Austin TX 78703', resolution: 'Resolved to ENT-7291 — same entity as invoice_00398 vendor' },
    caseId: 'CASE-2026-002',
  },
  'invoice_00502_clean': {
    id: 'invoice_00502_clean', name: 'invoice_00502_clean.pdf', vendor: 'Acme Supply LLC', amount: '$67,200',
    status: 'PASSED', riskScore: 4,
    flags: [],
    created: '2026-10-22 10:14:00', modified: '2026-10-22 10:14:00', producer: 'Adobe Acrobat 23.1',
    modifiedBy: '', pages: 2, size: '187 KB',
    sha256: 'c2e9b4f7d1a8c3e6b9f2d4a7e1c8b3f6d9a2e4c7b1f8d3a6e9c2b4f7d1a8c3e6',
    sha256Match: null,
    metadata: [
      { key: 'Created', value: '2026-10-22 10:14:00' },
      { key: 'Modified', value: '2026-10-22 10:14:00' },
      { key: 'Producer', value: 'Adobe Acrobat 23.1' },
      { key: 'Author', value: 'AP-Processor-AcmeSupply' },
      { key: 'Pages', value: '2' },
      { key: 'File Size', value: '191,488 bytes' },
      { key: 'Time Delta (Created→Modified)', value: '0 seconds' },
    ],
    fontAnalysis: [
      { field: 'Invoice Number', original: 'Arial 10pt', detected: 'Arial 10pt', match: true },
      { field: 'Amount', original: 'Arial 10pt', detected: 'Arial 10pt', match: true },
      { field: 'Date', original: 'Arial 10pt', detected: 'Arial 10pt', match: true },
    ],
    dedup: { type: 'UNIQUE', matchDoc: null, matchFields: [], confidence: 0 },
    entity: { name: 'Acme Supply LLC', taxId: '74-2918365', bank: 'Wells Fargo ****4821', watchlist: 'CLEAR', address: '1420 W. 5th St, Austin TX 78703', resolution: 'Resolved to ENT-7291 — verified vendor, 2 prior invoices' },
    caseId: null,
  },
}

function RiskRing({ score }: { score: number }) {
  const r = 36; const circ = 2 * Math.PI * r
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

export default function ForensicsPage({ params }: { params: { docId: string } }) {
  const doc = docData[params.docId]
  if (!doc) {
    return (
      <main id="main-content" style={{ padding: '24px 32px', maxWidth: '1400px', margin: '0 auto' }}>
        <a href="/inbox" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '13px' }}>← Back to Document Inbox</a>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', padding: '32px', marginTop: '20px', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)' }}>Document forensics report not found</p>
        </div>
      </main>
    )
  }

  const statusColors: Record<string, string> = { REJECTED: '#f87171', FLAGGED: '#fbbf24', PASSED: '#4ade80' }
  const statusColor = statusColors[doc.status] || '#94a3b8'

  return (
    <main id="main-content" style={{ padding: '24px 32px', maxWidth: '1400px', margin: '0 auto' }}>
      <a href="/inbox" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '20px' }}>
        ← Back to Document Inbox
      </a>

      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span style={{ fontFamily: 'monospace', fontSize: '13px', color: '#60a5fa', fontWeight: 700 }}>FORENSIC ANALYSIS</span>
            <span style={{ background: `${statusColor}20`, color: statusColor, border: `1px solid ${statusColor}40`, display: 'inline-flex', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.5px' }}>{doc.status}</span>
          </div>
          <h1 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', margin: 0, letterSpacing: '-0.3px', fontFamily: 'monospace' }}>{doc.name}</h1>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: '6px 0 0' }}>{doc.vendor} · {doc.amount} · {doc.pages} pages · {doc.size}</p>
        </div>
        {doc.caseId && (
          <a href={`/cases/${doc.caseId}`} style={{ padding: '8px 16px', borderRadius: '6px', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.3)', color: '#60a5fa', fontSize: '13px', fontWeight: 600, textDecoration: 'none', flexShrink: 0 }}>
            View Case →
          </a>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: '16px', marginBottom: '20px' }}>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <RiskRing score={doc.riskScore} />
          <div style={{ marginTop: '12px', fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center' }}>Forensic Risk</div>
          <div style={{ marginTop: '4px', fontSize: '11px', fontWeight: 700, color: doc.riskScore >= 60 ? '#f87171' : doc.riskScore >= 30 ? '#fbbf24' : '#4ade80', textAlign: 'center' }}>
            {doc.riskScore >= 60 ? 'HIGH RISK' : doc.riskScore >= 30 ? 'MODERATE' : 'CLEAN'}
          </div>
        </div>

        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', padding: '20px' }}>
          <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>Forensic Flags</div>
          {doc.flags.length === 0 ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '16px' }}>✅</span>
              <span style={{ fontSize: '14px', color: '#4ade80', fontWeight: 600 }}>No anomalies detected — document is clean</span>
            </div>
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {doc.flags.map((f) => (
                <span key={f} style={{ fontSize: '11px', padding: '4px 10px', borderRadius: '4px', background: 'rgba(239,68,68,0.1)', color: '#f87171', border: '1px solid rgba(239,68,68,0.25)', fontFamily: 'monospace', fontWeight: 600 }}>{f}</span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        {/* Metadata forensics */}
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden' }}>
          <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--border)', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>PDF Metadata Analysis</div>
          <div style={{ padding: '16px 20px' }}>
            {doc.metadata.map(({ key, value, anomaly }) => (
              <div key={key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', padding: '6px 8px', borderRadius: '4px', background: anomaly ? 'rgba(239,68,68,0.06)' : 'transparent', border: anomaly ? '1px solid rgba(239,68,68,0.15)' : '1px solid transparent' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{key}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '12px', fontFamily: 'monospace', fontWeight: 600, color: anomaly ? '#f87171' : 'var(--text-primary)' }}>{value}</span>
                  {anomaly && <span style={{ fontSize: '10px', color: '#f87171' }}>⚠️</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Font analysis */}
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden' }}>
          <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--border)', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Font Consistency Analysis</div>
          <div style={{ padding: '16px 20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 32px', gap: '8px', marginBottom: '8px' }}>
              {['Field', 'Expected', 'Detected', ''].map((h) => (
                <span key={h} style={{ fontSize: '10px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>{h}</span>
              ))}
            </div>
            {doc.fontAnalysis.map((fa) => (
              <div key={fa.field} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 32px', gap: '8px', marginBottom: '8px', padding: '6px 8px', borderRadius: '4px', background: !fa.match ? 'rgba(239,68,68,0.06)' : 'transparent', border: !fa.match ? '1px solid rgba(239,68,68,0.15)' : '1px solid transparent' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{fa.field}</span>
                <span style={{ fontSize: '11px', fontFamily: 'monospace', color: 'var(--text-muted)' }}>{fa.original}</span>
                <span style={{ fontSize: '11px', fontFamily: 'monospace', color: fa.match ? 'var(--text-muted)' : '#f87171', fontWeight: fa.match ? 400 : 700 }}>{fa.detected}</span>
                <span style={{ fontSize: '14px' }}>{fa.match ? '✅' : '❌'}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        {/* Dedup result */}
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden' }}>
          <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--border)', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Deduplication Result</div>
          <div style={{ padding: '20px' }}>
            {doc.dedup && doc.dedup.type === 'EXACT' ? (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '20px' }}>🚫</span>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#f87171' }}>EXACT DUPLICATE DETECTED</span>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>Matches: <span style={{ color: 'var(--text-primary)', fontFamily: 'monospace', fontWeight: 600 }}>{doc.dedup.matchDoc}</span></div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px' }}>SHA-256 Match: <span style={{ color: '#f87171', fontFamily: 'monospace', fontSize: '10px' }}>{doc.sha256}</span></div>
                <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                  {doc.dedup.matchFields.map((f) => (
                    <span key={f} style={{ fontSize: '10px', padding: '2px 6px', borderRadius: '3px', background: 'rgba(239,68,68,0.1)', color: '#f87171', border: '1px solid rgba(239,68,68,0.2)', fontFamily: 'monospace' }}>{f}</span>
                  ))}
                </div>
              </div>
            ) : doc.dedup && doc.dedup.type === 'NEAR' ? (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '20px' }}>⚠️</span>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#fbbf24' }}>NEAR-DUPLICATE PATTERN</span>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>Similarity confidence: <span style={{ color: '#fbbf24', fontWeight: 700 }}>{doc.dedup.confidence}%</span></div>
                <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                  {doc.dedup.matchFields.map((f) => (
                    <span key={f} style={{ fontSize: '10px', padding: '2px 6px', borderRadius: '3px', background: 'rgba(245,158,11,0.1)', color: '#fbbf24', border: '1px solid rgba(245,158,11,0.2)', fontFamily: 'monospace' }}>{f}</span>
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '20px' }}>✅</span>
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#4ade80' }}>UNIQUE DOCUMENT — No duplicates found</span>
              </div>
            )}
          </div>
        </div>

        {/* Entity resolution */}
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden' }}>
          <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--border)', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Senzing Entity Resolution</div>
          <div style={{ padding: '20px' }}>
            <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>{doc.entity.name}</div>
            {([['TAX ID', doc.entity.taxId, true], ['Bank Account', doc.entity.bank, false], ['Address', doc.entity.address, false], ['Watchlist', doc.entity.watchlist, false]] as [string, string, boolean][]).map(([label, value, mono]) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{label}</span>
                <span style={{ fontSize: '12px', fontFamily: mono ? 'monospace' : 'inherit', fontWeight: 600, color: label === 'Watchlist' && value !== 'CLEAR' ? '#f87171' : label === 'Watchlist' ? '#4ade80' : 'var(--text-primary)' }}>{value}</span>
              </div>
            ))}
            <div style={{ marginTop: '12px', padding: '8px 10px', borderRadius: '4px', background: 'var(--bg-secondary)', fontSize: '11px', color: 'var(--text-muted)', fontStyle: 'italic' }}>
              {doc.entity.resolution}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
