import React, { useEffect, useRef } from 'react';

// ✅ PERF FIX: Pure canvas implementation — no React state, no DOM re-renders per frame
const SPAWN_INTERVAL_MS = 30;   // slightly slower spawn rate
const LIFETIME_MS = 800;
const MAX_BUBBLES = 30;

const CursorBubbles = ({ enabled = true }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const bubbles = [];
    let lastSpawn = 0;
    let mouseX = -9999, mouseY = -9999;
    let rafId;

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const spawnBubble = (x, y) => {
      const now = performance.now();
      if (now - lastSpawn < SPAWN_INTERVAL_MS) return;
      lastSpawn = now;
      if (bubbles.length >= MAX_BUBBLES) bubbles.shift();
      bubbles.push({
        x, y,
        size: 3 + Math.random() * 6,
        driftX: (Math.random() - 0.5) * 50,
        riseY: 30 + Math.random() * 70,
        opacity: 0.25 + Math.random() * 0.35,
        createdAt: now,
      });
    };

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      spawnBubble(mouseX, mouseY);
    };

    const onTouchMove = (e) => {
      const t = e.touches?.[0];
      if (t) spawnBubble(t.clientX, t.clientY);
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      const now = performance.now();

      for (let i = bubbles.length - 1; i >= 0; i--) {
        const b = bubbles[i];
        const elapsed = now - b.createdAt;
        if (elapsed >= LIFETIME_MS) {
          bubbles.splice(i, 1);
          continue;
        }
        const progress = elapsed / LIFETIME_MS; // 0 → 1
        const currX = b.x + b.driftX * progress;
        const currY = b.y - b.riseY * progress;
        const currOpacity = b.opacity * (1 - progress);
        const currSize = b.size * (0.9 + 0.2 * progress);

        const gradient = ctx.createRadialGradient(
          currX - currSize * 0.2, currY - currSize * 0.2, currSize * 0.05,
          currX, currY, currSize
        );
        gradient.addColorStop(0, `rgba(255,255,255,${currOpacity * 0.55})`);
        gradient.addColorStop(0.45, `rgba(6,182,212,${currOpacity * 0.28})`);
        gradient.addColorStop(1, `rgba(6,182,212,0)`);

        ctx.beginPath();
        ctx.arc(currX, currY, currSize, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    document.addEventListener('touchmove', onTouchMove, { passive: true });

    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('touchmove', onTouchMove);
      cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9998,
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default CursorBubbles;
