// Centralized API Service for Data Atelier (Digital Data Exhibition Edition)

const API_BASE = '/api';

// Fallback in case backend server is warming up or during local development
const FALLBACK_DASHBOARDS = [
  {
    "id": "india-paper-leaks",
    "title": "India Paper Leak Analysis Dashboard (2004\u20132026)",
    "tool": "Power BI",
    "category": "Research",
    "year": 2026,
    "image": "/images/dashboards/paper-leaks.png",
    "description": "Interactive analytical study examining patterns, frequencies, and regulatory responses to examination paper leaks across states and testing domains.",
    "objective": "Analyze patterns across years, examination categories, and leak status to uncover systemic vulnerabilities in high-stakes testing.",
    "dataset": "India Paper Leaks Archive 2004\u20132026",
    "visualizationApproach": "State-level choropleth map, chronological recurrence timeline, cross-filtering slicers by examination tier, and impact KPI metric tiles.",
    "insights": [
      "Recruitment examinations account for over 58% of all reported integrity disruptions across monitored testing agencies.",
      "State-level decentralized testing boards show higher vulnerability variance compared to centralized multi-session assessments.",
      "Incident frequency peaked in examination cycles immediately following major post-pandemic schedule consolidations."
    ],
    "chartsUsed": [
      "State Choropleth Map",
      "Hierarchical Treemap",
      "Temporal Area Chart",
      "Tier Distribution Donut",
      "Dynamic Multi-KPI Cards"
    ],
    "featured": true,
    "accentColor": "#8E1B2E",
    "liveUrl": "",
    "googleDocUrl": "https://docs.google.com/document/d/1CxMFBAVrh1dMMPuCFa1ifjL96Lhge06Toq80Bm3QiWw/edit?usp=sharing",
    "kaggleUrl": "https://www.kaggle.com/datasets/sujaynadkarni/india-paper-leaks-from-2004-to-2026",
    "student": "Shreya Kashyap (Roll No. 23145028)",
    "course": "BCA VII Semester // Dev Sanskriti Vishwavidyalaya",
    "dataDna": {
      "tool": "Power BI Desktop & DAX",
      "domain": "Examination Integrity & Public Policy",
      "year": 2026,
      "dataset": "India Paper Leaks Archive (2004\u20132026)",
      "primaryVisuals": "Choropleth Map, Treemap, Area Chart, Multi-KPI Cards",
      "analysisType": "Spatiotemporal Anomaly & Recurrence Modeling",
      "granularity": "State-level, Multi-tier, Chronological Records"
    },
    "story": {
      "question": "What systemic patterns and institutional factors drive recurrent examination leaks across Indian states, and how do recruitment exams compare with academic assessments?",
      "data": "Synthesized records from government inquiry archives, press disclosures, and state testing council audit registries spanning 2004\u20132026. Cleaned with Power Query to normalize disparate state board nomenclatures and resolve geographic discrepancies.",
      "exploration": "Statistical variance testing revealed that incident clustering is strongly correlated with decentralized state recruitment testing dates rather than centralized university eligibility exams.",
      "visualization": "Designed a high-contrast state choropleth paired with temporal area curves and hierarchical treemaps. Slicers allow instantaneous cross-filtering across recruitment tiers, leak verification status, and fiscal calendar quarters.",
      "insight": "Over 58% of recorded integrity disruptions concentrate in civil and public service recruitment pipelines, emphasizing the necessity of synchronized cryptographic question paper distribution."
    },
    "visualizations": [
      {
        "id": "v1-choropleth",
        "name": "State-Level Vulnerability Map",
        "type": "Geographic Choropleth",
        "purpose": "Identify geographic concentration of reported examination leak incidents across all states and union territories.",
        "data": "State Jurisdiction, Incident Count, Investigation Status, Year",
        "whyThisVisual": "Choropleth enables immediate spatial cognition of regional variance, highlighting regional clusters that tabular reports obscure.",
        "insight": "Northern and central testing corridors exhibit the highest historical recurrence density, correlating with multi-tier state recruitment drives."
      },
      {
        "id": "v2-timeline",
        "name": "Recurrence Timeline & Area Trend",
        "type": "Temporal Area Chart",
        "purpose": "Trace chronological recurrence patterns from 2004 through 2026 to detect cyclical vulnerability spikes.",
        "data": "Timestamp, Incident Severity Index, Testing Cycle, Board Tier",
        "whyThisVisual": "Area filling emphasizes aggregate volume over time, making post-pandemic consolidation surges immediately legible.",
        "insight": "Incident frequency reached historic highs during accelerated multi-batch recruitment calendars following post-pandemic schedule consolidations."
      },
      {
        "id": "v3-treemap",
        "name": "Examination Tier Hierarchy",
        "type": "Hierarchical Treemap",
        "purpose": "Break down incident shares across recruitment, professional entrance, and secondary education tiers.",
        "data": "Examination Tier, Candidate Volume, Incident Share, Authority Type",
        "whyThisVisual": "Treemap nested rectangles intuitively illustrate proportional shares across complex organizational hierarchies.",
        "insight": "Recruitment examinations represent 58% of all recorded disruptions, outpacing professional university entrance exams by 2.4x."
      },
      {
        "id": "v4-kpis",
        "name": "Executive Integrity Scorecards",
        "type": "Dynamic Multi-KPI Cards",
        "purpose": "Present critical headline metrics: total disruptions, affected candidate volume, and resolution rates.",
        "data": "Total Incidents, Estimated Affected Candidates, Legal Resolution %, Mean Days to Triage",
        "whyThisVisual": "Cards provide immediate cognitive anchoring before visitors explore complex multi-layered exploratory charts.",
        "insight": "Average time to regulatory resolution decreased by 34% after formalized digital chain-of-custody protocols were established."
      }
    ],
    "challenge": {
      "question": "Which examination sector accounted for over 58% of all reported integrity disruptions across testing agencies?",
      "options": [
        {
          "text": "Recruitment & civil service examinations",
          "isCorrect": true,
          "explanation": "State-level public recruitment drives represent 58.2% of all incidents due to decentralized administrative testing chains."
        },
        {
          "text": "Primary and secondary school final boards",
          "isCorrect": false,
          "explanation": "Secondary boards operate under standardized central scheduling with lower economic incentives for systematic interference."
        },
        {
          "text": "Postgraduate university research admissions",
          "isCorrect": false,
          "explanation": "Postgraduate research admissions constitute under 6% of documented incidents nationwide."
        }
      ],
      "hint": "Look closely at the Hierarchical Treemap and examine the largest proportional rectangle."
    }
  },
  {
    "id": "superstore-sales",
    "title": "Geospatial Analysis \u2014 Sales, Profit & Order Concentration",
    "tool": "Tableau",
    "category": "Business",
    "year": 2025,
    "image": "/images/dashboards/superstore-sales.png",
    "description": "Tableau geospatial analytics dashboard evaluating North America state sales ($132 to $457K), city profitability (-$13.8K to $62K), and order concentration density across 104+ locations.",
    "objective": "Map spatial distribution of commercial transactions, isolate negative-margin city clusters, and evaluate geographic order density.",
    "dataset": "Global Commercial Sales & Geospatial Records",
    "visualizationApproach": "North America state sales choropleth, city-level profit symbol map with diverging color scale, and order concentration density heatmap.",
    "insights": [
      "State sales volume displays strong geographic concentration along coastal economic corridors (up to $457K in top states).",
      "City-level profit reveals sharp spatial divergence from -$13.8K deficits to +$62K high-yield hubs.",
      "Order concentration density confirms 104+ distinct regional distribution clusters across the continental United States."
    ],
    "chartsUsed": [
      "Sales by State Choropleth Map",
      "Profit by City Diverging Symbol Map",
      "Order Concentration Density Heatmap",
      "Regional Map Layers",
      "Profitability Color Gradient"
    ],
    "featured": true,
    "accentColor": "#B8955A",
    "liveUrl": "",
    "dataDna": {
      "tool": "Tableau Desktop & Calculated Fields",
      "domain": "Commercial Strategy & Margin Optimization",
      "year": 2025,
      "dataset": "Global Superstore Commercial Dataset",
      "primaryVisuals": "Dual-Axis Trend, Elasticity Scatter, Regional Heatmap, Cohort Waterfall",
      "analysisType": "Margin Elasticity & Cohort Retention Modeling",
      "granularity": "Transactional Line-Item, Regional Cohorts, Category Sub-Tiers"
    },
    "story": {
      "question": "Where does top-line sales growth fail to translate into net operating profit, and which discount practices create hidden fiscal deficits?",
      "data": "Transactional logs covering multi-region order line items, shipping modalities, customer segments, discount rates, and operational margins.",
      "exploration": "Computed profit-margin variance fields against discount bands. Identified non-linear margin collapse occurring specifically past the 20% discount mark in bulky sub-categories.",
      "visualization": "Engineered synchronized dual-axis trajectories, quadrant scatter matrices for discount elasticity, and color-coded regional density layers.",
      "insight": "Aggressive discounting in Furniture generates negative operational margins (-12.4%), whereas Technology sustains robust profit margins even at moderate promotion levels."
    },
    "visualizations": [
      {
        "id": "v1-elasticity",
        "name": "Discount Elasticity Scatter Matrix",
        "type": "Quadrant Scatter Plot",
        "purpose": "Map transaction discount percentages against net profit margin to identify breakeven thresholds.",
        "data": "Discount Rate (0\u201380%), Profit Margin (%), Sales Volume, Sub-Category",
        "whyThisVisual": "Scatter plot with quadrant threshold lines instantly separates value-creating sales from margin-diluting transactions.",
        "insight": "Discounts beyond 20% in Furniture trigger an immediate drop to -12.4% average margin due to fixed logistics and handling overhead."
      },
      {
        "id": "v2-dualaxis",
        "name": "Dual-Axis Revenue & Margin Trajectory",
        "type": "Dual-Axis Line & Bar Combo",
        "purpose": "Contrast gross transaction revenue against net operating profit trajectory across quarterly cycles.",
        "data": "Quarterly Timestamp, Gross Revenue, Net Profit, Margin %",
        "whyThisVisual": "Overlaying sales bars with margin line curves exposes divergent quarters where volume grew while profitability shrank.",
        "insight": "Q4 holiday sales volume jumped 38%, but overall operating margin compressed by 4.2 percentage points due to promotional price cuts."
      },
      {
        "id": "v3-regional",
        "name": "Regional Profitability Heatmap",
        "type": "Geographic Value Heatmap",
        "purpose": "Pinpoint regional fulfillment hubs and sub-markets driving commercial surpluses or deficits.",
        "data": "Region, State, Profit Ratio, Order Count, Shipping Cost",
        "whyThisVisual": "Diverging color ramp (Burgundy negative to Warm Gold positive) directs immediate managerial focus to problem territories.",
        "insight": "The West region generated the strongest profit ratio (18.6%), while select Central rural routes operated at consistent shipping losses."
      },
      {
        "id": "v4-cohort",
        "name": "Customer Segment Cohort Waterfall",
        "type": "Waterfall Distribution Chart",
        "purpose": "Track cumulative profit contributions by customer acquisition cohorts across their lifecycle.",
        "data": "Acquisition Year, Segment (Consumer, Corporate, Home Office), Cumulative Margin",
        "whyThisVisual": "Waterfall steps clearly depict incremental gains and deductions leading to total bottom-line earnings.",
        "insight": "Corporate repeat buyers deliver a 3.1x higher lifetime profitability compared to single-purchase discount-seeking consumers."
      }
    ],
    "challenge": {
      "question": "At what promotional discount threshold does transaction profitability in the Furniture category turn negative?",
      "options": [
        {
          "text": "Discounts exceeding 20%",
          "isCorrect": true,
          "explanation": "Transactions discounted above 20% average -12.4% margin because high shipping and assembly costs outstrip markups."
        },
        {
          "text": "Discounts exceeding 50%",
          "isCorrect": false,
          "explanation": "By 50% discount, losses exceed -40%; the critical transition to negative margin occurs much earlier at 20%."
        },
        {
          "text": "Any discount above 0%",
          "isCorrect": false,
          "explanation": "Discounts between 5% and 15% maintain positive net operating profit margins across all regions."
        }
      ],
      "hint": "Check the quadrant separation line on the Discount Elasticity Scatter Matrix."
    }
  },
  {
    "id": "placement-analysis",
    "title": "Computer Science Alumni Dashboard",
    "tool": "Power BI",
    "category": "Education",
    "year": 2025,
    "image": "/images/dashboards/placement-analysis.png",
    "description": "Career, employment, and higher studies analytics dashboard for BCA, B.Sc IT, and MCA graduates featuring 80 alumni records, average salary benchmarks (4.59 LPA), and industry treemaps.",
    "objective": "Analyze graduate career trajectories, industry sector absorption, and compensation patterns across computer science academic cohorts.",
    "dataset": "Computer Science Alumni Employment Registry (2018\u20132025)",
    "visualizationApproach": "Course distribution bars, industries employing alumni, graduation year streamgraph, employment status donut, and geographic placement map.",
    "insights": [
      "Employed alumni account for 65% (52 graduates) with an average annual compensation of 4.59 LPA.",
      "21.25% of graduates transitioned into higher academic studies (MCA and specialized master degrees).",
      "E-commerce (14) and FinTech (13) constitute the top absorbing industry sectors for computing graduates."
    ],
    "chartsUsed": [
      "Course Distribution Bar Chart",
      "Industries Employing CS Alumni Bar Chart",
      "Graduation Year Trend Line Chart",
      "Graduation Year & Industry Streamgraph",
      "Employment Status Donut Chart",
      "Alumni Location Bar & Map",
      "Industry Breakdown Treemap",
      "Decomposition Tree by Industry"
    ],
    "featured": true,
    "accentColor": "#C98F98",
    "liveUrl": "",
    "dataDna": {
      "tool": "Advanced Excel & Power Query",
      "domain": "Institutional Education & Career Economics",
      "year": 2025,
      "dataset": "University Placement & Career Outcomes Dataset",
      "primaryVisuals": "Distribution Histogram, CGPA vs CTC Scatter, Pareto Analysis, Funnel",
      "analysisType": "Correlative Placement Modeling & Funnel Conversion",
      "granularity": "Student-level Records, Departmental Cohorts, Compensation Tiers"
    },
    "story": {
      "question": "Which academic milestones and pre-graduation experiences exert the greatest empirical leverage on placement compensation and time-to-offer?",
      "data": "Institutional career service records spanning student CGPA transcripts, internship histories, coding assessment rankings, and final CTC package letters.",
      "exploration": "Utilized Power Query to structure messy recruitment logs. Statistical distribution modeling proved that internships had a stronger effect on offer velocity than raw GPA.",
      "visualization": "Engineered dynamic Excel pivot dashboards featuring distribution histograms, Pareto hiring sector curves, and conditional KPI tiles.",
      "insight": "Completing a summer industry internship reduced average time-to-first-offer by 42 days and raised median CTC offers by 26% across all engineering disciplines."
    },
    "visualizations": [
      {
        "id": "v1-histogram",
        "name": "CTC Package Distribution Histogram",
        "type": "Statistical Frequency Histogram",
        "purpose": "Illustrate compensation spread, skewness, and median CTC benchmarks across graduating cohorts.",
        "data": "Annual CTC Bands (LPA), Student Count, Frequency Density, Median Reference",
        "whyThisVisual": "Histogram reveals right-skewed salary distributions that simple arithmetic averages misrepresent.",
        "insight": "The overall distribution has a median of 8.4 LPA, with top 10th percentile packages clustering above 22 LPA in tech and analytics."
      },
      {
        "id": "v2-scatter",
        "name": "CGPA vs Compensation Correlation",
        "type": "Correlation Scatter Plot with Trendline",
        "purpose": "Test the statistical relationship between undergraduate grade point averages and final compensation.",
        "data": "CGPA (scale 0-10), Final CTC, Technical Assessment Score, Internship Count",
        "whyThisVisual": "Scatter plot highlights both positive trendline slope and notable high-earning outliers with moderate CGPA.",
        "insight": "While CGPA above 8.0 guarantees initial shortlists, compensation beyond 18 LPA is predominantly driven by specialized project portfolios."
      },
      {
        "id": "v3-pareto",
        "name": "Sector Hiring Concentration Pareto",
        "type": "Pareto Dual-Axis (Bar & Cumulative %)",
        "purpose": "Identify which industry sectors hire the vital majority of graduates under the 80/20 rule.",
        "data": "Industry Sector, Total Hires, Cumulative Percentage Curve",
        "whyThisVisual": "Pareto chart clearly isolates the top 3 sectors that generate over 75% of all campus placement opportunities.",
        "insight": "Software Engineering, Cloud Architecture, and Data Analytics together account for 78.4% of total recruitment offers."
      },
      {
        "id": "v4-funnel",
        "name": "Placement Recruitment Funnel",
        "type": "Staged Stage-Conversion Funnel",
        "purpose": "Analyze conversion ratios from initial eligibility to technical round, managerial interview, and final offer.",
        "data": "Funnel Stage, Candidate Headcount, Drop-off Ratio %, Stage Conversion %",
        "whyThisVisual": "Funnel geometry immediately identifies where student candidates experience the steepest drop-off rates.",
        "insight": "The largest attrition step occurs between the technical coding round and interview shortlist, filtering 64% of applicants."
      }
    ],
    "challenge": {
      "question": "What measurable operational advantage did students with prior internship experience achieve during campus recruitment?",
      "options": [
        {
          "text": "Time-to-first-offer was reduced by an average of 42 days",
          "isCorrect": true,
          "explanation": "Practical industry experience allowed candidates to convert pre-placement interviews 42 days faster than non-intern peers."
        },
        {
          "text": "Exemption from all preliminary technical evaluations",
          "isCorrect": false,
          "explanation": "All candidates underwent identical initial technical evaluations regardless of internship credentials."
        },
        {
          "text": "Guaranteed 100% placement shortlist across all firms",
          "isCorrect": false,
          "explanation": "Shortlists remained competitive and subject to company-specific GPA eligibility criteria."
        }
      ],
      "hint": "Refer to the pre-graduation milestone metrics in the executive summary card."
    }
  },
  {
    "id": "study-habits-analysis",
    "title": "Study Habits & Performance Analysis",
    "tool": "Excel",
    "category": "Education",
    "year": 2025,
    "image": "/images/dashboards/study-habits.svg",
    "description": "Behavioral analytics dashboard examining the empirical impact of daily study routines, digital distractions, and sleep hygiene on academic outcomes.",
    "objective": "Uncover how learning methodologies, digital screen time, and study environments correlate with objective student performance.",
    "dataset": "Higher Education Student Habit & Exam Performance Survey",
    "visualizationApproach": "Scatter correlation visualizers, multi-tier time slicers, correlation coefficient cards, and interactive cohort breakdown filters.",
    "insights": [
      "Consistent daily study intervals of 2.5\u20133 hours demonstrated higher retention and test performance than irregular marathon cramming sessions.",
      "Evening digital screen time exceeding 4 hours showed an inverse correlation with exam confidence scores (-0.48 correlation).",
      "Peer study groups correlated with a 19% improvement in analytical problem-solving course grades."
    ],
    "chartsUsed": [
      "Habit Correlation Heatmap",
      "Weekly Hour Distribution Density",
      "Sleep Quality vs Score Box Plot",
      "Study Environment Radar Chart",
      "Retention Factor Slicers"
    ],
    "featured": true,
    "accentColor": "#8E1B2E",
    "liveUrl": "",
    "dataDna": {
      "tool": "Microsoft Excel & Advanced Modeling",
      "domain": "Behavioral Analytics & Learning Science",
      "year": 2025,
      "dataset": "Higher Education Student Habit & Exam Survey",
      "primaryVisuals": "Correlation Heatmap, Hour Density Curve, Sleep vs Score Box Plot, Radar",
      "analysisType": "Multivariable Behavioral Correlation & Anomaly Mapping",
      "granularity": "Student Survey Log, Daily Hour Intervals, Subject Scores"
    },
    "story": {
      "question": "How do daily behavioral habits\u2014routine consistency, sleep duration, and recreational screen time\u2014predict objective examination outcomes?",
      "data": "Longitudinal survey logs from 1,400+ undergraduate students tracking self-reported daily hours, sleep schedules, screen time, study modalities, and semester exam scores.",
      "exploration": "Computed Pearson correlation coefficients across variables. Disproved the myth that sheer study hours guarantee high marks; consistency and sleep hygiene proved far more predictive.",
      "visualization": "Constructed an interactive Power BI report with habit correlation heatmaps, sleep score box plots, and environment profile radar charts.",
      "insight": "Consistent 2.5 to 3 hour daily study rhythms paired with 7+ hours of sleep yielded superior exam grades compared to marathon 10-hour cram sessions with sleep deficit."
    },
    "visualizations": [
      {
        "id": "v1-heatmap",
        "name": "Behavioral Correlation Matrix",
        "type": "Correlation Coefficient Heatmap",
        "purpose": "Evaluate cross-variable dependencies between study duration, screen time, sleep, and test marks.",
        "data": "Variable Pairs, Pearson r Value (-1 to +1), P-Value Significance",
        "whyThisVisual": "Color intensity instantly signals strong positive or negative relationships across multi-factor survey attributes.",
        "insight": "Evening recreational screen time past 4 hours exhibited the strongest inverse correlation (-0.48) with exam confidence scores."
      },
      {
        "id": "v2-sleepbox",
        "name": "Sleep Hygiene vs Examination Score",
        "type": "Distribution Box & Whisker Plot",
        "purpose": "Assess score dispersion across categorical sleep duration bands (<5h, 5-7h, 7-9h, >9h).",
        "data": "Sleep Band, Score Quartiles (Q1, Median, Q3), Outlier Markers",
        "whyThisVisual": "Box plot displays median score differences while exposing variance and student outliers in each sleep tier.",
        "insight": "Students averaging 7\u20139 hours of sleep had a median exam score 14 points higher than students sleeping under 5 hours."
      },
      {
        "id": "v3-radar",
        "name": "Study Environment Radar Profile",
        "type": "Multi-Variable Radar Chart",
        "purpose": "Compare student cohort performance across environmental conditions (library, private desk, cafe, shared dorm).",
        "data": "Environment Category, Focus Index, Distraction Frequency, Retention Score",
        "whyThisVisual": "Radial polygon reveals multidimensional strengths and weaknesses of study environments simultaneously.",
        "insight": "Dedicated quiet spaces scored highest in focus index, while hybrid peer study groups achieved highest scores in collaborative problem-solving."
      },
      {
        "id": "v4-density",
        "name": "Daily Study Hour Distribution Curve",
        "type": "Gaussian Density Distribution",
        "purpose": "Model the probability density of study hours against the optimal performance band.",
        "data": "Daily Study Hours, Student Density %, Benchmark Sweet Spot Indicator",
        "whyThisVisual": "Continuous density curve highlights the diminishing marginal returns beyond 4 hours of daily solitary study.",
        "insight": "The performance-optimal study window peaks at 2.5\u20133.0 hours daily; returns plateau sharply thereafter without rest intervals."
      }
    ],
    "challenge": {
      "question": "Which study routine habit demonstrated the highest empirical correlation with consistent high exam performance?",
      "options": [
        {
          "text": "Consistent daily study intervals of 2.5\u20133.0 hours with regular sleep",
          "isCorrect": true,
          "explanation": "Consistent daily intervals prevent cognitive overload and allow memory consolidation through healthy sleep cycles."
        },
        {
          "text": "12-hour continuous weekend cramming sessions",
          "isCorrect": false,
          "explanation": "Weekend cramming without daily reinforcement showed high variance and poor long-term concept retention."
        },
        {
          "text": "Studying solely in high-stimulus public environments with audio",
          "isCorrect": false,
          "explanation": "High-stimulus environments showed higher distraction indexes and reduced focused retention efficiency."
        }
      ],
      "hint": "Check the behavioral correlation matrix and the daily study hour density curve."
    }
  },
  {
    "id": "healthcare-er-wait-times",
    "title": "Emergency Department Patient Flow",
    "tool": "Python",
    "category": "Social",
    "year": 2026,
    "image": "/images/dashboards/healthcare-flow.svg",
    "description": "Hospital patient throughput and triage capacity modeling exploring acute care bottlenecks, triage queue times, and staffing allocation curves.",
    "objective": "Quantify patient waiting times across triage severity categories and evaluate operational interventions to reduce emergency room congestion.",
    "dataset": "Metropolitan Health Authority Emergency Longitude Archive",
    "visualizationApproach": "Exploratory data analysis in Pandas, Seaborn violin distributions, queueing theory simulation curves, and Plotly interactive visualizers.",
    "insights": [
      "Peak triage delays concentrate between 18:00 and 22:00 on weekdays, driven by acute primary care clinic closures.",
      "Fast-track triage lanes for low-acuity patients reduced average emergency department length-of-stay by 31 minutes.",
      "Weekend patient volume increases by 24%, with staffing levels historically lagging behind demand by up to 2 hours."
    ],
    "chartsUsed": [
      "Queue Length Hourly Ridge Plot",
      "Triage Urgency Violin Distribution",
      "Length-of-Stay Survival Curve",
      "Bed Utilization Heatmap",
      "Bottleneck Flow Sankey Diagram"
    ],
    "featured": false,
    "accentColor": "#4A101C",
    "liveUrl": "",
    "dataDna": {
      "tool": "Python (Pandas, Seaborn, Plotly)",
      "domain": "Healthcare Operations & Patient Safety",
      "year": 2026,
      "dataset": "Metropolitan Health Emergency Longitude Archive",
      "primaryVisuals": "Hourly Ridge Plot, Triage Violin, Survival Curves, Flow Sankey",
      "analysisType": "Discrete-Event Queueing Simulation & Throughput Modeling",
      "granularity": "Patient Episode Timestamp, Triage Acuity (ESI 1-5), Bed Occupancy"
    },
    "story": {
      "question": "What operational bottlenecks cause systemic emergency department delays, and how can triage workflow re-allocation alleviate peak-hour queueing?",
      "data": "Anonymized longitudinal emergency room admission logs capturing arrival timestamps, ESI triage severity scores, physician encounter times, and bed turnover.",
      "exploration": "Utilized Python Pandas and SciPy queueing simulations to model arrival waves against physician shift changes. Uncovered acute mismatch during weekday evening hours.",
      "visualization": "Rendered Seaborn ridge distributions and Plotly interactive survival duration curves to communicate patient flow dynamics to clinical leadership.",
      "insight": "Establishing a dedicated fast-track lane for low-acuity patients (ESI 4 & 5) decoupled routine care from trauma bays, reducing average length-of-stay by 31 minutes."
    },
    "visualizations": [
      {
        "id": "v1-ridge",
        "name": "Hourly Queue Length Ridge Plot",
        "type": "Multi-Ridge Density Distribution",
        "purpose": "Visualize the shift in patient arrival volume and waiting queue density across all 24 hours of the day.",
        "data": "Hour of Day (00:00\u201323:00), Waiting Patient Count, Density Overlap, Weekday vs Weekend",
        "whyThisVisual": "Ridge plots offer clear visual comparison of multiple continuous distributions without overlapping clutter.",
        "insight": "Queue density consistently builds from 16:00 and peaks between 18:00 and 22:00 when neighborhood outpatient clinics shutter."
      },
      {
        "id": "v2-violin",
        "name": "Triage Acuity Waiting Distribution",
        "type": "Violin Distribution Plot",
        "purpose": "Contrast waiting time distributions across Emergency Severity Index (ESI levels 1 through 5).",
        "data": "ESI Score (1 Resuscitation to 5 Non-urgent), Wait Time Minutes, Kernel Density",
        "whyThisVisual": "Violin plot conveys both probability density curves and internal quartile markers across clinical severity categories.",
        "insight": "ESI 1 and 2 patients undergo immediate triage (<4 min), whereas ESI 3 (moderate) patients suffer highest delay variance."
      },
      {
        "id": "v3-sankey",
        "name": "Emergency Patient Flow Sankey",
        "type": "Flow Network Sankey Diagram",
        "purpose": "Map patient progression pathways from arrival triage to diagnostics, treatment bays, and discharge/admission.",
        "data": "Source Stage, Destination Stage, Patient Volume Stream, Pathway Velocity",
        "whyThisVisual": "Sankey stream widths proportionally depict throughput volume, pinpointing where queues stall before radiology.",
        "insight": "Radiology diagnostic turnaround represented the primary downstream bottleneck, accounting for 48% of total inpatient stay."
      },
      {
        "id": "v4-survival",
        "name": "Length-of-Stay Survival Curve",
        "type": "Kaplan-Meier Survival Duration Curve",
        "purpose": "Model probability of a patient remaining in the emergency department as a function of elapsed time.",
        "data": "Elapsed Hours, Remaining Patient Probability (%), Intervention Cohort Comparison",
        "whyThisVisual": "Survival curves demonstrate the exact percentage reduction in prolonged stays (>6 hours) following process redesign.",
        "insight": "Fast-track implementation shifted the median length-of-stay curve to the left, cutting 6+ hour stays by 37%."
      }
    ],
    "challenge": {
      "question": "What operational intervention produced a 31-minute reduction in overall emergency department length-of-stay?",
      "options": [
        {
          "text": "Establishing a dedicated fast-track lane for low-acuity patients",
          "isCorrect": true,
          "explanation": "Separating ESI 4 & 5 patients from critical trauma bays prevented simple cases from consuming acute emergency resources."
        },
        {
          "text": "Reducing the number of emergency admissions on weekends",
          "isCorrect": false,
          "explanation": "Emergency admissions are non-elective and cannot be capped administratively without patient risk."
        },
        {
          "text": "Eliminating formal triage assessments upon initial arrival",
          "isCorrect": false,
          "explanation": "Eliminating triage compromises patient safety; triage integrity is essential for acute prioritization."
        }
      ],
      "hint": "Read the core findings concerning low-acuity patient throughput and length-of-stay."
    }
  },
  {
    "id": "urban-air-quality-trends",
    "title": "Urban Air Quality & Pollutant Trends",
    "tool": "Tableau",
    "category": "Research",
    "year": 2026,
    "image": "/images/dashboards/air-quality.svg",
    "description": "Spatiotemporal environmental monitoring dashboard analyzing particulate matter trends (PM2.5 / PM10) alongside meteorological vectors.",
    "objective": "Map seasonal air quality degradation, evaluate the impact of agricultural crop residue cycles, and measure urban clean air interventions.",
    "dataset": "Atmospheric Pollution & Weather Monitoring Repository",
    "visualizationApproach": "Time-series multi-line visualizers, spatial GIS map layers, wind-direction vector overlays, and AQI severity threshold bands.",
    "insights": [
      "Winter temperature inversion layers amplify particulate retention in landlocked metropolitan basins by up to 3.4x.",
      "Post-monsoon seasonal spikes coincide with wind shift patterns originating from northern agricultural belts.",
      "Public transit electrification corridors recorded a localized 14% decrease in surface-level NO2 concentrations over 24 months."
    ],
    "chartsUsed": [
      "GIS Air Quality Spatial Map",
      "Multi-Pollutant Temporal Trendline",
      "Wind Vector & Dispersion Compass",
      "Seasonal AQI Exceedance Calendar",
      "Policy Intervention Impact Milestones"
    ],
    "featured": false,
    "accentColor": "#B8955A",
    "liveUrl": "",
    "dataDna": {
      "tool": "Tableau & GIS Spatial Layers",
      "domain": "Environmental Science & Climate Analytics",
      "year": 2026,
      "dataset": "Atmospheric Pollution & Weather Monitoring Repository",
      "primaryVisuals": "GIS Spatial Map, Multi-Pollutant Trend, Wind Compass, Exceedance Calendar",
      "analysisType": "Spatiotemporal Meteorological Modeling & Air Quality Forecasting",
      "granularity": "Hourly Sensor Logs, Geospatial Coordinates, Seasonal Epochs"
    },
    "story": {
      "question": "How do seasonal meteorological patterns and urban transit corridors intersect to amplify or mitigate dangerous particulate concentration spikes?",
      "data": "Continuous atmospheric sensor streams capturing PM2.5, PM10, NO2, temperature inversion indices, wind speed, and direction vectors across urban monitoring stations.",
      "exploration": "Correlated particulate concentration with low-altitude wind direction. Proved that winter stagnant air pockets trap emissions, causing 3.4x higher localized retention.",
      "visualization": "Built geospatial GIS visual layers in Tableau with dynamic wind vector roses, seasonal heat calendars, and pollutant threshold alerts.",
      "insight": "While regional agricultural stubble burning drives autumn PM2.5 peaks, year-round urban NO2 hot spots respond rapidly to transit electrification interventions (-14%)."
    },
    "visualizations": [
      {
        "id": "v1-spatial",
        "name": "Geospatial Pollution Heatmap",
        "type": "GIS Point-Density Map",
        "purpose": "Map spatial distribution of PM2.5 monitoring stations and identify localized hot spot zones.",
        "data": "Latitude, Longitude, Mean PM2.5 (ug/m3), Station ID, Topographic Elevation",
        "whyThisVisual": "Geographic map allows immediate spatial awareness of basin topography and proximity to industrial corridors.",
        "insight": "Low-elevation valley stations recorded 2.8x higher particulate retention compared to elevated peripheral monitoring towers."
      },
      {
        "id": "v2-temporal",
        "name": "Multi-Pollutant Temporal Trend",
        "type": "Synchronized Multi-Line Series",
        "purpose": "Trace multi-year temporal fluctuations across PM2.5, PM10, SO2, and NO2 against WHO safe guideline limits.",
        "data": "Date Timestamp, PM2.5, PM10, NO2 Concentration, WHO Baseline Limit Band",
        "whyThisVisual": "Synchronized line chart with threshold bands highlights cyclical seasonal exceedances against health standards.",
        "insight": "Winter months breach WHO 24-hour guidelines on over 82% of observed days, driven by cold atmospheric inversions."
      },
      {
        "id": "v3-compass",
        "name": "Wind Vector & Dispersion Compass",
        "type": "Polar Vector Rose Plot",
        "purpose": "Correlate pollutant dispersion velocity and direction with prevailing seasonal wind vectors.",
        "data": "Wind Compass Bearing (0-360 deg), Wind Velocity (km/h), Pollutant Concentration",
        "whyThisVisual": "Polar rose plot clearly presents bivariate meteorological vectors that Cartesian coordinates distort.",
        "insight": "North-westerly winds consistently carry transboundary agricultural smoke during post-monsoon weeks."
      },
      {
        "id": "v4-calendar",
        "name": "Seasonal AQI Exceedance Calendar",
        "type": "Calendar Heatmap Grid",
        "purpose": "Provide an intuitive annual day-by-day matrix categorized by official Air Quality Index severity tiers.",
        "data": "Day of Year, Month, Calculated AQI, Severity Category (Good, Moderate, Severe, Hazardous)",
        "whyThisVisual": "Calendar grid reveals seasonal clustering at a glance, making annual weather transitions accessible to non-technical citizens.",
        "insight": "Severe and Hazardous air quality days cluster tightly between mid-October and late January each year."
      }
    ],
    "challenge": {
      "question": "By how much does winter atmospheric temperature inversion amplify particulate retention in landlocked urban basins?",
      "options": [
        {
          "text": "Up to 3.4x amplification of particulate retention",
          "isCorrect": true,
          "explanation": "Cold air trapping emissions beneath a warmer layer prevents vertical atmospheric dispersion, concentrating toxins up to 3.4 times."
        },
        {
          "text": "Less than 1.1x variation across seasonal baselines",
          "isCorrect": false,
          "explanation": "Seasonal variation is dramatic; winter conditions create severe multi-fold exacerbation."
        },
        {
          "text": "Particulates disperse faster in winter due to cold temperatures",
          "isCorrect": false,
          "explanation": "Cold dense air suppresses vertical convection, slowing particulate dispersion significantly."
        }
      ],
      "hint": "Inspect the seasonal AQI exceedance calendar and meteorology correlation notes."
    }
  },
  {
    "id": "superstore-management",
    "title": "Superstore Management Dashboard (Overall Business Performance)",
    "tool": "Tableau",
    "category": "Executive Strategy",
    "year": 2026,
    "image": "/images/dashboards/superstore-management.png",
    "description": "Executive C-suite Tableau dashboard tracking cross-departmental commercial health, aggregated gross revenues (.32M), operating profit (92K), and order volumes across 4 regional territories.",
    "objective": "Synthesize top-level enterprise KPIs (.32M Sales, 92K Profit, 10,194 Orders), monitor monthly order revenue pacing, evaluate regional margin contributions, and detect customer sales-to-profit anomalies.",
    "dataset": "Global Superstore Enterprise Commercial Archive (2023\u20132026)",
    "visualizationApproach": "Executive KPI scorecard cards (,326,534 Sales, 92,297 Profit, 10,194 Orders, 38,654 Quantity), categorical horizontal sales distribution bars, regional profit ranking bars, 12-month order date revenue line curve, and a bivariate category-colored sales vs. profit scatter plot.",
    "insights": [
      "Technology category commands the highest revenue (36K+) with superior average profit margin compared to Furniture and Office Supplies.",
      "West Region generates the highest operating profit (08K+), while Central Region exhibits margin compression (9.8K profit despite substantial volume).",
      "Monthly sales volume displays marked fourth-quarter seasonality, peaking during months 9, 11, and 12 (surpassing 50K/month).",
      "Bivariate scatter matrix exposes outlier transactions in Technology and Office Supplies that generate substantial losses despite high gross revenues, indicating unchecked promotional discounts."
    ],
    "chartsUsed": [
      "Executive KPI Metric Cards",
      "Sales by Category Horizontal Bar Chart",
      "Profit by Region Bar Chart",
      "Monthly Order Date Sales Trendline",
      "Sales vs. Profit Categorical Scatter Plot"
    ],
    "featured": true,
    "accentColor": "#2A6F97",
    "liveUrl": "",
    "student": "Shreya Kashyap (Roll No. 23145028)",
    "course": "BCA VII Semester // Dev Sanskriti Vishwavidyalaya",
    "dataDna": {
      "tool": "Tableau Desktop & LOD Expressions",
      "domain": "Executive Commercial Analytics",
      "year": 2026,
      "dataset": "Global Superstore Enterprise Repository",
      "primaryVisuals": "KPI Scorecards, Categorical Bar, Regional Bar, Temporal Trendline, Bivariate Scatter",
      "analysisType": "C-Suite Macro Performance & Profitability Modeling",
      "granularity": "Executive Aggregates, Regional Divisions, Category Classes"
    },
    "story": {
      "question": "How is overall enterprise profitability distributed across categories and regions, and are high sales figures masking underlying operational losses?",
      "data": "Extracted 10,194 transactional records from the Global Superstore commercial dataset spanning 2023\u20132026. Data cleaned in Tableau with calculated fields for net profit ratio, order quantity velocities, and date parsing.",
      "exploration": "Exploratory analysis revealed that while total revenue surpassed .32M, profitability varied drastically by region and individual transaction, with significant margin leaks in discount-heavy orders.",
      "visualization": "Designed a balanced C-level layout featuring primary KPI callout cards at the top, followed by macro category and regional breakdown bars, a temporal trendline, and a sales vs. profit diagnostic scatter plot. Interactive filters allow category, region, and order date slicing.",
      "insight": "West Region is the primary profit engine (10K+ profit), while the final calendar quarter drives over 38% of annual sales velocity. Strict discount caps are required on large enterprise orders to prevent unprofitable volume."
    },
    "visualizations": [
      {
        "id": "v1-kpis",
        "name": "Executive KPI Scorecard Metrics",
        "type": "KPI Metric Cards",
        "purpose": "Communicate primary organizational performance metrics to executive leadership in under three seconds.",
        "data": "Aggregated Sales (,326,534), Total Profit (92,297), Orders (10,194), Quantity (38,654)",
        "whyThisVisual": "High-contrast large typography cards focus executive cognitive attention immediately on top-line health.",
        "insight": "Operating margin averages 12.56% across 10,194 orders, sustaining healthy overall organizational liquidity."
      },
      {
        "id": "v2-category-sales",
        "name": "Sales by Category Breakdown",
        "type": "Horizontal Bar Chart",
        "purpose": "Compare revenue contributions across primary business segments: Technology, Furniture, and Office Supplies.",
        "data": "Category Dimension, Sum of Sales ()",
        "whyThisVisual": "Horizontal bars facilitate effortless visual label reading and unambiguous comparative length judgment.",
        "insight": "Technology delivers the highest total volume (36K), outperforming Furniture (40K) and Office Supplies (20K)."
      },
      {
        "id": "v3-regional-profit",
        "name": "Profit by Commercial Region",
        "type": "Horizontal Bar Chart",
        "purpose": "Evaluate net bottom-line contributions across West, East, South, and Central commercial divisions.",
        "data": "Geographic Region, Sum of Profit ()",
        "whyThisVisual": "Ranked bars expose territorial profitability disparities that top-line national metrics obscure.",
        "insight": "West Region generates over 08,000 in net profit, yielding more than 2.7x the net contribution of Central Region."
      },
      {
        "id": "v4-sales-trend",
        "name": "Monthly Order Date Sales Trajectory",
        "type": "Time-Series Line Chart",
        "purpose": "Identify seasonal order velocity patterns across the 12-month calendar cycle.",
        "data": "Month of Order Date (1\u201312), Sum of Sales",
        "whyThisVisual": "Continuous line charts map acceleration and deceleration dynamics better than discrete column bars.",
        "insight": "Pronounced late-year spikes in months 9, 11, and 12 drive more than 38% of annual commercial revenue."
      },
      {
        "id": "v5-sales-profit-scatter",
        "name": "Sales vs Profit Diagnostic Scatter Plot",
        "type": "Bivariate Categorical Scatter Plot",
        "purpose": "Expose transaction-level margin leaks and isolate high-revenue orders generating catastrophic negative profit.",
        "data": "Individual Order Sales ($), Order Profit ($), Category Color Encoding",
        "whyThisVisual": "Scatter plots reveal non-linear dispersion and dangerous negative-margin outliers that aggregated bars conceal.",
        "insight": "Multiple orders exceeding 0,000 in gross revenue recorded negative profits of up to -,000 due to uncontrolled discounting."
      }
    ],
    "challenge": {
      "question": "Which commercial region delivers the highest operating profit according to the Management Dashboard?",
      "options": [
        {
          "text": "West Region (08K+)",
          "isCorrect": true,
          "explanation": "The West Region leads all territories with over 08,000 in operating profit, followed by East (4K), South (7K), and Central (0K)."
        },
        {
          "text": "Central Region (0K)",
          "isCorrect": false,
          "explanation": "Central Region ranks lowest in operating profit despite generating substantial revenue."
        },
        {
          "text": "South Region (7K)",
          "isCorrect": false,
          "explanation": "South Region yields 7K, which is less than half of the West Region total."
        }
      ],
      "hint": "Examine the Profit By Region horizontal bar chart located in the top-right quadrant."
    }
  },
  {
    "id": "superstore-sales-manager",
    "title": "Sales Management Dashboard (Product, Customer & Profit Analysis)",
    "tool": "Tableau",
    "category": "Sales Operations",
    "year": 2026,
    "image": "/images/dashboards/superstore-sales-manager.png",
    "description": "Operational sales management Tableau dashboard analyzing sub-category margin health, customer account concentration, top-performing SKUs, and discount margin destruction.",
    "objective": "Identify top-grossing products, evaluate sub-category profit margins, isolate discount margin destruction thresholds (>20%), and monitor monthly sales momentum.",
    "dataset": "Enterprise Transaction Line-Item & Account Archive",
    "visualizationApproach": "Ranked sub-category sales bar chart, diverging sub-category profit ranking bar chart, top 10 enterprise customer leaderboard, top 10 product revenue bar chart, discount vs. profit correlation scatter plot, and monthly sales trajectory line chart.",
    "insights": [
      "Chairs (35,768) and Phones (31,843) generate the largest sales volume among sub-categories, but Copiers deliver the highest total net profit (6,094).",
      "Tables and Bookcases experience severe profit margin compression due to bulky logistics overhead and aggressive promotional discounts.",
      "Edward Hooks (0,500+) and John Lee (,800+) represent the most valuable enterprise customer accounts.",
      "Discount vs. Profit scatter plot definitively proves that discounts exceeding 20% systematically trigger negative profit margins across all categories."
    ],
    "chartsUsed": [
      "Sales by Sub-Category Ranked Bar Chart",
      "Profit by Sub-Category Diverging Bar Chart",
      "Top 10 Customers Revenue Leaderboard",
      "Top 10 Products Performance Bar Chart",
      "Discount vs Profit Scatter Diagnostic Plot",
      "Monthly Order Date Sales Trajectory Line"
    ],
    "featured": true,
    "accentColor": "#D97706",
    "liveUrl": "",
    "student": "Shreya Kashyap (Roll No. 23145028)",
    "course": "BCA VII Semester // Dev Sanskriti Vishwavidyalaya",
    "dataDna": {
      "tool": "Tableau Desktop & Calculated Fields",
      "domain": "Sales Operations & Account Management",
      "year": 2026,
      "dataset": "Enterprise Line-Item & Customer Records",
      "primaryVisuals": "Ranked Bars, Diverging Profit Bars, Customer Leaderboard, Discount Scatter",
      "analysisType": "SKU-Level Profitability & Discount Elasticity Modeling",
      "granularity": "Sub-Category SKUs, Individual Customer Accounts, Discount Increments"
    },
    "story": {
      "question": "Which product sub-categories and enterprise customer accounts actually drive net profits, and at what discount rate does profitability turn negative?",
      "data": "Extracted product-level and account-level line items from the Superstore database. Calculated discrete discount tiers and mapped customer account hierarchies in Tableau.",
      "exploration": "Discovered that while Chairs and Phones dominate gross sales, Copiers and Phones deliver the highest net margins. Crucially, discounts beyond 0.20 consistently yield negative operating returns.",
      "visualization": "Constructed a six-panel operational sales dashboard combining sub-category sales and profit bars, Top 10 customer and product leaderboards, a discount-to-profit diagnostic scatter plot, and monthly sales trendlines.",
      "insight": "Enforcing a 20% hard discount threshold for sales representatives would instantly recover an estimated 8,000+ in lost operating margins across furniture and commodity office supplies."
    },
    "visualizations": [
      {
        "id": "v1-subcat-sales",
        "name": "Sales by Sub-Category Ranking",
        "type": "Ranked Horizontal Bar Chart",
        "purpose": "Rank product lines by gross commercial transaction volume.",
        "data": "Product Sub-Category, Gross Sales ($)",
        "whyThisVisual": "Descending horizontal bar sort allows instant identification of primary revenue generators.",
        "insight": "Chairs (35,768) and Phones (31,843) dominate total volume, each generating over 14% of gross sales."
      },
      {
        "id": "v2-subcat-profit",
        "name": "Profit by Sub-Category Margin",
        "type": "Diverging Horizontal Bar Chart",
        "purpose": "Determine which product lines yield actual operating profits vs loss-making drag.",
        "data": "Product Sub-Category, Operating Profit ($)",
        "whyThisVisual": "Diverging bars centered at zero highlight both high-margin champions and loss-making lines.",
        "insight": "Copiers produce 6,094 in pure profit despite moderate sales, whereas Tables generate severe losses."
      },
      {
        "id": "v3-top-customers",
        "name": "Top 10 Enterprise Customer Accounts",
        "type": "Leaderboard Bar Chart",
        "purpose": "Monitor key commercial account concentration and relationship value.",
        "data": "Customer Name, Total Billed Sales ($)",
        "whyThisVisual": "Leaderboard layout spotlights individual high-value client accounts for executive retention focus.",
        "insight": "Top 10 corporate accounts contribute over 5,000 in revenue, led by Edward Hooks and John Lee."
      },
      {
        "id": "v4-discount-profit",
        "name": "Discount vs Profit Elasticity Scatter",
        "type": "Diagnostic Correlation Scatter Plot",
        "purpose": "Pinpoint the exact tipping point where promotional discounts destroy operating profitability.",
        "data": "Discount Percentage (0\u201370%), Net Profit ($), Category Color",
        "whyThisVisual": "Scatter visualization plots thousands of transactions to establish statistical inflection thresholds.",
        "insight": "Orders with discounts >20% fall almost exclusively below the break-even zero line into heavy losses."
      }
    ],
    "challenge": {
      "question": "Based on the Discount vs Profit scatter analysis, what happens when promotional discounts exceed 20% (0.20)?",
      "options": [
        {
          "text": "Profitability systematically drops into negative territory",
          "isCorrect": true,
          "explanation": "Discounts exceeding 20% push unit economics below cost, triggering severe negative operating margins."
        },
        {
          "text": "Sales volume triples without affecting margin",
          "isCorrect": false,
          "explanation": "Sales volume increases do not compensate for the steep margin destruction at high discount rates."
        },
        {
          "text": "Profit remains constant at all discount levels",
          "isCorrect": false,
          "explanation": "The scatter plot shows a steep downward trajectory as discount increases."
        }
      ],
      "hint": "Observe the markers dipping below the bash baseline as discount increases on the X-axis."
    }
  },
  {
    "id": "superstore-regional-manager",
    "title": "Regional Manager Dashboard (Regional & Geographical Performance)",
    "tool": "Tableau",
    "category": "Geographical Strategy",
    "year": 2026,
    "image": "/images/dashboards/superstore-regional-manager.png",
    "description": "Territorial management Tableau dashboard tracking state-by-state market penetration, regional profitability distributions, geographic cartography, and multi-year regional sales growth trajectories (2023\u20132026).",
    "objective": "Benchmark performance across West, East, Central, and South regions, map state-level sales density (California 57K, New York 10K), and track 4-year regional trajectories.",
    "dataset": "Global Superstore Geographic & Regional Archive (2023\u20132026)",
    "visualizationApproach": "Regional sales ranking bar chart, regional profit ranking bar chart, Mapbox geospatial distribution map with state-level sales density, ranked state revenue horizontal bar chart (California 57K+, New York 10K+, Texas 70K+), and multi-year regional sales trendline (2023\u20132026).",
    "insights": [
      "California is the single largest state market by revenue (57,688), followed by New York (10,876) and Texas (70,188).",
      "West Region demonstrates consistent four-year revenue expansion, growing from ~45K in 2023 to over 60K in 2026.",
      "East Region closely follows West in multi-year momentum, while South Region maintains stable but lower overall volume.",
      "Geographical density illustrates strong coastal sales clustering, indicating opportunities for logistics center consolidation in California and New York."
    ],
    "chartsUsed": [
      "Regional Sales Volume Horizontal Bar Chart",
      "Regional Operating Profit Ranking Bar Chart",
      "Geographical State Sales Distribution Map (Mapbox)",
      "Sales by State Ranked Horizontal Bar Chart",
      "Multi-Year Regional Sales Growth Trajectory Chart (2023\u20132026)"
    ],
    "featured": true,
    "accentColor": "#10B981",
    "liveUrl": "",
    "student": "Shreya Kashyap (Roll No. 23145028)",
    "course": "BCA VII Semester // Dev Sanskriti Vishwavidyalaya",
    "dataDna": {
      "tool": "Tableau Desktop & Mapbox Mapping",
      "domain": "Territorial Strategy & Supply Chain Geography",
      "year": 2026,
      "dataset": "Superstore State & Regional Archives",
      "primaryVisuals": "Regional Bars, State Ranking Bar, Cartographic Mapbox Map, Multi-Year Lines",
      "analysisType": "Spatiotemporal Expansion & Territorial Benchmarking",
      "granularity": "4 Geographic Regions, 49 US States, Annual Time-Series (2023\u20132026)"
    },
    "story": {
      "question": "How do sales and profitability compare across geographic regions over time, and which individual states represent key strategic growth pillars?",
      "data": "Aggregated geographic shipping records, postal state boundaries, and order date stamps from 2023 through 2026. Geocoded state boundaries and built regional grouping hierarchies in Tableau.",
      "exploration": "Cartographic exploration revealed extreme revenue concentration along coastal states, with California and New York generating over 33% of total enterprise volume.",
      "visualization": "Designed a dedicated regional operations view combining regional comparative bars, an interactive Mapbox geospatial layer, a state-by-state sales leaderboard, and a 4-year regional trajectory line chart.",
      "insight": "West and East territories constitute over 61% of total enterprise revenue and exhibit the fastest growth trajectories from 2023 to 2026."
    },
    "visualizations": [
      {
        "id": "v1-reg-sales",
        "name": "Regional Sales Volume Breakdown",
        "type": "Horizontal Bar Chart",
        "purpose": "Benchmark gross revenue across West, East, Central, and South territories.",
        "data": "Commercial Region, Total Sales ()",
        "whyThisVisual": "Bar lengths provide straightforward territorial volume comparisons.",
        "insight": "West (25K) and East (90K) together account for over 61% of enterprise volume."
      },
      {
        "id": "v2-reg-profit",
        "name": "Regional Profit Contribution",
        "type": "Horizontal Bar Chart",
        "purpose": "Evaluate bottom-line profitability realized by each regional management division.",
        "data": "Commercial Region, Net Operating Profit ()",
        "whyThisVisual": "Direct ranking exposes severe margin variance between coastal and interior regions.",
        "insight": "West Region delivers 10,799 in profit, followed by East (4,883), South (6,749), and Central (9,865)."
      },
      {
        "id": "v3-state-map",
        "name": "Geographical State Sales Distribution",
        "type": "Geospatial Mapbox Layer",
        "purpose": "Map territorial market penetration and shipping density across North American states.",
        "data": "State Geocodes, Order Concentration, Sales Value",
        "whyThisVisual": "Cartographic mapping immediately identifies spatial clusters and fulfillment dead zones.",
        "insight": "Coastal hubs show intense order density, recommending localized warehouse stocking."
      },
      {
        "id": "v4-state-ranking",
        "name": "State Revenue Leaderboard",
        "type": "Ranked Horizontal Bar Chart",
        "purpose": "Rank individual states by commercial order value.",
        "data": "State / Province, Total Sales ($)",
        "whyThisVisual": "Ranked bars clearly highlight the dominant contribution of tier-one state economies.",
        "insight": "California (57,688) and New York (10,876) alone account for one-third of all sales."
      }
    ],
    "challenge": {
      "question": "Which state ranks #1 nationwide in total sales revenue in the Regional Manager Dashboard?",
      "options": [
        {
          "text": "California (57,688)",
          "isCorrect": true,
          "explanation": "California is the clear leader with 57,688 in sales, followed by New York with 10,876."
        },
        {
          "text": "New York (10,876)",
          "isCorrect": false,
          "explanation": "New York is #2 nationwide with 10,876."
        },
        {
          "text": "Texas (70,188)",
          "isCorrect": false,
          "explanation": "Texas is #3 nationwide with 70,188."
        }
      ],
      "hint": "Look at the Sales by State horizontal bar chart on the lower-left side of the dashboard."
    }
  }
];

export const getDashboards = async (params = {}) => {
  const query = new URLSearchParams();
  if (params.tool && params.tool !== 'ALL') query.append('tool', params.tool);
  if (params.category && params.category !== 'ALL') query.append('category', params.category);
  if (params.featured !== undefined) query.append('featured', params.featured);
  if (params.search) query.append('search', params.search);

  const queryString = query.toString();
  const url = `${API_BASE}/dashboards${queryString ? `?${queryString}` : ''}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`API returned HTTP ${res.status}`);
    }
    const json = await res.json();
    return json.data || [];
  } catch (err) {
    console.warn(`[API] Fetch failed for ${url}, falling back to local dataset:`, err.message);
    let filtered = [...FALLBACK_DASHBOARDS];
    if (params.tool && params.tool !== 'ALL') {
      const targetTool = params.tool.toLowerCase().replace(/[\s_-]/g, '');
      filtered = filtered.filter(d => d.tool.toLowerCase().replace(/[\s_-]/g, '').includes(targetTool));
    }
    if (params.category && params.category !== 'ALL') {
      filtered = filtered.filter(d => d.category.toLowerCase() === params.category.toLowerCase());
    }
    if (params.featured !== undefined) {
      filtered = filtered.filter(d => Boolean(d.featured) === Boolean(params.featured));
    }
    if (params.search && params.search.trim() !== '') {
      const term = params.search.toLowerCase().trim();
      filtered = filtered.filter(d =>
        (d.title || '').toLowerCase().includes(term) ||
        (d.description || '').toLowerCase().includes(term) ||
        (d.tool || '').toLowerCase().includes(term) ||
        (d.category || '').toLowerCase().includes(term) ||
        (d.dataset || '').toLowerCase().includes(term)
      );
    }
    return filtered;
  }
};

export const getDashboardById = async (id) => {
  const url = `${API_BASE}/dashboards/${id}`;
  try {
    const res = await fetch(url);
    if (res.status === 404) {
      return null;
    }
    if (!res.ok) {
      throw new Error(`API returned HTTP ${res.status}`);
    }
    const json = await res.json();
    return json.data || null;
  } catch (err) {
    console.warn(`[API] Fetch detail failed for ${id}, using fallback:`, err.message);
    const item = FALLBACK_DASHBOARDS.find(d => d.id.toLowerCase() === id.toLowerCase());
    return item || null;
  }
};

export const getAdjacentDashboards = async (currentId) => {
  try {
    const list = await getDashboards();
    const index = list.findIndex(d => d.id.toLowerCase() === (currentId || '').toLowerCase());
    if (index === -1) {
      return { prev: null, next: null, currentIndex: 0, total: list.length };
    }
    const prev = index > 0 ? list[index - 1] : list[list.length - 1];
    const next = index < list.length - 1 ? list[index + 1] : list[0];
    return { prev, next, currentIndex: index + 1, total: list.length };
  } catch (err) {
    const list = FALLBACK_DASHBOARDS;
    const index = list.findIndex(d => d.id.toLowerCase() === (currentId || '').toLowerCase());
    if (index === -1) {
      return { prev: null, next: null, currentIndex: 0, total: list.length };
    }
    const prev = index > 0 ? list[index - 1] : list[list.length - 1];
    const next = index < list.length - 1 ? list[index + 1] : list[0];
    return { prev, next, currentIndex: index + 1, total: list.length };
  }
};

export const getStats = async () => {
  try {
    const res = await fetch(`${API_BASE}/stats`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return json.data;
  } catch (err) {
    return {
      dashboards: 12,
      dashboardsLabel: "12+",
      tools: 4,
      toolsLabel: "04",
      projects: 8,
      projectsLabel: "08+",
      dataStories: 4,
      dataStoriesLabel: "04"
    };
  }
};
