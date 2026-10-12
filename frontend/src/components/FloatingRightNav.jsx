import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, LayoutGrid, FileText, Info, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'hero', label: 'HOME', icon: Home },
  { id: 'labs', label: 'LAB WORK', icon: FileText },
  { id: 'dashboards', label: 'DASHBOARDS', icon: LayoutGrid },
  { id: 'about', label: 'ABOUT', icon: Info },
  { id: 'contact', label: 'CONTACT', icon: ArrowUpRight, isExternal: true, href: 'mailto:shreya.kashyap.analytics@gmail.com' }
];

export default function FloatingRightNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredId, setHoveredId] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // 1. Visibility toggle: appear when scrolling down (> 60px)
      const scrollY = window.scrollY;
      if (scrollY > 60) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // 2. Scroll-spy detection on homepage
      if (location.pathname === '/') {
        if (scrollY < 180) {
          setActiveSection('hero');
          return;
        }

        if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 90) {
          setActiveSection('about');
          return;
        }

        const viewportMiddle = scrollY + window.innerHeight * 0.38;

        for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
          const item = NAV_ITEMS[i];
          if (item.isExternal) continue;
          const element = document.getElementById(item.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            const topAbs = rect.top + scrollY;
            if (topAbs <= viewportMiddle) {
              setActiveSection(item.id);
              break;
            }
          }
        }
      } else {
        if (location.pathname.startsWith('/dashboards')) {
          setActiveSection('dashboards');
        } else if (location.pathname.startsWith('/assignments') || location.pathname.startsWith('/labs')) {
          setActiveSection('labs');
        } else if (location.pathname === '/about') {
          setActiveSection('about');
        } else {
          setActiveSection('hero');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (e, item) => {
    if (item.isExternal) return;
    e.preventDefault();

    if (location.pathname === '/') {
      if (item.id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', '/');
        setActiveSection('hero');
      } else {
        const element = document.getElementById(item.id);
        if (element) {
          const yOffset = -30;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
          window.history.pushState(null, '', `/#${item.id}`);
          setActiveSection(item.id);
        }
      }
    } else {
      if (item.id === 'hero') {
        navigate('/');
      } else {
        navigate(`/#${item.id}`);
      }
    }
  };

  return (
    <aside
      aria-label="Floating Vertical Navigation"
      className="floating-right-nav"
      style={{
        position: 'fixed',
        right: '24px',
        top: '50%',
        transform: isVisible ? 'translate(0, -50%)' : 'translate(14px, -50%)',
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
        zIndex: 95,
        backgroundColor: '#FFFFFF',
        border: '1px solid #DCDCDC',
        borderRadius: '16px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
        padding: '8px 6px',
        transition: 'opacity 300ms cubic-bezier(0.16, 1, 0.3, 1), transform 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px'
      }}
    >
      <nav
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px'
        }}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = !item.isExternal && activeSection === item.id;
          const isHovered = hoveredId === item.id;
          const Icon = item.icon;

          if (item.isExternal) {
            return (
              <a
                key={item.id}
                href={item.href}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                aria-label={item.label}
                title={item.label}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  color: isHovered ? '#111111' : '#666666',
                  backgroundColor: isHovered ? '#F7F7F4' : 'transparent',
                  transition: 'all 200ms ease',
                  textDecoration: 'none'
                }}
              >
                <Icon size={17} strokeWidth={2} />

                {/* Hover Tooltip on Left */}
                {isHovered && (
                  <span
                    style={{
                      position: 'absolute',
                      right: '46px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      backgroundColor: '#111111',
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.70rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      whiteSpace: 'nowrap',
                      pointerEvents: 'none',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                      animation: 'fadeIn 150ms ease'
                    }}
                  >
                    {item.label} ↗
                  </span>
                )}
              </a>
            );
          }

          return (
            <button
              key={item.id}
              onClick={(e) => handleNavClick(e, item)}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              aria-label={item.label}
              title={item.label}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                background: isActive ? '#F7F7F4' : (isHovered ? '#F7F7F4' : 'none'),
                border: 'none',
                cursor: 'pointer',
                color: isActive ? '#E8C547' : (isHovered ? '#111111' : '#666666'),
                transition: 'all 200ms ease',
                outline: 'none'
              }}
            >
              <Icon size={17} strokeWidth={isActive ? 2.3 : 1.9} />

              {/* Active Indicator: Warm Yellow Dot */}
              {isActive && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: '4px',
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: '#E8C547',
                    boxShadow: '0 0 4px rgba(232, 197, 71, 0.6)'
                  }}
                  aria-hidden="true"
                />
              )}

              {/* Hover Tooltip on Left */}
              {isHovered && (
                <span
                  style={{
                    position: 'absolute',
                    right: '46px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: '#111111',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.70rem',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    whiteSpace: 'nowrap',
                    pointerEvents: 'none',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    animation: 'fadeIn 150ms ease'
                  }}
                >
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
