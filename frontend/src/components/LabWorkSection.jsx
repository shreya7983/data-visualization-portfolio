import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Code2, BookOpen, ExternalLink, User } from 'lucide-react';
import { WORK_ITEMS } from '../data/workLibraryData';

export default function LabWorkSection() {
  const navigate = useNavigate();

  // 6 Authentic University Labs for BCA VII Semester (Dev Sanskriti Vishwavidyalaya)
  const labIds = ['lab-01', 'lab-02', 'lab-03', 'lab-04', 'lab-05', 'lab-06'];
  const labItems = labIds
    .map((id) => WORK_ITEMS.find((item) => item.id === id))
    .filter(Boolean);

  const handleOpenLab = (id) => {
    navigate(`/assignments/${id}`);
  };

  return (
    <section
      id="labs"
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: 'clamp(64px, 8vw, 96px)',
        paddingBottom: 'clamp(72px, 9vw, 108px)',
        borderBottom: '1px solid #DCDCDC',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '840px', marginBottom: '48px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#E8C547'
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.74rem',
                letterSpacing: '0.08em',
                color: '#111111',
                fontWeight: 600,
                textTransform: 'uppercase'
              }}
            >
              <span style={{ color: '#E8C547' }}>01</span> <span style={{ color: '#E8C547' }}>/</span> LAB WORK
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(32px, 4vw, 48px)',
              color: '#111111',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              margin: '0 0 16px 0'
            }}
          >
            LAB WORK <span style={{ color: '#E8C547' }}>& PRACTICALS.</span>
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(15px, 1.1vw, 17px)',
              color: '#666666',
              fontWeight: 400,
              lineHeight: 1.6,
              margin: 0
            }}
          >
            Academic programming labs, empirical investigations, visual taxonomy cheat sheets, and technical publications submitted for BCA VII Semester (Dev Sanskriti Vishwavidyalaya).
          </p>
        </div>

        {/* Unified Academic Curriculum Container */}
        <div
          style={{
            backgroundColor: '#F7F7F4',
            border: '1px solid #DCDCDC',
            borderRadius: '18px',
            overflow: 'hidden'
          }}
        >
          {/* Group Header */}
          <div
            style={{
              padding: '16px 24px',
              backgroundColor: '#ECECE8',
              borderBottom: '1px solid #DCDCDC',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <BookOpen size={16} color="#111111" />
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  color: '#111111',
                  textTransform: 'uppercase'
                }}
              >
                CURRICULUM ARCHIVE // BCA VII SEMESTER — DEV SANSKRITI VISHWAVIDYALAYA
              </span>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                color: '#666666',
                fontWeight: 600,
                letterSpacing: '0.04em'
              }}
            >
              {labItems.length} OFFICIAL PRACTICALS &amp; LAB REPORTS
            </span>
          </div>

          {/* Sequential Lab Items */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {labItems.map((lab, index) => {
              const isLastInGroup = index === labItems.length - 1;
              const displayLabNum = lab.num || `LAB 0${index + 1}`;
              const imageSrc = (lab.images && lab.images[0]?.url) || lab.image;

              return (
                <div
                  key={lab.id}
                  onClick={() => handleOpenLab(lab.id)}
                  style={{
                    padding: 'clamp(20px, 2.8vw, 32px)',
                    borderBottom: isLastInGroup ? 'none' : '1px solid #DCDCDC',
                    backgroundColor: '#FFFFFF',
                    cursor: 'pointer',
                    transition: 'background-color 180ms ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FAFAFA';
                    const btn = e.currentTarget.querySelector('.lab-view-btn');
                    if (btn) {
                      btn.style.backgroundColor = '#111111';
                      btn.style.color = '#FFFFFF';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    const btn = e.currentTarget.querySelector('.lab-view-btn');
                    if (btn) {
                      btn.style.backgroundColor = '#F0F0EE';
                      btn.style.color = '#111111';
                    }
                  }}
                >
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(12, 1fr)',
                      gap: 'clamp(16px, 2.5vw, 28px)',
                      alignItems: 'center'
                    }}
                  >
                    {/* Col 1-3: Thumbnail & Lab Number Badge */}
                    <div
                      style={{
                        gridColumn: 'span 12'
                      }}
                      className="col-span-12 md-col-span-3"
                    >
                      <div
                        style={{
                          position: 'relative',
                          borderRadius: '10px',
                          overflow: 'hidden',
                          border: '1px solid #DCDCDC',
                          backgroundColor: '#ECECE8',
                          aspectRatio: '16/10',
                          maxHeight: '140px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {imageSrc ? (
                          <img
                            src={imageSrc}
                            alt={lab.title}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                            loading="lazy"
                          />
                        ) : (
                          <Code2 size={32} color="#888888" />
                        )}
                        <div
                          style={{
                            position: 'absolute',
                            top: '8px',
                            left: '8px',
                            backgroundColor: 'rgba(17, 17, 17, 0.9)',
                            color: '#FFFFFF',
                            padding: '3px 8px',
                            borderRadius: '6px',
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.68rem',
                            fontWeight: 700,
                            letterSpacing: '0.04em'
                          }}
                        >
                          <span style={{ color: '#E8C547' }}>{displayLabNum}</span>
                        </div>
                      </div>
                    </div>

                    {/* Col 4-8: Title, Question, Technologies */}
                    <div
                      style={{
                        gridColumn: 'span 12'
                      }}
                      className="col-span-12 md-col-span-6"
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
                        {lab.subject && (
                          <span
                            style={{
                              fontFamily: 'var(--font-sans)',
                              fontSize: '0.70rem',
                              fontWeight: 700,
                              color: '#111111',
                              letterSpacing: '0.04em',
                              textTransform: 'uppercase',
                              backgroundColor: '#F0F0EE',
                              padding: '2px 8px',
                              borderRadius: '4px'
                            }}
                          >
                            {lab.subject}
                          </span>
                        )}
                        <span style={{ color: '#DCDCDC' }}>•</span>
                        <span
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.70rem',
                            color: '#666666',
                            fontWeight: 500
                          }}
                        >
                          {lab.year || '2026'}
                        </span>
                        {lab.student && (
                          <>
                            <span style={{ color: '#DCDCDC' }}>•</span>
                            <span
                              style={{
                                fontFamily: 'var(--font-sans)',
                                fontSize: '0.68rem',
                                color: '#444444',
                                fontWeight: 600
                              }}
                            >
                              {lab.student}
                            </span>
                          </>
                        )}
                      </div>

                      <h3
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: 'clamp(17px, 1.3vw, 20px)',
                          fontWeight: 700,
                          color: '#111111',
                          lineHeight: 1.3,
                          margin: '0 0 10px 0'
                        }}
                      >
                        {lab.title}
                      </h3>

                      {lab.question && (
                        <p
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.86rem',
                            color: '#555555',
                            lineHeight: 1.55,
                            margin: '0 0 12px 0',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}
                        >
                          <strong style={{ color: '#111111' }}>Objective: </strong>
                          {lab.question}
                        </p>
                      )}

                      {/* Tech Badges & Deliverable Highlights */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {(lab.tools || [lab.tool]).map((t) => (
                          <span
                            key={t}
                            style={{
                              padding: '3px 8px',
                              borderRadius: '6px',
                              backgroundColor: '#F0F0EE',
                              border: '1px solid #E2E2DE',
                              fontFamily: 'var(--font-sans)',
                              fontSize: '0.70rem',
                              fontWeight: 600,
                              color: '#333333'
                            }}
                          >
                            {t}
                          </span>
                        ))}
                        {lab.visualizationsList && (
                          <span
                            style={{
                              padding: '3px 8px',
                              borderRadius: '6px',
                              backgroundColor: '#FFF9E6',
                              border: '1px solid #E8C547',
                              fontFamily: 'var(--font-sans)',
                              fontSize: '0.70rem',
                              fontWeight: 600,
                              color: '#111111'
                            }}
                          >
                            {lab.visualizationsList.length} Visualizations &amp; Slicers
                          </span>
                        )}
                        {lab.activities && (
                          <span
                            style={{
                              padding: '3px 8px',
                              borderRadius: '6px',
                              backgroundColor: '#FFF9E6',
                              border: '1px solid #E8C547',
                              fontFamily: 'var(--font-sans)',
                              fontSize: '0.70rem',
                              fontWeight: 600,
                              color: '#111111'
                            }}
                          >
                            3 Practical Activities
                          </span>
                        )}
                        {lab.cheatSheetSections && (
                          <span
                            style={{
                              padding: '3px 8px',
                              borderRadius: '6px',
                              backgroundColor: '#FFF9E6',
                              border: '1px solid #E8C547',
                              fontFamily: 'var(--font-sans)',
                              fontSize: '0.70rem',
                              fontWeight: 600,
                              color: '#111111'
                            }}
                          >
                            Visual Taxonomy Cheat Sheet
                          </span>
                        )}
                        {lab.blogSections && (
                          <span
                            style={{
                              padding: '3px 8px',
                              borderRadius: '6px',
                              backgroundColor: '#FFF9E6',
                              border: '1px solid #E8C547',
                              fontFamily: 'var(--font-sans)',
                              fontSize: '0.70rem',
                              fontWeight: 600,
                              color: '#111111'
                            }}
                          >
                            Technical Blog Publication
                          </span>
                        )}
                        {lab.notesSections && (
                          <span
                            style={{
                              padding: '3px 8px',
                              borderRadius: '6px',
                              backgroundColor: '#FFF9E6',
                              border: '1px solid #E8C547',
                              fontFamily: 'var(--font-sans)',
                              fontSize: '0.70rem',
                              fontWeight: 600,
                              color: '#111111'
                            }}
                          >
                            Foundations &amp; Taxonomy Notes
                          </span>
                        )}
                        {lab.problems && (
                          <span
                            style={{
                              padding: '3px 8px',
                              borderRadius: '6px',
                              backgroundColor: '#FFF9E6',
                              border: '1px solid #E8C547',
                              fontFamily: 'var(--font-sans)',
                              fontSize: '0.70rem',
                              fontWeight: 600,
                              color: '#111111'
                            }}
                          >
                            2 Excel Practical Problems
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Col 9-12: Action Buttons */}
                    <div
                      style={{
                        gridColumn: 'span 12',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        justifyContent: 'center',
                        alignItems: 'stretch'
                      }}
                      className="col-span-12 md-col-span-3"
                    >
                      <button
                        type="button"
                        className="lab-view-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenLab(lab.id);
                        }}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          padding: '10px 18px',
                          borderRadius: '10px',
                          backgroundColor: '#F0F0EE',
                          border: '1px solid #DCDCDC',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          letterSpacing: '0.04em',
                          color: '#111111',
                          cursor: 'pointer',
                          transition: 'all 180ms ease'
                        }}
                      >
                        <span>VIEW LAB REPORT</span>
                        <ArrowRight size={14} />
                      </button>

                      {lab.googleDocUrl && (
                        <a
                          href={lab.googleDocUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '6px',
                            padding: '8px 14px',
                            borderRadius: '8px',
                            backgroundColor: '#FFFFFF',
                            border: '1px solid #DCDCDC',
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            color: '#555555',
                            textDecoration: 'none',
                            transition: 'all 160ms ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#111111';
                            e.currentTarget.style.color = '#111111';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = '#DCDCDC';
                            e.currentTarget.style.color = '#555555';
                          }}
                        >
                          <span>GOOGLE DOC SUBMISSION</span>
                          <ExternalLink size={12} />
                        </a>
                      )}

                      {lab.linkedInUrl && (
                        <a
                          href={lab.linkedInUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '6px',
                            padding: '8px 14px',
                            borderRadius: '8px',
                            backgroundColor: '#0A66C2',
                            border: '1px solid #0A66C2',
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            color: '#FFFFFF',
                            textDecoration: 'none',
                            transition: 'all 160ms ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#004182';
                            e.currentTarget.style.borderColor = '#004182';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#0A66C2';
                            e.currentTarget.style.borderColor = '#0A66C2';
                          }}
                        >
                          <span>VIEW ON LINKEDIN</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
