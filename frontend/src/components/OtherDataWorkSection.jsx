import React from 'react';
import { ArrowUpRight, TrendingUp, Cpu, Database, Check } from 'lucide-react';
import { OTHER_DATA_WORK } from '../data/academicWorkspaceData';

export default function OtherDataWorkSection({ onOpenImage, onOpenDetail }) {
  const primaryWork = OTHER_DATA_WORK[0];
  const secondaryWorks = OTHER_DATA_WORK.slice(1);

  return (
    <section
      id="other-work"
      style={{
        backgroundColor: '#F5EDE2',
        paddingTop: 'clamp(50px, 8vw, 80px)',
        paddingBottom: 'clamp(60px, 8vw, 100px)',
        borderBottom: '1px solid #DDD2C5',
        position: 'relative'
      }}
    >
      {/* Anchor bridge for #projects */}
      <div id="projects" style={{ position: 'absolute', top: 0 }} />

      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#2F5D62'
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.74rem',
                letterSpacing: '0.08em',
                color: '#2F5D62',
                fontWeight: 500,
                textTransform: 'uppercase'
              }}
            >
              04 // EXPLORATORY & COMPUTATIONAL ANALYTICS
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(32px, 3.5vw, 48px)',
              color: '#19383B',
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: '-0.015em',
              margin: '0 0 16px 0'
            }}
          >
            OTHER DATA WORK
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              color: '#756F6A',
              lineHeight: 1.6,
              fontWeight: 400,
              margin: 0
            }}
          >
            Python statistical analysis, discrete-event simulations, econometric modeling, and visualization experiments.
          </p>
        </div>

        {/* Varied Editorial Mixture */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>

          {/* 1. Large Editorial Analytical Row */}
          {primaryWork && (
            <div
              style={{
                backgroundColor: '#FFF9F1',
                border: '1px solid #DDD2C5',
                borderRadius: '24px',
                padding: 'clamp(24px, 4vw, 36px)',
                boxShadow: '0 8px 30px rgba(25, 56, 59, 0.04)',
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: 'clamp(24px, 3.5vw, 40px)',
                alignItems: 'center'
              }}
            >
              <div
                style={{
                  gridColumn: '1 / span 5',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  backgroundColor: '#ECE2CF',
                  border: '1px solid #DDD2C5',
                  aspectRatio: '16 / 10',
                  cursor: 'pointer'
                }}
                onClick={() => onOpenImage && onOpenImage({ title: primaryWork.title, image: primaryWork.preview })}
              >
                <img
                  src={primaryWork.preview}
                  alt={primaryWork.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              <div
                style={{
                  gridColumn: '6 / span 7',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.74rem',
                      letterSpacing: '0.05em',
                      color: '#2F5D62',
                      fontWeight: 500,
                      textTransform: 'uppercase'
                    }}
                  >
                    {primaryWork.tool} · {primaryWork.category} · {primaryWork.year}
                  </span>

                  {primaryWork.keyMetric && (
                    <span
                      style={{
                        padding: '4px 10px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(47, 93, 98, 0.10)',
                        color: '#2F5D62',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.74rem',
                        fontWeight: 500
                      }}
                    >
                      {primaryWork.keyMetric}
                    </span>
                  )}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(20px, 2.2vw, 28px)',
                    color: '#292423',
                    fontWeight: 600,
                    lineHeight: 1.25,
                    letterSpacing: '-0.015em',
                    margin: 0
                  }}
                >
                  {primaryWork.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.94rem',
                    lineHeight: 1.6,
                    color: '#756F6A',
                    fontWeight: 400,
                    margin: 0
                  }}
                >
                  {primaryWork.description}
                </p>

                {primaryWork.skills && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '6px' }}>
                    {primaryWork.skills.map((s, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.72rem',
                          padding: '3px 10px',
                          borderRadius: '8px',
                          backgroundColor: '#E3EEEE',
                          border: '1px solid #DDD2C5',
                          color: '#19383B',
                          fontWeight: 500
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 2. Side-by-side analytical entries */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px'
            }}
          >
            {secondaryWorks.map((work) => (
              <div
                key={work.id}
                style={{
                  backgroundColor: '#FFF9F1',
                  border: '1px solid #DDD2C5',
                  borderRadius: '24px',
                  padding: '24px',
                  boxShadow: '0 8px 24px rgba(25, 56, 59, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '16 / 10',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    backgroundColor: '#ECE2CF',
                    border: '1px solid #DDD2C5',
                    cursor: 'pointer'
                  }}
                  onClick={() => onOpenImage && onOpenImage({ title: work.title, image: work.preview })}
                >
                  <img
                    src={work.preview}
                    alt={work.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.74rem',
                        letterSpacing: '0.05em',
                        color: '#2F5D62',
                        fontWeight: 500,
                        textTransform: 'uppercase'
                      }}
                    >
                      {work.tool} · {work.year}
                    </span>

                    {work.keyMetric && (
                      <span
                        style={{
                          padding: '2px 8px',
                          borderRadius: '8px',
                          backgroundColor: 'rgba(47, 93, 98, 0.08)',
                          color: '#2F5D62',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.72rem',
                          fontWeight: 500
                        }}
                      >
                        {work.keyMetric}
                      </span>
                    )}
                  </div>

                  <h4
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'clamp(18px, 1.8vw, 22px)',
                      color: '#292423',
                      fontWeight: 600,
                      lineHeight: 1.3,
                      letterSpacing: '-0.015em',
                      margin: 0
                    }}
                  >
                    {work.title}
                  </h4>

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.92rem',
                      lineHeight: 1.55,
                      color: '#756F6A',
                      fontWeight: 400,
                      margin: 0,
                      flex: 1
                    }}
                  >
                    {work.description}
                  </p>

                  {work.skills && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '6px' }}>
                      {work.skills.map((s, idx) => (
                        <span
                          key={idx}
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.70rem',
                            padding: '2px 8px',
                            borderRadius: '6px',
                            backgroundColor: '#E3EEEE',
                            border: '1px solid #DDD2C5',
                            color: '#19383B',
                            fontWeight: 500
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
