import React, { useState } from 'react';
import { HelpCircle, Database, Compass, Eye, Sparkles } from 'lucide-react';

const STORY_STEPS = [
  {
    step: '01',
    name: 'THE QUESTION',
    icon: HelpCircle,
    subtitle: 'Framing the analytical hypothesis',
    description:
      'Every impactful visualization originates from a disciplined question rather than an impulse to make a chart. Why are examination leaks clustering in specific boards? At what discount threshold does a retail category transition into net operational loss? Defining the exact problem prevents visual decoration and focuses the inquiry on real consequence.',
    deliverable: 'Hypothesis statement, inquiry scope, business/social stakes',
    accentColor: '#2F5D62'
  },
  {
    step: '02',
    name: 'THE DATA',
    icon: Database,
    subtitle: 'Verification, integrity & cleaning',
    description:
      'Raw data arrives fragmented, noisy, and biased. Using Power Query, Pandas, and rigorous validation scripts, timestamps are standardized, missing records are imputed or quarantined, and anomalies are documented. Visual clarity cannot exist without structural integrity.',
    deliverable: 'Standardized schemas, outlier logs, clean relational data models',
    accentColor: '#6E8585'
  },
  {
    step: '03',
    name: 'THE EXPLORATION',
    icon: Compass,
    subtitle: 'Statistical distributions & pattern detection',
    description:
      'Before constructing public dashboards, I stress-test distributions, correlation matrices, and seasonal anomalies. This phase uncovers hidden skewness, multivariable dependencies, and unexpected regressions that challenge initial assumptions.',
    deliverable: 'Summary statistics, variance testing, candidate visual metrics',
    accentColor: '#19383B'
  },
  {
    step: '04',
    name: 'THE VISUALIZATION',
    icon: Eye,
    subtitle: 'Cognitive encoding & visual architecture',
    description:
      'Selecting the appropriate visual form: choropleths for regional density, ridge plots for queue distributions, dual-axis scales for profit elasticity. Every pixel, color hue, and slicer is chosen to minimize cognitive load while maximizing analytical depth.',
    deliverable: 'Interactive canvas, custom DAX / calculated fields, responsive slicers',
    accentColor: '#2F5D62'
  },
  {
    step: '05',
    name: 'THE INSIGHT',
    icon: Sparkles,
    subtitle: 'Translating patterns into strategic action',
    description:
      'A dashboard fulfills its purpose only when an observer can form a definitive conclusion within seconds. The final artifact connects visual patterns directly to policy, operational intervention, or commercial decision-making.',
    deliverable: 'Key takeaway summaries, actionable decision thresholds, strategic narrative',
    accentColor: '#6E8585'
  }
];

export default function DataStorySection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = STORY_STEPS[activeStepIndex];

  return (
    <section
      id="data-story"
      className="atelier-section"
      style={{
        backgroundColor: 'var(--color-warm-beige)',
        borderTop: '1px solid var(--color-border-subtle)',
        borderBottom: '1px solid var(--color-border-subtle)',
        position: 'relative'
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
              SIGNATURE METHODOLOGY // 05 STAGES
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
            DATA STORY
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
            Data visualization is not merely chart generation. It is the disciplined craft of discovering, structuring, and communicating authentic meaning.
          </p>
        </div>

        {/* 5-Step Analytical Journey Grid */}
        <div
          className="data-story-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '40px',
            alignItems: 'start'
          }}
        >
          {/* Step Selector Ribbon — Cardless Editorial List */}
          <div
            className="data-story-selector"
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              flexDirection: 'column',
              borderTop: '1px solid var(--color-border-subtle)'
            }}
          >
            {STORY_STEPS.map((item, idx) => {
              const isActive = idx === activeStepIndex;

              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStepIndex(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '20px 16px',
                    border: 'none',
                    borderBottom: '1px solid var(--color-border-subtle)',
                    borderLeft: isActive ? '3px solid var(--color-deep-crimson)' : '3px solid transparent',
                    backgroundColor: isActive ? 'var(--color-soft-teal)' : 'transparent',
                    color: isActive ? 'var(--color-deep-crimson)' : 'var(--color-deep-burgundy)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 200ms ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderLeftColor = 'var(--color-deep-crimson)';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderLeftColor = 'transparent';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: isActive ? 'var(--color-deep-crimson)' : 'var(--color-warm-gold)'
                      }}
                    >
                      {item.step}
                    </span>
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: 'clamp(18px, 1.8vw, 22px)',
                          fontWeight: 600,
                          lineHeight: 1.25,
                          letterSpacing: '-0.015em'
                        }}
                      >
                        {item.name}
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.72rem',
                          fontWeight: 500,
                          letterSpacing: '0.04em',
                          color: isActive ? 'var(--color-deep-crimson)' : 'var(--color-deep-burgundy-light)',
                          marginTop: '3px',
                          textTransform: 'uppercase'
                        }}
                      >
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1rem',
                      color: isActive ? 'var(--color-deep-crimson)' : 'var(--color-border-subtle)',
                      fontWeight: 500
                    }}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Exhibition Display - Columns 6 to 12 */}
          <div
            className="data-story-display"
            style={{
              gridColumn: 'span 7',
              backgroundColor: 'var(--color-soft-cream)',
              border: '1px solid var(--color-border-subtle)',
              borderRadius: '24px',
              padding: '48px',
              position: 'relative'
            }}
          >
            {/* Top Stage Indicator */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '24px',
                borderBottom: '1px solid var(--color-border-subtle)',
                marginBottom: '32px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--color-deep-crimson)'
                  }}
                >
                  STAGE // {activeStep.step}
                </span>
                <span style={{ width: '24px', height: '1px', backgroundColor: 'var(--color-warm-gold)' }} />
                <span className="mono-tag" style={{ color: 'var(--color-deep-burgundy-light)', fontWeight: 600 }}>
                  ANALYTICAL RIGOR
                </span>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  color: 'var(--color-deep-burgundy-light)',
                  fontWeight: 500
                }}
              >
                0{activeStepIndex + 1} OF 05
              </div>
            </div>

            {/* Stage Title */}
            <h3
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(22px, 2.8vw, 30px)',
                fontWeight: 600,
                color: 'var(--color-deep-burgundy)',
                lineHeight: 1.2,
                letterSpacing: '-0.015em',
                marginBottom: '8px'
              }}
            >
              {activeStep.name}
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.76rem',
                letterSpacing: '0.06em',
                color: 'var(--color-deep-crimson)',
                textTransform: 'uppercase',
                fontWeight: 500,
                marginBottom: '28px'
              }}
            >
              {activeStep.subtitle}
            </p>

            {/* Narrative Explanation */}
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.75,
                color: 'var(--color-text-main)',
                marginBottom: '36px'
              }}
            >
              {activeStep.description}
            </p>

            {/* Stage Deliverables Box */}
            <div
              style={{
                padding: '20px 24px',
                backgroundColor: 'var(--color-warm-beige-light)',
                borderLeft: '4px solid var(--color-deep-crimson)',
                borderRadius: '12px',
                borderTop: '1px solid var(--color-border-subtle)',
                borderRight: '1px solid var(--color-border-subtle)',
                borderBottom: '1px solid var(--color-border-subtle)'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  color: 'var(--color-deep-crimson)',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  marginBottom: '6px'
                }}
              >
                CORE OUTCOME //
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--color-deep-burgundy)'
                }}
              >
                {activeStep.deliverable}
              </div>
            </div>

            {/* Flow Stepper Buttons */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '40px',
                paddingTop: '20px',
                borderTop: '1px solid var(--color-border-subtle)'
              }}
            >
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.82rem',
                  letterSpacing: '0.06em',
                  color: activeStepIndex === 0 ? 'var(--color-border-subtle)' : 'var(--color-deep-burgundy)',
                  cursor: activeStepIndex === 0 ? 'not-allowed' : 'pointer',
                  fontWeight: 600
                }}
              >
                ← PREVIOUS STAGE
              </button>

              <button
                disabled={activeStepIndex === STORY_STEPS.length - 1}
                onClick={() => setActiveStepIndex((prev) => Math.min(STORY_STEPS.length - 1, prev + 1))}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.82rem',
                  letterSpacing: '0.06em',
                  color: activeStepIndex === STORY_STEPS.length - 1 ? 'var(--color-border-subtle)' : 'var(--color-deep-crimson)',
                  cursor: activeStepIndex === STORY_STEPS.length - 1 ? 'not-allowed' : 'pointer',
                  fontWeight: 600
                }}
              >
                NEXT STAGE →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
