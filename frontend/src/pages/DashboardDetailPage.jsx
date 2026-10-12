import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ArrowRight, Maximize2, Download, FileText, CheckCircle2 } from "lucide-react";
import { getDashboardById, getAdjacentDashboards } from "../services/api";
import { getWorkById } from "../data/workLibraryData";

// Exhibition Components
import DashboardViewer from "../components/DashboardViewer";
import DashboardDeconstruct from "../components/DashboardDeconstruct";
import DashboardMicroscope from "../components/DashboardMicroscope";
import DashboardStoryMode from "../components/DashboardStoryMode";
import PatternChallenge from "../components/PatternChallenge";
import DataDna from "../components/DataDna";
import ExhibitPagination from "../components/ExhibitPagination";
import DashboardImageModal from "../components/DashboardImageModal";

export default function DashboardDetailPage() {
  const { id } = useParams();
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [adjacent, setAdjacent] = useState({ prev: null, next: null, currentIndex: 1, total: 6 });
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // Mode Switch: "visual" or "story"
  const [activeMode, setActiveMode] = useState("visual");
  const [isDeconstructed, setIsDeconstructed] = useState(false);
  const [focusedVisual, setFocusedVisual] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(true);
    setIsDeconstructed(false);
    setFocusedVisual(null);
    setIsImageModalOpen(false);

    Promise.all([
      getDashboardById(id),
      getAdjacentDashboards(id)
    ])
      .then(([data, adj]) => {
        // Also merge any extra fields from workLibraryData if present
        const libraryWork = getWorkById(id);
        const merged = { ...(libraryWork || {}), ...(data || {}) };
        setDashboard(merged);
        if (adj) setAdjacent(adj);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <main style={{ paddingTop: "160px", paddingBottom: "120px" }}>
        <div className="container">
          <div style={{ height: "24px", width: "140px", marginBottom: "24px" }} className="skeleton-box" />
          <div style={{ height: "64px", width: "60%", marginBottom: "24px" }} className="skeleton-box" />
          <div style={{ height: "560px", width: "100%", marginBottom: "40px" }} className="skeleton-box" />
        </div>
      </main>
    );
  }

  if (!dashboard) {
    return (
      <main style={{ paddingTop: "160px", paddingBottom: "120px", textAlign: "center" }}>
        <div className="container">
          <div className="mono-tag" style={{ color: "#E8C547", marginBottom: "12px", fontWeight: 700 }}>
            ERROR // 404
          </div>
          <h1
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(28px, 4vw, 36px)",
              fontWeight: 700,
              letterSpacing: "-0.015em",
              color: "#111111",
              marginBottom: "20px"
            }}
          >
            PROJECT NOT FOUND
          </h1>
          <p style={{ color: "#666666", marginBottom: "32px" }}>
            The requested visualization project does not exist or has been relocated.
          </p>
          <Link
            to="/dashboards"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.86rem",
              fontWeight: 600,
              color: "#111111",
              textDecoration: "underline"
            }}
          >
            ← RETURN TO ALL PROJECTS & WORK
          </Link>
        </div>
      </main>
    );
  }

  const {
    title,
    tool,
    category,
    year,
    image,
    description,
    objective,
    problemStatement,
    dataset,
    visualizationApproach,
    insights = [],
    chartsUsed = [],
    liveUrl = "",
    dataDna,
    story,
    visualizations = [],
    challenge,
    conclusion,
    learningOutcomes,
    supportingFiles = []
  } = dashboard;

  const datasetName = typeof dataset === "object" ? dataset?.name : dataset;

  const projectNum = adjacent.currentIndex
    ? String(adjacent.currentIndex).padStart(2, "0")
    : "01";
  const totalNum = adjacent.total
    ? String(adjacent.total).padStart(2, "0")
    : "06";

  const hasLiveUrl = liveUrl && liveUrl.trim().length > 0 && !liveUrl.includes("placeholder");

  return (
    <main style={{ paddingTop: "130px", paddingBottom: "140px", backgroundColor: "#F7F7F4" }}>
      <div className="container">
        
        {/* Navigation Breadcrumb */}
        <div style={{ marginBottom: "32px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          <Link
            to="/dashboards"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "var(--font-sans)",
              fontSize: "0.82rem",
              letterSpacing: "0.04em",
              color: "#111111",
              fontWeight: 600,
              textDecoration: "none",
              transition: "color 180ms ease"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#E8C547")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#111111")}
          >
            <ArrowLeft size={14} />
            BACK TO ALL PROJECTS & WORK
          </Link>

          {/* VIEW FULL-SIZE IMAGE ACTION */}
          <button
            type="button"
            onClick={() => setIsImageModalOpen(true)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 16px",
              borderRadius: "8px",
              backgroundColor: "#111111",
              color: "#FFFFFF",
              border: "none",
              fontFamily: "var(--font-sans)",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              cursor: "pointer",
              transition: "all 200ms ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#E8C547";
              e.currentTarget.style.color = "#111111";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#111111";
              e.currentTarget.style.color = "#FFFFFF";
            }}
          >
            <Maximize2 size={13} />
            <span>VIEW FULL-SIZE IMAGE</span>
          </button>
        </div>

        {/* Project Stage Header */}
        <header style={{ maxWidth: "960px", marginBottom: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.80rem",
                letterSpacing: "0.10em",
                color: "#E8C547",
                fontWeight: 700
              }}
            >
              PROJECT {projectNum}
            </span>
            <span style={{ color: "#888888", fontFamily: "var(--font-sans)" }}>/</span>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.76rem",
                letterSpacing: "0.08em",
                color: "#666666"
              }}
            >
              {totalNum}
            </span>
            <span style={{ color: "#CCCCCC", margin: "0 4px" }}>•</span>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.74rem",
                letterSpacing: "0.06em",
                color: "#111111",
                fontWeight: 600,
                textTransform: "uppercase"
              }}
            >
              {tool} // {category} {year ? `// ${year}` : ""}
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(36px, 5vw, 64px)",
              color: "#111111",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              margin: "0 0 16px 0"
            }}
          >
            {title}
          </h1>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(16px, 1.2vw, 19px)",
              lineHeight: 1.65,
              fontWeight: 400,
              color: "#555555",
              margin: 0
            }}
          >
            {description}
          </p>

          {(dashboard.googleDocUrl || dashboard.kaggleUrl) && (
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "16px" }}>
              {dashboard.googleDocUrl && (
                <a
                  href={dashboard.googleDocUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "7px 14px",
                    borderRadius: "8px",
                    backgroundColor: "#111111",
                    color: "#FFFFFF",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.74rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "all 160ms ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#E8C547";
                    e.currentTarget.style.color = "#111111";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#111111";
                    e.currentTarget.style.color = "#FFFFFF";
                  }}
                >
                  <span>OFFICIAL GOOGLE DOC SUBMISSION</span>
                  <ArrowUpRight size={13} />
                </a>
              )}
              {dashboard.kaggleUrl && (
                <a
                  href={dashboard.kaggleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "7px 14px",
                    borderRadius: "8px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #DCDCDC",
                    color: "#111111",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.74rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "all 160ms ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#111111";
                    e.currentTarget.style.backgroundColor = "#F7F7F4";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#DCDCDC";
                    e.currentTarget.style.backgroundColor = "#FFFFFF";
                  }}
                >
                  <span>KAGGLE DATASET REPOSITORY</span>
                  <ArrowUpRight size={13} />
                </a>
              )}
            </div>
          )}
        </header>

        {/* Minimal Mode Switcher */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            padding: "16px 0",
            borderTop: "1px solid #DCDCDC",
            borderBottom: "1px solid #DCDCDC",
            marginBottom: "40px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.70rem",
                letterSpacing: "0.12em",
                color: "#777777",
                fontWeight: 600
              }}
            >
              MODE //
            </span>

            <button
              onClick={() => setActiveMode("visual")}
              style={{
                background: "none",
                border: "none",
                padding: "4px 0",
                fontFamily: "var(--font-sans)",
                fontSize: "0.86rem",
                letterSpacing: "0.06em",
                color: activeMode === "visual" ? "#111111" : "#777777",
                fontWeight: activeMode === "visual" ? 700 : 500,
                cursor: "pointer",
                position: "relative",
                transition: "color 200ms ease"
              }}
            >
              VISUAL
              {activeMode === "visual" && (
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    backgroundColor: "#E8C547"
                  }}
                />
              )}
            </button>

            <span style={{ color: "#CCCCCC" }}>/</span>

            <button
              onClick={() => setActiveMode("story")}
              style={{
                background: "none",
                border: "none",
                padding: "4px 0",
                fontFamily: "var(--font-sans)",
                fontSize: "0.86rem",
                letterSpacing: "0.06em",
                color: activeMode === "story" ? "#111111" : "#777777",
                fontWeight: activeMode === "story" ? 700 : 500,
                cursor: "pointer",
                position: "relative",
                transition: "color 200ms ease"
              }}
            >
              STORY
              {activeMode === "story" && (
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    backgroundColor: "#E8C547"
                  }}
                />
              )}
            </button>
          </div>

          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.72rem",
              fontWeight: 500,
              color: "#777777"
            }}
          >
            {activeMode === "visual"
              ? "INTERACTIVE VISUAL STAGE & ARCHITECTURAL INQUIRY"
              : "GUIDED 5-STAGE EDITORIAL RESEARCH NARRATIVE"}
          </div>
        </div>

        {/* MODE 1: VISUAL STAGE */}
        {activeMode === "visual" && (
          <div style={{ animation: "fadeIn 300ms ease forwards" }}>
            <DashboardViewer
              image={image}
              title={title}
              altText={`${title} interactive high-resolution model`}
            />

            <DataDna dataDna={dataDna} fallbackData={dashboard} />

            <DashboardDeconstruct
              visualizations={visualizations}
              dashboardTitle={title}
              isDeconstructed={isDeconstructed}
              onToggleDeconstruct={() => setIsDeconstructed((prev) => !prev)}
              onSelectVisual={(vis) => setFocusedVisual(vis)}
            />

            <PatternChallenge challenge={challenge} title={title} />

            {/* VERTICAL NARRATIVE CASCADE */}
            <section
              aria-label="Editorial Case Narrative"
              style={{
                margin: "80px 0 60px 0",
                display: "flex",
                flexDirection: "column",
                gap: "56px",
                maxWidth: "920px"
              }}
            >
              {/* 01 THE QUESTION */}
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.74rem",
                    letterSpacing: "0.08em",
                    color: "#E8C547",
                    fontWeight: 700,
                    display: "block",
                    marginBottom: "8px"
                  }}
                >
                  01 // THE QUESTION & OBJECTIVE
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "clamp(22px, 2.8vw, 30px)",
                    fontWeight: 700,
                    letterSpacing: "-0.015em",
                    color: "#111111",
                    lineHeight: 1.25,
                    margin: "0 0 16px 0"
                  }}
                >
                  {story?.question || objective}
                </h2>
                {problemStatement && (
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "1rem",
                      lineHeight: 1.65,
                      fontWeight: 400,
                      color: "#444444",
                      margin: "0 0 12px 0"
                    }}
                  >
                    {problemStatement}
                  </p>
                )}
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.96rem",
                    lineHeight: 1.65,
                    fontWeight: 400,
                    color: "#666666",
                    margin: 0
                  }}
                >
                  Every analytical inquiry originates with consequence. Defining the exact vulnerability or operational deficit anchors visual attention directly to actionable decisions.
                </p>
              </div>

              {/* 02 THE DATA */}
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.74rem",
                    letterSpacing: "0.08em",
                    color: "#E8C547",
                    fontWeight: 700,
                    display: "block",
                    marginBottom: "8px"
                  }}
                >
                  02 // THE DATASET
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "clamp(22px, 2.8vw, 30px)",
                    fontWeight: 700,
                    letterSpacing: "-0.015em",
                    color: "#111111",
                    lineHeight: 1.25,
                    margin: "0 0 16px 0"
                  }}
                >
                  {datasetName}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1rem",
                    lineHeight: 1.65,
                    fontWeight: 400,
                    color: "#444444",
                    margin: 0
                  }}
                >
                  {story?.data || "Rigorous validation, ETL pipelines, and integrity checks were applied to normalize disparate inputs and ensure reliable analysis."}
                </p>
              </div>

              {/* 03 THE EXPLORATION */}
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.74rem",
                    letterSpacing: "0.08em",
                    color: "#E8C547",
                    fontWeight: 700,
                    display: "block",
                    marginBottom: "8px"
                  }}
                >
                  03 // THE EXPLORATION & METHODOLOGY
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "clamp(22px, 2.8vw, 30px)",
                    fontWeight: 700,
                    letterSpacing: "-0.015em",
                    color: "#111111",
                    lineHeight: 1.25,
                    margin: "0 0 16px 0"
                  }}
                >
                  Variance & Outlier Modeling
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1rem",
                    lineHeight: 1.65,
                    fontWeight: 400,
                    color: "#444444",
                    margin: 0
                  }}
                >
                  {story?.exploration || "Statistical distributions were evaluated against domain benchmarks to verify whether observed spikes represented systemic patterns or isolated reporting anomalies."}
                </p>
              </div>

              {/* 04 THE VISUALIZATION */}
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.74rem",
                    letterSpacing: "0.08em",
                    color: "#E8C547",
                    fontWeight: 700,
                    display: "block",
                    marginBottom: "8px"
                  }}
                >
                  04 // THE VISUALIZATION APPROACH
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "clamp(22px, 2.8vw, 30px)",
                    fontWeight: 700,
                    letterSpacing: "-0.015em",
                    color: "#111111",
                    lineHeight: 1.25,
                    margin: "0 0 16px 0"
                  }}
                >
                  {visualizationApproach}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1rem",
                    lineHeight: 1.65,
                    fontWeight: 400,
                    color: "#444444",
                    margin: "0 0 16px 0"
                  }}
                >
                  {story?.visualization || "Visual encodings were chosen according to strict cognitive load standards: high-contrast accents draw focus to anomalies, while natural backgrounds preserve spatial context without eye fatigue."}
                </p>

                {chartsUsed && chartsUsed.length > 0 && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
                    {chartsUsed.map((c) => (
                      <span
                        key={c}
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.76rem",
                          fontWeight: 600,
                          backgroundColor: "#FFFFFF",
                          border: "1px solid #DCDCDC",
                          padding: "5px 12px",
                          borderRadius: "8px",
                          color: "#111111"
                        }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* 05 THE INSIGHT */}
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.74rem",
                    letterSpacing: "0.08em",
                    color: "#E8C547",
                    fontWeight: 700,
                    display: "block",
                    marginBottom: "8px"
                  }}
                >
                  05 // KEY FINDINGS & INSIGHTS
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {insights.map((ins, idx) => (
                    <div key={idx} style={{ paddingLeft: "18px", borderLeft: "3px solid #E8C547" }}>
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "1.05rem",
                          lineHeight: 1.6,
                          color: "#111111",
                          margin: 0,
                          fontWeight: 500
                        }}
                      >
                        "{ins}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 06 CONCLUSION & LEARNING OUTCOMES */}
              {(conclusion || learningOutcomes) && (
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.74rem",
                      letterSpacing: "0.08em",
                      color: "#E8C547",
                      fontWeight: 700,
                      display: "block",
                      marginBottom: "8px"
                    }}
                  >
                    06 // CONCLUSION & TAKEAWAY
                  </span>
                  {conclusion && (
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.65, color: "#333333", margin: "0 0 12px 0" }}>
                      {conclusion}
                    </p>
                  )}
                  {learningOutcomes && (
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", lineHeight: 1.6, color: "#666666", margin: 0 }}>
                      <strong>Key Competencies:</strong> {learningOutcomes}
                    </p>
                  )}
                </div>
              )}

              {/* 07 DELIVERABLES & SUPPORTING FILES (IF AVAILABLE) */}
              {supportingFiles && supportingFiles.length > 0 && (
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.74rem",
                      letterSpacing: "0.08em",
                      color: "#E8C547",
                      fontWeight: 700,
                      display: "block",
                      marginBottom: "12px"
                    }}
                  >
                    07 // DELIVERABLES & RELATED REPORTS
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                    {supportingFiles.map((sf, sfIdx) => (
                      <a
                        key={sfIdx}
                        href={sf.url}
                        download
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "10px 18px",
                          borderRadius: "10px",
                          backgroundColor: "#FFFFFF",
                          border: "1px solid #DCDCDC",
                          color: "#111111",
                          textDecoration: "none",
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.82rem",
                          fontWeight: 600,
                          transition: "all 180ms ease"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#E8C547";
                          e.currentTarget.style.borderColor = "#E8C547";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#FFFFFF";
                          e.currentTarget.style.borderColor = "#DCDCDC";
                        }}
                      >
                        <Download size={14} />
                        <span>{sf.name} ({sf.format || "PDF"})</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {hasLiveUrl && (
              <div style={{ marginTop: "48px", paddingTop: "24px", borderTop: "1px solid #DCDCDC" }}>
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.90rem",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    color: "#111111",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    textDecoration: "underline"
                  }}
                >
                  OPEN LIVE INTERACTIVE MODEL <ArrowUpRight size={14} style={{ color: "#E8C547" }} />
                </a>
              </div>
            )}
          </div>
        )}

        {/* MODE 2: STORY STAGE */}
        {activeMode === "story" && (
          <div style={{ animation: "fadeIn 300ms ease forwards" }}>
            <DashboardStoryMode story={story} title={title} dataset={datasetName} />
            <PatternChallenge challenge={challenge} title={title} />
            <DataDna dataDna={dataDna} fallbackData={dashboard} />
          </div>
        )}

        {/* Exhibit Pagination */}
        <ExhibitPagination
          prev={adjacent.prev}
          next={adjacent.next}
          currentIndex={adjacent.currentIndex}
          total={adjacent.total}
        />
      </div>

      {focusedVisual && (
        <DashboardMicroscope
          visual={focusedVisual}
          dashboardTitle={title}
          onClose={() => setFocusedVisual(null)}
        />
      )}

      {/* Accessible Full-Size Image Modal Lightbox */}
      <DashboardImageModal
        dashboard={isImageModalOpen ? dashboard : null}
        onClose={() => setIsImageModalOpen(false)}
      />
    </main>
  );
}
