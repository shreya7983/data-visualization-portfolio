import React, { useEffect } from 'react';
import { X, ArrowUpRight, Download, FileText, CheckCircle2 } from 'lucide-react';

export default function AssignmentDetailModal({ assignment, onClose }) {
  useEffect(() => {
    if (!assignment) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = document.body.style.overflow;
    const prevPadding = document.body.style.paddingRight;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollBarWidth}px`;

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPadding;
    };
  }, [assignment, onClose]);

  if (!assignment) return null;

  const isPdf = assignment.file && assignment.file.toLowerCase().endsWith('.pdf');

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="assignment-modal-title"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        backgroundColor: 'rgba(17, 17, 17, 0.65)',
        backdropFilter: 'blur(8px)',
        animation: 'fadeIn 200ms ease'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '920px',
          maxHeight: '90vh',
          backgroundColor: '#FFFFFF',
          border: '1px solid #DCDCDC',
          borderRadius: '20px',
          boxShadow: '0 24px 64px rgba(0, 0, 0, 0.18)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'scaleUp 240ms cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Header Bar */}
        <div
          style={{
            padding: '24px 32px',
            borderBottom: '1px solid #DCDCDC',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '16px',
            backgroundColor: '#FFFFFF'
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 10px',
                borderRadius: '6px',
                backgroundColor: '#F7F7F4',
                border: '1px solid #DCDCDC',
                marginBottom: '10px'
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
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
                ASSIGNMENT <span style={{ color: '#E8C547' }}>{assignment.num || '01'}</span>
              </span>
            </div>

            <h2
              id="assignment-modal-title"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(22px, 2.5vw, 28px)',
                fontWeight: 700,
                color: '#111111',
                lineHeight: 1.2,
                margin: 0
              }}
            >
              {assignment.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal (Esc)"
            title="Close (Esc)"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              border: '1px solid #DCDCDC',
              backgroundColor: '#F7F7F4',
              color: '#111111',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 180ms ease',
              flexShrink: 0
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#111111';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#F7F7F4';
              e.currentTarget.style.color = '#111111';
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Academic Dossier Content */}
        <div
          style={{
            padding: '32px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '28px',
            backgroundColor: '#FFFFFF'
          }}
        >
          {/* Metadata Grid: Assignment / Teacher / Tools */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
              padding: '20px',
              borderRadius: '14px',
              backgroundColor: '#F7F7F4',
              border: '1px solid #DCDCDC'
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#666666',
                  fontWeight: 600,
                  marginBottom: '6px'
                }}
              >
                ASSIGNMENT
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: '#111111'
                }}
              >
                {assignment.assignment || 'Data Visualization'}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#666666',
                  fontWeight: 600,
                  marginBottom: '6px'
                }}
              >
                TEACHER
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: '#111111'
                }}
              >
                {assignment.teacher || 'Course Instructor // Data Visualization'}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#666666',
                  fontWeight: 600,
                  marginBottom: '6px'
                }}
              >
                TOOLS
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: '#111111'
                }}
              >
                {assignment.tools || assignment.tool || 'Excel / Power BI / Python'}
              </div>
            </div>
          </div>

          {/* TASK */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#111111',
                fontWeight: 700,
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span style={{ width: '4px', height: '14px', backgroundColor: '#E8C547', borderRadius: '2px' }} />
              TASK
            </div>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.94rem',
                lineHeight: 1.65,
                color: '#444444',
                margin: 0
              }}
            >
              {assignment.task || assignment.description}
            </p>
          </div>

          {/* MY APPROACH */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#111111',
                fontWeight: 700,
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span style={{ width: '4px', height: '14px', backgroundColor: '#E8C547', borderRadius: '2px' }} />
              MY APPROACH
            </div>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.94rem',
                lineHeight: 1.65,
                color: '#444444',
                margin: '0 0 16px 0'
              }}
            >
              {assignment.myApproach || assignment.description}
            </p>

            {/* Highlights bullets if available */}
            {assignment.highlights && assignment.highlights.length > 0 && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  paddingLeft: '6px'
                }}
              >
                {assignment.highlights.map((h, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      color: '#555555',
                      lineHeight: 1.5
                    }}
                  >
                    <CheckCircle2 size={15} style={{ color: '#111111', flexShrink: 0, marginTop: '3px' }} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* MY WORK — INTERACTIVE FILE / PREVIEW EMBED */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#111111',
                fontWeight: 700,
                marginBottom: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '4px', height: '14px', backgroundColor: '#E8C547', borderRadius: '2px' }} />
                <span>MY WORK</span>
              </div>

              {assignment.file && (
                <div style={{ display: 'flex', gap: '10px' }}>
                  <a
                    href={assignment.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '7px 14px',
                      borderRadius: '8px',
                      backgroundColor: '#111111',
                      color: '#FFFFFF',
                      textDecoration: 'none',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      letterSpacing: '0.03em',
                      transition: 'all 180ms ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#E8C547';
                      e.currentTarget.style.color = '#111111';
                      const arrow = e.currentTarget.querySelector('svg');
                      if (arrow) arrow.style.color = '#111111';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#111111';
                      e.currentTarget.style.color = '#FFFFFF';
                      const arrow = e.currentTarget.querySelector('svg');
                      if (arrow) arrow.style.color = '#E8C547';
                    }}
                  >
                    <span>OPEN FILE</span>
                    <ArrowUpRight size={13} style={{ color: '#E8C547', transition: 'color 180ms ease' }} />
                  </a>

                  <a
                    href={assignment.file}
                    download
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '7px 14px',
                      borderRadius: '8px',
                      backgroundColor: '#F7F7F4',
                      border: '1px solid #DCDCDC',
                      color: '#111111',
                      textDecoration: 'none',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      letterSpacing: '0.03em',
                      transition: 'all 180ms ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#EAEAEA';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#F7F7F4';
                    }}
                  >
                    <Download size={13} />
                    <span>DOWNLOAD</span>
                  </a>
                </div>
              )}
            </div>

            {/* Preview Render: PDF iframe or high-res visual preview */}
            <div
              style={{
                width: '100%',
                borderRadius: '14px',
                border: '1px solid #DCDCDC',
                overflow: 'hidden',
                backgroundColor: '#F7F7F4',
                position: 'relative'
              }}
            >
              {isPdf ? (
                <iframe
                  src={`${assignment.file}#view=FitH`}
                  title={`${assignment.title} Document Preview`}
                  style={{
                    width: '100%',
                    height: '420px',
                    border: 'none',
                    display: 'block',
                    backgroundColor: '#FFFFFF'
                  }}
                />
              ) : assignment.preview ? (
                <div style={{ padding: '16px', display: 'flex', justifyContent: 'center' }}>
                  <img
                    src={assignment.preview}
                    alt={assignment.title}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '420px',
                      objectFit: 'contain',
                      borderRadius: '10px'
                    }}
                  />
                </div>
              ) : (
                <div
                  style={{
                    padding: '60px 20px',
                    textAlign: 'center',
                    fontFamily: 'var(--font-sans)',
                    color: '#666666'
                  }}
                >
                  <FileText size={36} style={{ marginBottom: '12px', color: '#111111' }} />
                  <div>Document available for download via the link above.</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
