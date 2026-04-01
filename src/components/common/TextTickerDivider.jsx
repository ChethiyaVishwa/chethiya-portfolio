import React from 'react';

const TextTickerDivider = () => {
  const words = [
    "Software Engineer", "✦", 
    "Web Developer", "✦", 
    "Creative Thinker", "✦", 
    "Problem Solver", "✦", 
    "UI/UX Enthusiast", "✦",
    "Software Engineer", "✦", 
    "Web Developer", "✦", 
    "Creative Thinker", "✦", 
    "Problem Solver", "✦", 
    "UI/UX Enthusiast", "✦"
  ];

  return (
    <div className="relative w-full z-30 pointer-events-none overflow-hidden">
      <div className="w-full bg-[#02050f] border-y border-cyan/40 py-4 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* First loop child */}
          <div className="flex items-center gap-8 px-4 text-cyan font-bold tracking-[0.2em] text-sm uppercase flex-shrink-0">
            {words.map((word, index) => (
              <span key={`first-${index}`} className={word === "✦" ? "text-red animate-pulse" : "text-cyan/80"}>
                {word}
              </span>
            ))}
          </div>
          {/* Second loop child for seamless scrolling */}
          <div className="flex items-center gap-8 px-4 text-cyan font-bold tracking-[0.2em] text-sm uppercase flex-shrink-0">
            {words.map((word, index) => (
              <span key={`second-${index}`} className={word === "✦" ? "text-red animate-pulse" : "text-cyan/80"}>
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextTickerDivider;
