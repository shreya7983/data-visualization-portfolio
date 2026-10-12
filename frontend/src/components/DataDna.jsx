import React from 'react';
import { Dna } from 'lucide-react';

export default function DataDna({ dataDna, fallbackData = {} }) {
  const dna = dataDna || {
    tool: fallbackData.tool || 'Advanced Analytics',
    domain: fallbackData.category || 'Domain Research',
    year: fallbackData.year || 2026,
    dataset: fallbackData.dataset || 'Curated Analytical Archive',
    primaryVisuals: (fallbackData.chartsUsed || []).join(', ') || 'Custom Multi-KPIs',
    analysisType: 'Exploratory & Evaluative Modeling',
    granularity: 'Standard Institutional Records'
  };

  const items = [
    { label: 'TOOL', value: dna.tool },
    { label: 'DOMAIN', value: dna.domain },
    { label: 'YEAR', value: dna.year },
    { label: 'DATASET', value: dna.dataset },
    { label: 'PRIMARY VISUALS', value: dna.primaryVisuals },
    { label: 'ANALYSIS TYPE', value: dna.analysisType },
    { label: 'GRANULARITY', value: dna.granularity }
  ];

  return (
    <section
      aria-label="Project Data DNA"
      style={{
        margin: '56px 0',
        padding: '28px 0',
        borderTop: '1px solid var(--color-border-subtle)',
        borderBottom: '1px solid var(--color-border-subtle)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
        <Dna size={15} color="var(--color-deep-crimson)" />
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.14em',
            color: 'var(--color-deep-crimson)',
            fontWeight: 600,
            textTransform: 'uppercase'
          }}
        >
          DATA DNA // SPECIFICATION
        </span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px 32px'
        }}
      >
        {items.map((item, idx) => (
          <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.1em',
                color: 'var(--color-deep-burgundy-light)',
                fontWeight: 600
              }}
            >
              {item.label}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.86rem',
                lineHeight: 1.5,
                color: 'var(--color-deep-burgundy)',
                fontWeight: 500
              }}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
