import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  ArrowUpRight, 
  Download, 
  FileText, 
  Code2, 
  CheckCircle2, 
  Maximize2, 
  X, 
  Copy, 
  Check, 
  Eye, 
  Layers, 
  Calendar, 
  User, 
  BookOpen, 
  ExternalLink,
  Linkedin
} from "lucide-react";
import { getWorkById, getAdjacentWork } from "../data/workLibraryData";

export default function CaseStudyDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [adjacent, setAdjacent] = useState({ prev: null, next: null, currentIndex: 1, total: 1 });
  const [lightboxImage, setLightboxImage] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copiedSnippetIndex, setCopiedSnippetIndex] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const work = getWorkById(id);
    if (work) {
      setItem(work);
      setAdjacent(getAdjacentWork(work.id));
      setActiveImageIndex(0);
    } else {
      setItem(null);
    }
  }, [id]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setLightboxImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCopyCode = (codeText, index) => {
    navigator.clipboard.writeText(codeText);
    setCopiedSnippetIndex(index);
    setTimeout(() => setCopiedSnippetIndex(null), 2000);
  };

  if (!item) {
    return (
      <main style={{ minHeight: "80vh", paddingTop: "160px", paddingBottom: "120px", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "640px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#E8C547" }} />
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.74rem", letterSpacing: "0.08em", fontWeight: 600, color: "#111111" }}>
              CASE STUDY ARCHIVE // 404
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, color: "#111111", marginBottom: "16px" }}>
            WORK ITEM NOT FOUND
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", color: "#666666", fontSize: "1rem", lineHeight: 1.6, marginBottom: "32px" }}>
            The requested assignment, lab, or case study could not be located in the current repository.
          </p>
          <Link
            to="/dashboards"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              backgroundColor: "#111111",
              color: "#FFFFFF",
              borderRadius: "10px",
              textDecoration: "none",
              fontFamily: "var(--font-sans)",
              fontSize: "0.86rem",
              fontWeight: 600
            }}
          >
            <ArrowLeft size={16} />
            <span>RETURN TO WORK LIBRARY</span>
          </Link>
        </div>
      </main>
    );
  }

  const imageGallery = item.images && item.images.length > 0 
    ? item.images 
    : (item.image ? [{ url: item.image, title: item.title, caption: item.description }] : []);
  const currentImage = imageGallery[activeImageIndex] || imageGallery[0];
  const isPdf = item.file && item.file.toLowerCase().endsWith(".pdf");

  return (
    <main style={{ backgroundColor: "#F7F7F4", minHeight: "100vh", paddingTop: "120px", paddingBottom: "140px" }}>
      <div className="container" style={{ maxWidth: "1040px" }}>
        
        {/* Navigation Breadcrumb */}
        <div style={{ marginBottom: "32px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          <Link
            to="/dashboards"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              color: "#111111",
              fontFamily: "var(--font-sans)",
              fontSize: "0.82rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              transition: "color 180ms ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#E8C547"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#111111"}
          >
            <ArrowLeft size={15} />
            <span>BACK TO ALL PROJECTS & WORK</span>
          </Link>

          {/* Project Type Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "8px",
              backgroundColor: "#FFFFFF",
              border: "1px solid #DCDCDC"
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#E8C547" }} />
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                color: "#111111",
                textTransform: "uppercase"
              }}
            >
              {item.projectType || "CASE STUDY"} {item.num ? `// ${item.num}` : ""}
            </span>
          </div>
        </div>

        {/* HERO HEADER SECTION */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #DCDCDC",
            borderRadius: "24px",
            padding: "clamp(28px, 4.5vw, 52px)",
            marginBottom: "40px",
            boxShadow: "0 4px 24px rgba(0, 0, 0, 0.04)"
          }}
        >
          {/* Metadata Row: Category · Year · Subject */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "12px",
              marginBottom: "18px"
            }}
          >
            {item.category && (
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.74rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "5px 12px",
                  borderRadius: "6px",
                  backgroundColor: "#F7F7F4",
                  border: "1px solid #DCDCDC",
                  color: "#111111"
                }}
              >
                {item.category}
              </span>
            )}

            {item.year && (
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.74rem",
                  fontWeight: 600,
                  color: "#666666",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px"
                }}
              >
                <Calendar size={13} style={{ color: "#E8C547" }} />
                <span>{item.year}</span>
              </span>
            )}

            {item.subject && (
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.74rem",
                  fontWeight: 500,
                  color: "#666666"
                }}
              >
                · {item.subject}
              </span>
            )}

            {item.student && (
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "#111111",
                  backgroundColor: "#FAFAFA",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  border: "1px solid #DCDCDC"
                }}
              >
                STUDENT: {item.student}
              </span>
            )}

            {item.course && (
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  color: "#666666"
                }}
              >
                · {item.course}
              </span>
            )}
          </div>

          {/* Monumental Case Study Title */}
          <h1
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(32px, 4vw, 56px)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              color: "#111111",
              margin: "0 0 20px 0"
            }}
          >
            {item.title}
          </h1>

          {/* Short Narrative Overview */}
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(16px, 1.2vw, 19px)",
              lineHeight: 1.65,
              color: "#444444",
              fontWeight: 400,
              maxWidth: "820px",
              margin: "0 0 28px 0"
            }}
          >
            {item.description || item.subtitle || item.objective}
          </p>

          {/* Tools, Teacher, and External Document Links Row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              paddingTop: "20px",
              borderTop: "1px solid #EFEFEF"
            }}
          >
            {/* Tools Used */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 600, color: "#888888", letterSpacing: "0.04em" }}>
                TOOLS:
              </span>
              {(item.tools || [item.tool]).filter(Boolean).map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    color: "#111111",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    backgroundColor: "#F7F7F4",
                    border: "1px solid #DCDCDC"
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Right: Mentor & External Submission Links */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
              {item.googleDocUrl && (
                <a
                  href={item.googleDocUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "6px 14px",
                    borderRadius: "8px",
                    backgroundColor: "#111111",
                    color: "#FFFFFF",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.74rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "all 180ms ease"
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
                  <span>GOOGLE DOC SUBMISSION</span>
                  <ExternalLink size={12} />
                </a>
              )}

              {item.linkedInUrl && (
                <a
                  href={item.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "6px 14px",
                    borderRadius: "8px",
                    backgroundColor: "#0A66C2",
                    color: "#FFFFFF",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.74rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "all 180ms ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#004182";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#0A66C2";
                  }}
                >
                  <Linkedin size={12} />
                  <span>VIEW ON LINKEDIN</span>
                  <ExternalLink size={12} />
                </a>
              )}

              {item.kaggleUrl && (
                <a
                  href={item.kaggleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "6px 14px",
                    borderRadius: "8px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #DCDCDC",
                    color: "#111111",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.74rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "all 180ms ease"
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
                  <span>KAGGLE DATASET</span>
                  <ExternalLink size={12} />
                </a>
              )}

              {item.teacher && (
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.76rem",
                    fontWeight: 600,
                    color: "#111111",
                    backgroundColor: "#FAFAFA",
                    padding: "5px 12px",
                    borderRadius: "8px",
                    border: "1px solid #E2E2E2"
                  }}
                >
                  <User size={13} style={{ color: "#E8C547" }} />
                  <span>MENTOR: {item.teacher}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ASSIGNMENT QUESTION / BRIEF CALLOUT (IF PROVIDED) */}
        {item.question && (
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #DCDCDC",
              borderLeft: "4px solid #E8C547",
              borderRadius: "16px",
              padding: "clamp(24px, 3.5vw, 36px)",
              marginBottom: "32px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.03)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <BookOpen size={16} style={{ color: "#E8C547" }} />
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: "#111111",
                  textTransform: "uppercase"
                }}
              >
                ASSIGNMENT BRIEF & QUESTION
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.05rem",
                lineHeight: 1.65,
                color: "#111111",
                fontWeight: 500,
                margin: 0
              }}
            >
              "{item.question}"
            </p>

            {item.requirements && item.requirements.length > 0 && (
              <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid #EFEFEF" }}>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    color: "#666666",
                    display: "block",
                    marginBottom: "10px"
                  }}
                >
                  DELIVERABLE REQUIREMENTS:
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {item.requirements.map((req, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                      <CheckCircle2 size={15} style={{ color: "#E8C547", marginTop: "3px", flexShrink: 0 }} />
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.90rem", color: "#333333", lineHeight: 1.5 }}>
                        {req}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* VISUAL WORK & OUTPUT SCREENSHOTS */}
        {currentImage && (
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #DCDCDC",
              borderRadius: "24px",
              padding: "clamp(20px, 3vw, 32px)",
              marginBottom: "40px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "16px",
                flexWrap: "wrap",
                gap: "12px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#E8C547" }} />
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    color: "#111111",
                    textTransform: "uppercase"
                  }}
                >
                  VISUAL ARTIFACT // {currentImage.title || item.title}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setLightboxImage(currentImage.url)}
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

            <div
              onClick={() => setLightboxImage(currentImage.url)}
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid #DCDCDC",
                backgroundColor: "#F7F7F4",
                cursor: "zoom-in",
                position: "relative"
              }}
            >
              <img
                src={currentImage.url}
                alt={currentImage.title || item.title}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  maxHeight: "620px",
                  objectFit: "contain",
                  margin: "0 auto",
                  padding: "12px"
                }}
              />
            </div>

            {currentImage.caption && (
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.84rem",
                  color: "#666666",
                  marginTop: "12px",
                  marginBottom: imageGallery.length > 1 ? "16px" : 0,
                  fontStyle: "italic"
                }}
              >
                {currentImage.caption}
              </p>
            )}

            {imageGallery.length > 1 && (
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  overflowX: "auto",
                  paddingTop: "16px",
                  borderTop: "1px solid #EFEFEF"
                }}
              >
                {imageGallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    style={{
                      border: activeImageIndex === idx ? "2px solid #E8C547" : "1px solid #DCDCDC",
                      borderRadius: "10px",
                      overflow: "hidden",
                      padding: "4px",
                      backgroundColor: "#FFFFFF",
                      cursor: "pointer",
                      flexShrink: 0,
                      width: "100px",
                      height: "68px",
                      opacity: activeImageIndex === idx ? 1 : 0.65,
                      transition: "all 180ms ease"
                    }}
                  >
                    <img
                      src={img.url}
                      alt={img.title || `Thumbnail ${idx + 1}`}
                      style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "6px" }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* CASE STUDY CONTENT SECTIONS */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px", marginBottom: "48px" }}>
          
          {/* 1. OBJECTIVE & BACKGROUND */}
          {(item.objective || item.problemStatement || item.background) && (
            <div
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #DCDCDC",
                borderRadius: "20px",
                padding: "clamp(24px, 3.5vw, 40px)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#E8C547" }} />
                <h2
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "#111111",
                    textTransform: "uppercase",
                    margin: 0
                  }}
                >
                  01 // BACKGROUND & OBJECTIVES
                </h2>
              </div>

              {item.problemStatement && (
                <div style={{ marginBottom: "16px" }}>
                  <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", fontWeight: 600, color: "#111111", marginBottom: "6px" }}>
                    The Problem
                  </h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.96rem", lineHeight: 1.65, color: "#444444", margin: 0 }}>
                    {item.problemStatement}
                  </p>
                </div>
              )}

              {item.objective && (
                <div>
                  <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", fontWeight: 600, color: "#111111", marginBottom: "6px" }}>
                    Project Purpose & Goal
                  </h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.96rem", lineHeight: 1.65, color: "#444444", margin: 0 }}>
                    {item.objective}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* 2. DATASET & PREPARATION */}
          {item.dataset && (
            <div
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #DCDCDC",
                borderRadius: "20px",
                padding: "clamp(24px, 3.5vw, 40px)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#E8C547" }} />
                <h2
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "#111111",
                    textTransform: "uppercase",
                    margin: 0
                  }}
                >
                  02 // DATASET ARCHITECTURE
                </h2>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "16px",
                  marginBottom: item.dataCleaning ? "20px" : 0
                }}
              >
                {item.dataset.name && (
                  <div style={{ padding: "14px", backgroundColor: "#F7F7F4", borderRadius: "10px", border: "1px solid #EAEAEA" }}>
                    <span style={{ display: "block", fontSize: "0.70rem", color: "#777777", fontWeight: 600, textTransform: "uppercase", marginBottom: "4px" }}>
                      DATASET NAME
                    </span>
                    <span style={{ fontSize: "0.90rem", fontWeight: 600, color: "#111111" }}>
                      {item.dataset.name}
                    </span>
                  </div>
                )}

                {item.dataset.source && (
                  <div style={{ padding: "14px", backgroundColor: "#F7F7F4", borderRadius: "10px", border: "1px solid #EAEAEA" }}>
                    <span style={{ display: "block", fontSize: "0.70rem", color: "#777777", fontWeight: 600, textTransform: "uppercase", marginBottom: "4px" }}>
                      SOURCE & ORIGIN
                    </span>
                    <span style={{ fontSize: "0.88rem", fontWeight: 500, color: "#222222" }}>
                      {item.dataset.source}
                    </span>
                  </div>
                )}

                {item.dataset.format && (
                  <div style={{ padding: "14px", backgroundColor: "#F7F7F4", borderRadius: "10px", border: "1px solid #EAEAEA" }}>
                    <span style={{ display: "block", fontSize: "0.70rem", color: "#777777", fontWeight: 600, textTransform: "uppercase", marginBottom: "4px" }}>
                      DATA FORMAT
                    </span>
                    <span style={{ fontSize: "0.90rem", fontWeight: 600, color: "#111111" }}>
                      {item.dataset.format}
                    </span>
                  </div>
                )}
              </div>

              {item.dataset.importantColumns && item.dataset.importantColumns.length > 0 && (
                <div style={{ marginTop: "16px" }}>
                  <span style={{ display: "block", fontSize: "0.72rem", color: "#666666", fontWeight: 600, textTransform: "uppercase", marginBottom: "8px" }}>
                    CRITICAL ATTRIBUTE COLUMNS:
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {item.dataset.importantColumns.map((col) => (
                      <code
                        key={col}
                        style={{
                          fontFamily: "monospace",
                          fontSize: "0.78rem",
                          backgroundColor: "#F7F7F4",
                          border: "1px solid #DCDCDC",
                          padding: "3px 8px",
                          borderRadius: "6px",
                          color: "#111111"
                        }}
                      >
                        {col}
                      </code>
                    ))}
                  </div>
                </div>
              )}

              {item.dataCleaning && (
                <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid #EFEFEF" }}>
                  <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "0.94rem", fontWeight: 600, color: "#111111", marginBottom: "6px" }}>
                    Data Cleaning & Transformation
                  </h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", lineHeight: 1.6, color: "#444444", margin: 0 }}>
                    {item.dataCleaning}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* 3. METHODOLOGY & PROCESS */}
          {(item.methodology || item.myApproach || item.process) && (
            <div
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #DCDCDC",
                borderRadius: "20px",
                padding: "clamp(24px, 3.5vw, 40px)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#E8C547" }} />
                <h2
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "#111111",
                    textTransform: "uppercase",
                    margin: 0
                  }}
                >
                  03 // PROCESS & METHODOLOGY
                </h2>
              </div>

              <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.96rem", lineHeight: 1.7, color: "#333333" }}>
                {(item.methodology || item.myApproach || item.process).split("\n").map((paragraph, pIdx) => (
                  <p key={pIdx} style={{ margin: "0 0 12px 0" }}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {item.chartsUsed && item.chartsUsed.length > 0 && (
                <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid #EFEFEF" }}>
                  <span style={{ display: "block", fontSize: "0.72rem", color: "#777777", fontWeight: 600, textTransform: "uppercase", marginBottom: "10px" }}>
                    TECHNIQUES & VISUAL ENCODINGS APPLIED:
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {item.chartsUsed.map((chart) => (
                      <span
                        key={chart}
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.76rem",
                          fontWeight: 600,
                          backgroundColor: "#F7F7F4",
                          border: "1px solid #DCDCDC",
                          borderRadius: "8px",
                          padding: "5px 12px",
                          color: "#111111"
                        }}
                      >
                        {chart}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* VISUALIZATIONS & DETAILED EXPLANATIONS (LAB 1: CHARTS 1 TO 8) */}
          {item.visualizationsList && item.visualizationsList.length > 0 && (
            <div
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #DCDCDC",
                borderRadius: "20px",
                padding: "clamp(24px, 3.5vw, 40px)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#E8C547" }} />
                <h2
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "#111111",
                    textTransform: "uppercase",
                    margin: 0
                  }}
                >
                  VISUALIZATIONS & CHART EXPLANATIONS
                </h2>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
                {item.visualizationsList.map((viz, vIdx) => (
                  <div
                    key={vIdx}
                    style={{
                      padding: "20px",
                      borderRadius: "14px",
                      backgroundColor: "#F7F7F4",
                      border: "1px solid #E2E2DE",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between"
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                        <span
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.68rem",
                            fontWeight: 700,
                            color: "#111111",
                            textTransform: "uppercase",
                            letterSpacing: "0.04em",
                            padding: "2px 8px",
                            backgroundColor: "#ECECE8",
                            borderRadius: "4px"
                          }}
                        >
                          {viz.type}
                        </span>
                        {viz.value && (
                          <span
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: "0.72rem",
                              fontWeight: 700,
                              color: "#111111",
                              backgroundColor: "#E8C547",
                              padding: "2px 8px",
                              borderRadius: "4px"
                            }}
                          >
                            {viz.value}
                          </span>
                        )}
                      </div>
                      <h3
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.98rem",
                          fontWeight: 700,
                          color: "#111111",
                          margin: "0 0 10px 0"
                        }}
                      >
                        {viz.name}
                      </h3>
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.88rem",
                          lineHeight: 1.6,
                          color: "#444444",
                          margin: 0
                        }}
                      >
                        {viz.explanation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* LAB ACTIVITIES BREAKDOWN (LAB 2: ACTIVITIES 1, 2, 3) */}
          {item.activities && item.activities.length > 0 && (
            <div
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #DCDCDC",
                borderRadius: "20px",
                padding: "clamp(24px, 3.5vw, 40px)",
                display: "flex",
                flexDirection: "column",
                gap: "28px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#E8C547" }} />
                <h2
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "#111111",
                    textTransform: "uppercase",
                    margin: 0
                  }}
                >
                  LAB ACTIVITIES BREAKDOWN
                </h2>
              </div>

              {item.activities.map((act, aIdx) => (
                <div
                  key={aIdx}
                  style={{
                    padding: "22px",
                    borderRadius: "14px",
                    backgroundColor: "#F7F7F4",
                    border: "1px solid #E2E2DE"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
                    <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.08rem", fontWeight: 700, color: "#111111", margin: 0 }}>
                      {act.title}
                    </h3>
                    {act.chartType && (
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 600, padding: "3px 8px", borderRadius: "6px", backgroundColor: "#FFFFFF", border: "1px solid #DCDCDC", color: "#111111" }}>
                        CHART: {act.chartType}
                      </span>
                    )}
                  </div>

                  {act.purpose && (
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.90rem", color: "#333333", margin: "0 0 10px 0", lineHeight: 1.55 }}>
                      <strong>Purpose: </strong>{act.purpose}
                    </p>
                  )}

                  {act.whatItShows && (
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.90rem", color: "#555555", margin: "0 0 14px 0", lineHeight: 1.55 }}>
                      <strong>What it shows: </strong>{act.whatItShows}
                    </p>
                  )}

                  {/* Energy levels score grid if Activity 2 */}
                  {act.energyLevels && (
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "10px", marginTop: "12px" }}>
                      {act.energyLevels.map((lvl, lIdx) => (
                        <div key={lIdx} style={{ backgroundColor: "#FFFFFF", padding: "12px", borderRadius: "10px", border: "1px solid #DCDCDC", textAlign: "center" }}>
                          <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.70rem", fontWeight: 700, color: "#666666", textTransform: "uppercase" }}>
                            {lvl.period}
                          </span>
                          <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "1.35rem", fontWeight: 700, color: "#111111", margin: "4px 0" }}>
                            {lvl.score}
                          </span>
                          <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.68rem", color: "#777777" }}>
                            {lvl.note}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Real-world visualizations if Activity 3 */}
                  {act.visualizations && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
                      {act.visualizations.map((v, vIdx) => (
                        <div key={vIdx} style={{ backgroundColor: "#FFFFFF", padding: "14px 18px", borderRadius: "10px", border: "1px solid #E2E2DE" }}>
                          <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", fontWeight: 700, color: "#111111", margin: "0 0 6px 0" }}>
                            {v.name}
                          </h4>
                          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", color: "#444444", margin: "0 0 4px 0", lineHeight: 1.5 }}>
                            <strong>What it shows: </strong>{v.whatItShows}
                          </p>
                          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", color: "#666666", margin: 0, lineHeight: 1.5 }}>
                            <strong>Why it is useful: </strong>{v.whyUseful}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* LAB 3: CHEAT SHEET CATEGORIES */}
          {item.cheatSheetSections && item.cheatSheetSections.length > 0 && (
            <div
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #DCDCDC",
                borderRadius: "20px",
                padding: "clamp(24px, 3.5vw, 40px)",
                display: "flex",
                flexDirection: "column",
                gap: "28px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#E8C547" }} />
                  <h2
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      color: "#111111",
                      textTransform: "uppercase",
                      margin: 0
                    }}
                  >
                    TYPES OF DATA VISUALIZATION: CHARTS, GRAPHS &amp; MAPS CHEAT SHEET
                  </h2>
                </div>

                {item.linkedInUrl && (
                  <a
                    href={item.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "5px 12px",
                      borderRadius: "6px",
                      backgroundColor: "#0A66C2",
                      color: "#FFFFFF",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.70rem",
                      fontWeight: 600,
                      textDecoration: "none"
                    }}
                  >
                    <Linkedin size={11} />
                    <span>VIEW ON LINKEDIN</span>
                    <ExternalLink size={11} />
                  </a>
                )}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {item.cheatSheetSections.map((sec, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      padding: "22px",
                      borderRadius: "14px",
                      backgroundColor: "#F7F7F4",
                      border: "1px solid #E2E2DE"
                    }}
                  >
                    <div style={{ marginBottom: "16px" }}>
                      <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.02rem", fontWeight: 700, color: "#111111", margin: "0 0 6px 0" }}>
                        {sec.title}
                      </h3>
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", color: "#666666", margin: 0 }}>
                        {sec.description}
                      </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px" }}>
                      {sec.items.map((it, iIdx) => (
                        <div
                          key={iIdx}
                          style={{
                            backgroundColor: "#FFFFFF",
                            padding: "16px",
                            borderRadius: "10px",
                            border: "1px solid #DCDCDC",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between"
                          }}
                        >
                          <div>
                            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                              <span style={{ width: "4px", height: "12px", borderRadius: "2px", backgroundColor: "#E8C547" }} />
                              <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", fontWeight: 700, color: "#111111", margin: 0 }}>
                                {it.name}
                              </h4>
                            </div>
                            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.84rem", color: "#444444", lineHeight: 1.5, margin: "0 0 8px 0" }}>
                              <strong>Best For: </strong>{it.useCase}
                            </p>
                          </div>
                          <div style={{ backgroundColor: "#F9F9F7", padding: "8px 10px", borderRadius: "6px", border: "1px solid #EFEFEA", fontSize: "0.78rem", color: "#666666" }}>
                            <strong style={{ color: "#111111" }}>Pro Tip: </strong>{it.tip}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* LAB 4: BLOG PUBLICATION SECTIONS */}
          {item.blogSections && item.blogSections.length > 0 && (
            <div
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #DCDCDC",
                borderRadius: "20px",
                padding: "clamp(24px, 3.5vw, 40px)",
                display: "flex",
                flexDirection: "column",
                gap: "24px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#E8C547" }} />
                  <h2
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      color: "#111111",
                      textTransform: "uppercase",
                      margin: 0
                    }}
                  >
                    FROM LEARNING TO LINKEDIN: BLOG ARTICLE CONTENT
                  </h2>
                </div>

                {item.linkedInUrl && (
                  <a
                    href={item.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "5px 12px",
                      borderRadius: "6px",
                      backgroundColor: "#0A66C2",
                      color: "#FFFFFF",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.70rem",
                      fontWeight: 600,
                      textDecoration: "none"
                    }}
                  >
                    <Linkedin size={11} />
                    <span>OFFICIAL ARTICLE LINK</span>
                    <ExternalLink size={11} />
                  </a>
                )}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {item.blogSections.map((sec, bIdx) => (
                  <div
                    key={bIdx}
                    style={{
                      padding: "20px 24px",
                      borderRadius: "14px",
                      backgroundColor: "#F7F7F4",
                      border: "1px solid #E2E2DE"
                    }}
                  >
                    <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.04rem", fontWeight: 700, color: "#111111", margin: "0 0 10px 0" }}>
                      {sec.heading}
                    </h3>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", lineHeight: 1.65, color: "#444444", margin: 0 }}>
                      {sec.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* LAB 5: FOUNDATIONS & TAXONOMY STUDY NOTES */}
          {item.notesSections && item.notesSections.length > 0 && (
            <div
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #DCDCDC",
                borderRadius: "20px",
                padding: "clamp(24px, 3.5vw, 40px)",
                display: "flex",
                flexDirection: "column",
                gap: "24px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#E8C547" }} />
                  <h2
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      color: "#111111",
                      textTransform: "uppercase",
                      margin: 0
                    }}
                  >
                    LEARNING ACTIVITY: FOUNDATIONS &amp; TAXONOMY STUDY NOTES
                  </h2>
                </div>

                {item.googleDocUrl && (
                  <a
                    href={item.googleDocUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "5px 12px",
                      borderRadius: "6px",
                      backgroundColor: "#111111",
                      color: "#FFFFFF",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.70rem",
                      fontWeight: 600,
                      textDecoration: "none"
                    }}
                  >
                    <FileText size={11} />
                    <span>VIEW FULL GOOGLE DOC</span>
                    <ExternalLink size={11} />
                  </a>
                )}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {item.notesSections.map((sec, nIdx) => (
                  <div
                    key={nIdx}
                    style={{
                      padding: "22px",
                      borderRadius: "14px",
                      backgroundColor: "#F7F7F4",
                      border: "1px solid #E2E2DE"
                    }}
                  >
                    <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.02rem", fontWeight: 700, color: "#111111", margin: "0 0 8px 0" }}>
                      {sec.title}
                    </h3>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "#333333", margin: "0 0 14px 0", fontWeight: 500, lineHeight: 1.55 }}>
                      {sec.summary}
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      {sec.details.map((det, dIdx) => (
                        <div key={dIdx} style={{ display: "flex", alignItems: "flex-start", gap: "8px", backgroundColor: "#FFFFFF", padding: "10px 14px", borderRadius: "8px", border: "1px solid #EFEFEA" }}>
                          <span style={{ color: "#E8C547", fontWeight: 700, lineHeight: 1.4 }}>•</span>
                          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.84rem", color: "#555555", lineHeight: 1.5 }}>
                            {det}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* LAB 6: UNDERSTANDING AUDIENCE & CONTEXT EXCEL PRACTICALS */}
          {item.problems && item.problems.length > 0 && (
            <div
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #DCDCDC",
                borderRadius: "20px",
                padding: "clamp(24px, 3.5vw, 40px)",
                display: "flex",
                flexDirection: "column",
                gap: "32px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#E8C547" }} />
                  <h2
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      color: "#111111",
                      textTransform: "uppercase",
                      margin: 0
                    }}
                  >
                    LAB PRACTICAL: AUDIENCE &amp; CONTEXT PROBLEMS (EXCEL)
                  </h2>
                </div>

                {item.googleDocUrl && (
                  <a
                    href={item.googleDocUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "5px 12px",
                      borderRadius: "6px",
                      backgroundColor: "#111111",
                      color: "#FFFFFF",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.70rem",
                      fontWeight: 600,
                      textDecoration: "none"
                    }}
                  >
                    <FileText size={11} />
                    <span>VIEW LAB 6 GOOGLE DOC</span>
                    <ExternalLink size={11} />
                  </a>
                )}
              </div>

              {item.problems.map((p, pIdx) => (
                <div
                  key={pIdx}
                  style={{
                    padding: "24px",
                    borderRadius: "16px",
                    backgroundColor: "#F7F7F4",
                    border: "1px solid #DCDCDC",
                    display: "flex",
                    flexDirection: "column",
                    gap: "22px"
                  }}
                >
                  {/* Problem Header */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
                    <div>
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 700, color: "#E8C547", backgroundColor: "#111111", padding: "3px 8px", borderRadius: "4px", letterSpacing: "0.06em" }}>
                        {p.problemNum}
                      </span>
                      <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1.15rem", fontWeight: 700, color: "#111111", margin: "8px 0 0 0" }}>
                        {p.title}
                      </h3>
                    </div>
                  </div>

                  {/* Scenario */}
                  <div style={{ backgroundColor: "#FFFFFF", padding: "16px 20px", borderRadius: "10px", border: "1px solid #E2E2DE" }}>
                    <strong style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.06em", color: "#888888", textTransform: "uppercase", marginBottom: "6px" }}>
                      SCENARIO &amp; DECISION CONTEXT
                    </strong>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.90rem", color: "#333333", lineHeight: 1.6, margin: 0 }}>
                      {p.scenario}
                    </p>
                  </div>

                  {/* Raw Data Table */}
                  {p.rawDataTable && (
                    <div style={{ backgroundColor: "#FFFFFF", padding: "16px 20px", borderRadius: "10px", border: "1px solid #E2E2DE", overflowX: "auto" }}>
                      <strong style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.06em", color: "#888888", textTransform: "uppercase", marginBottom: "10px" }}>
                        COLLECTED RAW DATASET
                      </strong>
                      <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-sans)", fontSize: "0.82rem" }}>
                        <thead>
                          <tr style={{ backgroundColor: "#ECECE8", borderBottom: "1px solid #DCDCDC" }}>
                            {p.rawDataTable[0].department && (
                              <>
                                <th style={{ padding: "8px 12px", textAlign: "left", fontWeight: 700, color: "#111111" }}>Department</th>
                                <th style={{ padding: "8px 12px", textAlign: "center", fontWeight: 700, color: "#111111" }}>2023 Placement</th>
                                <th style={{ padding: "8px 12px", textAlign: "center", fontWeight: 700, color: "#111111" }}>2024 Placement</th>
                                <th style={{ padding: "8px 12px", textAlign: "center", fontWeight: 700, color: "#111111" }}>2025 Placement</th>
                              </>
                            )}
                            {p.rawDataTable[0].student && (
                              <>
                                <th style={{ padding: "8px 12px", textAlign: "left", fontWeight: 700, color: "#111111" }}>Student</th>
                                <th style={{ padding: "8px 12px", textAlign: "center", fontWeight: 700, color: "#111111" }}>Weekly Study (Hrs)</th>
                                <th style={{ padding: "8px 12px", textAlign: "center", fontWeight: 700, color: "#111111" }}>Attendance %</th>
                                <th style={{ padding: "8px 12px", textAlign: "center", fontWeight: 700, color: "#111111" }}>Exam Marks (/100)</th>
                              </>
                            )}
                          </tr>
                        </thead>
                        <tbody>
                          {p.rawDataTable.map((row, rIdx) => (
                            <tr key={rIdx} style={{ borderBottom: "1px solid #EFEFEA", backgroundColor: rIdx % 2 === 0 ? "#FFFFFF" : "#FBFBFA" }}>
                              {row.department && (
                                <>
                                  <td style={{ padding: "8px 12px", fontWeight: 600, color: "#111111" }}>{row.department}</td>
                                  <td style={{ padding: "8px 12px", textAlign: "center", color: "#444444" }}>{row.y2023}</td>
                                  <td style={{ padding: "8px 12px", textAlign: "center", color: "#444444" }}>{row.y2024}</td>
                                  <td style={{ padding: "8px 12px", textAlign: "center", fontWeight: 700, color: "#111111" }}>{row.y2025}</td>
                                </>
                              )}
                              {row.student && (
                                <>
                                  <td style={{ padding: "8px 12px", fontWeight: 600, color: "#111111" }}>{row.student}</td>
                                  <td style={{ padding: "8px 12px", textAlign: "center", color: "#444444" }}>{row.studyHours} hrs</td>
                                  <td style={{ padding: "8px 12px", textAlign: "center", color: "#444444" }}>{row.attendance}</td>
                                  <td style={{ padding: "8px 12px", textAlign: "center", fontWeight: 700, color: "#111111" }}>{row.marks}</td>
                                </>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Step 1 & Step 2: Context & Audience */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "14px" }}>
                    {/* Context */}
                    <div style={{ backgroundColor: "#FFFFFF", padding: "16px 20px", borderRadius: "10px", border: "1px solid #E2E2DE" }}>
                      <strong style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.06em", color: "#888888", textTransform: "uppercase", marginBottom: "10px" }}>
                        STEP 1: CONTEXT IDENTIFICATION
                      </strong>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        {p.context.map((c, cIdx) => (
                          <div key={cIdx} style={{ fontSize: "0.82rem" }}>
                            <span style={{ fontWeight: 600, color: "#111111" }}>{c.element}: </span>
                            <span style={{ color: "#555555" }}>{c.answer}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Audience */}
                    <div style={{ backgroundColor: "#FFFFFF", padding: "16px 20px", borderRadius: "10px", border: "1px solid #E2E2DE" }}>
                      <strong style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.06em", color: "#888888", textTransform: "uppercase", marginBottom: "10px" }}>
                        STEP 2: AUDIENCE ANALYSIS
                      </strong>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        {p.audience.map((a, aIdx) => (
                          <div key={aIdx} style={{ fontSize: "0.82rem" }}>
                            <span style={{ fontWeight: 600, color: "#111111" }}>{a.question} </span>
                            <span style={{ color: "#555555" }}>{a.answer}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Audience-Context Matrix */}
                  <div style={{ backgroundColor: "#FFFFFF", padding: "18px 20px", borderRadius: "10px", border: "1px solid #E2E2DE", overflowX: "auto" }}>
                    <strong style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.06em", color: "#888888", textTransform: "uppercase", marginBottom: "10px" }}>
                      STEP 3: AUDIENCE–CONTEXT MATRIX (7-W FRAMEWORK)
                    </strong>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-sans)", fontSize: "0.82rem" }}>
                      <thead>
                        <tr style={{ backgroundColor: "#ECECE8", borderBottom: "1px solid #DCDCDC" }}>
                          <th style={{ padding: "8px 12px", textAlign: "left", width: "120px", fontWeight: 700, color: "#111111" }}>Dimension</th>
                          <th style={{ padding: "8px 12px", textAlign: "left", fontWeight: 700, color: "#111111" }}>Analytical Alignment</th>
                        </tr>
                      </thead>
                      <tbody>
                        {p.matrix.map((m, mIdx) => (
                          <tr key={mIdx} style={{ borderBottom: "1px solid #EFEFEA", backgroundColor: mIdx % 2 === 0 ? "#FFFFFF" : "#FBFBFA" }}>
                            <td style={{ padding: "8px 12px", fontWeight: 700, color: "#111111" }}>{m.dimension}</td>
                            <td style={{ padding: "8px 12px", color: "#444444" }}>{m.answer}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Step 4: Purpose & Selected Excel Chart */}
                  <div style={{ backgroundColor: "#111111", color: "#FFFFFF", padding: "18px 22px", borderRadius: "10px" }}>
                    <strong style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.06em", color: "#E8C547", textTransform: "uppercase", marginBottom: "6px" }}>
                      STEP 4: PURPOSE &amp; EXCEL CHART SELECTION
                    </strong>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "10px" }}>
                      <span style={{ fontSize: "1rem", fontWeight: 700, color: "#FFFFFF" }}>{p.purposeAndChart.chartBuilt}</span>
                      <span style={{ backgroundColor: "#282828", color: "#E8C547", padding: "2px 8px", borderRadius: "4px", fontSize: "0.72rem", fontWeight: 600 }}>
                        PURPOSE: {p.purposeAndChart.purpose}
                      </span>
                    </div>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", color: "#CCCCCC", lineHeight: 1.55, margin: "0 0 8px 0" }}>
                      <strong style={{ color: "#FFFFFF" }}>Justification: </strong>{p.purposeAndChart.justification}
                    </p>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "#999999", lineHeight: 1.5, margin: 0 }}>
                      <strong style={{ color: "#E8C547" }}>Details: </strong>{p.purposeAndChart.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 4. CODE SNIPPETS (FOR PROGRAMMING LABS) */}
          {item.codeSnippets && item.codeSnippets.length > 0 && (
            <div
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #DCDCDC",
                borderRadius: "20px",
                padding: "clamp(24px, 3.5vw, 40px)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "18px" }}>
                <Code2 size={16} style={{ color: "#E8C547" }} />
                <h2
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "#111111",
                    textTransform: "uppercase",
                    margin: 0
                  }}
                >
                  04 // CODE IMPLEMENTATION & ARCHITECTURE
                </h2>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {item.codeSnippets.map((snippet, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      borderRadius: "12px",
                      overflow: "hidden",
                      border: "1px solid #222222",
                      backgroundColor: "#111111"
                    }}
                  >
                    <div
                      style={{
                        padding: "10px 16px",
                        backgroundColor: "#1A1A1A",
                        borderBottom: "1px solid #282828",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ fontFamily: "monospace", fontSize: "0.78rem", color: "#E8C547", fontWeight: 600 }}>
                          {snippet.filename || snippet.title}
                        </span>
                        <span style={{ fontSize: "0.66rem", color: "#888888", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                          {snippet.language}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleCopyCode(snippet.code, sIdx)}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          padding: "4px 10px",
                          borderRadius: "6px",
                          backgroundColor: "#282828",
                          border: "none",
                          color: "#FFFFFF",
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.70rem",
                          fontWeight: 500,
                          cursor: "pointer",
                          transition: "background-color 150ms ease"
                        }}
                      >
                        {copiedSnippetIndex === sIdx ? (
                          <>
                            <Check size={12} style={{ color: "#E8C547" }} />
                            <span>COPIED</span>
                          </>
                        ) : (
                          <>
                            <Copy size={12} />
                            <span>COPY</span>
                          </>
                        )}
                      </button>
                    </div>

                    <pre
                      style={{
                        margin: 0,
                        padding: "18px 20px",
                        fontFamily: "Consolas, Monaco, monospace",
                        fontSize: "0.82rem",
                        lineHeight: 1.6,
                        color: "#E6E6E6",
                        overflowX: "auto",
                        backgroundColor: "#111111"
                      }}
                    >
                      <code>{snippet.code}</code>
                    </pre>

                    {snippet.description && (
                      <div
                        style={{
                          padding: "10px 16px",
                          backgroundColor: "#181818",
                          borderTop: "1px solid #252525",
                          fontSize: "0.78rem",
                          color: "#999999"
                        }}
                      >
                        {snippet.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. IN-PAGE DOCUMENT PREVIEW (PDF DELIVERABLE) */}
          {isPdf && (
            <div
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #DCDCDC",
                borderRadius: "20px",
                padding: "clamp(24px, 3.5vw, 40px)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px", flexWrap: "wrap", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <FileText size={16} style={{ color: "#E8C547" }} />
                  <h2
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      color: "#111111",
                      textTransform: "uppercase",
                      margin: 0
                    }}
                  >
                    ACADEMIC DELIVERABLE // PDF PREVIEW
                  </h2>
                </div>

                <a
                  href={item.file}
                  download
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    backgroundColor: "#111111",
                    color: "#FFFFFF",
                    textDecoration: "none",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    transition: "all 180ms ease"
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
                  <Download size={13} />
                  <span>DOWNLOAD ORIGINAL PDF</span>
                </a>
              </div>

              <div
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  border: "1px solid #DCDCDC",
                  overflow: "hidden",
                  backgroundColor: "#F7F7F4"
                }}
              >
                <iframe
                  src={`${item.file}#view=FitH`}
                  title={`${item.title} Document Viewer`}
                  style={{
                    width: "100%",
                    height: "520px",
                    border: "none",
                    display: "block"
                  }}
                />
              </div>
            </div>
          )}

          {/* 6. SUPPORTING FILES & DELIVERABLES */}
          {item.supportingFiles && item.supportingFiles.length > 0 && (
            <div
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #DCDCDC",
                borderRadius: "20px",
                padding: "clamp(24px, 3.5vw, 40px)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "18px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#E8C547" }} />
                <h2
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "#111111",
                    textTransform: "uppercase",
                    margin: 0
                  }}
                >
                  SUPPORTING FILES & FINAL SUBMISSIONS
                </h2>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "14px" }}>
                {item.supportingFiles.map((file, fIdx) => (
                  <div
                    key={fIdx}
                    style={{
                      padding: "16px 20px",
                      borderRadius: "12px",
                      border: "1px solid #DCDCDC",
                      backgroundColor: "#F7F7F4",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "12px"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "8px",
                          backgroundColor: "#111111",
                          color: "#FFFFFF",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.70rem",
                          fontWeight: 700
                        }}
                      >
                        {file.format || "DOC"}
                      </div>
                      <div>
                        <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", fontWeight: 600, color: "#111111", lineHeight: 1.3 }}>
                          {file.name}
                        </div>
                        {file.size && (
                          <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.70rem", color: "#777777", marginTop: "2px" }}>
                            {file.size} · {file.type || "Deliverable"}
                          </div>
                        )}
                      </div>
                    </div>

                    <a
                      href={file.url}
                      download
                      style={{
                        padding: "8px 12px",
                        borderRadius: "6px",
                        backgroundColor: "#111111",
                        color: "#FFFFFF",
                        border: "none",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.74rem",
                        fontWeight: 600,
                        transition: "all 180ms ease"
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
                      <Download size={13} />
                      <span>GET</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7. FINDINGS & RESULTS */}
          {((item.insights && item.insights.length > 0) || (item.highlights && item.highlights.length > 0)) && (
            <div
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #DCDCDC",
                borderRadius: "20px",
                padding: "clamp(24px, 3.5vw, 40px)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "18px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#E8C547" }} />
                <h2
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "#111111",
                    textTransform: "uppercase",
                    margin: 0
                  }}
                >
                  05 // KEY FINDINGS & EMPIRICAL RESULTS
                </h2>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {(item.insights || item.highlights).map((insight, iIdx) => (
                  <div
                    key={iIdx}
                    style={{
                      padding: "14px 20px",
                      backgroundColor: "#F7F7F4",
                      borderLeft: "4px solid #E8C547",
                      borderRadius: "0 10px 10px 0"
                    }}
                  >
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.94rem", lineHeight: 1.6, color: "#111111", margin: 0, fontWeight: 500 }}>
                      "{insight}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 8. CONCLUSION & LEARNING OUTCOMES */}
          {(item.conclusion || item.learningOutcomes) && (
            <div
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #DCDCDC",
                borderRadius: "20px",
                padding: "clamp(24px, 3.5vw, 40px)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#E8C547" }} />
                <h2
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "#111111",
                    textTransform: "uppercase",
                    margin: 0
                  }}
                >
                  06 // CONCLUSION & LEARNING OUTCOMES
                </h2>
              </div>

              {item.conclusion && (
                <div style={{ marginBottom: item.learningOutcomes ? "18px" : 0 }}>
                  <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "0.96rem", fontWeight: 600, color: "#111111", marginBottom: "6px" }}>
                    Final Takeaway
                  </h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.94rem", lineHeight: 1.65, color: "#444444", margin: 0 }}>
                    {item.conclusion}
                  </p>
                </div>
              )}

              {item.learningOutcomes && (
                <div style={{ paddingTop: item.conclusion ? "16px" : 0, borderTop: item.conclusion ? "1px solid #EFEFEF" : "none" }}>
                  <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "0.96rem", fontWeight: 600, color: "#111111", marginBottom: "6px" }}>
                    Competencies & Methodological Growth
                  </h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.94rem", lineHeight: 1.65, color: "#444444", margin: 0 }}>
                    {item.learningOutcomes}
                  </p>
                </div>
              )}
            </div>
          )}

        </div>

        {/* BOTTOM PAGINATION & NAVIGATION BAR */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #DCDCDC",
            borderRadius: "20px",
            padding: "24px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.03)"
          }}
        >
          {adjacent.prev ? (
            <Link
              to={`/assignments/${adjacent.prev.id}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                color: "#111111",
                fontFamily: "var(--font-sans)",
                fontSize: "0.82rem",
                fontWeight: 600
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#E8C547"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#111111"}
            >
              <ArrowLeft size={14} />
              <span>PREVIOUS: {adjacent.prev.title}</span>
            </Link>
          ) : <div />}

          <Link
            to="/dashboards"
            style={{
              padding: "8px 18px",
              borderRadius: "8px",
              backgroundColor: "#F7F7F4",
              border: "1px solid #DCDCDC",
              textDecoration: "none",
              color: "#111111",
              fontFamily: "var(--font-sans)",
              fontSize: "0.80rem",
              fontWeight: 600
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#111111";
              e.currentTarget.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#F7F7F4";
              e.currentTarget.style.color = "#111111";
            }}
          >
            ALL WORK LIBRARY
          </Link>

          {adjacent.next ? (
            <Link
              to={`/assignments/${adjacent.next.id}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                color: "#111111",
                fontFamily: "var(--font-sans)",
                fontSize: "0.82rem",
                fontWeight: 600
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#E8C547"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#111111"}
            >
              <span>NEXT: {adjacent.next.title}</span>
              <ArrowUpRight size={14} style={{ color: "#E8C547" }} />
            </Link>
          ) : <div />}
        </div>

      </div>

      {/* ACCESSIBLE LIGHTBOX MODAL FOR FULL-SIZE IMAGE */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(17, 17, 17, 0.85)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            animation: "fadeIn 180ms ease"
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "92vw",
              maxHeight: "92vh",
              backgroundColor: "#FFFFFF",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 24px 64px rgba(0, 0, 0, 0.35)",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <div
              style={{
                padding: "14px 20px",
                borderBottom: "1px solid #DCDCDC",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#FFFFFF"
              }}
            >
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", fontWeight: 600, color: "#111111" }}>
                {item.title} // FULL-SIZE PREVIEW
              </span>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                aria-label="Close lightbox"
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  backgroundColor: "#F7F7F4",
                  border: "1px solid #DCDCDC",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#111111"
                }}
              >
                <X size={16} />
              </button>
            </div>

            <div style={{ padding: "16px", overflow: "auto", display: "flex", justifyContent: "center", backgroundColor: "#F7F7F4" }}>
              <img
                src={lightboxImage}
                alt={item.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  objectFit: "contain",
                  borderRadius: "10px",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)"
                }}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
