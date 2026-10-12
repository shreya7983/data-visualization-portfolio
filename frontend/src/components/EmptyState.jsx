import React from 'react';
import { RotateCcw } from 'lucide-react';

export default function EmptyState({ onReset }) {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '72px 24px',
        backgroundColor: 'var(--color-soft-cream)',
        border: '1px solid var(--color-border-subtle)',
        borderRadius: '24px',
        maxWidth: '680px',
        margin: '0 auto',
        boxShadow: 'none'
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.74rem',
          letterSpacing: '0.06em',
          color: 'var(--color-deep-crimson)',
          marginBottom: '12px',
          fontWeight: 500
        }}
      >
        FILTER QUERY // NULL RESULT
      </div>

      <h3
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(20px, 2.2vw, 26px)',
          fontWeight: 600,
          color: 'var(--color-deep-burgundy)',
          letterSpacing: '-0.015em',
          marginBottom: '12px'
        }}
      >
        NO VISUAL STORIES FOUND
      </h3>

      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.96rem',
          fontWeight: 400,
          color: 'var(--color-deep-burgundy-muted)',
          marginBottom: '28px'
        }}
      >
        Try another category or visualization tool to view exhibition pieces.
      </p>

      {onReset && (
        <button
          onClick={onReset}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 28px',
            backgroundColor: 'var(--color-deep-crimson)',
            color: 'var(--color-soft-cream)',
            borderRadius: '12px',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.80rem',
            letterSpacing: '0.04em',
            fontWeight: 600,
            cursor: 'pointer',
            border: 'none',
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
          <RotateCcw size={14} />
          RESET FILTERS
        </button>
      )}
    </div>
  );
}
