# PORTFOLIO CONTENT & CASE STUDY MANAGEMENT GUIDE
### Shreya Kashyap // Academic Work & Project Case Study Portfolio

This guide explains how to easily add, update, and manage dashboards, academic assignments, programming labs, and research reports in your portfolio without touching core React component code.

---

## 1. Directory Structure for Assets

All static assets (images, screenshots, PDFs, datasets, spreadsheets) are stored in `frontend/public/`:

```text
frontend/public/
├── images/
│   ├── dashboards/            # Dashboard exports, screenshots, and diagrams (.png, .jpg, .svg)
│   │   ├── paper-leaks.svg
│   │   ├── superstore-sales.svg
│   │   └── ...
│   └── assignments/           # Academic assignment screenshots, charts, diagrams
│       ├── draw-your-day.svg
│       ├── ecommerce-analytics.svg
│       ├── energy-curve.svg
│       ├── visual-cognition.svg
│       └── ...
└── documents/                 # Real deliverable files (PDF, XLSX, DOCX, CSV, PPTX)
    ├── India_Paper_Leaks_Executive_Dossier.pdf
    ├── Draw_Your_Day_Visual_Cognition_Study.pdf
    ├── Superstore_Profitability_Model.xlsx
    ├── ER_Throughput_Simulation_Whitepaper.pdf
    └── ...
```

---

## 2. Supported Categories

The portfolio supports 10 distinct categories:
1. `Data Visualization Dashboards`
2. `Power BI Projects`
3. `Tableau Projects`
4. `Excel Assignments`
5. `Python Visualizations`
6. `Programming Labs`
7. `Data Analysis Projects`
8. `Academic Assignments`
9. `Research Papers and Reports`
10. `Presentations and Other Projects`

---

## 3. How to Add a New Item to the Work Library

Open `frontend/src/data/workLibraryData.js` and add an object to the `WORK_ITEMS` array.

### Template A: Academic Assignment or Case Study

```javascript
{
  id: "assignment-05",                    // Unique URL slug (e.g., /assignments/assignment-05)
  slug: "assignment-05",
  title: "Supply Chain Lead Time Optimization",
  projectType: "Assignment",              // "Assignment", "Lab", "Report", "Dashboard"
  categories: ["Academic Assignments", "Excel Assignments"],
  category: "Academic Assignments",
  tools: ["Excel", "Power Query", "Solver"],
  subject: "Operations Analytics & Supply Chain Management",
  year: 2026,
  teacher: "Prof. Arvind Sharma",         // OPTIONAL: Rendered only if provided
  question: "Formulate an optimization model to minimize order lead time while respecting budget constraints.",
  requirements: [
    "Clean raw warehouse shipment logs containing 45,000 rows",
    "Identify bottleneck distribution hubs using Pareto analysis",
    "Construct dynamic sensitivity scenarios in Excel Solver"
  ],
  description: "An optimization model identifying freight bottlenecks and calculating optimal reorder points.",
  objective: "Minimize total shipment lead time across 4 regional fulfillment centers.",
  problemStatement: "Fulfillment delays increased by 22% during peak quarter due to sub-optimal carrier allocations.",
  dataset: {
    name: "Regional Logistics Shipments Q1–Q3",
    source: "Fulfillment ERP Central Database",
    format: "XLSX / 45,000 records",
    importantColumns: ["Order_Date", "Ship_Date", "Carrier_Code", "Transit_Days", "Cost_USD"]
  },
  dataCleaning: "Removed 140 duplicate order IDs, imputed missing transit days using carrier mode, standardized zip codes.",
  methodology: "1. Raw data extraction and normalization.\n2. Pivot table aggregate modeling.\n3. Solver simplex LP optimization formulation.",
  chartsUsed: ["Pareto Chart", "Waterfall Chart", "Scatter Matrix"],
  image: "/images/assignments/supply-chain.svg", // Main preview image
  images: [                                      // Multiple screenshots for the gallery & lightbox
    {
      url: "/images/assignments/supply-chain.svg",
      title: "Optimization Model Overview",
      caption: "Linear programming summary and sensitivity table."
    }
  ],
  file: "/documents/Supply_Chain_Optimization_Report.pdf", // Primary PDF (renders in-page preview)
  supportingFiles: [                             // Downloadable deliverables
    {
      name: "Optimization Model Spreadsheet",
      type: "Spreadsheet",
      url: "/documents/Supply_Chain_Model.xlsx",
      format: "XLSX",
      size: "2.4 MB",
      isDeliverable: true
    },
    {
      name: "Final Executive Report",
      type: "Report",
      url: "/documents/Supply_Chain_Optimization_Report.pdf",
      format: "PDF",
      size: "1.1 MB",
      isDeliverable: true
    }
  ],
  insights: [
    "Hub 3 accounted for 64% of total delay variance due to customs batching.",
    "Reallocating 18% of volume to regional carrier B reduced average lead time by 1.8 days."
  ],
  conclusion: "Linear programming optimization reduced aggregate distribution delays by 14.6% within existing budget parameters."
}
```

---

### Template B: Programming Lab (with Code Snippets)

For programming labs, add a `codeSnippets` array:

```javascript
{
  id: "lab-02",
  slug: "lab-02",
  title: "Real-Time Telemetry Streaming with WebSockets",
  projectType: "Programming Lab",
  categories: ["Programming Labs", "Python Visualizations"],
  category: "Programming Labs",
  tools: ["Python", "FastAPI", "WebSockets", "Plotly"],
  subject: "Real-Time Data Architectures",
  year: 2026,
  teacher: "Dr. K. Raman",                // OPTIONAL: Rendered only if provided
  question: "Implement a low-latency telemetry streaming service that computes rolling 5-minute percentiles.",
  requirements: [
    "Process sensor packet stream at 1,000 events/sec",
    "Compute sliding window p95 and p99 latencies",
    "Broadcast serialized updates to browser clients"
  ],
  description: "A Python streaming pipeline calculating rolling statistics over asynchronous WebSockets.",
  objective: "Achieve sub-50ms latency for streaming sensor percentile calculation.",
  codeSnippets: [
    {
      title: "Sliding Window Percentile Calculator",
      filename: "stream_processor.py",
      language: "python",
      description: "Uses a double-ended ring buffer to compute p95 latency across a rolling 300-second window.",
      code: `import collections
import numpy as np

class RollingPercentileTracker:
    def __init__(self, window_size=300):
        self.window = collections.deque(maxlen=window_size)

    def ingest(self, metric_value: float):
        self.window.append(metric_value)

    def compute_percentiles(self):
        if not self.window:
            return {"p50": 0.0, "p95": 0.0, "p99": 0.0}
        arr = np.array(self.window)
        return {
            "p50": float(np.percentile(arr, 50)),
            "p95": float(np.percentile(arr, 95)),
            "p99": float(np.percentile(arr, 99))
        }`
    }
  ],
  insights: [
    "Sliding deque buffer maintains steady O(1) ingestion without memory growth.",
    "Sub-50ms latency achieved at 1,200 events/sec throughput."
  ],
  conclusion: "Demonstrated efficient real-time streaming architectures using asynchronous Python and vector math."
}
```

---

## 4. Key Rules & Behaviors

1. **Clean Conditional Rendering**:
   - `teacher`: Only appears if you provide it. If left out, the teacher badge is completely hidden.
   - `dataset`: Only rendered if provided.
   - `codeSnippets`: Only rendered for programming labs.
   - `file`: If a `.pdf` file is provided, an embedded interactive PDF viewer appears in the case study page along with a direct download button.
   - `supportingFiles`: Any Excel (.xlsx), Word (.docx), CSV (.csv), or PowerPoint (.pptx) deliverables are rendered as download cards with file size and format badges.

2. **Automatic Routing & Links**:
   - Dashboards are available at `/dashboards/:id`.
   - Academic assignments & labs are available at `/assignments/:id`.
   - Universal link `/work/:id` will automatically resolve to the proper page.
   - Work Library at `/work` and `/dashboards` automatically updates filters and search indices.

3. **High-Resolution Lightbox**:
   - Clicking "VIEW FULL-SIZE IMAGE" opens an accessible full-screen modal lightbox.
   - Users can press the `Escape` key or click outside to close the lightbox.

---

## 5. Local Development & Testing

Run these commands to preview and test your portfolio:

```bash
# Run backend server
node backend/server.js

# Run frontend Vite server
cd frontend && npm run dev

# Run automated end-to-end regression test suite
node test-e2e.js

# Run backend API test suite
node backend/test-api.js

# Build production bundle
cd frontend && npm run build
```
