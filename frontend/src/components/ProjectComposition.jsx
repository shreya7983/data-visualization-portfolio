import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectComposition({ dashboard, index = 0, total = 6 }) {
  const [isHovered, setIsHovered] = useState(false);

  const {
    id,
    title,
    tool,
    category,
    year,
    image,
    description,
    objective,
    dataset
  } = dashboard;

  const projectNum = String(index + 1).padStart(2, '0');
  const totalNum = String(total).padStart(2, '0');

  // Alternating asymmetrical layout variants:
  // 0: Split Left (Info left, Large Visual right)
  // 1: Split Right (Large Visual left, Info right)
  // 2: Panoramic Center (Headline top, Grand Visual center, Metadata below)
  // 3: Asymmetric Diagonal (Title top-left, Visual offset right, Metadata bottom-left)
  const layoutVariant = index % 4;

  return (
    <article
      className="project-canvas-stage"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        padding: '110px 0',
        borderBottom: index < total - 1 ? '1px solid var(--color-border-subtle)' : 'none'
      }}
    >
      <Link
        to={`/dashboards/${id}`}
        style={{
          textDecoration: 'none',
          color: 'inherit',
          display: 'block'
        }}
      >
        {/* ========================================================
            LAYOUT 0: SPLIT LEFT (Info 32%, Large Visual 68%)
            ======================================================== */}
        {layoutVariant === 0 && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '48px',
              alignItems: 'center'
            }}
            className="composition-grid"
          >
            {/* Left Column: Floating Project Information (Cols 1-4) */}
            <div
              style={{
                gridColumn: 'span 4',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
              className="composition-info"
            >
              {/* Project Index */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    letterSpacing: '0.14em',
                    color: 'var(--color-deep-crimson)',
                    fontWeight: 600
                  }}
                >
                  PROJECT {projectNum}
                </span>
                <span style={{ color: 'var(--color-border-subtle)', fontFamily: 'var(--font-mono)' }}>/</span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    letterSpacing: '0.10em',
                    color: 'var(--color-deep-burgundy-light)'
                  }}
                >
                  {totalNum}
                </span>
              </div>

              {/* Title in Inter */}
              <h3
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(22px, 2.5vw, 32px)',
                  fontWeight: 600,
                  color: isHovered ? 'var(--color-deep-crimson)' : 'var(--color-deep-burgundy)',
                  lineHeight: 1.2,
                  letterSpacing: '-0.015em',
                  margin: 0,
                  transition: 'color 300ms ease'
                }}
              >
                {title}
              </h3>

              {/* Analytical Purpose / Premise */}
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.08rem',
                  lineHeight: 1.68,
                  color: 'var(--color-text-muted)',
                  margin: 0
                }}
              >
                {description}
              </p>

              {/* Minimal Metadata Row */}
              <div
                style={{
                  paddingTop: '16px',
                  borderTop: '1px solid var(--color-border-subtle)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '16px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.08em',
                  color: 'var(--color-deep-burgundy-light)'
                }}
              >
                <span style={{ color: 'var(--color-deep-burgundy)', fontWeight: 600 }}>{tool}</span>
                <span>•</span>
                <span>{category}</span>
                <span>•</span>
                <span>{year}</span>
              </div>

              {/* Mobile Action Link */}
              <div
                className="mobile-explore-link"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  color: 'var(--color-deep-crimson)',
                  marginTop: '8px'
                }}
              >
                EXPLORE THE DATA <ArrowUpRight size={14} />
              </div>
            </div>

            {/* Right Column: Dominant Dashboard Visual (Cols 5-12, ~68% width) */}
            <div
              data-cursor="EXPLORE"
              style={{
                gridColumn: 'span 8',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '20px',
                transition: 'transform 450ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 450ms ease',
                transform: isHovered ? 'scale(1.018) translateY(-4px)' : 'scale(1) translateY(0)',
                boxShadow: isHovered
                  ? '0 24px 60px -12px rgba(47, 93, 98, 0.16)'
                  : '0 10px 30px -8px rgba(47, 93, 98, 0.06)'
              }}
              className="composition-visual"
            >
              <img
                src={image}
                alt={title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '620px',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>
          </div>
        )}

        {/* ========================================================
            LAYOUT 1: SPLIT RIGHT (Large Visual 68% left, Info 32% right)
            ======================================================== */}
        {layoutVariant === 1 && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '48px',
              alignItems: 'center'
            }}
            className="composition-grid layout-split-right"
          >
            {/* Left Column: Dominant Dashboard Visual (Cols 1-8, ~68% width) */}
            <div
              data-cursor="EXPLORE"
              style={{
                gridColumn: 'span 8',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '20px',
                transition: 'transform 450ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 450ms ease',
                transform: isHovered ? 'scale(1.018) translateY(-4px)' : 'scale(1) translateY(0)',
                boxShadow: isHovered
                  ? '0 24px 60px -12px rgba(47, 93, 98, 0.16)'
                  : '0 10px 30px -8px rgba(47, 93, 98, 0.06)'
              }}
              className="composition-visual"
            >
              <img
                src={image}
                alt={title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '620px',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>

            {/* Right Column: Floating Project Information (Cols 9-12) */}
            <div
              style={{
                gridColumn: 'span 4',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
              className="composition-info"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    letterSpacing: '0.14em',
                    color: 'var(--color-deep-crimson)',
                    fontWeight: 600
                  }}
                >
                  PROJECT {projectNum}
                </span>
                <span style={{ color: 'var(--color-border-subtle)', fontFamily: 'var(--font-mono)' }}>/</span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    letterSpacing: '0.10em',
                    color: 'var(--color-deep-burgundy-light)'
                  }}
                >
                  {totalNum}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(22px, 2.5vw, 32px)',
                  fontWeight: 600,
                  color: isHovered ? 'var(--color-deep-crimson)' : 'var(--color-deep-burgundy)',
                  lineHeight: 1.2,
                  letterSpacing: '-0.015em',
                  margin: 0,
                  transition: 'color 300ms ease'
                }}
              >
                {title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.08rem',
                  lineHeight: 1.68,
                  color: 'var(--color-text-muted)',
                  margin: 0
                }}
              >
                {description}
              </p>

              <div
                style={{
                  paddingTop: '16px',
                  borderTop: '1px solid var(--color-border-subtle)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '16px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.08em',
                  color: 'var(--color-deep-burgundy-light)'
                }}
              >
                <span style={{ color: 'var(--color-deep-burgundy)', fontWeight: 600 }}>{tool}</span>
                <span>•</span>
                <span>{category}</span>
                <span>•</span>
                <span>{year}</span>
              </div>

              <div
                className="mobile-explore-link"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  color: 'var(--color-deep-crimson)',
                  marginTop: '8px'
                }}
              >
                EXPLORE THE DATA <ArrowUpRight size={14} />
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            LAYOUT 2: PANORAMIC CENTER (Grand Visual 82% width, metadata below)
            ======================================================== */}
        {layoutVariant === 2 && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '28px',
              maxWidth: '1180px',
              margin: '0 auto'
            }}
            className="composition-panoramic"
          >
            {/* Header Above */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.80rem',
                    letterSpacing: '0.14em',
                    color: 'var(--color-deep-crimson)',
                    fontWeight: 600,
                    display: 'block',
                    marginBottom: '6px'
                  }}
                >
                  PROJECT {projectNum} // {category.toUpperCase()}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(22px, 2.5vw, 32px)',
                    fontWeight: 600,
                    color: isHovered ? 'var(--color-deep-crimson)' : 'var(--color-deep-burgundy)',
                    lineHeight: 1.2,
                    letterSpacing: '-0.015em',
                    margin: 0,
                    transition: 'color 300ms ease'
                  }}
                >
                  {title}
                </h3>
              </div>

              <p
                style={{
                  maxWidth: '480px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.05rem',
                  lineHeight: 1.6,
                  color: 'var(--color-text-muted)',
                  margin: 0
                }}
              >
                {description}
              </p>
            </div>

            {/* Dominant Panoramic Dashboard Visual */}
            <div
              data-cursor="EXPLORE"
              style={{
                width: '100%',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '20px',
                transition: 'transform 450ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 450ms ease',
                transform: isHovered ? 'scale(1.015) translateY(-4px)' : 'scale(1) translateY(0)',
                boxShadow: isHovered
                  ? '0 28px 70px -14px rgba(47, 93, 98, 0.18)'
                  : '0 12px 34px -8px rgba(47, 93, 98, 0.07)'
              }}
              className="composition-visual"
            >
              <img
                src={image}
                alt={title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '660px',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>

            {/* Minimal Editorial Metadata Bar Below */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px',
                paddingTop: '16px',
                borderTop: '1px solid var(--color-border-subtle)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.76rem',
                color: 'var(--color-deep-burgundy-light)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <span>TOOL: <strong style={{ color: 'var(--color-deep-burgundy)' }}>{tool}</strong></span>
                <span>•</span>
                <span>YEAR: <strong style={{ color: 'var(--color-deep-burgundy)' }}>{year}</strong></span>
                <span>•</span>
                <span>DATASET: <strong style={{ color: 'var(--color-deep-burgundy)' }}>{dataset}</strong></span>
              </div>

              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  color: isHovered ? 'var(--color-deep-crimson)' : 'var(--color-deep-burgundy)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'color 200ms ease'
                }}
              >
                EXPLORE PROJECT <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        )}

        {/* ========================================================
            LAYOUT 3: ASYMMETRIC DIAGONAL (Framed & offset)
            ======================================================== */}
        {layoutVariant === 3 && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '40px',
              alignItems: 'end'
            }}
            className="composition-grid layout-asymmetric-diagonal"
          >
            {/* Top-Left Framing Block */}
            <div
              style={{
                gridColumn: 'span 5',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                paddingBottom: '20px'
              }}
              className="composition-info"
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    letterSpacing: '0.14em',
                    color: 'var(--color-deep-crimson)',
                    fontWeight: 600,
                    display: 'block',
                    marginBottom: '8px'
                  }}
                >
                  PROJECT {projectNum} // {tool.toUpperCase()}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(22px, 2.5vw, 32px)',
                    fontWeight: 600,
                    color: isHovered ? 'var(--color-deep-crimson)' : 'var(--color-deep-burgundy)',
                    lineHeight: 1.2,
                    letterSpacing: '-0.015em',
                    margin: 0,
                    transition: 'color 300ms ease'
                  }}
                >
                  {title}
                </h3>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.08rem',
                  lineHeight: 1.68,
                  color: 'var(--color-text-muted)',
                  margin: 0
                }}
              >
                {description}
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.08em',
                  color: 'var(--color-deep-burgundy-light)',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--color-border-subtle)'
                }}
              >
                <span style={{ color: 'var(--color-deep-burgundy)', fontWeight: 600 }}>{category}</span>
                <span>•</span>
                <span>{year}</span>
                <span>•</span>
                <span>{dataset}</span>
              </div>
            </div>

            {/* Large Visual Shifted Right */}
            <div
              data-cursor="EXPLORE"
              style={{
                gridColumn: 'span 7',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '20px',
                transition: 'transform 450ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 450ms ease',
                transform: isHovered ? 'scale(1.018) translateY(-4px)' : 'scale(1) translateY(0)',
                boxShadow: isHovered
                  ? '0 24px 60px -12px rgba(47, 93, 98, 0.16)'
                  : '0 10px 30px -8px rgba(47, 93, 98, 0.06)'
              }}
              className="composition-visual"
            >
              <img
                src={image}
                alt={title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '620px',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>
          </div>
        )}
      </Link>
    </article>
  );
}
