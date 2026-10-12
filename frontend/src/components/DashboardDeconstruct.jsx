import React from 'react';
import { ArrowUpRight, Sparkles, Layers } from 'lucide-react';

export default function DashboardDeconstruct({
  visualizations = [],
  dashboardTitle,
  onSelectVisual,
  isDeconstructed,
  onToggleDeconstruct
}) {
  if (!visualizations || visualizations.length === 0) return null;

  return (
    <section
      aria-label="Dashboard Architectural Deconstruction"
      style={{
        margin: '64px 0',
        padding: '32px 0',
        borderTop: '1px solid var(--color-border-subtle)'
      }}
    >
      {/* Header with Editorial Trigger */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          gap: '24px',
          marginBottom: isDeconstructed ? '48px' : '0'
        }}
      >
        <div style={{ maxWidth: '720px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Layers size={15} color="var(--color-deep-crimson)" />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
                color: 'var(--color-deep-crimson)',
                fontWeight: 600
              }}
            >
              ARCHITECTURAL DECONSTRUCTION //
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(32px, 3.8vw, 44px)',
              fontWeight: 600,
              color: 'var(--color-deep-burgundy)',
              lineHeight: 1.15,
              letterSpacing: '-0.015em',
              margin: '0 0 10px 0'
            }}
          >
            DECONSTRUCT THE DASHBOARD
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              color: 'var(--color-deep-burgundy-muted)',
              lineHeight: 1.6,
              fontWeight: 400,
              margin: 0
            }}
          >
            Explore each visual component in isolation. Examine the specific questions addressed, underlying data attributes, cognitive encoding rationale, and direct insights.
          </p>
        </div>

        {/* Clean Editorial Text Action without Pill Box */}
        <button
          onClick={onToggleDeconstruct}
          style={{
            background: 'none',
            border: 'none',
            padding: '8px 0',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.90rem',
            letterSpacing: '0.06em',
            fontWeight: 700,
            color: 'var(--color-deep-crimson)',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            borderBottom: '2px solid var(--color-deep-crimson)'
          }}
        >
          {isDeconstructed ? 'RESTORE FULL DASHBOARD' : 'DECONSTRUCT ↗'}
        </button>
      </div>

      {/* When deconstructed: Editorial Typographic Blocks without Card Boxes */}
      {isDeconstructed && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '48px',
            animation: 'fadeIn 300ms ease forwards'
          }}
        >
          {visualizations.map((visual, idx) => (
            <div
              key={visual.id || idx}
              style={{
                paddingTop: '32px',
                borderTop: '1px solid var(--color-border-subtle)',
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '32px',
                alignItems: 'baseline'
              }}
              className="deconstruct-module-row"
            >
              {/* Module Header & Identification (Cols 1-4) */}
              <div
                style={{
                  gridColumn: 'span 4',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      color: 'var(--color-deep-crimson)'
                    }}
                  >
                    0{idx + 1} //
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.70rem',
                      letterSpacing: '0.1em',
                      color: 'var(--color-deep-burgundy-light)',
                      textTransform: 'uppercase'
                    }}
                  >
                    {visual.type}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(18px, 1.8vw, 22px)',
                    fontWeight: 600,
                    color: 'var(--color-deep-burgundy)',
                    lineHeight: 1.25,
                    letterSpacing: '-0.015em',
                    margin: 0
                  }}
                >
                  {visual.name}
                </h3>

                <button
                  onClick={() => onSelectVisual(visual)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '6px 0',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.80rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    color: 'var(--color-deep-crimson)',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    marginTop: '12px'
                  }}
                >
                  FOCUS ON THIS VISUAL <ArrowUpRight size={13} />
                </button>
              </div>

              {/* Module Analytical Details (Cols 5-12) */}
              <div
                style={{
                  gridColumn: 'span 8',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px'
                }}
              >
                {/* Purpose */}
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.1em',
                      color: 'var(--color-deep-burgundy-light)',
                      display: 'block',
                      marginBottom: '4px'
                    }}
                  >
                    PURPOSE //
                  </span>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.02rem',
                      lineHeight: 1.6,
                      color: 'var(--color-deep-burgundy)',
                      margin: 0
                    }}
                  >
                    {visual.purpose}
                  </p>
                </div>

                {/* Data Fields & Why This Visual */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '24px'
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        letterSpacing: '0.1em',
                        color: 'var(--color-deep-burgundy-light)',
                        display: 'block',
                        marginBottom: '4px'
                      }}
                    >
                      DATA ATTRIBUTES //
                    </span>
                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.82rem',
                        lineHeight: 1.5,
                        color: 'var(--color-deep-burgundy)',
                        margin: 0
                      }}
                    >
                      {visual.data}
                    </p>
                  </div>

                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        letterSpacing: '0.1em',
                        color: 'var(--color-deep-burgundy-light)',
                        display: 'block',
                        marginBottom: '4px'
                      }}
                    >
                      WHY THIS VISUAL //
                    </span>
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.94rem',
                        lineHeight: 1.6,
                        color: 'var(--color-deep-burgundy-muted)',
                        margin: 0
                      }}
                    >
                      {visual.whyThisVisual}
                    </p>
                  </div>
                </div>

                {/* Direct Insight */}
                <div
                  style={{
                    paddingLeft: '16px',
                    borderLeft: '2px solid var(--color-deep-crimson)',
                    marginTop: '4px'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.1em',
                      color: 'var(--color-deep-crimson)',
                      display: 'block',
                      marginBottom: '4px'
                    }}
                  >
                    DIRECT INSIGHT //
                  </span>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1rem',
                      lineHeight: 1.6,
                      color: 'var(--color-deep-burgundy)',
                      margin: 0,
                      fontWeight: 400
                    }}
                  >
                    "{visual.insight}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
