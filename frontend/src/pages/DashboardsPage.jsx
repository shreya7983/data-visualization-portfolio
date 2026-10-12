import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Filter, X, ArrowUpRight, ArrowRight, Layers, Calendar, Code, FileText, LayoutGrid } from "lucide-react";
import { WORK_ITEMS, getToolsList, getYearsList } from "../data/workLibraryData";
import DashboardImageModal from "../components/DashboardImageModal";

export default function DashboardsPage() {
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState("ALL");
  const [selectedTool, setSelectedTool] = useState("ALL");
  const [selectedYear, setSelectedYear] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [lightboxDashboard, setLightboxDashboard] = useState(null);

  const WORK_SECTIONS = [
    { id: "ALL", label: "ALL WORK" },
    { id: "LABS", label: "LAB WORK" },
    { id: "DASHBOARDS", label: "DASHBOARDS" }
  ];

  const toolsList = useMemo(() => getToolsList(), []);
  const yearsList = useMemo(() => getYearsList(), []);

  // Filtered Items Computation
  const filteredItems = useMemo(() => {
    return WORK_ITEMS.filter((item) => {
      // Main Section Filter (ALL / LAB WORK / DASHBOARDS)
      if (selectedSection === "LABS") {
        const isLab = item.id.startsWith("lab-") ||
                      item.id.startsWith("assignment-") ||
                      item.projectType === "Academic Lab Work" ||
                      item.projectType === "Programming Lab" ||
                      item.projectType === "Academic Assignment" ||
                      (item.categories && item.categories.includes("Academic Lab Work")) ||
                      (item.categories && item.categories.includes("Programming Labs"));
        if (!isLab) return false;
      } else if (selectedSection === "DASHBOARDS") {
        const isDashboard = item.projectType === "Dashboard" ||
                            (item.categories && item.categories.includes("Data Visualization Dashboards"));
        if (!isDashboard) return false;
      }

      // Tool filter
      if (selectedTool !== "ALL") {
        const itemTools = (item.tools || [item.tool]).filter(Boolean).map(t => t.toLowerCase());
        const normTool = selectedTool.toLowerCase();
        const matchesTool = itemTools.some(t => t.includes(normTool) || normTool.includes(t));
        if (!matchesTool) return false;
      }

      // Year filter
      if (selectedYear !== "ALL") {
        if (String(item.year) !== String(selectedYear)) return false;
      }

      // Search filter
      if (searchQuery.trim() !== "") {
        const term = searchQuery.toLowerCase().trim();
        const titleMatch = (item.title || "").toLowerCase().includes(term);
        const descMatch = (item.description || item.subtitle || "").toLowerCase().includes(term);
        const toolMatch = (item.tools || [item.tool]).some(t => (t || "").toLowerCase().includes(term));
        const catMatch = (item.categories || [item.category]).some(c => (c || "").toLowerCase().includes(term));
        const subjectMatch = (item.subject || item.course || "").toLowerCase().includes(term);
        const datasetMatch = typeof item.dataset === "object" 
          ? (item.dataset?.name || "").toLowerCase().includes(term)
          : (item.dataset || "").toLowerCase().includes(term);

        if (!titleMatch && !descMatch && !toolMatch && !catMatch && !subjectMatch && !datasetMatch) {
          return false;
        }
      }

      return true;
    });
  }, [selectedSection, selectedTool, selectedYear, searchQuery]);

  const handleResetFilters = () => {
    setSelectedSection("ALL");
    setSelectedTool("ALL");
    setSelectedYear("ALL");
    setSearchQuery("");
  };

  const getItemLink = (item) => {
    if (item.projectType === "Dashboard" && [
      "india-paper-leaks",
      "superstore-sales",
      "placement-analysis",
      "study-habits-analysis",
      "healthcare-er-wait-times",
      "urban-air-quality-trends",
      "superstore-management",
      "superstore-sales-manager",
      "superstore-regional-manager"
    ].includes(item.id)) {
      return `/dashboards/${item.id}`;
    }
    return `/assignments/${item.id}`;
  };

  return (
    <main style={{ backgroundColor: "#F7F7F4", minHeight: "100vh", paddingTop: "140px", paddingBottom: "130px" }}>
      <div className="container">
        
        {/* Exhibition Header */}
        <div style={{ maxWidth: "860px", marginBottom: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#E8C547" }} />
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.74rem",
                letterSpacing: "0.08em",
                fontWeight: 600,
                color: "#111111",
                textTransform: "uppercase"
              }}
            >
              PORTFOLIO // COMPLETE WORK LIBRARY
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(40px, 5.2vw, 68px)",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              color: "#111111",
              margin: "0 0 16px 0"
            }}
          >
            WORK <span style={{ color: "#E8C547" }}>LIBRARY.</span>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(16px, 1.2vw, 18px)",
              lineHeight: 1.6,
              color: "#555555",
              fontWeight: 400,
              margin: 0
            }}
          >
            Explore all data visualization dashboards, academic assignments, programming labs, and empirical research reports.
          </p>
        </div>

        {/* Search & Tool Filters Bar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "16px",
            marginBottom: "28px",
            alignItems: "center"
          }}
        >
          {/* Keyword Search Input */}
          <div style={{ position: "relative" }}>
            <Search
              size={16}
              style={{
                position: "absolute",
                left: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#888888",
                pointerEvents: "none"
              }}
            />
            <input
              type="text"
              placeholder="Search by title, tool, dataset, or subject..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 16px 12px 40px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #DCDCDC",
                borderRadius: "12px",
                fontFamily: "var(--font-sans)",
                fontSize: "0.88rem",
                color: "#111111",
                outline: "none",
                transition: "border-color 180ms ease, box-shadow 180ms ease"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#E8C547";
                e.target.style.boxShadow = "0 0 0 2px rgba(232, 197, 71, 0.25)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#DCDCDC";
                e.target.style.boxShadow = "none";
              }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#888888"
                }}
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Tool Dropdown Selector */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <label style={{ fontFamily: "var(--font-sans)", fontSize: "0.76rem", fontWeight: 600, color: "#666666", textTransform: "uppercase" }}>
              TOOL:
            </label>
            <select
              value={selectedTool}
              onChange={(e) => setSelectedTool(e.target.value)}
              style={{
                flex: 1,
                padding: "11px 14px",
                borderRadius: "10px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #DCDCDC",
                fontFamily: "var(--font-sans)",
                fontSize: "0.86rem",
                fontWeight: 500,
                color: "#111111",
                outline: "none",
                cursor: "pointer"
              }}
            >
              {toolsList.map((tool) => (
                <option key={tool} value={tool}>
                  {tool === "ALL" ? "All Tools" : tool}
                </option>
              ))}
            </select>
          </div>

          {/* Year Dropdown Selector */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <label style={{ fontFamily: "var(--font-sans)", fontSize: "0.76rem", fontWeight: 600, color: "#666666", textTransform: "uppercase" }}>
              YEAR:
            </label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              style={{
                flex: 1,
                padding: "11px 14px",
                borderRadius: "10px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #DCDCDC",
                fontFamily: "var(--font-sans)",
                fontSize: "0.86rem",
                fontWeight: 500,
                color: "#111111",
                outline: "none",
                cursor: "pointer"
              }}
            >
              {yearsList.map((yr) => (
                <option key={yr} value={yr}>
                  {yr === "ALL" ? "All Years" : yr}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Work Section Filter Tabs (ALL WORK / LAB WORK / DASHBOARDS) */}
        <div
          style={{
            display: "inline-flex",
            gap: "8px",
            backgroundColor: "#ECECE8",
            padding: "5px",
            borderRadius: "14px",
            marginBottom: "36px",
            border: "1px solid #DCDCDC"
          }}
        >
          {WORK_SECTIONS.map((sec) => {
            const isActive = selectedSection === sec.id;
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => setSelectedSection(sec.id)}
                style={{
                  padding: "9px 20px",
                  borderRadius: "10px",
                  border: "none",
                  backgroundColor: isActive ? "#111111" : "transparent",
                  color: isActive ? "#FFFFFF" : "#555555",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.82rem",
                  fontWeight: isActive ? 700 : 500,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 160ms ease"
                }}
              >
                {isActive && <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#E8C547" }} />}
                <span>{sec.label}</span>
              </button>
            );
          })}
        </div>

        {/* Status Counter & Reset Action */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "28px",
            fontFamily: "var(--font-sans)",
            fontSize: "0.82rem",
            color: "#666666"
          }}
        >
          <span>
            SHOWING <strong style={{ color: "#111111" }}>{filteredItems.length}</strong> WORK ITEMS
          </span>

          {(selectedCategory !== "ALL" || selectedTool !== "ALL" || selectedYear !== "ALL" || searchQuery) && (
            <button
              type="button"
              onClick={handleResetFilters}
              style={{
                background: "none",
                border: "none",
                color: "#111111",
                fontFamily: "var(--font-sans)",
                fontSize: "0.80rem",
                fontWeight: 600,
                textDecoration: "underline",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px"
              }}
            >
              <X size={13} />
              <span>RESET FILTERS</span>
            </button>
          )}
        </div>

        {/* WORK ITEMS GRID */}
        {filteredItems.length === 0 ? (
          <div
            style={{
              padding: "80px 24px",
              textAlign: "center",
              backgroundColor: "#FFFFFF",
              borderRadius: "20px",
              border: "1px solid #DCDCDC"
            }}
          >
            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.2rem", fontWeight: 700, color: "#111111", marginBottom: "8px" }}>
              No matching work found
            </h3>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", color: "#666666", marginBottom: "20px" }}>
              Try adjusting your search query, tool filter, or category selection.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              style={{
                padding: "10px 20px",
                borderRadius: "8px",
                backgroundColor: "#111111",
                color: "#FFFFFF",
                border: "none",
                fontFamily: "var(--font-sans)",
                fontSize: "0.82rem",
                fontWeight: 600,
                cursor: "pointer"
              }}
            >
              RESET ALL FILTERS
            </button>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "28px"
            }}
          >
            {filteredItems.map((item, idx) => {
              const targetUrl = getItemLink(item);

              return (
                <div
                  key={item.id}
                  onClick={() => navigate(targetUrl)}
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #DCDCDC",
                    borderRadius: "20px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
                    cursor: "pointer",
                    transition: "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.08)";
                    e.currentTarget.style.borderColor = "#B8B8B8";
                    const btn = e.currentTarget.querySelector(".work-card-action");
                    if (btn) {
                      btn.style.backgroundColor = "#E8C547";
                      btn.style.color = "#111111";
                      btn.style.borderColor = "#E8C547";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.04)";
                    e.currentTarget.style.borderColor = "#DCDCDC";
                    const btn = e.currentTarget.querySelector(".work-card-action");
                    if (btn) {
                      btn.style.backgroundColor = "#111111";
                      btn.style.color = "#FFFFFF";
                      btn.style.borderColor = "#111111";
                    }
                  }}
                >
                  {/* Thumbnail / Image Banner */}
                  {item.image && (
                    <div
                      style={{
                        height: "200px",
                        backgroundColor: "#F7F7F4",
                        borderBottom: "1px solid #DCDCDC",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "16px",
                        position: "relative"
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          borderRadius: "10px"
                        }}
                      />

                      {/* Number badge on top right */}
                      {item.num && (
                        <div
                          style={{
                            position: "absolute",
                            top: "12px",
                            right: "12px",
                            padding: "3px 8px",
                            borderRadius: "6px",
                            backgroundColor: "#111111",
                            color: "#E8C547",
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.72rem",
                            fontWeight: 700
                          }}
                        >
                          {item.num}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Card Body */}
                  <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
                    
                    {/* Tags: Category + Tool + Year */}
                    <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.68rem",
                          fontWeight: 600,
                          letterSpacing: "0.05em",
                          textTransform: "uppercase",
                          padding: "3px 8px",
                          borderRadius: "6px",
                          backgroundColor: "#F7F7F4",
                          border: "1px solid #DCDCDC",
                          color: "#111111"
                        }}
                      >
                        {item.tool}
                      </span>

                      {item.year && (
                        <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.70rem", color: "#777777", fontWeight: 500 }}>
                          {item.year}
                        </span>
                      )}

                      {item.projectType && (
                        <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.70rem", color: "#777777" }}>
                          · {item.projectType}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "clamp(18px, 1.8vw, 22px)",
                        fontWeight: 700,
                        lineHeight: 1.25,
                        color: "#111111",
                        margin: "0 0 10px 0"
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.90rem",
                        lineHeight: 1.55,
                        color: "#666666",
                        margin: "0 0 20px 0",
                        flex: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                      }}
                    >
                      {item.description || item.subtitle || item.objective}
                    </p>

                    {/* Bottom Action Row */}
                    <div
                      style={{
                        paddingTop: "16px",
                        borderTop: "1px solid #EFEFEF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                      }}
                    >
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.74rem", color: "#888888", fontWeight: 500 }}>
                        {item.subject ? item.subject.substring(0, 26) + "…" : "View Project"}
                      </span>

                      <div
                        className="work-card-action"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          padding: "8px 14px",
                          borderRadius: "8px",
                          backgroundColor: "#111111",
                          border: "1px solid #111111",
                          color: "#FFFFFF",
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.76rem",
                          fontWeight: 600,
                          letterSpacing: "0.03em",
                          transition: "all 180ms ease"
                        }}
                      >
                        <span>VIEW CASE STUDY</span>
                        <span style={{ color: "#E8C547", fontWeight: 700 }}>→</span>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </main>
  );
}
