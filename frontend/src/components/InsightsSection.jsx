import React from 'react';
import { Link } from 'react-router-dom';

const INSIGHTS = [
  {
    num: '01',
    topic: 'PAPER LEAKS',
    title: 'Vulnerability Concentration in Decentralized Examination Boards',
    quote:
      'Recruitment examinations account for over 58% of all reported integrity disruptions across monitored testing agencies, with decentralized state boards exhibiting significantly higher vulnerability variance than centralized computer-based tiers.',
    projectLink: '/dashboards/india-paper-leaks',
    projectTitle: 'India Paper Leaks Analysis',
    tool: 'Power BI',
    accentColor: '#2F5D62'
  },
  {
    num: '02',
    topic: 'RETAIL MARGINS',
    title: 'The Discount Elasticity Inversion Threshold',
    quote:
      'While Technology drives 42% of net operating profit on 28% of transactions, promotional discounts exceeding 20% in high-volume Furniture sub-categories trigger an immediate negative net margin plunge of -12.4%.',
    projectLink: '/dashboards/superstore-sales',
    projectTitle: 'Superstore Sales Analysis',
    tool: 'Tableau',
    accentColor: '#6E8585'
  },
  {
    num: '03',
    topic: 'ACADEMIC RIGOR',
    title: 'Daily Micro-Habits Outperform Marathon Cramming',
    quote:
      'Consistent daily study intervals of 2.5–3 hours demonstrated significantly higher recall and exam performance than irregular weekend marathon sessions, with evening screen time over 4 hours exhibiting an inverse correlation of -0.48.',
    projectLink: '/dashboards/study-habits-analysis',
    projectTitle: 'Study Habits & Performance Analysis',
    tool: 'Power BI',
    accentColor: '#19383B'
  }
];

export default function InsightsSection() {
  return (
    <section
      id="insights"
      className="atelier-section"
      style={{
        backgroundColor: 'var(--color-warm-beige)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '780px', marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-deep-crimson)'
              }}
            />
            <span className="mono-tag" style={{ color: 'var(--color-deep-crimson)', fontWeight: 500 }}>
              OBSERVATIONS // CURATED FINDINGS
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
            INSIGHTS FROM THE DATA
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              color: 'var(--color-deep-burgundy-muted)',
              lineHeight: 1.6,
              fontWeight: 400
            }}
          >
            A visual analysis is only as valuable as the truths it surfaces. Here are pivotal findings distilled from rigorous exploratory modeling.
          </p>
        </div>

        {/* Large Editorial Wall Displays */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
          {INSIGHTS.map((item) => (
            <article
              key={item.num}
              className="insight-row"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '32px',
                paddingTop: '48px',
                borderTop: '1px solid var(--color-border-subtle)',
                alignItems: 'baseline'
              }}
            >
              {/* Number and Topic - Columns 1 to 3 */}
              <div
                className="insight-meta"
                style={{
                  gridColumn: 'span 3',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(28px, 3.5vw, 40px)',
                    fontWeight: 600,
                    color: item.accentColor,
                    lineHeight: 1
                  }}
                >
                  {item.num}
                </span>

                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    letterSpacing: '0.06em',
                    color: 'var(--color-deep-burgundy)',
                    textTransform: 'uppercase'
                  }}
                >
                  {item.topic}
                </span>

                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.72rem',
                    color: 'var(--color-deep-crimson)',
                    letterSpacing: '0.04em',
                    fontWeight: 500
                  }}
                >
                  SOURCE // {item.tool}
                </span>
              </div>

              {/* Main Insight Typography - Columns 4 to 12 */}
              <div
                className="insight-content"
                style={{
                  gridColumn: 'span 9',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px'
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(20px, 2.2vw, 28px)',
                    color: 'var(--color-deep-burgundy)',
                    lineHeight: 1.2,
                    letterSpacing: '-0.015em',
                    fontWeight: 600
                  }}
                >
                  {item.title}
                </h3>

                <blockquote
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    lineHeight: 1.65,
                    fontWeight: 400,
                    color: 'var(--color-deep-burgundy-muted)',
                    borderLeft: `3px solid ${item.accentColor}`,
                    paddingLeft: '28px',
                    margin: '8px 0'
                  }}
                >
                  "{item.quote}"
                </blockquote>

                <div>
                  <Link
                    to={item.projectLink}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.84rem',
                      letterSpacing: '0.06em',
                      color: 'var(--color-deep-crimson)',
                      fontWeight: 600,
                      textTransform: 'uppercase'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-deep-burgundy)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-deep-crimson)';
                    }}
                  >
                    EXAMINE {item.projectTitle} →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
