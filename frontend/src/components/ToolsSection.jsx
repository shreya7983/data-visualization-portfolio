import React from 'react';
import { BarChart3, PieChart, Table2, Terminal, Layers, Sigma, LineChart } from 'lucide-react';

const TOOLKIT = [
  {
    name: 'Power BI',
    category: 'Business Intelligence',
    icon: BarChart3,
    role: 'Enterprise modeling, DAX measures, interactive slicers, and executive dashboards.',
    tag: 'BI & DAX'
  },
  {
    name: 'Tableau',
    category: 'Visual Analytics',
    icon: PieChart,
    role: 'Calculated fields, level-of-detail (LOD) expressions, parameters, and geospatial heatmaps.',
    tag: 'ANALYTICS'
  },
  {
    name: 'Microsoft Excel',
    category: 'Spreadsheet Modeling',
    icon: Table2,
    role: 'Power Query ingestion, dynamic pivot engines, XLOOKUP formulas, and structured financial models.',
    tag: 'MODELING'
  },
  {
    name: 'Python',
    category: 'Data Science & Scripting',
    icon: Terminal,
    role: 'End-to-end data pipelines, exploratory notebooks, web scraping, and automated ETL.',
    tag: 'CODE'
  },
  {
    name: 'Pandas',
    category: 'Data Manipulation',
    icon: Layers,
    role: 'Vectorized series transforms, DataFrame aggregation, multi-index restructuring, and missing data auditing.',
    tag: 'WRANGLING'
  },
  {
    name: 'NumPy',
    category: 'Numerical Computing',
    icon: Sigma,
    role: 'Array mathematics, linear transformations, probability sampling, and performance computing.',
    tag: 'MATH'
  },
  {
    name: 'Matplotlib & Seaborn',
    category: 'Statistical Graphics',
    icon: LineChart,
    role: 'Custom distribution curves, KDE ridge plots, correlation matrices, and publication-ready charts.',
    tag: 'FIGURES'
  }
];

export default function ToolsSection() {
  return (
    <section
      id="tools"
      className="atelier-section"
      style={{
        backgroundColor: 'var(--color-warm-beige)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '820px', marginBottom: '64px' }}>
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
              CAPABILITIES // INSTRUMENTS
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
            TOOLS I USE
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
            A deliberate suite of analytical and visual technologies chosen for empirical rigor, data pipeline depth, and communicative elegance.
          </p>
        </div>

        {/* Editorial Typographic Roster — No Card Boxes */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            borderTop: '1px solid var(--color-border-subtle)'
          }}
        >
          {TOOLKIT.map((tool, index) => {
            const Icon = tool.icon;
            const itemNum = String(index + 1).padStart(2, '0');

            return (
              <div
                key={tool.name}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(12, 1fr)',
                  gap: '24px',
                  alignItems: 'baseline',
                  padding: '36px 0',
                  borderBottom: '1px solid var(--color-border-subtle)',
                  transition: 'background-color 250ms ease, padding-left 250ms ease'
                }}
                className="tool-roster-row"
                onMouseEnter={(e) => {
                  const titleEl = e.currentTarget.querySelector('.tool-title');
                  if (titleEl) titleEl.style.color = 'var(--color-deep-crimson)';
                }}
                onMouseLeave={(e) => {
                  const titleEl = e.currentTarget.querySelector('.tool-title');
                  if (titleEl) titleEl.style.color = 'var(--color-deep-burgundy)';
                }}
              >
                {/* Number & Category — Cols 1-4 */}
                <div
                  style={{
                    gridColumn: 'span 4',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}
                  className="tool-col-left"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.80rem',
                        fontWeight: 600,
                        color: 'var(--color-warm-gold)',
                        letterSpacing: '0.06em'
                      }}
                    >
                      {itemNum} //
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.74rem',
                        letterSpacing: '0.06em',
                        color: 'var(--color-deep-crimson)',
                        textTransform: 'uppercase',
                        fontWeight: 500
                      }}
                    >
                      {tool.category}
                    </span>
                  </div>

                  <h3
                    className="tool-title"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'clamp(20px, 2.2vw, 28px)',
                      fontWeight: 600,
                      color: 'var(--color-deep-burgundy)',
                      lineHeight: 1.2,
                      letterSpacing: '-0.015em',
                      margin: 0,
                      transition: 'color 250ms ease'
                    }}
                  >
                    {tool.name}
                  </h3>
                </div>

                {/* Role Description — Cols 5-10 */}
                <div
                  style={{
                    gridColumn: 'span 6',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  className="tool-col-mid"
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.94rem',
                      lineHeight: 1.6,
                      color: 'var(--color-text-muted)',
                      fontWeight: 400,
                      margin: 0
                    }}
                  >
                    {tool.role}
                  </p>
                </div>

                {/* Tag & Icon — Cols 11-12 */}
                <div
                  style={{
                    gridColumn: 'span 2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    gap: '12px'
                  }}
                  className="tool-col-right"
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.74rem',
                      letterSpacing: '0.04em',
                      color: 'var(--color-deep-burgundy)',
                      fontWeight: 500
                    }}
                  >
                    [{tool.tag}]
                  </span>
                  <div
                    style={{
                      color: 'var(--color-deep-crimson)',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
