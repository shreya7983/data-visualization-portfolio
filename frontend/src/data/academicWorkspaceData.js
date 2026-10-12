/**
 * MY VISUAL DATA WORKSPACE — CENTRALIZED CONTENT DATA STRUCTURE
 * 
 * To add a new dashboard, assignment, report, or data project:
 * Simply add an object to the corresponding array below with your details.
 * No database required!
 */

export const ACADEMIC_ASSIGNMENTS = [
  {
    id: "assignment-01",
    num: "01",
    title: "DRAW YOUR DAY // DAILY ENERGY CURVE",
    assignment: "Daily Life - Time Distribution & Energy Level by Time",
    teacher: "Prof. Anand Sharma // Data Representation Atelier",
    task: "Track, record, and visually encode personal daily behavioral patterns, focus hours, and cognitive energy cycles into an interactive Power BI analytics dashboard.",
    myApproach: "Recorded 24-hour daily life routines across classes, sleep, study, meals, and recreation, transforming timestamp intervals into donut chart distributions and diurnal energy curve trajectories.",
    tools: "Power BI",
    tool: "Power BI",
    category: "Data Visualization · Power BI",
    year: "2026",
    file: "/documents/audience-context.pdf",
    preview: "/images/assignments/draw-your-day.png",
    subtitle: "Daily Energy Level: Personal quantified-self analytics tracking daily life time distribution and energy levels.",
    description: "Quantified-self study in Power BI analyzing daily life time distribution (Classes 33.3%, Sleep 25%, Study 16.7%) and diurnal energy level variations from morning peaks (8/10) to evening recovery (6/10).",
    highlights: [
      "Donut chart breakdown of 24h routine: Classes (8h / 33.3%), Sleep (6h / 25%), Study (4h / 16.7%), Meals, Recreation, Exercise",
      "Diurnal energy curve mapping morning peak (8/10) down to afternoon lull and evening recovery",
      "Clean Power BI dashboard layout with card containers and high-contrast color scheme"
    ]
  },
  {
    id: "assignment-02",
    num: "02",
    title: "EXPLORE DATA VISUALIZATION IN THE REAL WORLD",
    assignment: "Selected Field: E-Commerce Data Visualization",
    teacher: "Dr. Radhika Sen // Department of Business Analytics",
    task: "Conduct a multi-tier exploratory analysis on commercial retail transactions, identifying drop-off bottlenecks in the conversion funnel, customer payment modalities, and category sales trends.",
    myApproach: "Formulated Power BI visual architecture covering product category sales, monthly revenue progression, end-to-end checkout funnel drop-off, discount elasticity, payment channel share, and geographic sales map.",
    tools: "Power BI",
    tool: "Power BI",
    category: "Data Visualization · Power BI",
    year: "2026",
    file: "/documents/data-visualization-report.pdf",
    preview: "/images/assignments/ecommerce-analytics.png",
    subtitle: "Exploring Sales, Customer Behaviour & E-Commerce Trends in Power BI.",
    description: "Comprehensive e-commerce analytics dashboard featuring product category sales, monthly revenue progression (Jan 80K to Jun 125K), multi-tier order conversion funnel (1.2% completion), payment methods, and geographic state sales mapping.",
    highlights: [
      "Full-funnel order conversion tracking from 100% website visitors to 1.2% final completed orders",
      "Monthly sales trajectory modeling consistent growth from $80K (Jan) to $125K (June)",
      "Payment modality distribution: UPI (45%), Credit Card (25%), Debit Card (18%), COD (12%)",
      "Geographic state-level sales mapping and category sales breakdown (Electronics 35.7%, Clothing 22.6%)"
    ]
  },
  {
    id: "assignment-03",
    num: "03",
    title: "ENERGY CURVE & CONSUMPTION PATTERNS",
    assignment: "Time-Series Modeling & Peak Demand Analysis",
    teacher: "Prof. K. Narayanan // Applied Computing & Energy Systems",
    task: "Analyze municipal grid load datasets to isolate seasonal temperature correlations, hourly peak usage spikes, and baseload fluctuations across residential and commercial sectors.",
    myApproach: "Processed multi-gigabyte smart meter logs, modeled non-linear diurnal cycles using Seaborn and Python, and constructed interactive dual-axis energy duration curves to quantify grid reserve margin risks.",
    tools: "Python / Pandas / Tableau",
    tool: "Python",
    category: "Data Visualization · Python",
    year: "2025",
    file: "/documents/healthcare-throughput-whitepaper.pdf",
    preview: "/images/dashboards/healthcare-flow.svg",
    subtitle: "Statistical variance modeling, anomaly detection, and kernel density visualization across non-normal datasets.",
    description: "Comparative visual study contrasting Gaussian bell curves against empirical right-skewed multimodal distributions using Seaborn violin plots, KDEs, and box-and-whisker quartiles.",
    highlights: [
      "Evaluated outlier sensitivity across arithmetic mean versus median benchmarks",
      "Designed high-contrast ridge distributions across 24-hour chronological cycles",
      "Implemented interquartile range (IQR) visual threshold markers"
    ]
  },
  {
    id: "assignment-04",
    num: "04",
    title: "VISUAL COGNITION & CHART ANATOMY",
    assignment: "Cognitive Ergonomics & Preattentive Perception",
    teacher: "Prof. Elena Vance // Information Design Institute",
    task: "Deconstruct flawed chart archetypes from published reports and redesign them according to Gestalt principles, WCAG accessibility standards, and visual encoding hierarchy.",
    myApproach: "Executed comparative perceptual speed benchmarks comparing 2D position against 3D angles, calibrated an accessible high-contrast color palette, and reconstructed 4 complex multi-variable dashboards.",
    tools: "Tableau / Figma / Excel",
    tool: "Tableau",
    category: "Data Visualization · Tableau",
    year: "2025",
    file: "/documents/paper-leaks-audit.pdf",
    preview: "/images/dashboards/air-quality.svg",
    subtitle: "Dissecting preattentive attributes, Gestalt grouping laws, and accessible chromatic palettes.",
    description: "Academic critique and redesign of flawed chart archetypes. Examines visual hierarchy, 2D position superiority over area/angle, and color contrast compliance for universal legibility.",
    highlights: [
      "Demonstrated 2.3x faster quantitative comprehension with 2D bar length over 3D pie angles",
      "Calibrated WCAG AAA compliant palette",
      "Applied Gestalt proximity and continuity rules to complex multi-chart dashboards"
    ]
  }
];

export const ACADEMIC_DOCUMENTS = [
  {
    id: "doc-01",
    title: "DATA VISUALIZATION REPORT",
    subtitle: "Comprehensive Visual Analytics & Interface Methodology",
    format: "PDF",
    pages: 12,
    year: "2026",
    category: "Report",
    file: "/documents/data-visualization-report.pdf",
    tool: "Comprehensive",
    description: "Formal academic report examining the intersection of exploratory visual data analysis, interface cognitive ergonomics, and modern narrative data presentation.",
    topics: ["Perceptual Cognition", "Dashboard Information Architecture", "Interactive Filtering Heuristics", "Case Study Synthesis"]
  },
  {
    id: "doc-02",
    title: "EXAMINATION INTEGRITY & SPATIOTEMPORAL AUDIT",
    subtitle: "Systemic Vulnerability & Chronological Incident Analysis",
    format: "PDF",
    pages: 18,
    year: "2026",
    category: "Report",
    file: "/documents/paper-leaks-audit.pdf",
    tool: "Power BI & DAX",
    description: "Full research methodology documentation tracking chronological incident clustering, state-level choropleth modeling, and cryptographic distribution audit frameworks.",
    topics: ["Public Policy Data", "Spatiotemporal Clustering", "State Testing Board Variance", "Recurrence Mitigation"]
  },
  {
    id: "doc-03",
    title: "EMERGENCY DEPARTMENT THROUGHPUT WHITEPAPER",
    subtitle: "Discrete-Event Queueing Modeling & Bottleneck Analysis",
    format: "PDF",
    pages: 14,
    year: "2026",
    category: "Report",
    file: "/documents/healthcare-throughput-whitepaper.pdf",
    tool: "Python & SciPy",
    description: "Clinical patient throughput whitepaper quantifying waiting times across emergency triage severity levels and evaluating the operational impact of dedicated fast-track care lanes.",
    topics: ["Queueing Theory", "ESI Acuity Stratification", "Throughput Velocity", "Downstream Bed Bottlenecks"]
  },
  {
    id: "doc-04",
    title: "AUDIENCE & CONTEXT METHODOLOGY NOTES",
    subtitle: "Curated Framework for Tailoring Data Representations",
    format: "PDF",
    pages: 8,
    year: "2026",
    category: "Documentation",
    file: "/documents/audience-context.pdf",
    tool: "Excel",
    description: "Curated documentation on tailoring data visual representations for varied stakeholder mental models, from C-suite scorecards to deep statistical analyst dossiers.",
    topics: ["Stakeholder Mental Models", "Information Density Calibration", "Visual Scaffolding", "Actionable Decision Triggers"]
  }
];

export const OTHER_DATA_WORK = [
  {
    id: "work-01",
    title: "Healthcare ER Queue Simulation",
    tool: "Python (SimPy, Pandas, Plotly)",
    category: "EDA & Simulation",
    year: "2026",
    description: "Discrete-event stochastic simulation of patient arrival waves and triage capacity to quantify emergency room bottlenecks.",
    keyMetric: "31 min reduction in length-of-stay",
    preview: "/images/dashboards/healthcare-flow.svg",
    skills: ["Stochastic Modeling", "Discrete-Event Simulation", "Interactive Survival Curves", "Queue Optimization"]
  },
  {
    id: "work-02",
    title: "Campus Placement Econometric Model",
    tool: "Advanced Excel (Power Query, DAX)",
    category: "Statistical Modeling",
    year: "2025",
    description: "Regression analysis and hiring funnel modeling examining the empirical impact of prior internships on compensation velocity.",
    keyMetric: "42 days faster time-to-first-offer",
    preview: "/images/dashboards/placement-analysis.svg",
    skills: ["Power Query ETL", "Dynamic Pivot Scenarios", "Pareto Analysis", "Funnel Conversion Modeling"]
  },
  {
    id: "work-03",
    title: "Urban Meteorological Dispersion Study",
    tool: "Tableau & GIS Spatial Layers",
    category: "Spatial Analytics",
    year: "2026",
    description: "Bivariate spatial regression analyzing PM2.5 / PM10 concentration spikes alongside seasonal wind vector roses and thermal inversion layers.",
    keyMetric: "3.4x winter inversion amplification",
    preview: "/images/dashboards/air-quality.svg",
    skills: ["GIS Spatial Mapping", "Polar Vector Compass", "Temporal Trend Series", "Environmental Policy Insights"]
  },
  {
    id: "work-04",
    title: "Global Retail Profitability & Elasticity",
    tool: "Tableau Desktop & Calculated Fields",
    category: "Business Analytics",
    year: "2025",
    description: "Quadrant discount elasticity scatter matrix isolating negative margin inflection points across commercial categories.",
    keyMetric: "20% discount breakeven threshold",
    preview: "/images/dashboards/superstore-sales.svg",
    skills: ["Margin Elasticity", "Cohort Lifetime Value", "Dual-Axis Revenue Trajectory", "Regional Heatmaps"]
  }
];