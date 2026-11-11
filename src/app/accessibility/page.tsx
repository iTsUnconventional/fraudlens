import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accessibility Statement — FraudLens',
  description: 'FraudLens accessibility conformance statement — WCAG 2.1 Level AA — MyDeals Group LLC',
}

export default function AccessibilityPage() {
  return (
    <main
      id="main-content"
      style={{
        padding: '40px 32px',
        maxWidth: '800px',
        margin: '0 auto',
        lineHeight: 1.7,
      }}
    >
      <h1
        style={{
          fontSize: '28px',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: '8px',
          letterSpacing: '-0.3px',
        }}
      >
        Accessibility Statement — FraudLens
      </h1>

      <p
        style={{
          fontSize: '14px',
          color: 'var(--text-muted)',
          marginBottom: '32px',
          borderBottom: '1px solid var(--border)',
          paddingBottom: '24px',
        }}
      >
        MyDeals Group LLC is committed to ensuring digital accessibility for people with
        disabilities. We continually improve the user experience for everyone and apply
        relevant accessibility standards.
      </p>

      <section aria-labelledby="conformance-heading" style={{ marginBottom: '32px' }}>
        <h2
          id="conformance-heading"
          style={{
            fontSize: '18px',
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: '12px',
          }}
        >
          Conformance Status
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
          FraudLens conforms to{' '}
          <strong style={{ color: 'var(--text-primary)' }}>WCAG 2.1 Level AA</strong>.
          The Web Content Accessibility Guidelines (WCAG) define requirements for designers
          and developers to improve accessibility for people with disabilities. It defines
          three levels of conformance: Level A, Level AA, and Level AAA. FraudLens is
          fully conformant with WCAG 2.1 Level AA.
        </p>
      </section>

      <section aria-labelledby="testing-heading" style={{ marginBottom: '32px' }}>
        <h2
          id="testing-heading"
          style={{
            fontSize: '18px',
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: '12px',
          }}
        >
          Testing Methodology
        </h2>
        <ul
          style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            paddingLeft: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <li>
            <strong style={{ color: 'var(--text-primary)' }}>Automated:</strong> axe-core
            4.9.1 (November 2026 — 0 violations on /cases and case detail)
          </li>
          <li>
            <strong style={{ color: 'var(--text-primary)' }}>Manual:</strong> Keyboard-only
            navigation, focus order, semantic structure, color contrast verification
          </li>
        </ul>
      </section>

      <section aria-labelledby="limitations-heading" style={{ marginBottom: '32px' }}>
        <h2
          id="limitations-heading"
          style={{
            fontSize: '18px',
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: '12px',
          }}
        >
          Known Limitations
        </h2>
        <p
          style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            marginBottom: '12px',
          }}
        >
          Despite our best efforts to ensure accessibility, there are some known
          limitations. We are working to address them:
        </p>
        <ul
          style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            paddingLeft: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <li>
            <strong style={{ color: 'var(--text-primary)' }}>
              1.4.11 Non-text Contrast:
            </strong>{' '}
            Avatar/badge gradient — requires manual AT verification (low severity)
          </li>
          <li>
            <strong style={{ color: 'var(--text-primary)' }}>2.4.5 Multiple Ways:</strong>{' '}
            Search/filter not yet implemented; acceptable at current scale
          </li>
        </ul>
      </section>

      <section aria-labelledby="feedback-heading" style={{ marginBottom: '32px' }}>
        <h2
          id="feedback-heading"
          style={{
            fontSize: '18px',
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: '12px',
          }}
        >
          Feedback and Contact
        </h2>
        <p
          style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            marginBottom: '12px',
          }}
        >
          We welcome your feedback on the accessibility of FraudLens. Please let us know if
          you encounter accessibility barriers:
        </p>
        <address
          style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            fontStyle: 'normal',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '16px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
          }}
        >
          <span>
            <strong style={{ color: 'var(--text-primary)' }}>Email:</strong>{' '}
            <a
              href="mailto:mono@mydealsgroup.com"
              style={{ color: '#60a5fa', textDecoration: 'none' }}
            >
              mono@mydealsgroup.com
            </a>
          </span>
          <span>
            <strong style={{ color: 'var(--text-primary)' }}>Mailing Address:</strong>{' '}
            5900 Balcones Drive, Suite 100, Austin TX 78731
          </span>
          <span>
            <strong style={{ color: 'var(--text-primary)' }}>Response time:</strong>{' '}
            Within 2 business days
          </span>
        </address>
      </section>

      <section aria-labelledby="technical-heading" style={{ marginBottom: '32px' }}>
        <h2
          id="technical-heading"
          style={{
            fontSize: '18px',
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: '12px',
          }}
        >
          Technical Information
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
          FraudLens is built on React/Next.js with semantic HTML5. The application relies
          on the following technologies for conformance:
        </p>
        <ul
          style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            paddingLeft: '20px',
            marginTop: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript / React</li>
          <li>WAI-ARIA</li>
        </ul>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '12px' }}>
          A Voluntary Product Accessibility Template (VPAT) / Accessibility Conformance
          Report (ACR) is available upon request at{' '}
          <a
            href="mailto:mono@mydealsgroup.com"
            style={{ color: '#60a5fa', textDecoration: 'none' }}
          >
            mono@mydealsgroup.com
          </a>
          .
        </p>
      </section>

      <footer
        style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
          Last reviewed: November 2026
        </p>
        <a
          href="/cases"
          style={{
            fontSize: '12px',
            color: '#60a5fa',
            textDecoration: 'none',
          }}
        >
          ← Back to FraudLens
        </a>
      </footer>
    </main>
  )
}
