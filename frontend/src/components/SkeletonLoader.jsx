import React from 'react';

export default function SkeletonLoader({ count = 3 }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
        gap: '32px',
        width: '100%'
      }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          style={{
            backgroundColor: 'var(--color-soft-cream)',
            border: '1px solid var(--color-border-subtle)',
            borderRadius: '24px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Image placeholder */}
          <div className="skeleton-box" style={{ width: '100%', height: '240px' }} />

          {/* Content placeholder */}
          <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
              <div className="skeleton-box" style={{ width: '90px', height: '14px', borderRadius: '6px' }} />
              <div className="skeleton-box" style={{ width: '50px', height: '14px', borderRadius: '6px' }} />
            </div>

            <div className="skeleton-box" style={{ width: '75%', height: '26px', borderRadius: '6px' }} />
            <div className="skeleton-box" style={{ width: '100%', height: '16px', borderRadius: '6px' }} />
            <div className="skeleton-box" style={{ width: '60%', height: '16px', borderRadius: '6px' }} />

            <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
              <div className="skeleton-box" style={{ width: '60px', height: '20px', borderRadius: '10px' }} />
              <div className="skeleton-box" style={{ width: '70px', height: '20px', borderRadius: '10px' }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
