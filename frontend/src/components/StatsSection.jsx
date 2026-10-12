import React, { useState, useEffect, useRef } from 'react';
import { getStats } from '../services/api';

export default function StatsSection() {
  const [stats, setStats] = useState({
    dashboards: 12,
    dashboardsLabel: '12+',
    tools: 4,
    toolsLabel: '04',
    projects: 8,
    projectsLabel: '08+',
    dataStories: 4,
    dataStoriesLabel: '04'
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    dashboards: 0,
    tools: 0,
    projects: 0,
    dataStories: 0
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    getStats().then((data) => {
      if (data) setStats(data);
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, stats]);

  const animateCounters = () => {
    const duration = 1600;
    const startTime = performance.now();

    const targets = {
      dashboards: stats.dashboards || 12,
      tools: stats.tools || 4,
      projects: stats.projects || 8,
      dataStories: stats.dataStories || 4
    };

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts({
        dashboards: Math.floor(easeOut * targets.dashboards),
        tools: Math.floor(easeOut * targets.tools),
        projects: Math.floor(easeOut * targets.projects),
        dataStories: Math.floor(easeOut * targets.dataStories)
      });

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCounts(targets);
      }
    };

    requestAnimationFrame(update);
  };

  const statItems = [
    {
      value: hasAnimated ? (counts.dashboards >= 12 ? '12+' : `${counts.dashboards}+`) : '12+',
      label: 'DASHBOARDS',
      caption: 'Interactive visual models'
    },
    {
      value: hasAnimated ? (counts.tools < 10 ? `0${counts.tools}` : counts.tools) : '04',
      label: 'TOOLS',
      caption: 'Power BI, Tableau, Excel, Python'
    },
    {
      value: hasAnimated ? (counts.projects >= 8 ? '08+' : `0${counts.projects}+`) : '08+',
      label: 'PROJECTS',
      caption: 'End-to-end analytical studies'
    },
    {
      value: hasAnimated ? (counts.dataStories < 10 ? `0${counts.dataStories}` : counts.dataStories) : '04',
      label: 'DATA STORIES',
      caption: 'Guided exploratory narratives'
    }
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        borderTop: '1px solid var(--color-border-subtle)',
        borderBottom: '1px solid var(--color-border-subtle)',
        backgroundColor: 'var(--color-soft-cream)',
        padding: '64px 0'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '36px',
            alignItems: 'start'
          }}
        >
          {statItems.map((item, idx) => (
            <div
              key={item.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                borderLeft: idx > 0 ? '1px solid var(--color-border-subtle)' : 'none',
                paddingLeft: idx > 0 ? '28px' : '0'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(36px, 4.5vw, 56px)',
                  fontWeight: 700,
                  color: 'var(--color-deep-burgundy)',
                  lineHeight: 1,
                  letterSpacing: '-0.02em'
                }}
              >
                {item.value}
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.76rem',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  color: 'var(--color-deep-crimson)',
                  textTransform: 'uppercase'
                }}
              >
                {item.label}
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.90rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.5
                }}
              >
                {item.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
