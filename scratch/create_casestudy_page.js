import fs from 'fs';
import path from 'path';

const fileContent = `import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
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
  ExternalLink 
} from 'lucide-react';
import { getWorkById, getAdjacentWork, getAllWork } from '../data/workLibraryData';

export default function CaseStudyDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [adjacent, setAdjacent] = useState({ prev: null, next: null, currentIndex: 1, total: 1 });
  const [lightboxImage, setLightboxImage] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copiedSnippetIndex, setCopiedSnippetIndex] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const work = getWorkById(id);
    if (work) {
      setItem(work);
      setAdjacent(getAdjacentWork(work.id));
      setActiveImageIndex(0);
    } else {
      setItem(null);
    }
  }, [id]);

  // Handle ESC key for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setLightboxImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCopyCode = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippetIndex(index);
    setTimeout(() => setCopiedSnippetIndex(null), 2000);
  };

  if (!item) {
    return (
      <main style={{ minHeight: '80vh', paddingTop: '160px', paddingBottom: '120px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#E8C547' }} />
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.74rem', letterSpacing: '0.08em', fontWeight: 600, color: '#111111' }}>
              CASE STUDY ARCHIVE // 404
            </span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 700, color: '#111111', marginBottom: '16px' }}>
            WORK ITEM NOT FOUND
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', color: '#666666', fontSize: '1rem', lineHeight: 1.6, marginBottom: '32px' }}>
            The requested assignment, lab, or case study could not be located in the current repository.
          </p>
          <Link
            to="/dashboards"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              backgroundColor: '#111111',
              color: '#FFFFFF',
              borderRadius: '10px',
              textDecoration: 'none',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.86rem',
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

  // Multi-image selection
  const imageGallery = item.images && item.images.length > 0 
    ? item.images 
    : (item.image ? [{ url: item.image, title: item.title, caption: item.description }] : []);
  const currentImage = imageGallery[activeImageIndex] || imageGallery[0];

  // Check if primary deliverable is a PDF
  const isPdf = item.file && item.file.toLowerCase().endsWith('.pdf');

  return (
    <main style={{ backgroundColor: '#F7F7F4', minHeight: '100vh', paddingTop: '120px', paddingBottom: '140px' }}>
      <div className="container" style={{ maxWidth: '1040px' }}>
        
        {/* Navigation Breadcrumb */}
        <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <Link
            to="/dashboards"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              color: '#111111',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.82rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              transition: 'color 180ms ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#E8C547'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#111111'}
          >
            <ArrowLeft size={15} />
            <span>BACK TO ALL PROJECTS & WORK</span>
          </Link>

          {/* Project Type Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '8px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #DCDCDC'
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#E8C547' }} />
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                color: '#111111',
                textTransform: 'uppercase'
              }}
            >
              {item.projectType || 'CASE STUDY'} {item.num ? `// ${item.num}` : ''}
            </span>
          </div>
        </div>

        {/* ========================================================
            HERO HEADER SECTION
            ========================================= */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #DCDCDC',
            borderRadius: '24px',
            padding: 'clamp(28px, 4.5vw, 52px)',
            marginBottom: '40px',
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)'
          }}
        >
          {/* Metadata Row: Category · Year · Subject */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '18px'
            }}
          >
            {item.category && (
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '5px 12px',
                  borderRadius: '6px',
                  backgroundColor: '#F7F7F4',
                  border: '1px solid #DCDCDC',
                  color: '#111111'
                }}
              >
                {item.category}
              </span>
            )}

            {item.year && (
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  color: '#666666',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <Calendar size={13} style={{ color: '#E8C547' }} />
                <span>{item.year}</span>
              </span>
            )}

            {item.subject && (
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.74rem',
                  fontWeight: 500,
                  color: '#666666'
                }}
              >
                · {item.subject}
              </span>
            )}
          </div>

          {/* Monumental Case Study Title */}
          <h1
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: '#111111',
              margin: '0 0 20px 0'
            }}
          >
            {item.title}
          </h1>

          {/* Short Narrative Overview */}
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(16px, 1.2vw, 19px)',
              lineHeight: 1.65,
              color: '#444444',
              fontWeight: 400,
              maxWidth: '820px',
              margin: '0 0 28px 0'
            }}
          >
            {item.description || item.subtitle || item.objective}
          </p>

          {/* Tools & Teacher Pills Row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              paddingTop: '20px',
              borderTop: '1px solid #EFEFEF'
            }}
          >
            {/* Tools Used */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 600, color: '#888888', letterSpacing: '0.04em' }}>
                TOOLS:
              </span>
              {(item.tools || [item.tool]).filter(Boolean).map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    color: '#111111',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    backgroundColor: '#F7F7F4',
                    border: '1px solid #DCDCDC'
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Teacher / Mentor (Rendered ONLY if provided) */}
            {item.teacher && (
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  color: '#111111',
                  backgroundColor: '#FAFAFA',
                  padding: '5px 12px',
                  borderRadius: '8px',
                  border: '1px solid #E2E2E2'
                }}
              >
                <User size={13} style={{ color: '#E8C547' }} />
                <span>MENTOR: {item.teacher}</span>
              </div>
            )}
          </div>
        </div>

        {/* ========================================================
            ASSIGNMENT QUESTION / BRIEF CALLOUT (IF PROVIDED)
            ========================================= */}
        {item.question && (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #DCDCDC',
              borderLeft: '4px solid #E8C547',
              borderRadius: '16px',
              padding: 'clamp(24px, 3.5vw, 36px)',
              marginBottom: '32px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <BookOpen size={16} style={{ color: '#E8C547' }} />
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: '#111111',
                  textTransform: 'uppercase'
                }}
              >
                ASSIGNMENT BRIEF & QUESTION
              </span>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.05rem',
                lineHeight: 1.65,
                color: '#111111',
                fontWeight: 500,
                margin: 0
              }}
            >
              "{item.question}"
            </p>

            {/* Requirements Checklist if present */}
            {item.requirements && item.requirements.length > 0 && (
              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #EFEFEF' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    color: '#666666',
                    display: 'block',
                    marginBottom: '10px'
                  }}
                >
                  DELIVERABLE REQUIREMENTS:
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {item.requirements.map((req, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <CheckCircle2 size={15} style={{ color: '#E8C547', marginTop: '3px', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.90rem', color: '#333333', lineHeight: 1.5 }}>
                        {req}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================
            VISUAL WORK & OUTPUT SCREENSHOTS (LARGE SHARP PREVIEW)
            ========================================= */}
        {currentImage && (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #DCDCDC',
              borderRadius: '24px',
              padding: 'clamp(20px, 3vw, 32px)',
              marginBottom: '40px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#E8C547' }} />
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    color: '#111111',
                    textTransform: 'uppercase'
                  }}
                >
                  VISUAL ARTIFACT // {currentImage.title || item.title}
                </span>
              </div>

              {/* VIEW FULL-SIZE IMAGE ACTION */}
              <button
                type="button"
                onClick={() => setLightboxImage(currentImage.url)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  backgroundColor: '#111111',
                  color: '#FFFFFF',
                  border: 'none',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  transition: 'all 200ms ease'
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
                <Maximize2 size={13} />
                <span>VIEW FULL-SIZE IMAGE</span>
              </button>
            </div>

            {/* Main Stage Image Container */}
            <div
              onClick={() => setLightboxImage(currentImage.url)}
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #DCDCDC',
                backgroundColor: '#F7F7F4',
                cursor: 'zoom-in',
                position: 'relative'
              }}
            >
              <img
                src={currentImage.url}
                alt={currentImage.title || item.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  maxHeight: '620px',
                  objectFit: 'contain',
                  margin: '0 auto',
                  padding: '12px'
                }}
              />
            </div>

            {/* Caption */}
            {currentImage.caption && (
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.84rem',
                  color: '#666666',
                  marginTop: '12px',
                  marginBottom: imageGallery.length > 1 ? '16px' : 0,
                  fontStyle: 'italic'
                }}
              >
                {currentImage.caption}
              </p>
            )}

            {/* Multiple Images Thumbnails Switcher */}
            {imageGallery.length > 1 && (
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  overflowX: 'auto',
                  paddingTop: '16px',
                  borderTop: '1px solid #EFEFEF'
                }}
              >
                {imageGallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    style={{
                      border: activeImageIndex === idx ? '2px solid #E8C547' : '1px solid #DCDCDC',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      padding: '4px',
                      backgroundColor: '#FFFFFF',
                      cursor: 'pointer',
                      flexShrink: 0,
                      width: '100px',
                      height: '68px',
                      opacity: activeImageIndex === idx ? 1 : 0.65,
                      transition: 'all 180ms ease'
                    }}
                  >
                    <img
                      src={img.url}
                      alt={img.title || `Thumbnail ${idx + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px' }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ========================================================
            CASE STUDY CONTENT SECTIONS GRID
            ========================================= */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '48px' }}>
          
          {/* 1. OBJECTIVE & BACKGROUND */}
          {(item.objective || item.problemStatement || item.background) && (
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #DCDCDC',
                borderRadius: '20px',
                padding: 'clamp(24px, 3.5vw, 40px)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#E8C547' }} />
                <h2
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: '#111111',
                    textTransform: 'uppercase',
                    margin: 0
                  }}
                >
                  01 // BACKGROUND & OBJECTIVES
                </h2>
              </div>

              {item.problemStatement && (
                <div style={{ marginBottom: '16px' }}>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 600, color: '#111111', marginBottom: '6px' }}>
                    The Problem
                  </h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.96rem', lineHeight: 1.65, color: '#444444', margin: 0 }}>
                    {item.problemStatement}
                  </p>
                </div>
              )}

              {item.objective && (
                <div>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', fontWeight: 600, color: '#111111', marginBottom: '6px' }}>
                    Project Purpose & Goal
                  </h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.96rem', lineHeight: 1.65, color: '#444444', margin: 0 }}>
                    {item.objective}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* 2. DATASET & PREPARATION (IF APPLICABLE) */}
          {item.dataset && (
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #DCDCDC',
                borderRadius: '20px',
                padding: 'clamp(24px, 3.5vw, 40px)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#E8C547' }} />
                <h2
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: '#111111',
                    textTransform: 'uppercase',
                    margin: 0
                  }}
                >
                  02 // DATASET ARCHITECTURE
                </h2>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '16px',
                  marginBottom: item.dataCleaning ? '20px' : 0
                }}
              >
                {item.dataset.name && (
                  <div style={{ padding: '14px', backgroundColor: '#F7F7F4', borderRadius: '10px', border: '1px solid #EAEAEA' }}>
                    <span style={{ display: 'block', fontSize: '0.70rem', color: '#777777', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>
                      DATASET NAME
                    </span>
                    <span style={{ fontSize: '0.90rem', fontWeight: 600, color: '#111111' }}>
                      {item.dataset.name}
                    </span>
                  </div>
                )}

                {item.dataset.source && (
                  <div style={{ padding: '14px', backgroundColor: '#F7F7F4', borderRadius: '10px', border: '1px solid #EAEAEA' }}>
                    <span style={{ display: 'block', fontSize: '0.70rem', color: '#777777', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>
                      SOURCE & ORIGIN
                    </span>
                    <span style={{ fontSize: '0.88rem', fontWeight: 500, color: '#222222' }}>
                      {item.dataset.source}
                    </span>
                  </div>
                )}

                {item.dataset.format && (
                  <div style={{ padding: '14px', backgroundColor: '#F7F7F4', borderRadius: '10px', border: '1px solid #EAEAEA' }}>
                    <span style={{ display: 'block', fontSize: '0.70rem', color: '#777777', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>
                      DATA FORMAT
                    </span>
                    <span style={{ fontSize: '0.90rem', fontWeight: 600, color: '#111111' }}>
                      {item.dataset.format}
                    </span>
                  </div>
                )}
              </div>

              {/* Important Columns */}
              {item.dataset.importantColumns && item.dataset.importantColumns.length > 0 && (
                <div style={{ marginTop: '16px' }}>
                  <span style={{ display: 'block', fontSize: '0.72rem', color: '#666666', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>
                    CRITICAL ATTRIBUTE COLUMNS:
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {item.dataset.importantColumns.map((col) => (
                      <code
                        key={col}
                        style={{
                          fontFamily: 'monospace',
                          fontSize: '0.78rem',
                          backgroundColor: '#F7F7F4',
                          border: '1px solid #DCDCDC',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          color: '#111111'
                        }}
                      >
                        {col}
                      </code>
                    ))}
                  </div>
                </div>
              )}

              {/* Data Cleaning */}
              {item.dataCleaning && (
                <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #EFEFEF' }}>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.94rem', fontWeight: 600, color: '#111111', marginBottom: '6px' }}>
                    Data Cleaning & Transformation
                  </h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem', lineHeight: 1.6, color: '#444444', margin: 0 }}>
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
                backgroundColor: '#FFFFFF',
                border: '1px solid #DCDCDC',
                borderRadius: '20px',
                padding: 'clamp(24px, 3.5vw, 40px)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#E8C547' }} />
                <h2
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: '#111111',
                    textTransform: 'uppercase',
                    margin: 0
                  }}
                >
                  03 // PROCESS & METHODOLOGY
                </h2>
              </div>

              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.96rem', lineHeight: 1.7, color: '#333333' }}>
                {(item.methodology || item.myApproach || item.process).split('\\n').map((paragraph, pIdx) => (
                  <p key={pIdx} style={{ margin: '0 0 12px 0' }}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Charts & Techniques used if present */}
              {item.chartsUsed && item.chartsUsed.length > 0 && (
                <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #EFEFEF' }}>
                  <span style={{ display: 'block', fontSize: '0.72rem', color: '#777777', fontWeight: 600, textTransform: 'uppercase', marginBottom: '10px' }}>
                    TECHNIQUES & VISUAL ENCODINGS APPLIED:
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {item.chartsUsed.map((chart) => (
                      <span
                        key={chart}
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.76rem',
                          fontWeight: 600,
                          backgroundColor: '#F7F7F4',
                          border: '1px solid #DCDCDC',
                          borderRadius: '8px',
                          padding: '5px 12px',
                          color: '#111111'
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

          {/* 4. CODE SNIPPETS (FOR PROGRAMMING LABS) */}
          {item.codeSnippets && item.codeSnippets.length > 0 && (
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #DCDCDC',
                borderRadius: '20px',
                padding: 'clamp(24px, 3.5vw, 40px)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
                <Code2 size={16} style={{ color: '#E8C547' }} />
                <h2
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: '#111111',
                    textTransform: 'uppercase',
                    margin: 0
                  }}
                >
                  04 // CODE IMPLEMENTATION & ARCHITECTURE
                </h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {item.codeSnippets.map((snippet, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      borderRadius: '12px',
                      overflow: 'hidden',
                      border: '1px solid #222222',
                      backgroundColor: '#111111'
                    }}
                  >
                    {/* Code Header Bar */}
                    <div
                      style={{
                        padding: '10px 16px',
                        backgroundColor: '#1A1A1A',
                        borderBottom: '1px solid #282828',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontFamily: 'monospace', fontSize: '0.78rem', color: '#E8C547', fontWeight: 600 }}>
                          {snippet.filename || snippet.title}
                        </span>
                        <span style={{ fontSize: '0.66rem', color: '#888888', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          {snippet.language}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleCopyCode(snippet.code, sIdx)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          backgroundColor: '#282828',
                          border: 'none',
                          color: '#FFFFFF',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.70rem',
                          fontWeight: 500,
                          cursor: 'pointer',
                          transition: 'background-color 150ms ease'
                        }}
                      >
                        {copiedSnippetIndex === sIdx ? (
                          <>
                            <Check size={12} style={{ color: '#E8C547' }} />
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

                    {/* Code Body */}
                    <pre
                      style={{
                        margin: 0,
                        padding: '18px 20px',
                        fontFamily: 'Consolas, Monaco, "Courier New", monospace',
                        fontSize: '0.82rem',
                        lineHeight: 1.6,
                        color: '#E6E6E6',
                        overflowX: 'auto',
                        backgroundColor: '#111111'
                      }}
                    >
                      <code>{snippet.code}</code>
                    </pre>

                    {snippet.description && (
                      <div
                        style={{
                          padding: '10px 16px',
                          backgroundColor: '#181818',
                          borderTop: '1px solid #252525',
                          fontSize: '0.78rem',
                          color: '#999999'
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
                backgroundColor: '#FFFFFF',
                border: '1px solid #DCDCDC',
                borderRadius: '20px',
                padding: 'clamp(24px, 3.5vw, 40px)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px', flexWrap: 'wrap', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FileText size={16} style={{ color: '#E8C547' }} />
                  <h2
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: '#111111',
                      textTransform: 'uppercase',
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
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    backgroundColor: '#111111',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    transition: 'all 180ms ease'
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
                  <Download size={13} />
                  <span>DOWNLOAD ORIGINAL PDF</span>
                </a>
              </div>

              {/* PDF Iframe Viewer */}
              <div
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  border: '1px solid #DCDCDC',
                  overflow: 'hidden',
                  backgroundColor: '#F7F7F4'
                }}
              >
                <iframe
                  src={\`\${item.file}#view=FitH\`}
                  title={\`\${item.title} Document Viewer\`}
                  style={{
                    width: '100%',
                    height: '520px',
                    border: 'none',
                    display: 'block'
                  }}
                />
              </div>
            </div>
          )}

          {/* 6. SUPPORTING FILES & DELIVERABLES */}
          {item.supportingFiles && item.supportingFiles.length > 0 && (
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #DCDCDC',
                borderRadius: '20px',
                padding: 'clamp(24px, 3.5vw, 40px)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#E8C547' }} />
                <h2
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: '#111111',
                    textTransform: 'uppercase',
                    margin: 0
                  }}
                >
                  SUPPORTING FILES & FINAL SUBMISSIONS
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
                {item.supportingFiles.map((file, fIdx) => (
                  <div
                    key={fIdx}
                    style={{
                      padding: '16px 20px',
                      borderRadius: '12px',
                      border: '1px solid #DCDCDC',
                      backgroundColor: '#F7F7F4',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '8px',
                          backgroundColor: '#111111',
                          color: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.70rem',
                          fontWeight: 700
                        }}
                      >
                        {file.format || 'DOC'}
                      </div>
                      <div>
                        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.86rem', fontWeight: 600, color: '#111111', lineHeight: 1.3 }}>
                          {file.name}
                        </div>
                        {file.size && (
                          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.70rem', color: '#777777', marginTop: '2px' }}>
                            {file.size} · {file.type || 'Deliverable'}
                          </div>
                        )}
                      </div>
                    </div>

                    <a
                      href={file.url}
                      download
                      style={{
                        padding: '8px 12px',
                        borderRadius: '6px',
                        backgroundColor: '#111111',
                        color: '#FFFFFF',
                        border: 'none',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        transition: 'all 180ms ease'
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
                      <Download size={13} />
                      <span>GET</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7. FINDINGS & RESULTS */}
          {(item.insights && item.insights.length > 0) || (item.highlights && item.highlights.length > 0) ? (
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #DCDCDC',
                borderRadius: '20px',
                padding: 'clamp(24px, 3.5vw, 40px)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#E8C547' }} />
                <h2
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: '#111111',
                    textTransform: 'uppercase',
                    margin: 0
                  }}
                >
                  05 // KEY FINDINGS & EMPIRICAL RESULTS
                </h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {(item.insights || item.highlights).map((insight, iIdx) => (
                  <div
                    key={iIdx}
                    style={{
                      padding: '14px 20px',
                      backgroundColor: '#F7F7F4',
                      borderLeft: '4px solid #E8C547',
                      borderRadius: '0 10px 10px 0'
                    }}
                  >
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.94rem', lineHeight: 1.6, color: '#111111', margin: 0, fontWeight: 500 }}>
                      "{insight}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {/* 8. CONCLUSION & LEARNING OUTCOMES */}
          {(item.conclusion || item.learningOutcomes) && (
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #DCDCDC',
                borderRadius: '20px',
                padding: 'clamp(24px, 3.5vw, 40px)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#E8C547' }} />
                <h2
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: '#111111',
                    textTransform: 'uppercase',
                    margin: 0
                  }}
                >
                  06 // CONCLUSION & LEARNING OUTCOMES
                </h2>
              </div>

              {item.conclusion && (
                <div style={{ marginBottom: item.learningOutcomes ? '18px' : 0 }}>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.96rem', fontWeight: 600, color: '#111111', marginBottom: '6px' }}>
                    Final Takeaway
                  </h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.94rem', lineHeight: 1.65, color: '#444444', margin: 0 }}>
                    {item.conclusion}
                  </p>
                </div>
              )}

              {item.learningOutcomes && (
                <div style={{ paddingTop: item.conclusion ? '16px' : 0, borderTop: item.conclusion ? '1px solid #EFEFEF' : 'none' }}>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.96rem', fontWeight: 600, color: '#111111', marginBottom: '6px' }}>
                    Competencies & Methodological Growth
                  </h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.94rem', lineHeight: 1.65, color: '#444444', margin: 0 }}>
                    {item.learningOutcomes}
                  </p>
                </div>
              )}
            </div>
          )}

        </div>

        {/* ========================================================
            BOTTOM PAGINATION & NAVIGATION BAR
            ========================================= */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #DCDCDC',
            borderRadius: '20px',
            padding: '24px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)'
          }}
        >
          {adjacent.prev ? (
            <Link
              to={\`/assignments/\${adjacent.prev.id}\`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                color: '#111111',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.82rem',
                fontWeight: 600
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#E8C547'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#111111'}
            >
              <ArrowLeft size={14} />
              <span>PREVIOUS: {adjacent.prev.title}</span>
            </Link>
          ) : <div />}

          <Link
            to="/dashboards"
            style={{
              padding: '8px 18px',
              borderRadius: '8px',
              backgroundColor: '#F7F7F4',
              border: '1px solid #DCDCDC',
              textDecoration: 'none',
              color: '#111111',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.80rem',
              fontWeight: 600
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#111111';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#F7F7F4';
              e.currentTarget.style.color = '#111111';
            }}
          >
            ALL WORK LIBRARY
          </Link>

          {adjacent.next ? (
            <Link
              to={\`/assignments/\${adjacent.next.id}\`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                color: '#111111',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.82rem',
                fontWeight: 600
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#E8C547'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#111111'}
            >
              <span>NEXT: {adjacent.next.title}</span>
              <ArrowUpRight size={14} style={{ color: '#E8C547' }} />
            </Link>
          ) : <div />}
        </div>

      </div>

      {/* ========================================================
          ACCESSIBLE LIGHTBOX MODAL FOR FULL-SIZE IMAGE
          ========================================= */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(17, 17, 17, 0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            animation: 'fadeIn 180ms ease'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '92vw',
              maxHeight: '92vh',
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(0, 0, 0, 0.35)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Lightbox Header Bar */}
            <div
              style={{
                padding: '14px 20px',
                borderBottom: '1px solid #DCDCDC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#FFFFFF'
              }}
            >
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 600, color: '#111111' }}>
                {item.title} // FULL-SIZE PREVIEW
              </span>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                aria-label="Close lightbox"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: '#F7F7F4',
                  border: '1px solid #DCDCDC',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#111111'
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Lightbox Image */}
            <div style={{ padding: '16px', overflow: 'auto', display: 'flex', justifyContent: 'center', backgroundColor: '#F7F7F4' }}>
              <img
                src={lightboxImage}
                alt={item.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '80vh',
                  objectFit: 'contain',
                  borderRadius: '10px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
                }}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
`;

const targetFile = path.resolve('/home/singh/dvtdashboard/frontend/src/pages/CaseStudyDetailPage.jsx');
fs.writeFileSync(targetFile, fileContent, 'utf-8');
console.log('Successfully wrote frontend/src/pages/CaseStudyDetailPage.jsx');
