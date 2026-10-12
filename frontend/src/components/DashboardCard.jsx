import React, { useState } from 'react';
import { ArrowUpRight, Maximize2 } from 'lucide-react';

export default function DashboardCard({
  dashboard,
  index = 0,
  onOpenImage,
  onOpenDetail
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  if (!dashboard) return null;

  const handleCardClick = (e) => {
    // If user clicked the VIEW MORE button, don't trigger image expansion
    if (e.target.closest('button[data-action="view-more"]')) {
      return;
    }
    if (onOpenImage) {
      onOpenImage(dashboard);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (onOpenImage) onOpenImage(dashboard);
    }
  };

  return (
    <article
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsBtnHovered(false);
      }}
      tabIndex={0}
      role="region"
      aria-label={`${dashboard.title} project card`}
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-soft-cream)',
        borderRadius: '24px',
        border: `1px solid ${isHovered ? 'rgba(47, 93, 98, 0.35)' : 'var(--color-border-subtle)'}`,
        boxShadow: isHovered
          ? '0 14px 34px rgba(47, 93, 98, 0.08)'
          : '0 4px 20px rgba(47, 93, 98, 0.04)',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'transform 300ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 300ms ease, border-color 300ms ease',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        cursor: 'pointer',
        outline: 'none'
      }}
    >
      {/* 1. Large Dashboard Preview Area at the Top */}
      <div
        data-cursor="EXPAND"
        title="Click to expand image preview"
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 10',
          backgroundColor: 'var(--color-warm-beige)',
          borderTopLeftRadius: '24px',
          borderTopRightRadius: '24px',
          overflow: 'hidden',
          borderBottom: '1px solid var(--color-border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img
          src={dashboard.image}
          alt={dashboard.title}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: isHovered ? 'scale(1.02)' : 'scale(1)',
            transition: 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />

        {/* Subtle expand indicator icon on hover */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 249, 240, 0.88)',
            border: '1px solid var(--color-border-subtle)',
            color: 'var(--color-deep-crimson)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'scale(1)' : 'scale(0.85)',
            transition: 'all 200ms ease',
            pointerEvents: 'none'
          }}
        >
          <Maximize2 size={14} />
        </div>
      </div>

      {/* 2. Card Content Area */}
      <div
        style={{
          padding: '28px 28px 24px 28px',
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        }}
      >
        {/* Tool · Category · Year Metadata */}
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.74rem',
            letterSpacing: '0.06em',
            color: 'var(--color-deep-crimson)',
            fontWeight: 500,
            marginBottom: '10px'
          }}
        >
          {dashboard.tool?.toUpperCase()} · {dashboard.category?.toUpperCase()} · {dashboard.year}
        </div>

        {/* Project / Dashboard Title */}
        <h3
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(20px, 1.8vw, 26px)',
            fontWeight: 600,
            color: 'var(--color-deep-burgundy)',
            lineHeight: 1.25,
            letterSpacing: '-0.01em',
            marginBottom: '12px'
          }}
        >
          {dashboard.title}
        </h3>

        {/* Short Description */}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.94rem',
            lineHeight: 1.6,
            color: 'var(--color-text-muted)',
            fontWeight: 400,
            marginBottom: '24px',
            flex: 1
          }}
        >
          {dashboard.description}
        </p>

        {/* 3. Bottom Action Bar with VIEW MORE ↗ Button */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '16px',
            borderTop: '1px solid var(--color-border-subtle)'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.74rem',
              color: 'var(--color-text-muted)',
              letterSpacing: '0.04em',
              fontWeight: 500
            }}
          >
            {dashboard.dataset ? dashboard.dataset.substring(0, 24) + (dashboard.dataset.length > 24 ? '…' : '') : `EXHIBIT 0${index + 1}`}
          </span>

          <button
            type="button"
            data-action="view-more"
            onClick={(e) => {
              e.stopPropagation();
              if (onOpenDetail) {
                onOpenDetail(dashboard);
              }
            }}
            onMouseEnter={() => setIsBtnHovered(true)}
            onMouseLeave={() => setIsBtnHovered(false)}
            aria-label={`View more information about ${dashboard.title}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: isBtnHovered ? '8px' : '4px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.80rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              color: 'var(--color-deep-crimson)',
              backgroundColor: 'transparent',
              border: 'none',
              padding: '6px 0',
              cursor: 'pointer',
              transition: 'gap 200ms ease, color 200ms ease'
            }}
          >
            <span>VIEW MORE</span>
            <ArrowUpRight
              size={15}
              style={{
                transform: isBtnHovered ? 'translate(2px, -2px)' : 'none',
                transition: 'transform 200ms ease'
              }}
            />
          </button>
        </div>
      </div>
    </article>
  );
}
