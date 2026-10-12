import React, { useEffect } from 'react';
import { X, ArrowUpRight, Download, FileText, CheckCircle2, BookOpen } from 'lucide-react';

export default function DocumentViewerModal({ document: doc, onClose }) {
  useEffect(() => {
    if (!doc) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollBarWidth}px`;

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [doc, onClose]);

  if (!doc) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="doc-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: 'rgba(41, 36, 35, 0.65)',
        backdropFilter: 'blur(10px)',
        animation: 'fadeIn 200ms ease'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '920px',
          maxHeight: '90vh',
          backgroundColor: '#FFF9F1',
          border: '1px solid #DDD2C5',
          borderRadius: '24px',
          boxShadow: '0 24px 60px rgba(25, 56, 59, 0.18)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'scaleUp 240ms cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header */}
        <div
          style={{
            padding: '20px 28px',
            borderBottom: '1px solid #DDD2C5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            backgroundColor: '#FFF9F1'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                backgroundColor: 'rgba(47, 93, 98, 0.10)',
                color: '#2F5D62',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <FileText size={20} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.74rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#2F5D62',
                    fontWeight: 500
                  }}
                >
                  {doc.category || 'ACADEMIC REPORT'} // {doc.format || 'PDF'}
                </span>
                {doc.pages && (
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.72rem',
                      padding: '2px 8px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(41, 36, 35, 0.06)',
                      color: '#756F6A',
                      fontWeight: 500
                    }}
                  >
                    {doc.pages} PAGES
                  </span>
                )}
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.72rem',
                    color: '#756F6A',
                    fontWeight: 500
                  }}
                >
                  {doc.year}
                </span>
              </div>
              <h3
                id="doc-modal-title"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(20px, 2vw, 24px)',
                  fontWeight: 600,
                  letterSpacing: '-0.015em',
                  color: '#292423',
                  margin: 0,
                  lineHeight: 1.25
                }}
              >
                {doc.title}
              </h3>
            </div>
          </div>

          {/* Action Toolbar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a
              href={doc.file}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: '12px',
                backgroundColor: '#2F5D62',
                color: '#FFF9F1',
                textDecoration: 'none',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                transition: 'opacity 200ms ease'
              }}
            >
              <span>OPEN</span>
              <ArrowUpRight size={14} />
            </a>

            <a
              href={doc.file}
              download
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                borderRadius: '12px',
                backgroundColor: 'transparent',
                border: '1px solid #DDD2C5',
                color: '#292423',
                textDecoration: 'none',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                fontWeight: 600,
                transition: 'background-color 200ms ease'
              }}
            >
              <Download size={14} />
              <span>DOWNLOAD</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close document viewer"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '12px',
                border: '1px solid #DDD2C5',
                backgroundColor: 'transparent',
                color: '#292423',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background-color 200ms ease'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body / Embedded Preview */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '24px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          {/* Abstract / Overview */}
          <div
            style={{
              padding: '16px 20px',
              borderRadius: '16px',
              backgroundColor: 'rgba(227, 238, 238, 0.65)',
              border: '1px solid #DDD2C5'
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.74rem',
                letterSpacing: '0.06em',
                color: '#2F5D62',
                fontWeight: 600,
                marginBottom: '6px',
                textTransform: 'uppercase'
              }}
            >
              Document Abstract & Context
            </div>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.94rem',
                lineHeight: 1.6,
                color: '#292423',
                fontWeight: 400,
                margin: 0
              }}
            >
              {doc.description || doc.subtitle}
            </p>

            {doc.topics && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
                {doc.topics.map((t, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.02em',
                      padding: '3px 10px',
                      borderRadius: '8px',
                      backgroundColor: '#FFF9F1',
                      border: '1px solid #DDD2C5',
                      color: '#19383B',
                      fontWeight: 500,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                  >
                    <CheckCircle2 size={11} color="#2F5D62" />
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Document Preview Frame */}
          <div
            style={{
              borderRadius: '18px',
              border: '1px solid #DDD2C5',
              overflow: 'hidden',
              backgroundColor: '#FFFFFF',
              boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.04)',
              minHeight: '440px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div
              style={{
                padding: '10px 18px',
                backgroundColor: '#F5EDE2',
                borderBottom: '1px solid #DDD2C5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.74rem',
                fontWeight: 500,
                color: '#756F6A'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <BookOpen size={13} color="#2F5D62" />
                <span>PREVIEW: {doc.file.split('/').pop()}</span>
              </div>
              <span>{doc.format || 'PDF'} VIEWER</span>
            </div>

            {/* Embedded Iframe */}
            <iframe
              src={`${doc.file}#toolbar=0&navpanes=0`}
              title={doc.title}
              style={{
                width: '100%',
                height: '480px',
                border: 'none',
                backgroundColor: '#FAFAFA'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
