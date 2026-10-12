import React from 'react';

const TOOLS = ['ALL', 'POWER BI', 'TABLEAU', 'EXCEL', 'PYTHON'];
const CATEGORIES = ['ALL', 'BUSINESS', 'EDUCATION', 'RESEARCH', 'SOCIAL'];

export default function FilterBar({
  selectedTool,
  setSelectedTool,
  selectedCategory,
  setSelectedCategory,
  totalCount,
  onReset
}) {
  const isFiltered = selectedTool !== 'ALL' || selectedCategory !== 'ALL';

  return (
    <nav
      aria-label="Dashboard Filters"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        marginBottom: '64px',
        padding: '24px 0',
        borderTop: '1px solid var(--color-border-subtle)',
        borderBottom: '1px solid var(--color-border-subtle)'
      }}
    >
      {/* Tool Filter Tier — Clean Editorial Text Navigation */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          flexWrap: 'wrap',
          gap: '16px 24px'
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.70rem',
            letterSpacing: '0.12em',
            color: 'var(--color-deep-burgundy-light)',
            fontWeight: 600,
            textTransform: 'uppercase',
            minWidth: '70px'
          }}
        >
          TOOL //
        </span>

        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px 18px' }}>
          {TOOLS.map((tool, idx) => {
            const active = selectedTool.toUpperCase() === tool;
            return (
              <React.Fragment key={tool}>
                <button
                  onClick={() => setSelectedTool(tool)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '4px 0',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.84rem',
                    letterSpacing: '0.06em',
                    color: active ? 'var(--color-deep-crimson)' : 'var(--color-deep-burgundy)',
                    fontWeight: active ? 700 : 500,
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'color 200ms ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!active) e.currentTarget.style.color = 'var(--color-deep-crimson)';
                  }}
                  onMouseLeave={(e) => {
                    if (!active) e.currentTarget.style.color = 'var(--color-deep-burgundy)';
                  }}
                >
                  {tool}
                  {active && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--color-deep-crimson)'
                      }}
                    />
                  )}
                </button>
                {idx < TOOLS.length - 1 && (
                  <span
                    style={{
                      color: 'var(--color-border-subtle)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      userSelect: 'none'
                    }}
                  >
                    /
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Domain/Category Filter Tier */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          flexWrap: 'wrap',
          gap: '16px 24px'
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.70rem',
            letterSpacing: '0.12em',
            color: 'var(--color-deep-burgundy-light)',
            fontWeight: 600,
            textTransform: 'uppercase',
            minWidth: '70px'
          }}
        >
          DOMAIN //
        </span>

        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px 18px' }}>
          {CATEGORIES.map((cat, idx) => {
            const active = selectedCategory.toUpperCase() === cat;
            return (
              <React.Fragment key={cat}>
                <button
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '4px 0',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.84rem',
                    letterSpacing: '0.06em',
                    color: active ? 'var(--color-deep-crimson)' : 'var(--color-deep-burgundy)',
                    fontWeight: active ? 700 : 500,
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'color 200ms ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!active) e.currentTarget.style.color = 'var(--color-deep-crimson)';
                  }}
                  onMouseLeave={(e) => {
                    if (!active) e.currentTarget.style.color = 'var(--color-deep-burgundy)';
                  }}
                >
                  {cat}
                  {active && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--color-deep-crimson)'
                      }}
                    />
                  )}
                </button>
                {idx < CATEGORIES.length - 1 && (
                  <span
                    style={{
                      color: 'var(--color-border-subtle)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      userSelect: 'none'
                    }}
                  >
                    /
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Counter and Clear Action */}
        <div
          style={{
            marginLeft: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--color-deep-burgundy-light)',
              letterSpacing: '0.08em'
            }}
          >
            SHOWING {totalCount} {totalCount === 1 ? 'PROJECT' : 'PROJECTS'}
          </span>

          {isFiltered && (
            <button
              onClick={onReset}
              style={{
                background: 'none',
                border: 'none',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.06em',
                color: 'var(--color-deep-crimson)',
                cursor: 'pointer',
                textDecoration: 'underline',
                fontWeight: 600
              }}
            >
              [ RESET FILTERS ]
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
