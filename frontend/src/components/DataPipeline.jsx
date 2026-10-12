import React from 'react';
import { GitCommit, ArrowRight } from 'lucide-react';

const STAGES = [
  { step: '01', name: 'DATA', desc: 'Raw Sourcing' },
  { step: '02', name: 'CLEAN', desc: 'Integrity & QA' },
  { step: '03', name: 'EXPLORE', desc: 'Variance & EDA' },
  { step: '04', name: 'VISUALIZE', desc: 'Cognitive Encoding' },
  { step: '05', name: 'INTERPRET', desc: 'Pattern Isolation' },
  { step: '06', name: 'COMMUNICATE', desc: 'Decision Action' }
];

export default function DataPipeline() {
  return (
    <div
      style={{
        margin: '40px 0',
        padding: '28px 24px',
        backgroundColor: 'var(--color-warm-beige-light)',
        border: '1px solid var(--color-border-subtle)',
        borderRadius: '20px'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
        <GitCommit size={15} color="var(--color-deep-crimson)" />
        <span className="mono-tag" style={{ color: 'var(--color-deep-crimson)', fontWeight: 600 }}>
          DATA JOURNEY PIPELINE // METHODOLOGY FLOW
        </span>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}
      >
        {STAGES.map((s, idx) => (
          <React.Fragment key={s.step}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 12px',
                backgroundColor: 'var(--color-soft-cream)',
                borderRadius: '12px',
                border: '1px solid var(--color-border-subtle)'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  color: 'var(--color-deep-crimson)'
                }}
              >
                {s.step}
              </span>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.80rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    color: 'var(--color-deep-burgundy)'
                  }}
                >
                  {s.name}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.64rem',
                    color: 'var(--color-deep-burgundy-light)'
                  }}
                >
                  {s.desc}
                </div>
              </div>
            </div>

            {idx < STAGES.length - 1 && (
              <span
                style={{
                  color: 'var(--color-warm-gold)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                →
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
