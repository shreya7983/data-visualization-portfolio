import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });

  const posRef = useRef({ x: -100, y: -100 });
  const ringRef = useRef({ x: -100, y: -100 });
  const requestRef = useRef();

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch || window.innerWidth < 1024) {
      setEnabled(false);
      return;
    }
    setEnabled(true);

    const handleMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target.closest('[data-cursor]');
      if (target) {
        setIsHovering(true);
        setCursorText(target.getAttribute('data-cursor') || 'EXPLORE');
      } else {
        const link = e.target.closest('a, button');
        if (link) {
          setIsHovering(true);
          setCursorText('');
        } else {
          setIsHovering(false);
          setCursorText('');
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const animate = () => {
      ringRef.current.x += (posRef.current.x - ringRef.current.x) * 0.18;
      ringRef.current.y += (posRef.current.y - ringRef.current.y) * 0.18;
      setRingPos({ x: ringRef.current.x, y: ringRef.current.y });
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  if (!enabled) return null;

  const isFocusBadge = cursorText === 'FOCUS';
  const hasBadge = Boolean(cursorText);

  return (
    <div style={{ pointerEvents: 'none', position: 'fixed', inset: 0, zIndex: 9999 }}>
      {/* Center pinpoint */}
      <div
        style={{
          position: 'fixed',
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: 'translate(-50%, -50%)',
          width: isHovering ? '6px' : '4px',
          height: isHovering ? '6px' : '4px',
          backgroundColor: isFocusBadge ? '#E8C547' : '#111111',
          borderRadius: '50%',
          pointerEvents: 'none',
          transition: 'width 0.2s, height 0.2s, background-color 0.2s',
          zIndex: 10000
        }}
      />

      {/* Outer fluid ring */}
      <div
        style={{
          position: 'fixed',
          left: `${ringPos.x}px`,
          top: `${ringPos.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? (hasBadge ? 1 : 1.3) : 1})`,
          width: hasBadge ? '74px' : '32px',
          height: hasBadge ? '74px' : '32px',
          borderRadius: '50%',
          border: isFocusBadge
            ? '1px solid rgba(232, 197, 71, 0.85)'
            : '1px solid rgba(17, 17, 17, 0.35)',
          backgroundColor: hasBadge
            ? isFocusBadge
              ? 'rgba(17, 17, 17, 0.96)'
              : 'rgba(17, 17, 17, 0.92)'
            : 'rgba(17, 17, 17, 0.05)',
          backdropFilter: hasBadge ? 'blur(4px)' : 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          boxShadow: hasBadge
            ? '0 6px 20px rgba(0, 0, 0, 0.25)'
            : 'none',
          transition: 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1), height 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s, border-color 0.3s',
          zIndex: 9999
        }}
      >
        {hasBadge && (
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '9.5px',
              fontWeight: 600,
              letterSpacing: '1.2px',
              color: isFocusBadge ? '#E8C547' : '#FFFFFF',
              textTransform: 'uppercase'
            }}
          >
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
