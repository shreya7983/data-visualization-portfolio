import React from 'react';

const JOURNEY_NODES = [
  {
    step: '01',
    label: 'DATA',
    detail: 'Raw observational archives, transactional databases, and survey records.'
  },
  {
    step: '02',
    label: 'CLEAN',
    detail: 'Normalization, deduplication, datetime parsing, and outlier auditing.'
  },
  {
    step: '03',
    label: 'EXPLORE',
    detail: 'Descriptive statistics, variance distributions, and multi-variable correlations.'
  },
  {
    step: '04',
    label: 'VISUALIZE',
    detail: 'Encoding geometry, color palettes, visual hierarchy, and interactive drilldowns.'
  },
  {
    step: '05',
    label: 'INTERPRET',
    detail: 'Deconstructing nuances, isolating critical anomalies, and validating conclusions.'
  },
  {
    step: '06',
    label: 'COMMUNICATE',
    detail: 'Presenting actionable stories that guide leadership and policy intervention.'
  }
];

export default function DataJourneySection() {
  return (
    <section
      id="data-journey"
      className="atelier-section"
      style={{
        backgroundColor: 'var(--color-warm-beige)',
        borderTop: '1px solid var(--color-border-subtle)',
        borderBottom: '1px solid var(--color-border-subtle)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-deep-crimson)'
              }}
            />
            <span className="mono-tag" style={{ color: 'var(--color-deep-crimson)', fontWeight: 600 }}>
              PIPELINE // CHRONOLOGY
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(32px, 3.8vw, 44px)',
              color: 'var(--color-deep-burgundy)',
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: '-0.015em',
              marginBottom: '16px'
            }}
          >
            THE DATA JOURNEY
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.6,
              fontWeight: 400
            }}
          >
            From fragmented observations to lucid visual communication: the analytical path that underpins every project in this atelier.
          </p>
        </div>

        {/* Flowing Visual Path — Cardless Editorial Timeline */}
        <div
          style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            borderTop: '1px solid var(--color-border-subtle)'
          }}
          className="journey-grid"
        >
          {JOURNEY_NODES.map((node, index) => (
            <div
              key={node.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                position: 'relative',
                padding: '32px 20px',
                borderRight: index < JOURNEY_NODES.length - 1 ? '1px solid var(--color-border-subtle)' : 'none',
                transition: 'all 250ms ease'
              }}
              className="journey-node-col"
              onMouseEnter={(e) => {
                const titleEl = e.currentTarget.querySelector('.journey-label');
                if (titleEl) titleEl.style.color = 'var(--color-deep-crimson)';
              }}
              onMouseLeave={(e) => {
                const titleEl = e.currentTarget.querySelector('.journey-label');
                if (titleEl) titleEl.style.color = 'var(--color-deep-burgundy)';
              }}
            >
              {/* Step Counter */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.80rem',
                    fontWeight: 600,
                    color: 'var(--color-warm-gold)'
                  }}
                >
                  {node.step} //
                </span>

                {index < JOURNEY_NODES.length - 1 && (
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      color: 'var(--color-border-subtle)',
                      fontWeight: 500
                    }}
                  >
                    →
                  </span>
                )}
              </div>

              {/* Node Label */}
              <h4
                className="journey-label"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(18px, 1.8vw, 22px)',
                  fontWeight: 600,
                  color: 'var(--color-deep-burgundy)',
                  lineHeight: 1.25,
                  letterSpacing: '-0.015em',
                  margin: 0,
                  transition: 'color 250ms ease'
                }}
              >
                {node.label}
              </h4>

              {/* Node Detail */}
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.90rem',
                  lineHeight: 1.6,
                  color: 'var(--color-text-muted)',
                  margin: 0
                }}
              >
                {node.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
