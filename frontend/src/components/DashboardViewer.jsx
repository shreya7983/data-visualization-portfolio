import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Maximize2, Minimize2, Move } from 'lucide-react';

export default function DashboardViewer({ image, title, altText }) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);

  const containerRef = useRef(null);

  const ZOOM_STEP = 0.25;
  const MIN_SCALE = 1;
  const MAX_SCALE = 3.5;

  const handleZoomIn = useCallback(() => {
    setScale((prev) => Math.min(MAX_SCALE, Number((prev + ZOOM_STEP).toFixed(2))));
  }, []);

  const handleZoomOut = useCallback(() => {
    setScale((prev) => {
      const next = Math.max(MIN_SCALE, Number((prev - ZOOM_STEP).toFixed(2)));
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  }, []);

  const handleReset = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen((prev) => !prev);
    handleReset();
  }, [handleReset]);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (e.key === '+' || e.key === '=') {
        e.preventDefault();
        handleZoomIn();
      } else if (e.key === '-' || e.key === '_') {
        e.preventDefault();
        handleZoomOut();
      } else if (e.key === '0') {
        e.preventDefault();
        handleReset();
      } else if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
          handleReset();
        } else if (scale > 1) {
          handleReset();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleZoomIn, handleZoomOut, handleReset, isFullscreen, scale]);

  // Mouse pan handlers
  const handleMouseDown = (e) => {
    if (scale <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || scale <= 1) return;
    const maxX = (scale - 1) * 350;
    const maxY = (scale - 1) * 250;
    const newX = Math.max(-maxX, Math.min(maxX, e.clientX - dragStart.x));
    const newY = Math.max(-maxY, Math.min(maxY, e.clientY - dragStart.y));
    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch drag handlers for mobile
  const handleTouchStart = (e) => {
    if (scale <= 1 || e.touches.length !== 1) return;
    setIsDragging(true);
    setDragStart({
      x: e.touches[0].clientX - position.x,
      y: e.touches[0].clientY - position.y
    });
  };

  const handleTouchMove = (e) => {
    if (!isDragging || scale <= 1 || e.touches.length !== 1) return;
    const maxX = (scale - 1) * 300;
    const maxY = (scale - 1) * 200;
    const newX = Math.max(-maxX, Math.min(maxX, e.touches[0].clientX - dragStart.x));
    const newY = Math.max(-maxY, Math.min(maxY, e.touches[0].clientY - dragStart.y));
    setPosition({ x: newX, y: newY });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const zoomPercent = Math.round(scale * 100);

  return (
    <div
      style={{
        position: isFullscreen ? 'fixed' : 'relative',
        inset: isFullscreen ? 0 : 'auto',
        zIndex: isFullscreen ? 99999 : 1,
        backgroundColor: isFullscreen ? 'rgba(25, 56, 59, 0.98)' : '#19383B',
        backdropFilter: isFullscreen ? 'blur(16px)' : 'none',
        borderRadius: isFullscreen ? 0 : '24px',
        border: isFullscreen ? 'none' : '1px solid var(--color-border-subtle)',
        boxShadow: isFullscreen ? 'none' : 'var(--shadow-lift)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 300ms ease'
      }}
    >
      {/* Viewer Header / Status Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 20px',
          backgroundColor: 'rgba(25, 56, 59, 0.85)',
          borderBottom: '1px solid rgba(110, 133, 133, 0.3)',
          color: 'var(--color-soft-cream)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: scale > 1 ? 'var(--color-warm-gold)' : 'var(--color-deep-crimson)',
              boxShadow: scale > 1 ? '0 0 8px var(--color-warm-gold)' : 'none',
              transition: 'all 200ms ease'
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.74rem',
              letterSpacing: '0.06em',
              fontWeight: 500,
              color: 'var(--color-soft-cream)'
            }}
          >
            {isFullscreen ? 'FULL EXHIBIT VIEW' : 'EXPLORE THE DASHBOARD'} // {title.toUpperCase()}
          </span>
          {scale > 1 && (
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.70rem',
                backgroundColor: 'rgba(184, 149, 90, 0.25)',
                color: 'var(--color-warm-gold)',
                padding: '2px 8px',
                borderRadius: '10px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontWeight: 500
              }}
            >
              <Move size={11} /> DRAG TO PAN
            </span>
          )}
        </div>

        {/* Minimal Editorial Zoom & Navigation Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button
            onClick={handleZoomOut}
            disabled={scale <= MIN_SCALE}
            aria-label="Zoom Out (-)"
            title="Zoom Out (-)"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 249, 240, 0.10)',
              border: '1px solid rgba(255, 249, 240, 0.20)',
              color: scale <= MIN_SCALE ? 'rgba(255, 249, 240, 0.35)' : 'var(--color-soft-cream)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: scale <= MIN_SCALE ? 'not-allowed' : 'pointer',
              transition: 'all 150ms ease'
            }}
          >
            <ZoomOut size={14} />
          </button>

          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.78rem',
              fontWeight: 500,
              minWidth: '52px',
              textAlign: 'center',
              color: scale > 1 ? 'var(--color-warm-gold)' : 'var(--color-soft-cream)'
            }}
          >
            {zoomPercent}%
          </span>

          <button
            onClick={handleZoomIn}
            disabled={scale >= MAX_SCALE}
            aria-label="Zoom In (+)"
            title="Zoom In (+)"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 249, 240, 0.10)',
              border: '1px solid rgba(255, 249, 240, 0.20)',
              color: scale >= MAX_SCALE ? 'rgba(255, 249, 240, 0.35)' : 'var(--color-soft-cream)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: scale >= MAX_SCALE ? 'not-allowed' : 'pointer',
              transition: 'all 150ms ease'
            }}
          >
            <ZoomIn size={14} />
          </button>

          <button
            onClick={handleReset}
            disabled={scale === 1 && position.x === 0 && position.y === 0}
            aria-label="Reset View (0)"
            title="Reset to 100% (0)"
            style={{
              padding: '6px 12px',
              marginLeft: '4px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255, 249, 240, 0.10)',
              border: '1px solid rgba(255, 249, 240, 0.20)',
              color: 'var(--color-soft-cream)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              letterSpacing: '0.04em',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer'
            }}
          >
            <RotateCcw size={12} />
            RESET
          </button>

          <button
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? 'Exit Fullscreen (Esc)' : 'Open Fullscreen'}
            title={isFullscreen ? 'Exit Fullscreen (Esc)' : 'Open Fullscreen'}
            style={{
              padding: '6px 14px',
              marginLeft: '6px',
              borderRadius: '12px',
              backgroundColor: isFullscreen ? 'var(--color-warm-gold)' : 'var(--color-deep-crimson)',
              border: '1px solid rgba(255, 249, 240, 0.3)',
              color: 'var(--color-soft-cream)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              letterSpacing: '0.04em',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(47, 93, 98, 0.4)'
            }}
          >
            {isFullscreen ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
            {isFullscreen ? 'EXIT' : 'FOCUS'}
          </button>
        </div>
      </div>

      {/* Main Interactive Canvas Area */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        data-cursor={scale > 1 ? '' : 'EXPLORE'}
        style={{
          position: 'relative',
          width: '100%',
          height: isFullscreen ? 'calc(100vh - 60px)' : '620px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
          userSelect: 'none',
          overflow: 'hidden',
          backgroundColor: '#170E10'
        }}
      >
        <div
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transformOrigin: 'center center',
            transition: isDragging ? 'none' : 'transform 250ms cubic-bezier(0.16, 1, 0.3, 1)',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Dashboard Image — Preserved crystal clear without tints or filters */}
          <img
            src={image}
            alt={altText || `${title} interactive exhibition model`}
            draggable={false}
            style={{
              maxWidth: '96%',
              maxHeight: '94%',
              objectFit: 'contain',
              display: 'block',
              pointerEvents: 'none'
            }}
          />
        </div>

        {/* Minimal Keyboard Shortcut Hint in bottom-left */}
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '16px',
            backgroundColor: 'rgba(30, 18, 21, 0.75)',
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(184, 149, 90, 0.2)',
            borderRadius: '10px',
            padding: '4px 10px',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.68rem',
            fontWeight: 500,
            color: 'rgba(255, 249, 240, 0.75)',
            letterSpacing: '0.04em',
            pointerEvents: 'none'
          }}
        >
          KEYBOARD: [ + ] ZOOM IN  [ - ] ZOOM OUT  [ 0 ] RESET  [ ESC ] CLOSE
        </div>
      </div>
    </div>
  );
}
