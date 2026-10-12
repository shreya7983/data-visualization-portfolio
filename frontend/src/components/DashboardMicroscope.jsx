import React, { useEffect } from 'react';
import { X, Search, Sparkles, Database, HelpCircle, ArrowLeft } from 'lucide-react';

export default function DashboardMicroscope({ visual, dashboardTitle, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!visual) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99990,
        backgroundColor: 'rgba(53, 10, 19, 0.88)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        animation: 'fadeIn 250ms ease forwards'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          backgroundColor: 'var(--color-soft-cream)',
          border: '1px solid rgba(184, 149, 90, 0.45)',
          borderRadius: '24px',
          boxShadow: '0 24px 64px rgba(0, 0, 0, 0.45)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '20px 28px',
            backgroundColor: 'var(--color-deep-burgundy)',
            color: 'var(--color-soft-cream)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(184, 149, 90, 0.3)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-warm-gold)'
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                letterSpacing: '0.12em',
                color: 'var(--color-warm-gold)',
                fontWeight: 500
              }}
            >
              MICROSCOPE // VISUAL INSPECTION
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Inspection"
            title="Close (Esc)"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 249, 240, 0.12)',
              border: '1px solid rgba(255, 249, 240, 0.25)',
              color: 'var(--color-soft-cream)',
              cursor: 'pointer',
              transition: 'all 150ms ease'
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div
          style={{
            padding: '32px 28px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}
        >
          {/* Component Identification */}
          <div>
            <div className="mono-tag" style={{ color: 'var(--color-deep-crimson)', marginBottom: '6px', fontWeight: 500 }}>
              {visual.type.toUpperCase()}
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(20px, 2.2vw, 26px)',
                fontWeight: 600,
                letterSpacing: '-0.015em',
                color: 'var(--color-deep-burgundy)',
                lineHeight: 1.2,
                margin: 0
              }}
            >
              {visual.name}
            </h2>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.74rem',
                color: 'var(--color-deep-burgundy-light)',
                fontWeight: 500,
                marginTop: '6px'
              }}
            >
              PART OF: {dashboardTitle.toUpperCase()}
            </div>
          </div>

          {/* Core Analytical Breakdown Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px'
            }}
          >
            {/* Purpose */}
            <div
              style={{
                padding: '20px',
                backgroundColor: 'var(--color-warm-beige-light)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <HelpCircle size={15} color="var(--color-deep-crimson)" />
                <span className="mono-tag" style={{ color: 'var(--color-deep-crimson)', fontWeight: 600 }}>
                  PURPOSE
                </span>
              </div>
              <p style={{ fontSize: '0.94rem', lineHeight: 1.6, color: 'var(--color-deep-burgundy)', margin: 0 }}>
                {visual.purpose}
              </p>
            </div>

            {/* Data Fields Used */}
            <div
              style={{
                padding: '20px',
                backgroundColor: 'var(--color-warm-beige-light)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Database size={15} color="var(--color-warm-gold)" />
                <span className="mono-tag" style={{ color: 'var(--color-deep-crimson)', fontWeight: 600 }}>
                  DATA FIELDS USED
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.86rem',
                  lineHeight: 1.6,
                  color: 'var(--color-deep-burgundy)',
                  fontWeight: 400,
                  margin: 0
                }}
              >
                {visual.data}
              </p>
            </div>
          </div>

          {/* Why This Visual Rationale */}
          <div
            style={{
              padding: '22px',
              backgroundColor: 'var(--color-warm-beige)',
              borderLeft: '4px solid var(--color-warm-gold)',
              borderRadius: '12px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Search size={15} color="var(--color-warm-gold)" />
              <span className="mono-tag" style={{ color: 'var(--color-deep-burgundy)', fontWeight: 600 }}>
                COGNITIVE ENCODING RATIONALE // WHY THIS VISUAL
              </span>
            </div>
            <p style={{ fontSize: '0.96rem', lineHeight: 1.65, color: 'var(--color-deep-burgundy)', margin: 0 }}>
              {visual.whyThisVisual}
            </p>
          </div>

          {/* Key Insight Unlocked */}
          <div
            style={{
              padding: '24px',
              backgroundColor: 'var(--color-soft-cream)',
              border: '1px solid var(--color-border-subtle)',
              borderLeft: '4px solid var(--color-deep-crimson)',
              borderRadius: '12px',
              boxShadow: 'var(--shadow-subtle)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Sparkles size={15} color="var(--color-deep-crimson)" />
              <span className="mono-tag" style={{ color: 'var(--color-deep-crimson)', fontWeight: 600 }}>
                DIRECT INSIGHT UNCOVERED
              </span>
            </div>
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

        {/* Modal Footer */}
        <div
          style={{
            padding: '16px 28px',
            backgroundColor: 'var(--color-warm-beige-light)',
            borderTop: '1px solid var(--color-border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.74rem',
              fontWeight: 500,
              color: 'var(--color-deep-burgundy-light)'
            }}
          >
            DATA ATELIER MICROSCOPIC INSPECTOR
          </span>

          <button
            onClick={onClose}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 20px',
              backgroundColor: 'var(--color-deep-crimson)',
              color: 'var(--color-soft-cream)',
              borderRadius: '12px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.80rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            <ArrowLeft size={13} />
            BACK TO DECONSTRUCTED VIEW
          </button>
        </div>
      </div>
    </div>
  );
}
