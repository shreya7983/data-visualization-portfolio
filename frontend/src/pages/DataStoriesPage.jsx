import React from 'react';
import DataStorySection from '../components/DataStorySection';
import DataJourneySection from '../components/DataJourneySection';
import InsightsSection from '../components/InsightsSection';

export default function DataStoriesPage() {
  return (
    <main style={{ paddingTop: '130px', paddingBottom: '80px' }}>
      <div className="container" style={{ marginBottom: '60px' }}>
        <div style={{ maxWidth: '820px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-deep-crimson)'
              }}
            />
            <span className="mono-tag" style={{ color: 'var(--color-deep-crimson)', fontWeight: 500 }}>
              METHODOLOGY // ANALYTICAL PHILOSOPHY
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(42px, 5.5vw, 68px)',
              color: 'var(--color-deep-burgundy)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '20px'
            }}
          >
            DATA STORIES
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(16px, 1.2vw, 18px)',
              color: 'var(--color-deep-burgundy-muted)',
              lineHeight: 1.65,
              fontWeight: 400
            }}
          >
            A visualization is neither an arbitrary piece of graphic design nor an uncurated dump of numbers. It is an intentional visual dialogue between raw evidence and human decision-making.
          </p>
        </div>
      </div>

      <DataStorySection />
      <DataJourneySection />
      <InsightsSection />
    </main>
  );
}
