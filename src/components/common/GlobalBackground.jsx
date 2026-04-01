import React from 'react';
import ParticleBackground from './ParticleBackground';

const GlobalBackground = () => {
  return (
    <>
      {/* 2. Endless Scrolling Grid */}
      <div className="grid-bg"></div>
      
      {/* 3. Floating Glow Orbs */}
      <div className="orb-container">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      
      {/* 1. Interactive Particle Network */}
      <ParticleBackground />
      
      {/* 4. Static SVG Grain/Noise */}
      <div className="noise-overlay"></div>
    </>
  );
};

export default GlobalBackground;
