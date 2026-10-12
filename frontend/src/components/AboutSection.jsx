import React from 'react';

const INTERESTS = [
  'Data Visualization',
  'Analytics',
  'Artificial Intelligence',
  'Research',
  'Technology',
  'Visual Storytelling'
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="atelier-section"
      style={{
        backgroundColor: 'var(--color-warm-beige)',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '48px',
            alignItems: 'center'
          }}
        >
          {/* Left Monogram / Profile Artifact - Columns 1 to 5 */}
          <div
            className="about-card"
            style={{
              gridColumn: 'span 5',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'var(--color-soft-cream)',
              borderRadius: '24px',
              padding: '64px 32px',
              color: 'var(--color-deep-burgundy)',
              border: '1px solid var(--color-border-subtle)'
            }}
          >
            {/* Coordinate Frame Lines */}
            <div
              style={{
                position: 'absolute',
                top: '20px',
                left: '24px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                color: 'var(--color-deep-crimson)',
                letterSpacing: '0.06em',
                fontWeight: 500
              }}
            >
              PROFILE // SK-2026
            </div>

            {/* Artistic Monogram */}
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                border: '1px solid var(--color-warm-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '24px 0 20px',
                background: 'radial-gradient(circle, rgba(184, 149, 90, 0.12) 0%, transparent 70%)'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '2.4rem',
                  fontWeight: 700,
                  color: 'var(--color-deep-burgundy)'
                }}
              >
                SK
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(22px, 2.5vw, 28px)',
                fontWeight: 600,
                color: 'var(--color-deep-burgundy)',
                letterSpacing: '-0.015em',
                lineHeight: 1.15,
                marginBottom: '6px'
              }}
            >
              Shreya Kashyap
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.74rem',
                letterSpacing: '0.06em',
                color: 'var(--color-deep-crimson)',
                textTransform: 'uppercase',
                fontWeight: 500,
                margin: 0
              }}
            >
              ANALYST &amp; VISUAL STORYTELLER
            </p>

            <div
              style={{
                marginTop: '32px',
                paddingTop: '20px',
                borderTop: '1px solid var(--color-border-subtle)',
                width: '100%',
                textAlign: 'center',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                color: 'var(--color-deep-burgundy-light)',
                letterSpacing: '0.05em',
                fontWeight: 500
              }}
            >
              LOC: NEW DELHI, INDIA // ACTIVE INQUIRY
            </div>
          </div>

          {/* Right Narrative - Columns 6 to 12 */}
          <div
            className="about-content"
            style={{
              gridColumn: 'span 7',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-deep-crimson)'
                }}
              />
              <span className="mono-tag" style={{ color: 'var(--color-deep-crimson)', fontWeight: 600 }}>
                PERSON BEHIND THE DATA
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
                margin: 0
              }}
            >
              A LITTLE ABOUT<br />
              <span style={{ color: 'var(--color-deep-crimson)' }}>THE PERSON BEHIND THE DATA</span>
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                lineHeight: '1.65',
                fontWeight: 400,
                color: 'var(--color-text-main)'
              }}
            >
              I am <strong>Shreya Kashyap</strong>, an analytical researcher and visual designer captivated by the intersection of empirical data and human understanding. I treat datasets not merely as rows in a spreadsheet, but as artifacts waiting for their most truthful visual form.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                lineHeight: '1.65',
                fontWeight: 400,
                color: 'var(--color-text-muted)'
              }}
            >
              Whether analyzing high-stakes examination vulnerabilities in Power BI, mapping multi-variable retail elasticity in Tableau, or modeling patient queues in Python, my goal is always identical: to eliminate cognitive noise and make complex patterns immediately clear.
            </p>

            {/* Focus Interests — Editorial Slash Roster without Pill Badges */}
            <div style={{ marginTop: '16px', paddingTop: '20px', borderTop: '1px solid var(--color-border-subtle)' }}>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.06em',
                  color: 'var(--color-deep-crimson)',
                  textTransform: 'uppercase',
                  marginBottom: '14px',
                  fontWeight: 500
                }}
              >
                CORE PURSUITS //
              </div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '8px 16px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.90rem',
                  fontWeight: 500,
                  color: 'var(--color-deep-burgundy)'
                }}
              >
                {INTERESTS.map((item, idx, arr) => (
                  <React.Fragment key={item}>
                    <span style={{ letterSpacing: '0.02em' }}>{item}</span>
                    {idx < arr.length - 1 && (
                      <span style={{ color: 'var(--color-border-subtle)', userSelect: 'none', fontFamily: 'var(--font-mono)' }}>/</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
