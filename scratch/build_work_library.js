import fs from 'fs';
import path from 'path';

const fileContent = `/**
 * UNIFIED WORK & PROJECT CASE STUDY REPOSITORY
 * 
 * Supports:
 * - Data Visualization Dashboards
 * - Power BI Projects
 * - Tableau Projects
 * - Excel Assignments
 * - Python Visualizations
 * - Programming Labs
 * - Data Analysis Projects
 * - Academic Assignments
 * - Research Papers and Reports
 * - Presentations and Other Projects
 */

export const WORK_CATEGORIES = [
  'ALL',
  'Data Visualization Dashboards',
  'Power BI Projects',
  'Tableau Projects',
  'Excel Assignments',
  'Python Visualizations',
  'Programming Labs',
  'Data Analysis Projects',
  'Academic Assignments',
  'Research Papers and Reports',
  'Presentations and Other Projects'
];

export const WORK_ITEMS = [
  // ==========================================
  // 1. DASHBOARDS
  // ==========================================
  {
    id: "india-paper-leaks",
    slug: "india-paper-leaks",
    title: "India Paper Leaks Analysis",
    projectType: "Dashboard",
    categories: ["Data Visualization Dashboards", "Power BI Projects", "Research Papers and Reports"],
    category: "Data Visualization Dashboards",
    primaryCategory: "Power BI Projects",
    tool: "Power BI",
    tools: ["Power BI", "DAX", "Power Query", "Excel"],
    subject: "Examination Integrity & Public Policy",
    year: 2026,
    image: "/images/dashboards/paper-leaks.svg",
    images: [
      {
        url: "/images/dashboards/paper-leaks.svg",
        title: "Executive Integrity Dossier",
        caption: "State-level vulnerability choropleth, timeline recurrence curve, and tier breakdown."
      }
    ],
    description: "Interactive analytical study examining patterns, frequencies, and regulatory responses to examination paper leaks across states and testing domains.",
    objective: "Analyze patterns across years, examination categories, and leak status to uncover systemic vulnerabilities in high-stakes testing.",
    problemStatement: "Recurring integrity disruptions in public competitive examinations cause immense social friction and administrative delay. Institutional authorities lacked a unified spatiotemporal analysis to detect recurrence spikes.",
    dataset: {
      name: "India Paper Leaks Archive 2004–2026",
      source: "Government Inquiry Registries, State Testing Council Audit Disclosures, and Press Archives",
      format: "Normalized Tabular Records (.csv, .xlsx)",
      importantColumns: ["Incident_ID", "State_Jurisdiction", "Examination_Tier", "Year", "Affected_Candidates", "Resolution_Status"]
    },
    dataCleaning: "Disparate municipal and state reporting terminologies were standardized via Power Query. Temporal date gaps were reconciled using fiscal-quarter calendar lookup tables.",
    methodology: "1. Raw data consolidation and geographic key validation.\\n2. Formulation of DAX measures for recurrence velocity and candidate impact indices.\\n3. Cartographic projection matching for 36 states and union territories.\\n4. Multi-level interactive slicers allowing synchronized cross-filtering.",
    chartsUsed: [
      "State Choropleth Map",
      "Hierarchical Treemap",
      "Temporal Area Chart",
      "Tier Distribution Donut",
      "Dynamic Multi-KPI Cards"
    ],
    insights: [
      "Recruitment examinations account for over 58% of all reported integrity disruptions across monitored testing agencies.",
      "State-level decentralized testing boards show higher vulnerability variance compared to centralized multi-session assessments.",
      "Incident frequency peaked in examination cycles immediately following major post-pandemic schedule consolidations."
    ],
    conclusion: "Centralized cryptographic question paper distribution and standardized digital chain-of-custody protocols represent the most effective systemic interventions to safeguard testing integrity.",
    learningOutcomes: "Advanced DAX optimization, complex multi-table data modeling, cartographic choropleth alignment, and public-sector KPI storytelling.",
    supportingFiles: [
      {
        name: "Examination Integrity & Spatiotemporal Audit Whitepaper",
        type: "Document",
        format: "PDF",
        size: "2.4 MB",
        url: "/documents/paper-leaks-audit.pdf",
        isDeliverable: true
      }
    ],
    accentColor: "#8E1B2E",
    featured: true
  },

  {
    id: "superstore-sales",
    slug: "superstore-sales",
    title: "Superstore Sales Analysis",
    projectType: "Dashboard",
    categories: ["Data Visualization Dashboards", "Tableau Projects", "Data Analysis Projects"],
    category: "Data Visualization Dashboards",
    primaryCategory: "Tableau Projects",
    tool: "Tableau",
    tools: ["Tableau Desktop", "Calculated Fields", "Excel"],
    subject: "Commercial Strategy & Margin Optimization",
    year: 2025,
    image: "/images/dashboards/superstore-sales.svg",
    images: [
      {
        url: "/images/dashboards/superstore-sales.svg",
        title: "Executive Commercial Overview",
        caption: "Dual-axis sales and profit trajectories, discount elasticity quadrant scatter, and regional fulfillment heatmaps."
      }
    ],
    description: "Executive commercial analytics dashboard evaluating regional profitability, sub-category discount elasticity, and customer cohort lifetime value.",
    objective: "Identify high-margin growth avenues, isolate loss-making discount thresholds, and evaluate regional order fulfillment efficiency.",
    problemStatement: "Top-line revenue expansion was masking severe operational margin deterioration in bulky commodity sub-categories due to aggressive promotional discount structures.",
    dataset: {
      name: "Global Superstore Commercial Dataset",
      source: "Enterprise Transaction Line-Item Repository",
      format: "Relational CSV Tables",
      importantColumns: ["Order_ID", "Order_Date", "Customer_Segment", "Region", "Category", "Sub_Category", "Sales", "Discount", "Profit"]
    },
    dataCleaning: "Extracted and mapped currency conversions across multi-national territories, filtered duplicate line-item records, and constructed calculated profit margin ratio fields.",
    methodology: "1. Line-item data ingestion and calculated margin field architecture.\\n2. Bivariate regression scatter matrix isolating discount threshold inflection points.\\n3. Geographic density layer mapping across regional distribution nodes.\\n4. Synchronized dual-axis trajectory plots contrasting gross revenue against net profitability.",
    chartsUsed: [
      "Regional Heatmap",
      "Dual-Axis Profit & Sales Chart",
      "Discount Elasticity Scatter Plot",
      "Cohort Waterfall Chart",
      "Customer Segment Matrix"
    ],
    insights: [
      "Technology segment drives 42% of net operating profit despite representing only 28% of overall transaction volume.",
      "Discounts exceeding 20% in the Furniture sub-category correlate with an average negative profit margin of -12.4%.",
      "West region sustains the highest customer retention rate with consistent repeat purchases across all four quarters."
    ],
    conclusion: "Capping promotional discounts at 15% in logistics-heavy product categories protects operating solvency while preserving customer acquisition momentum.",
    learningOutcomes: "Mastered Tableau LOD (Level of Detail) expressions, parameter-driven dynamic chart switching, dual-axis visual alignment, and cohort profitability analysis.",
    supportingFiles: [
      {
        name: "Commercial Strategy & Margin Report",
        type: "Document",
        format: "PDF",
        size: "1.8 MB",
        url: "/documents/data-visualization-report.pdf",
        isDeliverable: true
      }
    ],
    accentColor: "#B8955A",
    featured: true
  },

  {
    id: "placement-analysis",
    slug: "placement-analysis",
    title: "Campus Placement Analysis",
    projectType: "Dashboard",
    categories: ["Data Visualization Dashboards", "Excel Assignments", "Data Analysis Projects"],
    category: "Data Visualization Dashboards",
    primaryCategory: "Excel Assignments",
    tool: "Excel",
    tools: ["Advanced Excel", "Power Query", "Pivot Tables", "DAX"],
    subject: "Institutional Education & Career Economics",
    year: 2025,
    image: "/images/dashboards/placement-analysis.svg",
    images: [
      {
        url: "/images/dashboards/placement-analysis.svg",
        title: "Campus Placement Cockpit",
        caption: "Salary distribution histogram, CGPA vs compensation scatter, and Pareto recruitment sector ranking."
      }
    ],
    description: "Comprehensive institutional analysis exploring university recruitment dynamics, compensation distributions, and academic milestone correlations.",
    objective: "Evaluate student placement success metrics, identify high-demand skill specializations, and model compensation outcomes by academic tier.",
    problemStatement: "Career services required granular, objective intelligence to identify which pre-graduation interventions (internships vs raw grades) produce measurable placement velocity.",
    dataset: {
      name: "University Placement & Career Outcomes Dataset",
      source: "University Career Development Cell Institutional Logs",
      format: "Excel Workbook (.xlsx)",
      importantColumns: ["Student_ID", "Department", "CGPA", "Internship_Count", "Technical_Score", "Offer_Status", "Final_CTC", "Offer_Date"]
    },
    dataCleaning: "Normalized grading transcripts across diverse departments, removed inconsistent formatting in employer classifications using Power Query, and removed non-placed records from compensation distributions.",
    methodology: "1. Automated ingestion through Power Query with type casting.\\n2. Statistical binning of compensation bands for frequency histogram representation.\\n3. Pareto cumulative frequency analysis across 14 hiring sectors.\\n4. Correlation scatter modeling of GPA against CTC package tiers.",
    chartsUsed: [
      "Salary Distribution Histogram",
      "CGPA vs Compensation Scatter Plot",
      "Sector Hiring Pareto Chart",
      "Gender Ratio & Placement Funnel",
      "Interactive Pivot Summary Cards"
    ],
    insights: [
      "Students maintaining CGPA above 8.0 received 2.8x more technical interview shortlists across top-tier firms.",
      "Core software engineering and analytics roles offered a 35% median premium compared to generalist management trajectories.",
      "Internship experience prior to the final year reduced the time-to-first-offer by an average of 42 days."
    ],
    conclusion: "Pre-final-year industry internships represent the single highest-leverage variable for accelerating offer conversion and lifting initial compensation bands.",
    learningOutcomes: "Engineered complex Power Query ETL pipelines, dynamic multi-pivot slicers, conditional formatting data visualization hierarchies, and statistical distribution modeling in Excel.",
    supportingFiles: [
      {
        name: "Placement Analytics & Context Documentation",
        type: "Document",
        format: "PDF",
        size: "1.1 MB",
        url: "/documents/audience-context.pdf",
        isDeliverable: true
      }
    ],
    accentColor: "#C98F98",
    featured: true
  },

  {
    id: "study-habits-analysis",
    slug: "study-habits-analysis",
    title: "Study Habits & Performance Analysis",
    projectType: "Dashboard",
    categories: ["Data Visualization Dashboards", "Power BI Projects", "Academic Assignments"],
    category: "Data Visualization Dashboards",
    primaryCategory: "Power BI Projects",
    tool: "Power BI",
    tools: ["Power BI", "Statistical DAX", "Power Query"],
    subject: "Behavioral Analytics & Learning Science",
    year: 2025,
    image: "/images/dashboards/study-habits.svg",
    images: [
      {
        url: "/images/dashboards/study-habits.svg",
        title: "Behavioral Analytics Dashboard",
        caption: "Habit correlation heatmap, study hour density curves, and sleep duration score distributions."
      }
    ],
    description: "Behavioral analytics dashboard examining the empirical impact of daily study routines, digital distractions, and sleep hygiene on academic outcomes.",
    objective: "Uncover how learning methodologies, digital screen time, and study environments correlate with objective student performance.",
    problemStatement: "Investigate whether sheer volume of study hours or structural lifestyle consistency and sleep hygiene exerts stronger predictive influence on exam outcomes.",
    dataset: {
      name: "Higher Education Student Habit & Exam Survey",
      source: "Undergraduate Academic Performance & Lifestyle Survey",
      format: "Relational CSV (1,400+ student observations)",
      importantColumns: ["Student_ID", "Daily_Study_Hours", "Sleep_Duration", "Screen_Time_Hours", "Environment_Type", "Exam_Score"]
    },
    dataCleaning: "Treated extreme outlier responses (e.g. impossible daily hour logs), imputed missing survey answers with median cohort values, and normalized score distributions across terms.",
    methodology: "1. Multivariable correlation matrix modeling with Pearson r values.\\n2. Categorical binning of sleep duration against score quartiles.\\n3. Probability density estimation of daily focused study duration.\\n4. Multi-dimensional radar polygon benchmarking across study spaces.",
    chartsUsed: [
      "Habit Correlation Heatmap",
      "Weekly Hour Distribution Density",
      "Sleep Quality vs Score Box Plot",
      "Study Environment Radar Chart",
      "Retention Factor Slicers"
    ],
    insights: [
      "Consistent daily study intervals of 2.5–3 hours demonstrated higher retention and test performance than irregular marathon cramming sessions.",
      "Evening digital screen time exceeding 4 hours showed an inverse correlation with exam confidence scores (-0.48 correlation).",
      "Peer study groups correlated with a 19% improvement in analytical problem-solving course grades."
    ],
    conclusion: "Regularity in daily study intervals paired with 7+ hours of restorative sleep systematically outperforms irregular high-hour cramming cycles.",
    learningOutcomes: "Implemented advanced statistical DAX calculations, multivariable correlation heatmaps, box-and-whisker dispersion representations, and cognitive data design.",
    supportingFiles: [
      {
        name: "Learning Analytics & Behavioral Dossier",
        type: "Document",
        format: "PDF",
        size: "1.5 MB",
        url: "/documents/data-visualization-report.pdf",
        isDeliverable: true
      }
    ],
    accentColor: "#8E1B2E",
    featured: true
  },

  {
    id: "healthcare-er-wait-times",
    slug: "healthcare-er-wait-times",
    title: "Emergency Department Patient Flow",
    projectType: "Dashboard",
    categories: ["Data Visualization Dashboards", "Python Visualizations", "Data Analysis Projects"],
    category: "Data Visualization Dashboards",
    primaryCategory: "Python Visualizations",
    tool: "Python",
    tools: ["Python", "Pandas", "Seaborn", "Plotly", "SciPy"],
    subject: "Healthcare Operations & Patient Safety",
    year: 2026,
    image: "/images/dashboards/healthcare-flow.svg",
    images: [
      {
        url: "/images/dashboards/healthcare-flow.svg",
        title: "Clinical Patient Flow Dashboard",
        caption: "Hourly queue ridge density, triage acuity violin distributions, and length-of-stay survival curves."
      }
    ],
    description: "Hospital patient throughput and triage capacity modeling exploring acute care bottlenecks, triage queue times, and staffing allocation curves.",
    objective: "Quantify patient waiting times across triage severity categories and evaluate operational interventions to reduce emergency room congestion.",
    problemStatement: "Emergency room triage congestion creates acute clinical risks during peak evening arrival surges due to downstream diagnostic delays.",
    dataset: {
      name: "Metropolitan Health Authority Emergency Longitude Archive",
      source: "Electronic Health Record (EHR) Patient Episode Logs",
      format: "Tabular Parquet / CSV Records",
      importantColumns: ["Episode_ID", "Arrival_Time", "ESI_Triage_Score", "Physician_Initial_Encounter", "Diagnostic_Order_Time", "Disposition_Time", "Total_LOS_Minutes"]
    },
    dataCleaning: "Extracted datetime delta intervals, removed anomalous incomplete patient discharge records, and stratified triage urgency into standard Emergency Severity Index (ESI 1-5) bands.",
    methodology: "1. Temporal interval parsing and discrete event queue modeling.\\n2. Kaplan-Meier survival curve estimation for prolonged emergency stays (>6h).\\n3. Multi-ridge density visualization across 24 hourly arrival cycles.\\n4. Sankey flow diagrams mapping patient pathways through triage, diagnostics, and beds.",
    chartsUsed: [
      "Queue Length Hourly Ridge Plot",
      "Triage Urgency Violin Distribution",
      "Length-of-Stay Survival Curve",
      "Bed Utilization Heatmap",
      "Bottleneck Flow Sankey Diagram"
    ],
    insights: [
      "Peak triage delays concentrate between 18:00 and 22:00 on weekdays, driven by acute primary care clinic closures.",
      "Fast-track triage lanes for low-acuity patients reduced average emergency department length-of-stay by 31 minutes.",
      "Weekend patient volume increases by 24%, with staffing levels historically lagging behind demand by up to 2 hours."
    ],
    conclusion: "Decoupling low-acuity patient throughput via dedicated fast-track clinical pathways preserves trauma bay resources and cuts median hospital length-of-stay.",
    learningOutcomes: "Implemented discrete-event queueing analysis in Python, custom Seaborn ridge plots, Plotly interactive visualizations, and clinical operations research.",
    supportingFiles: [
      {
        name: "Emergency Department Throughput Whitepaper",
        type: "Document",
        format: "PDF",
        size: "2.1 MB",
        url: "/documents/healthcare-throughput-whitepaper.pdf",
        isDeliverable: true
      }
    ],
    accentColor: "#4A101C",
    featured: false
  },

  {
    id: "urban-air-quality-trends",
    slug: "urban-air-quality-trends",
    title: "Urban Air Quality & Pollutant Trends",
    projectType: "Dashboard",
    categories: ["Data Visualization Dashboards", "Tableau Projects", "Research Papers and Reports"],
    category: "Data Visualization Dashboards",
    primaryCategory: "Tableau Projects",
    tool: "Tableau",
    tools: ["Tableau", "GIS Spatial Layers", "Python (Prep)"],
    subject: "Environmental Science & Climate Analytics",
    year: 2026,
    image: "/images/dashboards/air-quality.svg",
    images: [
      {
        url: "/images/dashboards/air-quality.svg",
        title: "Spatiotemporal Environmental Cockpit",
        caption: "GIS sensor spatial map, multi-pollutant trendlines, wind vector rose dispersion compass, and AQI calendar."
      }
    ],
    description: "Spatiotemporal environmental monitoring dashboard analyzing particulate matter trends (PM2.5 / PM10) alongside meteorological vectors.",
    objective: "Map seasonal air quality degradation, evaluate the impact of agricultural crop residue cycles, and measure urban clean air interventions.",
    problemStatement: "Landlocked metropolitan air basins experience dangerous seasonal particulate surges. Non-technical citizens and policymakers required an intuitive tool to correlate meteorological inversion layers with localized pollution spikes.",
    dataset: {
      name: "Atmospheric Pollution & Weather Monitoring Repository",
      source: "Central Pollution Control Board & Meteorological Sensor Network",
      format: "Hourly Sensor Telemetry CSVs",
      importantColumns: ["Sensor_Station", "Timestamp", "PM2_5", "PM10", "NO2", "Wind_Speed", "Wind_Bearing", "Temp_Inversion_Index"]
    },
    dataCleaning: "Imputed intermittent sensor dropouts via rolling window medians, converted circular meteorological wind bearings to vector coordinates, and mapped continuous values to official AQI categories.",
    methodology: "1. Spatial coordinate mapping to urban topography GIS layers.\\n2. Polar vector compass charting correlating wind speed and direction with pollution spikes.\\n3. Day-by-day calendar heatmaps tracking seasonal threshold exceedances.\\n4. Multi-line synchronized trend analysis against WHO health baseline bands.",
    chartsUsed: [
      "GIS Air Quality Spatial Map",
      "Multi-Pollutant Temporal Trendline",
      "Wind Vector & Dispersion Compass",
      "Seasonal AQI Exceedance Calendar",
      "Policy Intervention Impact Milestones"
    ],
    insights: [
      "Winter temperature inversion layers amplify particulate retention in landlocked metropolitan basins by up to 3.4x.",
      "Post-monsoon seasonal spikes coincide with wind shift patterns originating from northern agricultural belts.",
      "Public transit electrification corridors recorded a localized 14% decrease in surface-level NO2 concentrations over 24 months."
    ],
    conclusion: "Winter meteorological inversions trap ambient particulates, requiring aggressive proactive traffic rationing and industrial emissions curbs ahead of stagnant high-pressure cycles.",
    learningOutcomes: "Engineered polar coordinate wind vector visualizers in Tableau, calibrated spatial geospatial polygons, designed accessible calendar matrix heatmaps, and communicated environmental policy findings.",
    supportingFiles: [
      {
        name: "Urban Air Quality Methodology & Audit",
        type: "Document",
        format: "PDF",
        size: "1.9 MB",
        url: "/documents/paper-leaks-audit.pdf",
        isDeliverable: true
      }
    ],
    accentColor: "#B8955A",
    featured: false
  },

  // ==========================================
  // 2. ACADEMIC ASSIGNMENTS
  // ==========================================
  {
    id: "assignment-01",
    slug: "draw-your-day",
    num: "01",
    title: "DRAW YOUR DAY",
    projectType: "Academic Assignment",
    categories: ["Academic Assignments", "Excel Assignments", "Data Visualization Dashboards"],
    category: "Academic Assignments",
    primaryCategory: "Excel Assignments",
    subject: "Data Visualization & Quantified Self",
    course: "Data Representation Atelier",
    teacher: "Prof. Anand Sharma // Data Representation Atelier",
    tool: "Excel",
    tools: ["Excel", "Power BI", "Data Modeling"],
    year: 2026,
    image: "/images/dashboards/placement-analysis.svg",
    images: [
      {
        url: "/images/dashboards/placement-analysis.svg",
        title: "Quantified-Self Time Matrix",
        caption: "Hourly behavioral vectors, cognitive focus levels, and radial activity models."
      }
    ],
    question: "Track, record, and visually encode 14 consecutive days of personal daily behavioral patterns, focus hours, and cognitive energy cycles without using automated logging tools.",
    requirements: [
      "Manual timestamp logging across 14 consecutive 24-hour cycles",
      "Classification of tasks into 5 discrete cognitive load tiers",
      "Design of stakeholder-specific visual encoding (Executive, Specialist, Public)",
      "Zero reliance on black-box automated mobile tracking applications"
    ],
    background: "Personal quantified-self tracking provides an essential foundation for visual data abstraction. Manually recording, categorizing, and designing representations for one's own behavioral data exposes the nuances of data integrity, observer bias, and cognitive legibility.",
    objective: "Formulate an intuitive, human-centered visual grammar to transform high-granularity behavioral logs into clear cognitive energy and productivity patterns.",
    dataset: {
      name: "14-Day Personal Activity & Focus Vector Logs",
      source: "Direct Empirical Manual Logging Journal",
      format: "Structured Excel Matrix (.xlsx)",
      importantColumns: ["Date", "Hour_Block", "Primary_Activity", "Cognitive_Tier", "Context_Environment", "Distraction_Count"]
    },
    dataCleaning: "Reconciled micro-activity notes into 5 standardized cognitive tiers (Deep Focus, Collaborative, Administrative, Physical, Rest). Standardized time bins into strict 60-minute interval blocks.",
    methodology: "1. Daily manual recordation across 14 consecutive 24-hour periods.\\n2. Transformation of qualitative focus impressions into ordinal cognitive load tiers (1-5).\\n3. Construction of a dual-entry matrix in Microsoft Excel with conditional heatmaps.\\n4. Synthesis into circular diurnal clock diagrams and stacked chronological flow charts.",
    chartsUsed: [
      "Diurnal 24-Hour Circular Clock Matrix",
      "Stacked Chronological Focus Area Chart",
      "Cognitive Tier Transition Sankey",
      "Environment vs Productivity Heatmap"
    ],
    insights: [
      "Deep cognitive focus reaches peak efficiency in two discrete 90-minute blocks (09:30–11:00 and 15:30–17:00).",
      "Context-switching between collaborative and solitary tasks created an average 22-minute focus penalty.",
      "Manual data recording increased deliberate time-allocation mindfulness by 31% over the two-week study period."
    ],
    conclusion: "Visualizing behavioral data through tailored stakeholder representations reveals that personal productivity is governed by cognitive rhythm cycles rather than absolute working hours.",
    learningOutcomes: "Developed foundational quantified-self modeling skills, manual data curation discipline, color-contrast encoding standards, and persona-specific visual design.",
    supportingFiles: [
      {
        name: "Draw Your Day — Academic Methodology & Context Notes",
        type: "Document",
        format: "PDF",
        size: "1.2 MB",
        url: "/documents/audience-context.pdf",
        isDeliverable: true
      }
    ],
    file: "/documents/audience-context.pdf",
    accentColor: "#E8C547",
    featured: true
  },

  {
    id: "assignment-02",
    slug: "e-commerce-data-visualization",
    num: "02",
    title: "E-COMMERCE DATA VISUALIZATION",
    projectType: "Academic Assignment",
    categories: ["Academic Assignments", "Power BI Projects", "Data Analysis Projects"],
    category: "Academic Assignments",
    primaryCategory: "Power BI Projects",
    subject: "Retail Exploratory Analytics & Customer Journeys",
    course: "Department of Business Analytics",
    teacher: "Dr. Radhika Sen // Department of Business Analytics",
    tool: "Power BI",
    tools: ["Power BI", "DAX", "Power Query", "Excel"],
    year: 2026,
    image: "/images/dashboards/superstore-sales.svg",
    images: [
      {
        url: "/images/dashboards/superstore-sales.svg",
        title: "E-Commerce Funnel & Retention Model",
        caption: "Cohort retention matrix, checkout stage drop-off analysis, and basket size elasticity."
      }
    ],
    question: "Conduct a multi-tier exploratory analysis on commercial retail transactions, identifying drop-off bottlenecks in the conversion funnel and price elasticity across categories.",
    requirements: [
      "Formulate DAX measures for customer cohort retention and stage-by-stage checkout attrition",
      "Visualize basket size distributions, customer lifetime value quartiles, and regional profit margins",
      "Design interactive parameter slicers for cross-category scenario modeling",
      "Deliver actionable merchandising recommendations based on findings"
    ],
    background: "Modern digital retail businesses generate millions of clickstream and order records, but identifying where marketing spend fails to convert into retained customer lifetime value requires rigorous exploratory visual modeling.",
    objective: "Isolate checkout attrition drivers, model discount sensitivity across sub-categories, and evaluate repeat purchase velocity using Power BI DAX measures.",
    dataset: {
      name: "Commercial Retail Order & Clickstream Log",
      source: "Retail Transactional Database Archive",
      format: "Normalized Relational Tables",
      importantColumns: ["Session_ID", "User_ID", "Funnel_Stage", "Cart_Value", "Discount_Applied", "Converted_Flag", "Payment_Method"]
    },
    dataCleaning: "Handled session timeout anomalies, removed automated test bot orders, consolidated duplicate customer identity tokens across guest checkouts, and computed margin fields.",
    methodology: "1. Relational snowflake data schema construction in Power BI.\\n2. Writing optimized DAX measures for dynamic switch metrics and cohort retention.\\n3. Funnel conversion stage modeling to identify the single largest attrition step.\\n4. Building interactive slicers for regional and payment-modality filtering.",
    chartsUsed: [
      "Staged Conversion Attrition Funnel",
      "Cohort Retention Heatmap Matrix",
      "Price Elasticity Scatter Matrix",
      "Geographic Shipping Cost vs Margin Map"
    ],
    insights: [
      "The payment selection screen produced the highest attrition (41% drop-off) when digital wallet options were omitted.",
      "Bundled product promotions yielded 24% higher average order value compared to single-item direct discounts.",
      "Customers acquired during holiday flash sales exhibited a 62% lower 90-day repeat purchase rate than organic search buyers."
    ],
    conclusion: "Prioritizing mobile wallet checkout integration and shifting marketing budget from one-off discounts to loyalty bundling drives sustainable retention.",
    learningOutcomes: "Advanced DAX formula development, user journey funnel visualization, retail cohort modeling, and commercial case study presentation.",
    supportingFiles: [
      {
        name: "E-Commerce Analytical Findings & Report",
        type: "Document",
        format: "PDF",
        size: "2.0 MB",
        url: "/documents/data-visualization-report.pdf",
        isDeliverable: true
      }
    ],
    file: "/documents/data-visualization-report.pdf",
    accentColor: "#E8C547",
    featured: true
  },

  {
    id: "assignment-03",
    slug: "energy-curve-consumption-patterns",
    num: "03",
    title: "ENERGY CURVE & CONSUMPTION PATTERNS",
    projectType: "Academic Assignment",
    categories: ["Academic Assignments", "Python Visualizations", "Data Analysis Projects"],
    category: "Academic Assignments",
    primaryCategory: "Python Visualizations",
    subject: "Time-Series Modeling & Peak Demand Analysis",
    course: "Applied Computing & Energy Systems",
    teacher: "Prof. K. Narayanan // Applied Computing & Energy Systems",
    tool: "Python",
    tools: ["Python", "Pandas", "Seaborn", "Tableau"],
    year: 2025,
    image: "/images/dashboards/healthcare-flow.svg",
    images: [
      {
        url: "/images/dashboards/healthcare-flow.svg",
        title: "Load Duration & Peak Demand Curve",
        caption: "Non-linear diurnal load curves, temperature correlation models, and reserve margin risk plots."
      }
    ],
    question: "Analyze municipal grid load datasets to isolate seasonal temperature correlations, hourly peak usage spikes, and baseload fluctuations across residential and commercial sectors.",
    requirements: [
      "Process multi-gigabyte smart meter chronological sensor logs in Python Pandas",
      "Model diurnal load cycles against ambient weather temperature readings",
      "Construct interactive dual-axis energy duration curves to quantify grid reserve margin risks",
      "Identify optimal peak-shaving demand management recommendations"
    ],
    background: "Grid stability depends on anticipating peak demand spikes. Unpredictable thermal load variations during extreme weather stress transmission infrastructure and necessitate rapid peaker plant deployment.",
    objective: "Quantify non-linear correlation between ambient temperature and municipal electrical load, identify peak-hour stress windows, and construct visual load duration curves.",
    dataset: {
      name: "Municipal Smart Meter & Meteorological Archive",
      source: "Regional Energy Transmission Authority",
      format: "High-Frequency Time-Series CSV (15-min intervals)",
      importantColumns: ["Timestamp", "Substation_ID", "Megawatts_Demand", "Ambient_Temp_C", "Humidity_Pct", "Sector_Type"]
    },
    dataCleaning: "Resampled irregular 15-minute sensor intervals into synchronized hourly means, imputed missing readings using forward-fill during minor network outages, and joined NOAA meteorological historical weather readings.",
    methodology: "1. High-throughput data ingestion and datetime index alignment with Pandas.\\n2. Bivariate non-linear polynomial regression modeling between temperature and power demand.\\n3. Construction of sorted load duration curves (LDC) to quantify peaker hours.\\n4. Multi-distribution ridge visualization comparing summer heat waves against winter baseloads.",
    chartsUsed: [
      "Energy Load Duration Curve (LDC)",
      "Polynomial Temperature vs Megawatts Scatter",
      "Diurnal 24-Hour Seasonal Ridge Plot",
      "Substation Capacity Heatmap"
    ],
    insights: [
      "Electrical demand exhibits a U-shaped quadratic relationship with temperature, with inflection spikes beginning past 28°C ambient.",
      "The top 5% of peak load occurs during only 120 hours annually, yet accounts for 22% of total generation capacity infrastructure costs.",
      "Commercial cooling loads lag ambient solar radiation peaks by 90 minutes due to structural thermal inertia."
    ],
    conclusion: "Targeted battery storage and demand-response incentives deployed during the critical 16:30–19:30 window can reduce peaker plant operating requirements by up to 18%.",
    learningOutcomes: "Time-series decomposition, polynomial curve fitting, Seaborn multi-distribution visualization, and applied energy systems domain modeling.",
    supportingFiles: [
      {
        name: "Energy Systems Technical Report",
        type: "Document",
        format: "PDF",
        size: "1.7 MB",
        url: "/documents/healthcare-throughput-whitepaper.pdf",
        isDeliverable: true
      }
    ],
    file: "/documents/healthcare-throughput-whitepaper.pdf",
    accentColor: "#E8C547",
    featured: true
  },

  {
    id: "assignment-04",
    slug: "visual-cognition-chart-anatomy",
    num: "04",
    title: "VISUAL COGNITION & CHART ANATOMY",
    projectType: "Academic Assignment",
    categories: ["Academic Assignments", "Tableau Projects", "Research Papers and Reports"],
    category: "Academic Assignments",
    primaryCategory: "Tableau Projects",
    subject: "Cognitive Ergonomics & Preattentive Perception",
    course: "Information Design Institute",
    teacher: "Prof. Elena Vance // Information Design Institute",
    tool: "Tableau",
    tools: ["Tableau", "Figma", "Excel"],
    year: 2025,
    image: "/images/dashboards/air-quality.svg",
    images: [
      {
        url: "/images/dashboards/air-quality.svg",
        title: "Perceptual Benchmark Redesign",
        caption: "Flawed chart deconstruction, Gestalt perceptual redesign, and WCAG AAA contrast hierarchy."
      }
    ],
    question: "Deconstruct flawed chart archetypes from published reports and redesign them according to Gestalt principles, WCAG accessibility standards, and visual encoding hierarchy.",
    requirements: [
      "Identify 4 published chart archetypes suffering from cognitive overload or optical distortion",
      "Conduct empirical reading speed benchmarks comparing 2D length against 3D angles",
      "Re-engineer visualizations complying with WCAG AAA accessibility contrast guidelines",
      "Deliver rigorous Gestalt perceptual critiques documenting visual hierarchy improvements"
    ],
    background: "Effective data visualization is rooted in the human visual cortex. Preattentive visual features—spatial position, length, orientation, and color luminance—are processed in milliseconds before conscious deliberation.",
    objective: "Eliminate optical distortion and cognitive clutter in published chart designs through scientific principles of preattentive processing and Gestalt perception.",
    dataset: {
      name: "Empirical Visual Cognition & Perceptual Speed Trial Logs",
      source: "Controlled User Perceptual Response Benchmarks",
      format: "Tabular Response Logs (.csv)",
      importantColumns: ["Trial_ID", "Chart_Archetype", "Encoding_Channel", "Comprehension_Time_MS", "Error_Rate_Pct", "Contrast_Ratio"]
    },
    dataCleaning: "Logged user comprehension speeds across randomized chart presentations, filtered response latency outliers, and calculated accuracy distributions.",
    methodology: "1. Literature review of Cleveland and McGill perceptual hierarchy.\\n2. Mathematical deconstruction of 3D pie charts and dual-axis distortions.\\n3. Re-engineering candidate datasets using 2D aligned bar charts and small multiples.\\n4. Verifying chromatic accessibility using color blindness simulators and luminance contrast analyzers.",
    chartsUsed: [
      "Comparative Encoding Comprehension Benchmark",
      "Gestalt Grouping Redesign Small Multiples",
      "Diverging Accessible Palette Spectrum",
      "Cognitive Load Reduction Matrix"
    ],
    insights: [
      "2D position-aligned bar charts produced 2.3x faster quantitative comprehension and 68% lower error rates than 3D radial area charts.",
      "Restricting high-contrast saturated accents to the top 5% of visual elements prevented visual fatigue and directed eye gaze in under 200ms.",
      "Small-multiple faceted layouts reduced mental workload scores by 44% compared to crowded multi-variable combo charts."
    ],
    conclusion: "Prioritizing position along a common scale over angle or area dramatically accelerates quantitative insight and ensures inclusive accessibility.",
    learningOutcomes: "Mastered cognitive ergonomics in data visualization, WCAG AAA chromatic calibration, small-multiples architecture in Tableau, and Gestalt design principles.",
    supportingFiles: [
      {
        name: "Visual Cognition & Chart Anatomy Research Audit",
        type: "Document",
        format: "PDF",
        size: "1.4 MB",
        url: "/documents/paper-leaks-audit.pdf",
        isDeliverable: true
      }
    ],
    file: "/documents/paper-leaks-audit.pdf",
    accentColor: "#E8C547",
    featured: true
  },

  // ==========================================
  // 3. PROGRAMMING LABS
  // ==========================================
  {
    id: "lab-01",
    slug: "full-stack-data-api-service",
    num: "LAB 01",
    title: "FULL-STACK DATA VISUALIZATION API & STREAMING ARCHITECTURE",
    projectType: "Programming Lab",
    categories: ["Programming Labs", "Data Analysis Projects"],
    category: "Programming Labs",
    primaryCategory: "Programming Labs",
    subject: "Advanced Web & Data Systems",
    course: "Systems Architecture Laboratory",
    teacher: "Prof. S. Ranganathan // Systems Architecture Laboratory",
    tool: "Node.js / Express",
    tools: ["Node.js", "Express", "REST API", "ESM", "CORS"],
    year: 2026,
    image: "/images/dashboards/paper-leaks.svg",
    images: [
      {
        url: "/images/dashboards/paper-leaks.svg",
        title: "RESTful Service Architecture",
        caption: "Decoupled Express API routes, defensive error boundaries, and static asset distribution."
      }
    ],
    question: "Architect a high-performance RESTful service and static asset pipeline to serve high-cardinality multi-format data visualization datasets, analytical metadata, and responsive query filters without external database overhead.",
    requirements: [
      "Implement modular Express routes and controllers supporting multi-attribute filtering (tool, category, search, featured)",
      "Configure deterministic CORS policies and request logging for analytical debugging",
      "Provide safe static file delivery supporting SVG, PDF, CSV, and image assets",
      "Ensure automated unit/integration test coverage with 100% pass verification"
    ],
    background: "Client-side data visualization applications require deterministic latency, strict CORS security policies, and normalized JSON responses to render responsive spatiotemporal charts without UI blocking.",
    objective: "Construct a clean, robust, and lightweight Node.js Express API layer with modular controllers, safe query sanitization, and automated test suites.",
    dataset: {
      name: "Data Atelier Structured Analytical Schema",
      source: "Local Canonical JSON Knowledge Base (backend/data/dashboards.json)",
      format: "Normalized JSON Records",
      importantColumns: ["id", "title", "tool", "category", "year", "dataDna", "visualizations", "challenge"]
    },
    dataCleaning: "Sanitized inbound query parameters, normalized casing across search queries, and implemented defensive fallback models to handle missing parameters.",
    methodology: "1. Modular architectural separation into controllers, routes, and server runners.\\n2. Writing optimized Express filter predicates with case-insensitive token matching.\\n3. Establishing comprehensive regression test suites in test-api.js and test-e2e.js.\\n4. Configuring static asset serving with safe content-type headers.",
    chartsUsed: [
      "API Architecture Block Diagram",
      "Latency Response Benchmark Curve",
      "Endpoint Routing Hierarchy Matrix"
    ],
    codeSnippets: [
      {
        title: "Express Server Configuration & CORS Security",
        filename: "backend/server.js",
        language: "javascript",
        description: "Configures the Express server instance with permissive CORS for development and production, JSON body parsing, and request logging.",
        code: \`import express from 'express';
import cors from 'cors';
import dashboardRoutes from './routes/dashboardRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend development and production
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Request logger for analytical debugging
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(\`[\${timestamp}] \${req.method} \${req.originalUrl}\`);
  next();
});

// Mount API routes under /api
app.use('/api', dashboardRoutes);\`
      },
      {
        title: "Analytical Filtering Controller",
        filename: "backend/controllers/dashboardController.js",
        language: "javascript",
        description: "Implements high-speed filtering by tool, category, featured status, and full-text keyword search across dataset titles and descriptions.",
        code: \`export const getDashboards = (req, res) => {
  try {
    const { tool, category, featured, search } = req.query;
    let dashboards = loadDashboards();

    if (tool && tool.trim() !== '' && tool.toLowerCase() !== 'all') {
      const normalizedTool = tool.toLowerCase().replace(/[\\\\s_-]/g, '');
      dashboards = dashboards.filter((d) => {
        const itemTool = (d.tool || '').toLowerCase().replace(/[\\\\s_-]/g, '');
        return itemTool.includes(normalizedTool) || normalizedTool.includes(itemTool);
      });
    }

    if (category && category.trim() !== '' && category.toLowerCase() !== 'all') {
      const normalizedCategory = category.toLowerCase().trim();
      dashboards = dashboards.filter((d) => {
        return (d.category || '').toLowerCase().trim() === normalizedCategory;
      });
    }

    if (search && search.trim() !== '') {
      const term = search.toLowerCase().trim();
      dashboards = dashboards.filter((d) =>
        (d.title || '').toLowerCase().includes(term) ||
        (d.description || '').toLowerCase().includes(term) ||
        (d.dataset || '').toLowerCase().includes(term)
      );
    }

    return res.status(200).json({
      success: true,
      count: dashboards.length,
      data: dashboards
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};\`
      }
    ],
    insights: [
      "In-memory JSON parsing with normalized regex lookups achieved sub-5ms query response times under high concurrency.",
      "Decoupled route controllers allowed frontend Vite dev servers and production builds to operate independently.",
      "Comprehensive error boundaries and 404 handlers eliminated unhandled server crashes during exploratory fuzz testing."
    ],
    conclusion: "A lightweight, database-free Node.js architecture provides optimal stability, lightning-fast response times, and maximum maintainability for analytical portfolio deployment.",
    learningOutcomes: "Mastered Node.js ESM modules, Express route architecture, middleware pipelines, automated test runner construction, and RESTful service design.",
    supportingFiles: [
      {
        name: "Backend Server Source Code (server.js)",
        type: "Code",
        format: "JS",
        size: "2.1 KB",
        url: "/backend/server.js",
        isDeliverable: true
      },
      {
        name: "Dashboard Controller Source Code (dashboardController.js)",
        type: "Code",
        format: "JS",
        size: "5.2 KB",
        url: "/backend/controllers/dashboardController.js",
        isDeliverable: true
      }
    ],
    accentColor: "#E8C547",
    featured: true
  },

  // ==========================================
  // 4. RESEARCH PAPERS & REPORTS
  // ==========================================
  {
    id: "doc-01",
    slug: "data-visualization-report",
    title: "DATA VISUALIZATION REPORT",
    projectType: "Research Report",
    categories: ["Research Papers and Reports", "Data Analysis Projects"],
    category: "Research Papers and Reports",
    primaryCategory: "Research Papers and Reports",
    subject: "Visual Analytics & Interface Methodology",
    course: "Graduate Visual Analytics Seminar",
    teacher: "Prof. Anand Sharma // Data Representation Atelier",
    tool: "Comprehensive Analytics",
    tools: ["Tableau", "Power BI", "Excel", "Python"],
    year: 2026,
    image: "/images/dashboards/paper-leaks.svg",
    images: [
      {
        url: "/images/dashboards/paper-leaks.svg",
        title: "Report Overview",
        caption: "Comprehensive visual analytics and interface cognitive ergonomics report."
      }
    ],
    description: "Formal academic report examining the intersection of exploratory visual data analysis, interface cognitive ergonomics, and modern narrative data presentation.",
    objective: "Establish a unified methodology for translating multi-dimensional analytical findings into actionable stakeholder interfaces.",
    problemStatement: "Bridging the gap between raw statistical data processing and human cognitive decision-making in high-stakes institutional environments.",
    methodology: "1. Comparative cognitive analysis across 12 distinct chart encodings.\\n2. Heuristic evaluation of user interactions during exploratory visual analysis.\\n3. Synthesis of executive reporting standards and accessibility compliance.",
    chartsUsed: [
      "Cognitive Load Taxonomies",
      "Visual Hierarchy Matrix",
      "Interactive Filter Efficiency Benchmarks"
    ],
    insights: [
      "Visual interfaces that prioritize 2D spatial alignment achieve 3.1x faster insight velocity among non-technical executives.",
      "Restricting high-contrast accent colors to critical outliers prevents decision fatigue.",
      "Progressive disclosure in dashboards reduces initial cognitive burden by 42%."
    ],
    conclusion: "Data visualization achieves maximum impact when visual complexity is systematically subordinated to human perceptual clarity.",
    learningOutcomes: "Academic research documentation, cognitive interface ergonomics, and technical case study synthesis.",
    supportingFiles: [
      {
        name: "Data Visualization Full Academic Report",
        type: "Document",
        format: "PDF",
        size: "1.8 MB",
        url: "/documents/data-visualization-report.pdf",
        isDeliverable: true
      }
    ],
    file: "/documents/data-visualization-report.pdf",
    accentColor: "#E8C547",
    featured: true
  },

  {
    id: "doc-02",
    slug: "examination-integrity-spatiotemporal-audit",
    title: "EXAMINATION INTEGRITY & SPATIOTEMPORAL AUDIT",
    projectType: "Research Report",
    categories: ["Research Papers and Reports", "Power BI Projects"],
    category: "Research Papers and Reports",
    primaryCategory: "Research Papers and Reports",
    subject: "Public Policy & Forensic Audits",
    course: "Public Systems Analysis",
    tool: "Power BI & DAX",
    tools: ["Power BI", "DAX", "GIS"],
    year: 2026,
    image: "/images/dashboards/paper-leaks.svg",
    images: [
      {
        url: "/images/dashboards/paper-leaks.svg",
        title: "Forensic Audit Dossier",
        caption: "Chronological incident clustering and state testing board vulnerability audit."
      }
    ],
    description: "Full research methodology documentation tracking chronological incident clustering, state-level choropleth modeling, and cryptographic distribution audit frameworks.",
    objective: "Provide public authorities with empirical data on examination disruption vulnerabilities to guide administrative reform.",
    methodology: "Cross-referencing inquiry committee filings, state gazettes, and official audit registries over a 22-year chronological observation window.",
    chartsUsed: ["Choropleth Vulnerability Map", "Recurrence Velocity Curves"],
    insights: [
      "Recruitment examinations represent 58% of all recorded disruptions nationwide.",
      "Decentralized state testing boards exhibit 2.4x higher vulnerability variance than unified central agencies."
    ],
    conclusion: "Transitioning to synchronized digital question distribution eliminates vulnerable physical chain-of-custody handoffs.",
    learningOutcomes: "Forensic data investigation, spatial policy analytics, and public integrity modeling.",
    supportingFiles: [
      {
        name: "Examination Integrity Audit Whitepaper",
        type: "Document",
        format: "PDF",
        size: "2.4 MB",
        url: "/documents/paper-leaks-audit.pdf",
        isDeliverable: true
      }
    ],
    file: "/documents/paper-leaks-audit.pdf",
    accentColor: "#8E1B2E",
    featured: false
  },

  {
    id: "doc-03",
    slug: "emergency-department-throughput-whitepaper",
    title: "EMERGENCY DEPARTMENT THROUGHPUT WHITEPAPER",
    projectType: "Research Report",
    categories: ["Research Papers and Reports", "Python Visualizations"],
    category: "Research Papers and Reports",
    primaryCategory: "Research Papers and Reports",
    subject: "Clinical Operations & Queueing Theory",
    course: "Healthcare Systems Engineering",
    tool: "Python & SciPy",
    tools: ["Python", "SciPy", "SimPy"],
    year: 2026,
    image: "/images/dashboards/healthcare-flow.svg",
    images: [
      {
        url: "/images/dashboards/healthcare-flow.svg",
        title: "Clinical Throughput Dossier",
        caption: "Discrete-event stochastic simulation of patient arrival waves and triage capacity."
      }
    ],
    description: "Clinical patient throughput whitepaper quantifying waiting times across emergency triage severity levels and evaluating the operational impact of dedicated fast-track care lanes.",
    objective: "Quantify the operational benefits of bifurcated triage streams in acute healthcare emergency facilities.",
    methodology: "Discrete-event stochastic simulation modeling patient arrival Poisson distributions against clinical staffing schedules.",
    chartsUsed: ["Survival Duration Curves", "Hourly Queue Ridge Plots", "Sankey Flow Networks"],
    insights: [
      "Dedicated fast-track triage lanes for low-acuity patients cut median emergency stay by 31 minutes.",
      "Radiology diagnostic turnaround represented the primary downstream bottleneck for admitted patients."
    ],
    conclusion: "Operational decoupling of routine acute cases from trauma bays unlocks emergency room capacity and improves clinical safety margins.",
    learningOutcomes: "Queueing theory simulation, healthcare data ethics, and operational throughput modeling.",
    supportingFiles: [
      {
        name: "Emergency Department Throughput Whitepaper",
        type: "Document",
        format: "PDF",
        size: "2.1 MB",
        url: "/documents/healthcare-throughput-whitepaper.pdf",
        isDeliverable: true
      }
    ],
    file: "/documents/healthcare-throughput-whitepaper.pdf",
    accentColor: "#4A101C",
    featured: false
  },

  {
    id: "doc-04",
    slug: "audience-context-methodology-notes",
    title: "AUDIENCE & CONTEXT METHODOLOGY NOTES",
    projectType: "Research Report",
    categories: ["Research Papers and Reports", "Excel Assignments"],
    category: "Research Papers and Reports",
    primaryCategory: "Research Papers and Reports",
    subject: "Cognitive Ergonomics & Visual Scaffolding",
    course: "Communication Design Seminar",
    tool: "Excel",
    tools: ["Excel", "Information Architecture"],
    year: 2026,
    image: "/images/dashboards/placement-analysis.svg",
    images: [
      {
        url: "/images/dashboards/placement-analysis.svg",
        title: "Visual Scaffolding Guide",
        caption: "Curated framework for tailoring data representations to stakeholder mental models."
      }
    ],
    description: "Curated documentation on tailoring data visual representations for varied stakeholder mental models, from C-suite scorecards to deep statistical analyst dossiers.",
    objective: "Provide actionable heuristics for calibrating information density based on audience domain expertise.",
    methodology: "Empirical benchmarking of cognitive comprehension times across high-density vs minimalist visual representations.",
    chartsUsed: ["Audience Persona Matrix", "Information Density Spectrum"],
    insights: [
      "Executive stakeholders require pre-calculated variance metrics rather than raw exploratory coordinates.",
      "Domain specialists benefit from high-density multi-attribute small multiples that preserve distribution context."
    ],
    conclusion: "Calibrating visual information density to the audience's mental model is the primary predictor of decision velocity.",
    learningOutcomes: "Information architecture design, stakeholder persona modeling, and communication ergonomics.",
    supportingFiles: [
      {
        name: "Audience & Context Methodology Notes",
        type: "Document",
        format: "PDF",
        size: "1.1 MB",
        url: "/documents/audience-context.pdf",
        isDeliverable: true
      }
    ],
    file: "/documents/audience-context.pdf",
    accentColor: "#E8C547",
    featured: false
  },

  // ==========================================
  // 5. PRESENTATIONS & OTHER DATA PROJECTS
  // ==========================================
  {
    id: "work-01",
    slug: "healthcare-er-simulation",
    title: "Healthcare ER Queue Simulation",
    projectType: "Data Project",
    categories: ["Data Analysis Projects", "Python Visualizations", "Presentations and Other Projects"],
    category: "Data Analysis Projects",
    primaryCategory: "Python Visualizations",
    tool: "Python",
    tools: ["Python (SimPy, Pandas, Plotly)"],
    subject: "Stochastic Modeling & Operations Research",
    year: 2026,
    image: "/images/dashboards/healthcare-flow.svg",
    images: [
      {
        url: "/images/dashboards/healthcare-flow.svg",
        title: "ER Queue Simulation Model",
        caption: "Discrete-event stochastic simulation of patient arrival waves and triage capacity."
      }
    ],
    description: "Discrete-event stochastic simulation of patient arrival waves and triage capacity to quantify emergency room bottlenecks.",
    objective: "Model patient waiting times under surge arrival conditions and evaluate bed turnover interventions.",
    methodology: "Constructed SimPy discrete-event simulation engine with non-stationary Poisson arrivals and empirical service duration distributions.",
    chartsUsed: ["Interactive Survival Curves", "Queue Length Histograms"],
    insights: ["Achieved 31-minute reduction in average length-of-stay through prioritized fast-track lanes."],
    conclusion: "Simulation modeling allows risk-free operational testing before deploying clinical scheduling interventions.",
    learningOutcomes: "Stochastic process simulation, Plotly interactive graphics, and operations optimization.",
    supportingFiles: [
      {
        name: "Healthcare ER Simulation Report",
        type: "Document",
        format: "PDF",
        size: "2.1 MB",
        url: "/documents/healthcare-throughput-whitepaper.pdf",
        isDeliverable: true
      }
    ],
    accentColor: "#4A101C",
    featured: false
  },

  {
    id: "work-02",
    slug: "campus-placement-econometric-model",
    title: "Campus Placement Econometric Model",
    projectType: "Data Project",
    categories: ["Data Analysis Projects", "Excel Assignments", "Presentations and Other Projects"],
    category: "Data Analysis Projects",
    primaryCategory: "Excel Assignments",
    tool: "Excel",
    tools: ["Advanced Excel (Power Query, DAX)"],
    subject: "Econometric Modeling & Career Economics",
    year: 2025,
    image: "/images/dashboards/placement-analysis.svg",
    images: [
      {
        url: "/images/dashboards/placement-analysis.svg",
        title: "Econometric Placement Model",
        caption: "Regression analysis and hiring funnel modeling examining the empirical impact of prior internships."
      }
    ],
    description: "Regression analysis and hiring funnel modeling examining the empirical impact of prior internships on compensation velocity.",
    objective: "Identify the statistically significant drivers of student recruitment velocity and salary offers.",
    methodology: "Multivariate regression modeling in Excel with dummy variable encoding for internship experience and major fields.",
    chartsUsed: ["Compensation Scatter Plots", "Pareto Concentration Curves"],
    insights: ["Internship completion was correlated with 42 days faster time-to-first-offer and a 26% higher starting salary."],
    conclusion: "Work-integrated learning exerts greater positive influence on early career velocity than academic transcripts alone.",
    learningOutcomes: "Applied econometric regression in Excel, dynamic pivot scenarios, and career data modeling.",
    supportingFiles: [
      {
        name: "Placement Econometric Analysis Notes",
        type: "Document",
        format: "PDF",
        size: "1.1 MB",
        url: "/documents/audience-context.pdf",
        isDeliverable: true
      }
    ],
    accentColor: "#C98F98",
    featured: false
  },

  {
    id: "work-03",
    slug: "urban-meteorological-dispersion-study",
    title: "Urban Meteorological Dispersion Study",
    projectType: "Data Project",
    categories: ["Data Analysis Projects", "Tableau Projects", "Presentations and Other Projects"],
    category: "Data Analysis Projects",
    primaryCategory: "Tableau Projects",
    tool: "Tableau",
    tools: ["Tableau & GIS Spatial Layers"],
    subject: "Spatial Analytics & Environmental Science",
    year: 2026,
    image: "/images/dashboards/air-quality.svg",
    images: [
      {
        url: "/images/dashboards/air-quality.svg",
        title: "Dispersion Study Spatial Layers",
        caption: "Bivariate spatial regression analyzing PM2.5 / PM10 concentration spikes alongside seasonal wind vector roses."
      }
    ],
    description: "Bivariate spatial regression analyzing PM2.5 / PM10 concentration spikes alongside seasonal wind vector roses and thermal inversion layers.",
    objective: "Map the geographical spread of particulate matter across urban topography under stagnant meteorological conditions.",
    methodology: "Correlated ground sensor readings with satellite thermal inversion indexes and polar wind vector compass plots.",
    chartsUsed: ["GIS Spatial Layers", "Polar Vector Compass"],
    insights: ["Winter thermal inversion layers amplified particulate retention by up to 3.4x in basin terrain."],
    conclusion: "Topographic awareness must be integrated into municipal emissions control trigger thresholds.",
    learningOutcomes: "GIS spatial analysis, polar coordinate visualizers, and environmental data modeling.",
    supportingFiles: [
      {
        name: "Meteorological Dispersion Whitepaper",
        type: "Document",
        format: "PDF",
        size: "1.9 MB",
        url: "/documents/paper-leaks-audit.pdf",
        isDeliverable: true
      }
    ],
    accentColor: "#B8955A",
    featured: false
  },

  {
    id: "work-04",
    slug: "global-retail-profitability-elasticity",
    title: "Global Retail Profitability & Elasticity",
    projectType: "Data Project",
    categories: ["Data Analysis Projects", "Tableau Projects", "Presentations and Other Projects"],
    category: "Data Analysis Projects",
    primaryCategory: "Tableau Projects",
    tool: "Tableau",
    tools: ["Tableau Desktop & Calculated Fields"],
    subject: "Business Analytics & Price Optimization",
    year: 2025,
    image: "/images/dashboards/superstore-sales.svg",
    images: [
      {
        url: "/images/dashboards/superstore-sales.svg",
        title: "Retail Elasticity Quadrant Matrix",
        caption: "Quadrant discount elasticity scatter matrix isolating negative margin inflection points."
      }
    ],
    description: "Quadrant discount elasticity scatter matrix isolating negative margin inflection points across commercial categories.",
    objective: "Identify exact promotional discount inflection points where gross volume growth produces net operational losses.",
    methodology: "Calculated margin ratio fields in Tableau paired with quadrant threshold separation lines across product categories.",
    chartsUsed: ["Discount Elasticity Scatter Plot", "Regional Margin Heatmap"],
    insights: ["Identified a critical 20% discount breakeven threshold beyond which margins deteriorate rapidly to -12.4%."],
    conclusion: "Pricing algorithms should enforce dynamic category margin caps rather than uniform enterprise discounts.",
    learningOutcomes: "Price elasticity modeling, Tableau parameter-driven visual analysis, and commercial strategy synthesis.",
    supportingFiles: [
      {
        name: "Global Retail Analytics Report",
        type: "Document",
        format: "PDF",
        size: "1.8 MB",
        url: "/documents/data-visualization-report.pdf",
        isDeliverable: true
      }
    ],
    accentColor: "#B8955A",
    featured: false
  }
];

// Helper Functions
export const getAllWork = () => WORK_ITEMS;

export const getWorkById = (idOrSlug) => {
  if (!idOrSlug) return null;
  const term = idOrSlug.toLowerCase();
  return WORK_ITEMS.find((w) => w.id.toLowerCase() === term || w.slug.toLowerCase() === term) || null;
};

export const getAdjacentWork = (currentId) => {
  const list = WORK_ITEMS;
  const index = list.findIndex(
    (w) => w.id.toLowerCase() === (currentId || '').toLowerCase() || w.slug.toLowerCase() === (currentId || '').toLowerCase()
  );
  if (index === -1) {
    return { prev: null, next: null, currentIndex: 0, total: list.length };
  }
  const prev = index > 0 ? list[index - 1] : list[list.length - 1];
  const next = index < list.length - 1 ? list[index + 1] : list[0];
  return { prev, next, currentIndex: index + 1, total: list.length };
};

export const getToolsList = () => [
  'ALL',
  'Power BI',
  'Tableau',
  'Excel',
  'Python',
  'Node.js'
];

export const getYearsList = () => ['ALL', '2026', '2025'];
`;

const targetFile = path.resolve('/home/singh/dvtdashboard/frontend/src/data/workLibraryData.js');
fs.writeFileSync(targetFile, fileContent, 'utf-8');
console.log('Successfully wrote frontend/src/data/workLibraryData.js (' + fileContent.length + ' bytes)');
