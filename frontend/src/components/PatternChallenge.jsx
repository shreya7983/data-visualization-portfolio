import React, { useState } from 'react';
import { Target, CheckCircle2, AlertCircle, HelpCircle, RotateCcw } from 'lucide-react';

export default function PatternChallenge({ challenge, title }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showHint, setShowHint] = useState(false);

  if (!challenge || !challenge.options || challenge.options.length === 0) {
    return null;
  }

  const handleSelect = (option, index) => {
    setSelectedOption({ ...option, index });
  };

  const handleReset = () => {
    setSelectedOption(null);
    setShowHint(false);
  };

  return (
    <section
      aria-label="Interactive Pattern Challenge"
      style={{
        margin: '64px 0',
        padding: '36px 0',
        borderTop: '1px solid var(--color-border-subtle)',
        borderBottom: '1px solid var(--color-border-subtle)'
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '16px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Target size={15} color="var(--color-deep-crimson)" />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              color: 'var(--color-deep-crimson)',
              fontWeight: 600
            }}
          >
            CAN YOU SPOT THE PATTERN? // INTERACTIVE INQUIRY
          </span>
        </div>

        {selectedOption && (
          <button
            onClick={handleReset}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.08em',
              color: 'var(--color-deep-crimson)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              textDecoration: 'underline'
            }}
          >
            <RotateCcw size={11} />
            RESET QUESTION
          </button>
        )}
      </div>

      {/* Question Statement */}
      <h3
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(20px, 2.4vw, 28px)',
          fontWeight: 600,
          color: 'var(--color-deep-burgundy)',
          lineHeight: 1.25,
          letterSpacing: '-0.015em',
          marginBottom: '28px',
          maxWidth: '920px'
        }}
      >
        {challenge.question}
      </h3>

      {/* Options List — Clean Editorial Text Choices */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px', maxWidth: '880px' }}>
        {challenge.options.map((option, idx) => {
          const isSelected = selectedOption && selectedOption.index === idx;
          const isSubmitted = selectedOption !== null;

          let textColor = 'var(--color-deep-burgundy)';
          let borderLeftColor = 'transparent';

          if (isSubmitted) {
            if (isSelected) {
              borderLeftColor = option.isCorrect ? '#2E7D32' : 'var(--color-deep-crimson)';
              textColor = option.isCorrect ? '#2E7D32' : 'var(--color-deep-crimson)';
            } else if (option.isCorrect) {
              borderLeftColor = '#2E7D32';
              textColor = '#2E7D32';
            } else {
              textColor = 'var(--color-deep-burgundy-light)';
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(option, idx)}
              style={{
                background: 'none',
                border: 'none',
                borderLeft: `3px solid ${borderLeftColor}`,
                borderRadius: '10px',
                padding: '8px 16px',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'baseline',
                gap: '12px',
                cursor: 'pointer',
                transition: 'all 200ms ease'
              }}
              onMouseEnter={(e) => {
                if (!isSubmitted) {
                  e.currentTarget.style.borderLeftColor = 'var(--color-deep-crimson)';
                  e.currentTarget.style.color = 'var(--color-deep-crimson)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitted) {
                  e.currentTarget.style.borderLeftColor = 'transparent';
                  e.currentTarget.style.color = 'var(--color-deep-burgundy)';
                }
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: isSubmitted && isSelected ? (option.isCorrect ? '#2E7D32' : 'var(--color-deep-crimson)') : 'var(--color-deep-crimson)'
                }}
              >
                [{String.fromCharCode(65 + idx)}]
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.02rem',
                  lineHeight: 1.5,
                  fontWeight: isSelected ? 600 : 400,
                  color: textColor
                }}
              >
                {option.text}
              </span>
            </button>
          );
        })}
      </div>

      {/* Feedback Banner */}
      {selectedOption && (
        <div
          style={{
            padding: '20px 24px',
            backgroundColor: 'var(--color-soft-cream)',
            border: '1px solid var(--color-border-subtle)',
            borderLeft: `4px solid ${selectedOption.isCorrect ? '#2E7D32' : 'var(--color-deep-crimson)'}`,
            borderRadius: '12px',
            animation: 'fadeIn 250ms ease forwards',
            maxWidth: '880px'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              color: selectedOption.isCorrect ? '#2E7D32' : 'var(--color-deep-crimson)',
              display: 'block',
              marginBottom: '6px'
            }}
          >
            {selectedOption.isCorrect ? "CORRECT — HERE'S WHY →" : "LOOK CLOSER — HERE'S THE RELEVANT AREA →"}
          </span>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              lineHeight: 1.6,
              color: 'var(--color-deep-burgundy)',
              margin: 0
            }}
          >
            {selectedOption.explanation}
          </p>
        </div>
      )}

      {/* Optional Hint Link */}
      {!selectedOption && challenge.hint && (
        <div style={{ marginTop: '12px' }}>
          {showHint ? (
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.80rem',
                color: 'var(--color-deep-burgundy-muted)',
                margin: 0
              }}
            >
              <strong style={{ color: 'var(--color-deep-crimson)' }}>HINT:</strong> {challenge.hint}
            </p>
          ) : (
            <button
              onClick={() => setShowHint(true)}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--color-deep-burgundy-light)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              <HelpCircle size={12} />
              REVEAL ANALYTICAL HINT
            </button>
          )}
        </div>
      )}
    </section>
  );
}
