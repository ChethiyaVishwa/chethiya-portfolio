import React from 'react';
import ParticleBackground from './ParticleBackground';

// ✅ PERF: detect touch once at module level
const isCoarsePointer =
  typeof window !== 'undefined' &&
  window.matchMedia('(pointer: coarse)').matches;

const GlobalBackground = () => {
  return (
    <>
      {/* 1. Endless Scrolling Grid */}
      <div className="grid-bg"></div>
      
      {/* 2. Floating Glow Orbs — reduce count on mobile */}
      <div className="orb-container">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        {/* orb-3 skipped on mobile — saves a compositing layer + blur pass */}
        {!isCoarsePointer && <div className="orb orb-3"></div>}
      </div>
      
      {/* 3. Interactive Particle Network — already skipped on touch inside component */}
      <ParticleBackground />
      
      {/* 4. SVG Grain/Noise — feTurbulence filter is VERY expensive on mobile GPUs, skip it */}
      {!isCoarsePointer && <div className="noise-overlay"></div>}
    </>
  );
};

export default GlobalBackground;
