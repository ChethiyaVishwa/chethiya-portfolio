import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // Use willReadFrequently: false (default) — no pixel reads needed
    const ctx = canvas.getContext('2d', { alpha: true });

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    // ✅ PERF FIX: reduced particle count significantly
    const isMobile = window.innerWidth < 768;
    const maxParticles = isMobile ? 25 : 50;

    // ✅ PERF FIX: max line-draw distance squared (avoids sqrt until needed)
    const MAX_DIST = 100;
    const MAX_DIST_SQ = MAX_DIST * MAX_DIST;

    let particles = [];
    let mouse = { x: null, y: null, radius: 100 };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseOut = () => {
      mouse.x = undefined;
      mouse.y = undefined;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseout', handleMouseOut, { passive: true });

    let resizeTimer;
    const handleResize = () => {
      // ✅ PERF FIX: debounce resize to avoid cascade resets
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
        particles = [];
        init();
      }, 200);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    class Particle {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.6;
        this.speedY = (Math.random() - 0.5) * 0.6;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > w) this.x = 0;
        else if (this.x < 0) this.x = w;
        if (this.y > h) this.y = 0;
        else if (this.y < 0) this.y = h;

        // ✅ PERF FIX: only repel if mouse is close (skip sqrt with early sq check)
        if (mouse.x && mouse.y) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distSq = dx * dx + dy * dy;
          const radiusSq = mouse.radius * mouse.radius;
          if (distSq < radiusSq && distSq > 0) {
            const distance = Math.sqrt(distSq);
            const force = (mouse.radius - distance) / mouse.radius;
            this.x -= (dx / distance) * force * 2;
            this.y -= (dy / distance) * force * 2;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(56, 189, 248, 0.35)';
        ctx.fill();
      }
    }

    function init() {
      for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
      }
    }

    let animationFrameId;

    function animate() {
      ctx.clearRect(0, 0, w, h);

      // ✅ PERF FIX: batch all line strokes into one path per call
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.12)';
      ctx.lineWidth = 0.6;

      const len = particles.length;
      for (let i = 0; i < len; i++) {
        particles[i].update();
        particles[i].draw();

        // ✅ PERF FIX: use squared distance to skip sqrt for most pairs
        for (let j = i + 1; j < len; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < MAX_DIST_SQ) {
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
          }
        }
      }
      ctx.stroke(); // single stroke call for all lines

      animationFrameId = requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-2]"
      style={{ opacity: 0.6, willChange: 'auto' }}
    />
  );
};

export default ParticleBackground;
