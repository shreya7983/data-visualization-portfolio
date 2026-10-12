import React, { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DashboardImageModal({ dashboard, onClose }) {
  useEffect(() => {
    if (!dashboard) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dashboard, onClose]);

  if (!dashboard) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${dashboard.title} enlarged preview`}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(17, 17, 17, 0.68)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        animation: 'fadeIn 200ms ease forwards'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1100px',
          maxHeight: '92vh',
          backgroundColor: '#FFFFFF',
          border: '1px solid #DCDCDC',
          borderRadius: '20px',
          boxShadow: '0 24px 64px rgba(0, 0, 0, 0.18)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 28px',
            borderBottom: '1px solid #DCDCDC',
            backgroundColor: '#FFFFFF'
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                letterSpacing: '0.06em',
                color: '#666666',
                fontWeight: 600,
                textTransform: 'uppercase',
                marginBottom: '4px'
              }}
            >
              {dashboard.tool?.toUpperCase()} · {dashboard.category?.toUpperCase() || 'DATA VISUALIZATION'} · {dashboard.year}
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(20px, 2vw, 26px)',
                fontWeight: 700,
                letterSpacing: '-0.015em',
                color: '#111111',
                lineHeight: 1.2,
                margin: 0
              }}
            >
              {dashboard.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Preview (Esc)"
            title="Close (Esc)"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#F7F7F4',
              color: '#111111',
              cursor: 'pointer',
              border: '1px solid #DCDCDC',
              transition: 'all 180ms ease'
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

        {/* Modal Image Area */}
        <div
          style={{
            flex: 1,
            padding: '24px',
            overflowY: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F7F7F4'
          }}
        >
          <img
            src={dashboard.image}
            alt={dashboard.title}
            style={{
              width: '100%',
              maxHeight: '70vh',
              objectFit: 'contain',
              borderRadius: '16px',
              border: '1px solid #DCDCDC',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)'
            }}
          />
        </div>

        {/* Modal Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 28px',
            borderTop: '1px solid #DCDCDC',
            backgroundColor: '#FFFFFF'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.74rem',
              color: '#666666',
              fontWeight: 500,
              letterSpacing: '0.04em'
            }}
          >
            DATASET // {dashboard.dataset || 'Curated Data Archive'}
          </span>

          <Link
            to={dashboard.detailUrl || `/dashboards/${dashboard.id}`}
            onClick={onClose}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.80rem',
              fontWeight: 600,
              color: '#111111',
              letterSpacing: '0.04em',
              transition: 'color 180ms ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#000000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#111111';
            }}
          >
            <span>OPEN DEEP INTERACTIVE VIEW</span>
            <ArrowUpRight size={14} style={{ color: '#E8C547' }} />
          </Link>
        </div>
      </div>
    </div>
  );
}
