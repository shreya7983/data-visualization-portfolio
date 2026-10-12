import React from 'react';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#111111',
        color: '#FFFFFF',
        borderTop: '1px solid #222222',
        padding: '56px 0 40px'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '28px'
          }}
        >
          {/* Identity */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(20px, 2.2vw, 26px)',
                letterSpacing: '0.04em',
                fontWeight: 700,
                color: '#FFFFFF',
                textTransform: 'uppercase'
              }}
            >
              SHREYA <span style={{ color: '#E8C547' }}>KASHYAP</span>
            </div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.70rem',
                letterSpacing: '0.08em',
                color: '#999999',
                fontWeight: 500,
                textTransform: 'uppercase',
                marginTop: '4px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>DATA VISUALIZATION</span>
              <span style={{ color: '#E8C547' }}>//</span>
              <span>ACADEMIC + PRACTICAL WORK</span>
            </div>
          </div>

          {/* Links & Copyright */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '24px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.82rem',
              fontWeight: 500,
              letterSpacing: '0.03em'
            }}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#CCCCCC', textDecoration: 'none', transition: 'color 180ms ease' }}
              onMouseEnter={(e) => e.target.style.color = '#E8C547'}
              onMouseLeave={(e) => e.target.style.color = '#CCCCCC'}
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#CCCCCC', textDecoration: 'none', transition: 'color 180ms ease' }}
              onMouseEnter={(e) => e.target.style.color = '#E8C547'}
              onMouseLeave={(e) => e.target.style.color = '#CCCCCC'}
            >
              LinkedIn
            </a>
            <a
              href="mailto:shreya.kashyap.analytics@gmail.com"
              style={{ color: '#CCCCCC', textDecoration: 'none', transition: 'color 180ms ease' }}
              onMouseEnter={(e) => e.target.style.color = '#E8C547'}
              onMouseLeave={(e) => e.target.style.color = '#CCCCCC'}
            >
              Email
            </a>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.76rem',
                color: '#888888',
                fontWeight: 500,
                paddingLeft: '12px',
                borderLeft: '1px solid #333333'
              }}
            >
              © 2026
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
