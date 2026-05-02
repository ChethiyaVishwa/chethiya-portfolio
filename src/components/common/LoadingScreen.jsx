import { useEffect, useState, useRef } from 'react';

/* ─── Detect touch/mobile ─────────────────────────────────────────────────── */
const isMobile = () =>
  typeof window !== 'undefined' &&
  (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);

/* ─── Floating dot canvas (throttled on mobile) ──────────────────────────── */
function DotsCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const mobile = isMobile();
    let animId;
    let particles = [];
    let frame = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const spawn = () => {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        life: 1,
        decay: Math.random() * 0.004 + 0.002,
        size: Math.random() * (mobile ? 1.4 : 2) + 0.4,
      });
    };

    const draw = (p) => {
      ctx.save();
      ctx.globalAlpha = p.life * 0.7;
      ctx.fillStyle = `rgba(0,255,255,${p.life})`;
      ctx.shadowBlur = mobile ? 8 : 14;
      ctx.shadowColor = '#00ffff';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const spawnRate = mobile ? 0.2 : 0.35;

    const tick = () => {
      frame++;
      // On mobile skip every other frame to save battery
      if (mobile && frame % 2 !== 0) {
        animId = requestAnimationFrame(tick);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (Math.random() < spawnRate) spawn();
      particles = particles.filter((p) => p.life > 0);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        draw(p);
      }
      animId = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
}

/* ─── Constants ──────────────────────────────────────────────────────────── */
const NAME = 'CHETHIYA VISHWA';
const LETTERS = NAME.split('');
const COUNTER_DURATION = 3200;
const NAME_REVEAL_STAGGER = 85;

/* ─── Main LoadingScreen ─────────────────────────────────────────────────── */
export default function LoadingScreen({ onDone }) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState('counting');
  const [revealedCount, setRevealedCount] = useState(0);
  const [exitAnim, setExitAnim] = useState(false);

  /* Counter 0 → 100 */
  useEffect(() => {
    if (phase !== 'counting') return;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / COUNTER_DURATION, 1);
      const eased =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      setCount(Math.round(eased * 100));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setCount(100);
        setPhase('revealing');
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [phase]);

  /* Letter-by-letter reveal */
  useEffect(() => {
    if (phase !== 'revealing') return;
    if (revealedCount >= LETTERS.length) {
      const t = setTimeout(() => {
        setExitAnim(true);
        setTimeout(() => onDone?.(), 700);
      }, 900);
      return () => clearTimeout(t);
    }
    const t = setTimeout(
      () => setRevealedCount((c) => c + 1),
      NAME_REVEAL_STAGGER
    );
    return () => clearTimeout(t);
  }, [phase, revealedCount, onDone]);

  return (
    <>
      {/* Inject mobile-safe global styles */}
      <style>{`
        @keyframes ls-dot-pulse {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.3; }
          40%            { transform: scale(1.3); opacity: 1;   }
        }
        @keyframes ls-scanline {
          0%, 100% { opacity: 0.35; transform: scaleX(0.3); }
          50%      { opacity: 1;    transform: scaleX(1);   }
        }
        @keyframes ls-letter-in {
          0%   { opacity: 0; transform: translateY(-28px) scale(0.85); }
          60%  { opacity: 1; transform: translateY(4px)   scale(1.04); }
          100% { opacity: 1; transform: translateY(0)     scale(1);    }
        }
      `}</style>

      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99999,
          background: '#000000',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          /* Safe area padding for notched phones */
          paddingTop: 'env(safe-area-inset-top)',
          paddingBottom: 'env(safe-area-inset-bottom)',
          paddingLeft: 'env(safe-area-inset-left)',
          paddingRight: 'env(safe-area-inset-right)',
          transition: 'opacity 0.65s ease, transform 0.65s ease',
          opacity: exitAnim ? 0 : 1,
          transform: exitAnim ? 'scale(1.03)' : 'scale(1)',
          pointerEvents: exitAnim ? 'none' : 'all',
          WebkitFontSmoothing: 'antialiased',
        }}
      >
        {/* Dots canvas */}
        <DotsCanvas />

        {/* Subtle cyan glow at center */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 70% 45% at 50% 50%, rgba(0,255,255,0.06) 0%, transparent 70%)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />

        {/* ── Main content block ── */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'clamp(1rem, 3vw, 1.6rem)',
            width: '100%',
            /* Fluid max-width: full on mobile, capped on desktop */
            maxWidth: 'min(520px, 88vw)',
            padding: '0 clamp(1.2rem, 5vw, 2.5rem)',
            boxSizing: 'border-box',
          }}
        >
          {/* LOADING label */}
          <div
            style={{
              fontFamily: "'Josefin Sans', sans-serif",
              fontSize: 'clamp(0.55rem, 3.5vw, 0.78rem)',
              fontWeight: 300,
              letterSpacing: 'clamp(0.2em, 1.5vw, 0.42em)',
              textTransform: 'uppercase',
              color: '#ffffff',
              textShadow: '0 0 10px rgba(0,255,255,0.55)',
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
              whiteSpace: 'nowrap',
            }}
          >
            <span>Loading</span>
            <PulsingDots />
          </div>

          {/* ── HERO: Progress bar ── */}
          <div style={{ width: '100%', position: 'relative' }}>
            {/* Track */}
            <div
              style={{
                width: '100%',
                height: 'clamp(2px, 0.4vw, 3px)',
                background: 'rgba(0,255,255,0.1)',
                borderRadius: '4px',
                overflow: 'visible',
                position: 'relative',
              }}
            >
              {/* Fill */}
              <div
                style={{
                  height: '100%',
                  width: `${count}%`,
                  background:
                    'linear-gradient(90deg, rgba(0,255,255,0.5) 0%, #00ffff 75%, #ffffff 100%)',
                  boxShadow: '0 0 12px #00ffff, 0 0 24px rgba(0,255,255,0.45)',
                  borderRadius: '4px',
                  transition: 'width 0.05s linear',
                  position: 'relative',
                }}
              >
                {/* Tip dot */}
                {count > 0 && (
                  <div
                    style={{
                      position: 'absolute',
                      right: 'clamp(-5px, -0.4vw, -4px)',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: 'clamp(6px, 1.2vw, 8px)',
                      height: 'clamp(6px, 1.2vw, 8px)',
                      borderRadius: '50%',
                      background: '#ffffff',
                      boxShadow: '0 0 8px #00ffff, 0 0 18px rgba(0,255,255,0.85)',
                    }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Name reveal */}
          {phase === 'revealing' && (
            <div
              style={{
                marginTop: 'clamp(0.8rem, 2.5vw, 1.2rem)',
                display: 'flex',
                gap: 'clamp(0.01em, 0.3vw, 0.05em)',
                flexWrap: 'wrap',
                justifyContent: 'center',
                /* Prevent letters overflowing on very narrow screens */
                maxWidth: '100%',
              }}
            >
              {LETTERS.map((char, i) => (
                <LetterDrop key={i} char={char} visible={i < revealedCount} />
              ))}
            </div>
          )}
        </div>

        {/* Counter badge — bottom-right, respects safe-area */}
        <div
          style={{
            position: 'absolute',
            bottom: 'clamp(1rem, 4vw, 2rem)',
            right: 'clamp(1rem, 4vw, 2.5rem)',
            zIndex: 10,
            fontFamily: "'Josefin Sans', sans-serif",
            fontSize: 'clamp(0.62rem, 2.8vw, 0.88rem)',
            fontWeight: 600,
            letterSpacing: '0.04em',
            userSelect: 'none',
            lineHeight: 1,
          }}
        >
          <span
            style={{
              color: '#00ffff',
              textShadow: '0 0 8px rgba(0,255,255,0.65)',
            }}
          >
            {String(count).padStart(2, '0')}
          </span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>%</span>
        </div>

        {/* Bottom scan-line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #00ffff, transparent)',
            boxShadow: '0 0 16px #00ffff, 0 0 32px rgba(0,255,255,0.4)',
            animation: 'ls-scanline 3s ease-in-out infinite',
          }}
        />
      </div>
    </>
  );
}

/* ─── Pulsing dots ───────────────────────────────────────────────────────── */
function PulsingDots() {
  return (
    <span style={{ display: 'inline-flex', gap: '3px', marginLeft: '5px' }}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            width: 'clamp(3px, 0.8vw, 4px)',
            height: 'clamp(3px, 0.8vw, 4px)',
            borderRadius: '50%',
            background: '#00ffff',
            boxShadow: '0 0 5px #00ffff',
            animation: `ls-dot-pulse 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </span>
  );
}

/* ─── Letter drop ────────────────────────────────────────────────────────── */
function LetterDrop({ char, visible }) {
  return (
    <span
      style={{
        display: 'inline-block',
        fontFamily: "'Josefin Sans', sans-serif",
        /* Mobile-first fluid size: bigger on small screens via vw */
        fontSize: 'clamp(1.1rem, 5.5vw, 1.8rem)',
        fontWeight: 700,
        letterSpacing: 'clamp(0.04em, 0.5vw, 0.1em)',
        color: char === ' ' ? 'transparent' : '#ffffff',
        textShadow: visible
          ? '0 0 14px rgba(255,255,255,0.9), 0 0 32px rgba(0,255,255,0.65), 0 0 60px rgba(0,255,255,0.35)'
          : 'none',
        opacity: visible ? 1 : 0,
        animation: visible ? 'ls-letter-in 0.45s cubic-bezier(0.34,1.56,0.64,1) forwards' : 'none',
        minWidth: char === ' ' ? '0.4em' : undefined,
        userSelect: 'none',
        /* Prevent orphan overflow on 320px devices */
        flexShrink: 0,
      }}
    >
      {char === ' ' ? '\u00a0' : char}
    </span>
  );
}
