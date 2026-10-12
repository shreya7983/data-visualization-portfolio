import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = 'shreya.kashyap.analytics@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section
      id="contact"
      className="atelier-section"
      style={{
        backgroundColor: 'var(--color-deep-burgundy)',
        color: 'var(--color-soft-cream)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          {/* Label */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '24px'
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-warm-gold)'
              }}
            />
            <span
              className="mono-tag"
              style={{
                color: 'var(--color-warm-gold)',
                letterSpacing: '0.14em',
                fontWeight: 500
              }}
            >
              COMMISSION // COLLABORATION
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(36px, 5.5vw, 64px)',
              color: 'var(--color-soft-cream)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '24px'
            }}
          >
            LET'S TURN DATA<br />
            <span style={{ color: 'var(--color-warm-gold)' }}>
              INTO A STORY.
            </span>
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(16px, 1.2vw, 18px)',
              color: 'rgba(255, 249, 240, 0.8)',
              lineHeight: 1.65,
              fontWeight: 400,
              maxWidth: '640px',
              margin: '0 auto 48px'
            }}
          >
            Seeking a visual analytics consultant, research partner, or data visualization designer? Let's discuss your datasets and design visual clarity.
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px'
            }}
          >
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile (Placeholder)"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 32px',
                backgroundColor: 'rgba(255, 249, 240, 0.08)',
                border: '1px solid rgba(255, 249, 240, 0.22)',
                color: 'var(--color-soft-cream)',
                borderRadius: '12px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.86rem',
                letterSpacing: '0.06em',
                fontWeight: 600,
                transition: 'all 250ms ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-deep-crimson)';
                e.currentTarget.style.borderColor = 'var(--color-deep-crimson)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 249, 240, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 249, 240, 0.22)';
              }}
            >
              LINKEDIN
              <ArrowUpRight size={16} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile (Placeholder)"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 32px',
                backgroundColor: 'rgba(255, 249, 240, 0.08)',
                border: '1px solid rgba(255, 249, 240, 0.22)',
                color: 'var(--color-soft-cream)',
                borderRadius: '12px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.86rem',
                letterSpacing: '0.06em',
                fontWeight: 600,
                transition: 'all 250ms ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-deep-crimson)';
                e.currentTarget.style.borderColor = 'var(--color-deep-crimson)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 249, 240, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 249, 240, 0.22)';
              }}
            >
              GITHUB
              <ArrowUpRight size={16} />
            </a>

            {/* Copy / Direct Email */}
            <button
              onClick={copyEmail}
              title="Click to copy email address"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 32px',
                backgroundColor: 'var(--color-deep-crimson)',
                border: '1px solid var(--color-deep-crimson)',
                color: 'var(--color-soft-cream)',
                borderRadius: '12px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.86rem',
                letterSpacing: '0.06em',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 250ms ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-warm-gold)';
                e.currentTarget.style.borderColor = 'var(--color-warm-gold)';
                e.currentTarget.style.color = 'var(--color-deep-burgundy)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-deep-crimson)';
                e.currentTarget.style.borderColor = 'var(--color-deep-crimson)';
                e.currentTarget.style.color = 'var(--color-soft-cream)';
              }}
            >
              {copied ? (
                <>
                  <Check size={16} />
                  EMAIL COPIED!
                </>
              ) : (
                <>
                  <Copy size={16} />
                  EMAIL ME
                </>
              )}
            </button>
          </div>

          <div
            style={{
              marginTop: '24px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.78rem',
              color: 'rgba(255, 249, 240, 0.55)',
              letterSpacing: '0.04em',
              fontWeight: 500
            }}
          >
            DIRECT: {email}
          </div>
        </div>
      </div>
    </section>
  );
}
