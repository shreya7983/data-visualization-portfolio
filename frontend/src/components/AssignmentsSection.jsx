import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { ACADEMIC_ASSIGNMENTS } from '../data/academicWorkspaceData';

export default function AssignmentsSection({ onSelectAssignment }) {
  return (
    <section
      id="assignments"
      style={{
        backgroundColor: '#F7F7F4',
        paddingTop: 'clamp(60px, 8vw, 90px)',
        paddingBottom: 'clamp(70px, 8vw, 100px)',
        borderBottom: '1px solid #DCDCDC',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '44px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
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
              <span style={{ color: '#E8C547' }}>02</span> <span style={{ color: '#E8C547' }}>/</span> ASSIGNMENTS & REPORTS
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(32px, 3.8vw, 48px)',
              color: '#111111',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              margin: '0 0 14px 0'
            }}
          >
            ACADEMIC WORK.
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              color: '#666666',
              fontWeight: 400,
              lineHeight: 1.6,
              margin: 0
            }}
          >
            Structured assignments, exploratory models, and academic research documents.
          </p>
        </div>

        {/* Strong Horizontal Rows with Thin Borders */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #DCDCDC',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
          }}
        >
          {ACADEMIC_ASSIGNMENTS.map((item, index) => {
            const isLast = index === ACADEMIC_ASSIGNMENTS.length - 1;

            return (
              <div
                key={item.id}
                onClick={() => onSelectAssignment(item)}
                style={{
                  padding: 'clamp(24px, 3vw, 32px) clamp(20px, 3.5vw, 36px)',
                  borderBottom: isLast ? 'none' : '1px solid #DCDCDC',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(12, 1fr)',
                  gap: 'clamp(16px, 2.5vw, 28px)',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'background-color 200ms ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FAFAFA';
                  const btn = e.currentTarget.querySelector('.assignment-btn');
                  if (btn) {
                    btn.style.backgroundColor = '#E8C547';
                    btn.style.color = '#111111';
                    btn.style.borderColor = '#E8C547';
                    const arrow = btn.querySelector('.btn-arrow');
                    if (arrow) arrow.style.color = '#111111';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  const btn = e.currentTarget.querySelector('.assignment-btn');
                  if (btn) {
                    btn.style.backgroundColor = '#111111';
                    btn.style.color = '#FFFFFF';
                    btn.style.borderColor = '#111111';
                    const arrow = btn.querySelector('.btn-arrow');
                    if (arrow) arrow.style.color = '#E8C547';
                  }
                }}
              >
                {/* 1. Oversized Number */}
                <div
                  style={{
                    gridColumn: '1 / span 1',
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(20px, 2.2vw, 26px)',
                    fontWeight: 700,
                    color: '#E8C547',
                    lineHeight: 1
                  }}
                >
                  {item.num}
                </div>

                {/* 2. Visual Dashboard Screenshot Thumbnail */}
                <div
                  style={{
                    gridColumn: '2 / span 3',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    backgroundColor: '#F7F7F4',
                    border: '1px solid #DCDCDC',
                    aspectRatio: '16 / 10',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                  }}
                >
                  <img
                    src={item.preview || item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 300ms ease'
                    }}
                  />
                </div>

                {/* 3. Title, Category, and Short Summary */}
                <div
                  style={{
                    gridColumn: '5 / span 5',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: 'clamp(16px, 1.6vw, 20px)',
                        fontWeight: 700,
                        color: '#111111',
                        margin: 0,
                        letterSpacing: '-0.01em'
                      }}
                    >
                      {item.title}
                    </h3>

                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.70rem',
                        fontWeight: 600,
                        letterSpacing: '0.04em',
                        color: '#666666',
                        textTransform: 'uppercase',
                        padding: '3px 8px',
                        backgroundColor: '#F7F7F4',
                        border: '1px solid #EAEAEA',
                        borderRadius: '6px'
                      }}
                    >
                      {item.category || `${item.tool} · Data Visualization`}
                    </span>
                  </div>

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      lineHeight: 1.5,
                      color: '#666666',
                      fontWeight: 400,
                      margin: 0
                    }}
                  >
                    {item.subtitle || item.description}
                  </p>
                </div>

                {/* 4. Action Link */}
                <div
                  style={{
                    gridColumn: '10 / span 3',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                  }}
                >
                  <div
                    className="assignment-btn"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 18px',
                      borderRadius: '8px',
                      backgroundColor: '#111111',
                      border: '1px solid #111111',
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.80rem',
                      fontWeight: 600,
                      letterSpacing: '0.03em',
                      transition: 'all 200ms ease'
                    }}
                  >
                    <span>VIEW ASSIGNMENT</span>
                    <span className="btn-arrow" style={{ color: '#E8C547', fontWeight: 700, fontSize: '0.95rem', transition: 'color 200ms ease' }}>→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
