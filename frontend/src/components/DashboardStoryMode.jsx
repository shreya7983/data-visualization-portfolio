import React, { useState } from 'react';
import { HelpCircle, Database, Compass, Eye, Sparkles } from 'lucide-react';

const STAGES = [
  {
    key: 'question',
    num: '01',
    label: 'THE QUESTION',
    subtitle: 'Framing the analytical hypothesis & inquiry stakes',
    icon: HelpCircle
  },
  {
    key: 'data',
    num: '02',
    label: 'THE DATA',
    subtitle: 'Sourcing, integrity validation & schema normalization',
    icon: Database
  },
  {
    key: 'exploration',
    num: '03',
    label: 'THE EXPLORATION',
    subtitle: 'Variance stress-testing & anomaly detection',
    icon: Compass
  },
  {
    key: 'visualization',
    num: '04',
    label: 'THE VISUALIZATION',
    subtitle: 'Cognitive encoding & interactive architecture',
    icon: Eye
  },
  {
    key: 'insight',
    num: '05',
    label: 'THE INSIGHT',
    subtitle: 'Strategic interpretation & decision thresholds',
    icon: Sparkles
  }
];

export default function DashboardStoryMode({ story, title, dataset }) {
  if (!story) return null;

  return (
    <section
      aria-label="Guided Analytical Research Narrative"
      style={{
        margin: '64px 0 80px 0',
        padding: '36px 0',
        borderTop: '1px solid var(--color-border-subtle)'
      }}
    >
      {/* Narrative Section Header */}
      <div style={{ maxWidth: '820px', marginBottom: '56px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-deep-crimson)'
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
              color: 'var(--color-deep-crimson)',
              fontWeight: 600
            }}
          >
            EDITORIAL RESEARCH NARRATIVE // 05 STAGES
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
            margin: '0 0 16px 0'
          }}
        >
          THE RESEARCH JOURNEY
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1rem',
            lineHeight: 1.6,
            fontWeight: 400,
            color: 'var(--color-deep-burgundy-muted)',
            margin: 0
          }}
        >
          A continuous analytical progression from the initial hypothesis to strategic action.
        </p>
      </div>

      {/* Vertical Narrative Cascade — No Cards, Just Editorial Typography & Spacing */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '56px',
          maxWidth: '920px'
        }}
      >
        {STAGES.map((stg, idx) => {
          const content = story[stg.key] || 'Detailed analysis documented in research archive.';

          return (
            <div
              key={stg.key}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '28px',
                paddingTop: idx > 0 ? '48px' : 0,
                borderTop: idx > 0 ? '1px solid var(--color-border-subtle)' : 'none'
              }}
            >
              {/* Left Column: Number & Stage Label (Cols 1-4) */}
              <div style={{ gridColumn: 'span 4' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.74rem',
                    letterSpacing: '0.06em',
                    color: 'var(--color-deep-crimson)',
                    fontWeight: 600,
                    display: 'block',
                    marginBottom: '4px'
                  }}
                >
                  STAGE {stg.num} //
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(18px, 1.8vw, 22px)',
                    fontWeight: 600,
                    color: 'var(--color-deep-burgundy)',
                    lineHeight: 1.25,
                    letterSpacing: '-0.015em',
                    margin: '0 0 6px 0'
                  }}
                >
                  {stg.label}
                </h3>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.72rem',
                    color: 'var(--color-deep-burgundy-light)',
                    fontWeight: 500,
                    display: 'block'
                  }}
                >
                  {stg.subtitle}
                </span>
              </div>

              {/* Right Column: Narrative Statement & Details (Cols 5-12) */}
              <div style={{ gridColumn: 'span 8' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.02rem',
                    lineHeight: 1.65,
                    color: 'var(--color-deep-burgundy)',
                    margin: 0,
                    fontWeight: 400
                  }}
                >
                  {content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
