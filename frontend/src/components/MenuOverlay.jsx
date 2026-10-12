import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ArrowUpRight } from 'lucide-react';

export default function MenuOverlay({ isOpen, onClose }) {
  const location = useLocation();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const navLinks = [
    { title: 'HOME', path: '/', isHash: false },
    { title: 'LAB WORK', path: '/#labs', hashId: 'labs', isHash: true },
    { title: 'DASHBOARDS', path: '/#dashboards', hashId: 'dashboards', isHash: true },
    { title: 'ABOUT', path: '/#about', hashId: 'about', isHash: true },
    { title: 'CONTACT', path: 'mailto:shreya.kashyap.analytics@gmail.com', isHash: false, isExternal: true }
  ];

  const handleLinkClick = (item) => {
    onClose();
    if (item.isHash && location.pathname === '/') {
      const el = document.getElementById(item.hashId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `/#${item.hashId}`);
      }
    }
  };

  const isCurrentActive = (item) => {
    if (item.isHash) {
      return location.hash === `#${item.hashId}`;
    }
    if (item.path === '/') {
      return location.pathname === '/' && !location.hash;
    }
    return location.pathname.startsWith(item.path);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(41, 36, 35, 0.65)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        animation: 'fadeIn 200ms ease forwards'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          backgroundColor: 'var(--color-warm-beige)',
          borderBottom: '1px solid var(--color-border-subtle)',
          borderRadius: '0 0 24px 24px',
          boxShadow: '0 16px 40px rgba(25, 56, 59, 0.12)',
          padding: '24px var(--gutter) 36px',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Mobile Header Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '20px',
            borderBottom: '1px solid #DCDCDC',
            marginBottom: '28px'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.92rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                color: '#111111',
                textTransform: 'uppercase'
              }}
            >
              SHREYA <span style={{ color: '#E8C547' }}>KASHYAP</span>
            </span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.68rem',
                letterSpacing: '0.08em',
                color: '#666666',
                textTransform: 'uppercase',
                marginTop: '2px',
                fontWeight: 500
              }}
            >
              DATA VISUALIZATION
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close navigation"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              border: '1px solid #DCDCDC',
              backgroundColor: '#F7F7F4',
              color: '#111111',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          {navLinks.map((item) => {
            const active = isCurrentActive(item);
            return (
              <Link
                key={item.title}
                to={item.path}
                onClick={() => handleLinkClick(item)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 16px',
                  backgroundColor: active ? '#FBF6DF' : 'transparent',
                  borderRadius: '10px',
                  borderLeft: active ? '3px solid #E8C547' : '3px solid transparent',
                  textDecoration: 'none',
                  color: active ? '#111111' : '#666666',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.92rem',
                  fontWeight: active ? 600 : 500,
                  letterSpacing: '0.05em',
                  transition: 'all 150ms ease'
                }}
              >
                <span>{item.title}</span>
                {item.title === 'CONTACT' ? (
                  <ArrowUpRight size={16} style={{ color: '#E8C547' }} />
                ) : (
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.80rem',
                      color: active ? '#E8C547' : '#999999'
                    }}
                  >
                    →
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
