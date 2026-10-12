import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px',
        textAlign: 'center',
        backgroundColor: 'var(--color-warm-beige)'
      }}
    >
      <div style={{ maxWidth: '640px' }}>
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.74rem',
            letterSpacing: '0.08em',
            color: 'var(--color-deep-crimson)',
            marginBottom: '16px',
            fontWeight: 500
          }}
        >
          404 // MISSING COORDINATE
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(36px, 5.5vw, 64px)',
            color: 'var(--color-deep-burgundy)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '24px'
          }}
        >
          THIS DATA POINT<br />
          <span style={{ color: 'var(--color-deep-crimson)' }}>DOESN'T EXIST.</span>
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1.05rem',
            color: 'var(--color-deep-burgundy-muted)',
            lineHeight: 1.65,
            fontWeight: 400,
            marginBottom: '40px'
          }}
        >
          The URL you navigated to does not map to any existing exhibit, dashboard, or data story in this atelier.
        </p>

        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '16px 36px',
            backgroundColor: 'var(--color-deep-crimson)',
            color: 'var(--color-soft-cream)',
            borderRadius: '12px',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.86rem',
            letterSpacing: '0.06em',
            fontWeight: 600,
            textDecoration: 'none',
            boxShadow: 'none',
            transition: 'all 200ms ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-deep-burgundy)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-deep-crimson)';
          }}
        >
          RETURN HOME →
        </Link>
      </div>
    </main>
  );
}
