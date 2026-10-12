import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu } from 'lucide-react';
import MenuOverlay from './MenuOverlay';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const handleAnchorClick = (e, id) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `/#${id}`);
      }
    }
  };

  // Determine active nav item
  const isHome = location.pathname === '/' && (!location.hash || location.hash === '#hero');
  const isLabs = location.hash === '#labs' || location.pathname.startsWith('/assignments') || location.pathname.startsWith('/labs');
  const isDashboards = location.hash === '#dashboards' || location.pathname.startsWith('/dashboards');
  const isAbout = location.hash === '#about' || location.pathname === '/about';

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: '16px',
          left: 0,
          right: 0,
          zIndex: 100,
          transform: scrolled ? 'translateY(-120%)' : 'translateY(0)',
          opacity: scrolled ? 0 : 1,
          pointerEvents: scrolled ? 'none' : 'auto',
          transition: 'transform 320ms cubic-bezier(0.16, 1, 0.3, 1), opacity 260ms ease'
        }}
      >
        <div className="container">
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #DCDCDC',
              borderRadius: '16px',
              padding: '12px 24px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'all 250ms ease'
            }}
          >
            {/* Left: Typographic Identity Mark "SK" + Name & Subtitle */}
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none'
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: '#111111',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.80rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em'
                }}
              >
                SK
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    color: '#111111',
                    textTransform: 'uppercase',
                    lineHeight: 1.2
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
            </Link>

            {/* Center: Clean Horizontal Desktop Navigation */}
            <nav
              className="desktop-nav-container"
              aria-label="Primary Navigation"
            >
              <Link
                to="/"
                onClick={(e) => handleAnchorClick(e, 'hero')}
                className={`nav-link-item ${isHome ? 'active' : ''}`}
              >
                HOME
              </Link>

              <a
                href="#labs"
                onClick={(e) => handleAnchorClick(e, 'labs')}
                className={`nav-link-item ${isLabs ? 'active' : ''}`}
              >
                LAB WORK
              </a>

              <a
                href="#dashboards"
                onClick={(e) => handleAnchorClick(e, 'dashboards')}
                className={`nav-link-item ${isDashboards ? 'active' : ''}`}
              >
                DASHBOARDS
              </a>

              <a
                href="#about"
                onClick={(e) => handleAnchorClick(e, 'about')}
                className={`nav-link-item ${isAbout ? 'active' : ''}`}
              >
                ABOUT
              </a>
            </nav>

            {/* Right: Contact CTA & Mobile Trigger */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <a
                href="mailto:shreya.kashyap.analytics@gmail.com"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  textDecoration: 'none',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.80rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  padding: '7px 14px',
                  borderRadius: '10px',
                  backgroundColor: '#111111',
                  border: '1px solid #111111',
                  transition: 'all 200ms ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#E8C547';
                  e.currentTarget.style.color = '#111111';
                  e.currentTarget.style.borderColor = '#E8C547';
                  const arrow = e.currentTarget.querySelector('svg');
                  if (arrow) arrow.style.color = '#111111';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#111111';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = '#111111';
                  const arrow = e.currentTarget.querySelector('svg');
                  if (arrow) arrow.style.color = '#E8C547';
                }}
              >
                <span>CONTACT</span>
                <ArrowUpRight size={13} style={{ color: '#E8C547', transition: 'color 200ms ease' }} />
              </a>

              {/* Mobile Only: Hamburger Trigger */}
              <button
                className="mobile-nav-trigger"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open mobile navigation menu"
                style={{
                  padding: '6px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#111111',
                  cursor: 'pointer',
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Clean Mobile Navigation Panel */}
      <MenuOverlay
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
