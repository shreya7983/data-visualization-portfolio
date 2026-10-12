import React from 'react';

const CATEGORIES = [
  { id: 'ALL', label: 'ALL', targetId: 'dashboards' },
  { id: 'DASHBOARDS', label: 'DASHBOARDS', targetId: 'dashboards' },
  { id: 'ASSIGNMENTS', label: 'ASSIGNMENTS', targetId: 'assignments' },
  { id: 'REPORTS', label: 'REPORTS', targetId: 'documents' },
  { id: 'DOCUMENTS', label: 'DOCUMENTS', targetId: 'documents' },
  { id: 'PROJECTS', label: 'PROJECTS', targetId: 'other-work' }
];

export default function WorkspaceFilterBar({ activeCategory, onSelectCategory }) {
  const handleClick = (e, cat) => {
    e.preventDefault();
    onSelectCategory(cat.id);

    if (cat.targetId && cat.id !== 'ALL') {
      const el = document.getElementById(cat.targetId);
      if (el) {
        const yOffset = -30;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      id="work-filter"
      style={{
        padding: '24px 0 16px 0',
        borderBottom: '1px solid #DDD2C5',
        position: 'sticky',
        top: '65px',
        zIndex: 50,
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(245, 237, 226, 0.95)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          {/* Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#2F5D62'
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                letterSpacing: '0.08em',
                color: '#2F5D62',
                fontWeight: 500,
                textTransform: 'uppercase'
              }}
            >
              WORKSPACE FILTER
            </span>
          </div>

          {/* Simple Text Filters — No Giant Pill Buttons */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(10px, 1.8vw, 18px)',
              flexWrap: 'wrap'
            }}
            aria-label="Workspace Categories"
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={(e) => handleClick(e, cat)}
                  style={{
                    background: isActive ? '#E3EEEE' : 'transparent',
                    border: 'none',
                    padding: '6px 12px',
                    borderRadius: '10px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.80rem',
                    fontWeight: isActive ? 600 : 500,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: isActive ? '#2F5D62' : '#756F6A',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'all 200ms ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#2F5D62';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#756F6A';
                  }}
                >
                  {cat.label}
                  {/* Subtle underline indicator on active */}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '2px',
                      left: '12px',
                      right: '12px',
                      height: '1.5px',
                      backgroundColor: '#2F5D62',
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'opacity 200ms ease, transform 200ms ease'
                    }}
                  />
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
