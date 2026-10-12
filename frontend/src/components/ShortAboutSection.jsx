import React from 'react';

const SKILLS = [
  'POWER BI',
  'EXCEL',
  'PYTHON',
  'DATA ANALYSIS',
  'VISUALIZATION'
];

export default function ShortAboutSection() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: '#F7F7F4',
        paddingTop: 'clamp(60px, 7vw, 90px)',
        paddingBottom: 'clamp(70px, 8vw, 100px)',
        borderBottom: '1px solid #DCDCDC',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #DCDCDC',
            borderRadius: '20px',
            padding: 'clamp(32px, 5vw, 56px)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
            maxWidth: '920px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}
        >
          {/* Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
                color: '#111111',
                fontWeight: 600,
                textTransform: 'uppercase'
              }}
            >
              <span style={{ color: '#E8C547' }}>03</span> <span style={{ color: '#E8C547' }}>/</span> ABOUT THE WORK
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(28px, 3.2vw, 40px)',
              color: '#111111',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              margin: 0
            }}
          >
            ABOUT THE PRACTICE.
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(16px, 1.2vw, 18px)',
              lineHeight: 1.65,
              color: '#444444',
              fontWeight: 400,
              maxWidth: '740px',
              margin: 0
            }}
          >
            I explore data visualization and analytical storytelling through dashboards, academic assignments and practical data projects.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              paddingTop: '16px',
              borderTop: '1px solid #DCDCDC'
            }}
          >
            {SKILLS.map((skill) => (
              <span
                key={skill}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.05em',
                  fontWeight: 600,
                  color: '#111111',
                  padding: '7px 14px',
                  borderRadius: '8px',
                  backgroundColor: '#F7F7F4',
                  border: '1px solid #DCDCDC',
                  textTransform: 'uppercase'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
