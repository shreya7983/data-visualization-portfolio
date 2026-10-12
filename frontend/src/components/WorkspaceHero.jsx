import React from 'react';

const SKILLS_META = ['POWER BI', 'EXCEL', 'PYTHON', 'DATA ANALYSIS'];

export default function WorkspaceHero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        backgroundColor: '#F7F7F4',
        paddingTop: 'clamp(110px, 15vw, 150px)',
        paddingBottom: 'clamp(60px, 8vw, 90px)',
        borderBottom: '1px solid #DCDCDC',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(24px, 4vw, 48px)',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Academic Editorial Typography */}
          <div
            style={{
              gridColumn: '1 / span 7',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}
            className="hero-left-column"
          >
            {/* Small Label */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '5px 14px',
                borderRadius: '8px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #DCDCDC',
                marginBottom: '22px'
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: '#E8C547'
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#111111',
                  fontWeight: 600
                }}
              >
                DATA VISUALIZATION // ACADEMIC + PRACTICAL WORK
              </span>
            </div>

            {/* Main Monumental Heading with Yellow Accent */}
            <h1
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(44px, 5.8vw, 78px)',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
                color: '#111111',
                margin: '0 0 14px 0'
              }}
            >
              DATA<br />
              <span style={{ color: '#E8C547' }}>VISUALIZATION.</span>
            </h1>

            {/* Author Name with Yellow Accent on Surname */}
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(18px, 2vw, 24px)',
                fontWeight: 600,
                color: '#111111',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                marginBottom: '18px'
              }}
            >
              SHREYA <span style={{ color: '#E8C547' }}>KASHYAP</span>
            </div>

            {/* Concise Supporting Description */}
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(15px, 1.2vw, 17px)',
                lineHeight: 1.6,
                color: '#666666',
                fontWeight: 400,
                maxWidth: '520px',
                margin: '0 0 24px 0'
              }}
            >
              Data visualization, dashboards and analytical work created through academic assignments and practical projects.
            </p>

            {/* Small Metadata Row */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '32px'
              }}
            >
              {SKILLS_META.map((item) => (
                <span
                  key={item}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    padding: '5px 12px',
                    borderRadius: '8px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #DCDCDC',
                    color: '#111111'
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Clean Dual CTA Buttons for the Two Work Sections */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="#labs"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('labs');
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.pageYOffset - 30;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  borderRadius: '10px',
                  backgroundColor: '#111111',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.10)',
                  transition: 'all 200ms ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#E8C547';
                  e.currentTarget.style.color = '#111111';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#111111';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
              >
                <span>01 / LAB WORK</span>
                <span style={{ color: '#E8C547', fontWeight: 700 }}>↓</span>
              </a>

              <a
                href="#dashboards"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('dashboards');
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.pageYOffset - 30;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 22px',
                  borderRadius: '10px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #DCDCDC',
                  color: '#111111',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  transition: 'all 200ms ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#111111';
                  e.currentTarget.style.backgroundColor = '#F0F0EE';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#DCDCDC';
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                }}
              >
                <span>02 / DASHBOARDS</span>
                <span style={{ color: '#111111', fontWeight: 700 }}>↓</span>
              </a>
            </div>
          </div>

          {/* Right Column: Sophisticated Preview Composition of Dashboard Work */}
          <div
            style={{
              gridColumn: '8 / span 5',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
            className="hero-right-composition"
          >
            {/* Primary Featured Preview Card */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #DCDCDC',
                borderRadius: '20px',
                padding: '12px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)',
                transition: 'transform 250ms ease'
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '210px',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  backgroundColor: '#F7F7F4',
                  position: 'relative',
                  border: '1px solid #EAEAEA'
                }}
              >
                <img
                  src="/images/dashboards/paper-leaks.png"
                  alt="India Paper Leaks Dashboard Preview"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 6px 2px 6px'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.80rem',
                    fontWeight: 600,
                    color: '#111111'
                  }}
                >
                  INDIA PAPER LEAKS
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.68rem',
                    color: '#666666',
                    fontWeight: 500,
                    letterSpacing: '0.04em'
                  }}
                >
                  POWER BI · 2026
                </span>
              </div>
            </div>

            {/* Overlapping Secondary Card Pair */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '14px'
              }}
            >
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #DCDCDC',
                  borderRadius: '16px',
                  padding: '10px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)'
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '95px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    backgroundColor: '#F7F7F4',
                    border: '1px solid #EAEAEA'
                  }}
                >
                  <img
                    src="/images/dashboards/superstore-sales.png"
                    alt="Geospatial Analysis Preview"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: '#111111',
                    marginTop: '8px'
                  }}
                >
                  GEOSPATIAL ANALYSIS
                </div>
              </div>

              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #DCDCDC',
                  borderRadius: '16px',
                  padding: '10px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)'
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '95px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    backgroundColor: '#F7F7F4',
                    border: '1px solid #EAEAEA'
                  }}
                >
                  <img
                    src="/images/dashboards/placement-analysis.png"
                    alt="Alumni Dashboard Preview"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: '#111111',
                    marginTop: '8px'
                  }}
                >
                  ALUMNI DASHBOARD
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
