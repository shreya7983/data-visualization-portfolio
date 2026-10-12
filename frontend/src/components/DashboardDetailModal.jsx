import React, { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DashboardDetailModal({ dashboard, onClose }) {
  useEffect(() => {
    if (!dashboard) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dashboard, onClose]);

  if (!dashboard) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${dashboard.title} details`}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(41, 36, 35, 0.72)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        animation: 'fadeIn 200ms ease forwards'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '860px',
          maxHeight: '90vh',
          backgroundColor: 'var(--color-soft-cream)',
          border: '1px solid var(--color-border-subtle)',
          borderRadius: '24px',
          boxShadow: '0 24px 64px rgba(25, 56, 59, 0.20)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* Top Header Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '28px 36px 20px 36px',
            borderBottom: '1px solid var(--color-border-subtle)',
            backgroundColor: 'var(--color-soft-cream)'
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.74rem',
              letterSpacing: '0.06em',
              color: '#111111',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#E8C547' }} />
            <span>PROJECT DOSSIER // {dashboard.id?.toUpperCase()}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Details (Esc)"
            title="Close (Esc)"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#F7F7F4',
              color: '#111111',
              cursor: 'pointer',
              border: '1px solid #DCDCDC',
              transition: 'all 180ms ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#111111';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#F7F7F4';
              e.currentTarget.style.color = '#111111';
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Information Body */}
        <div
          style={{
            flex: 1,
            padding: '36px',
            overflowY: 'auto',
            backgroundColor: 'var(--color-soft-cream)'
          }}
        >
          {/* Project Title */}
          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(22px, 3vw, 32px)',
              fontWeight: 600,
              color: 'var(--color-deep-burgundy)',
              lineHeight: 1.15,
              letterSpacing: '-0.015em',
              marginBottom: '16px'
            }}
          >
            {dashboard.title}
          </h2>

          {/* Thin Hairline Divider */}
          <div
            style={{
              width: '100%',
              height: '1px',
              backgroundColor: 'var(--color-border-subtle)',
              marginBottom: '24px'
            }}
          />

          {/* Metadata Row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px 36px',
              marginBottom: '36px',
              paddingBottom: '20px',
              borderBottom: '1px dashed var(--color-border-subtle)'
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.70rem',
                  letterSpacing: '0.06em',
                  color: 'var(--color-text-muted)',
                  fontWeight: 500,
                  marginBottom: '4px'
                }}
              >
                TOOL
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  color: 'var(--color-deep-crimson)'
                }}
              >
                {dashboard.tool}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.70rem',
                  letterSpacing: '0.06em',
                  color: 'var(--color-text-muted)',
                  fontWeight: 500,
                  marginBottom: '4px'
                }}
              >
                CATEGORY
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  color: 'var(--color-deep-burgundy)'
                }}
              >
                {dashboard.category}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.70rem',
                  letterSpacing: '0.06em',
                  color: 'var(--color-text-muted)',
                  fontWeight: 500,
                  marginBottom: '4px'
                }}
              >
                YEAR
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  color: 'var(--color-deep-burgundy)'
                }}
              >
                {dashboard.year}
              </div>
            </div>

            {dashboard.dataset && (
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.70rem',
                    letterSpacing: '0.06em',
                    color: 'var(--color-text-muted)',
                    fontWeight: 500,
                    marginBottom: '4px'
                  }}
                >
                  DATASET
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.86rem',
                    fontWeight: 500,
                    color: 'var(--color-deep-burgundy)'
                  }}
                >
                  {dashboard.dataset}
                </div>
              </div>
            )}
          </div>

          {/* Section: ABOUT */}
          {dashboard.description && (
            <div style={{ marginBottom: '32px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.06em',
                  color: 'var(--color-deep-crimson)',
                  fontWeight: 600,
                  marginBottom: '10px'
                }}
              >
                ABOUT
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.96rem',
                  lineHeight: 1.65,
                  color: 'var(--color-text-main)',
                  fontWeight: 400,
                  margin: 0
                }}
              >
                {dashboard.description}
              </p>
            </div>
          )}

          {/* Section: OBJECTIVE */}
          {dashboard.objective && (
            <div style={{ marginBottom: '32px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.06em',
                  color: 'var(--color-deep-crimson)',
                  fontWeight: 600,
                  marginBottom: '10px'
                }}
              >
                OBJECTIVE
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.96rem',
                  lineHeight: 1.65,
                  color: 'var(--color-text-main)',
                  fontWeight: 400,
                  margin: 0
                }}
              >
                {dashboard.objective}
              </p>
            </div>
          )}

          {/* Section: VISUALIZATION APPROACH */}
          {dashboard.visualizationApproach && (
            <div style={{ marginBottom: '32px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.06em',
                  color: 'var(--color-deep-crimson)',
                  fontWeight: 600,
                  marginBottom: '10px'
                }}
              >
                VISUALIZATION APPROACH
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.96rem',
                  lineHeight: 1.65,
                  color: 'var(--color-text-main)',
                  fontWeight: 400,
                  margin: 0
                }}
              >
                {dashboard.visualizationApproach}
              </p>
            </div>
          )}

          {/* Section: INSIGHTS */}
          {Array.isArray(dashboard.insights) && dashboard.insights.length > 0 && (
            <div style={{ marginBottom: '32px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.06em',
                  color: 'var(--color-deep-crimson)',
                  fontWeight: 600,
                  marginBottom: '12px'
                }}
              >
                KEY ANALYTICAL INSIGHTS
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                {dashboard.insights.map((insight, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.94rem',
                      lineHeight: 1.6,
                      color: 'var(--color-text-main)',
                      fontWeight: 400
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        width: '6px',
                        height: '6px',
                        marginTop: '8px',
                        backgroundColor: 'var(--color-deep-crimson)',
                        borderRadius: '50%',
                        flexShrink: 0
                      }}
                    />
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Section: CHARTS EMPLOYED */}
          {Array.isArray(dashboard.chartsUsed) && dashboard.chartsUsed.length > 0 && (
            <div style={{ marginBottom: '32px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.06em',
                  color: 'var(--color-deep-crimson)',
                  fontWeight: 600,
                  marginBottom: '10px'
                }}
              >
                CHARTS EMPLOYED
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {dashboard.chartsUsed.map((chart, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.74rem',
                      padding: '4px 10px',
                      backgroundColor: 'rgba(47, 93, 98, 0.06)',
                      border: '1px solid var(--color-border-subtle)',
                      borderRadius: '10px',
                      color: 'var(--color-deep-burgundy)',
                      fontWeight: 500
                    }}
                  >
                    {chart}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Additional Data DNA info if present */}
          {dashboard.dataDna && (
            <div style={{ marginBottom: '20px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.06em',
                  color: 'var(--color-deep-crimson)',
                  fontWeight: 600,
                  marginBottom: '10px'
                }}
              >
                DATA SPECIFICATIONS
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '14px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  color: 'var(--color-text-muted)'
                }}
              >
                {dashboard.dataDna.analysisType && (
                  <div>
                    <span style={{ color: 'var(--color-deep-burgundy)', fontWeight: 600 }}>ANALYSIS: </span>
                    {dashboard.dataDna.analysisType}
                  </div>
                )}
                {dashboard.dataDna.granularity && (
                  <div>
                    <span style={{ color: 'var(--color-deep-burgundy)', fontWeight: 600 }}>GRANULARITY: </span>
                    {dashboard.dataDna.granularity}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 36px',
            borderTop: '1px solid var(--color-border-subtle)',
            backgroundColor: 'var(--color-soft-cream)'
          }}
        >
          <button
            onClick={onClose}
            style={{
              padding: '10px 22px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.80rem',
              fontWeight: 600,
              color: 'var(--color-text-muted)',
              backgroundColor: 'transparent',
              border: '1px solid var(--color-border-subtle)',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 200ms ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-deep-burgundy)';
              e.currentTarget.style.color = 'var(--color-deep-burgundy)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
              e.currentTarget.style.color = 'var(--color-text-muted)';
            }}
          >
            CLOSE
          </button>

          <Link
            to={`/dashboards/${dashboard.id}`}
            onClick={onClose}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 22px',
              backgroundColor: '#111111',
              color: '#FFFFFF',
              borderRadius: '10px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.80rem',
              letterSpacing: '0.04em',
              fontWeight: 600,
              transition: 'all 200ms ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E8C547';
              e.currentTarget.style.color = '#111111';
              const arrow = e.currentTarget.querySelector('svg');
              if (arrow) arrow.style.color = '#111111';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#111111';
              e.currentTarget.style.color = '#FFFFFF';
              const arrow = e.currentTarget.querySelector('svg');
              if (arrow) arrow.style.color = '#E8C547';
            }}
          >
            <span>OPEN INTERACTIVE EXHIBITION & MICROSCOPE</span>
            <ArrowUpRight size={14} style={{ color: '#E8C547', transition: 'color 200ms ease' }} />
          </Link>
        </div>
      </div>
    </div>
  );
}
