'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let dotX = 0, dotY = 0, ringX = 0, ringY = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      dotX = e.clientX; dotY = e.clientY;
      dot.style.left = dotX + 'px';
      dot.style.top = dotY + 'px';
    };

    const animateRing = () => {
      ringX += (dotX - ringX) * 0.12;
      ringY += (dotY - ringY) * 0.12;
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
      rafId = requestAnimationFrame(animateRing);
    };

    const onEnter = () => {
      dot.style.width = '12px'; dot.style.height = '12px';
      dot.style.background = 'var(--cyan)';
      ring.style.width = '52px'; ring.style.height = '52px';
      ring.style.borderColor = 'rgba(6,182,212,0.6)';
    };
    const onLeave = () => {
      dot.style.width = '8px'; dot.style.height = '8px';
      dot.style.background = 'var(--violet)';
      ring.style.width = '36px'; ring.style.height = '36px';
      ring.style.borderColor = 'rgba(234, 179, 8,0.6)';
    };

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button, .skill-card, .project-card, .service-card, .stat-card, .contact-card').forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });
    rafId = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
