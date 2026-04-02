import React, { useEffect, useRef } from 'react';

// Skip particles on touch devices — saves battery, no mouse interaction needed
const isCoarsePointer =
  typeof window !== 'undefined' &&
  window.matchMedia('(pointer: coarse)').matches;

const ParticleBackground = () => {
  if (isCoarsePointer) return null;

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const MAX_PARTICLES = 90;
    const MAX_DIST = 160;          // max connection distance
    const MAX_DIST_SQ = MAX_DIST * MAX_DIST;

    let mouse = { x: -9999, y: -9999, radius: 140 };
    let time = 0;

    // ── Mouse ──────────────────────────────────────────────
    const onMouseMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onMouseOut  = () => { mouse.x = -9999; mouse.y = -9999; };
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseout',  onMouseOut,  { passive: true });

    // ── Resize ─────────────────────────────────────────────
    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        w = canvas.width  = window.innerWidth;
        h = canvas.height = window.innerHeight;
        particles = [];
        init();
      }, 200);
    };
    window.addEventListener('resize', onResize, { passive: true });

    // ── Particle class ─────────────────────────────────────
    class Particle {
      constructor() { this.reset(); }

      reset() {
        this.x      = Math.random() * w;
        this.y      = Math.random() * h;
        this.vx     = (Math.random() - 0.5) * 0.7;
        this.vy     = (Math.random() - 0.5) * 0.7;
        this.radius = Math.random() * 2 + 1;       // 1 – 3 px
        // Twinkling: each particle has its own phase & speed
        this.twinklePhase = Math.random() * Math.PI * 2;
        this.twinkleSpeed = 0.02 + Math.random() * 0.03;
        // Subtle color shift per particle (cyan ↔ slight violet)
        this.hue   = 185 + Math.random() * 40;     // 185–225
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.twinklePhase += this.twinkleSpeed;

        // Wrap around edges
        if (this.x > w + 5) this.x = -5;
        else if (this.x < -5) this.x = w + 5;
        if (this.y > h + 5) this.y = -5;
        else if (this.y < -5) this.y = h + 5;

        // Mouse repulsion
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distSq = dx * dx + dy * dy;
        const rSq    = mouse.radius * mouse.radius;
        if (distSq < rSq && distSq > 0) {
          const dist  = Math.sqrt(distSq);
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 2.5;
          this.y -= (dy / dist) * force * 2.5;
        }
      }

      // Glowing dot with twinkling brightness
      draw() {
        const twinkle = 0.55 + 0.45 * Math.sin(this.twinklePhase);  // 0.1 – 1.0
        const alpha   = twinkle;

        // Outer glow (subtle halo)
        const glow = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius * 3.5
        );
        glow.addColorStop(0,   `hsla(${this.hue}, 80%, 60%, ${alpha * 0.18})`);
        glow.addColorStop(1,   `hsla(${this.hue}, 80%, 60%, 0)`);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Core dot — softer brightness
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 70%, 65%, ${alpha * 0.65})`;
        ctx.fill();
      }
    }

    // ── Init ───────────────────────────────────────────────
    let particles = [];
    function init() {
      for (let i = 0; i < MAX_PARTICLES; i++) {
        particles.push(new Particle());
      }
    }

    // ── Animate ────────────────────────────────────────────
    let rafId;

    function drawLines() {
      const len = particles.length;
      for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
          const dx     = particles[i].x - particles[j].x;
          const dy     = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;
          if (distSq > MAX_DIST_SQ) continue;

          const dist = Math.sqrt(distSq);

          // Opacity: fade to zero at MAX_DIST, brightest when close
          // Also add a gentle global pulse tied to time
          const proximity = 1 - dist / MAX_DIST;
          const pulse     = 0.7 + 0.3 * Math.sin(time * 0.04 + i * 0.3);
          const alpha     = proximity * proximity * 0.30 * pulse;  // softer falloff

          // Hue shifts between the two particles' hues for a gradient feel
          const hueAvg = (particles[i].hue + particles[j].hue) / 2;

          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);

          // Line: gradient from particle i color → particle j color
          const grad = ctx.createLinearGradient(
            particles[i].x, particles[i].y,
            particles[j].x, particles[j].y
          );
          grad.addColorStop(0, `hsla(${particles[i].hue}, 100%, 70%, ${alpha})`);
          grad.addColorStop(1, `hsla(${particles[j].hue}, 100%, 70%, ${alpha})`);

          ctx.strokeStyle = grad;
          ctx.lineWidth = proximity * 0.9;   // subtle line weight
          ctx.stroke();
        }
      }
    }

    // Mouse proximity highlight — lines near cursor glow brighter
    function drawMouseLines() {
      const len = particles.length;
      for (let i = 0; i < len; i++) {
        const dx     = particles[i].x - mouse.x;
        const dy     = particles[i].y - mouse.y;
        const distSq = dx * dx + dy * dy;
        const rSq    = mouse.radius * mouse.radius;
        if (distSq > rSq) continue;

        const proximity = 1 - Math.sqrt(distSq) / mouse.radius;

        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `hsla(${particles[i].hue}, 70%, 65%, ${proximity * 0.18})`;
        ctx.lineWidth = proximity * 1.2;
        ctx.stroke();
      }
    }

    function animate() {
      time++;
      ctx.clearRect(0, 0, w, h);

      // Draw connecting lines first (behind dots)
      drawLines();
      drawMouseLines();

      // Draw particles on top
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      rafId = requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseout',  onMouseOut);
      window.removeEventListener('resize',    onResize);
      clearTimeout(resizeTimer);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[-2]"
      style={{ opacity: 1 }}
    />
  );
};

export default ParticleBackground;
