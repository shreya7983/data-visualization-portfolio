import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const [ctaHovered, setCtaHovered] = useState(false);
  const [visualHovered, setVisualHovered] = useState(false);

  const scrollToDashboards = () => {
    const section = document.getElementById('featured-work');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '94vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: '130px',
        paddingBottom: '36px',
        backgroundColor: 'var(--color-warm-beige)',
        overflow: 'hidden'
      }}
    >
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        {/* Top Header Row of Hero: Dual Technical Labels */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '20px',
            paddingBottom: '28px',
            borderBottom: '1px solid var(--color-border-subtle)',
            marginBottom: '40px'
          }}
        >
          {/* Left Label */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.16em',
                color: 'var(--color-deep-crimson)',
                fontWeight: 700,
                textTransform: 'uppercase'
              }}
            >
              DATA VISUALIZATION
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.14em',
                color: 'var(--color-text-muted)',
                textTransform: 'uppercase'
              }}
            >
              PORTFOLIO / 2026
            </span>
          </div>

          {/* Right Availability Label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textAlign: 'right'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.14em',
                  color: 'var(--color-text-main)',
                  fontWeight: 600,
                  textTransform: 'uppercase'
                }}
              >
                AVAILABLE FOR
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.14em',
                  color: 'var(--color-text-muted)',
                  textTransform: 'uppercase'
                }}
              >
                DATA &amp; VISUAL PROJECTS
              </span>
            </div>
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: '#2E7D32',
                boxShadow: '0 0 0 3px rgba(46, 125, 50, 0.18)',
                flexShrink: 0
              }}
              title="Currently Available"
            />
          </div>
        </div>

        {/* Asymmetrical Editorial Main Body Grid */}
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            columnGap: '40px',
            rowGap: '44px',
            alignItems: 'center',
            marginBottom: '44px'
          }}
        >
          {/* Left Column: Monumental Typography, Supporting Text, and CTA (Cols 1-7) */}
          <div
            className="hero-main"
            style={{
              gridColumn: 'span 7',
              display: 'flex',
              flexDirection: 'column',
              gap: '28px'
            }}
          >
            {/* Monumental Editorial Heading */}
            <h1
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(42px, 5.5vw, 76px)',
                lineHeight: 1.05,
                fontWeight: 700,
                letterSpacing: '-0.02em',
                margin: 0
              }}
            >
              <span
                style={{
                  color: 'var(--color-text-main)',
                  display: 'block'
                }}
              >
                DATA
              </span>
              <span
                style={{
                  color: 'var(--color-deep-crimson)',
                  display: 'block'
                }}
              >
                VISUALIZED.
              </span>
            </h1>

            {/* Supporting Text Block */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(1.15rem, 1.8vw, 1.4rem)',
                  lineHeight: 1.45,
                  color: 'var(--color-deep-burgundy)',
                  fontWeight: 500,
                  margin: 0,
                  maxWidth: '560px'
                }}
              >
                Turning complex information into clear, meaningful visual stories.
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.92rem, 1.1vw, 1.02rem)',
                  lineHeight: 1.65,
                  color: 'var(--color-text-muted)',
                  margin: 0,
                  maxWidth: '480px'
                }}
              >
                Exploring data through dashboards, analytics and visual storytelling using Power BI, Tableau, Excel and Python.
              </p>
            </div>

            {/* CTA Group: Sophisticated Primary Text/Arrow Button + Secondary Text Link */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '36px',
                marginTop: '8px'
              }}
            >
              {/* Primary CTA */}
              <button
                type="button"
                onClick={scrollToDashboards}
                onMouseEnter={() => setCtaHovered(true)}
                onMouseLeave={() => setCtaHovered(false)}
                style={{
                  display: 'inline-flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0
                }}
                aria-label="Explore Dashboards"
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      color: 'var(--color-deep-crimson)'
                    }}
                  >
                    EXPLORE DASHBOARDS
                  </span>
                  <ArrowUpRight
                    size={16}
                    style={{
                      color: 'var(--color-deep-crimson)',
                      transform: ctaHovered ? 'translate(3px, -3px)' : 'none',
                      transition: 'transform 200ms ease'
                    }}
                  />
                </div>

                {/* Animated Crimson Arrow Line */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    marginTop: '6px'
                  }}
                >
                  <div
                    style={{
                      height: '2px',
                      backgroundColor: 'var(--color-deep-crimson)',
                      width: ctaHovered ? '100%' : '78%',
                      transition: 'width 250ms ease'
                    }}
                  />
                  <span
                    style={{
                      color: 'var(--color-deep-crimson)',
                      fontSize: '11px',
                      lineHeight: 1,
                      marginLeft: '-1px',
                      transform: ctaHovered ? 'translateX(3px)' : 'none',
                      transition: 'transform 200ms ease'
                    }}
                  >
                    ▸
                  </span>
                </div>
              </button>

              {/* Secondary Subtle Text Link */}
              <Link
                to="/about"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: 'var(--color-text-muted)',
                  textDecoration: 'none',
                  transition: 'color 200ms ease, gap 200ms ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-deep-burgundy)';
                  e.currentTarget.style.gap = '10px';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-muted)';
                  e.currentTarget.style.gap = '6px';
                }}
              >
                <span>ABOUT THE WORK</span>
                <span style={{ fontSize: '1rem', lineHeight: 1 }}>→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Abstract Data Visualization Composition (Cols 8-12) */}
          <div
            className="hero-side"
            onMouseEnter={() => setVisualHovered(true)}
            onMouseLeave={() => setVisualHovered(false)}
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'var(--color-soft-cream)',
              borderRadius: '24px',
              border: `1px solid ${visualHovered ? 'rgba(47, 93, 98, 0.35)' : 'var(--color-border-subtle)'}`,
              boxShadow: visualHovered
                ? '0 16px 36px rgba(47, 93, 98, 0.08)'
                : '0 6px 24px rgba(47, 93, 98, 0.04)',
              transform: visualHovered ? 'translateY(-2px)' : 'translateY(0)',
              transition: 'transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease',
              padding: '28px 24px 22px 24px',
              position: 'relative'
            }}
          >
            {/* Annotation Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '14px',
                borderBottom: '1px solid var(--color-border-subtle)',
                marginBottom: '16px'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.14em',
                  color: 'var(--color-deep-crimson)',
                  fontWeight: 700
                }}
              >
                01 / VISUAL SYSTEM
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.64rem',
                  letterSpacing: '0.12em',
                  color: 'var(--color-text-muted)'
                }}
              >
                DATA MODEL // V.26
              </span>
            </div>

            {/* Process Step Annotation */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.70rem',
                letterSpacing: '0.12em',
                color: 'var(--color-text-main)',
                fontWeight: 600,
                marginBottom: '18px'
              }}
            >
              <span>DATA</span>
              <span style={{ color: 'var(--color-deep-crimson)' }}>→</span>
              <span>PATTERN</span>
              <span style={{ color: 'var(--color-deep-crimson)' }}>→</span>
              <span style={{ color: 'var(--color-deep-crimson)' }}>INSIGHT</span>
            </div>

            {/* Static Abstract Data Visualization Canvas (SVG Graphic) */}
            <div
              style={{
                width: '100%',
                aspectRatio: '16 / 9',
                backgroundColor: 'var(--color-soft-cream)',
                borderRadius: '12px',
                border: '1px solid var(--color-border-subtle)',
                position: 'relative',
                overflow: 'hidden',
                marginBottom: '18px'
              }}
            >
              <svg
                viewBox="0 0 400 220"
                style={{ width: '100%', height: '100%', display: 'block' }}
                aria-hidden="true"
              >
                <defs>
                  {/* Subtle Deep Teal Gradient */}
                  <linearGradient id="heroCrimsonGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2F5D62" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#2F5D62" stopOpacity="0.0" />
                  </linearGradient>

                  {/* Subtle Muted Teal Gradient */}
                  <linearGradient id="heroGoldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#6E8585" stopOpacity="0.16" />
                    <stop offset="100%" stopColor="#6E8585" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Coordinate Grid Lines */}
                <line x1="30" y1="40" x2="380" y2="40" stroke="rgba(47, 93, 98, 0.08)" strokeDasharray="3 4" />
                <line x1="30" y1="90" x2="380" y2="90" stroke="rgba(47, 93, 98, 0.08)" strokeDasharray="3 4" />
                <line x1="30" y1="140" x2="380" y2="140" stroke="rgba(47, 93, 98, 0.08)" strokeDasharray="3 4" />
                <line x1="30" y1="185" x2="380" y2="185" stroke="var(--color-border-subtle)" />

                {/* Y-Axis Ticks & Labels */}
                <text x="14" y="44" fontFamily="var(--font-mono)" fontSize="8" fill="var(--color-text-muted)">1.0</text>
                <text x="14" y="94" fontFamily="var(--font-mono)" fontSize="8" fill="var(--color-text-muted)">0.5</text>
                <text x="14" y="144" fontFamily="var(--font-mono)" fontSize="8" fill="var(--color-text-muted)">0.2</text>
                <text x="14" y="188" fontFamily="var(--font-mono)" fontSize="8" fill="var(--color-text-muted)">0.0</text>

                {/* Vertical Axis Reference Marks */}
                <line x1="120" y1="40" x2="120" y2="185" stroke="rgba(47, 93, 98, 0.05)" />
                <line x1="210" y1="40" x2="210" y2="185" stroke="rgba(47, 93, 98, 0.05)" />
                <line x1="300" y1="40" x2="300" y2="185" stroke="rgba(47, 93, 98, 0.05)" />

                {/* Secondary Warm Gold Trend Curve */}
                <path
                  d="M 30 160 Q 110 145, 180 130 T 290 95 T 380 70 L 380 185 L 30 185 Z"
                  fill="url(#heroGoldGrad)"
                />
                <path
                  d="M 30 160 Q 110 145, 180 130 T 290 95 T 380 70"
                  fill="none"
                  stroke="var(--color-warm-gold)"
                  strokeWidth="1.2"
                  strokeDasharray="4 3"
                />

                {/* Primary Deep Crimson Hero Curve */}
                <path
                  d="M 30 170 Q 90 155, 140 100 T 240 50 T 320 85 T 380 60 L 380 185 L 30 185 Z"
                  fill="url(#heroCrimsonGrad)"
                />
                <path
                  d="M 30 170 Q 90 155, 140 100 T 240 50 T 320 85 T 380 60"
                  fill="none"
                  stroke="var(--color-deep-crimson)"
                  strokeWidth="2.2"
                />

                {/* Peak Anomaly Marker Drop Line */}
                <line x1="240" y1="50" x2="240" y2="185" stroke="var(--color-deep-crimson)" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />

                {/* Peak Point & Label */}
                <circle cx="240" cy="50" r="4.5" fill="var(--color-deep-crimson)" stroke="var(--color-soft-cream)" strokeWidth="1.5" />
                <rect x="248" y="38" width="68" height="18" rx="2" fill="var(--color-deep-burgundy)" />
                <text x="254" y="50" fontFamily="var(--font-mono)" fontSize="8" fill="var(--color-soft-cream)" fontWeight="600">
                  PEAK 94.2%
                </text>

                {/* Secondary Data Points */}
                <circle cx="140" cy="100" r="3" fill="var(--color-warm-gold)" />
                <circle cx="320" cy="85" r="3" fill="var(--color-deep-burgundy)" />

                {/* X-Axis Labels */}
                <text x="40" y="202" fontFamily="var(--font-mono)" fontSize="8" fill="var(--color-text-muted)">Q1 // T₀</text>
                <text x="130" y="202" fontFamily="var(--font-mono)" fontSize="8" fill="var(--color-text-muted)">Q2 // T₁</text>
                <text x="225" y="202" fontFamily="var(--font-mono)" fontSize="8" fill="var(--color-text-muted)">Q3 // T₂</text>
                <text x="315" y="202" fontFamily="var(--font-mono)" fontSize="8" fill="var(--color-text-muted)">Q4 // T₃</text>
              </svg>
            </div>

            {/* Mini Tool Proportion / Indicator Bars */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '10px',
                paddingTop: '6px',
                marginBottom: '14px'
              }}
            >
              {[
                { name: 'POWER BI', val: '88%', bar: '88%' },
                { name: 'TABLEAU', val: '82%', bar: '82%' },
                { name: 'EXCEL', val: '94%', bar: '94%' },
                { name: 'PYTHON', val: '78%', bar: '78%' }
              ].map((item) => (
                <div key={item.name} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.62rem' }}>
                    <span style={{ color: 'var(--color-deep-burgundy)', fontWeight: 600 }}>{item.name}</span>
                    <span style={{ color: 'var(--color-text-muted)' }}>{item.val}</span>
                  </div>
                  <div style={{ height: '3px', backgroundColor: 'rgba(47, 93, 98, 0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: item.bar, height: '100%', backgroundColor: 'var(--color-deep-crimson)' }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Coordinate Annotation */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '10px',
                borderTop: '1px solid var(--color-border-subtle)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.66rem',
                color: 'var(--color-text-muted)'
              }}
            >
              <span>LAT 28.61° N // LON 77.20° E</span>
              <span style={{ color: 'var(--color-deep-crimson)', fontWeight: 600 }}>σ = 1.48 · R² = 0.982</span>
            </div>
          </div>
        </div>

        {/* Bottom of Hero: Editorial Transition Strip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '20px',
            borderTop: '1px solid var(--color-border-subtle)'
          }}
        >
          {/* Left: SELECTED WORK */}
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              letterSpacing: '0.16em',
              color: 'var(--color-deep-burgundy)',
              fontWeight: 700,
              textTransform: 'uppercase'
            }}
          >
            SELECTED WORK
          </span>

          {/* Right: SCROLL TO EXPLORE ↓ */}
          <button
            type="button"
            onClick={scrollToDashboards}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
              color: 'var(--color-deep-crimson)',
              fontWeight: 700,
              textTransform: 'uppercase',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '4px 0',
              transition: 'gap 200ms ease, color 200ms ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--color-deep-burgundy)';
              e.currentTarget.style.gap = '10px';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-deep-crimson)';
              e.currentTarget.style.gap = '6px';
            }}
            aria-label="Scroll to explore dashboards"
          >
            <span>SCROLL TO EXPLORE</span>
            <span style={{ fontSize: '0.9rem', lineHeight: 1 }}>↓</span>
          </button>
        </div>
      </div>
    </section>
  );
}
