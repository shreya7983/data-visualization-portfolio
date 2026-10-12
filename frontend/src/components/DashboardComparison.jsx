import React, { useState, useEffect } from 'react';
import { getDashboards } from '../services/api';

export default function DashboardComparison({ initialDashboards = [] }) {
  const [dashboards, setDashboards] = useState(initialDashboards);
  const [selectedIdA, setSelectedIdA] = useState('');
  const [selectedIdB, setSelectedIdB] = useState('');

  useEffect(() => {
    if (initialDashboards && initialDashboards.length > 0) {
      setDashboards(initialDashboards);
      setSelectedIdA(initialDashboards[0]?.id || '');
      setSelectedIdB(initialDashboards[1]?.id || initialDashboards[0]?.id || '');
    } else {
      getDashboards().then((data) => {
        if (data && data.length > 0) {
          setDashboards(data);
          setSelectedIdA(data[0]?.id || '');
          setSelectedIdB(data[1]?.id || data[0]?.id || '');
        }
      });
    }
  }, [initialDashboards]);

  const dashA = dashboards.find((d) => d.id === selectedIdA) || dashboards[0] || {};
  const dashB = dashboards.find((d) => d.id === selectedIdB) || dashboards[1] || dashboards[0] || {};

  return (
    <section
      id="comparison"
      className="atelier-section"
      style={{
        backgroundColor: 'var(--color-warm-beige)',
        borderTop: '1px solid var(--color-border-subtle)',
        borderBottom: '1px solid var(--color-border-subtle)'
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '820px', marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-deep-crimson)'
              }}
            />
            <span className="mono-tag" style={{ color: 'var(--color-deep-crimson)', fontWeight: 600 }}>
              SYNTHESIS // COMPARATIVE STUDY
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(32px, 3.8vw, 44px)',
              color: 'var(--color-deep-burgundy)',
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: '-0.015em',
              marginBottom: '16px'
            }}
          >
            COMPARE DASHBOARDS
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.6,
              fontWeight: 400
            }}
          >
            Contrast analytical architectures, data scopes, and visual encoding decisions across two selected portfolio exhibits.
          </p>
        </div>

        {/* Dashboard Selectors Strip — Cardless Editorial Selectors */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            marginBottom: '48px',
            paddingBottom: '28px',
            borderBottom: '1px solid var(--color-border-subtle)'
          }}
        >
          {/* Select A */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label
              htmlFor="select-dash-a"
              style={{
                display: 'block',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.74rem',
                letterSpacing: '0.06em',
                color: 'var(--color-deep-crimson)',
                textTransform: 'uppercase',
                fontWeight: 600
              }}
            >
              EXHIBIT A // SELECTION
            </label>
            <select
              id="select-dash-a"
              value={selectedIdA}
              onChange={(e) => setSelectedIdA(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 16px',
                backgroundColor: 'var(--color-soft-cream)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: '12px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.96rem',
                color: 'var(--color-deep-burgundy)',
                cursor: 'pointer',
                outline: 'none',
                fontWeight: 500
              }}
            >
              {dashboards.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.title} ({d.tool})
                </option>
              ))}
            </select>
          </div>

          {/* Select B */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label
              htmlFor="select-dash-b"
              style={{
                display: 'block',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.74rem',
                letterSpacing: '0.06em',
                color: 'var(--color-warm-gold)',
                textTransform: 'uppercase',
                fontWeight: 600
              }}
            >
              EXHIBIT B // SELECTION
            </label>
            <select
              id="select-dash-b"
              value={selectedIdB}
              onChange={(e) => setSelectedIdB(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 16px',
                backgroundColor: 'var(--color-soft-cream)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: '12px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.96rem',
                color: 'var(--color-deep-burgundy)',
                cursor: 'pointer',
                outline: 'none',
                fontWeight: 500
              }}
            >
              {dashboards.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.title} ({d.tool})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Side-by-Side Comparison Matrix Table — Open Canvas Layout */}
        <div style={{ overflowX: 'auto' }}>
          <table
            style={{
              width: '100%',
              minWidth: '640px',
              borderCollapse: 'collapse',
              textAlign: 'left'
            }}
          >
            <thead>
              <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                <th
                  style={{
                    padding: '24px 28px',
                    width: '20%',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    letterSpacing: '0.12em',
                    color: 'var(--color-deep-burgundy-light)',
                    textTransform: 'uppercase',
                    fontWeight: 500
                  }}
                >
                  DIMENSION
                </th>
                <th
                  style={{
                    padding: '24px 28px',
                    width: '40%',
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(18px, 1.8vw, 22px)',
                    fontWeight: 600,
                    letterSpacing: '-0.015em',
                    color: 'var(--color-deep-burgundy)',
                    borderLeft: '1px solid var(--color-border-subtle)'
                  }}
                >
                  {dashA.title || 'Exhibit A'}
                </th>
                <th
                  style={{
                    padding: '24px 28px',
                    width: '40%',
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(18px, 1.8vw, 22px)',
                    fontWeight: 600,
                    letterSpacing: '-0.015em',
                    color: 'var(--color-deep-burgundy)',
                    borderLeft: '1px solid var(--color-border-subtle)'
                  }}
                >
                  {dashB.title || 'Exhibit B'}
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1: Tool */}
              <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                <td style={{ padding: '20px 28px', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--color-deep-crimson)', fontWeight: 600 }}>
                  TOOL
                </td>
                <td style={{ padding: '20px 28px', borderLeft: '1px solid var(--color-border-subtle)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                  <span style={{ padding: '5px 12px', backgroundColor: 'var(--color-deep-crimson)', borderRadius: '10px', color: 'var(--color-soft-cream)', fontWeight: 600 }}>
                    {dashA.tool}
                  </span>
                </td>
                <td style={{ padding: '20px 28px', borderLeft: '1px solid var(--color-border-subtle)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                  <span style={{ padding: '5px 12px', backgroundColor: 'var(--color-deep-burgundy)', borderRadius: '10px', color: 'var(--color-soft-cream)', fontWeight: 600 }}>
                    {dashB.tool}
                  </span>
                </td>
              </tr>

              {/* Row 2: Dataset */}
              <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                <td style={{ padding: '20px 28px', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--color-deep-crimson)', fontWeight: 600 }}>
                  DATASET
                </td>
                <td style={{ padding: '20px 28px', borderLeft: '1px solid var(--color-border-subtle)', fontSize: '0.95rem', color: 'var(--color-deep-burgundy)' }}>
                  {dashA.dataset}
                </td>
                <td style={{ padding: '20px 28px', borderLeft: '1px solid var(--color-border-subtle)', fontSize: '0.95rem', color: 'var(--color-deep-burgundy)' }}>
                  {dashB.dataset}
                </td>
              </tr>

              {/* Row 3: Purpose */}
              <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                <td style={{ padding: '20px 28px', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--color-deep-crimson)', fontWeight: 600 }}>
                  PURPOSE
                </td>
                <td style={{ padding: '20px 28px', borderLeft: '1px solid var(--color-border-subtle)', fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
                  {dashA.objective}
                </td>
                <td style={{ padding: '20px 28px', borderLeft: '1px solid var(--color-border-subtle)', fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
                  {dashB.objective}
                </td>
              </tr>

              {/* Row 4: Visualization */}
              <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                <td style={{ padding: '20px 28px', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--color-deep-crimson)', fontWeight: 600 }}>
                  VISUALIZATION
                </td>
                <td style={{ padding: '20px 28px', borderLeft: '1px solid var(--color-border-subtle)', fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
                  {dashA.visualizationApproach}
                </td>
                <td style={{ padding: '20px 28px', borderLeft: '1px solid var(--color-border-subtle)', fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
                  {dashB.visualizationApproach}
                </td>
              </tr>

              {/* Row 5: Main Insight */}
              <tr>
                <td style={{ padding: '20px 28px', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--color-deep-crimson)', fontWeight: 600 }}>
                  MAIN INSIGHT
                </td>
                <td style={{ padding: '20px 28px', borderLeft: '1px solid var(--color-border-subtle)', fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--color-deep-burgundy)' }}>
                  "{dashA.insights?.[0]}"
                </td>
                <td style={{ padding: '20px 28px', borderLeft: '1px solid var(--color-border-subtle)', fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--color-deep-burgundy)' }}>
                  "{dashB.insights?.[0]}"
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
