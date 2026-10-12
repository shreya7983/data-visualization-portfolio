import React, { useState } from 'react';
import { ArrowRight, Maximize2, Layers, Database } from 'lucide-react';
import { WORK_ITEMS } from '../data/workLibraryData';

export default function EditorialDashboards({ onOpenImage, onOpenDetail }) {
  const [selectedToolFilter, setSelectedToolFilter] = useState('ALL');

  // Curated list of dashboards featuring Tableau, Power BI, Excel, and Python
  // with authentic screenshots and uniform card structure
  const dashboardList = [
    {
      id: 'india-paper-leaks',
      indexTag: '01',
      title: 'INDIA PAPER LEAK ANALYSIS DASHBOARD (2004–2026)',
      tool: 'Power BI',
      tools: ['Power BI', 'DAX', 'Power Query'],
      category: 'Research & Public Policy',
      year: 2026,
      image: '/images/dashboards/paper-leaks.png',
      dataset: 'India Paper Leaks Archive (2004–2026)',
      objective: 'Analyze recurrence patterns across years, examination tiers, and leak status to uncover systemic vulnerabilities in high-stakes testing.',
      chartsUsed: ['State Choropleth Map', 'Timeline Area Chart', 'Tier Donut Chart', 'Multi-KPI Cards'],
      detailUrl: '/dashboards/india-paper-leaks',
      kaggleUrl: 'https://www.kaggle.com/datasets/sujaynadkarni/india-paper-leaks-from-2004-to-2026'
    },
    {
      id: 'draw-your-day',
      indexTag: '02',
      title: 'Draw Your Day // Daily Energy Curve',
      tool: 'Power BI',
      tools: ['Power BI', 'Data Modeling', 'Excel'],
      category: 'Quantified Self & Energy Analytics',
      year: 2026,
      image: '/images/dashboards/draw-your-day.png',
      dataset: '14-Day Personal Activity & Focus Vector Logs',
      objective: 'Formulate an intuitive visual grammar to transform high-granularity behavioral logs into clear cognitive energy and productivity patterns.',
      chartsUsed: ['24-Hour Donut Chart', 'Diurnal Energy Curve', 'Focus Tier Matrix'],
      detailUrl: '/dashboards/draw-your-day'
    },
    {
      id: 'ecommerce-analytics',
      indexTag: '03',
      title: 'Explore Data Visualization in the Real World // E-Commerce',
      tool: 'Power BI',
      tools: ['Power BI', 'DAX', 'Retail Modeling'],
      category: 'Business Analytics & Retail',
      year: 2026,
      image: '/images/dashboards/ecommerce-analytics.png',
      dataset: 'Enterprise Retail Transactional & Funnel Repository',
      objective: 'Uncover critical conversion leakages across multi-stage checkout funnels, evaluate category margin elasticity, and model repeat cohorts.',
      chartsUsed: ['Sales Over Time Line', 'Top-Selling Products Bar', 'Conversion Funnel'],
      detailUrl: '/dashboards/ecommerce-analytics'
    },
    {
      id: 'placement-analysis',
      indexTag: '04',
      title: 'Alumni Dashboard // Computer Science Placement Analysis',
      tool: 'Power BI',
      tools: ['Power BI', 'DAX', 'Statistical Modeling'],
      category: 'Academic Analytics',
      year: 2025,
      image: '/images/dashboards/placement-analysis.png',
      dataset: 'Institutional CS Placement Cohort Archive (1,240 records)',
      objective: 'Evaluate post-graduate salary distributions, recruiter concentration, and skill competency correlations across student cohorts.',
      chartsUsed: ['Salary Streamgraph', 'Placement Treemap', 'Recruiter Matrix', 'Offer Funnel'],
      detailUrl: '/dashboards/placement-analysis'
    },
    {
      id: 'superstore-management',
      indexTag: '05',
      title: 'Superstore Management Dashboard // Overall Business Performance',
      tool: 'Tableau',
      tools: ['Tableau Desktop', 'Executive KPIs', 'LOD Expressions'],
      category: 'Executive Commercial Strategy',
      year: 2026,
      image: '/images/dashboards/superstore-management.png',
      dataset: 'Global Superstore Enterprise Repository (2023–2026)',
      objective: 'Synthesize top-level enterprise KPIs ($2.32M Sales, $292K Profit, 10,194 Orders), monitor monthly order revenue pacing, and detect sales-to-profit anomalies.',
      chartsUsed: ['Executive KPI Cards', 'Sales by Category Bar', 'Profit by Region Bar', 'Monthly Sales Trendline', 'Sales vs Profit Scatter'],
      detailUrl: '/dashboards/superstore-management'
    },
    {
      id: 'superstore-sales-manager',
      indexTag: '06',
      title: 'Sales Management Dashboard // Product, Customer & Profit Analysis',
      tool: 'Tableau',
      tools: ['Tableau Desktop', 'Calculated Fields', 'Sales Operations'],
      category: 'Commercial Operations & Sales Strategy',
      year: 2026,
      image: '/images/dashboards/superstore-sales-manager.png',
      dataset: 'Enterprise Transaction Line-Item & Account Archive',
      objective: 'Identify top-grossing products, evaluate sub-category profit margins, isolate discount margin destruction thresholds (>20%), and monitor monthly sales momentum.',
      chartsUsed: ['Sales by Sub-Category Bar', 'Profit by Sub-Category Bar', 'Top 10 Customers Bar', 'Top 10 Products Bar', 'Discount vs Profit Scatter', 'Monthly Sales Line'],
      detailUrl: '/dashboards/superstore-sales-manager'
    },
    {
      id: 'superstore-regional-manager',
      indexTag: '07',
      title: 'Regional Manager Dashboard // Regional & Geographical Performance',
      tool: 'Tableau',
      tools: ['Tableau Desktop', 'Mapbox Geocoding', 'Territory Modeling'],
      category: 'Territorial Strategy & Supply Chain',
      year: 2026,
      image: '/images/dashboards/superstore-regional-manager.png',
      dataset: 'Global Superstore Geographic & Regional Archive',
      objective: 'Benchmark performance across West, East, Central, and South regions, map state-level sales density (California $457K, New York $310K), and track 4-year regional trajectories.',
      chartsUsed: ['Regional Sales Bar', 'Regional Profit Bar', 'Mapbox State Sales Map', 'Sales by State Leaderboard', 'Regional 4-Year Trendline'],
      detailUrl: '/dashboards/superstore-regional-manager'
    },
    {
      id: 'superstore-sales',
      indexTag: '08',
      title: 'Geospatial Visualization — Sales, Profit & Order Concentration',
      tool: 'Tableau',
      tools: ['Tableau Desktop', 'Geocoding', 'Calculated Fields'],
      category: 'Commercial Analytics & Geospatial Strategy',
      year: 2025,
      image: '/images/dashboards/superstore-sales.png',
      dataset: 'Global Superstore Commercial Dataset',
      objective: 'Identify high-margin growth avenues, isolate loss-making discount thresholds, and evaluate regional order fulfillment efficiency.',
      chartsUsed: ['State Sales Choropleth', 'Profit Symbol Map', 'Order Density Heatmap', 'Category Dual-Axis'],
      detailUrl: '/dashboards/superstore-sales'
    },
    {
      id: 'study-habits-analysis',
      indexTag: '09',
      title: 'Study Habits & Academic Performance Analysis',
      tool: 'Excel',
      tools: ['Microsoft Excel', 'PivotTables', 'Advanced Formulas'],
      category: 'Statistical Analytics',
      year: 2025,
      image: '/images/dashboards/study-habits.svg',
      dataset: 'Longitudinal Student Academic & Study Habit Matrix',
      objective: 'Examine correlations between weekly study allocation, sleep regularity, and examination performance outcomes.',
      chartsUsed: ['Time Allocation Matrix', 'Sleep Boxplots', 'Performance Radar', 'Density Plots'],
      detailUrl: '/dashboards/study-habits-analysis'
    },
    {
      id: 'healthcare-er-wait-times',
      indexTag: '10',
      title: 'Emergency Healthcare Patient Flow & Wait Times',
      tool: 'Python',
      tools: ['Python', 'Seaborn', 'Pandas', 'Plotly'],
      category: 'Healthcare Operations',
      year: 2025,
      image: '/images/dashboards/healthcare-flow.svg',
      dataset: 'Hospital Operational Patient Census Archive (54,000 encounters)',
      objective: 'Isolate emergency department bottlenecks, triage-to-bed transition delays, and seasonal surge dynamics.',
      chartsUsed: ['Hourly Wait Time Ridge Plot', 'Triage Violin Distribution', 'Flow Sankey Diagram'],
      detailUrl: '/dashboards/healthcare-er-wait-times'
    },
    {
      id: 'urban-air-quality-trends',
      indexTag: '11',
      title: 'Urban Air Quality & Environmental Sensor Trends',
      tool: 'Python',
      tools: ['Python', 'Matplotlib', 'Folium', 'Pandas'],
      category: 'Environmental Science',
      year: 2025,
      image: '/images/dashboards/air-quality.svg',
      dataset: 'Multi-City Real-Time Air Quality Sensor Network',
      objective: 'Track particulate matter anomalies, diurnal wind velocity dispersion, and seasonal pollution peaks.',
      chartsUsed: ['Spatial Heatmap', 'Time-Series Decomposition', 'Wind Pollution Rose', 'Calendar Heatmap'],
      detailUrl: '/dashboards/urban-air-quality-trends'
    }
  ];

  const tools = ['ALL', 'Power BI', 'Tableau', 'Excel', 'Python'];

  const filteredDashboards = selectedToolFilter === 'ALL'
    ? dashboardList
    : dashboardList.filter(d => d.tool.toLowerCase() === selectedToolFilter.toLowerCase());

  return (
    <section
      id="dashboards"
      style={{
        backgroundColor: '#F7F7F4',
        paddingTop: 'clamp(64px, 8vw, 96px)',
        paddingBottom: 'clamp(72px, 9vw, 108px)',
        borderBottom: '1px solid #DCDCDC',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '840px', marginBottom: '36px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#E8C547'
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.74rem',
                letterSpacing: '0.08em',
                color: '#111111',
                fontWeight: 600,
                textTransform: 'uppercase'
              }}
            >
              <span style={{ color: '#E8C547' }}>02</span> <span style={{ color: '#E8C547' }}>/</span> DASHBOARDS
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(32px, 4vw, 48px)',
              color: '#111111',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              margin: '0 0 16px 0'
            }}
          >
            DASHBOARD <span style={{ color: '#E8C547' }}>SHOWCASE.</span>
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(15px, 1.1vw, 17px)',
              color: '#666666',
              fontWeight: 400,
              lineHeight: 1.6,
              margin: 0
            }}
          >
            All authentic data visualization and analytical dashboard projects created in Power BI, Tableau, Excel, and Python. Click any dashboard to inspect objectives, datasets, charts, methodology, and full-resolution views.
          </p>
        </div>

        {/* Clean Tool Filter Toggle */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '36px'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.74rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              color: '#666666',
              textTransform: 'uppercase',
              marginRight: '6px'
            }}
          >
            TOOL:
          </span>
          {tools.map((tool) => {
            const isActive = selectedToolFilter === tool;
            return (
              <button
                key={tool}
                type="button"
                onClick={() => setSelectedToolFilter(tool)}
                style={{
                  padding: '7px 16px',
                  borderRadius: '10px',
                  border: isActive ? '1px solid #111111' : '1px solid #DCDCDC',
                  backgroundColor: isActive ? '#111111' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : '#333333',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  fontWeight: isActive ? 600 : 500,
                  cursor: 'pointer',
                  transition: 'all 160ms ease'
                }}
              >
                {tool === 'ALL' ? 'All Tools' : tool}
              </button>
            );
          })}
        </div>

        {/* Clean Visual Grid Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: 'clamp(20px, 3vw, 32px)'
          }}
        >
          {filteredDashboards.map((dash) => {
            return (
              <div
                key={dash.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #DCDCDC',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                  transition: 'all 220ms ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#B5B5B5';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.07)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#DCDCDC';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.03)';
                }}
              >
                {/* Screenshot Container with Overlay Actions */}
                <div
                  onClick={() => onOpenImage && onOpenImage(dash)}
                  style={{
                    position: 'relative',
                    aspectRatio: '16/10',
                    backgroundColor: '#ECECE8',
                    overflow: 'hidden',
                    borderBottom: '1px solid #E5E5E5',
                    cursor: 'pointer'
                  }}
                  className="dashboard-img-container"
                  title="Click to view full size"
                >
                  <img
                    src={dash.image}
                    alt={dash.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 300ms ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.03)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    loading="lazy"
                  />

                  {/* Top Badges: Index + Tool + Year */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      right: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      pointerEvents: 'none'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      {dash.indexTag && (
                        <span
                          style={{
                            padding: '4px 8px',
                            borderRadius: '6px',
                            backgroundColor: '#111111',
                            color: '#FFFFFF',
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.70rem',
                            fontWeight: 700,
                            letterSpacing: '0.04em'
                          }}
                        >
                          <span style={{ color: '#E8C547' }}>{dash.indexTag}</span>
                        </span>
                      )}

                      <span
                        style={{
                          padding: '4px 10px',
                          borderRadius: '6px',
                          backgroundColor: '#111111',
                          color: '#FFFFFF',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.70rem',
                          fontWeight: 700,
                          letterSpacing: '0.04em'
                        }}
                      >
                        <span style={{ color: '#E8C547' }}>● </span>
                        {dash.tool}
                      </span>
                    </div>

                    <span
                      style={{
                        padding: '4px 8px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(255, 255, 255, 0.92)',
                        color: '#111111',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.70rem',
                        fontWeight: 600
                      }}
                    >
                      {dash.year}
                    </span>
                  </div>

                  {/* Zoom Lightbox Trigger Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onOpenImage) onOpenImage(dash);
                    }}
                    aria-label={`View full resolution of ${dash.title}`}
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(17, 17, 17, 0.88)',
                      backdropFilter: 'blur(4px)',
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 160ms ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#E8C547';
                      e.currentTarget.style.color = '#111111';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(17, 17, 17, 0.88)';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                  >
                    <Maximize2 size={13} />
                    <span>FULL SIZE</span>
                  </button>
                </div>

                {/* Content Body */}
                <div
                  style={{
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1
                  }}
                >
                  {/* Category & Dataset Info */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.70rem',
                        fontWeight: 600,
                        color: '#666666',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em'
                      }}
                    >
                      {dash.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.18rem',
                      fontWeight: 700,
                      color: '#111111',
                      lineHeight: 1.3,
                      margin: '0 0 10px 0'
                    }}
                  >
                    {dash.title}
                  </h3>

                  {/* Dataset Name */}
                  {dash.dataset && (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.76rem',
                        color: '#666666',
                        marginBottom: '10px'
                      }}
                    >
                      <Database size={13} color="#888888" />
                      <span style={{ fontWeight: 500 }}>{dash.dataset}</span>
                    </div>
                  )}

                  {/* Objective */}
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.86rem',
                      color: '#555555',
                      lineHeight: 1.55,
                      margin: '0 0 16px 0',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      flex: 1
                    }}
                  >
                    {dash.objective}
                  </p>

                  {/* Charts Used Badges */}
                  {dash.chartsUsed && dash.chartsUsed.length > 0 && (
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px',
                        marginBottom: '20px'
                      }}
                    >
                      {dash.chartsUsed.slice(0, 3).map((chart) => (
                        <span
                          key={chart}
                          style={{
                            padding: '3px 8px',
                            borderRadius: '6px',
                            backgroundColor: '#F3F3F1',
                            border: '1px solid #E2E2DE',
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.68rem',
                            fontWeight: 500,
                            color: '#444444'
                          }}
                        >
                          {chart}
                        </span>
                      ))}
                      {dash.chartsUsed.length > 3 && (
                        <span
                          style={{
                            padding: '3px 6px',
                            borderRadius: '6px',
                            backgroundColor: '#F3F3F1',
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.68rem',
                            fontWeight: 600,
                            color: '#666666'
                          }}
                        >
                          +{dash.chartsUsed.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Card Actions Footer */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '16px',
                      borderTop: '1px solid #EEEEEE',
                      marginTop: 'auto'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <button
                        type="button"
                        onClick={() => {
                          if (onOpenDetail) {
                            onOpenDetail(dash);
                          }
                        }}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '8px 16px',
                          borderRadius: '10px',
                          backgroundColor: '#111111',
                          color: '#FFFFFF',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 160ms ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#E8C547';
                          e.currentTarget.style.color = '#111111';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#111111';
                          e.currentTarget.style.color = '#FFFFFF';
                        }}
                      >
                        <span>VIEW DASHBOARD</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        if (onOpenImage) onOpenImage(dash);
                      }}
                      style={{
                        padding: '8px 14px',
                        borderRadius: '10px',
                        backgroundColor: '#F3F3F1',
                        border: '1px solid #DCDCDC',
                        color: '#333333',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 160ms ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#111111';
                        e.currentTarget.style.color = '#FFFFFF';
                        e.currentTarget.style.borderColor = '#111111';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#F3F3F1';
                        e.currentTarget.style.color = '#333333';
                        e.currentTarget.style.borderColor = '#DCDCDC';
                      }}
                    >
                      LIGHTBOX
                    </button>
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
