# DATA ATELIER — Data Visualization Portfolio
### Shreya Kashyap // 2026

An editorial, interactive digital exhibition and portfolio showcasing data visualization dashboards, analytics projects, and analytical stories created using **Power BI, Tableau, Excel, and Python**.

---

## 🏛️ Concept: The Data Atelier

Designed as a **digital exhibition where data visualizations are displayed like artwork**.

- **Atmosphere**: Soft, elegant, artistic, intelligent, premium, modern, and interactive.
- **Palette**: Warm Ivory (`#F7F4EE`), Deep Olive / Charcoal (`#29332E`), Sage (`#A8B8A0`), Dusty Lavender (`#B9AEC9`), Muted Peach (`#DDB7A3`), Soft Gold (`#C9B27C`).
- **Typography**: 
  - *Headings*: DM Serif Display
  - *Body & UI*: Manrope
  - *Metadata & Coordinates*: Space Mono

---

## 🏗️ Architecture

```text
dvtdashboard/
│
├── frontend/                     # React.js + Vite SPA
│   ├── src/
│   │   ├── components/           # Navigation, Hero, FilterBar, DashboardCard, DataStory, etc.
│   │   ├── pages/                # HomePage, DashboardsPage, DashboardDetailPage, etc.
│   │   ├── services/             # Centralized API client (api.js)
│   │   ├── styles/               # Design tokens, global typography, animations
│   │   ├── App.jsx               # React Router configuration
│   │   └── main.jsx
│   ├── public/
│   │   └── images/dashboards/    # High-resolution dashboard screenshots / SVGs
│   └── package.json
│
└── backend/                      # Node.js + Express.js REST API
    ├── controllers/              # Query filtering and route controllers
    ├── routes/                   # REST endpoints (/api/dashboards, /api/tools, etc.)
    ├── data/
    │   └── dashboards.json       # Single source of truth for dashboard data
    ├── server.js                 # Express server with CORS & error handling
    └── package.json
```

---

## 🚀 Quick Start (Running Locally)

### 1. Start the Backend API Server
```bash
cd backend
npm install
npm run dev
# Running on http://localhost:5000
```

### 2. Start the Frontend Application
```bash
cd frontend
npm install
npm run dev
# Running on http://localhost:3000 (proxies /api to http://localhost:5000)
```

---

## ⚡ How to Add a New Dashboard (2 Steps Only)

Adding a new project does **NOT** require modifying any React components. Everything (cards, filtering, detail pages, comparison matrix, insights) updates automatically:

1. **Place your dashboard export image** into:
   ```text
   frontend/public/images/dashboards/your-project.png
   ```

2. **Add a single JSON object** to `backend/data/dashboards.json`:
   ```json
   {
     "id": "your-project-id",
     "title": "Your Project Title",
     "tool": "Power BI",
     "category": "Research",
     "year": 2026,
     "image": "/images/dashboards/your-project.png",
     "description": "Executive description of the visual analysis.",
     "objective": "Analytical problem or core question investigated.",
     "dataset": "Name and scope of the dataset.",
     "visualizationApproach": "Specific chart types, slicers, and modeling approach.",
     "insights": [
       "Key finding 1",
       "Key finding 2",
       "Key finding 3"
     ],
     "chartsUsed": ["Choropleth Map", "KPI Cards", "Scatter Plot"],
     "featured": true,
     "accentColor": "#A8B8A0",
     "liveUrl": ""
   }
   ```

---

## 📚 Complete Academic Work Library & Case Study Architecture

For a comprehensive guide on adding:
- **Academic Assignments** (with questions, requirements, and deliverables)
- **Programming Labs** (with formatted syntax code snippets)
- **Research Papers & Reports** (with embedded PDF viewers and downloads)
- **Excel Models & Spreadsheets** (with data cleaning and methodology)

See **[PORTFOLIO_GUIDE.md](./PORTFOLIO_GUIDE.md)** for copy-paste templates and instructions.

### Dedicated Routes
- `/` — Homepage with Hero, Selected Dashboards, Academic Assignments, and About
- `/work` & `/dashboards` — Unified Work Library with Category, Tool, Year filters, and live search
- `/dashboards/:id` — Interactive Digital Exhibition detail page (Microscope, Deconstruct, 5-Stage Story Mode, Pattern Challenge, Data DNA)
- `/assignments/:id` — Academic Case Study detail page (Background, Objectives, Dataset, Methodology, Code snippets, PDF preview, Deliverables)
- `/work/:id` — Universal route resolver for all portfolio items

---

## 🧪 Verification & Automated Testing

```bash
# Run end-to-end regression test suite (57 tests)
node test-e2e.js

# Run backend API test suite (6 tests)
node backend/test-api.js

# Build production bundle
cd frontend && npm run build
```
