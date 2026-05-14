import React, { useRef, useState, useEffect, useCallback } from 'react';

// ─── Detect low-end / touch devices once ────────────────────────────────────
const isCoarsePointer =
  typeof window !== 'undefined' &&
  window.matchMedia('(pointer: coarse)').matches;

// ─── Video metadata ──────────────────────────────────────────────────────────
const VIDEOS = [
  {
    id: 1,
    src: 'images/coding.mp4',
    // Static frame used on mobile AND as preview thumbnails on desktop
    poster: 'images/coding_thumb.jpg', // fallback: video will show first frame
    label: 'Code in Motion',
    description:
      'Writing clean, efficient code with modern development workflows and best practices.',
    color: 'cyan',
  },
  {
    id: 2,
    src: 'images/coding2.mp4',
    poster: 'images/coding2_thumb.jpg',
    label: 'Building the Future',
    description:
      'Crafting scalable full-stack applications that solve real-world problems.',
    color: 'red',
  },
];

// ─── Tiny helper: swap video src smoothly ────────────────────────────────────
function swapVideoSrc(videoEl, newSrc) {
  if (!videoEl) return;
  videoEl.pause();
  videoEl.src = newSrc;
  videoEl.load();
  // play() returns a Promise — catch to silence AbortError on fast switches
  const p = videoEl.play();
  if (p) p.catch(() => {});
}

// ─── Static thumbnail for mobile & preview strip ─────────────────────────────
// Shows the video's first frame via a hidden video preload trick, or falls
// back to a solid gradient if the poster image is missing.
const VideoThumb = ({ vid, isActive, onClick }) => (
  <button
    onClick={onClick}
    aria-label={`Switch to ${vid.label}`}
    className={[
      'relative rounded-xl overflow-hidden border transition-all duration-300',
      isActive
        ? vid.color === 'cyan'
          ? 'border-cyan/60 shadow-lg shadow-cyan/20'
          : 'border-red/60 shadow-lg shadow-red/20'
        : 'border-white/[0.08] hover:border-white/25',
    ].join(' ')}
  >
    {/* Static gradient background — always cheap */}
    <div
      className={`w-full h-24 sm:h-28 flex items-center justify-center ${
        vid.color === 'cyan'
          ? 'bg-gradient-to-br from-cyan/20 via-gray-900 to-gray-800'
          : 'bg-gradient-to-br from-red/20 via-gray-900 to-gray-800'
      }`}
    >
      {/* Simple SVG icon — zero cost */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className={`w-10 h-10 ${vid.color === 'cyan' ? 'text-cyan/60' : 'text-red/60'}`}
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    </div>

    {/* Label overlay */}
    <div className="absolute inset-0 bg-black/30 flex items-end p-3">
      <span
        className={`text-xs font-semibold tracking-wide ${
          vid.color === 'cyan' ? 'text-cyan' : 'text-red'
        }`}
      >
        {vid.label}
      </span>
    </div>

    {/* Active ring */}
    {isActive && (
      <div
        className={`absolute inset-0 border-2 rounded-xl pointer-events-none ${
          vid.color === 'cyan' ? 'border-cyan/60' : 'border-red/60'
        }`}
      />
    )}
  </button>
);

// ─── Main Component ──────────────────────────────────────────────────────────
const CodingSection = () => {
  const [activeId, setActiveId] = useState(1);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  // Track whether the section is visible (IntersectionObserver)
  const isVisibleRef = useRef(false);

  const activeVid = VIDEOS.find((v) => v.id === activeId);
  const base = import.meta.env.BASE_URL;

  // ── Play / pause based on viewport visibility (all devices) ─────────────────
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        const vid = videoRef.current;
        if (!vid) return;
        if (entry.isIntersecting) {
          const p = vid.play();
          if (p) p.catch(() => {});
        } else {
          vid.pause();
        }
      },
      { threshold: 0.25 } // start playing when 25% visible
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // ── Load first video src on mount (all devices) ──────────────────────────────
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.src = `${base}${VIDEOS[0].src}`;
    vid.load();
    // Don't autoplay yet — IntersectionObserver will handle it
  }, [base]);

  // ── Handle tab switch ──────────────────────────────────────────────────────
  const handleSwitch = useCallback(
    (id) => {
      if (id === activeId) return;
      setActiveId(id);
      const newVid = VIDEOS.find((v) => v.id === id);
      swapVideoSrc(videoRef.current, `${base}${newVid.src}`);
    },
    [activeId, base]
  );

  return (
    <section
      id="coding"
      ref={sectionRef}
      className="relative py-20 sm:py-28 px-4 overflow-hidden bg-transparent"
    >
      {/* ── Background Overlay — matches About / Skills sections ── */}
      <div className="absolute inset-0 bg-gradient-to-l from-red/5 via-transparent to-cyan/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-gray-700/10 to-transparent" />

      {/* ── Decorative blur orbs — hidden on mobile to save composite layers ── */}
      <div className="hidden sm:block absolute top-20 left-20 w-64 h-64 bg-cyan/8 rounded-full blur-3xl pointer-events-none" />
      <div className="hidden sm:block absolute bottom-20 right-20 w-80 h-80 bg-red/8 rounded-full blur-3xl pointer-events-none" />
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan/5 to-red/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center mb-14 sm:mb-20">
          <p className="text-red text-sm sm:text-base font-semibold tracking-widest uppercase animate-text-reveal delay-100">
            Passion &amp; Craft
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight text-white mt-4 font-rubik-wet-paint">
            The Art of{' '}
            <span className="text-cyan animate-neon-glow delay-300">Coding</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-5 animate-text-reveal delay-500">
            Every line of code is a brushstroke. Here's a glimpse into my
            development journey — where logic meets creativity.
          </p>
        </div>

        {/* ── Tab Switcher ── */}
        <div className="flex gap-3 mb-10 w-full max-w-sm mx-auto sm:max-w-none sm:justify-center sm:w-auto">
          {VIDEOS.map((v) => {
            const isActive = activeId === v.id;
            const activeStyle =
              v.color === 'cyan'
                ? 'bg-gradient-to-r from-cyan to-cyan/60 text-black border-cyan shadow-lg shadow-cyan/25 scale-105'
                : 'bg-gradient-to-r from-red to-red/60 text-white border-red shadow-lg shadow-red/25 scale-105';
            const idleStyle =
              v.color === 'cyan'
                ? 'bg-transparent text-white/60 border-white/20 hover:border-cyan/60 hover:text-cyan hover:scale-105'
                : 'bg-transparent text-white/60 border-white/20 hover:border-red/60 hover:text-red hover:scale-105';
            return (
              <button
                key={v.id}
                onClick={() => handleSwitch(v.id)}
                className={[
                  'flex-1 min-w-0 px-3 py-2 text-xs sm:flex-none sm:px-6 sm:py-2.5 sm:text-sm rounded-full font-semibold tracking-wide border transition-all duration-300 text-center whitespace-nowrap',
                  isActive ? activeStyle : idleStyle,
                ].join(' ')}
              >
                {v.label}
              </button>
            );
          })}
        </div>

        {/* ── Main layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">

          {/* ── Video / Static Poster ── */}
          <div className="lg:col-span-3 relative group">
            {/* Glow ring */}
            <div
              className={`absolute -inset-1 rounded-2xl blur-lg opacity-40 transition-all duration-700 ${
                activeVid.color === 'cyan'
                  ? 'bg-gradient-to-r from-cyan/50 to-cyan/10'
                  : 'bg-gradient-to-r from-red/50 to-red/10'
              }`}
            />

            <div
              className="relative rounded-2xl overflow-hidden border border-white/[0.07]"
              style={{
                background:
                  'linear-gradient(135deg,rgba(255,255,255,0.015) 0%,rgba(14,22,45,0.07) 50%,rgba(255,255,255,0.01) 100%)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
            >
              {/* Top edge highlight */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent z-10" />

              {/* ── Single <video> for all devices — muted + playsInline required for mobile autoplay ── */}
              <video
                ref={videoRef}
                loop
                muted
                playsInline
                preload="none"
                className="w-full aspect-video object-cover"
                style={{ willChange: 'transform' }}
              />

              {/* Colour overlay on hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  activeVid.color === 'cyan'
                    ? 'bg-gradient-to-tr from-cyan/10 to-transparent'
                    : 'bg-gradient-to-tr from-red/10 to-transparent'
                }`}
              />

              {/* Bottom label bar */}
              <div className="absolute bottom-0 left-0 right-0 px-5 py-3 flex items-center gap-2 bg-black/40 backdrop-blur-sm border-t border-white/[0.06] z-10">
                <div
                  className={`w-2 h-2 rounded-full animate-pulse ${
                    activeVid.color === 'cyan' ? 'bg-cyan' : 'bg-red'
                  }`}
                />
                <span className="text-white/80 text-xs sm:text-sm font-medium tracking-wide">
                  {activeVid.label}
                </span>
              </div>
            </div>
          </div>

          {/* ── Info Panel ── */}
          <div className="lg:col-span-2 space-y-8">

            {/* Active video info card */}
            <div
              className="p-6 rounded-2xl border border-white/[0.06] space-y-4 relative"
              style={{
                background:
                  'linear-gradient(135deg,rgba(255,255,255,0.015) 0%,rgba(14,22,45,0.07) 50%,rgba(255,255,255,0.01) 100%)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-t-2xl" />
              <h3
                className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${
                  activeVid.color === 'cyan' ? 'text-cyan' : 'text-red'
                }`}
              >
                {activeVid.label}
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                {activeVid.description}
              </p>
              <div
                className={`h-0.5 rounded-full transition-all duration-700 ${
                  activeVid.color === 'cyan'
                    ? 'bg-gradient-to-r from-cyan to-transparent'
                    : 'bg-gradient-to-r from-red to-transparent'
                }`}
                style={{ width: '60%' }}
              />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Projects Built', value: '9+',   color: 'cyan' },
                { label: 'Technologies',   value: '15+',  color: 'red'  },
                { label: 'Years Coding',   value: '3+',   color: 'red'  },
                { label: 'Lines of Code',  value: '50K+', color: 'cyan' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`p-4 rounded-xl border text-center transition-all duration-300 hover:scale-105 ${
                    stat.color === 'cyan'
                      ? 'border-cyan/20 hover:border-cyan/50'
                      : 'border-red/20 hover:border-red/50'
                  }`}
                  style={{
                    background:
                      'linear-gradient(135deg,rgba(255,255,255,0.01) 0%,rgba(14,22,45,0.05) 100%)',
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  <p
                    className={`text-2xl sm:text-3xl font-bold ${
                      stat.color === 'cyan' ? 'text-cyan' : 'text-red'
                    }`}
                  >
                    {stat.value}
                  </p>
                  <p className="text-white/50 text-xs mt-1 tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div
              className="p-5 rounded-xl border border-white/[0.06] italic"
              style={{
                background:
                  'linear-gradient(135deg,rgba(255,255,255,0.01) 0%,rgba(14,22,45,0.06) 100%)',
                backdropFilter: 'blur(6px)',
              }}
            >
              <p className="text-white/60 text-sm leading-relaxed">
                "Code is not just a skill — it's how I turn ideas into reality
                and problems into solutions."
              </p>
              <p className="text-white/30 text-xs mt-2">— Chethiya Vishwa</p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default CodingSection;
