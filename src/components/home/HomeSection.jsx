import React, { useState, useEffect } from 'react';

// Detect touch/coarse device once — video autoplay is very heavy on mobile
const isCoarsePointer =
  typeof window !== 'undefined' &&
  window.matchMedia('(pointer: coarse)').matches;

const HomeSection = () => {
  const titles = [
    "Software Engineer",
    "Web Developer",
    "Data Analyst",
    "Project Manager",
    "Business Analyst",
    "Prompt Engineer",
    "Content Creator"
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setTimeout(() => {
          setIsTyping(false);
        }, 50);
      }, 400);
    }, 3500);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section id="home" className="min-h-[85vh] flex items-center px-4 sm:px-6 md:px-10 lg:px-16 pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-16 sm:pb-16 md:pb-20 lg:pb-24 relative">
      {/* Video Background — lightweight mobile video on touch, full video on desktop */}
      <div className="absolute inset-0 w-full h-full z-0 bg-black">
        {isCoarsePointer ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
          >
            <source src={`${import.meta.env.BASE_URL}images/section-bg-mobile.mp4`} type="video/mp4" />
          </video>
        ) : (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
          >
            <source src={`${import.meta.env.BASE_URL}images/section-bg6.mp4`} type="video/mp4" />
          </video>
        )}
        {/* Deep Navy/Black Color Grade Overlay to match the new dark theme */}
        <div className="absolute inset-0 bg-[#04091a]/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[rgba(10,20,50,0.4)] mix-blend-color"></div>
      </div>
      {/* Decorative Elements — hidden on mobile to save GPU composite layers */}
      <div className="hidden sm:block absolute top-20 left-10 w-72 h-72 bg-cyan/10 rounded-full blur-3xl"></div>
      <div className="hidden sm:block absolute bottom-20 right-10 w-96 h-96 bg-red/10 rounded-full blur-3xl"></div>
      <div className="hidden sm:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan/5 to-red/5 rounded-full blur-2xl"></div>
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-20 w-full">
          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6 text-white text-center lg:text-left">
            <div className="space-y-1 sm:space-y-4">
              <p className="text-red text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-wider uppercase animate-text-reveal delay-100">
                Welcome to My Portfolio
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight min-h-[40px] sm:min-h-[80px] md:min-h-[100px] lg:min-h-[120px]">
                Hi, I'm{' '}
                <span className="text-red animate-neon-glow font-rubik-wet-paint">Chethiya Vishwa.</span>
              </h1>
              <div className="mt-0 sm:mt-3 md:mt-4">
                <span
                  className={`title-gradient inline-block relative text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl ${isTyping
                      ? 'opacity-0 scale-95 translate-y-2'
                      : `opacity-100 scale-100 translate-y-0 title-gradient--animating`
                    } transition-all duration-500 ease-out`}
                >
                  {titles[currentTitleIndex]}
                </span>
              </div>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-text-reveal delay-500">
                Passionate about creating innovative solutions and building
                impactful software that makes a difference. I specialize in
                modern web technologies and clean, efficient code.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 lg:gap-5 mt-6 sm:mt-8 mb-3 sm:mb-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 bg-gradient-to-r from-red to-cyan text-white rounded-full hover:from-cyan hover:to-red transition-all duration-500 font-semibold text-sm sm:text-base lg:text-lg animate-gradient-shift delay-700 hover:scale-105 hover:shadow-lg hover:shadow-red/30 group relative overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan/20 to-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#skills"
                className="px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 border-2 border-white text-white rounded-full hover:bg-gray-800 hover:text-white transition-all duration-500 font-semibold text-sm sm:text-base lg:text-lg delay-800 hover:scale-105 hover:shadow-lg hover:shadow-white/30 group relative overflow-hidden"
              >
                <span className="relative z-10">View My Skills</span>
                <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 sm:gap-5 lg:gap-6 pt-1 sm:pt-2 lg:pt-3 justify-center lg:justify-start">
              <a
                href="https://github.com/ChethiyaVishwa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red transition-all duration-300 hover:scale-110 group delay-900"
              >
                <div className="relative">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:animate-glitch" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.645.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <div className="absolute inset-0 bg-red/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan transition-all duration-300 hover:scale-110 group delay-1000"
              >
                <div className="relative">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:animate-hologram" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <div className="absolute inset-0 bg-cyan/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </a>
              <a
                href="https://facebook.com/chethiyavishwa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-all duration-300 hover:scale-110 group delay-1100"
              >
                <div className="relative">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </a>
            </div>
          </div>

          {/* Image — Orbital Tech Showcase */}
          <div className="relative mt-10 lg:mt-0 flex items-center justify-center lg:justify-end">
            {/* Outer positioning wrapper — chips live here, outside the float wrapper */}
            <div className="relative z-10 md:-translate-x-2 lg:-translate-x-3 xl:-translate-x-4" style={{ padding: '0 14%' }}>



              {/* ══ ORBITAL TECH CHIPS — all devices (animated on desktop, static on mobile) ══ */}

                {/* 1 — React  (top-left) */}
                <div className="animate-chip-orbit absolute z-20 select-none"
                  style={{ top: '18%', left: '0%', animationDuration: '4.0s', animationDelay: '0s', '--orbit-dur': '4.0s', '--orbit-delay': '0s' }}>
                  <div className="flex items-center gap-1 lg:gap-2 px-1.5 py-1 lg:px-3 lg:py-2 rounded-lg lg:rounded-xl bg-[#0a1628] border border-[#61DAFB]/50 backdrop-blur-md shadow-[0_0_12px_rgba(97,218,251,0.30),0_2px_8px_rgba(0,0,0,0.5)] lg:shadow-[0_0_18px_rgba(97,218,251,0.35),0_4px_16px_rgba(0,0,0,0.6)]"
                    style={{ color: '#61DAFB' }}>
                    <svg viewBox="0 0 24 24" className="w-3 h-3 lg:w-4 lg:h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.3">
                      <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none"/>
                      <ellipse cx="12" cy="12" rx="10" ry="3.8"/>
                      <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)"/>
                      <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)"/>
                    </svg>
                    <span className="text-[8px] lg:text-[11px] font-bold tracking-wide">React</span>
                  </div>
                </div>

                {/* 2 — TypeScript  (top-right) */}
                <div className="animate-chip-orbit absolute z-20 select-none"
                  style={{ top: '14%', right: '0%', animationDuration: '3.6s', animationDelay: '0.6s', '--orbit-dur': '3.6s', '--orbit-delay': '0.6s' }}>
                  <div className="flex items-center gap-1 lg:gap-2 px-1.5 py-1 lg:px-3 lg:py-2 rounded-lg lg:rounded-xl bg-[#0a1628] border border-[#60a5fa]/50 backdrop-blur-md shadow-[0_0_12px_rgba(96,165,250,0.30),0_2px_8px_rgba(0,0,0,0.5)] lg:shadow-[0_0_18px_rgba(96,165,250,0.35),0_4px_16px_rgba(0,0,0,0.6)]"
                    style={{ color: '#60a5fa' }}>
                    <svg viewBox="0 0 24 24" className="w-3 h-3 lg:w-4 lg:h-4 shrink-0" fill="currentColor">
                      <path d="M3 3h18v18H3V3zm10.5 14.5v-1.8c.5.3 1.1.5 1.7.5.9 0 1.3-.4 1.3-.9 0-.6-.4-.9-1.4-1.2-1.4-.5-2.1-1.1-2.1-2.3 0-1.3 1-2.3 2.8-2.3.7 0 1.3.2 1.8.4v1.8c-.4-.3-1-.5-1.6-.5-.8 0-1.2.3-1.2.8 0 .5.4.8 1.4 1.1 1.5.5 2.1 1.2 2.1 2.4 0 1.4-1 2.3-2.9 2.3-.7 0-1.4-.1-1.9-.3zm-4.5.3H7.5V12H5v-1.5h7V12H9.5v5.8z"/>
                    </svg>
                    <span className="text-[8px] lg:text-[11px] font-bold tracking-wide">TypeScript</span>
                  </div>
                </div>

                {/* 3 — Node.js  (middle-left) */}
                <div className="animate-chip-orbit absolute z-20 select-none"
                  style={{ top: '52%', left: '0%', animationDuration: '4.4s', animationDelay: '1.0s', '--orbit-dur': '4.4s', '--orbit-delay': '1.0s' }}>
                  <div className="flex items-center gap-1 lg:gap-2 px-1.5 py-1 lg:px-3 lg:py-2 rounded-lg lg:rounded-xl bg-[#0a1628] border border-[#4ade80]/50 backdrop-blur-md shadow-[0_0_12px_rgba(74,222,128,0.25),0_2px_8px_rgba(0,0,0,0.5)] lg:shadow-[0_0_18px_rgba(74,222,128,0.30),0_4px_16px_rgba(0,0,0,0.6)]"
                    style={{ color: '#4ade80' }}>
                    <svg viewBox="0 0 24 24" className="w-3 h-3 lg:w-4 lg:h-4 shrink-0" fill="currentColor">
                      <path d="M12 2L2 7l1.63.94L12 4.15l8.37 3.79L22 7 12 2zm0 3.27L5.08 8.5 12 11.73l6.92-3.23L12 5.27zM2 9l1.63.94L12 14.15V20l-8-4.85V9zm20 0v6.15L12 20v-5.85L20.37 9.94 22 9z"/>
                    </svg>
                    <span className="text-[8px] lg:text-[11px] font-bold tracking-wide">Node.js</span>
                  </div>
                </div>

                {/* 4 — Python  (middle-right) */}
                <div className="animate-chip-orbit absolute z-20 select-none"
                  style={{ top: '56%', right: '0%', animationDuration: '3.8s', animationDelay: '1.5s', '--orbit-dur': '3.8s', '--orbit-delay': '1.5s' }}>
                  <div className="flex items-center gap-1 lg:gap-2 px-1.5 py-1 lg:px-3 lg:py-2 rounded-lg lg:rounded-xl bg-[#0a1628] border border-[#facc15]/50 backdrop-blur-md shadow-[0_0_12px_rgba(250,204,21,0.22),0_2px_8px_rgba(0,0,0,0.5)] lg:shadow-[0_0_18px_rgba(250,204,21,0.28),0_4px_16px_rgba(0,0,0,0.6)]"
                    style={{ color: '#facc15' }}>
                    <svg viewBox="0 0 24 24" className="w-3 h-3 lg:w-4 lg:h-4 shrink-0" fill="currentColor">
                      <path d="M11.9 2C7 2 7.3 4.1 7.3 4.1v2.1h4.8v.6H5.5C5.5 6.8 2 7.3 2 12s3.9 4.6 3.9 4.6H7.5v-2.2c0-1.3 1.1-2.4 2.4-2.4h4.8c1.2 0 2.1-1 2.1-2.1V4.2C16.8 2.2 14 2 11.9 2zm-1.3 1.4c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zM12.1 22c4.9 0 4.6-2.1 4.6-2.1v-2.1h-4.8v-.6h6.6c0 0 3.5-.5 3.5-5.2s-3.9-4.6-3.9-4.6H16.5v2.2c0 1.3-1.1 2.4-2.4 2.4H9.3c-1.2 0-2.1 1-2.1 2.1v3.8c0 2 2.8 2.1 4.9 2.1zm1.3-1.4c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z"/>
                    </svg>
                    <span className="text-[8px] lg:text-[11px] font-bold tracking-wide">Python</span>
                  </div>
                </div>

                {/* 5 — SQL  (bottom-left) */}
                <div className="animate-chip-orbit absolute z-20 select-none"
                  style={{ bottom: '10%', left: '0%', animationDuration: '4.8s', animationDelay: '0.3s', '--orbit-dur': '4.8s', '--orbit-delay': '0.3s' }}>
                  <div className="flex items-center gap-1 lg:gap-2 px-1.5 py-1 lg:px-3 lg:py-2 rounded-lg lg:rounded-xl bg-[#0a1628] border border-[#fb923c]/50 backdrop-blur-md shadow-[0_0_12px_rgba(251,146,60,0.22),0_2px_8px_rgba(0,0,0,0.5)] lg:shadow-[0_0_18px_rgba(251,146,60,0.28),0_4px_16px_rgba(0,0,0,0.6)]"
                    style={{ color: '#fb923c' }}>
                    <svg viewBox="0 0 24 24" className="w-3 h-3 lg:w-4 lg:h-4 shrink-0" fill="currentColor">
                      <path d="M12 2C7 2 3 3.8 3 6v12c0 2.2 4 4 9 4s9-1.8 9-4V6c0-2.2-4-4-9-4zm0 2c4.4 0 7 1.6 7 2s-2.6 2-7 2-7-1.6-7-2 2.6-2 7-2zM5 9.2C6.6 10 9.2 10.5 12 10.5s5.4-.5 7-1.3V12c0 .4-2.6 2-7 2s-7-1.6-7-2V9.2zm0 5.3C6.6 15.3 9.2 16 12 16s5.4-.7 7-1.5V17c0 .4-2.6 2-7 2s-7-1.6-7-2v-2.5z"/>
                    </svg>
                    <span className="text-[8px] lg:text-[11px] font-bold tracking-wide">SQL</span>
                  </div>
                </div>

                {/* 6 — Git  (bottom-right) */}
                <div className="animate-chip-orbit absolute z-20 select-none"
                  style={{ bottom: '6%', right: '0%', animationDuration: '3.4s', animationDelay: '1.8s', '--orbit-dur': '3.4s', '--orbit-delay': '1.8s' }}>
                  <div className="flex items-center gap-1 lg:gap-2 px-1.5 py-1 lg:px-3 lg:py-2 rounded-lg lg:rounded-xl bg-[#0a1628] border border-[#f87171]/50 backdrop-blur-md shadow-[0_0_12px_rgba(248,113,113,0.22),0_2px_8px_rgba(0,0,0,0.5)] lg:shadow-[0_0_18px_rgba(248,113,113,0.28),0_4px_16px_rgba(0,0,0,0.6)]"
                    style={{ color: '#f87171' }}>
                    <svg viewBox="0 0 24 24" className="w-3 h-3 lg:w-4 lg:h-4 shrink-0" fill="currentColor">
                      <path d="M23.5 11.5l-11-11a1.7 1.7 0 00-2.4 0l-2.4 2.4 3 3a2 2 0 012.6 2.6l2.9 2.9a2 2 0 012.6 2.6 2 2 0 01-2 2 2 2 0 01-2-2c0-.3.1-.7.2-1L14 11.7V18a2 2 0 011.2 1.9 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 011.3-1.9v-6.4a2 2 0 01-1.3-1.9 2 2 0 01.2-1L8.5 5.8 1 13.3a1.7 1.7 0 000 2.4l11 11a1.7 1.7 0 002.4 0l9.1-9.1a1.7 1.7 0 000-2.6z"/>
                    </svg>
                    <span className="text-[8px] lg:text-[11px] font-bold tracking-wide">Git</span>
                  </div>
                </div>


              {/* ── Status badge + card — stacked via flex column ─────────── */}
              <div
                className={`relative flex flex-col items-center gap-3 group animate-float
                  w-[220px] sm:w-[260px] md:w-[300px] lg:w-[320px] xl:w-[340px]`}
              >
                {/* Status badge — sits naturally above card, always centered */}
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#060d1f]/90 border border-white/10 backdrop-blur-md select-none whitespace-nowrap">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-status-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400 animate-dot-blink" />
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold text-white/75 tracking-[0.16em] uppercase">Available for Work</span>
                </div>

                {/* Card */}
                <div className="relative w-full">


                {/* Card body */}
                <div className="relative z-10 rounded-[1.5rem] overflow-hidden
                  bg-[#06090f] border border-white/[0.07]
                  group-hover:-translate-y-3 group-hover:scale-[1.015]
                  transition-all duration-700 ease-out">

                  {/* Top prism shine */}
                  <div className="pointer-events-none absolute top-0 inset-x-0 h-px z-20 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 z-10 bg-gradient-to-b from-white/[0.04] to-transparent" />



                  {/* Shimmer sweep */}
                  {!isCoarsePointer && (
                    <div
                      className="animate-shimmer-sweep pointer-events-none absolute inset-x-0 top-0 h-full z-20"
                      style={{
                        background: 'linear-gradient(180deg, transparent 15%, rgba(255,255,255,0.07) 50%, transparent 85%)',
                        willChange: 'transform',
                      }}
                    />
                  )}

                  {/* Profile image */}
                  <img
                    src={`${import.meta.env.BASE_URL}images/me2.jpg`}
                    alt="Software Engineer"
                    className="relative z-10 w-full h-auto block"
                  />

                  {/* Bottom name overlay */}
                  <div className="pointer-events-none absolute bottom-0 inset-x-0 z-20 px-4 pb-4 pt-14 bg-gradient-to-t from-black/85 via-black/40 to-transparent">
                    <p className="text-white text-[10px] sm:text-[11px] font-bold tracking-[0.12em] sm:tracking-[0.15em] uppercase">Chethiya Vishwa</p>
                    <p className="text-cyan/70 text-[7px] sm:text-[9px] tracking-[0.08em] sm:tracking-[0.15em] uppercase mt-0.5 truncate">BSc (Hons) IT for Business Undergraduate</p>
                  </div>
                </div>

                {/* Dot grid — bottom right */}
                {!isCoarsePointer && (
                  <div className="pointer-events-none absolute -bottom-7 -right-7 z-0 grid grid-cols-5 gap-[5px] opacity-25 group-hover:opacity-50 transition-opacity duration-500">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div key={i} className="w-[3px] h-[3px] rounded-full bg-cyan" />
                    ))}
                  </div>
                )}
                </div>{/* /relative w-full card wrapper */}

              </div>{/* /flex-col float wrapper */}
            </div>{/* /outer positioning wrapper */}
          </div>


        </div>
      </div>
    </section>
  );
};

export default HomeSection;

