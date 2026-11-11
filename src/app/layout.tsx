import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FraudLens — TRS Fraud Detection Platform',
  description: 'AI-powered fraud detection and investigation platform for Texas Retirement System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a href="#main-content" className="skip-nav">Skip to main content</a>
        <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
          <Nav />
          {children}
        </div>
      </body>
    </html>
  )
}

function Nav() {
  return (
    <nav
      aria-label="FraudLens primary navigation"
      style={{
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 24px',
        height: '56px',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <a
        href="/cases"
        style={{
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginRight: '40px',
        }}
      >
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
          }}
          aria-hidden="true"
        >
          🔍
        </div>
        <div>
          <div
            style={{
              fontWeight: 700,
              fontSize: '16px',
              color: 'var(--text-primary)',
              letterSpacing: '-0.3px',
            }}
          >
            FraudLens
          </div>
          <div
            style={{
              fontSize: '10px',
              color: 'var(--text-muted)',
              marginTop: '-2px',
            }}
          >
            TRS · Fraud Detection Platform
          </div>
        </div>
      </a>

      <div style={{ display: 'flex', gap: '4px', flex: 1 }}>
        <a
          href="/inbox"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontSize: '13px',
            fontWeight: 400,
            color: 'var(--text-muted)',
            background: 'transparent',
            border: '1px solid transparent',
          }}
        >
          <span aria-hidden="true">📥</span>
          <span>Document Inbox</span>
        </a>
        <a
          href="/cases"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--text-primary)',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
          }}
        >
          <span aria-hidden="true">⚖️</span>
          <span>Case Dashboard</span>
          <span
            style={{
              background: 'rgba(239,68,68,0.15)',
              color: '#f87171',
              border: '1px solid rgba(239,68,68,0.3)',
              borderRadius: '10px',
              padding: '1px 6px',
              fontSize: '10px',
              fontWeight: 700,
            }}
          >
            6
          </span>
        </a>
        <a
          href="/alerts"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontSize: '13px',
            fontWeight: 400,
            color: 'var(--text-muted)',
            background: 'transparent',
            border: '1px solid transparent',
          }}
        >
          <span aria-hidden="true">🚨</span>
          <span>Alert Center</span>
          <span
            style={{
              background: 'rgba(239,68,68,0.15)',
              color: '#f87171',
              border: '1px solid rgba(239,68,68,0.3)',
              borderRadius: '10px',
              padding: '1px 6px',
              fontSize: '10px',
              fontWeight: 700,
            }}
          >
            2
          </span>
        </a>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div
            className="pulse-dot"
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: '#22c55e',
              boxShadow: '0 0 6px rgba(34,197,94,0.6)',
            }}
            aria-hidden="true"
          />
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Live</span>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 10px',
            borderRadius: '6px',
            border: '1px solid var(--border)',
            background: 'var(--bg-card)',
          }}
        >
          <div
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '11px',
              fontWeight: 700,
              color: 'white',
            }}
            aria-hidden="true"
          >
            SC
          </div>
          <div>
            <div
              style={{
                fontSize: '12px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                lineHeight: 1.2,
              }}
            >
              Det. Sarah Chen
            </div>
            <div
              style={{
                fontSize: '10px',
                color: 'var(--text-muted)',
                lineHeight: 1.2,
              }}
            >
              Lead Investigator
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
