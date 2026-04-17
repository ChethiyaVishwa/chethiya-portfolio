import React, { useRef, useEffect } from 'react';

const words = [
  "Software Engineer", "✦",
  "Web Developer",    "✦",
  "Creative Thinker", "✦",
  "Problem Solver",   "✦",
  "UI/UX Enthusiast", "✦",
];

const Strip = React.forwardRef(({ prefix, hidden }, ref) => (
  <div
    ref={ref}
    className="flex items-center gap-8 px-6 font-bold tracking-[0.2em] text-sm uppercase flex-shrink-0 whitespace-nowrap"
    aria-hidden={hidden ? 'true' : undefined}
  >
    {words.map((word, i) => (
      <span
        key={`${prefix}-${i}`}
        className={word === '✦' ? 'text-red' : 'text-cyan/80'}
      >
        {word}
      </span>
    ))}
  </div>
));
Strip.displayName = 'Strip';

const TextTickerDivider = () => {
  const trackRef = useRef(null);
  const stripRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const strip = stripRef.current;
    if (!track || !strip) return;

    // Set the CSS variable to the real measured pixel width of one strip.
    // The keyframe uses this instead of -50% to avoid width:max-content
    // miscomputation bugs in iOS Safari / older Android Chrome.
    const applyWidth = () => {
      const w = strip.getBoundingClientRect().width;
      if (w > 0) {
        // CSS var drives the 100% keyframe: translate3d(-Wpx, 0, 0)
        track.style.setProperty('--ticker-transform', `translate3d(-${w}px, 0, 0)`);
      }
    };

    applyWidth();

    // Re-apply after fonts load (text width can change before font swap)
    document.fonts?.ready?.then(applyWidth);

    // Re-apply on orientation change / resize
    window.addEventListener('resize', applyWidth, { passive: true });
    return () => window.removeEventListener('resize', applyWidth);
  }, []);

  return (
    <div className="relative w-full z-30 pointer-events-none">
      {/* overflow-hidden on the direct animated-child parent — required for
          correct clipping on iOS Safari / Android Chrome */}
      <div className="w-full overflow-hidden bg-[#02050f] border-y border-cyan/40 py-4 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
        {/*
          .ticker-track (defined in index.css):
          - GPU compositor animation via translate3d
          - webkit prefixes for older Safari / WebView
          - Exempted from prefers-reduced-motion kill via explicit override
          --ticker-transform CSS var set above to exact pixel offset
        */}
        <div ref={trackRef} className="ticker-track">
          <Strip ref={stripRef} prefix="a" hidden={false} />
          <Strip prefix="b" hidden={true} />
        </div>
      </div>
    </div>
  );
};

export default TextTickerDivider;
