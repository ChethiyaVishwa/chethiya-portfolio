import React, { useEffect, useRef, useState } from 'react';

const DEFAULT_MAX_BUBBLES = 40;
const DEFAULT_SPAWN_INTERVAL_MS = 18;
const DEFAULT_LIFETIME_MS = 900;

const CursorBubbles = ({
  enabled = true,
  maxBubbles = DEFAULT_MAX_BUBBLES,
  spawnIntervalMs = DEFAULT_SPAWN_INTERVAL_MS,
  lifetimeMs = DEFAULT_LIFETIME_MS,
}) => {
  const [bubbles, setBubbles] = useState([]);
  const nextId = useRef(1);
  const lastSpawnAt = useRef(0);
  const lastPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const spawnAt = (x, y) => {
      lastPos.current = { x, y };
      const now = performance.now();
      if (now - lastSpawnAt.current < spawnIntervalMs) return;
      lastSpawnAt.current = now;

      const id = nextId.current++;
      const size = 3 + Math.random() * 6; // 3px - 9px
      const driftX = (Math.random() - 0.5) * 50; // -25..25
      const riseY = 30 + Math.random() * 70; // 30..100
      const opacity = 0.25 + Math.random() * 0.35; // 0.25..0.60

      const bubble = {
        id,
        x: lastPos.current.x,
        y: lastPos.current.y,
        size,
        driftX,
        riseY,
        opacity,
        createdAt: now,
      };

      setBubbles((prev) => {
        const next = [...prev, bubble];
        // keep recent bubbles only
        if (next.length > maxBubbles) next.splice(0, next.length - maxBubbles);
        return next;
      });
    };

    const onMouseMove = (e) => spawnAt(e.clientX, e.clientY);

    // Pointer events cover most touch + pen + mouse (modern browsers)
    const activePointerId = { current: null };

    const onPointerDown = (e) => {
      // Ignore mouse here to avoid double-spawn (mousemove will handle it)
      if (e.pointerType === 'mouse') return;
      activePointerId.current = e.pointerId;
      spawnAt(e.clientX, e.clientY);
    };

    const onPointerMove = (e) => {
      // Ignore mouse here to avoid double-spawn (mousemove will handle it)
      if (e.pointerType === 'mouse') return;
      // Some mobile browsers only reliably send moves after down
      if (activePointerId.current !== null && e.pointerId !== activePointerId.current) return;
      spawnAt(e.clientX, e.clientY);
    };

    const onPointerUpOrCancel = (e) => {
      if (activePointerId.current === e.pointerId) activePointerId.current = null;
    };

    const onTouchMove = (e) => {
      const t = e.touches?.[0] ?? e.changedTouches?.[0];
      if (!t) return;
      spawnAt(t.clientX, t.clientY);
    };

    const onTouchStart = (e) => {
      const t = e.touches?.[0] ?? e.changedTouches?.[0];
      if (!t) return;
      // immediate bubble on first finger down
      spawnAt(t.clientX, t.clientY);
    };

    const tick = () => {
      const now = performance.now();
      setBubbles((prev) => prev.filter((b) => now - b.createdAt < lifetimeMs));
      rafRef.current = requestAnimationFrame(tick);
    };

    // Use multiple targets for iOS Chrome reliability
    document.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    document.addEventListener('pointerdown', onPointerDown, { passive: true, capture: true });
    document.addEventListener('pointermove', onPointerMove, { passive: true, capture: true });
    document.addEventListener('pointerup', onPointerUpOrCancel, { passive: true, capture: true });
    document.addEventListener('pointercancel', onPointerUpOrCancel, { passive: true, capture: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerup', onPointerUpOrCancel, { passive: true });
    window.addEventListener('pointercancel', onPointerUpOrCancel, { passive: true });

    // Fallback touch listeners for older iOS/WebKit
    document.addEventListener('touchstart', onTouchStart, { passive: true, capture: true });
    document.addEventListener('touchmove', onTouchMove, { passive: true, capture: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousemove', onMouseMove);

      document.removeEventListener('pointerdown', onPointerDown, true);
      document.removeEventListener('pointermove', onPointerMove, true);
      document.removeEventListener('pointerup', onPointerUpOrCancel, true);
      document.removeEventListener('pointercancel', onPointerUpOrCancel, true);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUpOrCancel);
      window.removeEventListener('pointercancel', onPointerUpOrCancel);

      document.removeEventListener('touchstart', onTouchStart, true);
      document.removeEventListener('touchmove', onTouchMove, true);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [enabled, lifetimeMs, maxBubbles, spawnIntervalMs]);

  if (!enabled) return null;

  return (
    <div className="cursor-bubbles" aria-hidden="true">
      {bubbles.map((b) => (
        <span
          key={b.id}
          className="cursor-bubble"
          style={{
            left: b.x,
            top: b.y,
            width: b.size,
            height: b.size,
            opacity: b.opacity,
            // CSS vars used by animation
            ['--drift-x']: `${b.driftX}px`,
            ['--rise-y']: `${b.riseY}px`,
            ['--life-ms']: `${lifetimeMs}ms`,
          }}
        />
      ))}
    </div>
  );
};

export default CursorBubbles;

