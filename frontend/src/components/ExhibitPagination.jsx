import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Grid } from 'lucide-react';

export default function ExhibitPagination({ prev, next, currentIndex, total }) {
  return (
    <nav
      aria-label="Exhibit Navigation"
      style={{
        marginTop: '80px',
        paddingTop: '32px',
        borderTop: '1px solid var(--color-border-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px'
      }}
    >
      {/* Previous Exhibit Link */}
      {prev ? (
        <Link
          to={`/dashboards/${prev.id}`}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '4px',
            textDecoration: 'none',
            maxWidth: '280px'
          }}
          onMouseEnter={(e) => {
            const titleEl = e.currentTarget.querySelector('.nav-title');
            if (titleEl) titleEl.style.color = 'var(--color-deep-crimson)';
          }}
          onMouseLeave={(e) => {
            const titleEl = e.currentTarget.querySelector('.nav-title');
            if (titleEl) titleEl.style.color = 'var(--color-deep-burgundy)';
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              letterSpacing: '0.04em',
              color: 'var(--color-deep-crimson)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: 500
            }}
          >
            <ArrowLeft size={13} />
            PREVIOUS EXHIBIT
          </span>
          <span
            className="nav-title"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              fontWeight: 600,
              letterSpacing: '-0.015em',
              color: 'var(--color-deep-burgundy)',
              lineHeight: 1.25,
              transition: 'color 200ms ease'
            }}
          >
            {prev.title}
          </span>
        </Link>
      ) : (
        <div style={{ width: '120px' }} />
      )}

      {/* Middle: Back to Gallery & Counter */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <Link
          to="/dashboards"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 22px',
            backgroundColor: 'var(--color-soft-cream)',
            border: '1px solid var(--color-border-subtle)',
            borderRadius: '12px',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.80rem',
            letterSpacing: '0.06em',
            color: 'var(--color-deep-burgundy)',
            fontWeight: 600,
            boxShadow: 'none',
            transition: 'all 200ms ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-deep-crimson)';
            e.currentTarget.style.borderColor = 'var(--color-deep-crimson)';
            e.currentTarget.style.color = 'var(--color-soft-cream)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-soft-cream)';
            e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
            e.currentTarget.style.color = 'var(--color-deep-burgundy)';
          }}
        >
          <Grid size={13} />
          ALL EXHIBITS
        </Link>
        {currentIndex && total && (
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.70rem',
              color: 'var(--color-deep-burgundy-light)',
              fontWeight: 500,
              letterSpacing: '0.04em'
            }}
          >
            EXHIBIT {currentIndex} OF {total}
          </span>
        )}
      </div>

      {/* Next Exhibit Link */}
      {next ? (
        <Link
          to={`/dashboards/${next.id}`}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            textAlign: 'right',
            gap: '4px',
            textDecoration: 'none',
            maxWidth: '280px'
          }}
          onMouseEnter={(e) => {
            const titleEl = e.currentTarget.querySelector('.nav-title');
            if (titleEl) titleEl.style.color = 'var(--color-deep-crimson)';
          }}
          onMouseLeave={(e) => {
            const titleEl = e.currentTarget.querySelector('.nav-title');
            if (titleEl) titleEl.style.color = 'var(--color-deep-burgundy)';
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              letterSpacing: '0.04em',
              color: 'var(--color-deep-crimson)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: 500
            }}
          >
            NEXT EXHIBIT
            <ArrowRight size={13} />
          </span>
          <span
            className="nav-title"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              fontWeight: 600,
              letterSpacing: '-0.015em',
              color: 'var(--color-deep-burgundy)',
              lineHeight: 1.25,
              transition: 'color 200ms ease'
            }}
          >
            {next.title}
          </span>
        </Link>
      ) : (
        <div style={{ width: '120px' }} />
      )}
    </nav>
  );
}
