import React from 'react';
import { ArrowUpRight, FileText, Download } from 'lucide-react';
import { ACADEMIC_DOCUMENTS } from '../data/academicWorkspaceData';

export default function DocumentsSection({ onOpenDocument }) {
  return (
    <section
      id="documents"
      style={{
        backgroundColor: '#F5EDE2',
        paddingTop: 'clamp(50px, 8vw, 80px)',
        paddingBottom: 'clamp(60px, 8vw, 100px)',
        borderBottom: '1px solid #DDD2C5',
        position: 'relative'
      }}
    >
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
                fontSize: '0.72rem',
                letterSpacing: '0.08em',
                color: '#2F5D62',
                fontWeight: 500,
                textTransform: 'uppercase'
              }}
            >
              03 // ACADEMIC WRITING & RESEARCH
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
            REPORTS & DOCUMENTS
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              color: '#756F6A',
              fontWeight: 400,
              lineHeight: 1.65,
              margin: 0
            }}
          >
            Coursework reports, research documentation, and methodological papers in high-resolution PDF format.
          </p>
        </div>

        {/* Editorial Document Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}
        >
          {ACADEMIC_DOCUMENTS.map((doc) => (
            <div
              key={doc.id}
              style={{
                backgroundColor: '#FFF9F1',
                border: '1px solid #DDD2C5',
                borderRadius: '24px',
                padding: '24px',
                boxShadow: '0 8px 24px rgba(25, 56, 59, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
                transition: 'transform 200ms ease, box-shadow 200ms ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(25, 56, 59, 0.07)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(25, 56, 59, 0.04)';
              }}
            >
              {/* Document Preview Presentation */}
              <div
                style={{
                  width: '100%',
                  height: '180px',
                  borderRadius: '20px',
                  backgroundColor: '#ECE2CF',
                  border: '1px solid #DDD2C5',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onClick={() => onOpenDocument(doc)}
              >
                {/* Paper sheet effect */}
                <div
                  style={{
                    width: '90px',
                    height: '115px',
                    backgroundColor: '#FFF9F1',
                    borderRadius: '8px',
                    border: '1px solid #DDD2C5',
                    boxShadow: '0 4px 12px rgba(41, 36, 35, 0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '12px'
                  }}
                >
                  <FileText size={28} color="#2F5D62" />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      fontWeight: 700,
                      color: '#19383B',
                      letterSpacing: '0.08em'
                    }}
                  >
                    {doc.format}
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.66rem',
                    color: '#756F6A',
                    letterSpacing: '0.06em'
                  }}
                >
                  CLICK TO PREVIEW
                </div>
              </div>

              {/* Document Meta & Title */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.06em',
                      color: '#2F5D62',
                      fontWeight: 500,
                      textTransform: 'uppercase'
                    }}
                  >
                    {doc.format} · {doc.pages ? `${doc.pages} PAGES` : 'ACADEMIC FILE'}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.70rem',
                      color: '#756F6A',
                      fontWeight: 500
                    }}
                  >
                    {doc.year}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(20px, 1.8vw, 24px)',
                    color: '#292423',
                    fontWeight: 600,
                    lineHeight: 1.25,
                    letterSpacing: '-0.01em',
                    margin: 0
                  }}
                >
                  {doc.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.94rem',
                    lineHeight: 1.6,
                    color: '#756F6A',
                    fontWeight: 400,
                    margin: 0,
                    flex: 1
                  }}
                >
                  {doc.description}
                </p>

                {/* Open Document Action */}
                <div style={{ paddingTop: '10px' }}>
                  <button
                    onClick={() => onOpenDocument(doc)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '10px 18px',
                      borderRadius: '12px',
                      backgroundColor: '#2F5D62',
                      border: 'none',
                      color: '#FFF9F1',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.80rem',
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                      cursor: 'pointer',
                      transition: 'opacity 200ms ease'
                    }}
                  >
                    <span>OPEN DOCUMENT</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
