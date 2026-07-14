'use client';

import { useEffect, useRef } from 'react';

const COLORS = ['#7C3AED', '#06B6D4', '#9D5CF5', '#22D3EE'];

export default function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W: number, H: number;
    type Node = { x: number; y: number; vx: number; vy: number; r: number; color: string; pulse: number };
    let nodes: Node[] = [];
    const mouse = { x: -9999, y: -9999 };
    const NODE_COUNT = 52;
    const MAX_DIST = 130;
    let rafId: number;

    function hexToRGBA(hex: string, alpha: number) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r},${g},${b},${alpha})`;
    }

    function resize() {
      W = canvas!.width = wrap!.offsetWidth;
      H = canvas!.height = wrap!.offsetHeight;
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        r: Math.random() * 3 + 2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        pulse: Math.random() * Math.PI * 2,
      }));
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);

      // Edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.5;
            const grad = ctx!.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            grad.addColorStop(0, hexToRGBA(nodes[i].color, alpha));
            grad.addColorStop(1, hexToRGBA(nodes[j].color, alpha));
            ctx!.beginPath();
            ctx!.moveTo(nodes[i].x, nodes[i].y);
            ctx!.lineTo(nodes[j].x, nodes[j].y);
            ctx!.strokeStyle = grad;
            ctx!.lineWidth = alpha * 1.6;
            ctx!.stroke();
          }
        }
      }

      // Nodes
      nodes.forEach((n) => {
        n.pulse += 0.03;
        const pr = n.r + Math.sin(n.pulse) * 0.8;

        // Mouse attraction
        const mdx = mouse.x - n.x, mdy = mouse.y - n.y;
        const md = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < 120) { n.vx += (mdx / md) * 0.08; n.vy += (mdy / md) * 0.08; }

        // Speed cap
        const sp = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
        if (sp > 1.5) { n.vx *= 1.5 / sp; n.vy *= 1.5 / sp; }

        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
        n.x = Math.max(0, Math.min(W, n.x));
        n.y = Math.max(0, Math.min(H, n.y));

        // Glow
        const grd = ctx!.createRadialGradient(n.x, n.y, 0, n.x, n.y, pr * 4);
        grd.addColorStop(0, hexToRGBA(n.color, 0.8));
        grd.addColorStop(0.4, hexToRGBA(n.color, 0.3));
        grd.addColorStop(1, hexToRGBA(n.color, 0));
        ctx!.beginPath(); ctx!.arc(n.x, n.y, pr * 4, 0, Math.PI * 2);
        ctx!.fillStyle = grd; ctx!.fill();

        // Core
        ctx!.beginPath(); ctx!.arc(n.x, n.y, pr, 0, Math.PI * 2);
        ctx!.fillStyle = n.color; ctx!.fill();
      });

      rafId = requestAnimationFrame(draw);
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    wrap.addEventListener('mousemove', onMouseMove);
    wrap.addEventListener('mouseleave', onMouseLeave);

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      wrap.removeEventListener('mousemove', onMouseMove);
      wrap.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div ref={wrapRef} style={{ width: '100%', maxWidth: '560px', height: '460px', position: 'relative', zIndex: 1 }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', borderRadius: '24px', display: 'block' }} />
    </div>
  );
}
