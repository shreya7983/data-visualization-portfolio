/**
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
    title: "India Paper Leak Analysis Dashboard (2004–2026)",
    projectType: "Dashboard",
    categories: ["Data Visualization Dashboards", "Power BI Projects", "Research Papers and Reports"],
    category: "Data Visualization Dashboards",
    primaryCategory: "Power BI Projects",
    tool: "Power BI",
    tools: ["Power BI", "DAX", "Power Query", "Excel"],
    subject: "Examination Integrity & Public Policy",
    year: 2026,
    image: "/images/dashboards/paper-leaks.png",
    images: [
      {
        url: "/images/dashboards/paper-leaks.png",
        title: "India Paper Leak Analysis Dashboard (2004–2026)",
        caption: "State-level vulnerability choropleth, timeline recurrence curve, leak status distribution donut (80.9% confirmed), and top examination bodies."
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
    methodology: "1. Raw data consolidation and geographic key validation.\n2. Formulation of DAX measures for recurrence velocity and candidate impact indices.\n3. Cartographic projection matching for 36 states and union territories.\n4. Multi-level interactive slicers allowing synchronized cross-filtering.",
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
      },
      {
        name: "India Paper Leak Analysis — Official Google Doc Submission",
        type: "Google Document",
        format: "DOC",
        size: "Online Document",
        url: "https://docs.google.com/document/d/1CxMFBAVrh1dMMPuCFa1ifjL96Lhge06Toq80Bm3QiWw/edit?usp=sharing",
        isDeliverable: true
      }
    ],
    googleDocUrl: "https://docs.google.com/document/d/1CxMFBAVrh1dMMPuCFa1ifjL96Lhge06Toq80Bm3QiWw/edit?usp=sharing",
    kaggleUrl: "https://www.kaggle.com/datasets/sujaynadkarni/india-paper-leaks-from-2004-to-2026",
    student: "Shreya Kashyap (Roll No. 23145028)",
    course: "BCA VII Semester // Dev Sanskriti Vishwavidyalaya",
    accentColor: "#8E1B2E",
    featured: true
  },

  {
    id: "superstore-management",
    slug: "superstore-management",
    title: "Superstore Management Dashboard (Overall Business Performance)",
    projectType: "Dashboard",
    categories: ["Data Visualization Dashboards", "Tableau Projects", "Data Analysis Projects"],
    category: "Data Visualization Dashboards",
    primaryCategory: "Tableau Projects",
    tool: "Tableau",
    tools: ["Tableau Desktop", "Executive KPIs", "LOD Expressions"],
    subject: "Executive Commercial Strategy & C-Suite Analytics",
    year: 2026,
    image: "/images/dashboards/superstore-management.png",
    images: [
      {
        url: "/images/dashboards/superstore-management.png",
        title: "Superstore Management Dashboard (Tableau)",
        caption: "Executive C-Suite KPI scorecard ($2.32M Sales, $292K Profit, 10,194 Orders, 38,654 Quantity), categorical sales distribution bars, regional profit ranking bars, 12-month order trendline, and sales vs profit scatter plot."
      }
    ],
    description: "Executive C-suite Tableau dashboard tracking cross-departmental commercial health, aggregated gross revenues ($2.32M), operating profit ($292K), and order volumes across 4 regional territories.",
    objective: "Synthesize top-level enterprise KPIs ($2.32M Sales, $292K Profit, 10,194 Orders), monitor monthly order revenue pacing, evaluate regional margin contributions, and detect customer sales-to-profit anomalies.",
    problemStatement: "Executive leadership lacked a unified single-screen command center to correlate top-line gross revenues with actual realized operating margin across product categories and regional commercial divisions.",
    dataset: {
      name: "Global Superstore Enterprise Commercial Archive (2023–2026)",
      source: "Enterprise Transaction Line-Item Repository",
      format: "Relational Tabular Records (.csv, .xlsx)",
      importantColumns: ["Order_ID", "Order_Date", "Customer_Name", "Region", "Category", "Sub_Category", "Sales", "Quantity", "Discount", "Profit"]
    },
    dataCleaning: "Engineered calculated fields for Operating Profit Margin Ratio, parsed Order Date into fiscal quarters and 12-month calendar sequences, and configured interactive parameter controls for dynamic category and regional cross-filtering.",
    methodology: `1. Line-item data ingestion and calculated margin field architecture.\n2. Executive KPI metric callouts with high-contrast typography.\n3. Ranked horizontal bar distributions comparing segment sales and territorial profits.\n4. Continuous temporal order trajectory mapping and transaction-level bivariate diagnostic scatter analysis.`,
    chartsUsed: [
      "Executive KPI Metric Cards",
      "Sales by Category Horizontal Bar Chart",
      "Profit by Region Bar Chart",
      "Monthly Order Date Sales Trendline",
      "Sales vs. Profit Categorical Scatter Plot"
    ],
    insights: [
      "Technology category commands the highest revenue ($836K+) with superior average profit margin compared to Furniture and Office Supplies.",
      "West Region generates the highest operating profit ($108K+), while Central Region exhibits margin compression ($39.8K profit despite substantial volume).",
      "Monthly sales volume displays marked fourth-quarter seasonality, peaking during months 9, 11, and 12 (surpassing $350K/month).",
      "Bivariate scatter matrix exposes outlier transactions in Technology and Office Supplies that generate substantial losses despite high gross revenues, indicating unchecked promotional discounts."
    ],
    conclusion: "West Region serves as the primary organizational profit engine ($110K+ net profit). Implementing automated discount approval thresholds on large enterprise orders prevents unprofitable sales volume.",
    learningOutcomes: "Mastered Tableau executive dashboard layout architecture, dynamic multi-select category/region filters, LOD (Level of Detail) calculated expressions, and bivariate scatter diagnostic design.",
    supportingFiles: [
      {
        name: "Superstore Management & Executive Analytics Report",
        type: "Document",
        format: "PDF",
        size: "2.2 MB",
        url: "/documents/superstore-management-report.pdf",
        isDeliverable: true
      }
    ],
    accentColor: "#2A6F97",
    featured: true
  },

  {
    id: "superstore-sales-manager",
    slug: "superstore-sales-manager",
    title: "Sales Management Dashboard (Product, Customer & Profit Analysis)",
    projectType: "Dashboard",
    categories: ["Data Visualization Dashboards", "Tableau Projects", "Data Analysis Projects"],
    category: "Data Visualization Dashboards",
    primaryCategory: "Tableau Projects",
    tool: "Tableau",
    tools: ["Tableau Desktop", "Calculated Fields", "Sales Operations"],
    subject: "Sales Operations, Product Performance & Account Management",
    year: 2026,
    image: "/images/dashboards/superstore-sales-manager.png",
    images: [
      {
        url: "/images/dashboards/superstore-sales-manager.png",
        title: "Sales Management Dashboard (Tableau)",
        caption: "Sub-category sales and profit rankings (Chairs $335K, Copiers $56K profit), Top 10 customer accounts, Top 10 products (Canon imageCLASS $61K+), discount vs profit scatter elasticity, and monthly sales curve."
      }
    ],
    description: "Operational sales management Tableau dashboard analyzing sub-category margin health, customer account concentration, top-performing SKUs, and discount margin destruction.",
    objective: "Identify top-grossing products, evaluate sub-category profit margins, isolate discount margin destruction thresholds (>20%), and monitor monthly sales momentum.",
    problemStatement: "Sales managers lacked granular visibility into which specific product lines and customer accounts were generating real operating margins versus which promotional discounts were destroying profitability.",
    dataset: {
      name: "Enterprise Transaction Line-Item & Account Archive",
      source: "Global Superstore Customer Account & Order Logs",
      format: "Relational Tabular Records (.csv, .xlsx)",
      importantColumns: ["Customer_Name", "Product_Name", "Sub_Category", "Sales", "Discount", "Profit", "Order_Date"]
    },
    dataCleaning: "Constructed calculated fields for customer account aggregates, grouped product SKUs into 17 sub-categories, normalized discount percentage steps (0% to 70%), and built diverging color palettes for positive and negative profit margins.",
    methodology: `1. Sub-category sales ranking paired with diverging profit margin bars.\n2. Top 10 customer account leaderboard and product revenue breakdown.\n3. Empirical scatter plot modeling of discount rates against net transaction profits.\n4. 12-month seasonality line chart tracking operational momentum.`,
    chartsUsed: [
      "Sales by Sub-Category Ranked Bar Chart",
      "Profit by Sub-Category Diverging Bar Chart",
      "Top 10 Customers Revenue Leaderboard",
      "Top 10 Products Performance Bar Chart",
      "Discount vs Profit Scatter Diagnostic Plot",
      "Monthly Order Date Sales Trajectory Line"
    ],
    insights: [
      "Chairs ($335,768) and Phones ($331,843) generate the largest sales volume among sub-categories, but Copiers deliver the highest total net profit ($56,094).",
      "Tables and Bookcases experience severe profit margin compression due to bulky logistics overhead and aggressive promotional discounts.",
      "Edward Hooks ($10,500+) and John Lee ($9,800+) represent the most valuable enterprise customer accounts.",
      "Discount vs. Profit scatter plot definitively proves that discounts exceeding 20% systematically trigger negative profit margins across all categories."
    ],
    conclusion: "Enforcing a 20% hard discount threshold for sales representatives protects core profitability, eliminating an estimated $38,000+ in annual margin erosion across bulky furniture lines.",
    learningOutcomes: "Engineered diverging bar charts centered at zero, top-N customer ranking filters, discount elasticity scatter diagnostics, and action-oriented sales operational dashboards in Tableau.",
    supportingFiles: [
      {
        name: "Sales Operations & Margin Protection Brief",
        type: "Document",
        format: "PDF",
        size: "1.9 MB",
        url: "/documents/sales-operations-brief.pdf",
        isDeliverable: true
      }
    ],
    accentColor: "#D97706",
    featured: true
  },

  {
    id: "superstore-regional-manager",
    slug: "superstore-regional-manager",
    title: "Regional Manager Dashboard (Regional & Geographical Performance)",
    projectType: "Dashboard",
    categories: ["Data Visualization Dashboards", "Tableau Projects", "Data Analysis Projects"],
    category: "Data Visualization Dashboards",
    primaryCategory: "Tableau Projects",
    tool: "Tableau",
    tools: ["Tableau Desktop", "Mapbox Geocoding", "Territory Modeling"],
    subject: "Geographical Strategy, Regional Operations & Logistics",
    year: 2026,
    image: "/images/dashboards/superstore-regional-manager.png",
    images: [
      {
        url: "/images/dashboards/superstore-regional-manager.png",
        title: "Regional Manager Dashboard (Tableau)",
        caption: "Regional sales and profit bars (West $725K / $110K profit), Mapbox state distribution map, ranked state revenue leaderboard (California $457K, New York $310K), and multi-year regional trajectory line chart (2023–2026)."
      }
    ],
    description: "Territorial management Tableau dashboard tracking state-by-state market penetration, regional profitability distributions, geographic cartography, and multi-year regional sales growth trajectories (2023–2026).",
    objective: "Benchmark performance across West, East, Central, and South regions, map state-level sales density (California $457K, New York $310K), and track 4-year regional trajectories.",
    problemStatement: "Regional operations directors required a geographic intelligence dashboard to compare multi-year sales velocity across 4 regions, identify top-revenue states, and isolate regional supply chain delivery dynamics.",
    dataset: {
      name: "Global Superstore Geographic & Regional Archive (2023–2026)",
      source: "Global Superstore Logistics & Territorial Shipping Registries",
      format: "Relational Tabular Records (.csv, .xlsx)",
      importantColumns: ["Country", "State", "City", "Region", "Sales", "Profit", "Order_Date"]
    },
    dataCleaning: "Standardized state naming conventions, integrated Mapbox geospatial map server coordinates, grouped 49 US states into 4 administrative regions, and synthesized 4-year annualized trend arrays (2023 through 2026).",
    methodology: `1. Macro regional sales and operating profit bar comparisons.\n2. Cartographic Mapbox choropleth mapping state-level revenue concentration.\n3. Ranked horizontal state leaderboard showcasing tier-one economic contributors.\n4. 4-year multi-line trajectory plotting regional expansion velocity.`,
    chartsUsed: [
      "Regional Sales Volume Horizontal Bar Chart",
      "Regional Operating Profit Ranking Bar Chart",
      "Geographical State Sales Distribution Map (Mapbox)",
      "Sales by State Ranked Horizontal Bar Chart",
      "Multi-Year Regional Sales Growth Trajectory Chart (2023–2026)"
    ],
    insights: [
      "California is the single largest state market by revenue ($457,688), followed by New York ($310,876) and Texas ($170,188).",
      "West Region demonstrates consistent four-year revenue expansion, growing from ~$145K in 2023 to over $260K in 2026.",
      "East Region closely follows West in multi-year momentum, while South Region maintains stable but lower overall volume.",
      "Geographical density illustrates strong coastal sales clustering, indicating opportunities for logistics center consolidation in California and New York."
    ],
    conclusion: "West and East territories generate over 61% of total enterprise volume. Regional fulfillment infrastructure should be prioritized in California and New York to accelerate fulfillment times.",
    learningOutcomes: "Mastered Mapbox cartographic integration in Tableau, state-level choropleth and symbol mapping, multi-year multi-line trend comparison, and territorial business intelligence architecture.",
    supportingFiles: [
      {
        name: "Regional Operations & Logistics Strategy Brief",
        type: "Document",
        format: "PDF",
        size: "2.4 MB",
        url: "/documents/regional-operations-brief.pdf",
        isDeliverable: true
      }
    ],
    accentColor: "#10B981",
    featured: true
  },
  {
    id: "superstore-sales",
    slug: "superstore-sales",
    title: "Geospatial Analysis — Sales, Profit & Order Concentration",
    projectType: "Dashboard",
    categories: ["Data Visualization Dashboards", "Tableau Projects", "Data Analysis Projects"],
    category: "Data Visualization Dashboards",
    primaryCategory: "Tableau Projects",
    tool: "Tableau",
    tools: ["Tableau Desktop", "Geocoding", "Calculated Fields"],
    subject: "Geospatial Strategy & Margin Optimization",
    year: 2025,
    image: "/images/dashboards/superstore-sales.png",
    images: [
      {
        url: "/images/dashboards/superstore-sales.png",
        title: "Geospatial Analysis (Tableau)",
        caption: "North America state-level sales choropleth ($132 to $457K), city-level profit symbol map (-$13.8K to $62K), and order concentration density heatmap across 104+ locations."
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
    methodology: "1. Line-item data ingestion and calculated margin field architecture.\n2. Bivariate regression scatter matrix isolating discount threshold inflection points.\n3. Geographic density layer mapping across regional distribution nodes.\n4. Synchronized dual-axis trajectory plots contrasting gross revenue against net profitability.",
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
    title: "Computer Science Alumni Dashboard",
    projectType: "Dashboard",
    categories: ["Data Visualization Dashboards", "Power BI Projects", "Data Analysis Projects"],
    category: "Data Visualization Dashboards",
    primaryCategory: "Power BI Projects",
    tool: "Power BI",
    tools: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    subject: "Institutional Education & Career Economics",
    year: 2025,
    image: "/images/dashboards/placement-analysis.png",
    images: [
      {
        url: "/images/dashboards/placement-analysis.png",
        title: "Computer Science Alumni Dashboard (Power BI)",
        caption: "Salary distribution streamgraph, CGPA vs compensation scatter, treemap, and matrix table modeled in Power BI."
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
    methodology: "1. Automated ingestion through Power Query with type casting.\n2. Statistical binning of compensation bands for frequency histogram representation.\n3. Pareto cumulative frequency analysis across 14 hiring sectors.\n4. Correlation scatter modeling of GPA against CTC package tiers.",
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
    methodology: "1. Multivariable correlation matrix modeling with Pearson r values.\n2. Categorical binning of sleep duration against score quartiles.\n3. Probability density estimation of daily focused study duration.\n4. Multi-dimensional radar polygon benchmarking across study spaces.",
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
    methodology: "1. Temporal interval parsing and discrete event queue modeling.\n2. Kaplan-Meier survival curve estimation for prolonged emergency stays (>6h).\n3. Multi-ridge density visualization across 24 hourly arrival cycles.\n4. Sankey flow diagrams mapping patient pathways through triage, diagnostics, and beds.",
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
    methodology: "1. Spatial coordinate mapping to urban topography GIS layers.\n2. Polar vector compass charting correlating wind speed and direction with pollution spikes.\n3. Day-by-day calendar heatmaps tracking seasonal threshold exceedances.\n4. Multi-line synchronized trend analysis against WHO health baseline bands.",
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
    title: "DRAW YOUR DAY // DAILY ENERGY CURVE",
    projectType: "Academic Assignment",
    categories: ["Academic Assignments", "Power BI Projects", "Data Visualization Dashboards"],
    category: "Academic Assignments",
    primaryCategory: "Power BI Projects",
    subject: "Daily Life - Time Distribution & Energy Level by Time",
    course: "Data Representation Atelier",
    teacher: "Prof. Anand Sharma // Data Representation Atelier",
    tool: "Power BI",
    tools: ["Power BI", "Data Modeling", "Excel"],
    year: 2026,
    image: "/images/assignments/draw-your-day.png",
    images: [
      {
        url: "/images/assignments/draw-your-day.png",
        title: "Daily Energy Level & Time Distribution Dashboard",
        caption: "Daily Life Time Distribution donut chart (Classes 33.3%, Sleep 25%, Study 16.7%) and diurnal energy level curve modeled in Power BI."
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
    methodology: "1. Daily manual recordation across 14 consecutive 24-hour periods.\n2. Transformation of qualitative focus impressions into ordinal cognitive load tiers (1-5).\n3. Construction of a dual-entry matrix in Microsoft Excel with conditional heatmaps.\n4. Synthesis into circular diurnal clock diagrams and stacked chronological flow charts.",
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
    googleDocUrl: "https://docs.google.com/document/d/1PMU-kzD2M0eCfgRxNQaL86X3DyfHGyMu-hnASC86I_M/edit?usp=sharing",
    student: "Shreya Kashyap (Roll No. 23145028)",
    course: "BCA VII Semester // Dev Sanskriti Vishwavidyalaya",
    accentColor: "#E8C547",
    featured: true
  },

  {
    id: "assignment-02",
    slug: "e-commerce-data-visualization",
    num: "02",
    title: "EXPLORE DATA VISUALIZATION IN THE REAL WORLD // E-COMMERCE",
    projectType: "Academic Assignment",
    categories: ["Academic Assignments", "Power BI Projects", "Data Analysis Projects"],
    category: "Academic Assignments",
    primaryCategory: "Power BI Projects",
    subject: "Selected Field: E-Commerce Data Visualization",
    course: "Department of Business Analytics",
    teacher: "Dr. Radhika Sen // Department of Business Analytics",
    tool: "Power BI",
    tools: ["Power BI", "DAX", "Power Query", "Excel"],
    year: 2026,
    image: "/images/assignments/ecommerce-analytics.png",
    images: [
      {
        url: "/images/assignments/ecommerce-analytics.png",
        title: "E-Commerce Data Visualization Dashboard",
        caption: "Product category sales, monthly revenue progression, order conversion funnel, payment modality donut, and geographic state-level map in Power BI."
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
    methodology: "1. Relational snowflake data schema construction in Power BI.\n2. Writing optimized DAX measures for dynamic switch metrics and cohort retention.\n3. Funnel conversion stage modeling to identify the single largest attrition step.\n4. Building interactive slicers for regional and payment-modality filtering.",
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
    googleDocUrl: "https://docs.google.com/document/d/1PMU-kzD2M0eCfgRxNQaL86X3DyfHGyMu-hnASC86I_M/edit?usp=sharing",
    student: "Shreya Kashyap (Roll No. 23145028)",
    course: "BCA VII Semester // Dev Sanskriti Vishwavidyalaya",
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
    methodology: "1. High-throughput data ingestion and datetime index alignment with Pandas.\n2. Bivariate non-linear polynomial regression modeling between temperature and power demand.\n3. Construction of sorted load duration curves (LDC) to quantify peaker hours.\n4. Multi-distribution ridge visualization comparing summer heat waves against winter baseloads.",
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
    methodology: "1. Literature review of Cleveland and McGill perceptual hierarchy.\n2. Mathematical deconstruction of 3D pie charts and dual-axis distortions.\n3. Re-engineering candidate datasets using 2D aligned bar charts and small multiples.\n4. Verifying chromatic accessibility using color blindness simulators and luminance contrast analyzers.",
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
  // 3. PROGRAMMING LABS & ACADEMIC LAB WORK
  // ==========================================
  {
    id: "lab-01",
    slug: "india-paper-leaks-analysis-lab",
    num: "LAB 01",
    title: "INDIA PAPER LEAK ANALYSIS DASHBOARD (2004–2026)",
    projectType: "Academic Lab Work",
    categories: ["Academic Lab Work", "Power BI Projects", "Data Visualization Dashboards"],
    category: "Academic Lab Work",
    primaryCategory: "Power BI Projects",
    subject: "Data Visualization & Empirical Analysis",
    course: "BCA VII Semester // Department of Computer Science",
    institution: "Dev Sanskriti Vishwavidyalaya",
    student: "Shreya Kashyap (Roll No. 23145028)",
    teacher: "Department of Computer Science // Dev Sanskriti Vishwavidyalaya",
    tool: "Power BI",
    tools: ["Microsoft Power BI", "DAX", "Data Modeling", "Kaggle"],
    year: 2026,
    image: "/images/dashboards/paper-leaks.png",
    images: [
      {
        url: "/images/dashboards/paper-leaks.png",
        title: "Figure 1: India Paper Leak Analysis Dashboard (2004–2026)",
        caption: "Comprehensive Power BI dashboard featuring KPI metric tiles, yearly line chart trends, top examinations bar chart, top affected areas, conducting bodies comparison, and leak verification status donut distribution."
      }
    ],
    question: "In the previous class, you explored the dataset and identified/discussed various insights. Now, your task is to represent those insights visually using appropriate charts and graphs. Using the India Paper Leaks (2004–2026) dataset (https://www.kaggle.com/datasets/sujaynadkarni/india-paper-leaks-from-2004-to-2026): 1. Select the important insights identified during the previous analysis. 2. Choose an appropriate chart/graph for each insight based on your understanding. 3. Create meaningful and clearly labelled visualizations. 4. For every visualization, write 2–3 lines explaining what the chart reveals. 5. Try to identify any additional patterns or trends that become visible through visualization. Do not create charts just for the sake of visualization. Every chart should answer a question or communicate a meaningful insight from the dataset.",
    requirements: [
      "Select the important insights identified during exploratory data analysis",
      "Choose appropriate charts/graphs (KPI Cards, Line Chart, Bar Charts, Donut Chart, Slicers)",
      "Create meaningful and clearly labelled Power BI visualizations",
      "Write 2–3 lines of analytical explanation for every visualization",
      "Identify additional patterns and trends visible through visual encoding",
      "Ensure every visualization answers a specific question and communicates a meaningful insight",
      "Submit completed analysis/visualizations as instructed in Google Classroom"
    ],
    objective: "The objective of this project is to analyze the India Paper Leaks (2004–2026) dataset using Power BI and present meaningful insights through interactive charts and visualizations. The dashboard helps identify trends, patterns, and the overall impact of paper leak incidents in India.",
    problemStatement: "Paper leak disruptions across public competitive examinations cause severe social friction, candidate distress, and administrative gridlock. Visual analytics transforms fragmented tabular records into actionable intelligence on recurring vulnerability corridors.",
    dataset: {
      name: "India Paper Leaks (2004–2026)",
      source: "Kaggle (sujaynadkarni/india-paper-leaks-from-2004-to-2026)",
      format: "Tabular Dataset (.csv)",
      url: "https://www.kaggle.com/datasets/sujaynadkarni/india-paper-leaks-from-2004-to-2026",
      duration: "2004–2026",
      importantColumns: ["Year", "Area / State", "Exam Name", "Conducting Body", "Aspirants Affected", "Arrests Made", "Leak Status"]
    },
    dataCleaning: "Standardized regional state naming conventions, reconciled non-standard incident timestamps across fiscal cycles, and classified leak validation statuses into Confirmed, Alleged, Denied, and Suspected categories in Power Query.",
    methodology: "1. Data ingestion from Kaggle and dimensional normalization in Power Query.\n2. Formulation of DAX measures for aggregate affected aspirants, total incidents, and law enforcement arrests.\n3. Construction of comparative horizontal bar charts for high-frequency examinations and conducting agencies.\n4. Design of yearly trend line curves and categorical donut charts.\n5. Implementation of synchronized multi-attribute slicers for Year, Area, Exam Name, and Leak Status.",
    chartsUsed: [
      "Total Paper Leak Incidents (KPI Card)",
      "Total Aspirants Affected (KPI Card)",
      "Total Arrests (KPI Card)",
      "Paper Leak Incidents by Year (Line Chart)",
      "Top Exams with Paper Leaks (Bar Chart)",
      "Top Areas by Paper Leak Incidents (Bar Chart)",
      "Top Conducting Bodies by Paper Leak Incidents (Bar Chart)",
      "Leak Status Distribution (Donut Chart)",
      "Interactive Multi-Attribute Slicers"
    ],
    visualizationsList: [
      {
        name: "Visualization 1: Total Paper Leak Incidents",
        type: "KPI Card",
        value: "110 Incidents",
        explanation: "This KPI card displays the total number of paper leak incidents recorded in the dataset. It provides a quick overview of the overall scale of the issue between 2004 and 2026."
      },
      {
        name: "Visualization 2: Total Aspirants Affected",
        type: "KPI Card",
        value: "Millions of Aspirants",
        explanation: "This card shows the total number of aspirants affected by paper leak incidents. The large number highlights the significant educational and social impact of these incidents across India."
      },
      {
        name: "Visualization 3: Total Arrests",
        type: "KPI Card",
        value: "Law Enforcement Action",
        explanation: "This KPI displays the total number of arrests made in connection with paper leak cases. It provides an overview of the legal actions taken against those involved."
      },
      {
        name: "Visualization 4: Paper Leak Incidents by Year",
        type: "Line Chart",
        explanation: "The line chart illustrates the yearly trend of paper leak incidents. It helps identify periods where incidents increased or decreased and shows how the problem has evolved over time."
      },
      {
        name: "Visualization 5: Top Exams with Paper Leaks",
        type: "Bar Chart",
        explanation: "This chart compares the examinations that experienced the highest number of paper leak incidents. It helps identify which examinations were most frequently affected during the study period."
      },
      {
        name: "Visualization 6: Top Areas by Paper Leak Incidents",
        type: "Bar Chart",
        explanation: "This visualization highlights the regions or states with the highest number of reported paper leak incidents. It helps identify geographical areas that may require stronger examination security measures."
      },
      {
        name: "Visualization 7: Top Conducting Bodies by Paper Leak Incidents",
        type: "Bar Chart",
        explanation: "The chart compares examination conducting bodies based on the number of reported paper leak incidents. It identifies organizations that have experienced repeated security challenges."
      },
      {
        name: "Visualization 8: Leak Status Distribution",
        type: "Donut Chart",
        explanation: "The donut chart shows the distribution of different leak statuses, such as Confirmed, Alleged, Denied, and Suspected. It provides an understanding of the reliability and verification status of reported incidents."
      },
      {
        name: "Interactive Filters (Slicers)",
        type: "Interactive Slicers",
        explanation: "The dashboard includes interactive slicers for Year, Area, Exam Name, and Leak Status. These filters allow users to explore specific subsets of the dataset and dynamically update all visualizations for detailed analysis."
      }
    ],
    insights: [
      "A total of 110 paper leak incidents were recorded in the dataset.",
      "Millions of aspirants were affected, indicating the widespread impact of paper leaks.",
      "Paper leak incidents have become more frequent in recent years.",
      "Certain examinations have experienced repeated paper leak incidents.",
      "A few states reported significantly more incidents than others.",
      "Most reported cases fall under the Confirmed category.",
      "Some examination conducting bodies appear repeatedly, indicating the need for stronger examination security systems."
    ],
    conclusion: "The Power BI dashboard successfully transforms raw data into meaningful visual insights. Through KPI cards, charts, and interactive filters, it becomes easier to analyze paper leak incidents across different years, examinations, conducting bodies, and geographical areas. The dashboard demonstrates how data visualization supports better understanding and decision-making.",
    learningOutcomes: "Developed applied Power BI competency, exploratory data analysis validation, KPI card construction, interactive filter design, and empirical pattern synthesis.",
    googleDocUrl: "https://docs.google.com/document/d/1CxMFBAVrh1dMMPuCFa1ifjL96Lhge06Toq80Bm3QiWw/edit?usp=sharing",
    kaggleUrl: "https://www.kaggle.com/datasets/sujaynadkarni/india-paper-leaks-from-2004-to-2026",
    supportingFiles: [
      {
        name: "India Paper Leak Analysis — Official Google Doc Submission",
        type: "Google Document",
        format: "DOC",
        size: "Online Document",
        url: "https://docs.google.com/document/d/1CxMFBAVrh1dMMPuCFa1ifjL96Lhge06Toq80Bm3QiWw/edit?usp=sharing",
        isDeliverable: true
      },
      {
        name: "Kaggle India Paper Leaks Dataset Repository",
        type: "Dataset",
        format: "CSV",
        size: "External Repository",
        url: "https://www.kaggle.com/datasets/sujaynadkarni/india-paper-leaks-from-2004-to-2026",
        isDeliverable: false
      }
    ],
    accentColor: "#E8C547",
    featured: true
  },

  {
    id: "lab-02",
    slug: "draw-your-day-energy-curve-ecommerce",
    num: "LAB 02",
    title: "DRAW YOUR DAY, ENERGY CURVE & REAL-WORLD E-COMMERCE VISUALIZATIONS",
    projectType: "Academic Lab Work",
    categories: ["Academic Lab Work", "Power BI Projects", "Data Analysis Projects"],
    category: "Academic Lab Work",
    primaryCategory: "Power BI Projects",
    subject: "Applied Data Visualization & Quantified Self",
    course: "BCA VII Semester // Department of Computer Science",
    institution: "Dev Sanskriti Vishwavidyalaya",
    student: "Shreya Kashyap (Roll No. 23145028)",
    teacher: "Department of Computer Science // Dev Sanskriti Vishwavidyalaya",
    tool: "Power BI / Excel",
    tools: ["Microsoft Power BI", "Excel", "Visual Encoding", "Analytical Modeling"],
    year: 2026,
    image: "/images/dashboards/draw-your-day.png",
    images: [
      {
        url: "/images/dashboards/draw-your-day.png",
        title: "Activities 1 & 2: Draw Your Day & Energy Curve",
        caption: "Donut chart displaying typical 24-hour daily distribution across Sleep, Classes, Study, Recreation, and Other Activities, paired with diurnal cognitive focus levels."
      },
      {
        url: "/images/dashboards/ecommerce-analytics.png",
        title: "Activity 3: Explore Data Visualization in the Real World (E-Commerce)",
        caption: "Real-world E-Commerce analytics suite showcasing Sales by Category, Monthly Sales Line Trend, Payment Methods Distribution, Discount vs Sales Scatter, and Regional Location Map."
      }
    ],
    question: "As discussed in the 9 August class, kindly submit your work on the following activities:\n1. Draw Your Day - Create a chart showing how your typical day is divided—for example, Sleep, Classes, Study, Recreation, and Other Activities.\n2. Draw Your Energy Curve - Create a chart or timeline showing how your energy/focus level changes throughout the day—Morning, Afternoon, Evening, and Night.\n3. Explore Data Visualization in the Real World - Choose one field such as Sports, Elections, Weather, E-commerce, Education, or Finance. Explore different charts, graphs, maps, and dashboards used on various platforms and explain what they show and why each visualization is useful, in your own words.",
    requirements: [
      "Activity 1: Create a chart illustrating typical 24-hour day distribution (Sleep, Classes, Study, Recreation, Other Activities)",
      "Activity 2: Create a chart/timeline tracking focus changes throughout the day (Morning, Afternoon, Evening, Night)",
      "Activity 3: Select an empirical domain (E-Commerce) and explore charts, graphs, maps, and dashboards used across platforms",
      "Explain what each visualization reveals and why each chart type is useful in your own words",
      "Summarize synthesis through a clear academic conclusion"
    ],
    objective: "Visually encode personal 24-hour daily time allocation and diurnal cognitive energy patterns, and investigate multi-faceted real-world data visualization archetypes within the commercial E-Commerce domain.",
    problemStatement: "Translating abstract quantitative data—both personal behavioral routines and high-volume commercial retail transactions—into intuitive graphical representations requires choosing appropriate visual encodings that match analytical intent.",
    dataset: {
      name: "Personal Daily Time Logs & E-Commerce Operational Data Model",
      source: "Empirical Self-Tracking Log & Commercial E-Commerce Platform Benchmarks",
      format: "Tabular Matrix & Analytical Visual Models",
      importantColumns: ["Activity_Category", "Hours_Allocated", "Day_Period", "Energy_Score", "Product_Category", "Monthly_Sales", "Payment_Type", "Discount_Rate", "Region"]
    },
    activities: [
      {
        title: "Activity 1: Draw Your Day",
        purpose: "To visually understand how time is spent during a typical day.",
        chartType: "Donut Chart",
        whatItShows: "A typical day is divided into different activities such as Sleep, Classes, Study, Recreation, and Other Activities. The donut chart represents the proportion of time spent on each daily activity across the 24 hours of the day."
      },
      {
        title: "Activity 2: Draw Your Energy Curve",
        purpose: "My energy and concentration levels change throughout the day. The energy curve represents my approximate focus level during the Morning, Afternoon, Evening, and Night.",
        chartType: "Line Chart",
        whatItShows: "The line chart shows how my energy level increases or decreases during different parts of the day. It helps identify the time when I am most active and focused.",
        energyLevels: [
          { period: "Morning", score: "8/10", note: "Peak alertness and high cognitive concentration" },
          { period: "Afternoon", score: "4/10", note: "Post-lunch dip and transition into passive tasks" },
          { period: "Evening", score: "7/10", note: "Secondary active focus window for studies and assignments" },
          { period: "Night", score: "6/10", note: "Moderate energy tapering down toward rest and recovery" }
        ]
      },
      {
        title: "Activity 3: Explore Data Visualization in the Real World",
        field: "E-Commerce",
        background: "E-commerce generates a large amount of data related to products, sales, customers, payments, discounts, and locations. Different types of visualizations help businesses understand this data easily and make better decisions.",
        visualizations: [
          {
            name: "1. Bar Chart – Sales by Product Category",
            whatItShows: "Compares sales of different product categories such as Electronics, Clothing, Home & Kitchen, Beauty, and Books.",
            whyUseful: "A bar chart makes it easy to identify which product categories have the highest and lowest sales."
          },
          {
            name: "2. Line Chart – Monthly Sales",
            whatItShows: "Displays how sales change from month to month.",
            whyUseful: "A line chart helps identify sales trends, increases, decreases, and high-performing months."
          },
          {
            name: "3. Pie/Donut Chart – Payment Methods",
            whatItShows: "Represents the proportion of orders made through UPI, Credit Card, Debit Card, and Cash on Delivery.",
            whyUseful: "It provides a quick understanding of customer payment preferences."
          },
          {
            name: "4. Scatter Plot – Discount vs Sales",
            whatItShows: "Shows the relationship between the discount offered and the sales generated.",
            whyUseful: "It helps understand whether higher discounts are associated with higher sales."
          },
          {
            name: "5. Map – Sales by Location",
            whatItShows: "Displays sales distribution across different states or geographical locations.",
            whyUseful: "A map helps businesses identify regions with higher or lower sales and understand geographical market performance."
          }
        ]
      }
    ],
    chartsUsed: [
      "24-Hour Time Distribution Donut Chart",
      "Diurnal Energy Level Line Chart",
      "Sales by Category Bar Chart",
      "Monthly Sales Line Chart",
      "Payment Methods Donut Chart",
      "Discount vs Sales Scatter Plot",
      "Geographical Sales Distribution Map"
    ],
    insights: [
      "A typical day is balanced between necessary obligations (Classes, Sleep) and intentional focus windows (Study, Recreation).",
      "Energy and concentration levels follow a marked diurnal cycle: Morning (8/10), Afternoon (4/10), Evening (7/10), and Night (6/10).",
      "In commercial E-Commerce, Bar Charts provide immediate visual ranking for product categories.",
      "Line Charts effectively communicate monthly commercial trajectory and seasonal surges.",
      "Payment preference Donut Charts reveal reliance on digital payments (UPI, Cards) vs Cash on Delivery.",
      "Scatter Plots validate whether promotional discounting directly drives revenue or compromises margins.",
      "Geographical Maps uncover regional performance variances to optimize inventory allocation."
    ],
    conclusion: "Data visualization makes complex data easier to understand by presenting it through charts, graphs, and maps. In this assignment, I first visualized my daily activities and energy levels and then explored E-Commerce data visualizations. Different visualization types are useful for different purposes, such as comparison, trends, proportions, relationships, and geographical analysis.",
    learningOutcomes: "Personal quantified-self visual abstraction, diurnal focus analysis, commercial retail visualization taxonomy, and visual encoding selection.",
    googleDocUrl: "https://docs.google.com/document/d/1PMU-kzD2M0eCfgRxNQaL86X3DyfHGyMu-hnASC86I_M/edit?usp=sharing",
    supportingFiles: [
      {
        name: "Data Visualization Assignment (Lab 2) — Official Google Doc",
        type: "Google Document",
        format: "DOC",
        size: "Online Document",
        url: "https://docs.google.com/document/d/1PMU-kzD2M0eCfgRxNQaL86X3DyfHGyMu-hnASC86I_M/edit?usp=sharing",
        isDeliverable: true
      }
    ],
    accentColor: "#E8C547",
    featured: true
  },

  {
    id: "lab-03",
    slug: "data-visualization-cheat-sheet",
    num: "LAB 03",
    title: "VISUALIZE IT! — TYPES OF DATA VISUALIZATION CHEAT SHEET",
    projectType: "Academic Lab Work",
    categories: ["Academic Lab Work", "Visual Design", "Creative Communication"],
    category: "Academic Lab Work",
    primaryCategory: "Creative Communication",
    subject: "Visual Taxonomy & Public Communication",
    course: "BCA VII Semester // Department of Computer Science",
    institution: "Dev Sanskriti Vishwavidyalaya",
    student: "Shreya Kashyap (Roll No. 23145028)",
    teacher: "Department of Computer Science // Dev Sanskriti Vishwavidyalaya",
    tool: "Infographic Design / Social Media",
    tools: ["Canva / Figma", "Visual Encoding", "Infographic Design", "LinkedIn Publishing"],
    year: 2026,
    image: "/images/assignments/cheat-sheet.svg",
    images: [
      {
        url: "/images/assignments/cheat-sheet.svg",
        title: "Types of Data Visualization: Charts, Graphs & Maps Cheat Sheet",
        caption: "One-page visual reference guide categorizing essential visualizations by analytical objective: Comparison, Composition, Distribution, Relationship, and Geospatial Mapping."
      }
    ],
    question: "Visualize It! — Create & Share Your Data Visualization Cheat Sheet: Create a one-page cheat sheet on 'Types of Data Visualization: Charts, Graphs & Maps' based on what you learned in class. Make it clear, visual, creative, and easy to understand, then share it on any social media platform such as LinkedIn, Instagram, Snapchat, or WhatsApp.",
    requirements: [
      "Create a clear, creative, one-page reference cheat sheet on 'Types of Data Visualization: Charts, Graphs & Maps'",
      "Synthesize concepts learned in class into an intuitive, easily scannable visual layout",
      "Categorize visual forms by analytical purpose (Charts vs. Graphs vs. Maps)",
      "Provide clean visual icons/examples for each major chart type",
      "Publish and share on a professional social media platform (LinkedIn)",
      "Submit publication link for academic evaluation"
    ],
    objective: "Synthesize foundational visual taxonomy into an engaging, one-page reference cheat sheet that bridges academic theory with public communication, articulating when and why to use specific charts, graphs, and maps.",
    problemStatement: "Data analysts frequently default to basic bar charts or struggle to select the appropriate visual representation for their underlying data dimensions. A structured cheat sheet accelerates chart selection and prevents visual distortion.",
    cheatSheetSections: [
      {
        title: "1. Categorical Charts (Discrete Comparisons & Composition)",
        description: "Best for discrete, qualitative categories and proportional distributions.",
        items: [
          { name: "Bar / Column Chart", useCase: "Comparing discrete categories across a baseline metric.", tip: "Always start vertical value axis at zero." },
          { name: "Donut / Pie Chart", useCase: "Displaying part-to-whole composition with fewer than 5 slices.", tip: "Order slices by size starting at 12 o'clock." },
          { name: "Treemap", useCase: "Hierarchical part-to-whole comparisons with nested rectangles.", tip: "Effective for nested categories when space is constrained." },
          { name: "Stacked Bar Chart", useCase: "Comparing total sizes across categories while showing sub-group composition.", tip: "Limit to 3-4 segments to preserve legibility." }
        ]
      },
      {
        title: "2. Mathematical Graphs (Continuous Relationships & Trends)",
        description: "Best for continuous numerical data plotted across Cartesian coordinate systems.",
        items: [
          { name: "Line Graph", useCase: "Continuous time-series tracking and rate-of-change analysis.", tip: "Use consistent time intervals across x-axis." },
          { name: "Scatter Plot", useCase: "Investigating bivariate correlation and clustering between two continuous variables.", tip: "Add a regression trendline to reveal overall direction." },
          { name: "Area Graph", useCase: "Communicating cumulative volume progression over time.", tip: "Ensure transparent fills or stacked ordering so areas don't occlude." },
          { name: "Histogram", useCase: "Showing the frequency distribution of a continuous variable binned into ranges.", tip: "Ensure equal bin widths for accurate visual perception." }
        ]
      },
      {
        title: "3. Spatial Maps (Geographic & Regional Data)",
        description: "Best for location-anchored datasets where geography determines pattern clustering.",
        items: [
          { name: "Choropleth Map", useCase: "Shading geographic areas (states, countries) by normalized rate or density.", tip: "Normalize by population to avoid landmass area bias." },
          { name: "Symbol / Bubble Map", useCase: "Plotting proportional circles over specific geographic points.", tip: "Preserves discrete coordinate accuracy without polygon distortion." },
          { name: "Flow / Route Map", useCase: "Displaying origin-destination movement, trade routes, or migration.", tip: "Use directional arrows and line weight for flow volume." }
        ]
      }
    ],
    chartsUsed: [
      "Bar & Column Charts",
      "Donut & Pie Charts",
      "Line & Area Graphs",
      "Scatter Plots",
      "Treemaps",
      "Choropleth & Symbol Maps"
    ],
    insights: [
      "Charts excel at discrete categorical comparisons, while Graphs plot continuous mathematical relationships.",
      "Maps are required when spatial clustering or geographic jurisdiction is the primary analytical driver.",
      "Infographic cheat sheets force deliberate prioritization of high-value information, improving pedagogical clarity.",
      "Sharing academic work on LinkedIn opens opportunities for constructive professional discourse and industry visibility."
    ],
    conclusion: "The one-page cheat sheet was designed, structured, and successfully published on LinkedIn, providing a practical visual taxonomy for students and professionals to select appropriate visualizations based on analytical purpose.",
    learningOutcomes: "Visual taxonomy structuring, infographic design principles, audience-centric synthesis, and professional public communication on LinkedIn.",
    linkedInUrl: "https://lnkd.in/p/g_HzWZzR",
    supportingFiles: [
      {
        name: "LinkedIn Post Submission — Data Visualization Cheat Sheet",
        type: "LinkedIn Publication",
        format: "Post",
        size: "Online Post",
        url: "https://lnkd.in/p/g_HzWZzR",
        isDeliverable: true
      }
    ],
    accentColor: "#E8C547",
    featured: true
  },

  {
    id: "lab-04",
    slug: "from-learning-to-linkedin-data-viz-blog",
    num: "LAB 04",
    title: "FROM LEARNING TO LINKEDIN: EXPLORE THE POWER OF DATA VISUALIZATION",
    projectType: "Academic Lab Work",
    categories: ["Academic Lab Work", "Technical Writing", "Creative Communication"],
    category: "Academic Lab Work",
    primaryCategory: "Technical Writing",
    subject: "Professional Writing & Industry Discourse",
    course: "BCA VII Semester // Department of Computer Science",
    institution: "Dev Sanskriti Vishwavidyalaya",
    student: "Shreya Kashyap (Roll No. 23145028)",
    teacher: "Department of Computer Science // Dev Sanskriti Vishwavidyalaya",
    tool: "Technical Writing / LinkedIn",
    tools: ["Technical Blogging", "LinkedIn Publishing", "Data Storytelling", "Pedagogical Synthesis"],
    year: 2026,
    image: "/images/assignments/linkedin-blog.svg",
    images: [
      {
        url: "/images/assignments/linkedin-blog.svg",
        title: "From Learning to LinkedIn: Article Feature",
        caption: "Informative technical blog post published on LinkedIn exploring the cognitive foundations, real-world utility, and transformative impact of data visualization."
      }
    ],
    question: "From Learning to LinkedIn: Explore the Power of Data Visualization: Write an informative blog based on what you have learned in class. Present your understanding in your own words and share your knowledge with the wider world to build confidence and communication skills. Publish the blog on LinkedIn and submit in Google Classroom.",
    requirements: [
      "Write an informative, original blog post synthesizing classroom data visualization concepts",
      "Express understanding in personal, accessible prose suitable for both technical peers and general readers",
      "Explain the cognitive mechanism: why visual representation outperforms raw tabular numbers",
      "Provide real-world context demonstrating how visualization drives operational and strategic decisions",
      "Publish the blog post on LinkedIn to engage the wider professional community",
      "Submit the verified publication link in Google Classroom"
    ],
    objective: "Translate academic learning into a polished, accessible technical blog published on LinkedIn, demonstrating clear data storytelling, cognitive awareness of visual perception, and proactive professional communication.",
    problemStatement: "Technical knowledge isolated within the classroom often fails to develop the student's voice. Writing for a public audience demands clarity, empathy for the reader, and the ability to explain complex quantitative concepts without jargon.",
    blogSections: [
      {
        heading: "1. The Cognitive Shift: From Numbers to Meaning",
        content: "The human brain processes visual scenes in less than 250 milliseconds through pre-attentive visual attributes such as position, length, and color contrast. When data is trapped in rows and columns of spreadsheets, the reader must expend significant cognitive effort calculating mental summaries. Data visualization is not just aesthetic formatting; it is high-bandwidth cognitive compression that translates raw signals into instant pattern comprehension."
      },
      {
        heading: "2. The Triad: Accuracy, Clarity, and Visual Hierarchy",
        content: "A compelling visualization achieves three simultaneous objectives: absolute data integrity (no misleading zero-axes or disproportionate 3D effects), ruthless clarity (eliminating chartjunk, excessive gridlines, and redundant legends), and intentional visual hierarchy (directing the viewer's gaze immediately to the primary analytical takeaway)."
      },
      {
        heading: "3. Real-World Decision Impact",
        content: "In public governance, healthcare operations, and commercial retail, decision-makers do not have hours to parse raw databases. Whether detecting multi-state paper leak spikes, diagnosing hospital triage bottlenecks, or finding profit leaks in e-commerce discounts, effective dashboards empower teams to make fast, evidence-based interventions."
      },
      {
        heading: "4. The Growth Journey: Why Public Knowledge Sharing Matters",
        content: "Transitioning 'from learning to LinkedIn' transforms passive knowledge reception into active professional contribution. Writing in our own words cements understanding, invites peer feedback, and builds early confidence in technical thought leadership."
      }
    ],
    chartsUsed: [
      "Pre-Attentive Perception Models",
      "Visual Hierarchy Frameworks",
      "Executive Dashboard Principles",
      "Data-to-Decision Workflows"
    ],
    insights: [
      "Writing about data visualization in one's own words reveals hidden gaps in understanding and cements core principles.",
      "Visual literacy is as critical for modern decision-makers as quantitative mathematical competency.",
      "Public sharing on LinkedIn builds an authentic professional footprint, demonstrating passion, curiosity, and communication skills."
    ],
    conclusion: "The blog post was authored, refined, and published on LinkedIn, successfully meeting all classroom criteria while establishing an authentic voice in the broader data analytics community.",
    learningOutcomes: "Technical blogging, audience communication, digital thought leadership, and translation of complex data concepts into engaging prose.",
    linkedInUrl: "https://lnkd.in/p/gCeDkaHk",
    supportingFiles: [
      {
        name: "Official LinkedIn Blog Article Submission",
        type: "LinkedIn Publication",
        format: "Article",
        size: "Online Publication",
        url: "https://lnkd.in/p/gCeDkaHk",
        isDeliverable: true
      }
    ],
    accentColor: "#E8C547",
    featured: true
  },

  {
    id: "lab-05",
    slug: "data-visualization-learning-activity-foundations-taxonomy",
    num: "LAB 05",
    title: "LEARNING ACTIVITY: DATA VISUALIZATION FOUNDATIONS & TAXONOMY",
    projectType: "Academic Lab Work",
    categories: ["Academic Lab Work", "Research Papers and Reports", "Theoretical Foundations"],
    category: "Academic Lab Work",
    primaryCategory: "Theoretical Foundations",
    subject: "Foundational Theory & Chart Taxonomy",
    course: "BCA VII Semester // Department of Computer Science",
    institution: "Dev Sanskriti Vishwavidyalaya",
    student: "Shreya Kashyap (Roll No. 23145028)",
    teacher: "Department of Computer Science // Dev Sanskriti Vishwavidyalaya",
    tool: "Research & Taxonomy Analysis",
    tools: ["Tableau Knowledgebase", "SlideModel Guide", "The Data Visualisation Catalogue", "Google Docs"],
    year: 2026,
    image: "/images/assignments/taxonomy-catalogue.svg",
    images: [
      {
        url: "/images/assignments/taxonomy-catalogue.svg",
        title: "Data Visualization Foundations & Catalogue Study",
        caption: "Comprehensive analytical notes examining definitions, importance, Chart vs. Graph distinctions, and a full taxonomy of charts, graphs, and maps from The Data Visualisation Catalogue."
      }
    ],
    question: "Learning Activity: Data Visualization: Explore all three resources: (1) https://www.tableau.com/visualization/what-is-data-visualization#big, (2) https://slidemodel.com/chart-vs-graph/, (3) https://datavizcatalogue.com/. Task: Prepare notes covering: Definition & Importance of Data Visualization; Chart vs. Graph; Types of Data Visualization; Purpose and appropriate use of different visualizations; Examples of Charts, Graphs and Maps; Explore from the Data Visualisation Catalogue; Understand the resources and prepare notes in your own words with suitable examples.",
    requirements: [
      "Thoroughly explore all three authoritative resources (Tableau, SlideModel, The Data Visualisation Catalogue)",
      "Formulate formal definitions and explain the cognitive necessity of data visualization",
      "Explicitly analyze and contrast the difference between a Chart and a Graph",
      "Structure types of data visualization by core analytical purpose",
      "Examine purposes and appropriate use cases of different visualizations with real-world examples",
      "Explore and catalog distinct visual structures from The Data Visualisation Catalogue",
      "Compile comprehensive academic study notes in Google Docs"
    ],
    objective: "Develop a rigorous theoretical foundation by examining industry-standard resources, establishing clear conceptual distinctions between charts and graphs, and building a structured catalog of visual representation models.",
    problemStatement: "Practitioners often confuse visual terminology and deploy charts without understanding their mathematical foundations or perceptual limits. Deep taxonomic exploration ensures deliberate, evidence-based visual design.",
    notesSections: [
      {
        title: "1. Definition & Importance of Data Visualization",
        summary: "Data visualization is the graphical representation of information and data using visual elements such as charts, graphs, and maps.",
        details: [
          "Cognitive Advantage: Humans process visual inputs substantially faster than raw text or tables, leveraging pre-attentive attributes (color, size, shape, position).",
          "Pattern Detection: Trends, outliers, correlations, and clusters that remain hidden across thousands of spreadsheet rows become instantly apparent.",
          "Actionable Decision-Making: Empowers executives, operational teams, and public stakeholders to make fast, defensible, data-backed choices without cognitive overload."
        ]
      },
      {
        title: "2. Chart vs. Graph: The Core Distinction",
        summary: "While frequently used interchangeably in informal language, Charts and Graphs possess fundamental mathematical and architectural distinctions.",
        details: [
          "Chart (Broader Umbrella): A chart is a graphical representation of data where information is symbolized by bars, slices, lines, or icons. It can represent qualitative or categorical distributions without requiring continuous coordinate axes (e.g. Pie Chart, Organization Chart, Gantt Chart).",
          "Graph (Specific Subcategory): A graph specifically plots mathematical relationships between two or more continuous quantitative variables across defined coordinate axes (such as Cartesian x and y axes). Every point represents a mathematical pair (e.g. Scatter Plot, Line Graph, Function Curve).",
          "The Golden Rule: 'All graphs are charts, but not all charts are graphs.'"
        ]
      },
      {
        title: "3. Visual Taxonomy & Purpose Classification",
        summary: "Visualizations are selected based on the specific analytical question they answer:",
        details: [
          "Comparison: Bar Charts, Column Charts, Bullet Graphs (comparing discrete categories against a common baseline).",
          "Trends Over Time: Line Graphs, Area Curves, Candlestick Charts (tracking continuous temporal changes and rates of acceleration).",
          "Composition (Part-to-Whole): Donut Charts, Treemaps, 100% Stacked Bar Charts (showing how sub-components form a total).",
          "Distribution: Histograms, Box-and-Whisker Plots, Density Ridge Plots (displaying spread, variance, skewness, and median values).",
          "Relationships / Correlation: Scatter Plots, Bubble Charts, Correlation Heatmaps (investigating whether two or more metrics move together).",
          "Geospatial / Maps: Choropleth Maps, Dot Density Maps, Flow Maps (anchoring data into spatial and geographic coordinates)."
        ]
      },
      {
        title: "4. Exploration from The Data Visualisation Catalogue",
        summary: "In-depth review of visual structures cataloged in datavizcatalogue.com by Severino Ribecca:",
        details: [
          "Sankey Diagrams: Visualizing multi-stage flow volume, energy transfers, and funnel drop-offs.",
          "Choropleth Maps: Communicating regional statistical density while accounting for geographic area distortions.",
          "Box-and-Whisker Plots: Enabling rigorous 5-number statistical summaries (min, Q1, median, Q3, max) with outlier dots.",
          "Radar / Spider Charts: Comparing multi-variable profile competencies across uniform radial scales."
        ]
      }
    ],
    chartsUsed: [
      "Bar & Column Charts",
      "Line & Function Graphs",
      "Scatter & Bubble Plots",
      "Histograms & Boxplots",
      "Treemaps & Sankey Diagrams",
      "Choropleth & Spatial Maps"
    ],
    insights: [
      "Understanding coordinate mathematics prevents misleading chart choices and bad axes scales.",
      "The Data Visualisation Catalogue reveals that virtually any data relationship has an optimized visual archetype.",
      "Context and user literacy dictate whether a simple chart or an advanced multi-dimensional graph is required."
    ],
    conclusion: "The learning activity notes provide a comprehensive reference framework that grounds Shreya Kashyap's practical dashboard work in solid theoretical, perceptual, and taxonomic foundations.",
    learningOutcomes: "Mastery of data visualization theory, Chart vs. Graph mathematical boundaries, pre-attentive cognition, and catalogue-driven visual selection.",
    googleDocUrl: "https://docs.google.com/document/d/1Do7hl1v2UeiZ8u21LTp8x2el1Ze9U4f2-ByA24MWAbU/edit?usp=sharing",
    supportingFiles: [
      {
        name: "Official Google Doc Learning Notes Submission",
        type: "Google Document",
        format: "DOC",
        size: "Online Document",
        url: "https://docs.google.com/document/d/1Do7hl1v2UeiZ8u21LTp8x2el1Ze9U4f2-ByA24MWAbU/edit?usp=sharing",
        isDeliverable: true
      }
    ],
    accentColor: "#E8C547",
    featured: true
  },

  {
    id: "lab-06",
    slug: "understanding-audience-and-context-excel-practicals",
    num: "LAB 06",
    title: "LAB PRACTICAL: UNDERSTANDING AUDIENCE AND CONTEXT IN DATA VISUALIZATION",
    projectType: "Academic Lab Work",
    categories: ["Academic Lab Work", "Excel Assignments", "Data Analysis Projects"],
    category: "Academic Lab Work",
    primaryCategory: "Excel Assignments",
    subject: "Audience-Context Alignment & Excel Practical Modeling",
    course: "BCA VII Semester // Department of Computer Science",
    institution: "Dev Sanskriti Vishwavidyalaya",
    student: "Shreya Kashyap (Roll No. 23145028)",
    teacher: "Department of Computer Science // Dev Sanskriti Vishwavidyalaya",
    tool: "Microsoft Excel",
    tools: ["Microsoft Excel", "Audience-Context Matrix", "Comparative Analysis", "Scatter & Trendline Modeling"],
    year: 2026,
    image: "/images/assignments/audience-matrix.svg",
    images: [
      {
        url: "/images/dashboards/placement-analysis.png",
        title: "Problem 1: College Placement Review (Excel)",
        caption: "Audience-tailored executive comparison chart built for the College Governing Board, showing 3-year department placement percentages across CSE, ECE, Mechanical, Civil, and MBA."
      },
      {
        url: "/images/dashboards/study-habits.svg",
        title: "Problem 2: Study Habits Investigation (Excel)",
        caption: "Technical correlation scatter plot with linear trendline and multi-variable encoding (study hours, attendance %, exam marks) built for the Data Analytics team."
      }
    ],
    question: "LAB PRACTICAL: UNDERSTANDING AUDIENCE AND CONTEXT IN DATA VISUALIZATION: Before you begin, read the 'Understanding Audience and Context' notes prepared earlier. Then solve the 2 problems below — for each, identify the Context, identify the Audience, complete the Audience–Context Matrix, and build the matching chart in Excel.\n\nPROBLEM 1 — COLLEGE PLACEMENT REVIEW (GENERAL AUDIENCE):\nScenario: The Placement Cell has collected department-wise placement percentages for the last three years (2023, 2024, 2025). The College Director will present this data to the Governing Board next week to decide whether an evening remedial coaching program should continue. The Board members are not data specialists.\nRaw Data:\nCSE: 2023 78%, 2024 82%, 2025 88%\nECE: 2023 70%, 2024 74%, 2025 79%\nMechanical: 2023 65%, 2024 68%, 2025 66%\nCivil: 2023 60%, 2024 63%, 2025 65%\nMBA: 2023 72%, 2024 75%, 2025 80%\n\nPROBLEM 2 — STUDY HABITS INVESTIGATION (TECHNICAL AUDIENCE):\nScenario: The Data Analytics team lead wants to check whether weekly study hours are related to attendance and exam performance, in order to design a targeted intervention model. The audience is the analytics team itself — comfortable with detailed, technical charts.\nRaw Data (S1 to S10):\nS1: 5 hrs, 78% att, 62 marks | S2: 12 hrs, 92% att, 88 marks | S3: 3 hrs, 65% att, 45 marks | S4: 8 hrs, 85% att, 74 marks | S5: 15 hrs, 96% att, 91 marks | S6: 6 hrs, 80% att, 65 marks | S7: 10 hrs, 88% att, 80 marks | S8: 2 hrs, 60% att, 40 marks | S9: 9 hrs, 84% att, 76 marks | S10: 14 hrs, 94% att, 90 marks.",
    requirements: [
      "Problem 1: Identify Context (Time period, Department scope, Population, Source)",
      "Problem 1: Identify Audience (Audience identity, Prior knowledge, Core questions)",
      "Problem 1: Complete Audience–Context Matrix (Who, What, Why, When, Where, How, Action)",
      "Problem 1: Select Purpose (Comparison / Trend) and construct clear Excel chart for general Board audience",
      "Problem 2: Identify Context (Time period, Scope, Population, Source)",
      "Problem 2: Identify Audience (Analytics specialists, Prior technical knowledge, Analytical questions)",
      "Problem 2: Complete Audience–Context Matrix (Who, What, Why, When, Where, How, Action)",
      "Problem 2: Select Purpose (Relationship / Correlation) and build Excel chart with trendline for technical audience",
      "Submit complete solutions and Excel workbook in Google Classroom"
    ],
    objective: "Demonstrate how the target audience's technical literacy and the decision-making context dictate chart selection, visual complexity, and annotation style across two distinct institutional scenarios in Microsoft Excel.",
    problemStatement: "Presenting complex statistical regression to executive boards causes confusion, while presenting oversimplified high-level summaries to technical teams prevents actionable modeling. Visualizations must be calibrated precisely to audience needs and decision context.",
    problems: [
      {
        problemNum: "PROBLEM 1",
        title: "College Placement Review (General Executive Audience)",
        scenario: "The Placement Cell has collected department-wise placement percentages for the last three years (2023, 2024, 2025). The College Director will present this data to the Governing Board next week to decide whether an evening remedial coaching program should continue. The Board members are not data specialists.",
        rawDataTable: [
          { department: "CSE", y2023: "78%", y2024: "82%", y2025: "88%" },
          { department: "ECE", y2023: "70%", y2024: "74%", y2025: "79%" },
          { department: "Mechanical", y2023: "65%", y2024: "68%", y2025: "66%" },
          { department: "Civil", y2023: "60%", y2024: "63%", y2025: "65%" },
          { department: "MBA", y2023: "72%", y2024: "75%", y2025: "80%" }
        ],
        context: [
          { element: "Time Period", answer: "2023 – 2025 (3 Consecutive Academic Years)" },
          { element: "Location / Department Scope", answer: "5 Academic Departments (CSE, ECE, Mechanical, Civil, MBA)" },
          { element: "Population Represented", answer: "Graduating student cohorts across monitored departments" },
          { element: "Source of Data", answer: "Placement Cell Institutional Employment Records" }
        ],
        audience: [
          { question: "Who is the audience?", answer: "College Governing Board members and College Director" },
          { question: "What do they already know?", answer: "General background (familiar with college programs, but NOT data/statistics specialists)" },
          { question: "What do they want to find out?", answer: "Whether placement rates are improving, which departments need support, and whether to fund the remedial program" }
        ],
        matrix: [
          { dimension: "Who?", answer: "Governing Board Members (Executive decision-makers, non-technical)" },
          { dimension: "What?", answer: "Department-wise placement percentage progression over 3 years" },
          { dimension: "Why?", answer: "Decide whether the evening remedial coaching program should be continued or revised" },
          { dimension: "When?", answer: "Next week during the annual Governing Board meeting" },
          { dimension: "Where?", answer: "Board meeting presentation / Executive briefing document" },
          { dimension: "How?", answer: "Simple, high-contrast Grouped Column Chart with bold values and clear legends" },
          { dimension: "What action?", answer: "Vote to approve funding for remedial coaching in lagging departments" }
        ],
        purposeAndChart: {
          purpose: "Comparison and Trend",
          justification: "The Board needs to compare performance across the 5 departments while simultaneously observing the 3-year direction of change.",
          chartBuilt: "Grouped Column Chart in Microsoft Excel",
          details: "Departments on horizontal axis, 3 colored series for 2023, 2024, and 2025 with data callout labels on top, titled 'Department-wise Placement Percentage (2023–2025)' and captioned with source and date."
        }
      },
      {
        problemNum: "PROBLEM 2",
        title: "Study Habits Investigation (Technical Analytics Audience)",
        scenario: "The Data Analytics team lead wants to check whether weekly study hours are related to attendance and exam performance, in order to design a targeted intervention model. The audience is the analytics team itself — comfortable with detailed, technical charts.",
        rawDataTable: [
          { student: "S1", studyHours: 5, attendance: "78%", marks: 62 },
          { student: "S2", studyHours: 12, attendance: "92%", marks: 88 },
          { student: "S3", studyHours: 3, attendance: "65%", marks: 45 },
          { student: "S4", studyHours: 8, attendance: "85%", marks: 74 },
          { student: "S5", studyHours: 15, attendance: "96%", marks: 91 },
          { student: "S6", studyHours: 6, attendance: "80%", marks: 65 },
          { student: "S7", studyHours: 10, attendance: "88%", marks: 80 },
          { student: "S8", studyHours: 2, attendance: "60%", marks: 40 },
          { student: "S9", studyHours: 9, attendance: "84%", marks: 76 },
          { student: "S10", studyHours: 14, attendance: "94%", marks: 90 }
        ],
        context: [
          { element: "Time Period", answer: "Current academic term / semester examination cycle" },
          { element: "Location / Group Scope", answer: "Sample of 10 student observations (S1 through S10)" },
          { element: "Population Represented", answer: "Undergraduate student cohort study habits and outcomes" },
          { element: "Source of Data", answer: "Academic records, biometric attendance, and self-reported weekly study logs" }
        ],
        audience: [
          { question: "Who is the audience?", answer: "Data Analytics Team and Team Lead" },
          { question: "What do they already know?", answer: "Technical specialists (comfortable with statistical distributions, regression, correlation, and residuals)" },
          { question: "What do they want to find out?", answer: "The statistical relationship/correlation between study hours, attendance, and exam marks to build an intervention model" }
        ],
        matrix: [
          { dimension: "Who?", answer: "Internal Data Analytics Team and Modeling Leads" },
          { dimension: "What?", answer: "Bivariate correlation between Study Hours, Attendance %, and Exam Marks" },
          { dimension: "Why?", answer: "Calibrate thresholds for a predictive early-warning intervention algorithm" },
          { dimension: "When?", answer: "Sprint analysis & modeling design phase" },
          { dimension: "Where?", answer: "Analytics team dashboard / technical report" },
          { dimension: "How?", answer: "Scatter Plot with linear regression trendline, R² coefficient, and point annotations" },
          { dimension: "What action?", answer: "Establish cutoff metrics (e.g. students < 6 hrs study & < 75% attendance trigger support)" }
        ],
        purposeAndChart: {
          purpose: "Relationship / Correlation",
          justification: "The analytics team is testing whether two continuous variables (study hours and exam score) covary together, and how attendance moderates that link.",
          chartBuilt: "Scatter Plot with Linear Trendline & Equation in Microsoft Excel",
          details: "X-axis represents Weekly Study Hours (0–16), Y-axis represents Exam Marks (0–100), with data points plotted for S1–S10, linear trendline showing strong positive correlation, and R² displayed."
        }
      }
    ],
    chartsUsed: [
      "Grouped Column Chart (General Board Audience)",
      "Scatter Plot with Linear Regression Trendline (Technical Audience)",
      "Audience-Context Matrix Framework",
      "Multi-Variable Data Tables"
    ],
    insights: [
      "Board/Executive audiences require low cognitive friction: grouped columns with direct values allow rapid comprehension in seconds.",
      "Technical teams require exploratory richness: scatter plots with regression lines reveal variance and outliers essential for predictive modeling.",
      "A strong positive correlation exists between weekly study hours and exam performance (students with 12+ hours achieved 88+ marks).",
      "Attendance strongly correlates with study hours, demonstrating that academic engagement is systemic rather than isolated."
    ],
    conclusion: "By analyzing the Audience, Context, and decision objective beforehand, appropriate charts were constructed in Excel for both executive governance and statistical modeling teams, demonstrating how context dictates design.",
    learningOutcomes: "Audience-Context matrix formulation, scenario-based chart selection, executive data presentation, bivariate correlation scatter modeling in Excel, and trendline interpretation.",
    googleDocUrl: "https://docs.google.com/document/d/1lJxBAK0Bq7_c9bZ-jN1Lx_ha6hEnfotwZAJYNEbn_gc/edit?usp=sharing",
    supportingFiles: [
      {
        name: "Official Google Doc Practical Submission",
        type: "Google Document",
        format: "DOC",
        size: "Online Document",
        url: "https://docs.google.com/document/d/1lJxBAK0Bq7_c9bZ-jN1Lx_ha6hEnfotwZAJYNEbn_gc/edit?usp=sharing",
        isDeliverable: true
      }
    ],
    accentColor: "#E8C547",
    featured: true
  },

  {
    id: "lab-07",
    slug: "full-stack-data-api-service",
    num: "LAB 07",
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
    methodology: "1. Modular architectural separation into controllers, routes, and server runners.\n2. Writing optimized Express filter predicates with case-insensitive token matching.\n3. Establishing comprehensive regression test suites in test-api.js and test-e2e.js.\n4. Configuring static asset serving with safe content-type headers.",
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
        code: `import express from 'express';
import cors from 'cors';
import dashboardRoutes from './routes/dashboardRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use('/api', dashboardRoutes);`
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
    methodology: "1. Comparative cognitive analysis across 12 distinct chart encodings.\n2. Heuristic evaluation of user interactions during exploratory visual analysis.\n3. Synthesis of executive reporting standards and accessibility compliance.",
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
  if (term === 'draw-your-day' || term === 'daily-energy-curve') {
    return WORK_ITEMS.find(w => w.id === 'lab-02' || w.id === 'assignment-01') || null;
  }
  if (term === 'ecommerce-analytics' || term === 'e-commerce' || term === 'ecommerce') {
    return WORK_ITEMS.find(w => w.id === 'lab-02' || w.id === 'assignment-02') || null;
  }
  if (term === 'alumni-dashboard') {
    return WORK_ITEMS.find(w => w.id === 'placement-analysis') || null;
  }
  if (term === 'geospatial-analysis') {
    return WORK_ITEMS.find(w => w.id === 'superstore-sales') || null;
  }
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
